import TarokkaDeck from '@/lib/TarokkaDeck';
import { GAME_START, SETTINGS } from '@/constants';
import type { GameState, Settings } from '@/types';

export const MODULE_ID = 'tarokka';
const SETTING_KEY = 'gameState';
const SETTING_FQN = `${MODULE_ID}.${SETTING_KEY}`;

const deck = new TarokkaDeck();

export function registerGameState(): void {
	game.settings.register(MODULE_ID, SETTING_KEY, {
		scope: 'world',
		config: false,
		type: Object,
		default: GAME_START,
	});
}

export function getGameState(): GameState {
	return game.settings.get(MODULE_ID, SETTING_KEY) as GameState;
}

// Foundry replicates world-scope setting changes to every connected client
// automatically, so this is the only "network" call the persisted (GM-owned)
// game state needs — no custom socket relay required.
export function onGameStateChange(callback: (state: GameState) => void): () => void {
	const handler = (setting: any) => {
		if ((setting?.key ?? setting) !== SETTING_FQN) return;
		callback(getGameState());
	};

	Hooks.on('updateSetting', handler);

	return () => Hooks.off('updateSetting', handler);
}

function assertGM(): void {
	if (!game.user?.isGM) {
		throw new Error('Only the GM can modify the Tarokka reading.');
	}
}

async function setGameState(state: GameState): Promise<void> {
	state.lastUpdated = Date.now();
	await game.settings.set(MODULE_ID, SETTING_KEY, state);
}

export async function startReading(): Promise<void> {
	assertGM();
	await setGameState({
		started: true,
		cards: deck.getHand(),
		lastUpdated: Date.now(),
		settings: { ...SETTINGS },
	});
}

export async function flipCard(cardIndex: number): Promise<void> {
	assertGM();
	const state = getGameState();
	const card = state.cards[cardIndex];

	if (!card) throw new Error(`Card ${cardIndex} not found`);

	card.flipped = !card.flipped;
	await setGameState(state);
}

export async function redrawCard(cardIndex: number): Promise<void> {
	assertGM();
	const state = getGameState();
	const card = state.cards[cardIndex];

	if (!card) throw new Error(`Card ${cardIndex} not found`);

	state.cards[cardIndex] =
		card.suit === 'High Deck' ? deck.drawHigh(state.cards) : deck.drawLow(state.cards);
	await setGameState(state);
}

export async function selectCard(cardIndex: number, cardID: string): Promise<void> {
	assertGM();
	const state = getGameState();
	const card = state.cards[cardIndex];
	const replacement = deck.select(cardID);

	if (!card) throw new Error(`Card ${cardIndex} not found`);
	if (!replacement) throw new Error(`Card ${cardID} not found`);

	state.cards[cardIndex] = replacement;
	await setGameState(state);
}

export async function updateSettings(settings: Partial<Settings>): Promise<void> {
	assertGM();
	const state = getGameState();
	Object.assign(state.settings, settings);
	await setGameState(state);
}

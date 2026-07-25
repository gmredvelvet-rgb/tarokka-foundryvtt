import { createContext, useContext, useEffect, useRef, useState } from 'react';

import {
	flipCard,
	getGameState,
	onGameStateChange,
	redrawCard,
	selectCard,
	startReading as startReadingAction,
	updateSettings,
} from '@/foundry/state';
import { emitTilt, emitTiltClear, onRemoteTilt, onRemoteTiltClear } from '@/foundry/socket';
import { reduceTilts } from '@/tools';

import { GAME_START, LOCAL_DEFAULTS } from '@/constants';
import type { Dispatch, ReactNode, SetStateAction } from 'react';
import type { GameState, LocalSettings, Settings, Tilt } from '@/types';

const AppContext = createContext<AppContext | undefined>(undefined);

export interface AppContext {
	gameData: GameState;
	isGM: boolean;
	selectCardIndex: number;
	settings: Settings;
	tilts: Tilt[];
	emitFlip: (cardIndex: number) => void;
	emitSettings: (settings: Partial<Settings>) => void;
	emitRedraw: (cardIndex: number) => void;
	emitSelect: (cardID: string) => void;
	emitStartReading: () => void;
	setLocalSettings: Dispatch<SetStateAction<LocalSettings>>;
	setSelectCardIndex: (cardIndex: number) => void;
	setLocalTilt: (tilt: Tilt[]) => void;
}

const emptyTilts = (): Tilt[][] => Array.from({ length: 5 }, () => []);

export function AppProvider({ children }: { children: ReactNode }) {
	const [gameData, setGameData] = useState<GameState>({ ...GAME_START });
	const [localSettings, setLocalSettings] = useState<LocalSettings>(() => ({ ...LOCAL_DEFAULTS }));
	const [selectCardIndex, setSelectCardIndex] = useState(-1);
	const [localTilt, setLocalTilt] = useState<Tilt[]>([]);
	const [remoteTilts, setRemoteTilts] = useState<Tilt[][]>(emptyTilts);
	const remoteTiltsByUser = useRef<Map<string, { cardIndex: number; tilt: Tilt }>>(new Map());

	// Persisted game state: Foundry replicates world-setting changes to every
	// connected client automatically, so this just mirrors that into React state.
	useEffect(() => {
		setGameData(getGameState());

		return onGameStateChange(setGameData);
	}, []);

	// Ephemeral tilt state broadcast by other connected users.
	useEffect(() => {
		const recompute = () => {
			const next = emptyTilts();

			remoteTiltsByUser.current.forEach(({ cardIndex, tilt }, userId) => {
				next[cardIndex] = [...next[cardIndex], { ...tilt, playerID: userId }];
			});

			setRemoteTilts(next);
		};

		onRemoteTilt((userId, cardIndex, tilt) => {
			remoteTiltsByUser.current.set(userId, { cardIndex, tilt });
			recompute();
		});

		onRemoteTiltClear((userId) => {
			remoteTiltsByUser.current.delete(userId);
			recompute();
		});

		return () => {
			onRemoteTilt(null);
			onRemoteTiltClear(null);
		};
	}, []);

	// Broadcast this client's own tilt to everyone else, matching the original
	// app's "remote tilt" permission.
	useEffect(() => {
		if (!localSettings.remoteTilt) return;

		const cardIndex = localTilt.findIndex((tilt) => !!tilt);

		if (localTilt[cardIndex]) {
			emitTilt(cardIndex, localTilt[cardIndex]);
		} else {
			emitTiltClear();
		}
	}, [localTilt, localSettings]);

	const handleSelect = (cardID: string) => {
		const cardIndex = selectCardIndex;
		setSelectCardIndex(-1);

		selectCard(cardIndex, cardID).catch((err) => console.error('Tarokka | select error:', err));
	};

	const isGM = !!game.user?.isGM;
	const settings = { ...gameData.settings, ...localSettings };

	const appInterface: AppContext = {
		gameData,
		isGM,
		selectCardIndex,
		settings,
		tilts: reduceTilts(remoteTilts, localTilt, settings),
		emitFlip: (cardIndex) => {
			flipCard(cardIndex).catch((err) => console.error('Tarokka | flip error:', err));
		},
		emitSettings: (settings) => {
			updateSettings(settings).catch((err) => console.error('Tarokka | settings error:', err));
		},
		emitRedraw: (cardIndex) => {
			redrawCard(cardIndex).catch((err) => console.error('Tarokka | redraw error:', err));
		},
		emitSelect: handleSelect,
		emitStartReading: () => {
			startReadingAction().catch((err) => console.error('Tarokka | start reading error:', err));
		},
		setLocalSettings,
		setSelectCardIndex,
		setLocalTilt,
	};

	return <AppContext.Provider value={appInterface}>{children}</AppContext.Provider>;
}

export function useAppContext(): AppContext {
	const context = useContext(AppContext);
	if (!context) throw new Error('useAppContext must be used within AppProvider');
	return context;
}

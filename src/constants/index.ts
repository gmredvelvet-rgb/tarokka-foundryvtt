export * from '@/constants/tarokka';
export * from '@/constants/tarokkaCards';
export * from '@/constants/time';

import type { GameState, LocalSettings, Settings } from '@/types';

export const SETTINGS: Settings = {
	cardStyle: 'color',
	notes: true,
	positionBack: true,
	positionFront: true,
	prophecy: true,
	tilt: true,
	remoteTilt: true,
};

export const GAME_START: GameState = {
	started: false,
	cards: [],
	lastUpdated: 0,
	settings: SETTINGS,
};

export const LOCAL_DEFAULTS: LocalSettings = {
	tilt: true,
	remoteTilt: true,
};

export const LOCAL_SETTINGS = ['tilt', 'remoteTilt'];

// boolean settings a non-GM player is allowed to toggle (locally, for their own client)
export const PLAYER_SETTINGS = ['tilt', 'remoteTilt'];

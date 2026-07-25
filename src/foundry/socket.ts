import { MODULE_ID } from '@/foundry/state';
import type { Tilt } from '@/types';

const CHANNEL = `module.${MODULE_ID}`;

type TiltMessage = { type: 'tilt'; userId: string; cardIndex: number; tilt: Tilt };
type TiltClearMessage = { type: 'tilt-clear'; userId: string };
type SocketMessage = TiltMessage | TiltClearMessage;

type TiltListener = (userId: string, cardIndex: number, tilt: Tilt) => void;
type TiltClearListener = (userId: string) => void;

let tiltListener: TiltListener | null = null;
let tiltClearListener: TiltClearListener | null = null;

// Foundry automatically relays any "module.<id>" socket event to every other
// connected client (that's what the "socket": true manifest flag enables),
// so this mirrors the original app's ephemeral, non-persisted tilt broadcast
// without needing a dedicated server.
export function registerSocket(): void {
	game.socket.on(CHANNEL, (message: SocketMessage) => {
		if (message.type === 'tilt') {
			tiltListener?.(message.userId, message.cardIndex, message.tilt);
		} else if (message.type === 'tilt-clear') {
			tiltClearListener?.(message.userId);
		}
	});
}

export function onRemoteTilt(listener: TiltListener | null): void {
	tiltListener = listener;
}

export function onRemoteTiltClear(listener: TiltClearListener | null): void {
	tiltClearListener = listener;
}

export function emitTilt(cardIndex: number, tilt: Tilt): void {
	const message: TiltMessage = { type: 'tilt', userId: game.user.id, cardIndex, tilt };
	game.socket.emit(CHANNEL, message);
}

export function emitTiltClear(): void {
	const message: TiltClearMessage = { type: 'tilt-clear', userId: game.user.id };
	game.socket.emit(CHANNEL, message);
}

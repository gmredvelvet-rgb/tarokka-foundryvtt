import '@/index.css';

import { TarokkaApplication } from '@/TarokkaApplication';
import { registerGameState } from '@/foundry/state';
import { registerSocket } from '@/foundry/socket';

const MODULE_ID = 'tarokka';

let appInstance: TarokkaApplication | null = null;

function openTarokka(): void {
	if (!appInstance) appInstance = new TarokkaApplication();
	appInstance.render(true, { focus: true });
}

function exposeApi(): void {
	const mod = game.modules.get(MODULE_ID);
	if (mod) mod.api = { open: openTarokka };
}

Hooks.once('init', () => {
	console.log('Tarokka | init');
	registerGameState();
	exposeApi();
});

Hooks.once('ready', () => {
	console.log('Tarokka | ready');
	registerSocket();
	exposeApi();
});

// Foundry v13 uses a Record<string, SceneControl> (each with a Record<string,
// SceneControlTool> of tools); Foundry v12 and earlier used arrays of both.
// Both shapes are handled here since module.json declares v12 as the floor.
// Wrapped in try/catch so a wrong guess about the exact v13 shape can never
// break the scene controls toolbar for the rest of the game.
Hooks.on('getSceneControlButtons', (controls: any) => {
	try {
		const title = 'TAROKKA.controlName';
		const icon = 'fa-solid fa-clone';

		if (Array.isArray(controls)) {
			controls.push({
				name: 'tarokka',
				title,
				icon,
				layer: 'tarokka',
				visible: true,
				tools: [
					{
						name: 'open',
						title,
						icon,
						button: true,
						onClick: openTarokka,
					},
				],
			});
			return;
		}

		controls.tarokka = {
			name: 'tarokka',
			title,
			icon,
			order: Object.keys(controls).length,
			activeTool: 'open',
			tools: {
				open: {
					name: 'open',
					title,
					icon,
					order: 1,
					button: true,
					onClick: openTarokka,
					onChange: openTarokka,
				},
			},
		};
	} catch (err) {
		console.error('Tarokka | failed to add scene control button:', err);
	}
});

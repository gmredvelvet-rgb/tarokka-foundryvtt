import { createRoot, type Root } from 'react-dom/client';
import App from '@/App';
import { AppProvider } from '@/AppContext';

// Foundry v13 renamed foundry.applications.api.Application to the new
// abstract ApplicationV2 base (it does NOT implement Handlebars template
// rendering and requires _renderHTML/_replaceHTML). The classic v1
// Application we actually want — with `template`, `activateListeners`, etc.
// — was moved to foundry.appv1.api.Application, with the bare `Application`
// global kept only as a deprecated (but functional) alias. Resolve
// defensively so this file never throws at import time — a throw here would
// silently kill the whole module script, including every
// Hooks.once('init'/'ready') registration in main.ts.
const FoundryApplication: any =
	(typeof foundry !== 'undefined' && foundry?.appv1?.api?.Application) ||
	(typeof Application !== 'undefined' ? Application : undefined);

const foundryMergeObject: (original: unknown, other?: unknown) => any =
	(typeof foundry !== 'undefined' && foundry?.utils?.mergeObject) ||
	(typeof mergeObject !== 'undefined' ? mergeObject : (original: unknown, other: unknown) => ({ ...(original as object), ...(other as object) }));

if (!FoundryApplication) {
	throw new Error(
		'Tarokka: could not find a Foundry Application (v1) class (checked foundry.appv1.api.Application and the global Application).',
	);
}

export class TarokkaApplication extends FoundryApplication {
	private root: Root | null = null;

	static get defaultOptions() {
		return foundryMergeObject(super.defaultOptions, {
			id: 'tarokka-app',
			title: game.i18n.localize('TAROKKA.windowTitle'),
			template: 'modules/Tarokka/dist/empty.html',
			width: 920,
			height: 720,
			resizable: true,
			popOut: true,
		});
	}

	activateListeners(html: any): void {
		super.activateListeners(html);

		if (this.root) return;

		const container = this.element[0]?.querySelector('.window-content');
		if (!container) return;

		container.innerHTML = '';
		const mount = document.createElement('div');
		mount.id = 'tarokka-root';
		container.appendChild(mount);

		this.root = createRoot(mount);
		this.root.render(
			<AppProvider>
				<App />
			</AppProvider>,
		);
	}

	async close(options?: Record<string, unknown>): Promise<void> {
		this.root?.unmount();
		this.root = null;
		return super.close(options);
	}
}

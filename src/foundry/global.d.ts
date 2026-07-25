// Minimal ambient declarations for the Foundry VTT client API surface this
// module touches. We intentionally keep these loose (`any`-flavored) rather
// than depending on the full community type package, since only a handful
// of globals are used here.
export {};

declare global {
	const game: any;
	const Hooks: any;
	const foundry: any;
	function mergeObject<T = Record<string, unknown>>(
		original: T,
		other?: Record<string, unknown>,
	): T;

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	class Application {
		static get defaultOptions(): Record<string, unknown>;
		constructor(options?: Record<string, unknown>);
		element: any;
		options: Record<string, unknown>;
		render(force?: boolean, options?: Record<string, unknown>): this;
		close(options?: Record<string, unknown>): Promise<void>;
		activateListeners(html: any): void;
	}
}

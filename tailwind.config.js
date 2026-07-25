// This project is loaded as a Foundry VTT module CSS file, injected globally
// alongside Foundry's own core styles and every other active module's CSS.
// `important` here is used purely as a scoping selector (not `!important`):
// it makes every generated utility require `#tarokka-app` as an ancestor, so
// none of it can ever leak out and affect the rest of Foundry's interface.
export default {
	important: '#tarokka-app',
};

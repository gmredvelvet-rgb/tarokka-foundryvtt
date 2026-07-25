const tarokka = game.modules.get('Tarokka');

if (!tarokka?.active) {
	ui.notifications.error('El módulo Tarokka no está activo. Actívalo en Manage Modules.');
} else if (!tarokka.api?.open) {
	ui.notifications.error('Tarokka está activo pero no expuso su API todavía (¿acabas de activarlo? recarga la página).');
} else {
	tarokka.api.open();
}

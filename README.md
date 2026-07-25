# 🃏 Tarokka

A real-time Tarokka card reading module for **FoundryVTT**, for use with
_Dungeons & Dragons: Curse of Strahd_. It simulates Madam Eva's fortune-telling,
revealing a hero's fate and Strahd's secrets, with live sync between the GM and
every connected player.

Ported from the standalone web app at
[github.com/mcdoh/tarokka](https://github.com/mcdoh/tarokka) into a native
Foundry module. Instead of the original's DM/spectator share links (built for
a public website with no accounts), this module uses one shared reading per
Foundry world: the GM controls it, and every connected player sees the same
table live, using Foundry's own GM/Player roles.

**Compatibility:** FoundryVTT v13 and v14 (verified), v12 minimum.

## Installation

In Foundry, go to **Add-on Modules → Install Module**, and paste this manifest
URL into the bottom field:

```
https://github.com/gmredvelvet-rgb/tarokka-foundryvtt/releases/latest/download/module.json
```

Then enable **Tarokka** in your world's module settings. You can also download
`module.zip` from the [latest release](https://github.com/gmredvelvet-rgb/tarokka-foundryvtt/releases/latest)
and extract it into your `Data/modules/tarokka` folder manually.

## Support

If this module is useful at your table, you can support development here:

- ☕ [Ko-fi](https://ko-fi.com/thegmstudio)
- ❤️ [Patreon](https://patreon.com/gmredvelvet)

## Features

- 🔮 Faithful to the Tarokka deck: all cards and positions used by Madam Eva's reading
  - 💬 Dynamic prophecy text based on card and position
  - 🎨 Three card styles (color, grayscale, standard playing cards)
- 🧙 GM and Player views
  - ⚙️ GM can toggle what information players see (card purpose, prophecy, notes)
  - 🃏 Every action (flipping cards, redrawing, settings changes) is broadcast live
- 🖱️ Real-time 3D tilt effect on hover/touch, shared between connected clients
- 📓 Auto-generated notes panel once the full reading is revealed

## Usage

1. Enable the **Tarokka** module in your world.
2. Click the new Tarokka icon in the scene controls toolbar (left-hand side)
   to open the reading window. It's available to the GM and to players.
3. As the GM, click **Start Reading** to deal the five cards.
4. Click a card to flip it. Hover the top-right corner of a face-down card for
   **Redraw** (draw a new random card of the same deck) or **Select** (pick a
   specific card).
5. Open the gear icon for card style, and to control what players can see.

If the toolbar button doesn't appear for any reason, open the browser console
and run:

```js
game.modules.get('tarokka').api.open();
```

or wire that same call up to a macro.

## Development

This module's UI is a bundled React app (kept close to the original app's
components for visual/behavioral fidelity), built with Vite. The `dist/`
output is committed to the repo since Foundry loads it directly — you don't
need Node.js installed just to use the module.

To make changes:

```bash
npm install
npm run build   # outputs dist/tarokka.js + dist/tarokka.css
```

### Architecture notes

- The dealt hand + GM-configurable settings (`cardStyle`, `notes`,
  `positionFront`/`positionBack`, `prophecy`, `tilt`, `remoteTilt`) live in a
  world-scope Foundry setting (`tarokka.gameState`). Only the GM can write to
  it, and Foundry replicates changes to every connected client automatically —
  see `src/foundry/state.ts`.
- The 3D tilt effect is per-player and not persisted, so it's broadcast over
  Foundry's module socket channel instead (`module.tarokka`) — see
  `src/foundry/socket.ts`.
- `src/TarokkaApplication.tsx` mounts the React app inside a classic Foundry
  `Application` window via `ReactDOM.createRoot()`.

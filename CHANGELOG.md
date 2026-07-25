# Changelog

All notable changes to this module are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.2] - 2026-07-25

### Fixed

- **The reading window would not open for installed users.** The release
  package did not include `dist/empty.html`, the template the window renders
  from, so clicking the Tarokka control (or calling the API) silently failed on
  every Foundry version — v13 and v14 alike. The file is now packaged, and the
  window falls back to an empty mount if the template is ever missing, so this
  can't recur.

## [1.0.1] - 2026-07-24

### Fixed

- Ko-fi and Patreon support buttons were positioned with `fixed` (anchored to
  the viewport) and started collapsed, making them effectively invisible inside
  the Foundry window. They now sit in the bottom-left corner of the reading
  window with their labels always visible.

## [1.0.0] - 2026-07-24

### Added

- Initial public release as a FoundryVTT module (verified on **v13** and **v14**, minimum **v12**).
- Real-time Tarokka card reading for _Curse of Strahd_ with live GM ↔ player sync.
- Full Tarokka deck, all reading positions, and dynamic prophecy text.
- Three card styles: color, grayscale, and standard playing cards.
- GM controls for what players can see (card purpose, prophecy, notes).
- 3D tilt-on-hover effect broadcast between connected clients.
- Auto-generated notes panel once the full reading is revealed.
- Ko-fi and Patreon support links in the reading window.

[1.0.2]: https://github.com/gmredvelvet-rgb/tarokka-foundryvtt/releases/tag/v1.0.2
[1.0.1]: https://github.com/gmredvelvet-rgb/tarokka-foundryvtt/releases/tag/v1.0.1
[1.0.0]: https://github.com/gmredvelvet-rgb/tarokka-foundryvtt/releases/tag/v1.0.0

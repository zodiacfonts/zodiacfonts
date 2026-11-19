# Changelog

All notable changes to the `zodiacfonts` package are documented here.  
Format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).  
Versioning follows [Semantic Versioning](https://semver.org/).

---

## [2.3.0] — 2026-11-19

### Added

- The companion script starts a DOM watcher when it loads. Glyphs in the first HTML are reported on load. Glyphs added later are reported when the DOM settles. `stopZodiacGlyphs()` turns the watcher off.
- The companion script notes an unrecognized `zf-` class on a `.zf` element. A `zf-` class on an element without `.zf` is left alone.

### Changed

- A PRO class and an unrecognized `zf-` class each produce one console note per class name for the page load.
- The PRO glyph console note says the free font version can not draw the glyph. The documentation line starts with "For more information, visit:".

---

## [2.2.0] — 2026-11-14

### Changed

- The CSS family names are `Zodiac Font Sans` and `Zodiac Font Slab`. `.zf` uses `Zodiac Font Sans`.

---

## [2.1.0] — 2026-11-14

### Added

- Helper classes on the icon-font stylesheet. They switch weight or family and do not load a font file. `.zf` remains Sans Regular.
  - `zf-light` is font-weight 300, `zf-regular` is 400, `zf-bold` is 700.
  - `zf-sans` sets the family `Zodiac Fonts`. `zf-slab` sets `Zodiac Slab`.

### Changed

- The PRO glyph note no longer names `ZodiacFontPRO.woff2`. Each purchased PRO font file needs its own `@font-face`. The npm package does not include those files.

---

## [2.0.0] — 2026-10-17

### Changed

- The 55 free SVGs are now filled outlines (`fill="currentColor"`). The website uses the same filled drawing for every symbol, free and Pro. This package still contains only the free 55.
- `fonts/ZodiacFontFREE.woff2` is rebuilt from those outlines.
- The stylesheet lists 72 Pro class stubs. The free set is still 55 symbols.

### Breaking

- These classes and files were renamed. Update HTML, CSS, and imports:

  - `zf-earth` and `icons/main-planets/earth.svg` → `zf-earth-1` and `earth-1.svg`
  - `zf-capricorn` and `icons/signs/capricorn.svg` → `zf-capricorn-2` and `capricorn-2.svg`
  - `zf-uranus` and `icons/main-planets/uranus.svg` → `zf-uranus-1` and `uranus-1.svg`
  - `zf-pluto` and `icons/main-planets/pluto.svg` → `zf-pluto-1` and `pluto-1.svg`

- `stroke` and `stroke-width` no longer change the icon. Color still comes from `currentColor`, through `fill`.

---

## [1.1.1] — 2026-06-20

### Fixed
- Added `./icons/*` and `./fonts/*` wildcard subpath exports to `package.json`.
  Bundlers with strict ESM `exports` enforcement (Vite, webpack 5, Rollup) now
  resolve `import url from 'zodiacfonts/icons/signs/aries.svg'` correctly.

---

## [1.1.0] — 2026-06-20

### Added
- **Icon font layer** — the FREE family (`ZodiacFontFREE.woff2`) is now included in
  the npm tarball and can be used as a web icon font alongside the SVGs.
- `css/zodiac-fonts.css` — `@font-face` + `.zf` base class + all 55 FREE glyph rules +
  46 PRO class stubs (codepoints published; PRO glyphs require a Pro license and
  `ZodiacFontPRO.woff2` to render).
- `css/zodiac-fonts.min.css` — minified version, recommended for production.
- `js/zodiac-fonts.js` — ES module companion script; auto-runs on `DOMContentLoaded`
  in plain HTML and exports `checkZodiacGlyphs()` for SPA frameworks.
- `js/zodiac-fonts.min.js` — minified version.
- `scss/zodiac-fonts.scss` — Sass source with `$zf-font-path` and `$zf-font-family`
  `!default` variables for easy customisation before `@use`.
- `package.json` `exports` map — subpath imports (`zodiacfonts/css`, `zodiacfonts/scss`,
  `zodiacfonts/js`) now resolve correctly in all bundlers.
- `unicode-range` descriptor in `@font-face` — scopes the FREE font to only its 55
  codepoints; prevents fallback interference for unmapped PRO slots.

### Changed
- Repo structure reorganised: generated files moved from root into `css/`, `js/`, and
  `scss/` subdirectories. `fonts/` continues to hold the WOFF2.
- `sideEffects` in `package.json` updated to `["**/*.css", "**/*.scss"]` so bundlers
  do not tree-shake stylesheet imports.

---

## [1.0.0] — 2026-06-06

### Added
- 55 free astrology SVG symbols across 8 categories: zodiac signs, main planets,
  lunar phases, celestial points, dwarf planets & asteroids, houses, major aspects,
  and movements.
- `glyphs.json` — machine-readable manifest with `name`, `reference`,
  `codepoint`, and `file` for every symbol.
- SIL Open Font License 1.1 (`OFL.txt`).

<div align="center">

# Zodiac Fonts — Free Astrology Symbols

Hand-crafted **astrology icons & symbols** as clean, `currentColor`-ready SVG.
Zodiac signs, planets, lunar phases, houses, aspects and more — free for personal and commercial use.

[![License: OFL 1.1](https://img.shields.io/badge/license-OFL--1.1-blue.svg)](./OFL.txt)
[![Website](https://img.shields.io/badge/website-zodiacfonts.com-8A2BE2.svg)](https://www.zodiacfonts.com)
[![Free symbols](https://img.shields.io/badge/free%20symbols-55-2ea44f.svg)](#whats-inside)
[![Documentation](https://img.shields.io/badge/docs-zodiacfonts.com%2Fdocumentation-informational.svg)](https://www.zodiacfonts.com/documentation)

**[Website](https://www.zodiacfonts.com)** · **[Documentation](https://www.zodiacfonts.com/documentation)** · **[Browse all symbols](https://www.zodiacfonts.com)**

</div>

---

> [!NOTE]
> This repository hosts the **Free tier** (55 SVG symbols) so developers can consume Zodiac
> Fonts as a dependency. The full collection — 127 symbols across six installable font
> variants — is **Pro**. See **[zodiacfonts.com/documentation](https://www.zodiacfonts.com/documentation)**
> for the visual reference and Pro integration guide.

**Upgrading from 1.x:** `zf-earth` is now `zf-earth-1`, `zf-capricorn` is `zf-capricorn-2`, `zf-uranus` is `zf-uranus-1`, and `zf-pluto` is `zf-pluto-1`. The SVG filenames changed the same way. Icons are filled shapes, so color comes from `fill`, not `stroke`. See the [changelog](./CHANGELOG.md).

## Table of contents

- [What's inside](#whats-inside)
- [Installation](#installation)
- [Usage](#usage)
- [Icon font](#icon-font)
- [Theming with `currentColor`](#theming-with-currentcolor)
- [Folder structure](#folder-structure)
- [The manifest (`glyphs.json`)](#the-manifest-glyphsjson)
- [Categories](#categories)
- [Upgrading to Pro](#upgrading-to-pro)
- [License](#license)
- [Links](#links)

## What's inside

| | Free _(this repo)_ | Pro _(for purchase)_ |
| --- | --- | --- |
| Symbols | **55** | **127** |
| Format (this package) | SVG ¹ | — _(Pro assets not in this repo)_ |
| Format (on website) | SVG + PNG download ² | PNG preview only ³ |
| Font variants | Sans-serif · Regular | Sans + Slab × Light / Regular / Bold (6) |
| Theming | `currentColor`-ready | `currentColor` + `font-*` |
| License | SIL OFL 1.1 | Pro extended license (EULA) |
| Use | Personal **&** commercial | Personal **&** commercial |

> ¹ **This npm package / repository ships SVG files only** — the 55 free symbols under `icons/`.
> No PNG rasters are bundled here.
>
> ² On **[zodiacfonts.com](https://www.zodiacfonts.com)**, the 55 **free** symbols can be
> downloaded individually as **PNG or SVG** (overview toast) or in bulk via **ZIP bundles** on the
> [download page](https://www.zodiacfonts.com/download) (fonts, SVGs, PNGs — free glyphs only).
>
> ³ **Pro symbols** (72) are shown as **PNG previews** in the browser. Individual PNG and SVG
> downloads are locked until Pro purchase and authentication (coming soon). Pro ZIP bundles are
> not offered yet.

Every SVG is a filled outline on a `0 0 512 512` viewBox with
`fill="currentColor"`, so it inherits color from CSS. `stroke` does not change the icon.

## Installation

**npm** (recommended for apps and design systems)

```bash
npm install zodiacfonts
```

Then reference icons by their package path — no manual file copying needed:

```js
// Vite / webpack / Rollup
import ariesUrl from 'zodiacfonts/icons/signs/aries.svg';

// React + SVGR (renders as a component)
import AriesIcon from 'zodiacfonts/icons/signs/aries.svg?react';

// Node.js / SSR (resolve the file path)
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const ariesPath = require.resolve('zodiacfonts/icons/signs/aries.svg');
```

**Download / clone** (recommended for static sites)

```bash
git clone https://github.com/zodiacfonts/zodiacfonts.git
# or grab a ZIP from the "Code" button / the Releases page
```

**Copy individual files** — every symbol is a standalone `.svg`; just copy the ones you need
from [`icons/`](./icons).

## Usage

> Paths below use the repo-relative form (`icons/signs/aries.svg`) — substitute
> `zodiacfonts/icons/signs/aries.svg` when referencing from an npm install.

### As an image

```html
<img src="icons/signs/aries.svg" alt="Aries" width="48" height="48" />
```

### Inline (so it inherits color)

```html
<span class="zodiac-icon" role="img" aria-label="Aries">
  <!-- contents of icons/signs/aries.svg -->
  <svg viewBox="0 0 512 512" width="48" height="48">
    <path d="…" fill="currentColor" />
  </svg>
</span>
```

### Framework notes

```jsx
// React (Vite / CRA / Next) — import as a URL and use as <img>, or as a component via SVGR
import ariesUrl from 'zodiacfonts/icons/signs/aries.svg';
export const Aries = () => <img src={ariesUrl} alt="Aries" width={48} height={48} />;
```

```vue
<!-- Vue 3 + Vite -->
<template><img :src="aries" alt="Aries" width="48" height="48" /></template>
<script setup>import aries from 'zodiacfonts/icons/signs/aries.svg';</script>
```

```html
<!-- Angular — copy icons/ into your assets and reference by path -->
<img src="assets/zodiac/signs/aries.svg" alt="Aries" width="48" height="48" />
```

## Icon font

Zodiac Fonts ships an optional icon font layer alongside the SVGs, letting you render glyphs with
a single HTML class — no image files or inline SVG required.

### Quick start (CDN)

```html
<!-- Add to your <head> — the font + all glyph classes load automatically -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/zodiacfonts@latest/css/zodiac-fonts.min.css" />

<!-- Render a glyph -->
<i class="zf zf-aries" aria-hidden="true"></i>
<span class="zf zf-moon" aria-label="Moon"></span>
```

### Quick start (npm / self-hosted)

```bash
npm install zodiacfonts
```

```js
// Bundler (Vite, webpack, etc.) — plain CSS
import 'zodiacfonts/css';

// Sass / SCSS projects — override font path if needed
// $zf-font-path: '/your/assets/ZodiacFontFREE.woff2';
@use 'zodiacfonts/scss';
```

Or copy `css/zodiac-fonts.min.css` and the `fonts/` folder to your project and link the CSS manually.

#### Framework notes (icon font)

**Vite-based stacks (React, Vue, Next.js, Nuxt, SvelteKit, etc.)** — the bundler resolves and
copies the `.woff2` from `node_modules` automatically. No extra configuration needed.

**Angular** — the Angular CLI build does not serve files from `node_modules` at runtime.
The SCSS will compile without errors but the font silently 404s. Fix it by adding an asset
glob to `angular.json`:

```json
{
  "glob": "ZodiacFontFREE.woff2",
  "input": "node_modules/zodiacfonts/fonts",
  "output": "assets/zodiacfonts"
}
```

Then override the font path in your SCSS **before** the `@use`:

```scss
$zf-font-path: '/assets/zodiacfonts/ZodiacFontFREE.woff2';
@use 'zodiacfonts/scss';
```

### FREE vs PRO glyphs

The stylesheet ships CSS classes for **all 127 glyphs** — the 55 FREE ones and the 72 PRO stubs.
FREE classes render immediately. PRO classes (marked `/* PRO */` in the source CSS) require
a Pro license and `ZodiacFontPRO.woff2` to be self-hosted alongside `ZodiacFontFREE.woff2`.

See [zodiacfonts.com/documentation](https://www.zodiacfonts.com/documentation) for the Pro
integration guide, character map, and live preview of all 127 glyphs.

### PRO usage detector

Include the optional checker script to get a browser console warning whenever a PRO glyph
class is used without the PRO font loaded. **No code needed** — it runs automatically.

```html
<!-- plain HTML / SSG — add after your CSS link, runs on DOMContentLoaded -->
<script type="module" src="https://cdn.jsdelivr.net/npm/zodiacfonts@latest/js/zodiac-fonts.min.js"></script>
```

```js
// SPA (React, Vue, Angular) — call inside your mount lifecycle
import { checkZodiacGlyphs } from 'zodiacfonts/js';

// React
useEffect(() => { checkZodiacGlyphs(); }, []);

// Vue
onMounted(() => checkZodiacGlyphs());

// Angular
ngOnInit() { checkZodiacGlyphs(); }
```

When a PRO glyph is detected the console shows:

```
[Zodiac Fonts] PRO glyph detected: .zf-ophiuchus
  This glyph requires a Pro license — it will not render with the FREE font.
  Self-host ZodiacFontPRO.woff2 after purchasing a Pro license.
  → https://www.zodiacfonts.com/documentation
```

## Theming with `currentColor`

```css
.zodiac-icon { color: rebeccapurple; }
.zodiac-icon:hover { color: gold; }
```

To recolor an **external** SVG (used via `<img>`, `background`, etc.) without inlining it,
use the CSS mask technique:

```css
.zodiac-icon {
  width: 48px;
  height: 48px;
  background-color: currentColor;            /* glyph color = text color */
  -webkit-mask: url('icons/signs/aries.svg') center / contain no-repeat;
          mask: url('icons/signs/aries.svg') center / contain no-repeat;
}
```

Sizing is just `width` / `height` (or `font-size` when inlined and using `1em` dimensions).

## Folder structure

```
zodiacfonts/
├── fonts/
│   └── ZodiacFontFREE.woff2         icon font (FREE codepoints only)
├── icons/
│   ├── signs/                       aries.svg, taurus.svg, … (12)
│   ├── main-planets/                sun.svg, moon.svg, … (11)
│   ├── lunar/                       new-moon.svg, full-moon.svg, … (8)
│   ├── celestial-points/            north-node.svg, south-node.svg, lilith.svg (3)
│   ├── dwarf-planets-and-asteroids/ chiron.svg (1)
│   ├── houses/                      house-one.svg … medium-coeli.svg (14)
│   ├── major-aspects/               conjunction.svg, trine.svg, … (5)
│   └── movements/                   retrograde.svg (1)
├── css/
│   ├── zodiac-fonts.css             icon font CSS (FREE rules + PRO stubs)
│   └── zodiac-fonts.min.css         minified (recommended for production)
├── js/
│   ├── zodiac-fonts.js              ES module companion script
│   └── zodiac-fonts.min.js          minified
├── scss/
│   └── zodiac-fonts.scss            Sass source with $zf-* override variables
├── glyphs.json                      machine-readable manifest of all 55 symbols
├── OFL.txt                          SIL Open Font License 1.1
├── package.json
└── README.md
```

## The manifest (`glyphs.json`)

Use [`glyphs.json`](./glyphs.json) to generate pickers, sprites, or typed constants:

```js
import manifest from 'zodiacfonts/glyphs.json' assert { type: 'json' };

for (const g of manifest.glyphs) {
  // g.name, g.reference, g.codepoint, g.file
  console.log(g.reference, '→', g.file);
}
```

Each entry: `name`, `reference` (icon class `zf-<reference>` and SVG filename), `codepoint`
(Private Use Area code point used by the icon font) and `file` (repo path).

## Categories

| Category | Free | Pro | Notes |
| --- | ---: | ---: | --- |
| Zodiac Signs | 12 | 6 | Capricorn has three drawings (Modern · Traditional · printed form) |
| Main Planets | 11 | 6 | Earth ×2, Vulcan ×2, Uranus ×2, Pluto ×3 |
| Lunar Symbols | 8 | 4 | Solar & Lunar eclipse (Diagram + Symbolic styles) |
| Celestial Points | 3 | 4 | Includes Part of spirit and East point |
| Dwarf Planets & Asteroids | 1 | 17 | |
| Astrological Houses | 14 | 2 | |
| Major Aspects | 5 | 0 | All free |
| Minor Aspects | 0 | 18 | |
| Classical Elements | 0 | 4 | |
| Planetary Movements | 1 | 3 | Direct, Transiting, Progressed |
| Transneptunian Points | 0 | 8 | Hamburg points: Cupido through Poseidon |
| **Total** | **55** | **72** | **127 symbols total** |

<details>
<summary>Full list of free symbols (55)</summary>

- **Zodiac Signs (12)** — Aries, Taurus, Gemini, Cancer, Leo, Virgo, Libra, Scorpio, Sagittarius, Capricorn (Modern style), Aquarius, Pisces
- **Main Planets (11)** — Sun, Moon, Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus (Modern style), Neptune, Pluto (Traditional style)
- **Lunar Symbols (8)** — New moon, Waxing crescent, First quarter, Waxing gibbous, Full moon, Waning gibbous, Last quarter, Waning crescent
- **Celestial Points (3)** — North node, South node, Lilith
- **Dwarf Planets & Asteroids (1)** — Chiron
- **Astrological Houses (14)** — House One, House Two, House Three, House Four, House Five, House Six, House Seven, House Eight, House Nine, House Ten, House Eleven, House Twelve, Ascendant, Medium Coeli
- **Major Aspects (5)** — Conjunction, Opposition, Square, Trine, Sextile
- **Planetary Movements (1)** — Retrograde

</details>

<details>
<summary>Full list of Pro symbols (72)</summary>

- **Zodiac Signs (6)** — Capricorn (Traditional style), Capricorn, Ophiuchus (13th sign), Cardinal, Fixed, Mutable
- **Main Planets (6)** — Earth, Vulcan, Vulcan, Uranus (Traditional style), Pluto (Modern style), Pluto
- **Lunar Symbols (4)** — Solar eclipse (Diagram style), Solar eclipse (Symbolic style), Lunar eclipse (Diagram style), Lunar eclipse (Symbolic style)
- **Celestial Points (4)** — Wheel of fortune, Part of spirit, Vertex, East point
- **Dwarf Planets & Asteroids (17)** — Ceres, Pallas, Juno, Vesta (Flame symbol), Vesta (Geometric style), Sedna, Makemake, Haumea, Eris (Symbolic style), Eris (Alternative style), Proserpine, Hygiea, Comet, Pholus, Gonggong, Quaoar, Orcus
- **Astrological Houses (2)** — Imum Coeli, Descendant
- **Planetary Movements (3)** — Direct, Transiting, Progressed
- **Minor Aspects (18)** — Semi-sextile, Inconjunct, Semi-square, Septile, Bi-septile, Tri-septile, Sesquiquadrate, Quintile (Pentagon style), Quintile (Q-notation style), Biquintile (Letter notation), Biquintile (Geometric style), Novile, Bi-novile, Quatro-novile, Parallel, Contra-parallel, Decile, Quindecile
- **Classical Elements (4)** — Fire, Air, Earth, Water
- **Transneptunian Points (8)** — Cupido, Hades, Zeus, Kronos, Apollon, Admetos, Vulcanus, Poseidon

</details>

> Several symbols include more than one drawing: **Capricorn** (three), **Earth** (two), **Vulcan** (two), **Uranus** (Modern + Traditional), **Pluto** (three), **Eris** (Symbolic + Alternative), **Vesta** (Flame + Geometric), **Quintile** (two), and **Biquintile** (two).

## Downloads on zodiacfonts.com

This package is for **developers** who want SVG files, CSS/SCSS, or the free icon font in their
projects. For **end-user downloads** (PNG rasters, ZIP bundles, full font packages), use the
website:

| What | Free tier (55 symbols) | Pro tier (72 symbols) |
| --- | --- | --- |
| Browse / preview | PNG in the gallery | PNG preview only |
| Individual download | PNG + SVG | Locked until Pro purchase |
| ZIP bundles | [Download page](https://www.zodiacfonts.com/download) | Coming soon |

The free PNG and SVG ZIP archives contain **only the 55 free glyphs** — Pro assets are never
included in free bundles.

## Upgrading to Pro

Pro unlocks all **127** symbols plus the complete, installable font families
(Sans-serif & Slab-serif × Light / Regular / Bold — 6 variants total). The easiest way to render astrology charts
is to register the fonts with `@font-face` and type the mapped characters.

Pro adds 72 additional symbols across all 11 categories — including all Minor Aspects, Classical Elements,
transneptunian points, both eclipse variants, extra drawings for Capricorn, Earth, Vulcan, Uranus and Pluto, and rare asteroids.
See the full list in the [Pro symbols section](#categories) above.

Full Pro integration guidance, the character map and live previews:
**[zodiacfonts.com/documentation](https://www.zodiacfonts.com/documentation)**.

## License

The free Zodiac Fonts symbols are released under the **SIL Open Font License, Version 1.1**
with Reserved Font Name **"Zodiac"** — see [`OFL.txt`](./OFL.txt).

You may use, study, modify and redistribute them, including commercially. The Font Software
may not be sold by itself, and derivatives must not use the Reserved Font Name. Documents and
artwork created with the symbols are unrestricted.

## Links

- Website — https://www.zodiacfonts.com
- Documentation & Pro guide — https://www.zodiacfonts.com/documentation
- Interactive symbol browser — https://www.zodiacfonts.com

---

<div align="center">
Crafted with ♡ for the cosmos · © Zodiac Fonts
</div>

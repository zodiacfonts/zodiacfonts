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
> Fonts as a dependency. The full collection — 101 symbols across six installable font
> variants — is **Pro**. See **[zodiacfonts.com/documentation](https://www.zodiacfonts.com/documentation)**
> for the visual reference and Pro integration guide.

## Table of contents

- [What's inside](#whats-inside)
- [Installation](#installation)
- [Usage](#usage)
- [Theming with `currentColor`](#theming-with-currentcolor)
- [Folder structure](#folder-structure)
- [The manifest (`glyphs.json`)](#the-manifest-glyphsjson)
- [Categories](#categories)
- [Upgrading to Pro](#upgrading-to-pro)
- [License](#license)
- [Links](#links)

## What's inside

| | Free _(this repo)_ | Pro |
| --- | --- | --- |
| Symbols | **55** | **101** |
| Format | SVG (+ PNG on the site) | SVG, PNG **and** installable fonts |
| Font variants | Sans-serif · Regular | Sans + Slab × Light / Regular / Bold (6) |
| Theming | `currentColor`-ready | `currentColor` + `font-*` |
| License | SIL OFL 1.1 | Pro extended license (EULA) |
| Use | Personal **&** commercial | Personal **&** commercial |

Every SVG is normalized to a `0 0 512 512` viewBox and drawn with
`fill="none" stroke="currentColor"`, so it inherits color from CSS out of the box.

## Installation

**npm** (recommended for apps and design systems)

```bash
npm install zodiacfonts
# symbols are then available under node_modules/zodiacfonts/icons/<category>/<name>.svg
```

**Download / clone** (recommended for static sites)

```bash
git clone https://github.com/zodiacfonts/zodiacfonts.git
# or grab a ZIP from the "Code" button / the Releases page
```

**Copy individual files** — every symbol is a standalone `.svg`; just copy the ones you need
from [`icons/`](./icons).

## Usage

### As an image

```html
<img src="icons/signs/aries.svg" alt="Aries" width="48" height="48" />
```

### Inline (so it inherits color)

```html
<span class="zodiac-icon" role="img" aria-label="Aries">
  <!-- contents of icons/signs/aries.svg -->
  <svg viewBox="0 0 512 512" width="48" height="48">
    <path d="…" fill="none" stroke="currentColor" stroke-width="32" />
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

## Theming with `currentColor`

Because the strokes use `currentColor`, an **inlined** SVG follows the CSS `color` property:

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
├── icons/
│   ├── signs/                       aries.svg, taurus.svg, … (12)
│   ├── main-planets/                sun.svg, moon.svg, … (11)
│   ├── lunar/                       new-moon.svg, full-moon.svg, … (8)
│   ├── celestial-points/            north-node.svg, south-node.svg, lilith.svg (3)
│   ├── dwarf-planets-and-asteroids/ chiron.svg (1)
│   ├── houses/                      house-one.svg … medium-coeli.svg (14)
│   ├── major-aspects/               conjunction.svg, trine.svg, … (5)
│   └── movements/                   retrograde.svg (1)
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
  // g.name, g.slug, g.reference, g.codepoint, g.file
  console.log(g.slug, '→', g.file);
}
```

Each entry: `name`, `slug` (filename), `reference` (source id), `codepoint` (Private Use Area
code point used by the icon font) and `file` (repo path).

## Categories

| Category | Free symbols |
| --- | ---: |
| Signs | 12 |
| Main planets | 11 |
| Lunar phases | 8 |
| Celestial points | 3 |
| Dwarf planets & asteroids | 1 |
| Houses | 14 |
| Major aspects | 5 |
| Movements | 1 |
| **Total** | **55** |

<details>
<summary>Full list of free symbols</summary>

- **Signs** — aries, taurus, gemini, cancer, leo, virgo, libra, scorpio, sagittarius, capricorn, aquarius, pisces
- **Main planets** — sun, moon, mercury, venus, earth, mars, jupiter, saturn, uranus, neptune, pluto
- **Lunar** — new-moon, waxing-crescent, first-quarter, waxing-gibbous, full-moon, waning-gibbous, last-quarter, waning-crescent
- **Celestial points** — north-node, south-node, lilith
- **Dwarf planets & asteroids** — chiron
- **Houses** — house-one … house-twelve, ascendant, medium-coeli
- **Major aspects** — conjunction, opposition, square, trine, sextile
- **Movements** — retrograde

</details>

> Premium symbols (elements, minor aspects, extra asteroids, lunar/solar eclipses and more)
> are part of **Pro** and are intentionally not included here.

## Upgrading to Pro

Pro unlocks all **101** symbols plus the complete, installable font families
(Sans-serif & Slab-serif × Light / Regular / Bold). The easiest way to render astrology charts
is to register the fonts with `@font-face` and type the mapped characters.

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

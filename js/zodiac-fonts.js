/**
 * zodiac-fonts.js — Zodiac Fonts companion script
 * Part of Zodiac Fonts · https://www.zodiacfonts.com
 * Generated — do not edit by hand.
 *
 * Usage (plain HTML / SSG — runs automatically on DOMContentLoaded):
 *   <script type="module" src="zodiac-fonts.js"></script>
 *
 * Usage (SPA — React, Vue, Angular — call inside your mount lifecycle):
 *   import { checkZodiacGlyphs } from './zodiac-fonts.js';
 *   checkZodiacGlyphs();
 */

/** Slugs of all PRO glyphs (generated from glyphs-list.json). */
const PRO_SLUGS = new Set(["capricorn-1", "ophiuchus", "sign-cardinal", "sign-fixed", "sign-mutable", "uranus-2", "pluto-2", "solar-eclipse-1", "lunar-eclipse-1", "solar-eclipse-2", "lunar-eclipse-2", "wheel-of-fortune", "vertex", "ceres", "pallas", "juno", "vesta-1", "vesta-2", "comet", "sedna", "makemake", "haumea", "proserpine", "hygiea", "eris-1", "eris-2", "imum-coeli", "descendant", "semi-sextile", "inconjunct", "semi-square", "septile", "sesquiquadrate", "quintile-2", "quintile", "biquintile", "biquintile-2", "novile", "parallel", "contra-parallel", "decile", "element-fire", "element-air", "element-earth", "element-water", "direct"]);
const DOCS_URL = 'https://www.zodiacfonts.com/documentation';

/**
 * Scans the document for elements using PRO glyph classes and emits a
 * console warning for each one found. Safe to call multiple times.
 * No-op in SSR / non-browser environments.
 */
export function checkZodiacGlyphs() {
  if (typeof document === 'undefined') return; // SSR guard
  document.querySelectorAll('.zf').forEach(function (el) {
    el.classList.forEach(function (cls) {
      if (cls.startsWith('zf-') && PRO_SLUGS.has(cls.slice(3))) {
        console.warn(
          '[Zodiac Fonts] PRO glyph detected: .' + cls + '\n' +
          '  This glyph requires a Pro license — it will not render with the FREE font.\n' +
          '  Self-host ZodiacFontPRO.woff2 after purchasing a Pro license.\n' +
          '  \u2192 ' + DOCS_URL,
        );
      }
    });
  });
}

// Auto-run on plain HTML pages — no adaptor effort needed.
// In bundled SPA apps, call checkZodiacGlyphs() manually inside your
// framework's mount lifecycle (useEffect, onMounted, ngOnInit, etc.).
if (typeof document !== 'undefined') {
  var run = function () { checkZodiacGlyphs(); };
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', run);
  } else {
    run(); // script loaded after DOM is ready (e.g. deferred or dynamic import)
  }
}

/**
 * zodiac-fonts.js — Zodiac Fonts companion script
 * Part of Zodiac Fonts · https://www.zodiacfonts.com
 * Generated — do not edit by hand.
 *
 * The script starts a watcher when it loads. Glyphs in the first HTML are
 * reported on load. Glyphs added later are reported when the DOM settles.
 * One warning per PRO class for the page.
 *
 *   <script type="module" src="zodiac-fonts.js"></script>
 *   import 'zodiacfonts/js';
 *
 * stopZodiacGlyphs() disconnects the watcher. After that, checkZodiacGlyphs()
 * sees only the icons present at the call.
 */

/** PRO glyph references (generated from glyphs-list.json). */
const PRO_REFERENCES = new Set(["capricorn-1", "ophiuchus", "sign-cardinal", "sign-fixed", "sign-mutable", "capricorn-3", "uranus-2", "pluto-2", "pluto-3", "vulcan-1", "vulcan-2", "earth-2", "solar-eclipse-1", "lunar-eclipse-1", "solar-eclipse-2", "lunar-eclipse-2", "wheel-of-fortune", "vertex", "part-of-spirit", "east-point", "ceres", "pallas", "juno", "vesta-1", "vesta-2", "comet", "sedna", "makemake", "haumea", "proserpine", "hygiea", "eris-1", "eris-2", "pholus", "gonggong", "quaoar", "orcus", "imum-coeli", "descendant", "semi-sextile", "inconjunct", "semi-square", "septile", "sesquiquadrate", "quintile-2", "quintile-1", "biquintile-1", "biquintile-2", "novile", "parallel", "contra-parallel", "decile", "bi-septile", "tri-septile", "bi-novile", "quatro-novile", "quindecile", "element-fire", "element-air", "element-earth", "element-water", "direct", "transiting", "progressed", "cupido", "hades", "zeus", "kronos", "apollon", "admetos", "vulcanus", "poseidon"]);
/** Free glyph names, PRO glyph names, and the helper classes. */
const KNOWN_REFERENCES = new Set(["aries", "cancer", "libra", "capricorn-2", "taurus", "leo", "scorpio", "aquarius", "gemini", "virgo", "sagittarius", "pisces", "earth-1", "sun", "moon", "mercury", "venus", "mars", "jupiter", "saturn", "uranus-1", "neptune", "pluto-1", "new-moon", "waxing-crescent", "first-quarter", "waxing-gibbous", "full-moon", "waning-gibbous", "last-quarter", "waning-crescent", "north-node", "south-node", "lilith", "chiron", "house-one", "house-two", "house-three", "house-four", "house-five", "house-six", "house-seven", "house-eight", "house-nine", "house-ten", "house-eleven", "house-twelve", "ascendant", "medium-coeli", "conjunction", "opposition", "square", "trine", "sextile", "retrograde", "capricorn-1", "ophiuchus", "sign-cardinal", "sign-fixed", "sign-mutable", "capricorn-3", "uranus-2", "pluto-2", "pluto-3", "vulcan-1", "vulcan-2", "earth-2", "solar-eclipse-1", "lunar-eclipse-1", "solar-eclipse-2", "lunar-eclipse-2", "wheel-of-fortune", "vertex", "part-of-spirit", "east-point", "ceres", "pallas", "juno", "vesta-1", "vesta-2", "comet", "sedna", "makemake", "haumea", "proserpine", "hygiea", "eris-1", "eris-2", "pholus", "gonggong", "quaoar", "orcus", "imum-coeli", "descendant", "semi-sextile", "inconjunct", "semi-square", "septile", "sesquiquadrate", "quintile-2", "quintile-1", "biquintile-1", "biquintile-2", "novile", "parallel", "contra-parallel", "decile", "bi-septile", "tri-septile", "bi-novile", "quatro-novile", "quindecile", "element-fire", "element-air", "element-earth", "element-water", "direct", "transiting", "progressed", "cupido", "hades", "zeus", "kronos", "apollon", "admetos", "vulcanus", "poseidon", "light", "regular", "bold", "sans", "slab"]);
const DOCS_URL = 'https://www.zodiacfonts.com/documentation';
var DEBOUNCE_MS = 80;
var MAX_WAIT_MS = 500;

/** PRO class names and unrecognized class names already reported this page load. */
var warnedPro = new Set();
var warnedUnknown = new Set();

var glyphObserver = null;
var debounceTimer = null;
var maxWaitTimer = null;
var bootListener = null;
var bootCancelled = false;

function noop() {}

/**
 * Scans elements that use the Zodiac Fonts base class (.zf).
 * One PRO warning per class name for the page load.
 * One unrecognized note per class name for the page load.
 * Elements without .zf are left alone.
 * Safe to call many times. No-op in SSR / non-browser environments.
 */
export function checkZodiacGlyphs() {
  if (typeof document === 'undefined') return; // SSR guard
  document.querySelectorAll('.zf').forEach(function (el) {
    el.classList.forEach(function (cls) {
      if (!cls.startsWith('zf-')) return;
      var name = cls.slice(3);
      if (PRO_REFERENCES.has(name)) {
        if (warnedPro.has(name)) return;
        warnedPro.add(name);
        console.warn(
          '[Zodiac Fonts] PRO glyph detected: .' + cls + '\n' +
          '  The free font version can not draw this glyph.\n' +
          '  For more information, visit: \u2192 ' + DOCS_URL,
        );
        return;
      }
      if (KNOWN_REFERENCES.has(name) || warnedUnknown.has(name)) return;
      warnedUnknown.add(name);
      console.warn(
        '[Zodiac Fonts] Unrecognized class on a .zf element: .' + cls + '\n' +
        '  This class is not a glyph or a helper class in this package.\n' +
        '  If this class belongs to your own stylesheet, you can ignore this note.\n' +
        '  For more information, visit: \u2192 ' + DOCS_URL,
      );
    });
  });
}

function flushScan() {
  if (debounceTimer !== null) {
    clearTimeout(debounceTimer);
    debounceTimer = null;
  }
  if (maxWaitTimer !== null) {
    clearTimeout(maxWaitTimer);
    maxWaitTimer = null;
  }
  checkZodiacGlyphs();
}

// 80 ms after the last mutation. At least every 500 ms while mutations continue.
function scheduleScan() {
  if (debounceTimer !== null) clearTimeout(debounceTimer);
  debounceTimer = setTimeout(flushScan, DEBOUNCE_MS);
  if (maxWaitTimer === null) maxWaitTimer = setTimeout(flushScan, MAX_WAIT_MS);
}

/**
 * Scans now and watches childList changes under root, or documentElement.
 * One observer per page. The first root wins. No-op without document.
 */
export function watchZodiacGlyphs(root) {
  if (typeof document === 'undefined') return noop;
  if (glyphObserver) return stopZodiacGlyphs;
  checkZodiacGlyphs();
  var target = root && root.nodeType === 1 ? root : document.documentElement;
  glyphObserver = new MutationObserver(function () {
    scheduleScan();
  });
  glyphObserver.observe(target, { childList: true, subtree: true });
  return stopZodiacGlyphs;
}

/** Disconnects the watcher and cancels a boot that has not attached yet. */
export function stopZodiacGlyphs() {
  bootCancelled = true;
  if (typeof document !== 'undefined' && bootListener) {
    document.removeEventListener('DOMContentLoaded', bootListener);
    bootListener = null;
  }
  if (glyphObserver) {
    glyphObserver.disconnect();
    glyphObserver = null;
  }
  if (debounceTimer !== null) {
    clearTimeout(debounceTimer);
    debounceTimer = null;
  }
  if (maxWaitTimer !== null) {
    clearTimeout(maxWaitTimer);
    maxWaitTimer = null;
  }
}

// The script tag and the npm import both start the watcher.
if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    bootListener = function () {
      bootListener = null;
      if (bootCancelled) return;
      watchZodiacGlyphs();
    };
    document.addEventListener('DOMContentLoaded', bootListener);
  } else {
    watchZodiacGlyphs();
  }
}

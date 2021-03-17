/**
 * normalize.css v8.0.1 | MIT License
 * @see https://github.com/necolas/normalize.css
 *
 * Browser support
 * ---------------
 * - Chrome
 * - Edge
 * - Firefox ESR+
 * - Internet Explorer 10+
 * - Safari 8+
 * - Opera
 */

import { AnyReset } from './any-reset'

/* Document
   ========================================================================== */

export const htmlReset: AnyReset = {
  /**
   * 1. Correct the line height in all browsers.
   * 2. Prevent adjustments of font size after orientation changes in iOS.
   */
  lineHeight: 1.15 /* 1 */,
  WebkitTextSizeAdjust: '100%' /* 2 */,
}

/* Sections
   ========================================================================== */

export const bodyReset: AnyReset = {
  /**
   * Remove the margin in all browsers.
   */
  margin: 0,
}

const mainReset: AnyReset = {
  /**
   * Render the `main` element consistently in IE.
   */
  display: 'block',
}

const h1Reset: AnyReset = {
  /**
   * Correct the font size and margin on `h1` elements within `section` and
   * `article` contexts in Chrome, Firefox, and Safari.
   */
  fontSize: '2em',
  margin: '0.67em 0',
}

/* Grouping content
   ========================================================================== */

const hrReset: AnyReset = {
  /**
   * 1. Add the correct box sizing in Firefox.
   * 2. Show the overflow in Edge and IE.
   */
  boxSizing: 'content-box' /* 1 */,
  height: 0 /* 1 */,
  overflow: 'visible' /* 2 */,
}

const preReset: AnyReset = {
  /**
   * 1. Correct the inheritance and scaling of font size in all browsers.
   * 2. Correct the odd `em` font sizing in all browsers.
   */
  fontFamily: 'monospace, monospace' /* 1 */,
  fontSize: '1em' /* 2 */,
}

/* Text-level semantics
   ========================================================================== */

const aReset: AnyReset = {
  /**
   * Remove the gray background on active links in IE 10.
   */
  backgroundColor: 'transparent',
}

const abbrReset: AnyReset = {
  /**
   * 1. Remove the bottom border in Chrome 57-
   * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.
   */
  '&[title]': {
    borderBottom: 'none' /* 1 */,
    textDecoration: 'underline dotted' /* 2 */,
  },
}

const strongReset: AnyReset = {
  /**
   * Add the correct font weight in Chrome, Edge, and Safari.
   */
  fontWeight: 'bolder',
}

const codeReset: AnyReset = {
  /**
   * 1. Correct the inheritance and scaling of font size in all browsers.
   * 2. Correct the odd `em` font sizing in all browsers.
   *
   * - code
   * - kbd
   * - samp
   */
  fontFamily: 'monospace, monospace' /* 1 */,
  fontSize: '1em' /* 2 */,
}

const smallReset: AnyReset = {
  /**
   * Add the correct font size in all browsers.
   */
  fontSize: '80%',
}

const subSupReset: AnyReset = {
  /**
   * Prevent `sub` and `sup` elements from affecting the line height in
   * all browsers.
   */
  fontSize: '75%',
  lineHeight: 0,
  position: 'relative',
  verticalAlign: 'baseline',
}

const subReset: AnyReset = {
  ...subSupReset,
  bottom: '-0.25em',
}

const supReset: AnyReset = {
  ...subSupReset,
  top: '-0.5em',
}

/* Embedded content
   ========================================================================== */

const imgReset: AnyReset = {
  /**
   * Remove the border on images inside links in IE 10.
   */
  borderStyle: 'none',
}

/* Forms
   ========================================================================== */

const formsReset: AnyReset = {
  /**
   * 1. Change the font styles in all browsers.
   * 2. Remove the margin in Firefox and Safari.
   *
   * - button
   * - input
   * - optgroup
   * - select
   * - textarea
   */
  fontFamily: 'inherit' /* 1 */,
  fontSize: '100%' /* 1 */,
  lineHeight: 1.15 /* 1 */,
  margin: 0 /* 2 */,
}

const buttonReset: AnyReset = {
  ...formsReset,
  /**
   * Show the overflow in IE.
   */
  overflow: 'visible',
  /**
   * Remove the inheritance of text transform in Edge, Firefox, and IE.
   */
  textTransform: 'none',
  /**
   * Correct the inability to style clickable types in iOS and Safari.
   */
  WebkitAppearance: 'button',
  '&[type="button"], &[type="reset"], &[type="submit"]': {
    WebkitAppearance: 'button',
  },
  /**
   * Remove the inner border and padding in Firefox.
   */
  '&::-moz-focus-inner, &[type="button"]::-moz-focus-inner, &[type="reset"]::-moz-focus-inner, &[type="submit"]::-moz-focus-inner': {
    borderStyle: 'none',
    padding: 0,
  },
  /**
   * Restore the focus styles unset by the previous rule.
   */
  '&:-moz-focusring, &[type="button"]:-moz-focusring, &[type="reset"]:-moz-focusring, &[type="submit"]:-moz-focusring': {
    outline: '1px dotted ButtonText',
  },
}

const inputReset: AnyReset = {
  ...formsReset,
  /**
   * Show the overflow in IE.
   * 1. Show the overflow in Edge.
   */
  overflow: 'visible' /* 1 */,
  /**
   * 1. Add the correct box sizing in IE 10.
   * 2. Remove the padding in IE 10.
   */
  '&[type="checkbox"], &[type="radio"]': {
    boxSizing: 'border-box' /* 1 */,
    padding: 0 /* 2 */,
  },
  /**
   * Correct the cursor style of increment and decrement buttons in Chrome.
   */
  '&[type="number"]::-webkit-inner-spin-button, &[type="number"]::-webkit-outer-spin-button': {
    height: 'auto',
  },
  /**
   * 1. Correct the odd appearance in Chrome and Safari.
   * 2. Correct the outline style in Safari.
   */
  '&[type="search"]': {
    WebkitAppearance: 'textfield' /* 1 */,
    outlineOffset: -2 /* 2 */,
  },
  /**
   * Remove the inner padding in Chrome and Safari on macOS.
   */
  '&[type="search"]::-webkit-search-decoration': {
    WebkitAppearance: 'none',
  },
  /**
   * 1. Correct the inability to style clickable types in iOS and Safari.
   * 2. Change font properties to `inherit` in Safari.
   */
  '&::-webkit-file-upload-button': {
    WebkitAppearance: 'button' /* 1 */,
    font: 'inherit' /* 2 */,
  },
}

const selectReset: AnyReset = {
  ...formsReset,
  /**
   * Remove the inheritance of text transform in Edge, Firefox, and IE.
   * 1. Remove the inheritance of text transform in Firefox.
   */
  textTransform: 'none' /* 1 */,
}

const fieldsetReset: AnyReset = {
  /**
   * Correct the padding in Firefox.
   */
  padding: '0.35em 0.75em 0.625em',
}

const legendReset: AnyReset = {
  /**
   * 1. Correct the text wrapping in Edge and IE.
   * 2. Correct the color inheritance from `fieldset` elements in IE.
   * 3. Remove the padding so developers are not caught out when they zero out
   *    `fieldset` elements in all browsers.
   */
  boxSizing: 'border-box' /* 1 */,
  color: 'inherit' /* 2 */,
  display: 'table' /* 1 */,
  maxWidth: '100%' /* 1 */,
  padding: 0 /* 3 */,
  whiteSpace: 'normal' /* 1 */,
}

const progressReset: AnyReset = {
  /**
   * Add the correct vertical alignment in Chrome, Firefox, and Opera.
   */
  verticalAlign: 'baseline',
}

const textareaReset: AnyReset = {
  ...formsReset,
  /**
   * Remove the default vertical scrollbar in IE 10+.
   */
  overflow: 'auto',
}

/* Interactive
   ========================================================================== */

const detailsReset: AnyReset = {
  /*
   * Add the correct display in Edge, IE 10+, and Firefox.
   */
  display: 'block',
}

const summaryReset: AnyReset = {
  /*
   * Add the correct display in all browsers.
   */
  display: 'list-item',
}

/* Misc
   ========================================================================== */

const templateReset: AnyReset = {
  /**
   * Add the correct display in IE 10+.
   */
  display: 'none',
}

export const hiddenReset: AnyReset = {
  /**
   * Add the correct display in IE 10.
   */
  '[hidden]': {
    display: 'none',
  },
}

/**
 * Element reset map
 */

export type ElementResetMap = {
  a: AnyReset
  abbr: AnyReset
  b: AnyReset
  body: AnyReset
  button: AnyReset
  code: AnyReset
  details: AnyReset
  fieldset: AnyReset
  h1: AnyReset
  hr: AnyReset
  html: AnyReset
  img: AnyReset
  input: AnyReset
  kbd: AnyReset
  legend: AnyReset
  main: AnyReset
  optgroup: AnyReset
  pre: AnyReset
  progress: AnyReset
  samp: AnyReset
  select: AnyReset
  small: AnyReset
  strong: AnyReset
  sub: AnyReset
  summary: AnyReset
  sup: AnyReset
  template: AnyReset
  textarea: AnyReset
}

export type ElementResetName = keyof ElementResetMap

export const elementResetMap = {
  a: aReset,
  abbr: abbrReset,
  b: strongReset,
  body: bodyReset,
  button: buttonReset,
  code: codeReset,
  details: detailsReset,
  fieldset: fieldsetReset,
  h1: h1Reset,
  hr: hrReset,
  html: htmlReset,
  img: imgReset,
  input: inputReset,
  kbd: codeReset,
  legend: legendReset,
  main: mainReset,
  optgroup: formsReset,
  pre: preReset,
  progress: progressReset,
  samp: codeReset,
  select: selectReset,
  small: smallReset,
  strong: strongReset,
  sub: subReset,
  summary: summaryReset,
  sup: supReset,
  template: templateReset,
  textarea: textareaReset,
}

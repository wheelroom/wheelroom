import { NcssProps } from '../types'

export interface ParagraphPreset {
  ncss: NcssProps
}

export const paragraphPreset: ParagraphPreset = {
  ncss: {
    boxSizing: 'border-box',
    fontFamily: 'text',
  },
}

export const smallPreset: ParagraphPreset = {
  ncss: {
    /**
     * Add the correct font size in all browsers.
     */
    fontSize: '80%',
  },
}

export const subResetPreset = {
  ncss: {
    /**
     * Prevent `sub` and `sup` elements from affecting the line height in
     * all browsers.
     */
    fontSize: '75%',
    lineHeight: '0',
    position: 'relative',
    verticalAlign: 'baseline',
  },
}

export const subPreset: ParagraphPreset = {
  ncss: {
    bottom: '-0.25em',
  },
}

export const supPreset: ParagraphPreset = {
  ncss: {
    top: '-0.5em',
  },
}

import { NcssProps } from '../../types'

export interface ParagraphElementStyle {
  ncss: NcssProps
}

export const paragraphReset: ParagraphElementStyle = {
  ncss: {
    boxSizing: 'border-box',
    fontFamily: 'text',
  },
}

export const smallReset: ParagraphElementStyle = {
  ncss: {
    // Add the correct font size in all browsers.
    ...paragraphReset.ncss,
    fontSize: '80%',
  },
}

export const subSupReset = {
  ncss: {
    // Prevent `sub` and `sup` elements from affecting the line height in all
    // browsers.
    ...paragraphReset.ncss,
    fontSize: '75%',
    lineHeight: '0',
    position: 'relative',
    verticalAlign: 'baseline',
  },
}

export const subReset: ParagraphElementStyle = {
  ncss: {
    ...subSupReset.ncss,
    bottom: '-0.25em',
  },
}

export const supReset: ParagraphElementStyle = {
  ncss: {
    ...subSupReset.ncss,
    top: '-0.5em',
  },
}

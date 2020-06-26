import { NcssNode } from '../../lib/ncss'

export const paragraphReset: NcssNode = {
  ncss: {
    boxSizing: 'border-box',
    fontFamily: 'text',
  },
}

export const smallReset: NcssNode = {
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

export const subReset: NcssNode = {
  ncss: {
    ...subSupReset.ncss,
    bottom: '-0.25em',
  },
}

export const supReset: NcssNode = {
  ncss: {
    ...subSupReset.ncss,
    top: '-0.5em',
  },
}

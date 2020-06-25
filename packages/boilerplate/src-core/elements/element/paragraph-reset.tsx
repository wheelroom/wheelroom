import { NcssObjectProps } from '../../lib/ncss'

export const paragraphReset: NcssObjectProps = {
  ncss: {
    boxSizing: 'border-box',
    fontFamily: 'text',
  },
}

export const smallReset: NcssObjectProps = {
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

export const subReset: NcssObjectProps = {
  ncss: {
    ...subSupReset.ncss,
    bottom: '-0.25em',
  },
}

export const supReset: NcssObjectProps = {
  ncss: {
    ...subSupReset.ncss,
    top: '-0.5em',
  },
}

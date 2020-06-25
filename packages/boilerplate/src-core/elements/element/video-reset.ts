import { NcssObjectProps } from '../../lib/ncss'

export const videoVideoElementStyle: NcssObjectProps = {
  ncss: {
    // Video poster need to cover the whole video element
    objectFit: 'cover',
    height: 'auto',
    width: '100%',
    '&:focus': {
      outlineColor: 'black',
      outlineOffset: 4,
      outlineWidth: 2,
      outlineStyle: 'dotted',
    },
  },
}

export const videoDescriptionReset: NcssObjectProps = {
  ncss: {
    boxSizing: 'border-box',
    fontFamily: 'text',
  },
}

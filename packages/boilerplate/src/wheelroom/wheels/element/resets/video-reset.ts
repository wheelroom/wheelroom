import { NcssProps } from '../../types'

export interface VideoElementStyle {
  ncss: NcssProps
}

export const videoVideoElementStyle: VideoElementStyle = {
  ncss: {
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

export const videoDescriptionReset: VideoElementStyle = {
  ncss: {
    boxSizing: 'border-box',
    fontFamily: 'text',
  },
}

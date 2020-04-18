import { NcssProps } from '../../types'

export interface VideoElementStyle {
  ncss: NcssProps
}

export const videoVideoElementStyle: VideoElementStyle = {
  ncss: {
    height: 'auto',
    width: '100%',
  },
}

export const videoDescriptionReset: VideoElementStyle = {
  ncss: {
    boxSizing: 'border-box',
    fontFamily: 'text',
  },
}

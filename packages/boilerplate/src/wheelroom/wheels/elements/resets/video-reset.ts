import { NcssProps } from '../../types'

export interface VideoReset {
  ncss: NcssProps
}

export const videoVideoReset: VideoReset = {
  ncss: {
    height: 'auto',
    width: '100%',
  },
}

export const videoDescriptionReset: VideoReset = {
  ncss: {
    boxSizing: 'border-box',
    fontFamily: 'text',
  },
}

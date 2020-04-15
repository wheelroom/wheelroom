import { NcssProps } from '../types'

export interface VideoPreset {
  ncss: NcssProps
}

export const videoVideoPreset: VideoPreset = {
  ncss: {
    height: 'auto',
    width: '100%',
  },
}

export const videoDescriptionPreset: VideoPreset = {
  ncss: {
    fontFamily: 'text',
  },
}

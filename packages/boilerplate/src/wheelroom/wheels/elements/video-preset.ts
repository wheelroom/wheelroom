import { NcssProps } from '../types'

export interface VideoPreset {
  ncss: NcssProps
}

export const videoVideoPreset: VideoPreset = {
  ncss: {
    label: 'video',
    height: 'auto',
    width: '100%',
  },
}

export const videoDescriptionPreset: VideoPreset = {
  ncss: {
    label: 'video-description',
    fontFamily: 'systemFont',
  },
}

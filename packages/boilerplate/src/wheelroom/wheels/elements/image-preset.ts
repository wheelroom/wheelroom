import { NcssProps } from '../types'

export interface ImagePreset {
  ncss: NcssProps
}

export const imageImgPreset: ImagePreset = {
  ncss: {
    boxSizing: 'border-box',
    display: 'block',
    height: 'auto',
    width: '100%',
  },
}

export const imagePicturePreset: ImagePreset = {
  ncss: {
    boxSizing: 'border-box',
  },
}

export const imageFigcaptionPreset: ImagePreset = {
  ncss: {
    boxSizing: 'border-box',
    fontFamily: 'text',
  },
}

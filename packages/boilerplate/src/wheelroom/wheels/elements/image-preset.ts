import { NcssProps } from '../types'

export interface ImagePreset {
  ncss: NcssProps
}

export const imageImgPreset: ImagePreset = {
  ncss: {
    label: 'img',
    boxSizing: 'border-box',
    display: 'block',
    height: 'auto',
    width: '100%',
  },
}

export const imagePicturePreset: ImagePreset = {
  ncss: {
    label: 'picture',
    boxSizing: 'border-box',
  },
}

export const imageFigcaptionPreset: ImagePreset = {
  ncss: {
    label: 'figcaption',
    boxSizing: 'border-box',
    fontFamily: 'systemFont',
  },
}

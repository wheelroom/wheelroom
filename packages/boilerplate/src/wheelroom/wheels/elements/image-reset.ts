import { NcssProps } from '../types'

export interface ImageReset {
  ncss: NcssProps
}

export const imageImgReset: ImageReset = {
  ncss: {
    /**
     * Remove the border on images inside links in IE 10.
     */
    borderStyle: 'none',
    boxSizing: 'border-box',
    display: 'block',
    height: 'auto',
    width: '100%',
  },
}

export const imagePictureReset: ImageReset = {
  ncss: {
    boxSizing: 'border-box',
  },
}

export const imageFigcaptionReset: ImageReset = {
  ncss: {
    boxSizing: 'border-box',
    fontFamily: 'text',
  },
}

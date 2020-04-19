import { NcssProps } from '../../types'

export interface ImageElementStyle {
  ncss: NcssProps
}

export const imageImgReset: ImageElementStyle = {
  ncss: {
    // Remove the border on images inside links in IE 10.
    borderStyle: 'none',
    boxSizing: 'border-box',
    display: 'block',
    height: 'auto',
    width: '100%',
  },
}

export const imagePictureReset: ImageElementStyle = {
  ncss: {
    boxSizing: 'border-box',
    display: 'inline-block',
  },
}

export const imageFigcaptionReset: ImageElementStyle = {
  ncss: {
    boxSizing: 'border-box',
    fontFamily: 'text',
  },
}

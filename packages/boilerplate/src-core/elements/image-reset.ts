import { NcssNode } from '../lib/ncss'

export const imageImgReset: NcssNode = {
  ncss: {
    // Remove the border on images inside links in IE 10.
    borderStyle: 'none',
    boxSizing: 'border-box',
    display: 'block',
    height: 'auto',
    width: '100%',
  },
}

export const imagePictureReset: NcssNode = {
  ncss: {
    boxSizing: 'border-box',
    display: 'inline-block',
  },
}

export const imageFigcaptionReset: NcssNode = {
  ncss: {
    boxSizing: 'border-box',
    fontFamily: 'text',
  },
}

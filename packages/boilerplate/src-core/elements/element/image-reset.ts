import { NcssObjectProps } from '../../lib/ncss'

export const imageImgReset: NcssObjectProps = {
  ncss: {
    // Remove the border on images inside links in IE 10.
    borderStyle: 'none',
    boxSizing: 'border-box',
    display: 'block',
    height: 'auto',
    width: '100%',
  },
}

export const imagePictureReset: NcssObjectProps = {
  ncss: {
    boxSizing: 'border-box',
    display: 'inline-block',
  },
}

export const imageFigcaptionReset: NcssObjectProps = {
  ncss: {
    boxSizing: 'border-box',
    fontFamily: 'text',
  },
}

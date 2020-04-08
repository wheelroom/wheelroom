import {
  defaultImageImgStyle,
  defaultImagePictureStyle,
  defaultImageFigcaptionStyle,
} from '../../../../element-styles/image'
import { NcssProps } from '../../../elements/types'
import { ImageTreeStyle } from '../../../elements/image'

export interface PageSectionGalleryTreeStyle {
  container: NcssProps
  image: ImageTreeStyle
  wrapper: NcssProps
}

export const pageSectionGalleryTreeStyle: PageSectionGalleryTreeStyle = {
  wrapper: {
    bg: 'bg',
    py: [3, 6, 8],
  },
  container: {
    flexDirection: ['column', 'row'],
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  image: {
    img: defaultImageImgStyle,
    picture: { ...defaultImagePictureStyle, w: [1, 1 / 2], p: 3 },
    figcaption: defaultImageFigcaptionStyle,
  },
}

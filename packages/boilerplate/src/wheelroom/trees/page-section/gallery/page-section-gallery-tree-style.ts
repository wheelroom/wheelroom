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
  container: {
    alignItems: 'center',
    flexDirection: ['column', 'row'],
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  image: {
    figcaption: defaultImageFigcaptionStyle,
    img: defaultImageImgStyle,
    picture: { ...defaultImagePictureStyle, w: [1, 1 / 2], p: 3 },
  },
  wrapper: {
    bg: 'bg',
    py: [3, 6, 8],
  },
}

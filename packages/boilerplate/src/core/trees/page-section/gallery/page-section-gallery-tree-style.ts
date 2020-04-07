import { PageSectionGalleryTreeStyle } from './page-section-gallery-tree'
import {
  defaultImageImgStyle,
  defaultImagePictureStyle,
  defaultImageFigcaptionStyle,
} from '../../../../element-styles/image'

export const pageSectionGalleryTreeStyle: PageSectionGalleryTreeStyle = {
  wrapper: {
    label: 'Wrapper',
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

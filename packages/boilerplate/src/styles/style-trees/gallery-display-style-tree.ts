import { GalleryDisplayStyleTree } from '../../core/displays/gallery-display'
import {
  commonImageImgStyle,
  commonImagePictureStyle,
  commonImageFigcaptionStyle,
} from '../../core/styles/image'

export const galleryDisplayStyleTree: GalleryDisplayStyleTree = {
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
    img: commonImageImgStyle,
    picture: { ...commonImagePictureStyle, w: [1, 1 / 2], p: 3 },
    figcaption: commonImageFigcaptionStyle,
  },
}

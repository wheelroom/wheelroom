import { DeepPartial } from '@wheelroom/core'
import { CustomNcssTree } from '../../../../../custom-wheel/models/custom/ncss-tree'

export const customNcssTree: DeepPartial<CustomNcssTree> = {
  ncss: {
    label: 'custom-large',
    w: 1,
    p: 3,
  },
  label: {
    ncss: {
      label: 'custom-label',
      color: 'azure',
      fontFamily: 'text',
      textTransform: 'uppercase',
    },
  },
  heading: {
    ncss: {
      label: 'custom-heading',
      fontFamily: 'heading',
    },
  },
  abstract: {
    ncss: {
      label: 'custom-abstract',
      fontFamily: 'text',
    },
  },
  image: {
    ncss: {
      label: 'custom-image',
    },
    picture: {
      ncss: {
        label: 'custom-picture',
        w: 1,
      },
    },
    figcaption: {
      ncss: {
        label: 'custom-figcaption',
        py: 2,
      },
    },
  },
}

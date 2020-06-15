import { elementStyles } from '../styles/glacier/elements/element-styles'
import { dark } from '../themes/dark'
import { styledSystemConfig } from '../../wheelroom'
import { models } from '../styles/glacier/models/models'

const baseWheel = {
  style: undefined,
  elementStyles,
  theme: dark,
  styledSystemConfig,
}

export const glacierDarkWheels = {
  blogSection: {
    ...baseWheel,
    style: models.blogSection,
  },
}

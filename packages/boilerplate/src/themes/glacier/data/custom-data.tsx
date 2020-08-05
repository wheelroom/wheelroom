import { DeepPartial } from '@wheelroom/core'
import { CustomSectionData } from '../../../custom-wheel/models/custom-section/data'

export const customSectionData: DeepPartial<CustomSectionData> = {
  large: {
    hideHeading: false,
    hideAbstract: false,
    hideMedia: false,
  },
  small: {
    hideHeading: false,
    hideAbstract: false,
    hideMedia: false,
  },
}

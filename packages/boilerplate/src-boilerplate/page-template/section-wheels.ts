import { styledSystemConfig, SectionWheels } from '../../src-core'
import { glacierDark, glacierLight } from '../themes/glacier/glacier'

export const sectionWheels: SectionWheels = {
  defaultThemeId: 'glacierLight',
  themes: {
    glacierLight,
    glacierDark,
  },
  styledSystemConfig,
}

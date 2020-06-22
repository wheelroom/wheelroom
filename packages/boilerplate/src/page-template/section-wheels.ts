import { wrSystemConfig, SectionWheels, supportsDarkMode } from '../../src-core'
import { glacierDark, glacierLight } from '../themes/glacier/glacier'

export const sectionWheels: SectionWheels = {
  defaultThemeId: supportsDarkMode() ? 'glacierDark' : 'glacierLight',
  themes: {
    glacierLight,
    glacierDark,
  },
  wrSystemConfig,
}

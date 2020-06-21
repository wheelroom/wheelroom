import { wrSystemConfig, SectionWheels, supportsDarkMode } from '../../src-core'
import { glacierDark, glacierLight } from '../themes/glacier/glacier'
import { yosemiteDark, yosemiteLight } from '../themes/yosemite/yosemite'

export const sectionWheels: SectionWheels = {
  defaultThemeId: supportsDarkMode() ? 'yosemiteDark' : 'yosemiteLight',
  themes: {
    glacierLight,
    glacierDark,
    yosemiteLight,
    yosemiteDark,
  },
  wrSystemConfig,
}

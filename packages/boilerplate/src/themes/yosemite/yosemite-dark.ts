import { StyledSystemTheme } from '@wheelroom/styled-system'
import { scales } from './styled-system/scales'
import { maps } from './styled-system/maps'
import { breakpoints } from './styled-system/breakpoints'
import { colors } from './styled-system/colors'

export const yosemiteDark: StyledSystemTheme = {
  ...breakpoints,
  ...maps,
  ...scales,
  colorMap: {
    ...colors,
    heading: colors.black,
    text: colors.black,
    link: colors.azure,
    border: colors.bullet,

    sectionBg: colors.caviar,
    sectionText: colors.white,
    sectionBorder: colors.bullet,

    cardBorder: colors.ghost,
    cardShadow: colors.ghost,

    modalBorder: colors.ghost,
    modalShadow: colors.ghost,
    iconColor: colors.bullet,
  },
}

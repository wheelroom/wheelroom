import { StyledSystemTheme } from '@wheelroom/styled-system'
import { scales } from './styled-system/scales'
import { maps } from './styled-system/maps'
import { breakpoints } from './styled-system/breakpoints'
import { colors } from './styled-system/colors'

export const yosemiteLight: StyledSystemTheme = {
  ...breakpoints,
  ...maps,
  ...scales,
  colorMap: {
    ...colors,
    heading: colors.black,
    text: colors.black,
    link: colors.azure,
    border: colors.bullet,

    sectionBg: colors.white,
    sectionText: colors.ghost,
    sectionBorder: colors.grey,

    cardBorder: colors.silver,
    cardShadow: colors.silver,

    modalBorder: colors.bullet,
    modalShadow: colors.bullet,

    iconColor: colors.metal,

    codeBg: colors.skyblue,
  },
}

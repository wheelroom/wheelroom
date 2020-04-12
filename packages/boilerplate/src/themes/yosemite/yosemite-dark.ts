import { StyledSystemTheme } from '@wheelroom/styled-system'
import { scales } from './scales'
import { maps } from './maps'
import { breakpoints } from './breakpoints'
import { colors } from './colors'

export const yosemiteDark: StyledSystemTheme = {
  ...breakpoints,
  ...maps,
  ...scales,
  colorMap: {
    ...colors,
    heading: colors.black,
    text: colors.black,
    link: colors.azure,
    button: colors.white,
    bg: colors.white,
    border: colors.silver,
    cardsBorder: colors.silver,
    cardsShadow: colors.silver,
    modalBorder: colors.bullet,
    modalShadow: colors.bullet,
    iconColor: colors.metal,
  },
}

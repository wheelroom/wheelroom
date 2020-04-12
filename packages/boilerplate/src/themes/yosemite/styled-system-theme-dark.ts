import { StyledSystemTheme } from '@wheelroom/styled-system'
import { scales } from './styled-system/scales'
import { maps } from './styled-system/maps'
import { breakpoints } from './styled-system/breakpoints'
import { colors } from './styled-system/colors'

export const styledSystemThemeDark: StyledSystemTheme = {
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

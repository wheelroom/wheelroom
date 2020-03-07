import { StyledSystemTheme } from '@jacco-meijer/styled-system'
import { scales } from '../scales'
import { maps } from '../maps'
import { breakpoints } from '../breakpoints'
import { colors, svgColors } from '../colors'

export const darkTheme: StyledSystemTheme = {
  ...breakpoints,
  ...maps,
  ...scales,
  colorMap: {
    ...colors,
    heading: colors.white,
    text: colors.white,
    link: colors.azure,
    button: colors.white,
    bg: colors.caviar,
    border: colors.bullet,

    // Svg colors
    jarPrimary: svgColors.straw,
    jarSecondary: svgColors.sinas,
  },
}

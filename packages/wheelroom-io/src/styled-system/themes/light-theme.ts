import { StyledSystemTheme } from '@jacco-meijer/styled-system'
import { scales } from '../scales'
import { maps } from '../maps'
import { breakpoints } from '../breakpoints'
import { colors, svgColors } from '../colors'

export const lightTheme: StyledSystemTheme = {
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

    // Svg colors
    jarPrimary: svgColors.deepSea,
    jarSecondary: svgColors.carib,
  },
}

import { StyledSystemTheme } from '@jacco-meijer/styled-system'
import { scales } from '../scales'
import { maps } from '../maps'
import { breakpoints } from '../breakpoints'
import { colors } from '../colors'

export const lightTheme: StyledSystemTheme = {
  ...breakpoints,
  ...maps,
  ...scales,
  colorMap: {
    // Existing color scheme
    black: colors.black,
    white: colors.white,
    skyblue: colors.skyblue,
    azure: colors.azure,
    amber: colors.amber,
    silver: colors.silver,
    metal: colors.metal,
    bullet: colors.bullet,
    caviar: colors.caviar,

    // Proposal, new color scheme
    heading: colors.black,
    text: colors.black,
  },
}

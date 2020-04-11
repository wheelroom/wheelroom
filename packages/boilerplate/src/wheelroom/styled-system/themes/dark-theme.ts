import { StyledSystemTheme } from '@wheelroom/styled-system'
import { scales } from '../scales'
import { maps } from '../maps'
import { breakpoints } from '../breakpoints'
import { colors } from '../colors'

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
    cardsBorder: colors.ghost,
    cardsShadow: colors.ghost,
    modalBorder: colors.ghost,
    modalShadow: colors.ghost,
    iconColor: colors.bullet,
  },
}

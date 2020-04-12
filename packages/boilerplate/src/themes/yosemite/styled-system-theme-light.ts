import { StyledSystemTheme } from '@wheelroom/styled-system'
import { scales } from './styled-system/scales'
import { maps } from './styled-system/maps'
import { breakpoints } from './styled-system/breakpoints'
import { colors } from './styled-system/colors'

export const styledSystemThemeLight: StyledSystemTheme = {
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

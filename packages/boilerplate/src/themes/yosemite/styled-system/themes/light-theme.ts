import { StyledSystemTheme } from '@wheelroom/styled-system'
import { scales } from '../../../../wheelroom/styled-system/scales'
import { maps } from '../../../../wheelroom/styled-system/maps'
import { breakpoints } from '../../../../wheelroom/styled-system/breakpoints'
import { colors } from '../colors'

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
    cardsBorder: colors.silver,
    cardsShadow: colors.silver,
    modalBorder: colors.bullet,
    modalShadow: colors.bullet,
    iconColor: colors.metal,
  },
}

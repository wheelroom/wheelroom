import { breakpointsPreset } from '../../wheelroom/theme/breakpoints-preset'
import { colors } from './styled-system/colors'
import { mapsPreset } from '../../wheelroom/theme/maps-preset'
import { scalesPreset } from '../../wheelroom/theme/scales-preset'
import { StyledSystemTheme } from '../../wheelroom/theme/types'

export const yosemiteDark: StyledSystemTheme = {
  ...breakpointsPreset,
  ...mapsPreset,
  ...scalesPreset,
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

    codeBg: colors.skyblue,
  },
}

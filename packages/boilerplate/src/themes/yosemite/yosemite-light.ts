import { breakpointsPreset } from '../../wheelroom/theme/breakpoints-preset'
import { colors } from './styled-system/colors'
import { mapsPreset } from '../../wheelroom/theme/maps-preset'
import { scalesPreset } from '../../wheelroom/theme/scales-preset'
import { StyledSystemTheme } from '../../wheelroom/theme/types'

export const yosemiteLight: StyledSystemTheme = {
  ...breakpointsPreset,
  ...mapsPreset,
  ...scalesPreset,
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

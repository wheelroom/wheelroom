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

    heading: colors.ghost,
    text: colors.ghost,
    link: colors.azure,
    border: colors.grey,
    outline: colors.amber,

    dividerBg: colors.ghost,

    skipToContentBg: colors.amber,
    skipToContentText: colors.ghost,
    skipToContentOutline: colors.ghost,

    sectionBg: colors.white,
    sectionText: colors.ghost,
    sectionBorder: colors.grey,

    buttonPrimaryBg: colors.azure,
    buttonPrimaryBgState: colors.azureShade,
    buttonPrimaryBorder: colors.azure,
    buttonPrimaryText: colors.white,

    buttonSecondaryBg: 'transparent',
    buttonSecondaryBorder: colors.metal,
    buttonSecondaryBorderState: colors.bullet,
    buttonSecondaryText: colors.ghost,

    cardBorder: colors.silver,
    cardShadow: colors.silver,

    modalBg: colors.white,
    modalBorder: colors.bullet,
    modalShadow: colors.bullet,

    iconColor: colors.metal,
    iconColorState: colors.ghost,

    codeBg: colors.skyblue,
  },
}

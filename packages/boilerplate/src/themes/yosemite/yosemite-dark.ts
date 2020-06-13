import {
  breakpointsPreset,
  mapsPreset,
  scalesPreset,
  StyledSystemTheme,
} from '../../wheelroom'
import { colors } from './styled-system/colors'

export const yosemiteDark: StyledSystemTheme = {
  ...breakpointsPreset,
  ...mapsPreset,
  ...scalesPreset,
  colorMap: {
    ...colors,

    heading: colors.ghost,
    text: colors.ghost,
    link: colors.azure,
    border: colors.bullet,
    outline: colors.amber,

    dividerBg: colors.white,

    skipToContentBg: colors.amber,
    skipToContentText: colors.ghost,
    skipToContentOutline: colors.ghost,

    sectionBg: colors.caviar,
    sectionText: colors.white,
    sectionBorder: colors.bullet,

    buttonPrimaryBg: colors.azure,
    buttonPrimaryBgState: colors.azureShade,
    buttonPrimaryBorder: colors.azure,
    buttonPrimaryText: colors.white,

    buttonSecondaryBg: 'transparent',
    buttonSecondaryBorder: colors.metal,
    buttonSecondaryBorderState: colors.bullet,
    buttonSecondaryText: colors.white,

    cardBorder: colors.ghost,
    cardShadow: colors.ghost,

    modalBg: colors.caviar,
    modalBorder: colors.ghost,
    modalShadow: colors.ghost,

    iconColor: colors.bullet,
    iconColorState: colors.white,

    codeBg: colors.skyblue,
  },
}

import { baseColors } from './base-colors'

export const dark = {
  ...baseColors,

  heading: baseColors.ghost,
  text: baseColors.ghost,
  link: baseColors.azure,
  border: baseColors.bullet,
  outline: baseColors.amber,

  dividerBg: baseColors.white,

  skipToContentBg: baseColors.amber,
  skipToContentText: baseColors.ghost,
  skipToContentOutline: baseColors.ghost,

  sectionBg: baseColors.caviar,
  sectionText: baseColors.white,
  sectionBorder: baseColors.bullet,

  buttonPrimaryBg: baseColors.azure,
  buttonPrimaryBgState: baseColors.azureShade,
  buttonPrimaryBorder: baseColors.azure,
  buttonPrimaryText: baseColors.white,

  buttonSecondaryBg: 'transparent',
  buttonSecondaryBorder: baseColors.metal,
  buttonSecondaryBorderState: baseColors.bullet,
  buttonSecondaryText: baseColors.white,

  cardBorder: baseColors.ghost,
  cardShadow: baseColors.ghost,

  modalBg: baseColors.caviar,
  modalBorder: baseColors.ghost,
  modalShadow: baseColors.ghost,

  iconColor: baseColors.bullet,
  iconColorState: baseColors.white,

  codeBg: baseColors.skyblue,
}

import { baseColors } from './base-colors'

export const light = {
  ...baseColors,

  heading: baseColors.ghost,
  text: baseColors.ghost,
  link: baseColors.azure,
  border: baseColors.grey,
  outline: baseColors.amber,

  dividerBg: baseColors.ghost,

  skipToContentBg: baseColors.amber,
  skipToContentText: baseColors.ghost,
  skipToContentOutline: baseColors.ghost,

  sectionBg: baseColors.white,
  sectionText: baseColors.ghost,
  sectionBorder: baseColors.grey,

  buttonPrimaryBg: baseColors.azure,
  buttonPrimaryBgState: baseColors.azureShade,
  buttonPrimaryBorder: baseColors.azure,
  buttonPrimaryText: baseColors.white,

  buttonSecondaryBg: 'transparent',
  buttonSecondaryBorder: baseColors.metal,
  buttonSecondaryBorderState: baseColors.bullet,
  buttonSecondaryText: baseColors.ghost,

  cardBorder: baseColors.silver,
  cardShadow: baseColors.silver,

  modalBg: baseColors.white,
  modalBorder: baseColors.bullet,
  modalShadow: baseColors.bullet,

  iconColor: baseColors.metal,
  iconColorState: baseColors.ghost,

  codeBg: baseColors.skyblue,
}

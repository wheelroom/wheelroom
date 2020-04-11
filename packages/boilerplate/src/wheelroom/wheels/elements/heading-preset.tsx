export const headingPreset = {
  label: 'heading',
  boxSizing: 'border-box',
  fontFamily: 'systemFont',
}

/** These styles are added to H1, H2, H3, H4, H5 and H6 as presets */
export const heading1Preset = {
  ...headingPreset,
}

export const heading2Preset = {
  ...headingPreset,
}

export const heading3Preset = {
  ...headingPreset,
}

export const heading4Preset = {
  ...headingPreset,
}

export const heading5Preset = {
  ...headingPreset,
}

export const heading6Preset = {
  ...headingPreset,
}

export const headingPresetMap = {
  h1: heading1Preset,
  h2: heading2Preset,
  h3: heading3Preset,
  h4: heading4Preset,
  h5: heading5Preset,
  h6: heading6Preset,
}

import { NcssProps } from '../types'

export interface HeadingPreset {
  ncss: NcssProps
}

export const headingPreset: HeadingPreset = {
  ncss: {
    boxSizing: 'border-box',
    fontFamily: 'text',
  },
}

/** These styles are added to H1, H2, H3, H4, H5 and H6 as presets */
export const heading1Preset: HeadingPreset = {
  ncss: {
    ...headingPreset.ncss,
  },
}

export const heading2Preset: HeadingPreset = {
  ncss: {
    ...headingPreset.ncss,
  },
}

export const heading3Preset: HeadingPreset = {
  ncss: {
    ...headingPreset.ncss,
  },
}

export const heading4Preset: HeadingPreset = {
  ncss: {
    ...headingPreset.ncss,
  },
}

export const heading5Preset: HeadingPreset = {
  ncss: {
    ...headingPreset.ncss,
  },
}

export const heading6Preset: HeadingPreset = {
  ...headingPreset.ncss,
}

export const headingPresets = {
  h1: heading1Preset,
  h2: heading2Preset,
  h3: heading3Preset,
  h4: heading4Preset,
  h5: heading5Preset,
  h6: heading6Preset,
}

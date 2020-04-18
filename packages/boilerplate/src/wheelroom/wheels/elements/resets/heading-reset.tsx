import { NcssProps } from '../../types'

export interface HeadingReset {
  ncss: NcssProps
}

export const headingPreset: HeadingReset = {
  ncss: {
    boxSizing: 'border-box',
    fontFamily: 'text',
  },
}

// These styles are added to H1, H2, H3, H4, H5 and H6 as presets
export const heading1Reset: HeadingReset = {
  ncss: {
    // Correct the font size and margin on `h1` elements within `section` and
    // `article` contexts in Chrome, Firefox, and Safari.
    fontSize: '2em',
    my: '0.67em',
    mx: '0',
    ...headingPreset.ncss,
  },
}

export const heading2Reset: HeadingReset = {
  ncss: {
    ...headingPreset.ncss,
  },
}

export const heading3Reset: HeadingReset = {
  ncss: {
    ...headingPreset.ncss,
  },
}

export const heading4Reset: HeadingReset = {
  ncss: {
    ...headingPreset.ncss,
  },
}

export const heading5Reset: HeadingReset = {
  ncss: {
    ...headingPreset.ncss,
  },
}

export const heading6Reset: HeadingReset = {
  ...headingPreset.ncss,
}

export const headingPresets = {
  h1: heading1Reset,
  h2: heading2Reset,
  h3: heading3Reset,
  h4: heading4Reset,
  h5: heading5Reset,
  h6: heading6Reset,
}

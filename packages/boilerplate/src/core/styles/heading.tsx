import { commonParagraphStyle } from './paragraph'

export const commonHeadingStyle = {
  label: 'heading',
  boxSizing: 'border-box',
  color: 'heading',
  fontFamily: 'display',
  mt: 0,
  mb: 3,
}

/** These styles are added to H1, H2, H3, H4, H5 and H6 as defaults */
export const heading1Style = {
  fontSize: [8, 9, 10, 11],
}

export const heading2Style = {
  fontSize: [7, 8, 9, 10],
}

export const heading3Style = {
  fontSize: [5, 6, 7, 8],
}

export const heading4Style = {
  fontSize: [3, 4, 5, 6],
}

export const heading5Style = {
  fontSize: [3, 4, 5, 6],
}

export const heading6Style = {
  fontSize: [3, 4, 5, 6],
}

export const headingStyleMap = {
  h1: heading1Style,
  h2: heading2Style,
  h3: heading3Style,
  h4: heading4Style,
  h5: heading5Style,
  h6: heading6Style,
  p: commonParagraphStyle,
}

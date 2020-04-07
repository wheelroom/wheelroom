export const commonHeadingStyle = {
  label: 'heading',
  boxSizing: 'border-box',
  color: 'heading',
  fontFamily: 'display',
  mt: 0,
  mb: 3,
}

/** These styles are added to H1, H2, H3, H4, H5 and H6 as defaults */
export const defaultHeading1Style = {
  ...commonHeadingStyle,
  fontSize: [8, 9, 10, 11],
}

export const defaultHeading2Style = {
  ...commonHeadingStyle,
  fontSize: [7, 8, 9, 10],
}

export const defaultHeading3Style = {
  ...commonHeadingStyle,
  fontSize: [5, 6, 7, 8],
}

export const defaultHeading4Style = {
  ...commonHeadingStyle,
  fontSize: [3, 4, 5, 6],
}

export const defaultHeading5Style = {
  ...commonHeadingStyle,
  fontSize: [3, 4, 5, 6],
}

export const defaultHeading6Style = {
  ...commonHeadingStyle,
  fontSize: [3, 4, 5, 6],
}

export const headingStyleMap = {
  h1: defaultHeading1Style,
  h2: defaultHeading2Style,
  h3: defaultHeading3Style,
  h4: defaultHeading4Style,
  h5: defaultHeading5Style,
  h6: defaultHeading6Style,
}

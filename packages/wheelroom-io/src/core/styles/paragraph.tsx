export const commonParagraphStyle = {
  label: 'paragraph',
  boxSizing: 'border-box',
  color: 'text',
  fontFamily: 'text',
  mt: 0,
  mb: 3,
}

/** This style is added to the Paragraph element as the default */
export const paragraphStyle = {
  ...commonParagraphStyle,
  fontSize: [4, 5],
  lineHeight: 4,
}

export const paragraphHeroStyle = {
  ...commonParagraphStyle,
  color: 'caviar',
  fontSize: [6, 7],
  lineHeight: 3,
  my: 4,
}

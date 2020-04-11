export const commonParagraphStyle = {
  label: 'paragraph',
  boxSizing: 'border-box',
  color: 'text',
  fontFamily: 'text',
  mt: 0,
  mb: 3,
}

export const themeParagraphStyle = {
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

export const smallParagraphStyle = {
  ...commonParagraphStyle,
  fontSize: [2, 3],
  lineHeight: 3,
}

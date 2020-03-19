export const commonButtonStyle = {
  display: 'inline-flex',
  justifyContent: 'center',
  bg: 'azure',
  border: '1px solid',
  borderColor: 'azure',
  borderRadius: '4px',
  color: 'button',
  cursor: 'pointer',
  fontFamily: 'text',
  px: '16px',
  py: '8px',
  textDecoration: 'none',
  userSelect: 'none',
  '&:hover': {},
  '&:visited': {},
  '&:focus': {},
}

export const buttonPrimaryStyle = {
  ...commonButtonStyle,
}

export const buttonSecondaryStyle = {
  ...commonButtonStyle,
  bg: 'transparent',
  borderColor: 'metal',
  color: 'text',
}

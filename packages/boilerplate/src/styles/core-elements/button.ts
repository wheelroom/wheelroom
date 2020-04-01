export const baseButtonStyle = {
  boxSizing: 'border-box',
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
  '&:focus': {
    outline: '2px dotted',
    outlineColor: 'amber',
    outlineOffset: '5px',
  },
}

export const buttonPrimaryStyle = {
  ...baseButtonStyle,
}

export const buttonSecondaryStyle = {
  ...baseButtonStyle,
  bg: 'transparent',
  borderColor: 'metal',
  color: 'text',
}

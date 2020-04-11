export const buttonStyle = {
  display: 'inline-flex',
  justifyContent: 'center',
  bg: 'azure',
  border: '1px solid',
  borderColor: 'azure',
  borderRadius: '4px',
  color: 'button',
  px: '16px',
  py: '8px',
  ':hover': {},
  ':visited': {},
  ':focus': {
    outlineColor: 'amber',
  },
}

export const buttonPrimaryStyle = {
  ...buttonStyle,
}

export const buttonSecondaryStyle = {
  ...buttonStyle,
  bg: 'transparent',
  borderColor: 'metal',
  color: 'text',
}

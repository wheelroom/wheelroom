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
    outline: '2px dotted',
    outlineColor: 'amber',
    outlineOffset: '4px',
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

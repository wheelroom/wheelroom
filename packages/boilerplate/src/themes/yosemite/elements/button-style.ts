import { buttonReset } from '../../../wheelroom/wheels/elements/resets/button-reset'

export const buttonStyle = {
  display: 'inline-flex',
  justifyContent: 'center',
  px: 3,
  py: 2,
  userSelect: 'none',
  borderWidth: '1px',
  borderStyle: 'solid',
  borderRadius: 4,
  borderColor: 'transparent',
  textDecoration: 'none',
}

export const primaryButtonStyle = {
  ...buttonStyle,
  color: 'white',
  bg: 'azure',
  borderColor: 'azure',
}

export const elementAsPrimaryButtonStyle = {
  // First set a ButtonElementStyle on a element that isn't a <Button />
  ...buttonReset,
  ...primaryButtonStyle,
}

export const secondaryButtonStyle = {
  ...buttonStyle,
  color: 'sectionText',
  bg: 'transparent',
  borderColor: 'metal',
}

import { ButtonElementStyle } from '../../../wheelroom/wheels/element/resets/button-reset'

const buttonStyle: ButtonElementStyle = {
  ncss: {
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
  },
}

export const primaryButtonStyle: ButtonElementStyle = {
  ncss: {
    ...buttonStyle.ncss,
    color: 'white',
    bg: 'azure',
    borderColor: 'azure',
  },
}

export const secondaryButtonStyle: ButtonElementStyle = {
  ncss: {
    ...buttonStyle.ncss,
    color: 'sectionText',
    bg: 'transparent',
    borderColor: 'metal',
  },
}

export const displayButtonStyle: ButtonElementStyle = {
  ncss: {
    ...primaryButtonStyle.ncss,
    fontSize: [6, 6, 7, 7],
    px: 5,
    py: 3,
  },
}

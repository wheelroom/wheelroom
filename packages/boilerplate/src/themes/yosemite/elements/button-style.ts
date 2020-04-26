import { ButtonElementStyle } from '../../../wheelroom/wheels/element/resets/button-reset'

const buttonStyle: ButtonElementStyle = {
  ncss: {
    display: 'inline-flex',
    justifyContent: 'center',
    px: 3,
    py: 2,
    userSelect: 'none',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 4,
    borderColor: 'transparent',
    textDecoration: 'none',
    ':focus': {
      outlineColor: 'outline',
    },
  },
}

export const primaryButtonStyle: ButtonElementStyle = {
  ncss: {
    ...buttonStyle.ncss,
    color: 'buttonPrimaryText',
    bg: 'buttonPrimaryBg',
    borderColor: 'buttonPrimaryBorder',
    transition: 'background-color .25s ease',
    ':hover, :focus': {
      bg: 'buttonPrimaryBgState',
    },
  },
}

export const secondaryButtonStyle: ButtonElementStyle = {
  ncss: {
    ...buttonStyle.ncss,
    color: 'buttonSecondaryText',
    bg: 'buttonSecondaryBg',
    borderColor: 'buttonSecondaryBorder',
    transition: 'border-color .25s ease',
    ':hover, :focus': {
      borderColor: 'buttonSecondaryBorderState',
    },
  },
}

export const displayButtonStyle: ButtonElementStyle = {
  ncss: {
    ...primaryButtonStyle.ncss,
    fontSize: [6, 6, 7],
    px: [4, 4, 5],
    py: 3,
  },
}

export const aLinkButtonStyle: ButtonElementStyle = {
  ncss: {
    fontSize: 6,
    bg: 'transparent',
    color: 'link',
    border: '0',
    p: 0,
    textDecoration: 'underline',
  },
}

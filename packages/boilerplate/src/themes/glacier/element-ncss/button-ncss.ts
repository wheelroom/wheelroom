import { NcssNode } from '@wheelroom/core'

const buttonNcss = {
  display: 'inline-flex',
  justifyContent: 'center',
  fontSize: 5,
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
}

export const primaryButtonNcssNode: NcssNode = {
  ncss: {
    ...buttonNcss,
    color: 'buttonPrimaryText',
    bg: 'buttonPrimaryBg',
    borderColor: 'buttonPrimaryBorder',
    transition: 'background-color .25s ease',
    ':hover, :focus': {
      bg: 'buttonPrimaryBgState',
    },
  },
}

export const secondaryButtonNcssNode: NcssNode = {
  ncss: {
    ...buttonNcss,
    color: 'buttonSecondaryText',
    bg: 'buttonSecondaryBg',
    borderColor: 'buttonSecondaryBorder',
    transition: 'border-color .25s ease',
    ':hover, :focus': {
      borderColor: 'buttonSecondaryBorderState',
    },
  },
}

export const displayButtonNcssNode: NcssNode = {
  ncss: {
    fontSize: [6, 6, 7],
    px: [4, 4, 5],
    py: 3,
  },
}

export const aLinkButtonNcssNode: NcssNode = {
  ncss: {
    fontSize: 6,
    bg: 'transparent',
    color: 'link',
    border: '0',
    p: 0,
    textDecoration: 'underline',
  },
}

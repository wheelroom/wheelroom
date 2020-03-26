export const commonNavigationStyle = {
  color: 'link',
  fontFamily: 'text',
  fontSize: [3, 4],
  display: 'block',
  textDecoration: 'none',
  cursor: 'pointer',
  '&:hover': { textDecoration: 'underline' },
  '&:active': {},
  '&:focus': {},
}

export const navigationHeaderStyle = {
  ...commonNavigationStyle,
  m: 0,
  px: 2,
  py: 3,
}

export const navigationFooterStyle = {
  ...commonNavigationStyle,
  m: 0,
  ml: [2, 0],
  mr: [2, 3],
}

export const wrapperStyle = {
  label: 'wrapper',
  bg: 'bg',
  width: '100%',
  height: '70px',
  borderBottom: '1px solid',
  borderColor: 'border',
}

export const containerStyle = {
  label: 'container',
  height: '100%',
  justifyContent: 'space-between',
  px: 3,
}

export const skipToContent = {
  label: 'skip',
  position: 'absolute',
  left: '-100%',
  ':focus': {
    w: 1,
    left: 0,
    top: 0,
    right: 0,
    color: 'black',
    fontFamily: 'text',
    fontWeight: 5,
    backgroundColor: 'amber',
    textAlign: 'center',
    lineHeight: '70px',
    justifyContent: 'center',
    zIndex: 1002,
  },
}

export const logoStyle = {
  label: 'logo',
  alignItems: 'center',
}

export const logoLinkStyle = {
  fontFamily: 'display',
  textDecoration: 'none',
  fontSize: [4, 5],
  fontWeight: 5,
  color: 'text',
  mr: 5,
  sup: {
    color: 'metal',
    fontWeight: 3,
  },
}

export const navStyle = {
  label: 'nav',
  flex: '1',
  alignItems: 'center',
}

export const listStyle = {
  label: 'nav-list',
  display: 'flex',
  flex: '1',
  flexDirection: 'row',
  listStyle: 'none',
  flexWrap: 'wrap',
  mb: 0,
  mt: 0,
  pl: 0,
}

export const listMobileStyle = {
  ...listStyle,
  w: 1,
  flexDirection: 'column',
  li: {
    borderBottom: '1px solid transparent',
    borderColor: 'border',
    a: {
      p: 3,
    },
  },
}

export const menuStyle = {
  display: ['flex', 'flex', 'none'],
  flex: '1',
  alignItems: 'center',
  justifyContent: 'flex-end',
}

export const modalStyle = {
  position: 'fixed',
  display: 'flex',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  w: 1,
  height: 1,
  zIndex: 1050,
  justifyContent: 'flex-end',
  visibility: 'hidden',
  ':before': {
    content: '""',
    height: 1,
    width: 1,
    bg: 'rgba(0, 0, 0, .5)',
    position: 'fixed',
    zIndex: -1,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    opacity: 0,
    transition: 'opacity 0s ease',
  },
}

export const modalOpenStyle = {
  ...modalStyle,
  visibility: 'visible',
  overflowY: 'auto',
  ':before': {
    content: '""',
    height: 1,
    width: 1,
    bg: 'rgba(0, 0, 0, .5)',
    position: 'fixed',
    zIndex: -1,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    opacity: 1,
    transition: 'opacity 2s ease',
  },
}

export const modalContentStyle = {
  w: [1, '360px'],
  m: 3,
  h: 'fit-content',
  bg: 'bg',
  borderRadius: 4,
  border: '1px solid transparent',
  borderColor: 'modalBorder',
  overflow: 'hidden',
  boxShadow: '0 0 16px',
  color: 'modalShadow',
  flexDirection: 'column',
  alignItems: 'flex-end',
  opacity: 0,
  transform: 'scale(0)',
  transition: 'transform .1s ease 0s, opacity .1s ease 0s',
}

export const modalContentOpenStyle = {
  ...modalContentStyle,
  transform: 'scale(1)',
  opacity: 1,
  transition:
    'transform .35s cubic-bezier(.8,-.4,.2,1.44) 0s, opacity .35s cubic-bezier(.8,-.4,.2,1.44) 0s',
}

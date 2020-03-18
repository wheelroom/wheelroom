export const navigationHeaderStyle = {
  color: 'link',
  fontFamily: 'text',
  fontSize: [3, 4],
  display: 'block',
  m: 0,
  px: 2,
  py: 3,
  textDecoration: 'none',
  '&:hover': { textDecoration: 'underline' },
  '&:active': {},
  '&:focus': {},
}

export const wrapperStyle = {
  label: 'Wrapper',
  bg: 'bg',
  width: '100%',
  height: '70px',
  borderBottom: '1px solid',
  borderColor: 'border',
}

export const containerStyle = {
  label: 'Container',
  height: '100%',
  justifyContent: 'space-between',
}

export const skipToContent = {
  label: 'Skip',
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
  label: 'Logo',
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
  label: 'Nav',
  display: ['none', 'flex', 'flex'],
  flex: '1',
  alignItems: 'center',
}

export const listStyle = {
  label: 'NavList',
  display: 'flex',
  flex: '1',
  flexDirection: 'row',
  listStyle: 'none',
  flexWrap: 'wrap',
  mb: 0,
  mt: 0,
  pl: 0,
}

export const menuStyle = {
  display: ['block', 'none', 'none'],
}

export const mobileMenuStyle = {
  position: 'fixed',
  bg: 'bg',
  top: 0,
  bottom: 0,
  w: 1,
  height: 100,
}
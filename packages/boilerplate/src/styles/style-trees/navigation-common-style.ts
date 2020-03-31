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

export const listStyle = {
  label: 'nav-list',
  display: 'flex',
  flexDirection: 'row',
  listStyle: 'none',
  flexWrap: 'wrap',
  mb: 0,
  mt: 0,
  pl: 0,
}

export const navStyle = {
  label: 'nav',
  flex: '1',
  alignItems: 'center',
}

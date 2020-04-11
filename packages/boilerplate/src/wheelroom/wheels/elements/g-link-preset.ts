export const gLinkPreset = {
  label: 'g-link',
  boxSizing: 'border-box',
  fontFamily: 'systemFont',
  cursor: 'pointer',
  ':focus': {
    outline: '2px dotted',
    outlineOffset: '4px',
  },
  '&.active': {
    textDecoration: 'underline',
  },
}

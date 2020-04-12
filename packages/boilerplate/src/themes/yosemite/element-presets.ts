const headingStyle = {
  color: 'text',
  mt: 0,
  mb: 3,
}

export const elementPresets = {
  aLink: {
    ':focus': {
      outline: '2px dotted',
      outlineColor: 'amber',
      outlineOffset: '4px',
    },
    color: 'azure',
    cursor: 'pointer',
  },
  box: {},
  button: {
    ':focus': {
      outline: '2px dotted',
      outlineColor: 'amber',
      outlineOffset: '4px',
    },
    ':hover': {},
    ':visited': {},
    bg: 'azure',
    border: '1px solid',
    borderColor: 'azure',
    borderRadius: '4px',
    color: 'button',
    display: 'inline-flex',
    justifyContent: 'center',
    px: '16px',
    py: '8px',
  },
  container: {},
  containerMaxWidth: {},
  featherIcon: {
    color: 'iconColor',
    height: '40px',
    strokeWidth: '1px',
    width: '40px',
  },
  flex: {},
  gLink: {
    ':focus': {
      outline: '2px dotted',
      outlineColor: 'amber',
      outlineOffset: '4px',
    },
    '&.active': {
      textDecoration: 'underline',
    },
    color: 'azure',
  },
  h1: { ...headingStyle, fontSize: [8, 9, 10, 11] },
  h2: { ...headingStyle, fontSize: [7, 8, 9, 10] },
  h3: { ...headingStyle, fontSize: [5, 6, 7, 8] },
  h4: { ...headingStyle, fontSize: [3, 4, 5, 6] },
  h5: { ...headingStyle, fontSize: [3, 4, 5, 6] },
  h6: { ...headingStyle, fontSize: [3, 4, 5, 6] },
  image: {
    figcaption: {
      color: 'text',
      fontFamily: 'text',
      fontSize: [1, 2],
      fontWeight: 3,
      my: 2,
    },
    img: {},
    picture: {},
  },
  list: {
    color: 'text',
  },
  paragraph: {
    color: 'text',
    fontSize: [4, 5],
    lineHeight: 4,
    mb: 3,
    mt: 0,
  },
  textIcon: {
    color: 'iconColor',
    fontFamily: 'text',
    fontSize: 8,
    height: '40px',
    width: '40px',
  },
  video: {
    description: {
      color: 'text',
      fontSize: [1, 2],
      fontWeight: 3,
      mb: [4, 5],
      mt: 0,
    },
    video: {},
  },
}

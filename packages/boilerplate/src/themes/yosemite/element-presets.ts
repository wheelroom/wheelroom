import { ElementPresets } from '../../wheelroom/wheels/elements/types/element-presets'

const headingStyle = {
  color: 'text',
  mt: 0,
  mb: 3,
}

export const elementPresets: ElementPresets = {
  any: { ncss: {} },
  aLink: {
    ncss: {
      ':focus': {
        outline: '2px dotted',
        outlineColor: 'amber',
        outlineOffset: '4px',
      },
      color: 'azure',
      cursor: 'pointer',
    },
  },
  box: { ncss: {} },
  button: {
    ncss: {
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
  },
  wrapper: { ncss: {} },
  container: { ncss: {} },
  containerMaxWidth: { ncss: {} },
  featherIcon: {
    ncss: {
      color: 'iconColor',
      height: '40px',
      strokeWidth: '1px',
      width: '40px',
    },
  },
  flex: { ncss: {} },
  gLink: {
    ncss: {
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
  },
  h1: { ncss: { ...headingStyle, fontSize: [8, 9, 10, 11] } },
  h2: { ncss: { ...headingStyle, fontSize: [7, 8, 9, 10] } },
  h3: { ncss: { ...headingStyle, fontSize: [5, 6, 7, 8] } },
  h4: { ncss: { ...headingStyle, fontSize: [3, 4, 5, 6] } },
  h5: { ncss: { ...headingStyle, fontSize: [3, 4, 5, 6] } },
  h6: { ncss: { ...headingStyle, fontSize: [3, 4, 5, 6] } },
  image: {
    figcaption: {
      ncss: {
        color: 'text',
        fontFamily: 'text',
        fontSize: [1, 2],
        fontWeight: 3,
        my: 2,
      },
    },
    img: { ncss: {} },
    picture: { ncss: {} },
  },
  list: {
    ncss: {
      color: 'text',
    },
  },
  paragraph: {
    ncss: {
      color: 'text',
      fontSize: [4, 5],
      lineHeight: 4,
      mb: 3,
      mt: 0,
    },
  },
  textIcon: {
    ncss: {
      color: 'iconColor',
      fontFamily: 'text',
      fontSize: 8,
      height: '40px',
      width: '40px',
    },
  },
  video: {
    description: {
      ncss: {
        color: 'text',
        fontSize: [1, 2],
        fontWeight: 3,
        mb: [4, 5],
        mt: 0,
      },
    },
    video: { ncss: {} },
  },
}

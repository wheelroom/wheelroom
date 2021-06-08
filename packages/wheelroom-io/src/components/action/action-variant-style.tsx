import { mediaQuery } from '../../lib/media-query'
import { ActionVariant } from './action-variants'

export interface ActionVariantStyle {
  variant?: ActionVariant
}

const baseStyle = {
  display: 'inline-flex',
  justifyContent: 'center',
  fontSize: '16px',
  padding: '8px 16px',
  userSelect: 'none',
  borderWidth: '1px',
  borderStyle: 'solid',
  borderRadius: '4px',
  borderColor: 'transparent',
  textDecoration: 'none',
  ':focus': {
    outlineColor: 'outline',
  },
  svg: {
    width: '15px',
    height: '15px',
    margin: '0 auto',
    transform: 'translateX(4px)',
  },
}

const primaryStyle = {
  ...baseStyle,
  color: 'white',
  backgroundColor: 'blue',
  borderColor: 'black',
  transition: 'background-color .25s ease',
  ':hover, :focus': {
    backgroundColor: 'darkblue',
  },
}

const secondaryStyle = {
  ...baseStyle,
  color: 'white',
  backgroundColor: 'red',
  borderColor: 'black',
  transition: 'border-color .25s ease',
  ':hover, :focus': {
    borderColor: 'darkred',
  },
}

export const actionVariantStyle = (args: ActionVariantStyle) => {
  let style = {}
  switch (args.variant) {
    case 'primary':
      style = primaryStyle
      break
    case 'secondary':
      style = secondaryStyle
      break
    case 'display':
      style = {
        ...baseStyle,
        ...primaryStyle,
        fontSize: ['27px', '27px', '33px'],
        padding: ['24px 16px', '24px 16px', '32px 16px'],
      }
      break
    case 'link':
      style = {
        ...baseStyle,
        fontSize: '27px',
        backgroundColor: 'transparent',
        color: 'grey',
        border: '0',
        padding: 0,
        textDecoration: 'underline',
      }
      break
    default:
      style = baseStyle
      break
  }
  return mediaQuery(style)
}

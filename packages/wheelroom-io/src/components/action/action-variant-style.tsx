import { CSSProperties } from 'react'
import { mediaQuery } from '../../lib/media-query'
import { ActionVariant } from './action-variants'

export interface ActionVariantStyle {
  variant?: ActionVariant
}

// Size   1:4, 2:8, 3:16, 4:24, 5:32, 6:40, 7:48, 8:60, 9: 72, 10:84
// Font   1:12, 2:13, 3:15, 4:18, 5:22, 6:27, 7:33, 8:40, 9:48, 10:57, 11:67, 12:78, 13:90

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

export const actionVariantStyle = (args: ActionVariantStyle) => {
  let style = {}
  switch (args.variant) {
    case 'primary':
      style = {
        ...baseStyle,
        color: 'white',
        backgroundColor: 'blue',
        borderColor: 'black',
        transition: 'background-color .25s ease',
        ':hover, :focus': {
          backgroundColor: 'darkblue',
        },
      }
      break
    case 'secondary':
      style = {
        ...baseStyle,
        color: 'white',
        backgroundColor: 'red',
        borderColor: 'black',
        transition: 'border-color .25s ease',
        ':hover, :focus': {
          borderColor: 'darkred',
        },
      }
      break
    case 'display':
      style = {
        ...baseStyle,
        fontSize: ['27px', '27px', '33px'],
        padding: ['24px 16px', '24px 16px', '32px 16px'],
      }
      break
    case 'link':
      style = {
        ...baseStyle,
        fontSize: '27px',
        backgroundColor: 'transparent',
        color: 'link',
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

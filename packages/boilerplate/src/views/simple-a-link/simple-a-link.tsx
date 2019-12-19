import * as React from 'react'
import { simpleLinkStyle } from '../../styles/simple-link.js'
import { ALink } from '../core-elements/a-link.js'

export const SimpleALink = (props: any) => {
  const linkStyle = {
    ...simpleLinkStyle,
    color: props.toggleInverse ? 'white' : 'darkBlue',
  }
  return <ALink ncss={linkStyle} children={props.children} href={props.href} />
}

import React from 'react'
import { simpleLinkStyle } from '../../styles/simple-link'
import { ALink } from '../core-elements/a-link'

export const SimpleALink = (props: any) => {
  const linkStyle = {
    ...simpleLinkStyle,
    color: props.toggleInverse ? 'white' : 'darkBlue',
  }
  return <ALink ncss={linkStyle} children={props.children} href={props.href} />
}

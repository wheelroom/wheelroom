import React from 'react'
import { simpleLinkStyle } from '../../styles/simple-link'
import { ALink } from '../core-elements/a-link'

export const SimpleALink = (props: any) => {
  const linkStyle = {
    ...simpleLinkStyle,
    color: props.toggleInverse ? 'white' : 'black',
  }
  return (
    <ALink ncss={linkStyle} href={props.href}>
      {props.children}
    </ALink>
  )
}

import { ALink } from '@jacco-meijer/styled-system'
import * as React from 'react'
import { simpleLinkStyle } from '../../styles/simple-link'

export const SimpleALink = (props: any) => {
  const linkStyle = {
    ...simpleLinkStyle,
    color: props.toggleInverse ? 'white' : 'darkBlue',
  }
  return <ALink {...linkStyle} children={props.children} href={props.href} />
}

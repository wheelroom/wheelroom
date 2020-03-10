import React from 'react'
import { heading2Style } from '../../styles/heading'
import { H2 } from '../../views/core-elements/heading'

export const ListSectionHeading = (props: { heading: string }) => {
  return <H2 ncss={{ ...heading2Style, color: 'heading' }}>{props.heading}</H2>
}

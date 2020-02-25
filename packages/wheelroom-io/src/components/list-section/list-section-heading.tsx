import React from 'react'
import { heading1Style } from '../../styles/heading'
import { Heading } from '../../views/core-elements/heading'

export const ListSectionHeading = (props: { heading: string }) => {
  return <Heading ncss={{ ...heading1Style }}>{props.heading}</Heading>
}

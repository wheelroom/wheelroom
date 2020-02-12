/**
 * Component
 *
 * Component type: listItem
 *
 */

import React from 'react'
import { getVariation } from '../../lib/get-variation'
import { FluidImage } from '../../views/image/image'
import { SectionProps } from '../../sections/section-props'
import { ListItemSingleVar } from './list-item-single-var'

const componentList = {
  ['single']: ListItemSingleVar,
}

export interface ListItemProps extends SectionProps {
  /** Gatsby fetched data */
  __typename: string
  title: string
  view: string
  link: any
  heading: string
  image: FluidImage
  abstract: {
    abstract: string
  }
  extraText: string
}

export const ListItem = (props: ListItemProps) => {
  const Variation = getVariation(props, componentList)

  return <Variation {...props} />
}

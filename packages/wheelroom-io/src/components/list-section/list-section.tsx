/**
 * Component
 *
 * Component type: listSection
 *
 */

import React from 'react'
import { getVariation } from '../../lib/get-variation'
import { SectionProps } from '../../sections/section-props'
import { ListSectionLargeItemsVar } from './list-section-large-items-var'
import { ListSectionSmallItemsVar } from './list-section-small-items-var'

const componentList = {
  ['large items']: ListSectionLargeItemsVar,
  ['small items']: ListSectionSmallItemsVar,
}

export interface ListSectionProps extends SectionProps {
  /** Gatsby fetched data */
  __typename: string
  title: string
  variation: string
  items: any
  heading: string
}

export const ListSection = (props: ListSectionProps) => {
  const Variation = getVariation(props, componentList)

  return <Variation {...props} />
}

/**
 * Component
 *
 * Component type: listSection
 *
 */

import React from 'react'
import { getVariation } from '../../lib/get-variation'
import { SectionProps } from '../../sections/section-props'
import { ListSectionGroteTegelsVar } from './list-section-grote-tegels-var'
import { ListSectionKleineTegelsVar } from './list-section-kleine-tegels-var'

const componentList = {
  ['grote tegels']: ListSectionGroteTegelsVar,
  ['kleine tegels']: ListSectionKleineTegelsVar,
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

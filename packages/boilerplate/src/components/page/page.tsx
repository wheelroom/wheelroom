/**
 * Component
 *
 * Component type: page
 *
 */

import React from 'react'
import { getVariation } from '../../lib/get-variation'
import { FluidImage } from '../../views/image/image'
import { SectionProps } from '../../sections/section-props'
import { PageSingleVar } from './page-single-var'

const componentList = {
  ['single']: PageSingleVar,
}

export interface PageProps extends SectionProps {
  /** Gatsby fetched data */
  listItemHeading: string
  listItemHiddenText: string
  listItemImage: FluidImage
  listItemInfoText: {
    listItemInfoText: string
  }
  listItemView: string
  navigationHeading: string
  pageHeading: string
  pageImage: FluidImage
  pageInfoText: {
    pageInfoText: string
  }
  path: string
  pathName: string
  sections: any
  seoDescription: string
  seoTitle: string
  __typename: string
  title: string
}

export const Page = (props: PageProps) => {
  const Variation = getVariation(props, componentList)

  return <Variation {...props} />
}

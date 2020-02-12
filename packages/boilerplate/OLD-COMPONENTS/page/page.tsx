/**
 * Component interface only
 *
 * Component type: page
 *
 */

import { FluidImage } from '../../views/image/image'

export interface PageProps {
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

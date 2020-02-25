/**
 * Component interface only
 *
 * Component type: page
 *
 */

import { FluidImage } from '../../views/image/image'

export interface PageProps {
  /** Gatsby fetched data */
  __typename: string
  title: string
  path: string
  sections: any
  heading: string
  navigationHeading: string
  image: FluidImage
  abstract: {
    abstract: string
  }
  seoTitle: string
  seoDescription: string
}

/**
 * Component interface only
 *
 * Component type: listItem
 *
 */

import { FluidImage } from '../../views/image/image'

export interface ListItemProps {
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

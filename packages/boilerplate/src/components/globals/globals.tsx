/**
 * Component interface only
 *
 * Component type: globals
 *
 */

import { FluidImage } from '../../views/image/image'

export interface GlobalsProps {
  /** Gatsby fetched data */
  addressLine1: string
  addressLine2: string
  emailAddress: string
  linkedinUrl: string
  phoneNumber: string
  siteAuthor: string
  siteDescription: string
  siteHeading: string
  siteKeywords: string[]
  __typename: string
  title: string
}

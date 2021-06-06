/**
 * Component
 *
 * Component type: mediaBreakpoint
 *
 */
import { MediaGatsbyModel } from './media-gatsby-model'

export interface MediaBreakpointModel {
  /** Gatsby fetched data */
  __typename: string
  small?: MediaGatsbyModel
  medium?: MediaGatsbyModel
  large?: MediaGatsbyModel
  extraLarge?: MediaGatsbyModel
}

/**
 * Component
 *
 * Component type: mediaBreakpoint
 *
 */
import { MediaObject } from '../../elements/types/media'

export interface MediaBreakpointProps {
  /** Gatsby fetched data */
  __typename: string
  small?: MediaObject
  medium?: MediaObject
  large?: MediaObject
  extraLarge?: MediaObject
}

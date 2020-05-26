/**
 * Component
 *
 * Component type: mediaBreakpoint
 *
 */
import { MediaObject } from '../../wheelroom/wheels/element/types/media'

export interface MediaBreakpointProps {
  /** Gatsby fetched data */
  __typename: string
  title: string
  small: MediaObject
  medium: MediaObject
  large: MediaObject
  extraLarge: MediaObject
}

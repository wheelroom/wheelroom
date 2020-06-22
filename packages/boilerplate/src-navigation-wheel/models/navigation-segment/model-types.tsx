/**
 * Component
 *
 * Component type: navigationSegment
 *
 */
import { ActionProps } from "../../../src-core"

export interface NavigationSegmentProps {
  /** Gatsby fetched data */
  __typename: string
  heading?: string
  actions?: ActionProps[]
}

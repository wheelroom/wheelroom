/**
 * Component
 *
 * Component type: mediaBreakpoint
 *
 */

import React from 'react'
import { MediaObject } from '../../wheelroom/wheels/element/types/media'
import { getVariation } from '../../wheelroom/lib/get-variation'
import { MediaBreakpointSingleVar } from './media-breakpoint-single-var'

const componentList = {
  ['single']: MediaBreakpointSingleVar,
}

export interface MediaBreakpointProps {
  /** Gatsby fetched data */
  __typename: string
  title: string
  small: MediaObject
  medium: MediaObject
  large: MediaObject
  extraLarge: MediaObject
}

export const MediaBreakpoint = (props: MediaBreakpointProps) => {
  const Variation = getVariation(props, componentList)

  return <Variation {...props} />
}

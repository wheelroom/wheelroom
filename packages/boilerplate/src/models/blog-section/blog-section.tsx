/**
 * Component
 *
 * Component type: blogSection
 *
 */

import React from 'react'
import { MediaObject } from '../../wheelroom/wheels/element/types/media'
import { getVariation } from '../../wheelroom/lib/get-variation'
import { SectionProps } from '../../wheelroom/sections/section-props'
import { BlogSectionBlogVar } from './blog-section-blog-var'

const componentList = {
  ['blog']: BlogSectionBlogVar,
}

export interface BlogSectionProps extends SectionProps {
  /** Gatsby fetched data */
  __typename: string
  title: string
  variation: string
  blog: any
  eventId: string
}

export const BlogSection = (props: BlogSectionProps) => {
  const Variation = getVariation(props, componentList)

  return <Variation {...props} />
}

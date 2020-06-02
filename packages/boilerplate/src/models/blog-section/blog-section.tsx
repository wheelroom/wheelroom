/**
 * Component
 *
 * Component type: blogSection
 *
 */

import React from 'react'
import { BlogSectionBlogVar } from './blog-section-blog-var'
import { BlogSectionListVar } from './blog-section-list-var'
import { getVariation } from '../../wheelroom/lib/get-variation'
import { SectionProps } from '../../wheelroom/sections/section-props'

const componentList = {
  ['blog']: BlogSectionBlogVar,
  ['list']: BlogSectionListVar,
}

export interface BlogSectionProps extends SectionProps {
  topicOptions: {}
  /** Gatsby fetched data */
  __typename: string
  eventId?: string
  variation?: string
  // Blog property us injected by page-template.tsx
}

export const BlogSection = (props: BlogSectionProps) => {
  const Variation = getVariation(props, componentList)

  return <Variation {...props} />
}

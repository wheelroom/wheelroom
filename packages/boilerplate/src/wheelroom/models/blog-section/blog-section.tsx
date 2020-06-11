/**
 * Component
 *
 * Component type: blogSection
 *
 */

import React from 'react'
import { BlogSectionBlogVar } from './blog-section-blog-var'
import { BlogSectionListVar } from './blog-section-list-var'
import { getVariation } from '../../lib/get-variation'
import { SectionProps } from '../../../page-template/section-props'

const componentList = {
  ['blog']: BlogSectionBlogVar,
  ['list']: BlogSectionListVar,
}

export interface BlogSectionProps extends SectionProps {
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

/**
 * Component
 *
 * Component type: blogSection
 *
 */

import React from 'react'
import { getVariation } from '../../lib/get-variation'
import { BlogSectionBlogVar } from './blog-section-blog-var'
import { BlogSectionListVar } from './blog-section-list-var'
import { BlogSectionProps } from './model-types'

const componentList = {
  ['blog']: BlogSectionBlogVar,
  ['list']: BlogSectionListVar,
}

export const BlogSection = (props: BlogSectionProps) => {
  const Variation = getVariation(props, componentList)

  return <Variation {...props} />
}

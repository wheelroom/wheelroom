/**
 * Component
 *
 * Component type: blogSection
 *
 */

import React from 'react'
import { getVariation } from '@wheelroom/core'
import { BlogSectionBlogVar } from './blog-section-blog-var'
import { BlogSectionListVar } from './blog-section-list-var'
import { BlogSectionModel } from './model'

const componentList = {
  ['blog']: BlogSectionBlogVar,
  ['list']: BlogSectionListVar,
}

export const BlogSection = (props: BlogSectionModel) => {
  const Variation = getVariation(props, componentList)

  return <Variation {...props} />
}

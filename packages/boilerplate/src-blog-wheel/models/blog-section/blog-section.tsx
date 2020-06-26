/**
 * Component
 *
 * Component type: blogSection
 *
 */

import React from 'react'
import { getVariation } from '../../../src-core'
import { BlogSectionBlogVar } from './blog-section-blog-var'
import { BlogSectionListVar } from './blog-section-list-var'
import { BlogSectionModelProps } from './model-types'

const componentList = {
  ['blog']: BlogSectionBlogVar,
  ['list']: BlogSectionListVar,
}

export const BlogSection = (props: BlogSectionModelProps) => {
  const Variation = getVariation(props, componentList)

  return <Variation {...props} />
}

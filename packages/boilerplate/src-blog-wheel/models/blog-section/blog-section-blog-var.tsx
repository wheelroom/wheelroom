/**
 * Component variation
 *
 * Component type: blogSection
 * Variation: Blog
 *
 */

import React from 'react'
import { getWheel } from '../../../src-core'
import { Blog } from './blog/blog'
import { BlogSectionModelProps } from './model-types'
import { BlogSectionWrapper } from './blog-section-wrapper'

export const BlogSectionBlogVar = (props: BlogSectionModelProps) => {
  const wheel = getWheel({
    themeId: props.activeThemeId,
    wheelId: 'blogSection',
    sectionWheels: props.sectionWheels,
    variation: 'blog',
  })

  if (!wheel || !props.blog) {
    return null
  }
  return (
    <BlogSectionWrapper containerStyle="container" wheel={wheel}>
      <Blog
        locale={props.locale}
        blog={props.blog}
        wheel={{ ...wheel, style: wheel.style.blog }}
      />
    </BlogSectionWrapper>
  )
}

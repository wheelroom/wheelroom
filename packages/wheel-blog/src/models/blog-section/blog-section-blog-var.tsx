/**
 * Component variation
 *
 * Component type: blogSection
 * Variation: Blog
 *
 */

import React from 'react'
import { getWheel } from '@wheelroom/core'
import { Blog } from './blog/blog'
import { BlogSectionModel } from './model'
import { BlogSectionWrapper } from './blog-section-wrapper'

export const BlogSectionBlogVar = (props: BlogSectionModel) => {
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

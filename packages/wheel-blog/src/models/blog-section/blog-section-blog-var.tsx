/**
 * Component variation
 *
 * Component type: blogSection
 * Variation: Blog
 *
 */

import React from 'react'
import { getSectionWheel } from '@wheelroom/core'
import { Blog } from './blog/blog'
import { BlogSectionModel } from './model'
import { BlogSectionWrapper } from './blog-section-wrapper'

export const BlogSectionBlogVar = (props: BlogSectionModel) => {
  const sectionWheel = getSectionWheel({
    themeId: props.activeThemeId,
    wheelId: 'blogSection',
    sectionWheels: props.sectionWheels,
    variation: 'blog',
  })
  if (!sectionWheel || !props.blog) {
    return null
  }
  const { data, wheel } = sectionWheel
  return (
    <BlogSectionWrapper containerStyle="container" wheel={wheel}>
      <Blog
        blog={props.blog}
        data={data}
        locale={props.locale}
        wheel={{ ...wheel, style: wheel.style.blog }}
      />
    </BlogSectionWrapper>
  )
}

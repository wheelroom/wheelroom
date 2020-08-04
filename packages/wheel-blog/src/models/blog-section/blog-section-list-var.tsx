/**
 * Component variation
 *
 * Component type: blogSection
 * Variation: List
 *
 */

import React from 'react'
import { getSectionWheel } from '@wheelroom/core'
import { BlogModel } from '../blog/model'
import { BlogSectionModel } from './model'
import { BlogSectionWrapper } from './blog-section-wrapper'
import { List } from './list/list'

export const BlogSectionListVar = (props: BlogSectionModel) => {
  const sectionWheel = getSectionWheel({
    themeId: props.activeThemeId,
    wheelId: 'blogSection',
    sectionWheels: props.sectionWheels,
    variation: 'list',
  })
  if (!sectionWheel || !props.allBlog) {
    return null
  }
  const { data, wheel } = sectionWheel
  const blogPosts: BlogModel[] = props.allBlog.edges.map(
    (edges: any) => edges.node
  )
  return (
    <BlogSectionWrapper containerStyle="container" wheel={wheel}>
      <List
        blogPosts={blogPosts}
        data={data}
        locale={props.locale}
        wheel={{ ...wheel, style: wheel.style.blog }}
      />
    </BlogSectionWrapper>
  )
}

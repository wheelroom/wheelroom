/**
 * Component variation
 *
 * Component type: blogSection
 * Variation: List
 *
 */

import React from 'react'
import { getWheel } from '../../../src-core'
import { BlogModelProps } from '../blog/model-props'
import { BlogSectionModelProps } from './model-props'
import { BlogSectionWrapper } from './blog-section-wrapper'
import { List } from './list/list'

export const BlogSectionListVar = (props: BlogSectionModelProps) => {
  const wheel = getWheel({
    themeId: props.activeThemeId,
    wheelId: 'blogSection',
    sectionWheels: props.sectionWheels,
    variation: 'list',
  })

  if (!wheel || !props.allBlog) {
    return null
  }
  const blogPosts: BlogModelProps[] = props.allBlog.edges.map(
    (edges: any) => edges.node
  )
  return (
    <BlogSectionWrapper containerStyle="container" wheel={wheel}>
      <List
        blogPosts={blogPosts}
        locale={props.locale}
        wheel={{ ...wheel, style: wheel.style.blog }}
      />
    </BlogSectionWrapper>
  )
}

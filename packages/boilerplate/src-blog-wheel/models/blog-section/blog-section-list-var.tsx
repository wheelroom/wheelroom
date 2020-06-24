/**
 * Component variation
 *
 * Component type: blogSection
 * Variation: List
 *
 */

import React from 'react'
import { getWheel } from '../../../src-core'
import { BlogProps } from '../../../src-blog-wheel/models/blog/model-types'
import { BlogSectionProps } from './model-types'
import { BlogSectionWrapper } from './blog-section-wrapper'
import { List } from './list/list'

export const BlogSectionListVar = (props: BlogSectionProps) => {
  const wheel = getWheel({
    themeId: props.activeThemeId,
    wheelId: 'blogSection',
    sectionWheels: props.sectionWheels,
    variation: 'list',
  })

  if (!wheel || !props.allBlog) {
    return null
  }
  const blogPosts: BlogProps[] = props.allBlog.edges.map(
    (edges: any) => edges.node
  )
  return (
    <BlogSectionWrapper containerStyle="container" wheel={wheel}>
      <List
        blogPosts={blogPosts}
        locale={props.locale}
        wheel={{ ...wheel, style: wheel.style.section }}
      />
    </BlogSectionWrapper>
  )
}

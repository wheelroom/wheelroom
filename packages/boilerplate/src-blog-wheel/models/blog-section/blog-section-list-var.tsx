/**
 * Component variation
 *
 * Component type: blogSection
 * Variation: List
 *
 */

import React from 'react'
import { BlogProps } from '../../../src-blog-wheel/models/blog/model-types'
import { getWheel } from '../../../src-core'
import { List } from './list/list'
import { BlogSectionProps } from './model-types'

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
    <List
      blogPosts={blogPosts}
      containerStyle="container"
      locale={props.locale}
      wheel={wheel}
    />
  )
}

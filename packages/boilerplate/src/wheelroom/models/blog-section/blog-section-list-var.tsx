/**
 * Component variation
 *
 * Component type: blogSection
 * Variation: List
 *
 */

import React from 'react'
import { BlogProps } from '../blog/model-types'
import { ScrollSpy } from '../../lib/scroll-spy'
import { getWheel } from '../../lib/get-wheel'
import { List } from './list/list'
import { BlogSectionProps } from './model-types'

export const BlogSectionListVar = (props: BlogSectionProps) => {
  const wheel = getWheel({
    themeId: props.activeThemeId,
    wheelId: 'blog',
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
    <ScrollSpy
      eventId={props.eventId}
      siteEmbeds={props.globals.siteEmbeds || []}
      sectionProps={props}
    >
      <List
        blogPosts={blogPosts}
        containerStyle="container"
        locale={props.locale}
        wheel={wheel}
      />
    </ScrollSpy>
  )
}

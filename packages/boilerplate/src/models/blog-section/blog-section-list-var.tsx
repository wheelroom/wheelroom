/**
 * Component variation
 *
 * Component type: blogSection
 * Variation: List
 *
 */

import React from 'react'
import { BlogProps } from '../blog/blog'
import { BlogList } from '../../wheelroom/wheels/model/blog-list/blog-list'
import { blogSectionListPreset } from '../../wheelroom/wheels/section/blog/presets/blog-section-list-preset'
import { BlogSectionProps } from './blog-section'
import { deepMerge } from '../../wheelroom/lib/deep-merge'
import { getWheel, getSectionStyle } from '../../themes/themes'
import { ScrollSpy } from '../../wheelroom/lib/scroll-spy'
import { ThemeId } from '../../admin-resources/theme-info'
import { Wheel } from '../../wheelroom/wheels/types'

export const BlogSectionListVar = (props: BlogSectionProps) => {
  const wheel: Wheel = getWheel(props.activeThemeId as ThemeId)
  wheel.style = deepMerge([
    blogSectionListPreset,
    getSectionStyle('blogList').base,
  ])
  if (!props.allBlog) {
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
      <BlogList
        blogPosts={blogPosts}
        containerStyle="container"
        locale={props.locale}
        topicOptions={props.topicOptions}
        wheel={wheel}
      />
    </ScrollSpy>
  )
}

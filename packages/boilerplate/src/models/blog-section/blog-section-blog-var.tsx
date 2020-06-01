/**
 * Component variation
 *
 * Component type: blogSection
 * Variation: Blog
 *
 */

import React from 'react'
import { BlogSectionProps } from './blog-section'
import { Wheel } from '../../wheelroom/wheels/types'
import { getWheel, getSectionStyle } from '../../themes/themes'
import { ThemeId } from '../../admin-resources/theme-info'
import { deepMerge } from '../../wheelroom/lib/deep-merge'
import { topicPreset } from '../../wheelroom/wheels/model/topic/presets/topic-preset'
import { pageSectionBlogPreset } from '../../wheelroom/wheels/section/blog/page-section-blog-preset'
import { ScrollSpy } from '../../wheelroom/lib/scroll-spy'
import { PageSectionBlog } from '../../wheelroom/wheels/section/blog/page-section-blog'

export const BlogSectionBlogVar = (props: BlogSectionProps) => {
  const wheel: Wheel = getWheel(props.activeThemeId as ThemeId)
  wheel.style = deepMerge([
    { author: topicPreset },
    pageSectionBlogPreset,
    getSectionStyle('blog').base,
  ])

  if (!props.blog) {
    return null
  }

  return (
    <ScrollSpy
      eventId={props.eventId}
      siteEmbeds={props.globals.siteEmbeds}
      sectionProps={props}
    >
      <PageSectionBlog
        pageSection={props}
        containerStyle="container"
        wheel={wheel}
      />
    </ScrollSpy>
  )
}

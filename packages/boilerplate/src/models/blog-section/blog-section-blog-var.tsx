/**
 * Component variation
 *
 * Component type: blogSection
 * Variation: Blog
 *
 */

import React from 'react'
import { Blog } from '../../wheelroom/wheels/model/blog/blog'
import { blogSectionPreset } from '../../wheelroom/wheels/section/blog/presets/blog-section-preset'
import { BlogSectionProps } from './blog-section'
import { deepMerge } from '../../wheelroom/lib/deep-merge'
import { getWheel, getSectionStyle } from '../../themes/themes'
import { ScrollSpy } from '../../wheelroom/lib/scroll-spy'
import { ThemeId } from '../../admin-resources/theme-info'
import { topicPreset } from '../../wheelroom/wheels/model/topic/presets/topic-preset'
import { Wheel } from '../../wheelroom/wheels/types'

export const BlogSectionBlogVar = (props: BlogSectionProps) => {
  const wheel: Wheel = getWheel(props.activeThemeId as ThemeId)
  wheel.style = deepMerge([
    { author: topicPreset },
    blogSectionPreset,
    getSectionStyle('blog').base,
  ])
  if (!props.blog) {
    return null
  }
  return (
    <ScrollSpy
      eventId={props.eventId}
      siteEmbeds={props.globals.siteEmbeds || []}
      sectionProps={props}
    >
      <Blog
        locale={props.locale}
        blog={props.blog}
        containerStyle="container"
        topicOptions={props.topicOptions}
        wheel={wheel}
      />
    </ScrollSpy>
  )
}

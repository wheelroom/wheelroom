/**
 * Component variation
 *
 * Component type: blogSection
 * Variation: Blog
 *
 */

import React from 'react'
import { Blog } from './blog/blog'
import { blogSectionPreset } from './blog/blog-section-preset'
import { BlogSectionProps } from './model-types'
import { deepMerge } from '../../lib/deep-merge'
import { getWheel, getSectionStyle } from '../../../themes/themes'
import { ScrollSpy } from '../../lib/scroll-spy'
import { ThemeId } from '../../../admin-resources/theme-info'
import { topicPreset } from '../topic/presets/topic-preset'
import { Wheel } from '../../types/wheel'

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
        wheel={wheel}
      />
    </ScrollSpy>
  )
}

/**
 * Component variation
 *
 * Component type: pageSection
 * Variation: Divider
 *
 */

import React from 'react'
import { deepMerge } from '../../wheelroom/lib/deep-merge'
import { getWheel, getSectionStyle } from '../../themes/themes'
import { NotImplemented } from '../../wheelroom/lib/not-implemented'
import { PageSectionBlog } from '../../wheelroom/wheels/section/blog/page-section-blog'
import { pageSectionBlogPreset } from '../../wheelroom/wheels/section/blog/page-section-blog-preset'
import { PageSectionProps } from '../page-section/page-section'
import { ScrollSpy } from '../../wheelroom/lib/scroll-spy'
import { ThemeId } from '../../admin-resources/theme-info'
import { topicPreset } from '../../wheelroom/wheels/model/topic/presets/topic-preset'
import { Wheel } from '../../wheelroom/wheels/types'

export const PageSectionBlogVar = (props: PageSectionProps) => {
  const wheel: Wheel = getWheel(props.activeThemeId as ThemeId)
  wheel.style = deepMerge([
    { author: topicPreset },
    pageSectionBlogPreset,
    getSectionStyle('blog').base,
  ])

  if (!props.blog) {
    return <NotImplemented pageSection={props} wheel={wheel} />
  }

  return (
    <ScrollSpy
      eventId={props.eventId}
      siteEmbeds={props.globals.siteEmbeds}
      pageSectionProps={props}
    >
      <PageSectionBlog
        pageSection={props}
        containerStyle="container"
        wheel={wheel}
      />
    </ScrollSpy>
  )
}

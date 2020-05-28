/**
 * Component variation
 *
 * Component type: pageSection
 * Variation: Divider
 *
 */

import React from 'react'
import { getWheel, getSectionStyle } from '../../themes/themes'
import { PageSectionProps } from '.'
import { ThemeId } from '../../admin-resources/theme-info'
import { Wheel } from '../../wheelroom/wheels/types'
import { deepMerge } from '../../wheelroom/lib/deep-merge'
import { ScrollSpy } from '../../wheelroom/lib/scroll-spy'
import { NotImplemented } from '../../wheelroom/lib/not-implemented'
import { getPageSectionInfo } from '../../wheelroom/lib/get-page-section-info'
import { pageSectionBlogPreset } from '../../wheelroom/wheels/section/blog/page-section-blog-preset'
import { PageSectionBlog } from '../../wheelroom/wheels/section/blog/page-section-blog'
import { topicPreset } from '../../wheelroom/wheels/model/topic/presets/topic-preset'

export const PageSectionBlogVar = (props: PageSectionProps) => {
  const pageSectionInfo = getPageSectionInfo(props)

  const wheel: Wheel = getWheel(props.activeThemeId as ThemeId)
  wheel.style = deepMerge([
    { topic: topicPreset },
    pageSectionBlogPreset,
    getSectionStyle('blog').base,
  ])

  if (!pageSectionInfo.hasBlog) {
    return <NotImplemented pageSection={props} wheel={wheel} />
  }
  return (
    <ScrollSpy
      eventId={props.eventId}
      siteEmbeds={props.globals.siteEmbeds}
      pageSectionProps={props}
    >
      <PageSectionBlog
        maxTopics={1}
        topicProps={{
          pageSectionActions: props.actions,
          fullTopicAsLink: false,
          maxActions: 2,
          pageSectionInfo,
          wheel,
        }}
        pageSection={props}
        containerStyle="container"
        wheel={wheel}
      />
    </ScrollSpy>
  )
}

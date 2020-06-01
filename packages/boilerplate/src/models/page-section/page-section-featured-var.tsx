/**
 * Component variation
 *
 * Component type: pageSection
 * Variation: Featured
 *
 */

import React from 'react'
import { deepMerge } from '../../wheelroom/lib/deep-merge'
import { getPageSectionInfo } from '../../wheelroom/lib/get-page-section-info'
import { getWheel, getSectionStyle } from '../../themes/themes'
import { pageSectionFeaturedPreset } from '../../wheelroom/wheels/section/unicorn/presets/page-section-featured-preset'
import { PageSectionProps } from './page-section'
import { PageSectionUnicorn } from '../../wheelroom/wheels/section/unicorn/page-section-unicorn'
import { ThemeId } from '../../admin-resources/theme-info'
import { topicPreset } from '../../wheelroom/wheels/model/topic/presets/topic-preset'
import { Wheel } from '../../wheelroom/wheels/types'
import { ScrollSpy } from '../../wheelroom/lib/scroll-spy'
import { TopicProps } from '../topic/topic'

export const PageSectionFeaturedVar = (props: PageSectionProps) => {
  const pageSectionInfo = getPageSectionInfo(props)

  const wheel: Wheel = getWheel(props.activeThemeId as ThemeId)
  wheel.style = deepMerge([
    { topic: topicPreset },
    pageSectionFeaturedPreset,
    getSectionStyle('featured').base,
  ])

  const wheelReverse: Wheel = getWheel(props.activeThemeId as ThemeId)
  wheelReverse.style = deepMerge([
    { topic: topicPreset },
    pageSectionFeaturedPreset,
    getSectionStyle('featured').base,
    getSectionStyle('featured').reversed,
  ])

  if (!props.topics) {
    return null
  }

  const topicsPresent =
    props.topics && props.topics.filter((topic: TopicProps) => topic).length > 1

  const topicHeading =
    pageSectionInfo.index <= 1 && !topicsPresent ? 'h1' : 'h2'

  const reversedOrder = pageSectionInfo.topicOptions.reverseOrder

  return (
    <ScrollSpy
      eventId={props.eventId}
      siteEmbeds={props.globals.siteEmbeds}
      sectionProps={props}
    >
      <PageSectionUnicorn
        topicProps={{
          fullTopicAsLink: false,
          maxActions: 2,
          topicOptions: pageSectionInfo.topicOptions,
          useHeadingElement: topicHeading,
          wheel,
        }}
        containerStyle="container"
        topics={props.topics}
        wheel={reversedOrder ? wheelReverse : wheel}
      />
    </ScrollSpy>
  )
}

/**
 * Component variation
 *
 * Component type: pageSection
 * Variation: Card
 *
 */

import React from 'react'
import { deepMerge } from '../../wheelroom/lib/deep-merge'
import { getPageSectionInfo } from '../../wheelroom/lib/get-page-section-info'
import { getWheel, getSectionStyle } from '../../themes/themes'
import { pageSectionCardPreset } from '../../wheelroom/wheels/section/page/presets/page-section-card-preset'
import { PageSectionProps } from './page-section'
import { PageSection } from '../../wheelroom/wheels/section/page/page-section'
import { ThemeId } from '../../admin-resources/theme-info'
import { topicPreset } from '../../wheelroom/wheels/model/topic/presets/topic-preset'
import { Wheel } from '../../wheelroom/wheels/types'
import { ScrollSpy } from '../../wheelroom/lib/scroll-spy'
import { TopicProps } from '../topic/topic'

export const PageSectionCardVar = (props: PageSectionProps) => {
  const pageSectionInfo = getPageSectionInfo(props)

  const wheel: Wheel = getWheel(props.activeThemeId as ThemeId)
  wheel.style = deepMerge([
    { topic: topicPreset },
    pageSectionCardPreset,
    getSectionStyle('card').base,
  ])

  const wheelShadow: Wheel = getWheel(props.activeThemeId as ThemeId)
  wheelShadow.style = deepMerge([
    { topic: topicPreset },
    pageSectionCardPreset,
    getSectionStyle('card').base,
    getSectionStyle('card').shadow,
  ])

  if (!props.topics) {
    return null
  }

  // const topicActionsPresent =
  //   !pageSectionInfo.topicOptions.hideAction &&
  //   props.topics &&
  //   props.topics.filter((topic: TopicProps) => topic.actions).length > 0

  return (
    <ScrollSpy
      eventId={props.eventId}
      siteEmbeds={props.globals.siteEmbeds || []}
      sectionProps={props}
    >
      <PageSection
        topicProps={{
          fullTopicAsLink: true,
          wheel,
        }}
        containerStyle="container"
        topicOptions={props.topicOptions || {}}
        topics={props.topics}
        wheel={wheel}
        // wheel={topicActionsPresent ? wheelShadow : wheel}
      />
    </ScrollSpy>
  )
}

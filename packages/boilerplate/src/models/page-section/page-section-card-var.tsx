/**
 * Component variation
 *
 * Component type: pageSection
 * Variation: Card
 *
 */

import React from 'react'
import { pageSectionCardPreset } from '../../wheelroom/wheels/section/unicorn/presets/page-section-card-preset'
import { deepMerge } from '../../wheelroom/lib/deep-merge'
import { elementStyles } from '../../themes/yosemite/elements/element-styles'
import { getPageSectionInfo } from '../../wheelroom/lib/get-page-section-info'
import { NotImplemented } from '../../wheelroom/lib/not-implemented'
import { PageSectionProps } from './page-section'
import { PageSectionUnicorn } from '../../wheelroom/wheels/section/unicorn/page-section-unicorn'
import { styledSystemConfig } from '../../themes/yosemite/styled-system/styled-system-config'
import { topicPreset } from '../../wheelroom/wheels/model/topic/presets/topic-preset'
import { Wheel } from '../../wheelroom/wheels/types'
import { yosemiteDark } from '../../themes/yosemite/yosemite-dark'
import { yosemiteLight } from '../../themes/yosemite/yosemite-light'
import {
  pageSectionCardShadowStyle,
  sectionCardStyle,
} from '../../themes/yosemite/sections/section-card-style'
import { TopicProps } from '../topic'

export const PageSectionCardVar = (props: PageSectionProps) => {
  const pageSectionInfo = getPageSectionInfo(props)

  const style = deepMerge([
    { topic: topicPreset },
    pageSectionCardPreset,
    sectionCardStyle,
  ])

  const styleShadow = deepMerge([style, pageSectionCardShadowStyle])

  const wheel: Wheel = {
    style,
    elementStyles,
    theme: props.activeThemeId === 'light' ? yosemiteLight : yosemiteDark,
    styledSystemConfig,
  }

  const wheelShadow: Wheel = {
    style: styleShadow,
    elementStyles,
    theme: props.activeThemeId === 'light' ? yosemiteLight : yosemiteDark,
    styledSystemConfig,
  }

  if (pageSectionInfo.hasTopic) {
    const topicActionPresent =
      props.topics.filter((topic: TopicProps) => topic.actions).length > 0
    return (
      <PageSectionUnicorn
        topicProps={{
          pageSectionActions: props.actions,
          fullTopicAsLink: true,
          pageSectionInfo,
          wheel,
        }}
        containerStyle="container"
        pageSection={props}
        wheel={topicActionPresent ? wheelShadow : wheel}
      />
    )
  }
  return <NotImplemented pageSection={props} wheel={wheel} />
}

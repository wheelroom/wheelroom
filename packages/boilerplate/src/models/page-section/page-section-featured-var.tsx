/**
 * Component variation
 *
 * Component type: pageSection
 * Variation: Featured
 *
 */

import React from 'react'
import { deepMerge } from '../../wheelroom/lib/deep-merge'
import { elementStyles } from '../../themes/yosemite/elements/element-styles'
import { getPageSectionInfo } from '../../wheelroom/lib/get-page-section-info'
import { NotImplemented } from '../../wheelroom/lib/not-implemented'
import { pageSectionFeaturedPreset } from '../../wheelroom/wheels/section/unicorn/presets/page-section-featured-preset'
import { PageSectionProps } from './page-section'
import { PageSectionUnicorn } from '../../wheelroom/wheels/section/unicorn/page-section-unicorn'
import { styledSystemConfig } from '../../themes/yosemite/styled-system/styled-system-config'
import { topicPreset } from '../../wheelroom/wheels/model/topic/presets/topic-preset'
import { Wheel } from '../../wheelroom/wheels/types'
import { yosemiteDark } from '../../themes/yosemite/yosemite-dark'
import { yosemiteLight } from '../../themes/yosemite/yosemite-light'
import {
  sectionFeaturedListStyle,
  sectionFeaturedStyle,
} from '../../themes/yosemite/sections/section-featured-style'
import { TopicProps } from '../topic'

export const PageSectionFeaturedVar = (props: PageSectionProps) => {
  const pageSectionInfo = getPageSectionInfo(props)

  const style = deepMerge([
    { topic: topicPreset },
    pageSectionFeaturedPreset,
    sectionFeaturedStyle,
  ])

  const styleFeaturedList = deepMerge([style, sectionFeaturedListStyle])

  const wheel: Wheel = {
    style,
    elementStyles,
    theme: props.activeThemeId === 'light' ? yosemiteLight : yosemiteDark,
    styledSystemConfig,
  }

  const wheelFeaturedList: Wheel = {
    style: styleFeaturedList,
    elementStyles,
    theme: props.activeThemeId === 'light' ? yosemiteLight : yosemiteDark,
    styledSystemConfig,
  }

  if (pageSectionInfo.hasTopic) {
    const topicListPresent =
      props.topics.filter((topic: TopicProps) => topic).length > 1
    const topicHeading =
      pageSectionInfo.index <= 1 && !topicListPresent ? 'h1' : 'h2'
    const topicListHeading = 'h3'
    return (
      <PageSectionUnicorn
        topicProps={{
          pageSectionActions: props.actions,
          fullTopicAsLink: false,
          pageSectionInfo,
          useHeadingElement: topicListPresent ? topicListHeading : topicHeading,
          wheel,
        }}
        containerStyle="container"
        pageSection={props}
        wheel={topicListPresent ? wheelFeaturedList : wheel}
      />
    )
  }
  return <NotImplemented pageSection={props} wheel={wheel} />
}

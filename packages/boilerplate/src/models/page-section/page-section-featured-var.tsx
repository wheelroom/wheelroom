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
  sectionFeaturedReverseStyle,
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

  const styleReverse = deepMerge([style, sectionFeaturedReverseStyle])

  const wheel: Wheel = {
    style,
    elementStyles,
    theme: props.activeThemeId === 'light' ? yosemiteLight : yosemiteDark,
    styledSystemConfig,
  }

  const wheelReverse: Wheel = {
    style: styleReverse,
    elementStyles,
    theme: props.activeThemeId === 'light' ? yosemiteLight : yosemiteDark,
    styledSystemConfig,
  }

  if (pageSectionInfo.hasTopic) {
    const topicsPresent =
      props.topics.filter((topic: TopicProps) => topic).length > 1

    const topicHeading =
      pageSectionInfo.index <= 1 && !topicsPresent ? 'h1' : 'h2'

    const reversedOrder = pageSectionInfo.topicOptions.reverseOrder

    return (
      <PageSectionUnicorn
        topicProps={{
          pageSectionActions: props.actions,
          fullTopicAsLink: false,
          pageSectionInfo,
          useHeadingElement: topicHeading,
          wheel,
        }}
        containerStyle="container"
        pageSection={props}
        wheel={reversedOrder ? wheelReverse : wheel}
      />
    )
  }
  return <NotImplemented pageSection={props} wheel={wheel} />
}

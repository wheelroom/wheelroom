/**
 * Component variation
 *
 * Component type: pageSection
 * Variation: Video
 *
 */

import React from 'react'
import { deepMerge } from '../../wheelroom/lib/deep-merge'
import { elementStyles } from '../../themes/yosemite/element-presets'
import { getPageSectionInfo } from '../../wheelroom/lib/get-page-section-info'
import { NotImplemented } from '../../wheelroom/lib/not-implemented'
import { PageSectionProps } from './page-section'
import { PageSectionUnicorn } from '../../wheelroom/wheels/page-section/unicorn/page-section-unicorn'
import { pageSectionVideoPreset } from '../../wheelroom/wheels/page-section/unicorn/page-section-video-preset'
import { styledSystemConfig } from '../../themes/yosemite/styled-system-config'
import { topicPreset } from '../../wheelroom/wheels/topic/presets/topic-preset'
import { Wheel } from '../../wheelroom/wheels/types'
import { yosemiteDark } from '../../themes/yosemite/yosemite-dark'
import { yosemiteLight } from '../../themes/yosemite/yosemite-light'
import { pageSectionVideoStyle } from '../../themes/yosemite/page-section/page-section-video-style'

export const PageSectionVideoVar = (props: PageSectionProps) => {
  const pageSectionInfo = getPageSectionInfo(props)

  const style = deepMerge([
    { topic: topicPreset },
    pageSectionVideoPreset,
    pageSectionVideoStyle,
  ])

  const wheel: Wheel = {
    style,
    elementStyles,
    theme: props.activeThemeId === 'light' ? yosemiteLight : yosemiteDark,
    styledSystemConfig,
  }

  if (pageSectionInfo.hasTopic) {
    return (
      <PageSectionUnicorn
        topicProps={{
          pageSectionActions: props.actions,
          pageSectionInfo,
          wheel,
        }}
        containerStyle="fluid"
        maxTopics={1}
        pageSection={props}
        wheel={wheel}
      />
    )
  }
  return <NotImplemented pageSection={props} wheel={wheel} />
}

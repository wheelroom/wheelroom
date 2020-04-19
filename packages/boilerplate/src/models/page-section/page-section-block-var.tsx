/**
 * Component variation
 *
 * Component type: pageSection
 * Variation: Block
 *
 */

import React from 'react'
import { deepMerge } from '../../wheelroom/lib/deep-merge'
import { elementStyles } from '../../themes/yosemite/element-styles'
import { getPageSectionInfo } from '../../wheelroom/lib/get-page-section-info'
import { NotImplemented } from '../../wheelroom/lib/not-implemented'
import { pageSectionBlockPreset } from '../../wheelroom/wheels/section/unicorn/presets/page-section-block-preset'
import { PageSectionProps } from './page-section'
import { PageSectionUnicorn } from '../../wheelroom/wheels/section/unicorn/page-section-unicorn'
import { styledSystemConfig } from '../../themes/yosemite/styled-system-config'
import { topicPreset } from '../../wheelroom/wheels/model/topic/presets/topic-preset'
import { Wheel } from '../../wheelroom/wheels/types'
import { yosemiteDark } from '../../themes/yosemite/yosemite-dark'
import { yosemiteLight } from '../../themes/yosemite/yosemite-light'
import { pageSectionBlockStyle } from '../../themes/yosemite/section/page-section-block-style'

export const PageSectionBlockVar = (props: PageSectionProps) => {
  const pageSectionInfo = getPageSectionInfo(props)

  const style = deepMerge([
    { topic: topicPreset },
    pageSectionBlockPreset,
    pageSectionBlockStyle,
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
          fullTopicAsLink: false,
          pageSectionActions: props.actions,
          pageSectionInfo,
          wheel,
        }}
        containerStyle="maxWidth"
        pageSection={props}
        wheel={wheel}
      />
    )
  }
  return <NotImplemented pageSection={props} wheel={wheel} />
}

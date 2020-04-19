/**
 * Component variation
 *
 * Component type: pageSection
 * Variation: Image
 *
 */

import React from 'react'
import { deepMerge } from '../../wheelroom/lib/deep-merge'
import { elementStyles } from '../../themes/yosemite/element-styles'
import { getPageSectionInfo } from '../../wheelroom/lib/get-page-section-info'
import { NotImplemented } from '../../wheelroom/lib/not-implemented'
import { pageSectionImagePreset } from '../../wheelroom/wheels/section/unicorn/presets/page-section-image-preset'
import { PageSectionProps } from './page-section'
import { PageSectionUnicorn } from '../../wheelroom/wheels/section/unicorn/page-section-unicorn'
import { styledSystemConfig } from '../../themes/yosemite/styled-system-config'
import { topicPreset } from '../../wheelroom/wheels/model/topic/presets/topic-preset'
import { Wheel } from '../../wheelroom/wheels/types'
import { yosemiteDark } from '../../themes/yosemite/yosemite-dark'
import { yosemiteLight } from '../../themes/yosemite/yosemite-light'
import { sectionImageStyle } from '../../themes/yosemite/sections/section-image-style'

export const PageSectionImageVar = (props: PageSectionProps) => {
  const pageSectionInfo = getPageSectionInfo(props)

  const style = deepMerge([
    { topic: topicPreset },
    pageSectionImagePreset,
    sectionImageStyle,
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
        maxTopics={2}
        pageSection={props}
        wheel={wheel}
      />
    )
  }
  return <NotImplemented pageSection={props} wheel={wheel} />
}

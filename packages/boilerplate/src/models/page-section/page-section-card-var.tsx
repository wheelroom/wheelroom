/**
 * Component variation
 *
 * Component type: pageSection
 * Variation: Card
 *
 */

import React from 'react'
import { PageSectionProps } from './page-section'
import { NotImplemented } from '../../wheelroom/lib/not-implemented'
import { getPageSectionInfo } from '../../wheelroom/lib/get-page-section-info'
import {
  pageSectionCardTreeStyle,
  pageSectionCardTreeShadowStyle,
} from '../../wheelroom/wheels/page-section/unicorn/page-section-card-preset'
import { PageSectionUnicorn } from '../../wheelroom/wheels/page-section/unicorn/page-section-unicorn'
import { deepMerge } from '../../wheelroom/lib/deep-merge'
import { topicPreset } from '../../wheelroom/wheels/topic/topic-preset'
import { Wheel } from '../../wheelroom/wheels/types'
import { styledSystemThemeDark } from '../../themes/yosemite/styled-system-theme-dark'
import { elementPresets } from '../../themes/yosemite/element-presets'
import { styledSystemConfig } from '../../themes/yosemite/styled-system/config'

export const PageSectionCardVar = (props: PageSectionProps) => {
  const pageSectionInfo = getPageSectionInfo(props)

  const style = deepMerge(
    { topic: topicPreset },
    { ...pageSectionCardTreeStyle }
  )
  const styleShadow = deepMerge(
    { topic: topicPreset },
    { ...pageSectionCardTreeShadowStyle }
  )
  const wheel: Wheel = {
    style,
    elementPresets,
    styledSystemTheme: styledSystemThemeDark,
    styledSystemConfig,
  }
  const wheelShadow: Wheel = {
    style: styleShadow,
    elementPresets,
    styledSystemTheme: styledSystemThemeDark,
    styledSystemConfig,
  }

  if (pageSectionInfo.hasTopic) {
    return (
      <PageSectionUnicorn
        topicProps={{
          pageSectionActions: props.actions,
          fullTopicAsLink: true,
          pageSectionInfo,
          wheel,
        }}
        containerStyle="maxWidth"
        pageSection={props}
        wheel={pageSectionInfo.topicOptions.hideAction ? wheel : wheelShadow}
      />
    )
  }
  return <NotImplemented pageSection={props} wheel={wheel} />
}

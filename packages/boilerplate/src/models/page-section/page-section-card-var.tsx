/**
 * Component variation
 *
 * Component type: pageSection
 * Variation: Card
 *
 */

import React from 'react'
import {
  pageSectionCardPreset,
  // pageSectionCardShadowPreset,
} from '../../wheelroom/wheels/page-section/unicorn/page-section-card-preset'
import { deepMerge } from '../../wheelroom/lib/deep-merge'
import { elementPresets } from '../../themes/yosemite/element-presets'
import { getPageSectionInfo } from '../../wheelroom/lib/get-page-section-info'
import { NotImplemented } from '../../wheelroom/lib/not-implemented'
import { PageSectionProps } from './page-section'
import { PageSectionUnicorn } from '../../wheelroom/wheels/page-section/unicorn/page-section-unicorn'
import { styledSystemConfig } from '../../themes/yosemite/styled-system-config'
import { topicPreset } from '../../wheelroom/wheels/topic/presets/topic-preset'
import { Wheel } from '../../wheelroom/wheels/types'
import { yosemiteDark } from '../../themes/yosemite/yosemite-dark'
import { yosemiteLight } from '../../themes/yosemite/yosemite-light'

export const PageSectionCardVar = (props: PageSectionProps) => {
  const pageSectionInfo = getPageSectionInfo(props)

  const style = deepMerge({ topic: topicPreset }, { ...pageSectionCardPreset })
  const styleShadow = deepMerge(
    { topic: topicPreset },
    { ...pageSectionCardPreset }
  )
  const wheel: Wheel = {
    style,
    elementPresets,
    theme: props.activeThemeId === 'light' ? yosemiteLight : yosemiteDark,
    styledSystemConfig,
  }
  const wheelShadow: Wheel = {
    style: styleShadow,
    elementPresets,
    theme: yosemiteLight,
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

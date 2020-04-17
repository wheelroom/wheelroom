/**
 * Component variation
 *
 * Component type: pageSection
 * Variation: Text
 *
 */

import React from 'react'
import { elementPresets } from '../../themes/yosemite/element-presets'
import { getPageSectionInfo } from '../../wheelroom/lib/get-page-section-info'
import { NotImplemented } from '../../wheelroom/lib/not-implemented'
import { PageSectionFreestyle } from '../../wheelroom/wheels/page-section/freestyle/page-section-freestyle'
import { pageSectionFreestylePreset } from '../../wheelroom/wheels/page-section/freestyle/page-section-freestyle-preset'
import { PageSectionProps } from './page-section'
import { styledSystemConfig } from '../../themes/yosemite/styled-system-config'
import { Wheel } from '../../wheelroom/wheels/types'
import { yosemiteDark } from '../../themes/yosemite/yosemite-dark'
import { yosemiteLight } from '../../themes/yosemite/yosemite-light'
import { deepMerge } from '../../wheelroom/lib/deep-merge'
import { topicPreset } from '../../wheelroom/wheels/topic/presets/topic-preset'

export const PageSectionTextVar = (props: PageSectionProps) => {
  const pageSectionInfo = getPageSectionInfo(props)

  const style = deepMerge([{ topic: topicPreset }, pageSectionFreestylePreset])

  const wheel: Wheel = {
    style,
    elementPresets,
    theme: props.activeThemeId === 'light' ? yosemiteLight : yosemiteDark,
    styledSystemConfig,
  }

  if (pageSectionInfo.hasText) {
    return (
      <PageSectionFreestyle
        pageSection={props}
        containerStyle="maxWidth"
        wheel={wheel}
      />
    )
  }
  return <NotImplemented pageSection={props} wheel={wheel} />
}

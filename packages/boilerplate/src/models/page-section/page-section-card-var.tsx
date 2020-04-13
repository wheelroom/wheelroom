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
  pageSectionCardPreset,
  pageSectionCardShadowPreset,
} from '../../wheelroom/wheels/page-section/unicorn/page-section-card-preset'
import { PageSectionUnicorn } from '../../wheelroom/wheels/page-section/unicorn/page-section-unicorn'
import { deepMerge } from '../../wheelroom/lib/deep-merge'
import { topicPreset } from '../../wheelroom/wheels/topic/presets/topic-preset'
import { Wheel } from '../../wheelroom/wheels/types'
import { yosemiteLight } from '../../themes/yosemite/yosemite-light'
import { elementPresets } from '../../themes/yosemite/element-presets'
import { styledSystemConfig } from '../../themes/yosemite/styled-system-config'

export const PageSectionCardVar = (props: PageSectionProps) => {
  // TODO: Remove demo force reverse
  const pageSectionInfo = getPageSectionInfo(props, {
    reverseOrder: true,
  })

  const style = deepMerge({ topic: topicPreset }, { ...pageSectionCardPreset })
  const styleShadow = deepMerge(
    { topic: topicPreset },
    { ...pageSectionCardShadowPreset }
  )
  const wheel: Wheel = {
    style,
    elementPresets,
    theme: yosemiteLight,
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

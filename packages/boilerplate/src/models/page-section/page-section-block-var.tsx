/**
 * Component variation
 *
 * Component type: pageSection
 * Variation: Block
 *
 */

import React from 'react'
import { PageSectionProps } from './page-section'
import { NotImplemented } from '../../wheelroom/lib/not-implemented'
import { getPageSectionInfo } from '../../wheelroom/lib/get-page-section-info'
import { pageSectionBlockTreeStyle } from '../../wheelroom/wheels/page-section/unicorn/page-section-block-preset'
import { PageSectionUnicorn } from '../../wheelroom/wheels/page-section/unicorn/page-section-unicorn'
import { deepMerge } from '../../wheelroom/lib/deep-merge'
import { topicPreset } from '../../wheelroom/wheels/topic/presets/topic-preset'
import { Wheel } from '../../wheelroom/wheels/types'
import { elementPresets } from '../../themes/yosemite/element-presets'
import { yosemiteDark } from '../../themes/yosemite/yosemite-dark'
import { styledSystemConfig } from '../../themes/yosemite/styled-system-config'

export const PageSectionBlockVar = (props: PageSectionProps) => {
  const pageSectionInfo = getPageSectionInfo(props)

  const style = deepMerge(
    { topic: topicPreset },
    { ...pageSectionBlockTreeStyle }
  )
  const wheel: Wheel = {
    style,
    elementPresets,
    theme: yosemiteDark,
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

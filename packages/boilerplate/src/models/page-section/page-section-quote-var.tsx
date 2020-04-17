/**
 * Component variation
 *
 * Component type: pageSection
 * Variation: Quote
 *
 */

import React from 'react'
import { deepMerge } from '../../wheelroom/lib/deep-merge'
import { elementPresets } from '../../themes/yosemite/element-presets'
import { getPageSectionInfo } from '../../wheelroom/lib/get-page-section-info'
import { NotImplemented } from '../../wheelroom/lib/not-implemented'
import { PageSectionProps } from './page-section'
import { pageSectionQuotePreset } from '../../wheelroom/wheels/page-section/unicorn/page-section-quote-preset'
import { PageSectionUnicorn } from '../../wheelroom/wheels/page-section/unicorn/page-section-unicorn'
import { styledSystemConfig } from '../../themes/yosemite/styled-system-config'
import { topicPreset } from '../../wheelroom/wheels/topic/presets/topic-preset'
import { Wheel } from '../../wheelroom/wheels/types'
import { yosemiteDark } from '../../themes/yosemite/yosemite-dark'
import { yosemiteLight } from '../../themes/yosemite/yosemite-light'

export const PageSectionQuoteVar = (props: PageSectionProps) => {
  const pageSectionInfo = getPageSectionInfo(props)

  const style = deepMerge([{ topic: topicPreset }, pageSectionQuotePreset])

  const wheel: Wheel = {
    style,
    elementPresets,
    theme: props.activeThemeId === 'light' ? yosemiteLight : yosemiteDark,
    styledSystemConfig,
  }

  if (pageSectionInfo.hasTopic) {
    return (
      <PageSectionUnicorn
        topicProps={{
          pageSectionActions: props.actions,
          pageSectionInfo,
          useHeadingElement: 'p',
          useAbstractElement: 'blockquote',
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

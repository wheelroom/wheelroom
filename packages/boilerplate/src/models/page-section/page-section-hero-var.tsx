/**
 * Component variation
 *
 * Component type: pageSection
 * Variation: Hero
 *
 */

import React from 'react'
import { PageSectionProps } from './page-section'
import { NotImplemented } from '../../wheelroom/lib/not-implemented'
import { getPageSectionInfo } from '../../wheelroom/lib/get-page-section-info'
import { pageSectionHeroTreeStyle } from '../../wheelroom/wheels/page-section/unicorn/page-section-hero-preset'
import { PageSectionUnicorn } from '../../wheelroom/wheels/page-section/unicorn/page-section-unicorn'
import { deepMerge } from '../../wheelroom/lib/deep-merge'
import { topicPreset } from '../../wheelroom/wheels/topic/topic-preset'
import { elementPresets } from '../../themes/yosemite/element-presets'
import { styledSystemThemeDark } from '../../themes/yosemite/styled-system-theme-dark'
import { styledSystemConfig } from '../../themes/yosemite/styled-system/config'
import { Wheel } from '../../wheelroom/wheels/types'

export const PageSectionHeroVar = (props: PageSectionProps) => {
  const pageSectionInfo = getPageSectionInfo(props)

  const style = deepMerge(
    { topic: topicPreset },
    { ...pageSectionHeroTreeStyle }
  )
  const wheel: Wheel = {
    style,
    elementPresets,
    styledSystemTheme: styledSystemThemeDark,
    styledSystemConfig,
  }

  if (pageSectionInfo.hasTopic) {
    return (
      <PageSectionUnicorn
        topicProps={{
          pageSectionActions: props.actions,
          pageSectionInfo,
          useHeadingElement: pageSectionInfo.index <= 1 ? 'h1' : 'h2',
          wheel,
        }}
        containerStyle="fluid"
        pageSection={props}
        wheel={wheel}
      />
    )
  }
  return <NotImplemented pageSection={props} wheel={wheel} />
}

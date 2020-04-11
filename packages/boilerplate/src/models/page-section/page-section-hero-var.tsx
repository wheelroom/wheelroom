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
import { pageSectionHeroTreeStyle } from '../../wheelroom/presets/page-section/topic/page-section-hero-preset-style'
import { PageSectionTopicPreset } from '../../wheelroom/presets/page-section/topic/page-section-topic-preset'
import { addCssLabels } from '../../wheelroom/lib/add-css-labels'
import { deepMerge } from '../../wheelroom/lib/deep-merge'
import { topicTreeStyle } from '../../wheelroom/presets/topic/topic-preset-style'

export const PageSectionHeroVar = (props: PageSectionProps) => {
  const pageSectionInfo = getPageSectionInfo(props)

  // Four things happen here:
  // - Use default topic styling
  // - Merge in styling for this variant
  // - Create a deep copy of the styling
  const treeStyle = deepMerge(
    { topic: topicTreeStyle },
    { ...pageSectionHeroTreeStyle }
  )

  addCssLabels('hero', treeStyle)

  if (pageSectionInfo.hasTopic) {
    return (
      <PageSectionTopicPreset
        topicProps={{
          pageSectionActions: props.actions,
          pageSectionInfo,
          useHeadingElement: pageSectionInfo.index <= 1 ? 'h1' : 'h2',
        }}
        containerStyle="fluid"
        pageSection={props}
        treeStyle={treeStyle}
      />
    )
  }
  return <NotImplemented {...props} />
}

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
} from '../../wheelroom/presets/page-section/topic/page-section-card-preset-style'
import { PageSectionTopicPreset } from '../../wheelroom/presets/page-section/topic/page-section-topic-preset'
import { addCssLabels } from '../../wheelroom/lib/add-css-labels'
import { deepMerge } from '../../wheelroom/lib/deep-merge'
import { topicTreeStyle } from '../../wheelroom/presets/topic/topic-preset-style'

export const PageSectionCardVar = (props: PageSectionProps) => {
  const pageSectionInfo = getPageSectionInfo(props)

  // Four things happen here:
  // - Use default topic styling
  // - Merge in styling for this variant
  // - Create a deep copy of the styling
  const treeStyle = deepMerge(
    { topic: topicTreeStyle },
    { ...pageSectionCardTreeStyle }
  )
  const treeShadowStyle = deepMerge(
    { topic: topicTreeStyle },
    { ...pageSectionCardTreeShadowStyle }
  )

  addCssLabels('card', treeStyle)
  addCssLabels('card-shadow', treeShadowStyle)

  if (pageSectionInfo.hasTopic) {
    return (
      <PageSectionTopicPreset
        topicProps={{
          pageSectionActions: props.actions,
          fullTopicAsLink: true,
          pageSectionInfo,
        }}
        containerStyle="maxWidth"
        pageSection={props}
        treeStyle={
          pageSectionInfo.topicOptions.hideAction ? treeStyle : treeShadowStyle
        }
      />
    )
  }
  return <NotImplemented {...props} />
}

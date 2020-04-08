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
import { pageSectionHeroTreeStyle } from '../../wheelroom/trees/page-section/hero/page-section-hero-tree-style'
import { PageSectionTopicTree } from '../../wheelroom/trees/page-section/topic/page-section-topic-tree'
import { addCssLabels } from '../../wheelroom/lib/add-css-labels'

export const PageSectionHeroVar = (props: PageSectionProps) => {
  const pageSectionInfo = getPageSectionInfo(props)
  addCssLabels('psHero', pageSectionHeroTreeStyle)

  if (pageSectionInfo.hasTopic) {
    return (
      <PageSectionTopicTree
        topicProps={{
          pageSectionActions: props.actions,
          pageSectionInfo,
          useHeadingElement: pageSectionInfo.index <= 1 ? 'h1' : 'h2',
        }}
        containerStyle="fluid"
        pageSection={props}
        treeStyle={pageSectionHeroTreeStyle}
      />
    )
  }
  return <NotImplemented {...props} />
}

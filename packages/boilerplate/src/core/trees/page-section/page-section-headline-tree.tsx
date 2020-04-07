import React from 'react'
import { Box, ContainerMaxWidth } from '../../elements/grid'
import { getPageSectionInfo } from '../../lib/get-page-section-info'
import { PageSectionProps } from '../../../models/page-section/page-section'
import { TopicTreeStyle, TopicTree } from '../topic/topic-tree'
import { NcssProps } from '../../elements/types'

export interface PageSectionHeadlineTreeStyle {
  topic: TopicTreeStyle
  wrapper: NcssProps
}

export const PageSectionHeadlineTree = (props: {
  pageSection: PageSectionProps
  treeStyle: PageSectionHeadlineTreeStyle
}) => {
  const pageSectionInfo = getPageSectionInfo(props.pageSection)
  if (!pageSectionInfo.hasTopic) {
    return null
  }
  const treeStyle = props.treeStyle || {}
  const topic = props.pageSection.topics[0]
  return (
    <Box is="div" ncss={treeStyle.wrapper}>
      <ContainerMaxWidth>
        <TopicTree
          {...topic}
          pageSectionActions={props.pageSection.actions}
          pageSectionInfo={pageSectionInfo}
          useHeadingElement={pageSectionInfo.index <= 1 ? 'h1' : 'h2'}
          treeStyle={treeStyle.topic}
        />
      </ContainerMaxWidth>
    </Box>
  )
}

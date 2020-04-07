import React from 'react'
import { Box, ContainerMaxWidth } from '../../elements/grid'
import { PageSectionProps } from '../../../models/page-section/page-section'
import { getPageSectionInfo } from '../../lib/get-page-section-info'
import { TopicTreeStyle, TopicTree } from '../topic/topic-tree'
import { NcssProps } from '../../elements/types'

export interface PageSectionFeaturedTreeStyle {
  topic: TopicTreeStyle
  wrapper: NcssProps
  container: NcssProps
}

export const PageSectionFeaturedTree = (props: {
  pageSection: PageSectionProps
  treeStyle: PageSectionFeaturedTreeStyle
}) => {
  const pageSectionInfo = getPageSectionInfo(props.pageSection)
  if (!pageSectionInfo.hasTopic) {
    return null
  }
  const treeStyle = props.treeStyle || {}
  const topic = props.pageSection.topics[0]
  return (
    <Box is="div" ncss={treeStyle.wrapper}>
      <ContainerMaxWidth ncss={treeStyle.container}>
        <TopicTree
          {...topic}
          pageSectionActions={props.pageSection.actions}
          pageSectionInfo={pageSectionInfo}
          useHeadingElement="h3"
          treeStyle={treeStyle.topic}
        />
      </ContainerMaxWidth>
    </Box>
  )
}

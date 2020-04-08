import React from 'react'
import { Box, ContainerMaxWidth } from '../../../elements/grid'
import { getPageSectionInfo } from '../../../lib/get-page-section-info'
import { PageSectionProps } from '../../../../models/page-section/page-section'
import { TopicTree } from '../../topic/topic-tree'
import { PageSectionVideoTreeStyle } from './page-section-video-tree-style'

export const PageSectionVideoTree = (props: {
  pageSection: PageSectionProps
  treeStyle: PageSectionVideoTreeStyle
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
          useHeadingElement="h4"
          treeStyle={treeStyle.topic}
        />
      </ContainerMaxWidth>
    </Box>
  )
}

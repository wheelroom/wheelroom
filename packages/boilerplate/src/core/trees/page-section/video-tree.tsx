import React from 'react'
import { Box, ContainerMaxWidth } from '../../elements/grid'
import { Topic } from '../../../models/topic'
import { getPageSectionInfo } from '../../lib/get-page-section-info'
import { PageSectionProps } from '../../../models/page-section/page-section'
import { TopicStyleTree } from '../topic/topic-tree'
import { NcssProps } from '../../elements/types'

export interface VideoTreeStyle {
  topic: TopicStyleTree
  wrapper: NcssProps
  container: NcssProps
}

export const VideoTree = (props: {
  pageSection: PageSectionProps
  treeStyle: VideoTreeStyle
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
        <Topic
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

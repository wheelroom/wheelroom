import React from 'react'
import { Box, ContainerMaxWidth } from '../elements/grid'
import { Topic } from '../../components/topic'
import { getPageSectionInfo } from '../lib/get-page-section-info'
import { PageSectionProps } from '../../components/page-section/page-section'
import { TopicStyleTree } from '../views/topic/core-topic'
import { NcssProps } from '../elements/types'

export interface VideoDisplayStyleTree {
  topic: TopicStyleTree
  wrapper: NcssProps
  container: NcssProps
}

export const VideoDisplay = (props: {
  pageSection: PageSectionProps
  styleTree: VideoDisplayStyleTree
}) => {
  const pageSectionInfo = getPageSectionInfo(props.pageSection)
  if (!pageSectionInfo.hasTopic) {
    return null
  }
  const styleTree = props.styleTree || {}
  const topic = props.pageSection.topics[0]
  return (
    <Box is="div" ncss={styleTree.wrapper}>
      <ContainerMaxWidth ncss={styleTree.container}>
        <Topic
          {...topic}
          pageSectionActions={props.pageSection.actions}
          pageSectionInfo={pageSectionInfo}
          useHeadingElement="h4"
          styleTree={styleTree.container}
        />
      </ContainerMaxWidth>
    </Box>
  )
}

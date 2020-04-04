import React from 'react'
import { Box, ContainerMaxWidth } from '../elements/grid'
import { PageSectionProps } from '../../models/page-section/page-section'
import { getPageSectionInfo } from '../lib/get-page-section-info'
import { Topic } from '../../models/topic'
import { TopicStyleTree } from '../views/topic/core-topic'
import { NcssProps } from '../elements/types'

export interface BlockDisplayStyleTree {
  topic: TopicStyleTree
  wrapper: NcssProps
  container: NcssProps
}

export const BlockDisplay = (props: {
  pageSection: PageSectionProps
  styleTree: BlockDisplayStyleTree
}) => {
  const pageSectionInfo = getPageSectionInfo(props.pageSection)
  if (!pageSectionInfo.hasTopic) {
    return null
  }
  const styleTree = props.styleTree || {}

  return (
    <Box is="div" ncss={styleTree.wrapper}>
      <ContainerMaxWidth ncss={styleTree.container}>
        {props.pageSection.topics.map((topic, index) => (
          <Topic
            key={index}
            {...topic}
            pageSectionActions={props.pageSection.actions}
            pageSectionInfo={pageSectionInfo}
            fullTopicAsLink={false}
            styleTree={styleTree.topic}
          />
        ))}
      </ContainerMaxWidth>
    </Box>
  )
}

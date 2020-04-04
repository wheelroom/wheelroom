import React from 'react'
import { Box, ContainerMaxWidth } from '../elements/grid'
import { PageSectionProps } from '../../models/page-section/page-section'
import { getPageSectionInfo } from '../lib/get-page-section-info'
import { Topic } from '../../models/topic/topic'
import { TopicStyleTree } from '../model-views/topic/core-topic'
import { NcssProps } from '../elements/types'

export interface CardDisplayStyleTree {
  conditional: {
    topicWrapperShadow: NcssProps
  }
  topic: TopicStyleTree
  wrapper: NcssProps
  container: NcssProps
}

export const CardDisplay = (props: {
  pageSection: PageSectionProps
  styleTree: CardDisplayStyleTree
}) => {
  const pageSectionInfo = getPageSectionInfo(props.pageSection)
  if (!pageSectionInfo.hasTopic) {
    return null
  }
  const styleTree = props.styleTree || {}
  if (!pageSectionInfo.topicOptions.hideAction) {
    Object.assign(
      styleTree.topic.wrapper,
      styleTree.conditional.topicWrapperShadow
    )
  }

  return (
    <Box is="div" ncss={styleTree.wrapper}>
      <ContainerMaxWidth ncss={styleTree.container}>
        {props.pageSection.topics.map((topic, index) => (
          <Topic
            key={index}
            {...topic}
            pageSectionActions={props.pageSection.actions}
            pageSectionInfo={pageSectionInfo}
            fullTopicAsLink={true}
            styleTree={styleTree.topic}
          />
        ))}
      </ContainerMaxWidth>
    </Box>
  )
}

import React from 'react'
import { Box, ContainerMaxWidth } from '../../elements/grid'
import { PageSectionProps } from '../../../models/page-section/page-section'
import { getPageSectionInfo } from '../../lib/get-page-section-info'
import { TopicTreeStyle, TopicTree } from '../topic/topic-tree'
import { NcssProps } from '../../elements/types'

export interface PageSectionCardTreeStyle {
  conditional: {
    topicWrapperShadow: NcssProps
  }
  topic: TopicTreeStyle
  wrapper: NcssProps
  container: NcssProps
}

export const PageSectionCardTree = (props: {
  pageSection: PageSectionProps
  treeStyle: PageSectionCardTreeStyle
}) => {
  const pageSectionInfo = getPageSectionInfo(props.pageSection)
  if (!pageSectionInfo.hasTopic) {
    return null
  }
  const treeStyle = props.treeStyle || {}
  if (!pageSectionInfo.topicOptions.hideAction) {
    Object.assign(
      treeStyle.topic.wrapper,
      treeStyle.conditional.topicWrapperShadow
    )
  }

  return (
    <Box is="div" ncss={treeStyle.wrapper}>
      <ContainerMaxWidth ncss={treeStyle.container}>
        {props.pageSection.topics.map((topic, index) => (
          <TopicTree
            key={index}
            {...topic}
            pageSectionActions={props.pageSection.actions}
            pageSectionInfo={pageSectionInfo}
            fullTopicAsLink={true}
            treeStyle={treeStyle.topic}
          />
        ))}
      </ContainerMaxWidth>
    </Box>
  )
}

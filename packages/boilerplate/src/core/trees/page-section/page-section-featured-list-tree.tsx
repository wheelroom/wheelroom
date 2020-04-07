import React from 'react'
import { Box, ContainerMaxWidth } from '../../elements/grid'
import { TopicProps, Topic } from '../../../models/topic'
import { getPageSectionInfo } from '../../lib/get-page-section-info'
import { PageSectionProps } from '../../../models/page-section/page-section'
import { TopicTreeStyle } from '../topic/topic-tree'
import { NcssProps } from '../../elements/types'

export interface PageSectionFeaturedListTreeStyle {
  conditional: {
    containerHideMedia: {
      no: NcssProps
      yes: NcssProps
    }
    topicWrapperHideMedia: {
      no: NcssProps
      yes: NcssProps
    }
  }
  topic: TopicTreeStyle
  wrapper: NcssProps
  container: NcssProps
}

export const PageSectionFeaturedListTree = (props: {
  pageSection: PageSectionProps
  treeStyle: PageSectionFeaturedListTreeStyle
}) => {
  const pageSectionInfo = getPageSectionInfo(props.pageSection)
  const topicOptions = pageSectionInfo.topicOptions
  if (!pageSectionInfo.hasTopic) {
    return null
  }
  const treeStyle = props.treeStyle || {}
  if (topicOptions.hideMedia) {
    Object.assign(
      treeStyle.container,
      treeStyle.conditional.containerHideMedia.yes
    )
    Object.assign(
      treeStyle.topic.wrapper,
      treeStyle.conditional.topicWrapperHideMedia.yes
    )
  } else {
    Object.assign(
      treeStyle.container,
      treeStyle.conditional.containerHideMedia.no
    )
    Object.assign(
      treeStyle.topic.wrapper,
      treeStyle.conditional.topicWrapperHideMedia.no
    )
  }
  return (
    <Box is="div" ncss={treeStyle.wrapper}>
      <ContainerMaxWidth ncss={treeStyle.container}>
        {props.pageSection.topics.map((topic: TopicProps, index: number) => (
          <Topic
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

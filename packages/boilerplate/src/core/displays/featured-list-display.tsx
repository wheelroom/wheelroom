import React, { Fragment } from 'react'
import { Box, ContainerMaxWidth } from '../elements/grid'
import { TopicProps, Topic } from '../../components/topic'
import { getPageSectionInfo } from '../lib/get-page-section-info'
import { PageSectionProps } from '../../components/page-section/page-section'
import { TopicStyleTree } from '../views/topic/core-topic'
import { NcssProps } from '../elements/types'

export interface FeaturedListDisplayStyleTree {
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
  topic: TopicStyleTree
  wrapper: NcssProps
  container: NcssProps
}

export const FeaturedListDisplay = (props: {
  pageSection: PageSectionProps
  styleTree: FeaturedListDisplayStyleTree
}) => {
  const pageSectionInfo = getPageSectionInfo(props.pageSection)
  const topicOptions = pageSectionInfo.topicOptions
  if (!pageSectionInfo.hasTopic) {
    return null
  }
  const styleTree = props.styleTree || {}
  if (topicOptions.hideMedia) {
    Object.assign(
      styleTree.container,
      styleTree.conditional.containerHideMedia.yes
    )
    Object.assign(
      styleTree.topic.wrapper,
      styleTree.conditional.topicWrapperHideMedia.yes
    )
  } else {
    Object.assign(
      styleTree.container,
      styleTree.conditional.containerHideMedia.no
    )
    Object.assign(
      styleTree.topic.wrapper,
      styleTree.conditional.topicWrapperHideMedia.no
    )
  }
  return (
    <Fragment>
      <Box is="div" ncss={styleTree.wrapper}>
        <ContainerMaxWidth ncss={styleTree.container}>
          {props.pageSection.topics.map((topic: TopicProps, index: number) => (
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
    </Fragment>
  )
}

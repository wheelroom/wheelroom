import React from 'react'
import { Box, Container, ContainerMaxWidth } from '../../../elements/grid'
import { PageSectionProps } from '../../../../models/page-section/page-section'
import { getPageSectionInfo } from '../../../lib/get-page-section-info'
import { TopicTree, TopicTreeProps } from '../../topic/topic-tree'
import { TreeStyle } from '../../../lib/tree-style'
import { MultiParser } from '../../../parsers/multi-parser'

export const PageSectionTopicTree = (props: {
  /** Contains the topic to render */
  pageSection: PageSectionProps
  /** Styles to use */
  treeStyle: TreeStyle
  /** Properties to configure Topic element */
  topicProps: TopicTreeProps
  /** Use a max width or fluid container */
  containerStyle: 'maxWidth' | 'fluid'
}) => {
  const pageSectionInfo = getPageSectionInfo(props.pageSection)
  if (!pageSectionInfo.hasTopic) {
    return null
  }
  const ContainerType =
    props.containerStyle === 'maxWidth' ? ContainerMaxWidth : Container
  return (
    <Box is="div" ncss={props.treeStyle.wrapper}>
      <ContainerType ncss={props.treeStyle.container}>
        {props.pageSection.topics.map((topic, index) => (
          <TopicTree
            key={index}
            topic={topic}
            useAbstractParser={MultiParser}
            {...props.topicProps}
            treeStyle={props.treeStyle.topic}
          />
        ))}
      </ContainerType>
    </Box>
  )
}

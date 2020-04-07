import React from 'react'
import { Box, Container } from '../../elements/grid'
import { Topic, TopicProps } from '../../../models/topic'
import { getPageSectionInfo } from '../../lib/get-page-section-info'
import { PageSectionProps } from '../../../models/page-section/page-section'
import { TopicStyleTree } from '../topic/core-topic'
import { NcssProps } from '../../elements/types'

export interface ImageTreeStyle {
  topic: TopicStyleTree
  wrapper: NcssProps
  container: NcssProps
}

export const ImageTree = (props: {
  pageSection: PageSectionProps
  treeStyle: ImageTreeStyle
}) => {
  const pageSectionInfo = getPageSectionInfo(props.pageSection)
  if (!pageSectionInfo.hasTopic) {
    return null
  }
  const treeStyle = props.treeStyle || {}
  return (
    <Box is="div" ncss={treeStyle.wrapper}>
      <Container ncss={treeStyle.container}>
        {props.pageSection.topics
          .slice(0, 2)
          .map((topic: TopicProps, index: number) => (
            <Topic
              {...topic}
              key={index}
              pageSectionActions={props.pageSection.actions}
              pageSectionInfo={pageSectionInfo}
              useHeadingElement="h4"
              treeStyle={treeStyle.topic}
            />
          ))}
      </Container>
    </Box>
  )
}

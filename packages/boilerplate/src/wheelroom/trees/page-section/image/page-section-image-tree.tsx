import React from 'react'
import { Box, Container } from '../../../elements/grid'
import { TopicProps } from '../../../../models/topic'
import { getPageSectionInfo } from '../../../lib/get-page-section-info'
import { PageSectionProps } from '../../../../models/page-section/page-section'
import { TopicTreeStyle, TopicTree } from '../../topic/topic-tree'
import { NcssProps } from '../../../elements/types'

export interface PageSectionImageTreeStyle {
  topic: TopicTreeStyle
  wrapper: NcssProps
  container: NcssProps
}

export const PageSectionImageTree = (props: {
  pageSection: PageSectionProps
  treeStyle: PageSectionImageTreeStyle
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
            <TopicTree
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

import React from 'react'
import { Box, Container } from '../../elements/grid'
import { Topic } from '../../../models/topic'
import { PageSectionProps } from '../../../models/page-section/page-section'
import { getPageSectionInfo } from '../../lib/get-page-section-info'
import { TopicStyleTree } from '../topic/core-topic'
import { NcssProps } from '../../elements/types'

export interface HeroTreeStyle {
  topic: TopicStyleTree
  wrapper: NcssProps
  container: NcssProps
}

export const HeroTree = (props: {
  pageSection: PageSectionProps
  treeStyle: HeroTreeStyle
}) => {
  const pageSectionInfo = getPageSectionInfo(props.pageSection)
  if (!pageSectionInfo.hasTopic) {
    return null
  }
  const treeStyle = props.treeStyle || {}
  const topic = props.pageSection.topics[0]
  return (
    <Box is="div" ncss={treeStyle.wrapper}>
      <Container ncss={treeStyle.container}>
        <Topic
          {...topic}
          pageSectionActions={props.pageSection.actions}
          pageSectionInfo={pageSectionInfo}
          useHeadingElement={pageSectionInfo.index <= 1 ? 'h1' : 'h2'}
          treeStyle={treeStyle.topic}
        />
      </Container>
    </Box>
  )
}

import React from 'react'
import { Box, ContainerMaxWidth } from '../elements/grid'
import { Topic } from '../../models/topic'
import { PageSectionProps } from '../../models/page-section/page-section'
import { getPageSectionInfo } from '../lib/get-page-section-info'
import { TopicStyleTree } from '../model-views/topic/core-topic'
import { NcssProps } from '../elements/types'
import { ParseTable } from '../parsers/parse-table'

export interface FeaturedDisplayStyleTree {
  topic: TopicStyleTree
  wrapper: NcssProps
  container: NcssProps
}

export const FeaturedDisplay = (props: {
  pageSection: PageSectionProps
  styleTree: FeaturedDisplayStyleTree
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
          useAbstractParser={ParseTable}
          useHeadingElement="h3"
          styleTree={styleTree.topic}
        />
      </ContainerMaxWidth>
    </Box>
  )
}

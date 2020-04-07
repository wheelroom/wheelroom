import React from 'react'
import { Box, ContainerMaxWidth } from '../../elements/grid'
import { PageSectionProps } from '../../../models/page-section/page-section'
import { getPageSectionInfo } from '../../lib/get-page-section-info'
import { Topic } from '../../../models/topic'
import { TopicTreeStyle } from '../topic/topic-tree'
import { NcssProps } from '../../elements/types'

export interface PageSectionQuoteTreeStyle {
  topic: TopicTreeStyle
  wrapper: NcssProps
  container: NcssProps
}

export const PageSectionQuoteTree = (props: {
  pageSection: PageSectionProps
  treeStyle: PageSectionQuoteTreeStyle
}) => {
  const pageSectionInfo = getPageSectionInfo(props.pageSection)
  if (!pageSectionInfo.hasTopic) {
    return null
  }
  const treeStyle = props.treeStyle || {}
  return (
    <Box is="div" ncss={treeStyle.wrapper}>
      <ContainerMaxWidth ncss={treeStyle.container}>
        {props.pageSection.topics.map((topic, index) => (
          <Topic
            key={index}
            {...topic}
            pageSectionActions={props.pageSection.actions}
            pageSectionInfo={pageSectionInfo}
            fullTopicAsLink={false}
            useHeadingElement={'p'}
            useAbstractElement={'blockquote'}
            treeStyle={treeStyle.topic}
          />
        ))}
      </ContainerMaxWidth>
    </Box>
  )
}

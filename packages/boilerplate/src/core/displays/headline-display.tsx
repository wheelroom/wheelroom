import React, { Fragment } from 'react'
import { Box, ContainerMaxWidth } from '../elements/grid'
import { Topic } from '../../components/topic'
import { getPageSectionInfo } from '../lib/get-page-section-info'
import { PageSectionProps } from '../../components/page-section/page-section'
import { TopicStyleTree } from '../views/topic/core-topic'
import { NcssProps } from '../elements/types'

export interface HeadlineDisplayStyleTree {
  topic: TopicStyleTree
  wrapper: NcssProps
}

export const HeadlineDisplay = (props: {
  pageSection: PageSectionProps
  styleTree: HeadlineDisplayStyleTree
}) => {
  const pageSectionInfo = getPageSectionInfo(props.pageSection)
  if (!pageSectionInfo.hasTopic) {
    return null
  }
  const styleTree = props.styleTree || {}
  const topic = props.pageSection.topics[0]
  return (
    <Fragment>
      <Box is="div" ncss={styleTree.wrapper}>
        <ContainerMaxWidth>
          <Topic
            {...topic}
            pageSectionActions={props.pageSection.actions}
            pageSectionInfo={pageSectionInfo}
            useHeadingElement={pageSectionInfo.index <= 1 ? 'h1' : 'h2'}
            styleTree={styleTree.topic}
          />
        </ContainerMaxWidth>
      </Box>
    </Fragment>
  )
}

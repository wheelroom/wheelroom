import React from 'react'
import { Box, Container, ContainerMaxWidth } from '../../../elements/grid'
import { PageSectionProps } from '../../../../models/page-section/page-section'
import { getPageSectionInfo } from '../../../lib/get-page-section-info'
import { TopicTree, TopicTreeProps } from '../../topic/topic-tree'
import { MultiParser } from '../../../parsers/multi-parser'
import { PageSectionBlockTreeStyle } from './page-section-block-tree-style'
import { PageSectionCardTreeStyle } from './page-section-card-tree-style'
import { TopicProps } from '../../../../models/topic'
import { PageSectionFeaturedTreeStyle } from './page-section-featured-tree-style'
import { PageSectionHeadlineTreeStyle } from './page-section-headline-tree-style'
import { PageSectionHeroTreeStyle } from './page-section-hero-tree-style'
import { PageSectionQuoteTreeStyle } from './page-section-quote-tree-style'

export const PageSectionTopicTree = (props: {
  /** Contains the topic to render */
  pageSection: PageSectionProps
  /** Styles to use */
  treeStyle:
    | PageSectionBlockTreeStyle
    | PageSectionCardTreeStyle
    | PageSectionFeaturedTreeStyle
    | PageSectionHeadlineTreeStyle
    | PageSectionHeroTreeStyle
    | PageSectionQuoteTreeStyle
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
    <Box is="div" ncss={props.treeStyle.wrapper.ncss}>
      <ContainerType ncss={props.treeStyle.container.ncss}>
        {props.pageSection.topics.map((topic: TopicProps, index: number) => (
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

import React from 'react'
import { Box, Container, ContainerMaxWidth } from '../../elements/grid'
import { PageSectionProps } from '../../../../models/page-section/page-section'
import { getPageSectionInfo } from '../../../lib/get-page-section-info'
import { Topic, TopicTreeProps } from '../../topic/topic'
import { MultiParser } from '../../../parsers/multi-parser'
import { PageSectionBlockPreset } from './page-section-block-preset'
import { PageSectionCardPreset } from './page-section-card-preset'
import { TopicProps } from '../../../../models/topic'
import { PageSectionFeaturedPreset } from './page-section-featured-preset'
import { PageSectionHeadlinePreset } from './page-section-headline-preset'
import { PageSectionHeroPreset } from './page-section-hero-preset'
import { PageSectionQuotePreset } from './page-section-quote-preset'

export const PageSectionTopic = (props: {
  /** Contains the topic to render */
  pageSection: PageSectionProps
  /** Styles to use */
  treeStyle:
    | PageSectionBlockPreset
    | PageSectionCardPreset
    | PageSectionFeaturedPreset
    | PageSectionHeadlinePreset
    | PageSectionHeroPreset
    | PageSectionQuotePreset
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
          <Topic
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

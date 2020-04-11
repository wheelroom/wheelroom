import React from 'react'
import { Box, Container, ContainerMaxWidth } from '../../../elements/grid'
import { PageSectionProps } from '../../../../models/page-section/page-section'
import { getPageSectionInfo } from '../../../lib/get-page-section-info'
import { TopicPreset, TopicTreeProps } from '../../topic/topic-preset'
import { MultiParser } from '../../../parsers/multi-parser'
import { PageSectionBlockPresetStyle } from './page-section-block-preset-style'
import { PageSectionCardPresetStyle } from './page-section-card-preset-style'
import { TopicProps } from '../../../../models/topic'
import { PageSectionFeaturedPresetStyle } from './page-section-featured-preset-style'
import { PageSectionHeadlinePresetStyle } from './page-section-headline-preset-style'
import { PageSectionHeroPresetStyle } from './page-section-hero-preset-style'
import { PageSectionQuotePresetStyle } from './page-section-quote-preset-style'

export const PageSectionTopicPreset = (props: {
  /** Contains the topic to render */
  pageSection: PageSectionProps
  /** Styles to use */
  treeStyle:
    | PageSectionBlockPresetStyle
    | PageSectionCardPresetStyle
    | PageSectionFeaturedPresetStyle
    | PageSectionHeadlinePresetStyle
    | PageSectionHeroPresetStyle
    | PageSectionQuotePresetStyle
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
          <TopicPreset
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

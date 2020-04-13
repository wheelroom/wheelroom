import React from 'react'
import { Box, Container, ContainerMaxWidth } from '../../elements/grid'
import { PageSectionProps } from '../../../../models/page-section/page-section'
import { getPageSectionInfo } from '../../../lib/get-page-section-info'
import { Topic, TopicWheelProps } from '../../topic/topic'
import { MultiParser } from '../../../parsers/multi-parser'
import { TopicProps } from '../../../../models/topic'
import { Wheel } from '../../types'
import { PageSectionBlockPreset } from './page-section-block-preset'
import { PageSectionCardPreset } from './page-section-card-preset'
import { PageSectionFeaturedPreset } from './page-section-featured-preset'
import { PageSectionHeadlinePreset } from './page-section-headline-preset'
import { PageSectionHeroPreset } from './page-section-hero-preset'
import { PageSectionQuotePreset } from './page-section-quote-preset'

export interface PageSectionUnicornWheel extends Wheel {
  style:
    | PageSectionBlockPreset
    | PageSectionCardPreset
    | PageSectionFeaturedPreset
    | PageSectionHeadlinePreset
    | PageSectionHeroPreset
    | PageSectionQuotePreset
}

export const PageSectionUnicorn = (props: {
  /** Styling wheel */
  wheel: PageSectionUnicornWheel
  /** Contains the topic to render */
  pageSection: PageSectionProps
  /** Properties to configure Topic element */
  topicProps: TopicWheelProps
  /** Use a max width or fluid container */
  containerStyle: 'maxWidth' | 'fluid'
  /** Accept max number of topics, ignore all others */
  maxTopics?: number
}) => {
  const pageSectionInfo = getPageSectionInfo(props.pageSection)
  if (!pageSectionInfo.hasTopic) {
    return null
  }
  const ContainerType =
    props.containerStyle === 'maxWidth' ? ContainerMaxWidth : Container
  return (
    <Box is="div" wheel={{ ...props.wheel, style: props.wheel.style.wrapper }}>
      <ContainerType
        wheel={{ ...props.wheel, style: props.wheel.style.container }}
      >
        {props.pageSection.topics
          .slice(0, props.maxTopics)
          .map((topic: TopicProps, index: number) => (
            <Topic
              key={index}
              topic={topic}
              useAbstractParser={MultiParser}
              {...props.topicProps}
              wheel={{ ...props.wheel, style: props.wheel.style.topic }}
            />
          ))}
      </ContainerType>
    </Box>
  )
}

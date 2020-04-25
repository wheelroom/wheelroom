import React from 'react'
import { Container, Fluid, Wrapper } from '../../element/grid'
import { PageSectionProps } from '../../../../models/page-section'
import { getPageSectionInfo } from '../../../lib/get-page-section-info'
import { Topic, TopicWheelProps } from '../../model/topic/topic'
import { MultiParser } from '../../../parsers/multi-parser'
import { TopicProps } from '../../../../models/topic'
import { Wheel } from '../../types'
import { PageSectionBlockWheelStyle } from './presets/page-section-block-preset'
import { PageSectionCardWheelStyle } from './presets/page-section-card-preset'
import { PageSectionFeaturedWheelStyle } from './presets/page-section-featured-preset'
import { PageSectionHeadlineWheelStyle } from './presets/page-section-headline-preset'
import { PageSectionHeroWheelStyle } from './presets/page-section-hero-preset'
import { PageSectionShowcaseWheelStyle } from './presets/page-section-showcase-preset'
import { PageSectionQuoteWheelStyle } from './presets/page-section-quote-preset'

export interface PageSectionUnicornWheel extends Wheel {
  style:
    | PageSectionBlockWheelStyle
    | PageSectionCardWheelStyle
    | PageSectionFeaturedWheelStyle
    | PageSectionHeadlineWheelStyle
    | PageSectionHeroWheelStyle
    | PageSectionShowcaseWheelStyle
    | PageSectionQuoteWheelStyle
}

export const PageSectionUnicorn = (props: {
  /** Styling wheel */
  wheel: PageSectionUnicornWheel
  /** Contains the topic to render */
  pageSection: PageSectionProps
  /** Properties to configure Topic element */
  topicProps: TopicWheelProps
  /** Use a max width or fluid container */
  containerStyle: 'container' | 'fluid'
  /** Accept max number of topics, ignore all others */
  maxTopics?: number
}) => {
  const pageSectionInfo = getPageSectionInfo(props.pageSection)
  if (!pageSectionInfo.hasTopic) {
    return null
  }
  const ContainerType = props.containerStyle === 'container' ? Container : Fluid
  return (
    <Wrapper wheel={{ ...props.wheel, style: props.wheel.style.wrapper }}>
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
    </Wrapper>
  )
}

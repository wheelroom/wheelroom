import React from 'react'
import { Box, Container, ContainerMaxWidth } from '../../elements/grid'
import { PageSectionProps } from '../../../../models/page-section/page-section'
import { getPageSectionInfo } from '../../../lib/get-page-section-info'
import { Topic, TopicWheelProps } from '../../topic/topic'
import { MultiParser } from '../../../parsers/multi-parser'
import { TopicProps } from '../../../../models/topic'
import { Wheel } from '../../types'

export const PageSectionUnicorn = (props: {
  /** Styling wheel */
  wheel: Wheel
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
    <Box is="div" ncss={props.wheel.style.wrapper.ncss} wheel={props.wheel}>
      <ContainerType
        ncss={props.wheel.style.container.ncss}
        wheel={props.wheel}
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

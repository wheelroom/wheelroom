import React from 'react'
import { TopicProps } from '../../../components/topic/topic'
import { Box } from '../../primary-elements/grid'
import { Paragraph } from '../../primary-elements/paragraph'
import { BlockLevelElementName, NcssProps } from '../../primary-elements/types'
import { TopicInfo } from '../../lib/get-topic-info'
import { PageSectionInfo } from '../../lib/get-page-section-info'
import { Heading } from '../../primary-elements/heading'
import { TopicIcon } from './topic-icon'

const defaultWrapperStyle = {
  label: 'topic-header',
}

export interface TopicHeaderProps {
  /** Override default styling of the wrapper */
  headerWrapperStyle?: NcssProps
  /** Defaults to h3 */
  useHeadingElement?: BlockLevelElementName
  /** Defaults to p */
  useAbstractElement?: BlockLevelElementName
  /** Override default paragraph style */
  paragraphStyle?: NcssProps
  /** Override default heading style */
  headingStyle?: NcssProps
  /** All topic props */
  topic: TopicProps
  /** Topic info object */
  topicInfo: TopicInfo
  /** Page section info */
  pageSectionInfo: PageSectionInfo
}

export const TopicHeader = (props: TopicHeaderProps) => {
  const useHeadingElement = props.useHeadingElement || 'h3'
  const useAbstractElement = props.useAbstractElement || 'p'

  const headerWrapperStyle = props.headerWrapperStyle || {}
  const paragraphStyle = props.paragraphStyle || {}
  const headingStyle = props.headingStyle || {}

  const topicOptions = props.pageSectionInfo.topicOptions

  return (
    <Box is="header" ncss={{ ...defaultWrapperStyle, ...headerWrapperStyle }}>
      {!topicOptions.hideIcon && <TopicIcon icon={props.topic.icon} />}
      {!topicOptions.hideHeading && (
        <Heading is={useHeadingElement} ncss={{ ...headingStyle }}>
          {props.topic.heading}
        </Heading>
      )}
      {!topicOptions.hideAbstract && (
        <Paragraph is={useAbstractElement} ncss={{ ...paragraphStyle }}>
          {props.topic.abstract &&
            props.topic.abstract.abstract
              .split('\n')
              .reduce((children: any, textSegment, index) => {
                return [
                  ...children,
                  index > 0 && <br key={index} />,
                  textSegment,
                ]
              }, [])}
        </Paragraph>
      )}
    </Box>
  )
}

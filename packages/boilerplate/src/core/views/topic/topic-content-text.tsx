import React from 'react'
import { TopicProps } from '../../../models/topic/topic'
import { Box } from '../../elements/grid'
import { Paragraph } from '../../elements/paragraph'
import { BlockLevelElementName } from '../../elements/types'
import { TopicInfo } from '../../lib/get-topic-info'
import { PageSectionInfo } from '../../lib/get-page-section-info'
import { Heading } from '../../elements/heading'
import { TopicIcon } from './topic-icon'
import { TopicContentTextStyleTree } from './core-topic'

const defaultWrapperStyle = {
  label: 'topic-header',
}

export interface TopicContentTextProps {
  /** Defaults to h3 */
  useHeadingElement?: BlockLevelElementName
  /** Defaults to p */
  useAbstractElement?: BlockLevelElementName
  /** All topic props */
  topic: TopicProps
  /** Topic info object */
  topicInfo: TopicInfo
  /** Page section info */
  pageSectionInfo: PageSectionInfo

  styleTree?: TopicContentTextStyleTree
}

export const TopicContentText = (props: TopicContentTextProps) => {
  const useHeadingElement = props.useHeadingElement || 'h3'
  const useAbstractElement = props.useAbstractElement || 'p'

  const styleTree = props.styleTree || {}
  const wrapperStyle = styleTree.wrapper || {}
  const abstractStyle = styleTree.abstract || {}
  const headingStyle = styleTree.heading || {}

  const topicOptions = props.pageSectionInfo.topicOptions

  return (
    <Box is="header" ncss={{ ...defaultWrapperStyle, ...wrapperStyle }}>
      {!topicOptions.hideIcon && <TopicIcon icon={props.topic.icon} />}
      {!topicOptions.hideHeading && (
        <Heading is={useHeadingElement} ncss={{ ...headingStyle }}>
          {props.topic.heading}
        </Heading>
      )}
      {!topicOptions.hideAbstract && (
        <Paragraph is={useAbstractElement} ncss={{ ...abstractStyle }}>
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

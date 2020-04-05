import React from 'react'
import { TopicProps } from '../../../models/topic/topic'
import { Box } from '../../elements/grid'
import { BlockLevelElementName, NcssProps } from '../../elements/types'
import { TopicInfo } from '../../lib/get-topic-info'
import { PageSectionInfo } from '../../lib/get-page-section-info'
import { Heading } from '../../elements/heading'
import { TopicIcon } from './topic-icon'
import { ParseNewLines } from '../../parsers/parse-new-lines'
import { ParserFunction } from '../../parsers/types'

export interface TopicContentTextStyleTree {
  /** Wrapper around heading and abstract */
  wrapper?: NcssProps
  /** Heading style */
  heading?: NcssProps
  /** Abstract style */
  abstract?: NcssProps
}

export interface TopicContentTextProps {
  /** Defaults to h3 */
  useHeadingElement?: BlockLevelElementName
  /** Defaults to p */
  useAbstractElement?: BlockLevelElementName
  /** Defaults to h3 */
  useHeadingParser?: ParserFunction
  /** Defaults to p */
  useAbstractParser?: ParserFunction

  /** All topic props */
  topic: TopicProps
  /** Topic info object */
  topicInfo: TopicInfo
  /** Page section info */
  pageSectionInfo: PageSectionInfo

  styleTree?: TopicContentTextStyleTree
}

export const TopicContentText = (props: TopicContentTextProps) => {
  const styleTree = props.styleTree || {}
  const wrapperStyle = styleTree.wrapper || {}
  const abstractStyle = styleTree.abstract || {}
  const headingStyle = styleTree.heading || {}
  const topicOptions = props.pageSectionInfo.topicOptions

  const useHeadingElement = props.useHeadingElement || 'h3'
  const useAbstractElement = props.useAbstractElement || 'p'

  const HeadingParser = props.useHeadingParser || Heading
  const AbstractParser = props.useAbstractParser || ParseNewLines

  return (
    <Box is="header" ncss={{ label: 'topic-header', ...wrapperStyle }}>
      {!topicOptions.hideIcon && <TopicIcon icon={props.topic.icon} />}
      {!topicOptions.hideHeading && (
        <HeadingParser is={useHeadingElement} ncss={headingStyle}>
          {props.topic.heading}
        </HeadingParser>
      )}
      {!topicOptions.hideAbstract &&
        props.topic.abstract &&
        props.topic.abstract.abstract && (
          <AbstractParser
            is={useAbstractElement}
            ncss={abstractStyle}
            fallBackParser={ParseNewLines}
          >
            {props.topic.abstract.abstract}
          </AbstractParser>
        )}
    </Box>
  )
}

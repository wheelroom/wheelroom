import React from 'react'
import { Any } from '../../element/any'
import { BlockLevelElementName } from '../../element/types/element-names'
import { Box } from '../../element/grid'
import { ParserFunction } from '../../../parsers/types'
import { TopicContentTextWheelStyle } from './presets/topic-content-text-preset'
import { TopicIcon } from './topic-icon'
import { TopicInfo } from '../../../lib/get-topic-info'
import { TopicOptions } from '../../../lib/get-topic-options'
import { TopicProps } from '../../../../models/topic/topic'
import { Wheel } from '../../types'

export interface TopicContentTextWheel extends Wheel {
  style: TopicContentTextWheelStyle
}

export interface TopicContentTextProps {
  /** Styling wheel */
  wheel: TopicContentTextWheel
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
  topicOptions: TopicOptions
}

export const TopicContentText = (props: TopicContentTextProps) => {
  const topicOptions = props.topicOptions

  const useAbstractElement = props.useAbstractElement || 'p'
  const useHeadingElement = props.useHeadingElement || 'h3'

  const AbstractParser = props.useAbstractParser || Any
  const HeadingParser = props.useHeadingParser || Any

  return (
    <Box is="div" wheel={props.wheel}>
      {!topicOptions.hideIcon && (
        <TopicIcon
          icon={props.topic.icon || ''}
          wheel={{ ...props.wheel, style: props.wheel.style.icon }}
        />
      )}
      {!topicOptions.hideHeading && (
        <HeadingParser
          polyPreset={true}
          is={useHeadingElement}
          wheel={{ ...props.wheel, style: props.wheel.style.heading }}
        >
          {props.topic.heading}
        </HeadingParser>
      )}
      {!topicOptions.hideAbstract &&
        props.topic.abstract &&
        props.topic.abstract.abstract && (
          <AbstractParser
            polyPreset={true}
            is={useAbstractElement}
            wheel={{ ...props.wheel, style: props.wheel.style.abstract }}
          >
            {props.topic.abstract.abstract}
          </AbstractParser>
        )}
    </Box>
  )
}

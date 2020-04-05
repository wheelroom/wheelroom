/**
 * Component variation
 *
 * Component type: topic
 * Variation: Single
 *
 */

import React from 'react'
import { TopicProps } from './topic'
import { CoreTopic } from '../../core/model-views/topic/core-topic'
import { MultiParser } from '../../core/parsers/multi-parser'

export const TopicSingleVar = (props: TopicProps) => (
  <CoreTopic useAbstractParser={MultiParser} {...props} />
)

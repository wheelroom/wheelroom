/**
 * Component variation
 *
 * Component type: topic
 * Variation: Single
 *
 */

import React from 'react'
import { TopicProps } from './topic'
import { TopicTree } from '../../core/trees/topic/topic-tree'
import { MultiParser } from '../../core/parsers/multi-parser'

export const TopicSingleVar = (props: TopicProps) => (
  <TopicTree useAbstractParser={MultiParser} {...props} />
)

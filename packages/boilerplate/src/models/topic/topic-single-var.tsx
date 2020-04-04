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

export const TopicSingleVar = (props: TopicProps) => <CoreTopic {...props} />

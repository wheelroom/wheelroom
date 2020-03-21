import React from 'react'
import { TopicProps, Topic } from '../../topic'
import { PageSectionInfo } from '../../../lib/get-page-section-info'
import { Box, ContainerMaxWidth, Flex } from '../../../core/elements/grid'
import { TopicOption } from '../page-section'

const topicWrapperStyle = {
  label: 'topic-wrapper',
  flexDirection: ['column', 'column', 'row'],
  flexWrap: 'wrap',
}

/**
 *
 * Requires four or more topics
 *
 * - Four topics: the four topics
 *
 */

export interface FeaturedMultipleTopicsProps {
  info: PageSectionInfo
  topics: TopicProps[]
  topicOptions: TopicOption[]
}

export const FeaturedMultipleTopics = (props: FeaturedMultipleTopicsProps) => {
  // Featured needs topics or text, return null (render nothing) otherwise
  if (!(props.info.hasTopic || props.info.hasText)) {
    return null
  }
  return (
    <Box
      is="div"
      ncss={{
        label: 'wrapper',
        bg: 'bg',
        py: 8,
      }}
    >
      <ContainerMaxWidth
        ncss={{
          flexDirection: ['column', 'row'],
        }}
      >
        <Flex ncss={topicWrapperStyle}>
          {props.topics.map((topic: TopicProps, index: number) => (
            <Topic
              key={index}
              {...topic}
              topicOptions={props.topicOptions}
              topicWrapperStyle={{
                flexDirection: 'column',
                w: [1, 1, 1 / 2],
              }}
              imageWrapperStyle={{
                display: 'flex',
                p: 3,
                w: 1,
              }}
              contentWrapperStyle={{
                display: 'flex',
                flexDirection: 'column',
                w: 1,
              }}
              useHeading="h3"
            />
          ))}
        </Flex>
      </ContainerMaxWidth>
    </Box>
  )
}

import React from 'react'
import { Box, ContainerMaxWidth } from '../../../core/elements/grid'
import { TopicProps, Topic } from '../../topic'
import { PageSectionInfo } from '../../../lib/get-page-section-info'
import { TextProps } from '../../text'
import { TopicOption } from '../page-section'

export interface FeaturedProps {
  info: PageSectionInfo
  text?: TextProps
  topic: TopicProps
  topicOptions: TopicOption[]
}

/**
 *
 * Requires one topics, optional a text.
 *
 * - One topic: the topic is displayed
 * - Topic and text: The image of the first topic is displayed, the text shows
 *   next to the image
 *
 */

export const Featured = (props: FeaturedProps) => {
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
          justifyContent: 'center',
          flexDirection: ['column', 'row'],
          alignItems: ['center', 'baseline'],
        }}
      >
        <Topic
          {...props.topic}
          topicOptions={props.topicOptions}
          text={props.text}
          topicWrapperStyle={{
            flexDirection: ['column', 'column', 'row'],
            justifyContent: 'space-evenly',
            alignItems: 'center',
          }}
          imageWrapperStyle={{
            display: 'flex',
            flexDirection: 'column',
            w: [1, 1, 1 / 2.5],
            mb: [3, 3, 0],
          }}
          contentWrapperStyle={{
            display: 'flex',
            flexDirection: 'column',
            w: [1, 1, 1 / 2.5],
          }}
          headerWrapperStyle={{
            mx: 3,
          }}
          useHeading="h2"
          actionWrapperStyle={{
            display: 'flex',
            mx: 3,
          }}
        />
      </ContainerMaxWidth>
    </Box>
  )
}

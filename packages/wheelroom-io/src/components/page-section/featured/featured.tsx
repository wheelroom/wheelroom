import React from 'react'
import { Box, Container } from '../../../core/elements/grid'
import { TopicProps, Topic } from '../../topic'
import { PageSectionInfo } from '../../../lib/get-page-section-info'
import { TextProps } from '../../text'

export interface FeaturedProps {
  info: PageSectionInfo
  locale: string
  text?: TextProps
  topic: TopicProps
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

// TODO: Pass text to topic once topic has this implemented
export const Featured = (props: FeaturedProps) => {
  // Featured needs topics or text, return null (render nothing) otherwise
  if (!(props.info.hasTopic || props.info.hasText)) {
    return null
  }
  return (
    <Box
      is="div"
      ncss={{
        label: 'Wrapper',
        bg: 'bg',
        py: 8,
      }}
    >
      <Container
        ncss={{
          label: 'Container',
          maxWidth: '1280px',
          m: 'auto',
          justifyContent: 'center',
          px: [2, 5, 7],
          w: 1,
          flexDirection: ['column', 'row'],
          alignItems: ['center', 'initial'],
        }}
      >
        <Topic
          {...props.topic}
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
          paragraphStyle={{
            color: 'text',
          }}
          actionWrapperStyle={{
            display: 'flex',
            mx: 3,
          }}
        />
      </Container>
    </Box>
  )
}

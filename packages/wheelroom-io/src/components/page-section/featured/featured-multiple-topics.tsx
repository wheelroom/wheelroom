import React from 'react'
import { TopicProps, Topic } from '../../topic'
import { PageSectionInfo } from '../../../lib/get-page-section-info'
import { Box, ContainerMaxWidth } from '../../../core/elements/grid'
import { Image } from '../../../core/elements/image'
import { TopicOption } from '../page-section'

const topicWrapperStyle = {
  flexDirection: ['column', 'column', 'row'],
  justifyContent: 'space-evenly',
}
const imageWrapperStyle = {
  display: 'flex',
  flexDirection: 'column',
  w: [1, 1, 1 / 2.5],
  mb: [3, 3, 0],
}
const contentWrapperStyle = {
  display: 'flex',
  flexDirection: 'column',
  w: [1, 1, 1 / 2.5],
}

/**
 *
 * Requires two or more topics
 *
 * - Two topics: the image of the first topic is displayed, the two topics ared
 *   shown next to the image
 * - Four topics: the image of the first topic is displayed, the four topics
 *   are shown next to the image
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
  const image = props.topics[0].image
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
        <Box ncss={topicWrapperStyle}>
          <Box ncss={imageWrapperStyle}>
            <Image image={image} pictureNcss={{ p: 3 }} />
          </Box>
          <Box ncss={contentWrapperStyle}>
            {props.topics.map((topic: TopicProps, index: number) => (
              <Topic
                key={index}
                {...topic}
                image={undefined}
                topicOptions={props.topicOptions}
                topicWrapperStyle={{
                  flexDirection: ['column', 'column', 'row'],
                  justifyContent: 'space-evenly',
                }}
                imageProps={{
                  pictureNcss: {
                    p: 3,
                  },
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
            ))}
          </Box>
        </Box>
      </ContainerMaxWidth>
    </Box>
  )
}

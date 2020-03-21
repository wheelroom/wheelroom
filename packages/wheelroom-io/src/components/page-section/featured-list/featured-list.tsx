import React, { Fragment } from 'react'
import { Box, ContainerMaxWidth } from '../../../core/elements/grid'
import { TopicProps, Topic } from '../../topic'
import { PageSectionInfo } from '../../../lib/get-page-section-info'
import { TopicOption } from '../page-section'
import { getTopicOptions } from '../get-topic-options'

export interface FeaturedListProps {
  info: PageSectionInfo
  topics: TopicProps[]
  topicOptions: TopicOption[]
}

/**
 *
 * Requires one or more topics.
 *
 * The topics are displayed as featured items below each other.
 *
 */

export const FeaturedList = (props: FeaturedListProps) => {
  // Featured List needs topics or text, return null (render nothing) otherwise
  if (!(props.info.hasTopic || props.info.hasText)) {
    return null
  }
  const options = getTopicOptions(props.topicOptions)
  const featuredList = props.topics.map((topic, index) => (
    <Topic
      key={index}
      {...topic}
      topicOptions={props.topicOptions}
      topicWrapperStyle={{
        flexDirection: options.hideImage
          ? ['column', 'row']
          : ['column', 'row'],
        w: options.hideImage ? [1, 1 / 2, 1 / 3] : 1,
      }}
      imageWrapperStyle={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'normal',
        w: [1 / 3, 1 / 4, 1 / 4],
        p: 3,
      }}
      contentWrapperStyle={{
        display: 'flex',
        flexDirection: 'column',
        w: [1, 2 / 3, 3 / 4],
        p: 3,
      }}
      actionWrapperStyle={{
        display: 'flex',
      }}
    />
  ))
  return (
    <Fragment>
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
            flexDirection: options.hideImage ? ['column', 'row'] : ['column'],
          }}
        >
          {featuredList}
        </ContainerMaxWidth>
      </Box>
    </Fragment>
  )
}

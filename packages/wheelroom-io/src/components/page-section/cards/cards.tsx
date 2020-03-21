import React from 'react'
import { Box, ContainerMaxWidth } from '../../../core/elements/grid'
import { TopicProps, Topic } from '../../topic'
import { TopicOption } from '../../page-section/page-section'
import { getTopicOptions } from '../get-topic-options'

export interface CardsProps {
  topics: TopicProps[]
  topicOptions: TopicOption[]
}

/**
 *
 * Accepts one or more cards
 *
 */

export const Cards = (props: CardsProps) => {
  const options = getTopicOptions(props.topicOptions)
  const cards = props.topics.map((topic, index) => (
    <Topic
      key={index}
      topicOptions={props.topicOptions}
      fullTopicAsLink={true}
      {...topic}
      imageWrapperStyle={{
        p: 3,
      }}
      imageProps={{
        pictureNcss: { display: 'block', h: '178px' },
        imgNcss: { h: 1, objectFit: 'cover' },
      }}
      contentWrapperStyle={{
        display: 'flex',
        flexDirection: 'column',
        flex: '1 1 auto',
      }}
      headerWrapperStyle={{
        display: 'block',
        flex: '1 1 auto',
      }}
      actionWrapperStyle={{
        flex: '0',
      }}
      topicWrapperStyle={{
        ...{
          bg: 'bg',
          color: 'cardsShadow',
          flex: '1',
          maxWidth: '280px',
          minWidth: '280px',
          m: 2,
        },
        ...(options.hideAction
          ? {}
          : {
              border: '1px solid',
              borderColor: 'cardsBorder',
              borderRadius: 3,
              boxShadow: '0 0 16px',
              transition: 'transform .25s ease',
              ':hover': {
                cursor: 'pointer',
                transform: 'scale(1.05)',
              },
            }),
      }}
    />
  ))
  return <CardWrapper>{cards}</CardWrapper>
}

const CardWrapper = (props: { children: any }) => (
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
        alignItems: ['center', 'initial'],
        flexDirection: ['column', 'row'],
        flexWrap: 'wrap',
        justifyContent: 'center',
        m: 'auto',
        px: [2, 5, 7],
        w: 1,
      }}
    >
      {props.children}
    </ContainerMaxWidth>
  </Box>
)

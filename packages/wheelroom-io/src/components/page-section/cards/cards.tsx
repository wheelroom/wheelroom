import React from 'react'
import { Box, Container } from '../../../core/elements/grid'
import { TopicProps, Topic } from '../../topic'
import { TopicOption } from '../../page-section/page-section'

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
  const cards = props.topics.map((topic, index) => (
    <Topic
      key={index}
      topicOptions={props.topicOptions}
      {...topic}
      imageProps={{
        height: '184px',
        margin: '16px',
      }}
      topicWrapperStyle={{
        bg: 'bg',
        border: '1px solid',
        borderColor: 'cardsBorder',
        borderRadius: 3,
        boxShadow: '0 0 16px',
        color: 'cardsShadow',
        flex: '1',
        maxWidth: '280px',
        minWidth: '280px',
        m: 2,
        transition: 'transform .25s ease',
        ':hover': {
          cursor: 'pointer',
          transform: 'scale(1.05)',
        },
      }}
    />
  ))
  return <CardWrapper>{cards}</CardWrapper>
}

const CardWrapper = (props: { children: any }) => (
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
        alignItems: ['center', 'initial'],
        flexDirection: ['column', 'row'],
        flexWrap: 'wrap',
        justifyContent: 'center',
        label: 'Container',
        m: 'auto',
        maxWidth: '1280px',
        px: [2, 5, 7],
        w: 1,
      }}
    >
      {props.children}
    </Container>
  </Box>
)

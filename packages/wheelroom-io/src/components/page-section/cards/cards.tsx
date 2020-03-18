import React, { Fragment } from 'react'
import { Box, Container } from '../../../core/elements/grid'
import { TopicProps, Topic } from '../../topic'

export interface CardsProps {
  topics: TopicProps[]
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
      {...topic}
      imageProps={{
        height: '184px',
        margin: '16px',
      }}
      topicWrapperStyle={{
        bg: 'bg',
        boxShadow: '0 0 16px',
        color: 'cardsShadow',
        border: '1px solid',
        borderColor: 'cardsBorder',
        borderRadius: 3,
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
  return (
    <Fragment>
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
            flexWrap: 'wrap',
          }}
        >
          {cards}
        </Container>
      </Box>
    </Fragment>
  )
}

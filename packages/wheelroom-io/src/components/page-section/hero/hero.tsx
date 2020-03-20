import React, { Fragment } from 'react'
import { heading1Style } from '../../../core/styles/heading'
import { paragraphHeroStyle } from '../../../core/styles/paragraph'
import { Box, Container } from '../../../core/elements/grid'
import { TopicProps, Topic } from '../../topic'
import { buttonPrimaryStyle } from '../../../core/styles/button'
import { TextProps } from '../../text'
import { TopicOption } from '../page-section'

const heroActionStyle = {
  ...buttonPrimaryStyle,
  fontSize: [5, 6],
  py: [2, 3],
  px: [3, 4],
}

export interface HeroProps {
  topic: TopicProps
  text?: TextProps
  topicOptions: TopicOption[]
}

export const Hero = (props: HeroProps) => {
  return (
    <Fragment>
      <Box
        is="div"
        ncss={{
          label: 'wrapper',
        }}
      >
        <Container
          ncss={{
            label: 'Container',
            m: 'auto',
            px: 0,
            w: 1,
          }}
        >
          <Topic
            {...props.topic}
            topicOptions={props.topicOptions}
            text={props.text}
            topicWrapperStyle={{
              position: 'relative',
              px: [2, 5, 7],
              py: 9,
              w: 1,
            }}
            imageProps={{ imgNcss: { h: 1, objectFit: 'cover' } }}
            imageWrapperStyle={{
              position: 'absolute',
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              zIndex: -1,
            }}
            contentWrapperStyle={{
              maxWidth: '1440px',
              m: 'auto',
              p: 3,
              w: 1,
            }}
            headerWrapperStyle={{
              maxWidth: '480px',
              w: 1,
            }}
            headingStyle={{ ...heading1Style, mb: 0, color: 'caviar' }}
            useHeading="h1"
            paragraphStyle={{ ...paragraphHeroStyle }}
            actionWrapperStyle={{ mb: 0, maxWidth: '480px' }}
            actionStyle={heroActionStyle}
          />
        </Container>
      </Box>
    </Fragment>
  )
}

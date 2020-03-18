import React, { Fragment } from 'react'
import { heading1Style } from '../../../core/styles/heading'
import { paragraphHeroStyle } from '../../../core/styles/paragraph'
import { Box } from '../../../core/elements/grid'
import { TopicProps, Topic } from '../../topic'
import { buttonPrimaryStyle } from '../../../core/styles/button'
import { TextProps } from '../../text/text'

const heroActionStyle = {
  ...buttonPrimaryStyle,
  fontSize: [4, 5],
  display: 'inline-flex',
  py: 3,
  px: 4,
}

export interface HeroProps {
  topic: TopicProps
  text?: TextProps
}

export const Hero = (props: HeroProps) => {
  return (
    <Fragment>
      <Box
        is="div"
        ncss={{
          label: 'Wrapper',
        }}
      >
        <Topic
          {...props.topic}
          text={props.text}
          topicWrapperStyle={{
            position: 'relative',
            overflow: 'hidden',
            w: 1,
          }}
          imageWrapperStyle={{
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            zIndex: -1,
          }}
          contentWrapperStyle={{
            maxWidth: '1280px',
            m: 'auto',
            px: [2, 5, 7],
            w: 1,
          }}
          headerWrapperStyle={{
            maxWidth: '480px',
            py: 9,
            my: 9,
            w: 1,
          }}
          headingStyle={{ ...heading1Style, mb: 0, color: 'caviar' }}
          useHeading="h1"
          paragraphStyle={{ ...paragraphHeroStyle, my: 3 }}
          actionStyle={heroActionStyle}
        />
      </Box>
    </Fragment>
  )
}

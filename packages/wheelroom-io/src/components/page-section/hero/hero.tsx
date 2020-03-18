import React, { Fragment } from 'react'
import { heading1Style } from '../../../core/styles/heading'
import { paragraphHeroStyle } from '../../../core/styles/paragraph'
import { Box, Container } from '../../../core/elements/grid'
import { H1 } from '../../../core/elements/heading'
import { Paragraph } from '../../../core/elements/paragraph'
import { Image } from '../../../core/elements/image'
import { TopicProps } from '../../topic'
import { Action } from '../../action'
import { IconMap } from '../../../svg/feather/iconMap'
import { buttonPrimaryStyle } from '../../../core/styles/button'

const iconStyle = { color: 'text', w: [1 / 10] }

const heroActionStyle = {
  ...buttonPrimaryStyle,
  fontSize: [4, 5],
  display: 'inline-flex',
  py: 3,
  px: 4,
}

export interface HeroProps {
  topic: TopicProps
}

export const Hero = (props: HeroProps) => {
  const Icon = IconMap[props.topic.icon || 'aap']
  const topicHasAction =
    Array.isArray(props.topic.actions) && props.topic.actions.length > 0
  return (
    <Fragment>
      <Box
        is="div"
        ncss={{
          label: 'Wrapper',
        }}
      >
        <Container
          ncss={{
            label: 'Container',
            position: 'relative',
            overflow: 'hidden',
            w: 1,
          }}
        >
          <Box
            ncss={{
              position: 'absolute',
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              zIndex: -1,
            }}
          >
            <Image image={props.topic.image} objectFit="cover" height="100%" />
          </Box>
          <Container
            ncss={{
              label: 'Container',
              maxWidth: '1280px',
              m: 'auto',
              px: [2, 5, 7],
              w: 1,
            }}
          >
            <Box
              ncss={{
                maxWidth: '480px',
                py: 9,
                my: 9,
                w: 1,
              }}
            >
              <Icon strokeWidth={3} ncss={iconStyle} />
              <H1 ncss={{ ...heading1Style, mb: 0, color: 'caviar' }}>
                {props.topic.heading}
              </H1>
              <Paragraph ncss={{ ...paragraphHeroStyle, my: 3 }}>
                {props.topic.abstract && props.topic.abstract.abstract}
              </Paragraph>
              {topicHasAction && (
                <Action {...props.topic.actions[0]} ncss={heroActionStyle} />
              )}
            </Box>
          </Container>
        </Container>
      </Box>
    </Fragment>
  )
}

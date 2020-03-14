/**
 * Component variation
 *
 * Component type: openerSection
 * Variation: Home page
 *
 */

import React, { Fragment } from 'react'
import { heading1Style } from '../../../styles/heading'
import { paragraphHeroStyle } from '../../../styles/paragraph'
import { Box, Container } from '../../../views/core-elements/grid'
import { H1 } from '../../../views/core-elements/heading'
import { Paragraph } from '../../../views/core-elements/paragraph'
import { Image } from '../../../views/core-elements/image'
import { Navigation } from '../../navigation'
import { TopicProps } from '../../topic'
import { ActionProps } from '../../action'
import { HeroAction } from './hero-action'
import { NavigationSegmentProps } from '../../navigation-segment'
import { IconMap } from '../../../svg/feather/iconMap'

const iconStyle = { color: 'text', w: [1 / 10] }

export interface HeroProps {
  topic: TopicProps
  action: ActionProps
  segments: NavigationSegmentProps[]
}

export const Hero = (props: HeroProps) => {
  const Icon = IconMap[props.topic.icon || 'aap']
  const topicHasAction =
    Array.isArray(props.topic.actions) && props.topic.actions.length > 0
  return (
    <Fragment>
      <Navigation segments={props.segments} action={props.action} />
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
              {topicHasAction && <HeroAction {...props.topic.actions[0]} />}
            </Box>
          </Container>
        </Container>
      </Box>
    </Fragment>
  )
}

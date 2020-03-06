/**
 * Component variation
 *
 * Component type: openerSection
 * Variation: Home page
 *
 */

import React, { Fragment } from 'react'
import { heading1Style } from '../../styles/heading'
import { paragraphHeroStyle } from '../../styles/paragraph'
import {
  buttonPrimaryStyle,
  buttonPrimaryTransparentStyle,
  buttonSecondaryStyle,
} from '../../styles/button'
import { Box, Container } from '../../views/core-elements/grid'
import { H1 } from '../../views/core-elements/heading'
import { Paragraph } from '../../views/core-elements/paragraph'
import { Image } from '../../views/image/image'
import { Navigation } from '../navigation'
import { OpenerSectionProps } from './opener-section'
import { GLink } from '../../views/core-elements/g-link'

export const OpenerSectionHomeVar = (props: OpenerSectionProps) => {
  const image = props.image || props.page.image
  const heading = props.heading || props.page.heading

  return (
    <Fragment>
      <Navigation pages={props.navigation.pages} />
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
            <Image image={image} objectFit="cover" height="100%" />
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
              <H1 ncss={{ ...heading1Style, mb: 0, color: 'caviar' }}>
                {heading}
              </H1>
              <Paragraph ncss={{ ...paragraphHeroStyle, my: 3 }}>
                A new approach to faster, more secure websites.
              </Paragraph>
              <GLink
                ncss={{
                  ...buttonPrimaryStyle,
                  fontSize: [4, 5],
                  display: 'inline-flex',
                  py: 3,
                  px: 4,
                }}
                to="/documentation"
              >
                Try Wheelroom for Free
              </GLink>
            </Box>
          </Container>
        </Container>
      </Box>
    </Fragment>
  )
}

/**
 * Component variation
 *
 * Component type: openerSection
 * Variation: Home
 *
 */

import React, { Fragment } from 'react'
import { heading2Style } from '../../styles/heading'
import { Box, Flex } from '../../views/core-elements/grid'
import { H2 } from '../../views/core-elements/heading'
import { Image } from '../../views/image/image'
import { Navigation } from '../navigation'
import { OpenerSectionProps } from './opener-section'

export const OpenerSectionHomeVar = (props: OpenerSectionProps) => {
  const image = props.image || props.page.image
  const heading = props.heading || props.page.heading

  return (
    <Fragment>
      <Navigation pages={props.navigation.pages} />
      <Box ncss={{ w: [1], height: [5, 5, 6, 6], position: 'relative' }}>
        <Box ncss={{ position: 'relative', h: '100%' }}>
          <Image image={image} objectFit="cover" height="100%" />
        </Box>
        <Flex
          ncss={{
            alignItems: 'center',
            height: '100%',
            justifyContent: 'center',
            position: 'absolute',
            px: ['20px', '200px'],
            textAlign: 'center',
            top: 0,
            w: 1,
          }}
        >
          <H2 ncss={heading2Style}>{heading}</H2>
        </Flex>
      </Box>
    </Fragment>
  )
}

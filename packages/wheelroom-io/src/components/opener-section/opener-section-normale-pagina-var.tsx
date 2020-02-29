/**
 * Component variation
 *
 * Component type: openerSection
 * Variation: Normale pagina
 *
 */

import React, { Fragment } from 'react'
import { getAllPaddingObject } from '../../styles/global-padding'
import { heading1Style } from '../../styles/heading'
import { paragraph2Style } from '../../styles/paragraph'
import { Box, Flex } from '../../views/core-elements/grid'
import { H1 } from '../../views/core-elements/heading'
import { Paragraph } from '../../views/core-elements/paragraph'
import { Image } from '../../views/image/image'
import { Navigation } from '../navigation'
import { OpenerSectionProps } from './opener-section'

export const OpenerSectionNormalePaginaVar = (props: OpenerSectionProps) => {
  const image = props.image || props.page.image
  const heading = props.heading || props.page.heading
  const abstract =
    (props.abstract && props.abstract.abstract) ||
    (props.page.abstract && props.page.abstract.abstract)

  return (
    <Fragment>
      <Box ncss={{ w: [1], height: [5, 5, 6, 6], position: 'relative' }}>
        <Box ncss={{ position: 'relative', h: '100%' }}>
          <Image image={image} objectFit="cover" height="100%" />
        </Box>
        <Box
          ncss={{
            ...getAllPaddingObject('textBox'),
            bottom: '50px',
            overflow: 'hidden',
            position: 'absolute',
            right: '20px',
            w: [7 / 8, 6 / 8, 4 / 8, 4 / 8],
          }}
        >
          <H1 ncss={heading1Style}>{heading}</H1>
          <Paragraph
            ncss={{
              ...paragraph2Style,
              color: 'metal',
            }}
          >
            {abstract}
          </Paragraph>
        </Box>
        <Flex
          ncss={{
            left: 0,
            position: 'absolute',
            top: 0,
            w: 1,
          }}
        >
          <Navigation pages={props.navigation.pages} />
        </Flex>
      </Box>
    </Fragment>
  )
}

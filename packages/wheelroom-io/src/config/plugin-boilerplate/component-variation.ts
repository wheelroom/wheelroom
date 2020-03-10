export const componentVariation = `/**
 * Component variation
 *
 * Component type: %componentName%
 * Variation: %Variation name%
 *
 */

import React, { Fragment } from 'react'
import { Box, Flex } from '../../views/core-elements/grid'
import { Image } from '../../views/image/image'
import { %ComponentName%Props } from './%component-name%'

const FlexContainer = Flex
const FlexBox = Box

const flexContainerProps = {
  ncss: {
    bg: '#EEE',
    fontFamily: 'text',
    maxHeight: '300px',
    mb: 1,
    overflow: 'hidden',
    p: 3,
    w: [1],
  },
}

const flexBoxProps = {
  ncss: { w: [1, 1 / 4] },
}

const imageProps = {
  objectFit: 'cover',
}

export const %ComponentName%%VariationName%Var = (props: %ComponentName%Props) => {
  return (
    <Fragment>
      <FlexContainer
        ncss={{
          ...flexContainerProps.ncss,
          bg: '#CCC',
          fontFamily: 'heading',
          fontSize: 7,
          my: 4,
        }}
      >
        <FlexBox ncss={{ ...flexBoxProps.ncss, w: 1 }}>
          %Component name% %variation name% var
        </FlexBox>
      </FlexContainer>
      %flexBoxProps(indent:6)%
    </Fragment>
  )
}
`

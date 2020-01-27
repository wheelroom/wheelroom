/**
 * Component variation
 *
 * Component type: openerSection
 * Variation: Page opener
 *
 */

import React, { Fragment } from 'react'

import { Box, Flex } from '../../views/core-elements/grid'
import { OpenerSectionProps } from './opener-section'

const FlexContainer = Flex
const FlexBox = Box

const flexContainerProps = {
  ncss: { bg: 'mint', p: 3, mb: 1, w: [1], fontFamily: 'text' },
}

const flexBoxProps = {
  ncss: { w: [1, 1 / 2] },
}

export const OpenerSectionPageOpenerVar = (props: OpenerSectionProps) => {
  return (
    <Fragment>
      <FlexContainer
        ncss={{
          ...flexContainerProps.ncss,
          bg: 'green',
          fontFamily: 'heading',
          fontSize: 7,
          my: 4,
        }}
      >
        <FlexBox ncss={{ ...flexBoxProps.ncss, w: 1 }}>
          OpenerSectionHomeOpenerVar
        </FlexBox>
      </FlexContainer>
      <FlexContainer {...flexContainerProps}>
        <FlexBox {...flexBoxProps}>Heading</FlexBox>
        <FlexBox {...flexBoxProps}>{props.heading}</FlexBox>
      </FlexContainer>
      <FlexContainer {...flexContainerProps}>
        <FlexBox {...flexBoxProps}>Heading</FlexBox>
        <FlexBox {...flexBoxProps}>{props.heading}</FlexBox>
      </FlexContainer>
      <FlexContainer {...flexContainerProps}>
        <FlexBox {...flexBoxProps}>Heading</FlexBox>
        <FlexBox {...flexBoxProps}>{props.heading}</FlexBox>
      </FlexContainer>
    </Fragment>
  )
}

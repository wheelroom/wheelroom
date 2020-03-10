/**
 * Component variation
 *
 * Component type: pageSection
 * Variation: Groot
 *
 */

import React, { Fragment } from 'react'
import { Box, Flex } from '../../views/core-elements/grid'
import { Image } from '../../views/image/image'
import { PageSectionProps } from './page-section'

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

export const PageSectionGrootVar = (props: PageSectionProps) => {
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
          Page section groot var
        </FlexBox>
      </FlexContainer>
            <FlexContainer {...flexContainerProps}>
        <FlexBox {...flexBoxProps}>__typename</FlexBox>
        <FlexBox {...flexBoxProps}>optional</FlexBox>
        <FlexBox {...flexBoxProps}>shortText</FlexBox>
        <FlexBox {...flexBoxProps}>{props.__typename}</FlexBox>
      </FlexContainer>
      <FlexContainer {...flexContainerProps}>
        <FlexBox {...flexBoxProps}>title</FlexBox>
        <FlexBox {...flexBoxProps}>required</FlexBox>
        <FlexBox {...flexBoxProps}>shortText</FlexBox>
        <FlexBox {...flexBoxProps}>{props.title}</FlexBox>
      </FlexContainer>
      <FlexContainer {...flexContainerProps}>
        <FlexBox {...flexBoxProps}>variation</FlexBox>
        <FlexBox {...flexBoxProps}>optional</FlexBox>
        <FlexBox {...flexBoxProps}>dropdown</FlexBox>
        <FlexBox {...flexBoxProps}>{props.variation}</FlexBox>
      </FlexContainer>
      <FlexContainer {...flexContainerProps}>
        <FlexBox {...flexBoxProps}>topics</FlexBox>
        <FlexBox {...flexBoxProps}>optional</FlexBox>
        <FlexBox {...flexBoxProps}>multipleComponents</FlexBox>
        <FlexBox {...flexBoxProps}>topic</FlexBox>
      </FlexContainer>
      <FlexContainer {...flexContainerProps}>
        <FlexBox {...flexBoxProps}>text</FlexBox>
        <FlexBox {...flexBoxProps}>optional</FlexBox>
        <FlexBox {...flexBoxProps}>singleComponent</FlexBox>
        <FlexBox {...flexBoxProps}>text</FlexBox>
      </FlexContainer>
    </Fragment>
  )
}

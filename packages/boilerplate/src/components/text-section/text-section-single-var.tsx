/**
 * Component variation
 *
 * Component type: textSection
 * Variation: Single
 *
 */

import React, { Fragment } from 'react'
import { Box, Flex } from '../../views/core-elements/grid'
import { Image } from '../../views/image/image'
import { TextSectionProps } from './text-section'

const FlexContainer = Flex
const FlexBox = Box

const flexContainerProps = {
  ncss: {
    bg: 'mint',
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

export const TextSectionSingleVar = (props: TextSectionProps) => {
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
          Text section single var
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
        <FlexBox {...flexBoxProps}>text</FlexBox>
        <FlexBox {...flexBoxProps}>required</FlexBox>
        <FlexBox {...flexBoxProps}>richText</FlexBox>
        <FlexBox {...flexBoxProps}>{props.text ? props.text.text : 'null'}</FlexBox>
      </FlexContainer>
    </Fragment>
  )
}

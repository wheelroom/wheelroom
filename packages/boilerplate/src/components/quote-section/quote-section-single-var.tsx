/**
 * Component variation
 *
 * Component type: quoteSection
 * Variation: Single
 *
 */

import React, { Fragment } from 'react'
import { Box, Flex } from '../../views/core-elements/grid'
import { Image } from '../../views/image/image'
import { QuoteSectionProps } from './quote-section'

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

export const QuoteSectionSingleVar = (props: QuoteSectionProps) => {
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
          Quote section single var
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
        <FlexBox {...flexBoxProps}>heading</FlexBox>
        <FlexBox {...flexBoxProps}>required</FlexBox>
        <FlexBox {...flexBoxProps}>shortText</FlexBox>
        <FlexBox {...flexBoxProps}>{props.heading}</FlexBox>
      </FlexContainer>
      <FlexContainer {...flexContainerProps}>
        <FlexBox {...flexBoxProps}>subHeading</FlexBox>
        <FlexBox {...flexBoxProps}>required</FlexBox>
        <FlexBox {...flexBoxProps}>shortText</FlexBox>
        <FlexBox {...flexBoxProps}>{props.subHeading}</FlexBox>
      </FlexContainer>
      <FlexContainer {...flexContainerProps}>
        <FlexBox {...flexBoxProps}>abstract</FlexBox>
        <FlexBox {...flexBoxProps}>required</FlexBox>
        <FlexBox {...flexBoxProps}>longText</FlexBox>
        <FlexBox {...flexBoxProps}>{props.abstract ? props.abstract.abstract : 'null'}</FlexBox>
      </FlexContainer>
      <FlexContainer {...flexContainerProps}>
        <FlexBox {...flexBoxProps}>image</FlexBox>
        <FlexBox {...flexBoxProps}>optional</FlexBox>
        <FlexBox {...flexBoxProps}>image</FlexBox>
        <FlexBox {...flexBoxProps}><Image image={props.image} {...imageProps} /></FlexBox>
      </FlexContainer>
    </Fragment>
  )
}

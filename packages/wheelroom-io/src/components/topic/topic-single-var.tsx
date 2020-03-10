/**
 * Component variation
 *
 * Component type: topic
 * Variation: Single
 *
 */

import React, { Fragment } from 'react'
import { Box, Flex } from '../../views/core-elements/grid'
import { Image } from '../../views/image/image'
import { TopicProps } from './topic'

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

export const TopicSingleVar = (props: TopicProps) => {
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
          Topic single var
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
        <FlexBox {...flexBoxProps}>optional</FlexBox>
        <FlexBox {...flexBoxProps}>shortText</FlexBox>
        <FlexBox {...flexBoxProps}>{props.heading}</FlexBox>
      </FlexContainer>
      <FlexContainer {...flexContainerProps}>
        <FlexBox {...flexBoxProps}>abstract</FlexBox>
        <FlexBox {...flexBoxProps}>optional</FlexBox>
        <FlexBox {...flexBoxProps}>longText</FlexBox>
        <FlexBox {...flexBoxProps}>{props.abstract ? props.abstract.abstract : 'null'}</FlexBox>
      </FlexContainer>
      <FlexContainer {...flexContainerProps}>
        <FlexBox {...flexBoxProps}>image</FlexBox>
        <FlexBox {...flexBoxProps}>optional</FlexBox>
        <FlexBox {...flexBoxProps}>image</FlexBox>
        <FlexBox {...flexBoxProps}><Image image={props.image} {...imageProps} /></FlexBox>
      </FlexContainer>
      <FlexContainer {...flexContainerProps}>
        <FlexBox {...flexBoxProps}>icon</FlexBox>
        <FlexBox {...flexBoxProps}>optional</FlexBox>
        <FlexBox {...flexBoxProps}>dropdown</FlexBox>
        <FlexBox {...flexBoxProps}>{props.icon}</FlexBox>
      </FlexContainer>
      <FlexContainer {...flexContainerProps}>
        <FlexBox {...flexBoxProps}>actions</FlexBox>
        <FlexBox {...flexBoxProps}>optional</FlexBox>
        <FlexBox {...flexBoxProps}>multipleComponents</FlexBox>
        <FlexBox {...flexBoxProps}>action</FlexBox>
      </FlexContainer>
    </Fragment>
  )
}

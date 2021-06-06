import React, { Fragment } from 'react'
import {
  Wheel,
  Flex,
  Heading,
  HeadingElementName,
  MultiParser,
} from '@wheelroom/core'
import { NavigationSegmentModel } from './model'
import { NavigationSegmentList } from './navigation-segment-list'
import { NavigationSegmentNcssTree } from './ncss-tree'

interface NavigationSegmentWheel extends Wheel {
  style: NavigationSegmentNcssTree
}

interface NavigationSegmentProps {
  headingElementName: HeadingElementName
  hideActionHeading: boolean
  hideSegmentAbstract: boolean
  hideActionIcon: boolean
  hideSegmentHeading: boolean
  maxSegments: number
  navigationSegment: NavigationSegmentModel[]
  wheel: NavigationSegmentWheel
}

export const NavigationSegment = (props: NavigationSegmentProps) => {
  if (!props.navigationSegment) {
    return null
  }
  return (
    <Fragment>
      {props.navigationSegment
        .slice(0, props.maxSegments)
        .map((navigationSegment: NavigationSegmentModel, index: number) => {
          const navigationSegmentList = (
            <NavigationSegmentList
              actions={navigationSegment.actions}
              hideActionHeading={props.hideActionHeading}
              hideActionIcon={props.hideActionIcon}
              key={index}
              wheel={props.wheel}
            />
          )
          if (props.hideSegmentHeading && props.hideSegmentAbstract) {
            return navigationSegmentList
          } else {
            return (
              <Flex
                key={index}
                wheel={{
                  ...props.wheel,
                  style: props.wheel.style,
                }}
                is="div"
              >
                {!props.hideSegmentHeading && navigationSegment.heading && (
                  <Heading
                    is={props.headingElementName}
                    wheel={{
                      ...props.wheel,
                      style: props.wheel.style.heading,
                    }}
                  >
                    {navigationSegment.heading}
                  </Heading>
                )}
                {!props.hideSegmentAbstract && navigationSegment.abstract && (
                  <MultiParser
                    is="p"
                    wheel={{
                      ...props.wheel,
                      style: props.wheel.style.abstract,
                    }}
                  >
                    {navigationSegment.abstract &&
                      navigationSegment.abstract.abstract}
                  </MultiParser>
                )}
                {navigationSegmentList}
              </Flex>
            )
          }
        })}
    </Fragment>
  )
}

import React, { Fragment } from 'react'
import { Wheel, Flex, Heading, HeadingElementName } from '@wheelroom/core'
import { NavigationSegmentModel } from './model'
import { NavigationSegmentList } from './navigation-segment-list'
import { NavigationSegmentNcssTree } from './ncss-tree'

interface NavigationSegmentWheel extends Wheel {
  style: NavigationSegmentNcssTree
}

interface NavigationSegmentProps {
  headingElementName: HeadingElementName
  hideActionHeading: boolean
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
          if (!navigationSegment.actions) {
            return null
          }
          const navigationSegmentList = (
            <NavigationSegmentList
              actions={navigationSegment.actions}
              hideActionHeading={props.hideActionHeading}
              hideActionIcon={props.hideActionIcon}
              key={index}
              wheel={props.wheel}
            />
          )
          if (props.hideSegmentHeading) {
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
                {navigationSegment.heading && (
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
                {navigationSegmentList}
              </Flex>
            )
          }
        })}
    </Fragment>
  )
}

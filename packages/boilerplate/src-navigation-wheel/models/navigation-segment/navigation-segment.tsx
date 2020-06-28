import React, { Fragment } from 'react'
import { Wheel, Flex, H3 } from '../../../src-core'
import { NavigationSegmentModelProps } from './model-props'
import { NavigationSegmentList } from './navigation-segment-list'
import { NavigationSegmentModelNcssTree } from './model-ncss-tree'

interface NavigationSegmentWheel extends Wheel {
  style: NavigationSegmentModelNcssTree
}

interface NavigationSegmentProps {
  hideActionHeading: boolean
  hideActionIcon: boolean
  hideSegmentHeading: boolean
  maxSegments: number
  navigationSegment: NavigationSegmentModelProps[]
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
        .map(
          (navigationSegment: NavigationSegmentModelProps, index: number) => {
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
                    <H3
                      wheel={{
                        ...props.wheel,
                        style: props.wheel.style.heading,
                      }}
                    >
                      {navigationSegment.heading}
                    </H3>
                  )}
                  {navigationSegmentList}
                </Flex>
              )
            }
          }
        )}
    </Fragment>
  )
}

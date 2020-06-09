import React, { Fragment } from 'react'
import { Flex } from '../../element/grid'
import { H3 } from '../../element/heading'
import { NavigationSegmentWheelStyle } from './presets/navigation-segment-preset'
import { NavigationSegmentProps } from '../../../../models/navigation-segment/navigation-segment'
import { NavigationSegmentList } from './navigation-segment-list'
import { Wheel } from '../../types'

interface NavigationSegmentWheel extends Wheel {
  style: NavigationSegmentWheelStyle
}

export interface NavigationSegmentWheelProps {
  hideSegmentHeading: boolean
  hideActionHeading: boolean
  maxSegments: number
  navigationSegment: NavigationSegmentProps[]
  wheel: NavigationSegmentWheel
}

export const NavigationSegment = (props: NavigationSegmentWheelProps) => {
  if (!props.navigationSegment) {
    return null
  }

  return (
    <Fragment>
      {props.navigationSegment
        .slice(0, props.maxSegments)
        .map((navigationSegment: NavigationSegmentProps, index: number) => {
          if (!navigationSegment.actions) {
            return null
          }
          const navigationSegmentList = (
            <NavigationSegmentList
              actions={navigationSegment.actions}
              hideActionHeading={props.hideActionHeading}
              key={index}
              wheel={{
                ...props.wheel,
                style: props.wheel.style.list,
              }}
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
        })}
    </Fragment>
  )
}

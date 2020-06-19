import React, { Fragment } from 'react'
import { Wheel, Flex, H3 } from '../../../src-core'
import { NavigationSegmentWheelStyle } from './presets/navigation-segment-preset'
import { NavigationSegmentProps } from './model-types'
import { NavigationSegmentList } from './navigation-segment-list'

interface NavigationSegmentWheel extends Wheel {
  style: NavigationSegmentWheelStyle
}

export interface NavigationSegmentWheelProps {
  hideActionHeading: boolean
  hideActionIcon: boolean
  hideSegmentHeading: boolean
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
              hideActionIcon={props.hideActionIcon}
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

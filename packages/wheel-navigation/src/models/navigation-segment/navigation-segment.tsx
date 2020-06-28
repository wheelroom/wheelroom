import React, { Fragment } from 'react'
import { Wheel, Flex, H3 } from '../../../src-core'
import { NavigationSegmentModel } from './model'
import { NavigationSegmentList } from './navigation-segment-list'
import { NavigationSegmentNcssTree } from './ncss-tree'

interface NavigationSegmentWheel extends Wheel {
  style: NavigationSegmentNcssTree
}

interface NavigationSegmentProps {
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

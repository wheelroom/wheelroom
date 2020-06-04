import React, { Fragment } from 'react'
import { Flex } from '../../element/grid'
import { Strong } from '../../element/self'
import { BrandingWheelStyle } from './presets/branding-preset'
import { Wheel } from '../../types'
import { Action } from '../../model/action/action'
import { NavigationSegmentProps } from '../../../../models/navigation-segment/navigation-segment'
import { NavHeaderAction } from './nav-header-action'

interface BrandingWheel extends Wheel {
  style: BrandingWheelStyle
}

export interface BrandingWheelProps {
  logo: string | JSX.Element | undefined
  navigationSegments: NavigationSegmentProps[]
  wheel: BrandingWheel
}

export const Branding = (props: BrandingWheelProps) => {
  if (!props.logo) {
    return null
  }
  console.log('BrandingWheelProps:', props)
  console.log('Logo:', props.logo)
  console.log('navigationSegments:', props.navigationSegments)

  let logo

  if (React.isValidElement(props.logo)) {
    logo = props.logo
  }
  if (typeof props.logo === 'string') {
    logo = (
      <Fragment>
        <Strong wheel={{ ...props.wheel, style: props.wheel.style.logo }}>
          {props.logo}
        </Strong>
      </Fragment>
    )
  }
  return (
    <Flex is="div" wheel={props.wheel}>
      <NavHeaderAction
        action={props.navigationSegments[0].actions[0] || []}
        wheel={{ ...props.wheel, style: props.wheel.style.link }}
      >
        {logo}
      </NavHeaderAction>
    </Flex>
  )
}

import React from 'react'
import { Action } from '../../model/action/action'
import { BrandingWheelStyle } from './presets/branding-preset'
import { Flex } from '../../element/grid'
import { NavigationSegmentProps } from '../../../../models/navigation-segment/navigation-segment'
import { Strong } from '../../element/self'
import { Wheel } from '../../types'

interface BrandingWheel extends Wheel {
  style: BrandingWheelStyle
}

export interface BrandingWheelProps {
  logoElement?: JSX.Element
  navigationSegments: NavigationSegmentProps[]
  siteHeading?: string
  wheel: BrandingWheel
}

export const Branding = (props: BrandingWheelProps) => {
  const hasSegment = props.navigationSegments.length > 0
  const hasBrandAction =
    hasSegment &&
    Array.isArray(props.navigationSegments[0].actions) &&
    props.navigationSegments[0].actions.length > 0
  let brandAction = null
  if (hasBrandAction) {
    brandAction = props.navigationSegments[0].actions![0]
  }
  let brandHeading: string | undefined = ''
  if (brandAction) {
    brandHeading = brandAction.heading
  }
  const display = props.logoElement || brandHeading || props.siteHeading
  if (hasBrandAction) {
    return (
      <Flex is="div" wheel={props.wheel}>
        <Action
          {...brandAction}
          wheel={{ ...props.wheel, style: props.wheel.style.link }}
        >
          {display}
        </Action>
      </Flex>
    )
  } else
    return (
      <Flex is="div" wheel={props.wheel}>
        <Strong wheel={{ ...props.wheel, style: props.wheel.style.logo }}>
          {display}
        </Strong>
      </Flex>
    )
}

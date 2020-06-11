import React from 'react'
import { Action } from '../../../models/action/action'
import { BrandNavigationSegmentWheelStyle } from './presets/brand-navigation-segment-preset'
import { Flex } from '../../../elements/grid'
import { NavigationSegmentProps } from '../../../models/navigation-segment/navigation-segment'
import { Strong } from '../../../elements/self'
import { Wheel } from '../../../types/wheel'

interface BrandNavigationSegmentWheel extends Wheel {
  style: BrandNavigationSegmentWheelStyle
}

export interface BrandNavigationSegmentWheelProps {
  logoElement?: JSX.Element
  navigationSegment: NavigationSegmentProps[]
  siteHeading?: string
  wheel: BrandNavigationSegmentWheel
}

export const BrandNavigationSegment = (
  props: BrandNavigationSegmentWheelProps
) => {
  const hasSegment = props.navigationSegment.length > 0
  const hasBrandAction =
    hasSegment &&
    Array.isArray(props.navigationSegment[0].actions) &&
    props.navigationSegment[0].actions.length > 0
  let brandAction = null
  if (hasBrandAction) {
    brandAction = props.navigationSegment[0].actions![0]
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
          wheel={{ ...props.wheel, style: props.wheel.style.action }}
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

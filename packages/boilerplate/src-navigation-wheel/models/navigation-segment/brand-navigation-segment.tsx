import React from 'react'
import { Action, Wheel, Flex, Any } from '../../../src-core'
import { NavigationSegmentProps } from './model-types'
import { BrandNavigationSegmentModelStyle } from './model-style-types'

interface BrandNavigationSegmentWheel extends Wheel {
  style: BrandNavigationSegmentModelStyle
}

interface BrandNavigationSegmentWheelProps {
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
      <Flex is="div" wheel={{ ...props.wheel, style: props.wheel.style }}>
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
      <Flex
        is="div"
        wheel={{ ...props.wheel, style: props.wheel.style.container }}
      >
        <Any
          is="span"
          wheel={{ ...props.wheel, style: props.wheel.style.brand }}
        >
          {display}
        </Any>
      </Flex>
    )
}

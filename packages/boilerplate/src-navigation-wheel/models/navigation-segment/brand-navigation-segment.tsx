import React from 'react'
import { Action, Wheel, Any } from '../../../src-core'
import { NavigationSegmentModelProps } from './model-types'
import { BrandNavigationSegmentModelNcssTree } from './model-style-types'

interface BrandNavigationSegmentWheel extends Wheel {
  style: BrandNavigationSegmentModelNcssTree
}

interface BrandNavigationSegmentProps {
  logoElement?: JSX.Element
  navigationSegment: NavigationSegmentModelProps[]
  siteHeading?: string
  wheel: BrandNavigationSegmentWheel
}

export const BrandNavigationSegment = (props: BrandNavigationSegmentProps) => {
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
      <Action
        {...brandAction}
        wheel={{ ...props.wheel, style: props.wheel.style.action }}
      >
        {display}
      </Action>
    )
  } else
    return (
      <Any
        is="span"
        wheel={{ ...props.wheel, style: props.wheel.style.branding }}
      >
        {display}
      </Any>
    )
}

import React from 'react'
import { Action, Wheel, Any, Box } from '@wheelroom/core'
import { NavigationSegmentModel } from './model'
import { BrandNavigationSegmentNcssTree } from './ncss-tree'

interface BrandNavigationSegmentWheel extends Wheel {
  style: BrandNavigationSegmentNcssTree
}

interface BrandNavigationSegmentProps {
  logoElement?: JSX.Element
  navigationSegment: NavigationSegmentModel[]
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
      <Box is="div" wheel={{ ...props.wheel, style: props.wheel.style }}>
        <Action
          {...brandAction}
          wheel={{ ...props.wheel, style: props.wheel.style.action }}
        >
          {display}
        </Action>
      </Box>
    )
  } else
    return (
      <Box is="div" wheel={{ ...props.wheel, style: props.wheel.style }}>
        <Any
          is="span"
          wheel={{ ...props.wheel, style: props.wheel.style.branding }}
        >
          {display}
        </Any>
      </Box>
    )
}

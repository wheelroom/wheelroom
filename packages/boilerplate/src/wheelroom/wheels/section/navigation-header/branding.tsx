import React, { Fragment } from 'react'
import { Flex } from '../../element/grid'
import { Strong } from '../../element/self'
import { BrandingWheelStyle } from './presets/branding-preset'
import { Wheel } from '../../types'
import { ActionProps } from '../../../../models/action/action'
import { Action } from '../../model/action/action'

interface LogoWheel extends Wheel {
  style: BrandingWheelStyle
}

export const Branding = (props: {
  brandAction: ActionProps
  logo: string | JSX.Element
  wheel: LogoWheel
}) => {
  // When a React element is passed, use that
  const bandActionHeading = props.brandAction && props.brandAction.heading
  let logo
  if (React.isValidElement(props.logo)) {
    logo = props.logo
  }
  if (typeof props.logo === 'string') {
    logo = (
      <Fragment>
        <Strong wheel={{ ...props.wheel, style: props.wheel.style.logo }}>
          {bandActionHeading || props.logo}
        </Strong>
      </Fragment>
    )
  }
  return (
    <Flex is="div" wheel={props.wheel}>
      <Action
        {...props.brandAction}
        wheel={{ ...props.wheel, style: props.wheel.style.link }}
      >
        {logo}
      </Action>
    </Flex>
  )
}

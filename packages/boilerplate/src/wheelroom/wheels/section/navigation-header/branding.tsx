import React, { Fragment } from 'react'
import { Flex } from '../../element/grid'
import { GLink } from '../../element/g-link'
import { Strong } from '../../element/self'
import { BrandingWheelStyle } from './presets/branding-preset'
import { Wheel } from '../../types'
import { Sup } from '../../element/paragraph'
import { ActionProps } from '../../../../models/action/action'
import { Action } from '../../model/action/action'

interface LogoWheel extends Wheel {
  style: BrandingWheelStyle
}

export const Branding = (props: {
  brandAction: ActionProps
  logo: string | JSX.Element
  version?: string
  wheel: LogoWheel
}) => {
  // When a React element is passed, use that
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
        <Sup wheel={{ ...props.wheel, style: props.wheel.style.sup }}>
          {' ' + props.version}
        </Sup>
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

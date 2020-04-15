import React, { Fragment } from 'react'
import { Flex } from '../../elements/grid'
import { GLink } from '../../elements/g-link'
import { LogoPreset } from './presets/logo-preset'
import { Wheel } from '../../types'

interface LogoWheel extends Wheel {
  style: LogoPreset
}

export const Logo = (props: {
  logo: string | JSX.Element
  version?: string
  wheel: LogoWheel
}) => {
  // When a React element is passed, use that
  let logo
  let ariaLabel = `Back to ${props.logo} homepage`
  if (React.isValidElement(props.logo)) {
    logo = props.logo
    ariaLabel = 'Back to homepage'
  }
  if (typeof props.logo === 'string') {
    logo = (
      <Fragment>
        {props.logo}
        <sup>
          <small>{' ' + props.version}</small>
        </sup>
      </Fragment>
    )
  }

  return (
    <Flex is="div" ncss={props.wheel.style.container} wheel={props.wheel}>
      <GLink
        ncss={props.wheel.style.link.ncss}
        to="/"
        aria-label={ariaLabel}
        wheel={props.wheel}
      >
        {logo}
      </GLink>
    </Flex>
  )
}

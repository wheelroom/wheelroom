import React, { Fragment } from 'react'
import { Flex } from '../../elements/grid'
import { GLink } from '../../elements/g-link'
import { NavLogoPreset } from './presets/nav-logo-preset'
import { Wheel } from '../../types'

interface NavLogoWheel extends Wheel {
  style: NavLogoPreset
}

export const NavLogo = (props: {
  logo: string | JSX.Element
  version?: string
  wheel: NavLogoWheel
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
    <Flex is="div" ncss={props.wheel.style.container.ncss} wheel={props.wheel}>
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

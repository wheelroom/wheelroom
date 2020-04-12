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
  const treeStyle = props.treeStyle || {}
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
    <Flex is="div" ncss={treeStyle.container}>
      <GLink ncss={treeStyle.link} to="/" aria-label={ariaLabel}>
        {logo}
      </GLink>
    </Flex>
  )
}

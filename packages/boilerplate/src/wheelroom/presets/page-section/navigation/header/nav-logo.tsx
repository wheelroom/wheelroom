import React, { Fragment } from 'react'
import { Flex } from '../../../../elements/grid'
import { GLink } from '../../../../elements/g-link'
import { NavLogoTreeStyle } from './nav-logo-style'

export const NavLogo = (props: {
  treeStyle: NavLogoTreeStyle
  logo: string | JSX.Element
  version?: string
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

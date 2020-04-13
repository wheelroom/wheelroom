import React, { Fragment } from 'react'
import { GLink } from '../../elements/g-link'
import { Any } from '../../elements/any'
import { PageProps } from '../../../../models/page'
import { NavFooterListPreset } from './presets/nav-footer-list-preset'
import { Wheel } from '../../types'

interface NavLinksWheel extends Wheel {
  style: NavFooterListPreset
}

interface NavLinkProps extends PageProps {
  wheel: NavLinksWheel
}

const NavLink = (props: NavLinkProps) => {
  return (
    <GLink
      to={props.path}
      ncss={props.wheel.style.ncss}
      wheel={props.wheel}
    >
      {props.navigationHeading}
    </GLink>
  )
}

export interface NavLinksProps {
  pages: PageProps[]
  wheel: NavLinksWheel
}

export const NavFooterListItem = (props: NavLinksProps) => {
  const links = props.pages.map((page: PageProps) => (
    <Any
      is={'li'}
      ncss={props.wheel.style.ncss}
      key={page.navigationHeading}
      wheel={props.wheel}
    >
      <NavLink {...page} wheel={props.wheel} />
    </Any>
  ))
  return <Fragment>{links}</Fragment>
}

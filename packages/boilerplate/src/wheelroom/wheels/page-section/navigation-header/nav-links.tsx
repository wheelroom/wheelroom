import React, { Fragment } from 'react'
import { GLink } from '../../elements/g-link'
import { Any } from '../../elements/any'
import { PageProps } from '../../../../models/page'
import { Wheel } from '../../types'
import { NavListPreset } from '../navigation-footer/presets/nav-list-preset'

interface NavLinkWheel extends Wheel {
  style: NavListPreset
}

interface NavLinkProps extends PageProps {
  wheel: NavLinkWheel
}

const NavLink = (props: NavLinkProps) => {
  return (
    <GLink
      to={props.path}
      ncss={props.wheel.style.item.ncss}
      wheel={props.wheel}
    >
      {props.navigationHeading}
    </GLink>
  )
}

export interface NavLinksProps {
  pages: PageProps[]
  wheel: NavLinkWheel
}

export const NavLinks = (props: NavLinksProps) => {
  const links = props.pages.map((page: PageProps) => (
    <Any
      is={'li'}
      ncss={props.wheel.style.item.ncss}
      key={page.navigationHeading}
      wheel={props.wheel}
    >
      <NavLink {...page} wheel={props.wheel} />
    </Any>
  ))
  return <Fragment>{links}</Fragment>
}

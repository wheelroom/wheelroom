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
  const treeStyle = props.treeStyle || {}
  return (
    <GLink to={props.path} ncss={treeStyle}>
      {props.navigationHeading}
    </GLink>
  )
}

export interface NavLinksProps {
  pages: PageProps[]
  treeStyle: NavLinksTreeStyle
  wheel: Wheel
}

export const NavLinks = (props: NavLinksProps) => {
  const itemStyle = props.treeStyle.itemStyle || {}
  const links = props.pages.map((page: PageProps) => (
    <Any is={'li'} ncss={itemStyle} key={page.navigationHeading}>
      <NavLink {...page} treeStyle={props.treeStyle.linkStyle} />
    </Any>
  ))
  return <Fragment>{links}</Fragment>
}

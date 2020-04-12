import React, { Fragment } from 'react'
import { GLink } from '../../elements/g-link'
import { Any } from '../../elements/any'
import { PageProps } from '../../../../models/page'
import { NcssProps } from '../../types'

interface NavLinkProps extends PageProps {
  treeStyle: NcssProps
}

const NavLink = (props: NavLinkProps) => {
  const treeStyle = props.treeStyle || {}
  return (
    <GLink to={props.path} ncss={treeStyle}>
      {props.navigationHeading}
    </GLink>
  )
}

export interface NavLinksTreeStyle {
  itemStyle?: NcssProps
  linkStyle?: NcssProps
}

export interface NavLinksProps {
  pages: PageProps[]
  treeStyle: NavLinksTreeStyle
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

import React, { Fragment } from 'react'
import { GLink } from '../../core/elements/primary/g-link'
import { Any } from '../../core/elements/primary/any'
import { PageProps } from '../page'
import { NcssProps } from '../../core/elements/primary/types'

interface NavLinkProps extends PageProps {
  styleTree: NcssProps
}

const NavLink = (props: NavLinkProps) => {
  const styleTree = props.styleTree || {}
  return (
    <GLink
      to={props.path}
      ncss={{
        label: 'nav-link',
        ...styleTree,
      }}
    >
      {props.navigationHeading}
    </GLink>
  )
}

export interface NavLinksProps {
  pages: PageProps[]
  styleTree: {
    itemStyle?: NcssProps
    linkStyle?: NcssProps
  }
}

export const NavLinks = (props: NavLinksProps) => {
  const itemStyle = props.styleTree.itemStyle || {}
  const links = props.pages.map((page: PageProps) => (
    <Any
      is={'li'}
      ncss={{ label: 'nav-item', ...itemStyle }}
      key={page.navigationHeading}
    >
      <NavLink {...page} styleTree={props.styleTree.linkStyle} />
    </Any>
  ))
  return <Fragment>{links}</Fragment>
}

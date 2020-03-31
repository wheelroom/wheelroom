import React, { Fragment } from 'react'
import { GLink } from '../../primary-elements/g-link'
import { Any } from '../../primary-elements/any'
import { PageProps } from '../../../components/page'
import { NcssProps } from '../../primary-elements/types'

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

import React, { Fragment } from 'react'
import { GLink } from '../../core/elements/g-link'
import { Any } from '../../core/elements/any'
import { PageProps } from '../page'

interface NavLinkProps extends PageProps {
  linkStyle: any
}

const NavLink = (props: NavLinkProps) => {
  const linkStyle = props.linkStyle || {}
  return (
    <GLink
      to={props.path}
      ncss={{
        label: 'nav-link',
        ...linkStyle,
      }}
    >
      {props.navigationHeading}
    </GLink>
  )
}

export interface NavLinksProps {
  pages: PageProps[]
  itemStyle?: any
  linkStyle?: any
}

export const NavLinks = (props: NavLinksProps) => {
  const itemStyle = props.itemStyle || {}
  const links = props.pages.map((page: PageProps) => (
    <Any
      is={'li'}
      ncss={{ label: 'nav-item', ...itemStyle }}
      key={page.navigationHeading}
    >
      <NavLink {...page} linkStyle={props.linkStyle} />
    </Any>
  ))
  return <Fragment>{links}</Fragment>
}

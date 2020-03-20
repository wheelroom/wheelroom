import React, { Fragment } from 'react'
import { GLink } from '../../core/elements/g-link'
import { Any } from '../../core/elements/any'
import { PageProps } from '../page'

const NavLink = (props: PageProps) => {
  return (
    <GLink
      to={props.path}
      ncss={{
        label: 'nav-link',
      }}
    >
      {props.navigationHeading}
    </GLink>
  )
}

export interface NavLinksProps {
  pages: PageProps[]
  ncss: any
}

export const NavLinks = (props: NavLinksProps) => {
  const links = props.pages.map((page: PageProps) => (
    <Any
      is={'li'}
      ncss={{ label: 'nav-item', ...props.ncss }}
      key={page.navigationHeading}
    >
      <NavLink {...page} />
    </Any>
  ))
  return <Fragment>{links}</Fragment>
}

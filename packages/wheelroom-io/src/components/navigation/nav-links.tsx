import React, { Fragment } from 'react'
import { navigationHeaderStyle } from '../../styles/navigation'
import { GLink } from '../../core/elements/g-link'
import { Any } from '../../core/elements/any'
import { PageProps } from '../page/page'

const ActionGlink = (props: PageProps) => {
  return (
    <GLink
      to={props.path}
      ncss={{
        label: 'NavActionGlink',
        ...navigationHeaderStyle,
      }}
    >
      {props.navigationHeading}
    </GLink>
  )
}

export interface NavLinksProps {
  pages: PageProps[]
}

export const NavLinks = (props: NavLinksProps) => {
  const links = props.pages.map((page: PageProps) => (
    <Any is={'li'} ncss={{ label: 'NavItem' }} key={page.navigationHeading}>
      <ActionGlink {...page} />
    </Any>
  ))
  return <Fragment>{links}</Fragment>
}

import { navigationHeaderStyle } from '../../styles/navigation'
import { GLink } from '../../views/core-elements/g-link'
import { Any } from '../../views/core-elements/any'
import { PageProps } from '../page/page'
import React from 'react'

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

interface NavLinksProps {
  pages: PageProps[]
}
export const NavLinks = (props: NavLinksProps) => {
  return props.pages.map((page: PageProps) => (
    <Any is={'li'} ncss={{ label: 'NavItem' }} key={page.navigationHeading}>
      <ActionGlink {...page} />
    </Any>
  ))
}

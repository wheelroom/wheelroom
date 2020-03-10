import React, { Fragment } from 'react'
import { navigationHeaderStyle } from '../../styles/navigation'
import { GLink } from '../../views/core-elements/g-link'
import { PageProps } from '../page'
import { Any } from '../../views/core-elements/any'

interface NavLinksProps {
  pages: PageProps[]
}
export const NavLinks = (props: NavLinksProps) => (
  <Fragment>
    {props.pages.map((page: PageProps) => (
      <Any is={'li'} ncss={{ label: 'NavItem' }} key={page.path}>
        <GLink
          to={page.path}
          ncss={{
            label: 'NavLink',
            ...navigationHeaderStyle,
          }}
        >
          {page.navigationHeading || page.heading}
        </GLink>
      </Any>
    ))}
  </Fragment>
)

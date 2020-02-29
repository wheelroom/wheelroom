import React, { Fragment } from 'react'
import { navigationHeadingStyle } from '../../styles/heading'
import { GLink } from '../../views/core-elements/g-link'
import { PageProps } from '../page'

interface NavLinksProps {
  pages: PageProps[]
}
export const NavLinks = (props: NavLinksProps) => (
  <Fragment>
    {props.pages.map((page: PageProps) => (
      <li key={page.toString()}>
        <GLink
          key={page.path}
          to={page.path}
          ncss={{
            ...navigationHeadingStyle,
          }}
        >
          {page.navigationHeading || page.heading}
        </GLink>
      </li>
    ))}
  </Fragment>
)

import React, { Fragment } from 'react'
import { getAllPaddingObject } from '../../styles/global-padding'
import { navigationHeadingStyle } from '../../styles/heading'
import { GLink } from '../../views/core-elements/g-link'
import { PageProps } from '../page/page'

interface NavLinksProps {
  pages: PageProps[]
}
export const NavLinks = (props: NavLinksProps) => (
  <Fragment>
    {props.pages.map((page: PageProps) => (
      <GLink
        key={page.path}
        to={page.path}
        ncss={{
          ...navigationHeadingStyle,
          ...getAllPaddingObject('navLinks'),
          '&:hover': { textDecoration: 'underline' },
          '&:focus': { textDecoration: 'underline', color: 'amber' },
          color: 'azure',
        }}
      >
        {page.navigationHeading || page.heading}
      </GLink>
    ))}
  </Fragment>
)

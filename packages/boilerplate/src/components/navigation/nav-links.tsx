import React, { Fragment } from 'react'
import { getAllPaddingObject } from '../../styles/global-padding'
import { navigationHeadingStyle } from '../../styles/heading'
import { GLink } from '../../views/core-elements/g-link'
import { PageProps } from '../page/page'

interface NavLinksProps {
  routes: PageProps[]
}
export const NavLinks = (props: NavLinksProps) => (
  <Fragment>
    {props.routes.map((route: PageProps) => (
      <GLink
        key={route.pathName}
        to={route.path}
        ncss={{
          ...navigationHeadingStyle,
          ...getAllPaddingObject('navLinks'),
          '&:hover': { textDecoration: 'underline' },
          bg: 'darkGrey',
          color: 'white',
          display: 'block',
        }}
      >
        {route.navigationHeading}
      </GLink>
    ))}
  </Fragment>
)

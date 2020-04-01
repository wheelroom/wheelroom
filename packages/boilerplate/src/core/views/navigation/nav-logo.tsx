import React from 'react'
import { NcssProps } from '../../elements/types'
import { Flex } from '../../elements/grid'
import { GLink } from '../../elements/g-link'
import { GlobalsProps } from '../../../components/globals'
import { SiteMetadata } from '../../../page-template'

export interface NavLogoStyleTree {
  container: NcssProps
  link: NcssProps
}

export const NavLogo = (props: {
  globals: GlobalsProps
  siteMetadata: SiteMetadata
  styleTree: NavLogoStyleTree
}) => {
  const styleTree = props.styleTree || {}
  return (
    <Flex is="div" ncss={styleTree.container}>
      <GLink
        ncss={styleTree.link}
        to="/"
        aria-label={props.globals.siteHeading + `, Back to homepage`}
      >
        {props.globals.siteHeading + ` `}
        <sup>
          <small>{props.siteMetadata.legal.version}</small>
        </sup>
      </GLink>
    </Flex>
  )
}

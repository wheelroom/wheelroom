import React from 'react'
import { NcssProps } from '../../elements/types'
import { Flex } from '../../elements/grid'
import { GLink } from '../../elements/g-link'
import { SiteMetadata } from '../../../page-template'
import { GlobalsProps } from '../../../models/globals/globals'

export interface NavLogoStyleTree {
  container: NcssProps
  link: NcssProps
}

export const NavLogo = (props: {
  globals: GlobalsProps
  siteMetadata: SiteMetadata
  styleTree: NavLogoStyleTree
}) => {
  const heading = props.globals.siteHeading
  const version = props.siteMetadata.legal.version
  const styleTree = props.styleTree || {}
  return (
    <Flex is="div" ncss={styleTree.container}>
      <GLink
        ncss={styleTree.link}
        to="/"
        aria-label={heading + `, Back to homepage`}
      >
        {heading + ` `}
        <sup>
          <small>{version}</small>
        </sup>
      </GLink>
    </Flex>
  )
}

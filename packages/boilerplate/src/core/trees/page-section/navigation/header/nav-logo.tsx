import React from 'react'
import { NcssProps } from '../../../../elements/types'
import { Flex } from '../../../../elements/grid'
import { GLink } from '../../../../elements/g-link'
import { SiteMetadata } from '../../../../../page-template'
import { GlobalsProps } from '../../../../../models/globals/globals'

export interface NavLogoTreeStyle {
  container: NcssProps
  link: NcssProps
}

export const NavLogo = (props: {
  globals: GlobalsProps
  siteMetadata: SiteMetadata
  treeStyle: NavLogoTreeStyle
}) => {
  const heading = props.globals.siteHeading
  const version = props.siteMetadata.legal.version
  const treeStyle = props.treeStyle || {}
  return (
    <Flex is="div" ncss={treeStyle.container}>
      <GLink
        ncss={treeStyle.link}
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

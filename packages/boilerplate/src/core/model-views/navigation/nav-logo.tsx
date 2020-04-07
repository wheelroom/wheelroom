import React from 'react'
import { NcssProps } from '../../elements/types'
import { Flex } from '../../elements/grid'
import { GLink } from '../../elements/g-link'

export interface NavLogoStyleTree {
  container: NcssProps
  link: NcssProps
}

export const NavLogo = (props: {
  globals: string
  siteMetadata: string
  styleTree: NavLogoStyleTree
}) => {
  const heading = props.globals
  const version = props.siteMetadata
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

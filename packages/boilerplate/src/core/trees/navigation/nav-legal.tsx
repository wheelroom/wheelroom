import React from 'react'
import { NcssProps } from '../../elements/types'
import { Container, Flex } from '../../elements/grid'
import { Any } from '../../elements/any'
import { ALink } from '../../elements/a-link'
import { SiteMetadata } from '../../../page-template'

export interface NavLegalStyleTree {
  container: NcssProps
  innerContainer: NcssProps
  text: NcssProps
  link: NcssProps
}

export const NavLegal = (props: {
  siteMetadata: SiteMetadata
  treeStyle: NavLegalStyleTree
}) => {
  const treeStyle = props.treeStyle || {}
  return (
    <Container ncss={treeStyle.container}>
      <Flex ncss={treeStyle.innerContainer}>
        <Any is="span" ncss={treeStyle.text}>
          <ALink ncss={treeStyle.link} href={props.siteMetadata.legal.url}>
            {props.siteMetadata.legal.description}
          </ALink>
          <sup>
            <small>{` ` + props.siteMetadata.legal.version}</small>
          </sup>
        </Any>
      </Flex>
    </Container>
  )
}
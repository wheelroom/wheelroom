import { List } from '../../elements/list'
import React from 'react'
import { NcssProps } from '../../elements/types'
import { NavLinks, NavLinksStyleTree } from './nav-links'
import { PageProps } from '../../../models/page/page'

export interface NavListStyleTree {
  list: NcssProps
  listItem: NavLinksStyleTree
}

export const NavList = (props: {
  pages: PageProps[]
  styleTree: NavListStyleTree
}) => {
  const styleTree = props.styleTree || {}
  return (
    <List is="ul" ncss={styleTree.list}>
      <NavLinks styleTree={styleTree.listItem} pages={props.pages} />
    </List>
  )
}

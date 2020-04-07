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
  treeStyle: NavListStyleTree
}) => {
  const treeStyle = props.treeStyle || {}
  return (
    <List is="ul" ncss={treeStyle.list}>
      <NavLinks treeStyle={treeStyle.listItem} pages={props.pages} />
    </List>
  )
}

import { List } from '../../elements/list'
import React from 'react'
import { NcssProps } from '../../elements/types'
import { NavLinks, NavLinksTreeStyle } from './nav-links'
import { PageProps } from '../../../models/page/page'

export interface NavListTreeStyle {
  list: NcssProps
  listItem: NavLinksTreeStyle
}

export const NavList = (props: {
  pages: PageProps[]
  treeStyle: NavListTreeStyle
}) => {
  const treeStyle = props.treeStyle || {}
  return (
    <List is="ul" ncss={treeStyle.list}>
      <NavLinks treeStyle={treeStyle.listItem} pages={props.pages} />
    </List>
  )
}

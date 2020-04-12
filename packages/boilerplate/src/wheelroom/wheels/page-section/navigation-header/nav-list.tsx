import { List } from '../../elements/list'
import React from 'react'
import { NcssProps, Wheel } from '../../types'
import { NavLinks, NavLinksTreeStyle } from './nav-links'
import { PageProps } from '../../../../models/page/page'

interface NavListWheel extends Wheel {
  style: NavListPreset
}


export const NavList = (props: { pages: PageProps[]; wheel: NavListWheel }) => {
  const treeStyle = props.treeStyle || {}
  return (
    <List is="ul" ncss={treeStyle.list}>
      <NavLinks treeStyle={treeStyle.listItem} pages={props.pages} />
    </List>
  )
}

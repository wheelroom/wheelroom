import React from 'react'
import { Flex, NcssNode, Wheel } from '@wheelroom/core'
import { NavigationModel } from '../../navigation/model'
import {
  MenuNavigation,
  MenuNavigationNcssTree,
} from '../../navigation/variants/menu-navigation'
import {
  SocialNavigation,
  SocialNavigationNcssTree,
} from '../../navigation/variants/social-navigation'

export interface FooterMenuNcssTree extends NcssNode {
  menu: MenuNavigationNcssTree
  social: SocialNavigationNcssTree
}

interface FooterMenuWheel extends Wheel {
  style: FooterMenuNcssTree
}

export interface FooterMenuProps {
  containerStyle: string
  hideMenu?: boolean
  hideSocial?: boolean
  navigation: NavigationModel[]
  wheel: FooterMenuWheel
}

export const FooterMenu = (props: FooterMenuProps) => {
  return (
    <Flex is="div" wheel={props.wheel}>
      <MenuNavigation
        wheel={{
          ...props.wheel,
          style: props.wheel.style.menu,
        }}
        maxSegments={1}
        navigation={props.navigation}
        hideMenu={props.hideMenu}
      />
      <SocialNavigation
        wheel={{
          ...props.wheel,
          style: props.wheel.style.social,
        }}
        maxSegments={1}
        navigation={props.navigation}
        hideSocial={props.hideSocial}
      />
    </Flex>
  )
}

import React from 'react'
import {
  Container,
  Flex,
  Fluid,
  NcssNode,
  Wheel,
  Wrapper,
} from '@wheelroom/core'
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
  container: NcssNode
  menuNavigation: MenuNavigationNcssTree
  socialNavigation: SocialNavigationNcssTree
  wrapper: NcssNode
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
  const ContainerType = props.containerStyle === 'container' ? Container : Fluid
  return (
    <Wrapper wheel={{ ...props.wheel, style: props.wheel.style.wrapper }}>
      <ContainerType
        wheel={{ ...props.wheel, style: props.wheel.style.container }}
      >
        <Flex is="div" wheel={props.wheel}>
          <MenuNavigation
            wheel={{
              ...props.wheel,
              style: props.wheel.style.menuNavigation,
            }}
            maxSegments={1}
            navigation={props.navigation}
            hideMenu={props.hideMenu}
          />
          <SocialNavigation
            wheel={{
              ...props.wheel,
              style: props.wheel.style.socialNavigation,
            }}
            maxSegments={1}
            navigation={props.navigation}
            hideSocial={props.hideSocial}
          />
        </Flex>
      </ContainerType>
    </Wrapper>
  )
}

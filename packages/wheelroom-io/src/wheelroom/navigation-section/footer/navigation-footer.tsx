import React from 'react'
import {
  CoreSiteMetadata,
  GlobalsModel,
  NcssNode,
  Wheel,
  Wrapper,
} from '@wheelroom/core'
import { NavigationModel } from '../../navigation/model'
import { FooterLegal, FooterLegalNcssTree } from './footer-legal'
import { NavigationSectionFooterData } from './data'
import { FooterMenu, FooterMenuNcssTree } from './footer-menu'
import { FooterCard, FooterCardNcssTree } from './footer-card'
import { FooterBrand, FooterBrandNcssTree } from './footer-brand'

export interface NavigationSectionFooterNcssTree extends NcssNode {
  footerBrand: FooterBrandNcssTree
  footerCard: FooterCardNcssTree
  footerLegal: FooterLegalNcssTree
  footerMenu: FooterMenuNcssTree
  wrapper: NcssNode
}

interface NavigationSectionFooterWheel extends Wheel {
  style: NavigationSectionFooterNcssTree
}

export interface NavigationFooterProps {
  containerStyle: 'container' | 'fluid'
  data: NavigationSectionFooterData
  globals: GlobalsModel
  navigation: NavigationModel[]
  siteMetaData: CoreSiteMetadata
  wheel: NavigationSectionFooterWheel
}

export const NavigationFooter = (props: NavigationFooterProps) => {
  if (!Array.isArray(props.navigation) || props.navigation.length < 1) {
    return null
  }

  return (
    <Wrapper wheel={{ ...props.wheel, style: props.wheel.style.wrapper }}>
      <FooterBrand
        containerStyle={props.containerStyle}
        hideBrand={props.data.hideBrand}
        logoElement={props.data.useLogoElement}
        navigation={props.navigation}
        siteHeading={props.globals.siteHeading}
        wheel={{ ...props.wheel, style: props.wheel.style.footerBrand }}
      />

      <FooterCard
        containerStyle={props.containerStyle}
        hideCard={props.data.hideCard}
        navigation={props.navigation}
        wheel={{ ...props.wheel, style: props.wheel.style.footerCard }}
      />

      <FooterMenu
        containerStyle={props.containerStyle}
        hideMenu={props.data.hideMenu}
        hideSocial={props.data.hideSocial}
        navigation={props.navigation}
        wheel={{ ...props.wheel, style: props.wheel.style.footerMenu }}
      />

      <FooterLegal
        containerStyle={props.containerStyle}
        copyright={props.data.copyright}
        hideCopyright={props.data.hideCopyright}
        hideLegal={props.data.hideLegal}
        siteMetadata={props.siteMetaData}
        supportWheelroom={props.data.supportWheelroom}
        wheel={{ ...props.wheel, style: props.wheel.style.footerLegal }}
      />
    </Wrapper>
  )
}

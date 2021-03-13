import React, { Fragment } from 'react'
import {
  Container,
  CoreSiteMetadata,
  Fluid,
  GlobalsModel,
  NcssNode,
  Wheel,
  Wrapper,
} from '@wheelroom/core'
import { FooterLegal, FooterLegalNcssTree } from './footer-legal'
import { NavigationModel } from '../../navigation/model'
import { NavigationSectionFooterData } from './data'
import { FooterMenu, FooterMenuNcssTree } from './footer-menu'
import { FooterCard, FooterCardNcssTree } from './footer-card'

export interface NavigationSectionFooterNcssTree extends NcssNode {
  container: NcssNode
  footer: FooterMenuNcssTree
  legalFooter: FooterLegalNcssTree
  cardFooter: FooterCardNcssTree
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

  const ContainerType = props.containerStyle === 'container' ? Container : Fluid

  return (
    <Fragment>
      <FooterCard
        containerStyle={props.containerStyle}
        hideFooterCard={props.data.hideCardFooter}
        navigation={props.navigation}
        wheel={{ ...props.wheel, style: props.wheel.style.cardFooter }}
      />

      <Wrapper wheel={{ ...props.wheel, style: props.wheel.style.wrapper }}>
        <ContainerType
          wheel={{ ...props.wheel, style: props.wheel.style.container }}
        >
          <FooterMenu
            containerStyle={props.containerStyle}
            wheel={{ ...props.wheel, style: props.wheel.style.footer }}
            navigation={props.navigation}
            hideMenu={props.data.hideMenu}
            hideSocial={props.data.hideSocial}
          />
        </ContainerType>
      </Wrapper>

      <FooterLegal
        containerStyle={props.containerStyle}
        copyright={props.data.copyright}
        hideCopyright={props.data.hideCopyright}
        hideFooterLegal={props.data.hideLegalFooter}
        siteMetadata={props.siteMetaData}
        supportWheelroom={props.data.supportWheelroom}
        wheel={{ ...props.wheel, style: props.wheel.style.legalFooter }}
      />
    </Fragment>
  )
}

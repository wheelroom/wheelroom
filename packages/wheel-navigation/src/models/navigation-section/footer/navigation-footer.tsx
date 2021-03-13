import React, { Fragment } from 'react'
import {
  Container,
  CoreSiteMetadata,
  Flex,
  Fluid,
  GlobalsModel,
  NcssNode,
  Wheel,
  Wrapper,
} from '@wheelroom/core'
import { LegalFooter, LegalFooterNcssTree } from './legal-footer'
import { NavigationModel } from '../../navigation/model'
import { NavigationSectionFooterData } from './data'
import { NavigationSegmentNcssTree } from '../../navigation-segment/ncss-tree'
import { MenuNavigation } from '../../navigation/variants/menu-navigation'
import { SocialNavigation } from '../../navigation/variants/social-navigation'

export interface NavigationSectionFooterNcssTree {
  container: NcssNode
  footer: {
    menu: { segment: NavigationSegmentNcssTree }
    social: { segment: NavigationSegmentNcssTree }
  } & NcssNode
  legalFooter: LegalFooterNcssTree
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
      <Wrapper wheel={{ ...props.wheel, style: props.wheel.style.wrapper }}>
        <ContainerType
          wheel={{ ...props.wheel, style: props.wheel.style.container }}
        >
          <Flex
            is="div"
            wheel={{ ...props.wheel, style: props.wheel.style.footer }}
          >
            {!props.data.hideMenu && (
              <Flex
                is={'nav'}
                wheel={{ ...props.wheel, style: props.wheel.style.footer.menu }}
              >
                <MenuNavigation
                  wheel={{
                    ...props.wheel,
                    style: props.wheel.style.footer.menu.segment,
                  }}
                  maxSegments={1}
                  navigation={props.navigation}
                />
              </Flex>
            )}
            {!props.data.hideSocial && (
              <Flex
                is={'div'}
                wheel={{
                  ...props.wheel,
                  style: props.wheel.style.footer.social,
                }}
              >
                <SocialNavigation
                  wheel={{
                    ...props.wheel,
                    style: props.wheel.style.footer.social.segment,
                  }}
                  maxSegments={1}
                  navigation={props.navigation}
                />
              </Flex>
            )}
          </Flex>
        </ContainerType>
      </Wrapper>
      <LegalFooter
        containerStyle={props.containerStyle}
        copyright={props.data.copyright}
        hideCopyright={props.data.hideCopyright}
        hideLegalFooter={props.data.hideLegalFooter}
        siteMetadata={props.siteMetaData}
        supportWheelroom={props.data.supportWheelroom}
        wheel={{ ...props.wheel, style: props.wheel.style.legalFooter }}
      />
    </Fragment>
  )
}

import React, { Fragment } from 'react'
import { Container, Flex, Fluid, Wrapper } from '../../element/grid'
import { GlobalsProps } from '../../../../models/globals/globals'
import { LegalFooter } from './legal-footer'
import { NavFooterList } from './nav-footer-list'
import { NavFooterWheelStyle } from './presets/nav-footer-preset'
import { NavigationProps } from '../../../../models/navigation/navigation'
import { NavigationSegmentProps } from '../../../../models/navigation-segment/navigation-segment'
import { SiteMetadata } from '../../../../page-template'
import { Wheel } from '../../types'

interface PageSectionNavigationFooterWheel extends Wheel {
  style: NavFooterWheelStyle
}

export interface PageSectionNavigationFooterProps {
  containerStyle: 'container' | 'fluid'
  globals: GlobalsProps
  navigation: NavigationProps[]
  siteMetaData: SiteMetadata
  wheel: PageSectionNavigationFooterWheel
}

const getNavSegments = (navigation: NavigationProps[], variation: string) => {
  const nav = navigation.find(
    (nav: NavigationProps) => nav.variation === variation
  )
  if (!nav || !nav.segments || !Array.isArray(nav.segments)) {
    return [] as NavigationSegmentProps[]
  }
  return nav.segments
}

export const NavigationFooter = (props: PageSectionNavigationFooterProps) => {
  if (!Array.isArray(props.navigation) || props.navigation.length < 1) {
    return null
  }

  const menuNavSegments = getNavSegments(props.navigation, 'menu')
  const socialNavSegments = getNavSegments(props.navigation, 'social')

  const ContainerType = props.containerStyle === 'container' ? Container : Fluid

  return (
    <Fragment>
      <Wrapper wheel={{ ...props.wheel, style: props.wheel.style.wrapper }}>
        <ContainerType
          wheel={{ ...props.wheel, style: props.wheel.style.container }}
        >
          <Flex
            is={'nav'}
            wheel={{ ...props.wheel, style: props.wheel.style.navFooter }}
          >
            <NavFooterList
              wheel={{
                ...props.wheel,
                style: props.wheel.style.navFooter.list,
              }}
              navigationSegments={menuNavSegments}
            />
            <NavFooterList
              wheel={{
                ...props.wheel,
                style: props.wheel.style.navFooter.list,
              }}
              navigationSegments={socialNavSegments}
            />
          </Flex>
        </ContainerType>
      </Wrapper>
      <LegalFooter
        siteMetadata={props.siteMetaData}
        containerStyle={props.containerStyle}
        wheel={{ ...props.wheel, style: props.wheel.style.legalFooter }}
      />
    </Fragment>
  )
}

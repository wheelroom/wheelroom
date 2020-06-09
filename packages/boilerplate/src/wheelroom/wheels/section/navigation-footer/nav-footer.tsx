import React, { Fragment } from 'react'
import { Container, Flex, Fluid, Wrapper } from '../../element/grid'
import { NavFooterSocialList } from './nav-footer-social-list'
import { NavFooterList } from './nav-footer-list'
import { LegalFooter } from './legal-footer'
import { NavFooterWheelStyle } from './presets/nav-footer-preset'
import { Wheel } from '../../types'
import { NavigationSectionProps } from '../../../../models/navigation-section/navigation-section'
import { NavigationProps } from '../../../../models/navigation/navigation'
import { NavigationSegmentProps } from '../../../../models/navigation-segment/navigation-segment'
import { GlobalsProps } from '../../../../models/globals/globals'

interface PageSectionNavigationFooterWheel extends Wheel {
  style: NavFooterWheelStyle
}

export interface PageSectionNavigationFooterProps {
  containerStyle: 'container' | 'fluid'
  globals: GlobalsProps
  navigation: NavigationProps[]
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
  console.log(props)
  if (!Array.isArray(props.navigation) || props.navigation.length < 1) {
    return null
  }

  const actionsNavSegments = getNavSegments(props.navigation, 'actions')
  const brandNavSegments = getNavSegments(props.navigation, 'brand')
  const menuNavSegments = getNavSegments(props.navigation, 'menu')
  const socialNavSegments = getNavSegments(props.navigation, 'social')

  console.log('actionsSegments', actionsNavSegments)
  console.log('brandSegments', brandNavSegments)
  console.log('menuSegments', menuNavSegments)
  console.log('socialSegments', socialNavSegments)

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
      {/*<LegalFooter*/}
      {/*  siteMetadata={'Wheelroom'}*/}
      {/*  containerStyle={props.containerStyle}*/}
      {/*  wheel={{ ...props.wheel, style: props.wheel.style.legalFooter }}*/}
      {/*/>*/}
    </Fragment>
  )
}

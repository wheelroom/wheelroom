import React, { Fragment } from 'react'
import { Container, Flex, Fluid, Wrapper } from '../../element/grid'
import { GlobalsProps } from '../../../../models/globals/globals'
import { LegalFooter } from './legal-footer'
import { NavigationFooterWheelStyle } from './presets/navigation-footer-preset'
import { NavigationProps } from '../../../../models/navigation/navigation'
import { NavigationSegmentProps } from '../../../../models/navigation-segment/navigation-segment'
import { SiteMetadata } from '../../../../page-template'
import { Wheel } from '../../types'
import { NavigationSegment } from '../../model/navigation-segment/navigation-segment'

interface NavigationFooterWheel extends Wheel {
  style: NavigationFooterWheelStyle
}

export interface NavigationFooterWheelProps {
  containerStyle: 'container' | 'fluid'
  globals: GlobalsProps
  navigation: NavigationProps[]
  siteMetaData: SiteMetadata
  wheel: NavigationFooterWheel
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

export const NavigationFooter = (props: NavigationFooterWheelProps) => {
  if (!Array.isArray(props.navigation) || props.navigation.length < 1) {
    return null
  }

  const menuSegments = getNavSegments(props.navigation, 'menu')
  const socialSegments = getNavSegments(props.navigation, 'social')

  const ContainerType = props.containerStyle === 'container' ? Container : Fluid

  return (
    <Fragment>
      <Wrapper wheel={{ ...props.wheel, style: props.wheel.style.wrapper }}>
        <ContainerType
          wheel={{ ...props.wheel, style: props.wheel.style.container }}
        >
          <Flex
            is="div"
            wheel={{ ...props.wheel, style: props.wheel.style.section }}
          >
            <Flex
              is={'nav'}
              wheel={{ ...props.wheel, style: props.wheel.style.section.menu }}
            >
              <NavigationSegment
                hideActionHeading={false}
                hideActionIcon={false}
                hideSegmentHeading={true}
                maxSegments={1}
                navigationSegment={menuSegments}
                wheel={{
                  ...props.wheel,
                  style: props.wheel.style.section.menu.segment,
                }}
              />
            </Flex>
            <Flex
              is={'div'}
              wheel={{
                ...props.wheel,
                style: props.wheel.style.section.social,
              }}
            >
              <NavigationSegment
                hideActionHeading={true}
                hideActionIcon={false}
                hideSegmentHeading={true}
                maxSegments={1}
                navigationSegment={socialSegments}
                wheel={{
                  ...props.wheel,
                  style: props.wheel.style.section.social.segment,
                }}
              />
            </Flex>
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

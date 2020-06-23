import React, { Fragment } from 'react'
import { NavigationProps } from '../../navigation/model-types'
import {
  NavigationSegment,
  NavigationSegmentWheelStyle,
} from '../../navigation-segment/navigation-segment'
import { NavigationSegmentProps } from '../../navigation-segment/model-types'
import {
  Container,
  CoreSiteMetadata,
  Flex,
  Fluid,
  GlobalsProps,
  Wheel,
  Wrapper,
  GridElementStyle,
  NcssProps,
} from '../../../../src-core'
import { LegalFooter, LegalFooterWheelStyle } from './legal-footer'

export interface NavigationFooterWheelStyle {
  wrapper: GridElementStyle
  container: GridElementStyle
  section: {
    ncss: NcssProps
    menu: {
      ncss: NcssProps
      segment: NavigationSegmentWheelStyle
    }
    social: {
      ncss: NcssProps
      segment: NavigationSegmentWheelStyle
    }
  }
  legalFooter: LegalFooterWheelStyle
}

interface NavigationFooterWheel extends Wheel {
  style: NavigationFooterWheelStyle
}

export interface NavigationFooterWheelProps {
  containerStyle: 'container' | 'fluid'
  globals: GlobalsProps
  navigation: NavigationProps[]
  siteMetaData: CoreSiteMetadata
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

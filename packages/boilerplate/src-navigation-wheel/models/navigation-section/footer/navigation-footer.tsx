import React, { Fragment } from 'react'
import { NavigationModelProps } from '../../navigation/model-types'
import { NavigationSegment } from '../../navigation-segment/navigation-segment'
import { NavigationSegmentModelProps } from '../../navigation-segment/model-props'
import { NavigationSegmentModelNcssTree } from '../../navigation-segment/model-ncss-tree'
import {
  Container,
  CoreSiteMetadata,
  Flex,
  Fluid,
  GlobalsModelProps,
  Wheel,
  Wrapper,
  NcssNode,
} from '../../../../src-core'
import { LegalFooter, LegalFooterNcssTree } from './legal-footer'

export interface NavigationSectionFooterModelNcssTree {
  container: NcssNode
  footer: {
    menu: {
      segment: NavigationSegmentModelNcssTree
    } & NcssNode
    social: {
      segment: NavigationSegmentModelNcssTree
    } & NcssNode
  } & NcssNode
  legalFooter: LegalFooterNcssTree
  wrapper: NcssNode
}

interface NavigationFooterWheel extends Wheel {
  style: NavigationSectionFooterModelNcssTree
}

export interface NavigationFooterProps {
  containerStyle: 'container' | 'fluid'
  globals: GlobalsModelProps
  navigation: NavigationModelProps[]
  siteMetaData: CoreSiteMetadata
  wheel: NavigationFooterWheel
}

const getNavSegments = (
  navigation: NavigationModelProps[],
  variation: string
) => {
  const nav = navigation.find(
    (nav: NavigationModelProps) => nav.variation === variation
  )
  if (!nav || !nav.segments || !Array.isArray(nav.segments)) {
    return [] as NavigationSegmentModelProps[]
  }
  return nav.segments
}

export const NavigationFooter = (props: NavigationFooterProps) => {
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
            wheel={{ ...props.wheel, style: props.wheel.style.footer }}
          >
            <Flex
              is={'nav'}
              wheel={{ ...props.wheel, style: props.wheel.style.footer.menu }}
            >
              <NavigationSegment
                hideActionHeading={false}
                hideActionIcon={false}
                hideSegmentHeading={true}
                maxSegments={1}
                navigationSegment={menuSegments}
                wheel={{
                  ...props.wheel,
                  style: props.wheel.style.footer.menu.segment,
                }}
              />
            </Flex>
            <Flex
              is={'div'}
              wheel={{
                ...props.wheel,
                style: props.wheel.style.footer.social,
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
                  style: props.wheel.style.footer.social.segment,
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

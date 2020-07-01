import React, { Fragment } from 'react'
import {
  Container,
  CoreSiteMetadata,
  Flex,
  Fluid,
  GlobalsModel,
  Wheel,
  Wrapper,
  NcssNode,
} from '@wheelroom/core'
import { NavigationModel } from '../../navigation/model'
import { NavigationSegment } from '../../navigation-segment/navigation-segment'
import { NavigationSegmentModel } from '../../navigation-segment/model'
import { NavigationSegmentNcssTree } from '../../navigation-segment/ncss-tree'
import { LegalFooter, LegalFooterNcssTree } from './legal-footer'

export interface NavigationSectionFooterNcssTree {
  container: NcssNode
  footer: {
    menu: {
      segment: NavigationSegmentNcssTree
    } & NcssNode
    social: {
      segment: NavigationSegmentNcssTree
    } & NcssNode
  } & NcssNode
  legalFooter: LegalFooterNcssTree
  wrapper: NcssNode
}

interface NavigationFooterWheel extends Wheel {
  style: NavigationSectionFooterNcssTree
}

export interface NavigationFooterProps {
  containerStyle: 'container' | 'fluid'
  globals: GlobalsModel
  hideLegalFooter: boolean
  navigation: NavigationModel[]
  siteMetaData: CoreSiteMetadata
  wheel: NavigationFooterWheel
}

const getNavSegments = (navigation: NavigationModel[], variation: string) => {
  const nav = navigation.find(
    (nav: NavigationModel) => nav.variation === variation
  )
  if (!nav || !nav.segments || !Array.isArray(nav.segments)) {
    return [] as NavigationSegmentModel[]
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
        hideLegalFooter={props.hideLegalFooter}
        siteMetadata={props.siteMetaData}
        containerStyle={props.containerStyle}
        wheel={{ ...props.wheel, style: props.wheel.style.legalFooter }}
      />
    </Fragment>
  )
}

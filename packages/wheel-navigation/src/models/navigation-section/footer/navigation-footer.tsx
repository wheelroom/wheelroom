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
import { NavigationSegment } from '../../navigation-segment/navigation-segment'
import { NavigationSegmentModel } from '../../navigation-segment/model'
import { NavigationSegmentNcssTree } from '../../navigation-segment/ncss-tree'

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
            {!props.data.hideMenu && (
              <Flex
                is={'nav'}
                wheel={{ ...props.wheel, style: props.wheel.style.footer.menu }}
              >
                <NavigationSegment
                  headingElementName="h3"
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
            )}
            {!props.data.hideSocial && (
              <Flex
                is={'div'}
                wheel={{
                  ...props.wheel,
                  style: props.wheel.style.footer.social,
                }}
              >
                <NavigationSegment
                  headingElementName="h3"
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

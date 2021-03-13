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
import { NavigationModel } from '../../navigation/model'
import { NavigationSectionSitemapData } from './data'
import { NavigationSegment } from '../../navigation-segment/navigation-segment'
import { NavigationSegmentNcssTree } from '../../navigation-segment/ncss-tree'
import { getNavSegments } from '../../navigation/get-nav-segments'

export interface NavigationSectionSitemapNcssTree {
  container: NcssNode
  sitemap: {
    menu: {
      segment: NavigationSegmentNcssTree
    } & NcssNode
  } & NcssNode
  wrapper: NcssNode
}

interface NavigationSectionSitemapWheel extends Wheel {
  style: NavigationSectionSitemapNcssTree
}

export interface NavigationSitemapProps {
  containerStyle: 'container' | 'fluid'
  data: NavigationSectionSitemapData
  globals: GlobalsModel
  navigation: NavigationModel[]
  siteMetaData: CoreSiteMetadata
  wheel: NavigationSectionSitemapWheel
}

export const NavigationSitemap = (props: NavigationSitemapProps) => {
  if (!Array.isArray(props.navigation) || props.navigation.length < 1) {
    return null
  }

  const ContainerType = props.containerStyle === 'container' ? Container : Fluid
  const menuSegments = getNavSegments(props.navigation, 'menu')

  return (
    <Fragment>
      <Wrapper wheel={{ ...props.wheel, style: props.wheel.style.wrapper }}>
        <ContainerType
          wheel={{ ...props.wheel, style: props.wheel.style.container }}
        >
          <Flex
            is="div"
            wheel={{ ...props.wheel, style: props.wheel.style.sitemap }}
          >
            {!props.data.hideMenu && (
              <Flex
                is={'nav'}
                wheel={{
                  ...props.wheel,
                  style: props.wheel.style.sitemap.menu,
                }}
              >
                <NavigationSegment
                  headingElementName={props.data.headingElementName || 'h3'}
                  hideActionHeading={false}
                  hideActionIcon={false}
                  hideSegmentAbstract={true}
                  hideSegmentHeading={props.data.hideSegmentHeading}
                  maxSegments={props.data.maxSegments || 16}
                  navigationSegment={menuSegments}
                  wheel={{
                    ...props.wheel,
                    style: props.wheel.style.sitemap.menu.segment,
                  }}
                />
              </Flex>
            )}
          </Flex>
        </ContainerType>
      </Wrapper>
    </Fragment>
  )
}

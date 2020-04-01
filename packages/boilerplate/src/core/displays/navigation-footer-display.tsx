/**
 * Component
 *
 * Component type: navigation
 *
 */

import React, { Fragment } from 'react'
import { NavigationSegmentProps } from '../../components/navigation-segment'
import { Box, Container, Flex } from '../elements/grid'
import { getPageSectionInfo } from '../lib/get-page-section-info'
import { PageSectionProps } from '../../components/page-section/page-section'
import { NcssProps } from '../elements/types'
import {
  NavSocialLinks,
  NavSocialLinksStyleTree,
} from '../views/navigation/nav-social-links'
import { NavListStyleTree, NavList } from '../views/navigation/nav-list'
import { NavLegalStyleTree, NavLegal } from '../views/navigation/nav-legal'

export interface NavigationFooterDisplayStyleTree {
  wrapper: NcssProps
  container: NcssProps
  menus: {
    nav: NcssProps
    navList: NavListStyleTree
    socialNavLinks: NavSocialLinksStyleTree
  }
  navLegal: NavLegalStyleTree
}

export const NavigationFooterDisplay = (props: {
  pageSection: PageSectionProps
  styleTree: NavigationFooterDisplayStyleTree
}) => {
  const pageSectionInfo = getPageSectionInfo(props.pageSection)
  if (!pageSectionInfo.hasNavigation) {
    return null
  }

  if (!pageSectionInfo.hasNavigation) {
    return null
  }
  const styleTree = props.styleTree || {}
  const navSegment = props.pageSection.navigation
    .segments[0] as NavigationSegmentProps
  const siteMetadata = props.pageSection.siteMetadata

  return (
    <Fragment>
      <Box is="div" ncss={styleTree.wrapper}>
        <Container ncss={styleTree.container}>
          <Flex is={'nav'} ncss={styleTree.menus.nav}>
            <NavList
              styleTree={styleTree.menus.navList}
              pages={navSegment.pages}
            />
            {pageSectionInfo.hasTopic && (
              <NavSocialLinks
                styleTree={styleTree.menus.socialNavLinks}
                topics={props.pageSection.topics}
              />
            )}
          </Flex>
        </Container>
        <NavLegal siteMetadata={siteMetadata} styleTree={styleTree.navLegal} />
      </Box>
    </Fragment>
  )
}

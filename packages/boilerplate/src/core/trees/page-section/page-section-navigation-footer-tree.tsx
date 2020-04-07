import React, { Fragment } from 'react'
import { NavigationSegmentProps } from '../../../models/navigation-segment'
import { Box, Container, Flex } from '../../elements/grid'
import { getPageSectionInfo } from '../../lib/get-page-section-info'
import { PageSectionProps } from '../../../models/page-section/page-section'
import { NcssProps } from '../../elements/types'
import {
  NavSocialLinks,
  NavSocialLinksStyleTree,
} from '../navigation/nav-social-links'
import { NavListStyleTree, NavList } from '../navigation/nav-list'
import { NavLegalStyleTree, NavLegal } from '../navigation/nav-legal'

export interface PageSectionNavigationFooterTreeStyle {
  wrapper: NcssProps
  container: NcssProps
  menus: {
    nav: NcssProps
    navList: NavListStyleTree
    socialNavLinks: NavSocialLinksStyleTree
  }
  navLegal: NavLegalStyleTree
}

export const PageSectionNavigationFooterTree = (props: {
  pageSection: PageSectionProps
  treeStyle: PageSectionNavigationFooterTreeStyle
}) => {
  const pageSectionInfo = getPageSectionInfo(props.pageSection)
  if (!pageSectionInfo.hasNavigation) {
    return null
  }

  if (!pageSectionInfo.hasNavigation) {
    return null
  }
  const treeStyle = props.treeStyle || {}
  const navSegment = props.pageSection.navigation
    .segments[0] as NavigationSegmentProps
  const siteMetadata = props.pageSection.siteMetadata

  return (
    <Fragment>
      <Box is="div" ncss={treeStyle.wrapper}>
        <Container ncss={treeStyle.container}>
          <Flex is={'nav'} ncss={treeStyle.menus.nav}>
            <NavList
              treeStyle={treeStyle.menus.navList}
              pages={navSegment.pages}
            />
            {pageSectionInfo.hasTopic && (
              <NavSocialLinks
                treeStyle={treeStyle.menus.socialNavLinks}
                topics={props.pageSection.topics}
              />
            )}
          </Flex>
        </Container>
        <NavLegal siteMetadata={siteMetadata} treeStyle={treeStyle.navLegal} />
      </Box>
    </Fragment>
  )
}

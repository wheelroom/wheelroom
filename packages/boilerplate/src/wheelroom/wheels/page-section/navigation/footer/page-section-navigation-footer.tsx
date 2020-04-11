import React, { Fragment } from 'react'
import { NavigationSegmentProps } from '../../../../../models/navigation-segment'
import { Box, Container, Flex } from '../../../elements/grid'
import { getPageSectionInfo } from '../../../../lib/get-page-section-info'
import { PageSectionProps } from '../../../../../models/page-section/page-section'
import { NavSocialLinks } from './nav-social-links'
import { NavList } from '../common/nav-list'
import { NavLegal } from './nav-legal'
import { PageSectionNavigationFooterPreset } from './page-section-navigation-footer-preset'

export const PageSectionNavigationFooter = (props: {
  pageSection: PageSectionProps
  treeStyle: PageSectionNavigationFooterPreset
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
                treeStyle={treeStyle.menus.navSocialLinks}
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

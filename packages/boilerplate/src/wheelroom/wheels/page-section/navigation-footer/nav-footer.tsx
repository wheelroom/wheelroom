import React, { Fragment } from 'react'
import { NavigationSegmentProps } from '../../../../models/navigation-segment'
import { Box, Container, Flex } from '../../elements/grid'
import { getPageSectionInfo } from '../../../lib/get-page-section-info'
import { PageSectionProps } from '../../../../models/page-section/page-section'
import { NavSocialLinks } from './nav-social-links'
import { NavList } from './nav-list'
import { NavLegal } from './nav-legal'
import { NavFooterPreset } from './presets/nav-footer-preset'
import { Wheel } from '../../types'

interface PageSectionNavigationFooterWheel extends Wheel {
  style: NavFooterPreset
}

export const PageSectionNavigationFooter = (props: {
  pageSection: PageSectionProps
  wheel: PageSectionNavigationFooterWheel
}) => {
  const pageSectionInfo = getPageSectionInfo(props.pageSection)
  if (!pageSectionInfo.hasNavigation) {
    return null
  }

  if (!pageSectionInfo.hasNavigation) {
    return null
  }
  const navSegment = props.pageSection.navigation
    .segments[0] as NavigationSegmentProps
  const siteMetadata = props.pageSection.siteMetadata

  return (
    <Fragment>
      <Box is="div" ncss={props.wheel.style.wrapper.ncss} wheel={props.wheel}>
        <Container ncss={props.wheel.style.container.ncss} wheel={props.wheel}>
          <Flex
            is={'nav'}
            ncss={props.wheel.style.menus.nav.ncss}
            wheel={props.wheel}
          >
            <NavList
              wheel={{ ...props.wheel, style: props.wheel.style.menus.navList }}
              pages={navSegment.pages}
            />
            {pageSectionInfo.hasTopic && (
              <NavSocialLinks
                wheel={{
                  ...props.wheel,
                  style: props.wheel.style.menus.navSocialLinks,
                }}
                topics={props.pageSection.topics}
              />
            )}
          </Flex>
        </Container>
        <NavLegal
          siteMetadata={siteMetadata}
          wheel={{ ...props.wheel, style: props.wheel.style.navLegal }}
        />
      </Box>
    </Fragment>
  )
}

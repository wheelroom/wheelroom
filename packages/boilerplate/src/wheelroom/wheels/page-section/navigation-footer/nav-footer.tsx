import React, { Fragment } from 'react'
import { NavigationSegmentProps } from '../../../../models/navigation-segment'
import { Wrapper, Container, Flex } from '../../elements/grid'
import { getPageSectionInfo } from '../../../lib/get-page-section-info'
import { PageSectionProps } from '../../../../models/page-section/page-section'
import { NavFooterSocialLinks } from './nav-footer-social-links'
import { NavFooterList } from './nav-footer-list'
import { Legal } from './legal'
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
      <Wrapper wheel={{ ...props.wheel, style: props.wheel.style.wrapper }}>
        <Container
          wheel={{ ...props.wheel, style: props.wheel.style.container }}
        >
          <Flex
            is={'nav'}
            ncss={props.wheel.style.navFooter}
            wheel={props.wheel}
          >
            <NavFooterList
              wheel={{
                ...props.wheel,
                style: props.wheel.style.navFooter.list,
              }}
              pages={navSegment.pages}
            />
            {pageSectionInfo.hasTopic && (
              <NavFooterSocialLinks
                wheel={{
                  ...props.wheel,
                  style: props.wheel.style.navFooter.navSocialLinks,
                }}
                topics={props.pageSection.topics}
              />
            )}
          </Flex>
        </Container>
        <Legal
          siteMetadata={siteMetadata}
          wheel={{ ...props.wheel, style: props.wheel.style.legal }}
        />
      </Wrapper>
    </Fragment>
  )
}

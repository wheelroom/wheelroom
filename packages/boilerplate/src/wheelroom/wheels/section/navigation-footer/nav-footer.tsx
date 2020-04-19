import React, { Fragment } from 'react'
import { NavigationSegmentProps } from '../../../../models/navigation-segment'
import { Wrapper, Container, Flex } from '../../element/grid'
import { getPageSectionInfo } from '../../../lib/get-page-section-info'
import { PageSectionProps } from '../../../../models/page-section/page-section'
import { NavFooterSocialList } from './nav-footer-social-list'
import { NavFooterList } from './nav-footer-list'
import { Legal } from './legal'
import { NavFooterWheelStyle } from './presets/nav-footer-preset'
import { Wheel } from '../../types'

interface PageSectionNavigationFooterWheel extends Wheel {
  style: NavFooterWheelStyle
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
            wheel={{ ...props.wheel, style: props.wheel.style.navFooter }}
          >
            <NavFooterList
              wheel={{
                ...props.wheel,
                style: props.wheel.style.navFooter.list,
              }}
              pages={navSegment.pages}
            />
            {pageSectionInfo.hasTopic && (
              <NavFooterSocialList
                wheel={{
                  ...props.wheel,
                  style: props.wheel.style.navFooter.socialList,
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

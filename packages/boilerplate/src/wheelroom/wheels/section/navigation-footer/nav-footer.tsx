import React, { Fragment } from 'react'
import { Container, Flex, Fluid, Wrapper } from '../../element/grid'
import { NavFooterSocialList } from './nav-footer-social-list'
import { NavFooterList } from './nav-footer-list'
import { LegalFooter } from './legal-footer'
import { NavFooterWheelStyle } from './presets/nav-footer-preset'
import { Wheel } from '../../types'
import { NavigationSectionProps } from '../../../../models/navigation-section/navigation-section'

interface PageSectionNavigationFooterWheel extends Wheel {
  style: NavFooterWheelStyle
}

export const PageSectionNavigationFooter = (props: {
  pageSection: NavigationSectionProps
  wheel: PageSectionNavigationFooterWheel
  containerStyle: 'container' | 'fluid'
}) => {
  const navigation = props.pageSection.navigation || []
  if (!Array.isArray(navigation) || navigation.length < 1) {
    return null
  }
  const segments = navigation[0].segments
  if (!Array.isArray(segments) || segments.length < 0) {
    return null
  }

  const navSegment = segments[0]
  const siteMetadata = props.pageSection.siteMetadata

  const ContainerType = props.containerStyle === 'container' ? Container : Fluid

  return (
    <Fragment>
      <Wrapper wheel={{ ...props.wheel, style: props.wheel.style.wrapper }}>
        <ContainerType
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
              actions={navSegment.actions}
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
        </ContainerType>
      </Wrapper>
      <LegalFooter
        siteMetadata={siteMetadata}
        containerStyle={props.containerStyle}
        wheel={{ ...props.wheel, style: props.wheel.style.legalFooter }}
      />
    </Fragment>
  )
}

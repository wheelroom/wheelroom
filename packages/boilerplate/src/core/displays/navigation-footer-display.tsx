/**
 * Component
 *
 * Component type: navigation
 *
 */

import React, { Fragment } from 'react'
import { TopicProps } from '../../components/topic'
import { NavigationSegmentProps } from '../../components/navigation-segment'
import { Box, Container, Flex } from '../elements/grid'
import { ALink } from '../elements/a-link'
import { Any } from '../elements/any'
import { NavLinks, NavLinksStyleTree } from '../views/navigation/nav-links'
import { List } from '../elements/list'
import { Action } from '../../components/action'
import { getPageSectionInfo } from '../lib/get-page-section-info'
import { PageSectionProps } from '../../components/page-section/page-section'
import { FeatherIcon } from '../elements/icon'
import { NcssProps } from '../elements/types'

export interface NavigationFooterDisplayStyleTree {
  wrapper: NcssProps
  container: NcssProps

  menus: {
    nav: NcssProps
    pages: {
      list: NcssProps
      listItem: NavLinksStyleTree
    }
    social: {
      list: NcssProps
      action: NcssProps
      icon: NcssProps
    }
  }
  legal: {
    container: NcssProps
    innerContainer: NcssProps
    text: NcssProps
    link: NcssProps
  }
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
            <List is="ul" ncss={styleTree.menus.pages.list}>
              <NavLinks
                styleTree={styleTree.menus.pages.listItem}
                pages={navSegment.pages}
              />
            </List>
            {pageSectionInfo.hasTopic && (
              <List is="ul" ncss={styleTree.menus.social.list}>
                {props.pageSection.topics.map(
                  (topic: TopicProps, index: number) => (
                    <List is={'li'} key={index}>
                      <Action
                        {...topic.actions[0]}
                        styleTree={styleTree.menus.social.action}
                      >
                        <FeatherIcon
                          ncss={styleTree.menus.social.icon}
                          icon={topic.icon as string}
                        />
                      </Action>
                    </List>
                  )
                )}
              </List>
            )}
          </Flex>
        </Container>
        <Container ncss={styleTree.legal.container}>
          <Flex ncss={styleTree.legal.innerContainer}>
            <Any is="span" ncss={styleTree.legal.text}>
              <ALink ncss={styleTree.legal.link} href={siteMetadata.legal.url}>
                {siteMetadata.legal.description}
              </ALink>
              <sup>
                <small>{` ` + siteMetadata.legal.version}</small>
              </sup>
            </Any>
          </Flex>
        </Container>
      </Box>
    </Fragment>
  )
}

/**
 * Component
 *
 * Component type: navigation
 *
 */

import React, { Fragment } from 'react'
import { TopicProps } from '../../topic'
import { NavigationSegmentProps } from '../../navigation-segment'
import { Box, Container, Flex } from '../../../core/elements/grid'
import { ALink } from '../../../core/elements/a-link'
import { Any } from '../../../core/elements/any'
import { NavLinks } from '../../navigation/nav-links'
import { List } from '../../../core/elements/list'
import { IconMap } from '../../../svg/feather/iconMap'
import { Action } from '../../action'
import {
  commonNavigationStyle,
  navigationFooterStyle,
  navStyle,
} from './navigation-styles'
import { getPageSectionInfo } from '../../../lib/get-page-section-info'
import { PageSectionProps } from '../page-section'

export const listStyle = {
  label: 'nav-list',
  display: 'flex',
  flexDirection: 'row',
  listStyle: 'none',
  flexWrap: 'wrap',
  mb: 0,
  mt: 0,
  pl: 0,
}

const defaultIconStyle = {
  label: 'icon',
  width: '20px',
  height: '20px',
  color: 'text',
  strokeWidth: '0',
  fill: 'metal',
  ':hover': {
    fill: 'text',
  },
}

const Icon = (props: { name: string }) => {
  if (props.name && props.name in IconMap) {
    const RenderIcon = IconMap[props.name]
    return <RenderIcon ncss={{ ...defaultIconStyle }} />
  }
  return null
}

export const NavigationFooterDisplay = (props: {
  pageSection: PageSectionProps
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
      <Box
        is="div"
        ncss={{
          label: 'wrapper',
          bg: 'bg',
        }}
      >
        <Container
          ncss={{
            borderTop: '1px solid transparent',
            borderColor: 'border',
          }}
        >
          <Flex
            is={'nav'}
            ncss={{
              ...navStyle,
              h: '84px',
              justifyContent: ['space-evenly', 'space-between'],
              flexDirection: ['column', 'row'],
              alignItems: 'center',
            }}
          >
            <List is="ul" ncss={listStyle}>
              <NavLinks
                linkStyle={navigationFooterStyle}
                pages={navSegment.pages}
              />
            </List>
            {pageSectionInfo.hasTopic && (
              <List is="ul" ncss={{ ...listStyle }}>
                {props.pageSection.topics.map(
                  (topic: TopicProps, index: number) => (
                    <List is={'li'} key={index}>
                      <Action
                        {...topic.actions[0]}
                        ncss={{
                          display: 'inline-flex',
                          p: 1,
                        }}
                      >
                        <Icon name={topic.icon} />
                      </Action>
                    </List>
                  )
                )}
              </List>
            )}
          </Flex>
        </Container>
        <Container
          ncss={{
            borderTop: '1px solid transparent',
            borderColor: 'border',
          }}
        >
          <Flex
            ncss={{
              label: 'legal',
              h: '48px',
              w: 1,
              alignItems: 'center',
              justifyContent: ['center', 'normal'],
            }}
          >
            <Any is="span" ncss={{ fontFamily: 'text', color: 'metal' }}>
              <ALink
                ncss={{
                  ...commonNavigationStyle,
                  display: 'inline-flex',
                  color: 'metal',
                }}
                href={siteMetadata.legal.url}
              >
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

/**
 * Component
 *
 * Component type: navigation
 *
 */

import React, { Fragment } from 'react'
import { NavigationProps } from './navigation'
import { TopicProps } from '../topic'
import { GlobalsProps } from '../globals'
import { SiteMetadata } from '../../page-template'
import { NavigationSegmentProps } from '../navigation-segment'
import { Box, Container, Flex } from '../../core/elements/grid'
import { ALink } from '../../core/elements/a-link'
import { Any } from '../../core/elements/any'
import { NavLinks } from './nav-links'
import { List } from '../../core/elements/list'
import { IconMap } from '../../svg/feather/iconMap'
import { Action } from '../action'
import {
  commonNavigationStyle,
  navigationFooterStyle,
  navStyle,
} from './navigation-styles'

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

interface NavigationFooterProps extends NavigationProps {
  /** Topics contain social icons and actions */
  topics: TopicProps[]
  /** Site metadata defined in gatsby-config */
  siteMetadata: SiteMetadata
  /** Site globals from CMS */
  globals: GlobalsProps
}

export const NavigationFooter = (props: NavigationFooterProps) => {
  const navSegment = props.segments[0] as NavigationSegmentProps
  const social = props.topics.map((topic: TopicProps) => (
    <List
      is={'li'}
      ncss={{ ml: 1, ':first-child': { ml: 0 } }}
      key={topic.heading}
    >
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
  ))
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
            <List is="ul" ncss={{ ...listStyle }}>
              {social}
            </List>
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
                href={props.siteMetadata.legal.url}
              >
                {props.siteMetadata.legal.description}
              </ALink>
              <sup>
                <small>{` ` + props.siteMetadata.legal.version}</small>
              </sup>
            </Any>
          </Flex>
        </Container>
      </Box>
    </Fragment>
  )
}

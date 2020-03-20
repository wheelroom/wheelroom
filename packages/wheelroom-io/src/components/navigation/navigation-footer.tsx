/**
 * Component
 *
 * Component type: navigation
 *
 */

import React, { Fragment } from 'react'
import { NavigationProps } from './navigation'
import { TopicProps } from '../topic/topic'
import { GlobalsProps } from '../globals/globals'
import { SiteMetadata } from '../../page-template'
import {
  Box,
  Container,
  ContainerMaxWidth,
  Flex,
} from '../../core/elements/grid'
import { commonParagraphStyle } from '../../core/styles/paragraph'
import { ALink } from '../../core/elements/a-link'
import { Any } from '../../core/elements/any'
import { NavLinks } from './nav-links'
import { List } from '../../core/elements/list'

export const metaStyle = {
  label: 'meta',
}

export const listStyle = {
  label: 'nav-list',
  display: 'flex',
  flex: '1',
  flexDirection: 'row',
  listStyle: 'none',
  flexWrap: 'wrap',
  mb: 0,
  mt: 0,
  pl: 0,
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
  return (
    <Fragment>
      <Box
        is="div"
        ncss={{
          label: 'wrapper',
          bg: 'bg',
        }}
      >
        <Container>
            <Flex ncss={{ ...metaStyle }}>{props.topics[0].heading}</Flex>
        </Container>
        <Container
          ncss={{
            borderTop: '1px solid transparent',
            borderColor: 'border',
          }}
        >
          <List is="ul" ncss={{ ...listStyle }}>
            <NavLinks pages={navSegment.pages} />
          </List>
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
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Any
              is="span"
              ncss={{ ...commonParagraphStyle, m: 0, color: 'metal' }}
            >
              {props.siteMetadata.siteInfo}
            </Any>
            <Any is="span" ncss={{ ...commonParagraphStyle, m: 0 }}>
              <ALink
                ncss={{ fontWeight: 5, textDecoration: 'none' }}
                href="https://github.com/wheelroom/wheelroom-io"
              >
                {props.globals.siteHeading + ` `}
                <sup>
                  <small>{props.siteMetadata.siteVersion}</small>
                </sup>
              </ALink>
            </Any>
          </Flex>
        </Container>
      </Box>
    </Fragment>
  )
}

/**
 * Component variation
 *
 * Component type: footerSection
 * Variation: Single
 *
 */

import React from 'react'
import { paragraphStyle } from '../../styles/paragraph'
import { simpleLinkStyle } from '../../styles/simple-link'
import { Box, Container, Flex } from '../../views/core-elements/grid'
import { Paragraph } from '../../views/core-elements/paragraph'
import { List } from '../../views/core-elements/list'
import { NavLinks } from '../navigation/nav-links'
import { FooterSectionProps } from './footer-section'
import { ALink } from '../../views/core-elements/a-link'

const wrapperStyle = {
  label: 'Wrapper',
  color: 'text',
  bg: 'bg',
  borderTop: '1px solid',
  borderColor: 'border',
}

const containerStyle = {
  label: 'Container',
  fontFamily: 'text',
  color: 'text',
  height: '100%',
  maxWidth: '1280px',
  py: 4,
  justifyContent: 'space-between',
}

const legalStyle = {
  label: 'Legal',
  display: 'flex',
  flex: '1',
}

const listStyle = {
  label: 'NavItems',
  display: 'flex',
  justifyContent: 'flex-end',
  flex: '1',
  flexDirection: 'row',
  listStyle: 'none',
  flexWrap: 'wrap',
  mb: 0,
  mt: 0,
  pl: 0,
}

const addressStyle = { ...paragraphStyle }

export const FooterSectionSingleVar = (props: FooterSectionProps) => {
  return (
    <Box is="div" ncss={wrapperStyle}>
      <Container ncss={containerStyle}>
        <Flex is="div">
          <Box>
            <Paragraph ncss={addressStyle}>
              {props.globals.addressLine1}
              <br />
              {props.globals.addressLine2}
              <br />
              {props.globals.phoneNumber}
              <br />
              {props.globals.emailAddress}
            </Paragraph>
          </Box>
        </Flex>
        <Flex is="div">
          <List is="ul">
            <NavLinks pages={props.navigation.pages} />
          </List>
        </Flex>
      </Container>
      <Container ncss={containerStyle}>
        <Flex>
          Select Language
          <ALink ncss={{ ...simpleLinkStyle, mx: 2 }} href="/en">
            English
          </ALink>
        </Flex>
        <Flex is="div" ncss={legalStyle}>
          <List is="ul" ncss={listStyle}>
            <List is="li">
              <ALink ncss={{ ...simpleLinkStyle, mr: 4 }} href="/privacy">
                Privacy & Cookies
              </ALink>
            </List>
            <List is="li">
              <ALink ncss={{ ...simpleLinkStyle, mr: 4 }} href="/sitemap">
                Sitemap
              </ALink>
            </List>
          </List>
          <Box ncss={{ color: 'metal' }}><small>Wheelroom v1.0.0</small></Box>
        </Flex>
      </Container>
    </Box>
  )
}

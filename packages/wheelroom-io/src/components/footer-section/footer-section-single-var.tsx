/**
 * Component variation
 *
 * Component type: footerSection
 * Variation: Single
 *
 */

import React from 'react'
import { paragraph1Style } from '../../styles/paragraph'
import { Box, Container, Flex } from '../../views/core-elements/grid'
import { Paragraph } from '../../views/core-elements/paragraph'
import { List } from '../../views/core-elements/list'
import { NavLinks } from '../navigation/nav-links'
import { FooterSectionProps } from './footer-section'

const wrapperStyle = {
  label: 'Wrapper',
  color: 'text',
  bg: 'bg',
  borderTop: '1px solid',
  borderColor: 'border',
}

const containerStyle = {
  label: 'Container',
  height: '100%',
  justifyContent: 'space-between',
}

const addressStyle = { ...paragraph1Style }

export const FooterSectionSingleVar = (props: FooterSectionProps) => {
  return (
    <Box is="div" ncss={wrapperStyle}>
      <Container ncss={containerStyle}>
        <Flex is="div">
          <List is="ul">
            <NavLinks pages={props.navigation.pages} />
          </List>
        </Flex>
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
      </Container>
    </Box>
  )
}

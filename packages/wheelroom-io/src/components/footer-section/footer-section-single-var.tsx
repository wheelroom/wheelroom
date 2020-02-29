/**
 * Component variation
 *
 * Component type: footerSection
 * Variation: Single
 *
 */

import React from 'react'
import { getAllPaddingObject } from '../../styles/global-padding'
import { paragraph1Style } from '../../styles/paragraph'
import { Box, Flex } from '../../views/core-elements/grid'
import { Paragraph } from '../../views/core-elements/paragraph'
import { NavLinks } from '../navigation/nav-links'
import { FooterSectionProps } from './footer-section'

const addressStyle = { ...paragraph1Style, color: 'white', pb: 0 }

export const FooterSectionSingleVar = (props: FooterSectionProps) => {
  return (
    <Flex
      ncss={{
        bg: 'caviar',
        flexDirection: 'row',
        mb: 7,
        w: 1,
      }}
    >
      <Flex
        ncss={{
          alignItems: ['center', 'center', 'flex-start'],
          flexDirection: 'column',
          ...getAllPaddingObject('textBox'),
          w: [1, 1, 1 / 2],
        }}
      >
        <NavLinks pages={props.navigation.pages} />
      </Flex>
      <Flex
        ncss={{
          flexDirection: 'column',
          w: [1, 1, 1 / 2],
        }}
      >
        <Flex
          ncss={{
            ...getAllPaddingObject('textBox'),
            alignItems: ['center', 'center', 'flex-start'],
            flexDirection: 'column',
          }}
        >
          <Paragraph ncss={addressStyle}>
            {props.globals.addressLine1}
          </Paragraph>
          <Paragraph ncss={addressStyle}>
            {props.globals.addressLine2}
          </Paragraph>
          <Box ncss={{ p: 3 }} />
          <Paragraph ncss={addressStyle}>{props.globals.phoneNumber}</Paragraph>
          <Paragraph ncss={addressStyle}>
            {props.globals.emailAddress}
          </Paragraph>
        </Flex>
      </Flex>
    </Flex>
  )
}

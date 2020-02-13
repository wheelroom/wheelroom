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
import { Text } from '../../views/core-elements/text'
import { NavLinks } from '../navigation/nav-links'
import { FooterSectionProps } from './footer-section'

const addressStyle = { ...paragraph1Style, color: 'white', pb: 0 }

export const FooterSectionSingleVar = (props: FooterSectionProps) => {
  return (
    <Flex
      ncss={{
        bg: 'darkGrey',
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
          <Text ncss={addressStyle}>{props.globals.addressLine1}</Text>
          <Text ncss={addressStyle}>{props.globals.addressLine2}</Text>
          <Box ncss={{ p: 3 }} />
          <Text ncss={addressStyle}>{props.globals.phoneNumber}</Text>
          <Text ncss={addressStyle}>{props.globals.emailAddress}</Text>
        </Flex>
      </Flex>
    </Flex>
  )
}

/**
 * Component variation
 *
 * Component type: listSection
 * Variation: Grote tegels
 *
 */

import React, { Fragment } from 'react'
import {
  getAllPaddingObject,
  getSinglePadding,
} from '../../styles/global-padding'
import { heading3Style } from '../../styles/heading'
import { paragraph2Style } from '../../styles/paragraph'
import { GLink } from '../../views/core-elements/g-link'
import { Box, Flex } from '../../views/core-elements/grid'
import { Heading } from '../../views/core-elements/heading'
import { Text } from '../../views/core-elements/text'
import { Image } from '../../views/image/image'
import { ListSectionProps } from './list-section'
import { ListSectionHeading } from './list-section-heading'
import { ListItemProps } from '../list-item'

const LargeListItems = (props: { items: ListItemProps[] }) => {
  const itemsList = props.items.map((item: ListItemProps, index: number) => {
    const image = item.image || item.link.image
    const heading = item.heading || item.link.heading
    const infoText =
      (item.abstract && item.abstract.abstract) ||
      (item.link.abstract && item.link.abstract.abstract)

    return (
      <GLink
        key={index}
        to={item.link.path}
        ncss={{
          bg: 'darkGrey',
          display: 'block',
          mb: 1,
          overflow: 'hidden',
          position: 'relative',
          w: 1,
        }}
      >
        <Flex>
          <Box ncss={{ w: [1, 2 / 3], ...getAllPaddingObject('textBox') }}>
            <Heading
              ncss={{
                ...heading3Style,
                color: 'white',
              }}
            >
              {heading}
            </Heading>
            <Text ncss={{ ...paragraph2Style, color: 'white' }}>
              {infoText}
            </Text>
          </Box>
          <Box ncss={{ w: [1, 1 / 3] }}>
            <Image image={image} height={[1, 2, 2, 2]} />
          </Box>
        </Flex>
      </GLink>
    )
  })
  return <Fragment>{itemsList}</Fragment>
}

export const ListSectionGroteTegelsVar = (props: ListSectionProps) => {
  return (
    <Box ncss={{ px: getSinglePadding('section', 'left') }}>
      <ListSectionHeading heading={props.heading} />
      <LargeListItems items={props.items} />
    </Box>
  )
}

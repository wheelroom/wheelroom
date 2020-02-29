/**
 * Component variation
 *
 * Component type: listSection
 * Variation: Kleine tegels
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
import { H3 } from '../../views/core-elements/heading'
import { Text } from '../../views/core-elements/text'
import { Image } from '../../views/image/image'
import { ListSectionProps } from './list-section'
import { ListSectionHeading } from './list-section-heading'
import { ListItemProps } from '../list-item'

const LargeListItems = (props: { items: ListItemProps[] }) => {
  const itemsList = props.items.map((item: ListItemProps, index: number) => {
    const image = item.image || (item.link && item.link.image)
    const heading = item.heading || (item.link && item.link.heading)
    const abstract =
      (item.abstract && item.abstract.abstract) ||
      (item.link && item.link.abstract && item.link.abstract.abstract)

    return (
      <GLink
        key={index}
        to={item.link && item.link.path}
        ncss={{
          display: 'block',
          overflow: 'hidden',
          position: 'relative',
          w: [1, 1 / 2, 1 / 3, 1 / 4],
        }}
      >
        <Box ncss={{ m: 1, bg: 'metal' }}>
          <Image image={image} height={[2, 2, 3, 3]} overlay="gradient" />
          <Box
            ncss={{
              ...getAllPaddingObject('textBox'),
              bottom: 0,
              left: 0,
              position: 'absolute',
              w: 1,
            }}
          >
            <H3
              ncss={{
                ...heading3Style,
                color: 'white',
              }}
            >
              {heading}
            </H3>
            <Text ncss={{ ...paragraph2Style, color: 'white' }}>
              {abstract}
            </Text>
          </Box>
        </Box>
      </GLink>
    )
  })
  return <Fragment>{itemsList}</Fragment>
}

export const ListSectionKleineTegelsVar = (props: ListSectionProps) => {
  return (
    <Fragment>
      <Flex ncss={{ px: getSinglePadding('section', 'left') }}>
        <ListSectionHeading heading={props.heading} />
      </Flex>
      <Flex ncss={{ px: getSinglePadding('section', 'left') }}>
        <LargeListItems items={props.items} />
      </Flex>
    </Fragment>
  )
}

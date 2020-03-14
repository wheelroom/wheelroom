/**
 * Component variation
 *
 * Component type: listSection
 * Variation: Large items
 *
 */

import React, { Fragment } from 'react'
import { heading3Style } from '../../styles/heading'
import { paragraphStyle } from '../../styles/paragraph'
import { GLink } from '../../views/core-elements/g-link'
import { Box, Flex } from '../../views/core-elements/grid'
import { H3 } from '../../views/core-elements/heading'
import { Paragraph } from '../../views/core-elements/paragraph'
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
          color: 'text',
          bg: 'metal',
          overflow: 'hidden',
          position: 'relative',
          w: 1,
        }}
      >
        <Flex>
          <Box ncss={{ w: [1, 2 / 3] }}>
            <H3
              ncss={{
                ...heading3Style,
                color: 'text',
              }}
            >
              {heading}
            </H3>
            <Paragraph ncss={{ ...paragraphStyle, color: 'text' }}>
              {abstract}
            </Paragraph>
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

export const ListSectionLargeItemsVar = (props: ListSectionProps) => {
  return (
    <Box is="div" ncss={{ label: 'Wrapper', bg: 'bg' }}>
      <ListSectionHeading heading={props.heading} />
      <LargeListItems items={props.items} />
    </Box>
  )
}

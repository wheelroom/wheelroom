/**
 * Component variation
 *
 * Component type: listSection
 * Variation: Large items
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
import { PageProps } from '../page'
import { ListSectionProps } from './list-section'
import { ListSectionHeading } from './list-section-heading'

const LargeListItems = (props: { items: PageProps[] }) => {
  const itemsList = props.items.map((item: PageProps, index: number) => {
    const image = item.listItemImage || item.pageImage
    const heading = item.listItemHeading || item.pageHeading
    const infoText =
      (item.listItemInfoText && item.listItemInfoText.listItemInfoText) ||
      (item.pageInfoText && item.pageInfoText.pageInfoText)

    return (
      <GLink
        key={index}
        to={item.path}
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
              children={heading}
              ncss={{
                ...heading3Style,
                color: 'white',
              }}
            />
            <Text
              ncss={{ ...paragraph2Style, color: 'white' }}
              children={infoText}
            />
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
    <Box ncss={{ px: getSinglePadding('section', 'left') }}>
      <ListSectionHeading heading={props.heading} />
      <LargeListItems items={props.listItems} />
    </Box>
  )
}

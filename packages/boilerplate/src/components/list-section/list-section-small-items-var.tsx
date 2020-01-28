/**
 * Component variation
 *
 * Component type: listSection
 * Variation: Small items
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
          display: 'block',
          overflow: 'hidden',
          position: 'relative',
          w: [1, 1 / 2, 1 / 3, 1 / 4],
        }}
      >
        <Box ncss={{ m: 1, bg: 'darkGrey' }}>
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
        </Box>
      </GLink>
    )
  })
  return <Fragment>{itemsList}</Fragment>
}

export const ListSectionSmallItemsVar = (props: ListSectionProps) => {
  return (
    <Fragment>
      <Flex ncss={{ px: getSinglePadding('section', 'left') }}>
        <ListSectionHeading heading={props.heading} />
      </Flex>
      <Flex ncss={{ px: getSinglePadding('section', 'left') }}>
        <LargeListItems items={props.listItems} />
      </Flex>
    </Fragment>
  )
}

/* eslint-disable react/display-name */
/**
 * Component variation
 *
 * Component type: textSection
 * Variation: Single
 *
 */

import {
  documentToReactComponents,
  Options,
} from '@contentful/rich-text-react-renderer'
import { BLOCKS, INLINES, Document, MARKS } from '@contentful/rich-text-types'
import React, { Fragment } from 'react'
import { enlargingImageStyle } from '../../styles/enlarging-image'
import {
  getAllPaddingObject,
  getSinglePadding,
} from '../../styles/global-padding'
import {
  heading1Style,
  heading2Style,
  heading3Style,
  heading4Style,
  heading5Style,
  heading6Style,
} from '../../styles/heading'
import { paragraph1Style } from '../../styles/paragraph'
import { ALink } from '../../views/core-elements/a-link'
import { GLink } from '../../views/core-elements/g-link'
import { Box, Flex } from '../../views/core-elements/grid'
import { H1, H2, H3, H4, H5, H6 } from '../../views/core-elements/heading'
import { Text, Span, Ul, Li } from '../../views/core-elements/text'
import { FluidImage, Image } from '../../views/image/image'
import { TextSectionProps } from './text-section'

type Node = any
type Children = any

const ImageBox = (props: { image: FluidImage }) => (
  <Fragment>
    <Box
      ncss={{
        h: [2, 3, 4, 5],
        overflow: 'hidden',
        ...getAllPaddingObject('image'),
        w: 1,
      }}
    >
      <Image
        image={props.image}
        objectFit="cover"
        height="100%"
        {...enlargingImageStyle}
      />
    </Box>
  </Fragment>
)

export const TextSectionSingleVar = (props: TextSectionProps) => {
  const textSectionProps = props
  const regularLinkStyle = {
    '&:hover': {
      textDecoration: 'underline',
    },
    '&:focus': {
      color: 'amber',
      textDecoration: 'underline',
    },
    color: 'azure',
    textDecoration: 'none',
  }
  const options = {
    renderText: text => {
      return text
        .split('\n')
        .reduce((children: Children, textSegment, index) => {
          return [...children, index > 0 && <br key={index} />, textSegment]
        }, [])
    },
    renderMark: {
      [MARKS.BOLD]: text => (
        <Span
          ncss={{
            fontWeight: 7,
          }}
        >
          {text}
        </Span>
      ),
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (_node: Node, children: Children) => {
        return <Text ncss={{ ...paragraph1Style }}>{children}</Text>
      },
      [BLOCKS.UL_LIST]: (_node: Node, children: Children) => {
        return <Ul ncss={{ ...paragraph1Style }}>{children}</Ul>
      },
      [BLOCKS.LIST_ITEM]: (_node: Node, children: Children) => {
        return (
          <Li ncss={{ ...paragraph1Style, pb: 0, p: { pb: 0 } }}>{children}</Li>
        )
      },
      [INLINES.HYPERLINK]: (node: Node, children: Children) => {
        const uri = node.data.uri
        return (
          <ALink href={uri} ncss={regularLinkStyle}>
            {children}
          </ALink>
        )
      },
      [INLINES.ENTRY_HYPERLINK]: (node: Node, children: Children) => {
        const internalPath =
          node.data.target.fields &&
          node.data.target.fields.path[textSectionProps.locale]
        return (
          <GLink ncss={regularLinkStyle} to={internalPath}>
            {children}
          </GLink>
        )
      },
      [BLOCKS.HEADING_1]: (_node: Node, children: Children) => (
        <H1 ncss={{ ...heading1Style, w: 1 }}>{children}</H1>
      ),
      [BLOCKS.HEADING_2]: (_node: Node, children: Children) => (
        <H2 ncss={{ ...heading2Style, w: 1 }}>{children}</H2>
      ),
      [BLOCKS.HEADING_3]: (_node: Node, children: Children) => (
        <H3 ncss={{ ...heading3Style, w: 1 }}>{children}</H3>
      ),
      [BLOCKS.HEADING_4]: (_node: Node, children: Children) => (
        <H4 ncss={{ ...heading4Style, w: 1 }}>{children}</H4>
      ),
      [BLOCKS.HEADING_5]: (_node: Node, children: Children) => (
        <H5 ncss={{ ...heading5Style, w: 1 }}>{children}</H5>
      ),
      [BLOCKS.HEADING_6]: (_node: Node, children: Children) => (
        <H6 ncss={{ ...heading6Style, w: 1 }}>{children}</H6>
      ),
      [BLOCKS.EMBEDDED_ASSET]: (node: Node) => {
        const fields = node.data.target.fields
        const image = {
          description: fields.title[textSectionProps.locale],
          fluid: {
            src: fields.file[textSectionProps.locale].url + '?w=1024&q=50',
          },
        } as FluidImage
        return <ImageBox image={image} />
      },
    },
  } as Options

  return (
    <Flex
      ncss={{
        pl: getSinglePadding('section', 'left'),
        pr: getSinglePadding('section', 'right'),
      }}
    >
      {documentToReactComponents(
        (props.text.json as unknown) as Document,
        options
      )}
    </Flex>
  )
}

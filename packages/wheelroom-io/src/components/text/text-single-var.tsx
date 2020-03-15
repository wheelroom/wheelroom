/* eslint-disable react/display-name */
/**
 * Component variation
 *
 * Component type: text
 * Variation: Single
 *
 */

import React from 'react'
import { TextProps } from './text'
import { FluidImage } from '../../core/elements/types'
import { Image } from '../../core/elements/image'
import { MARKS, BLOCKS, INLINES, Document } from '@contentful/rich-text-types'
import { Any } from '../../core/elements/any'
import { Paragraph } from '../../core/elements/paragraph'
import { paragraphStyle } from '../../core/styles/paragraph'
import { List } from '../../core/elements/list'
import { ALink } from '../../core/elements/a-link'
import { GLink } from '../../core/elements/g-link'
import { H1, H2, H3, H4, H5, H6 } from '../../core/elements/heading'
import {
  heading1Style,
  heading2Style,
  heading3Style,
  heading4Style,
  heading5Style,
  heading6Style,
} from '../../core/styles/heading'
import { getLocalizedValue } from './get-localized-value'
import { Box, Container, Flex } from '../../core/elements/grid'
import {
  documentToReactComponents,
  Options,
} from '@contentful/rich-text-react-renderer'

const simpleLinkStyle = {
  color: 'azure',
  '&:hover': {
    textDecoration: 'underline',
  },
  '&:visited': {},
  cursor: 'pointer',
  textDecoration: 'none',
}

type Node = any
type Children = any

const ImageBox = (props: { image: FluidImage }) => (
  <Image caption image={props.image} my={[4, 5]} />
)

export const TextSingleVar = (props: TextProps) => {
  const textProps = props
  const wrapperStyle = {
    label: 'Wrapper',
    bg: 'bg',
  }

  const containerStyle = {
    label: 'Container',
    height: '100%',
    justifyContent: 'space-between',
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
        <Any
          is="b"
          ncss={{
            fontWeight: 5,
          }}
        >
          {text}
        </Any>
      ),
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (_node: Node, children: Children) => {
        return <Paragraph ncss={{ ...paragraphStyle }}>{children}</Paragraph>
      },
      [BLOCKS.UL_LIST]: (_node: Node, children: Children) => {
        return (
          <List is="ul" ncss={{ ...paragraphStyle }}>
            {children}
          </List>
        )
      },
      [BLOCKS.LIST_ITEM]: (_node: Node, children: Children) => {
        return (
          <List is="li" ncss={{ ...paragraphStyle }}>
            {children}
          </List>
        )
      },
      [INLINES.HYPERLINK]: (node: Node, children: Children) => {
        const uri = node.data.uri
        return (
          <ALink href={uri} ncss={{ ...simpleLinkStyle }}>
            {children}
          </ALink>
        )
      },
      [INLINES.ENTRY_HYPERLINK]: (node: Node, children: Children) => {
        const internalPath =
          node.data.target.fields &&
          node.data.target.fields.path[textProps.locale]
        return (
          <GLink ncss={{ ...simpleLinkStyle }} to={internalPath}>
            {children}
          </GLink>
        )
      },
      [BLOCKS.HEADING_1]: (_node: Node, children: Children) => (
        <H1 ncss={{ ...heading1Style }}>{children}</H1>
      ),
      [BLOCKS.HEADING_2]: (_node: Node, children: Children) => (
        <H2 ncss={{ ...heading2Style, mt: 3 }}>{children}</H2>
      ),
      [BLOCKS.HEADING_3]: (_node: Node, children: Children) => (
        <H3 ncss={{ ...heading3Style, mt: 3 }}>{children}</H3>
      ),
      [BLOCKS.HEADING_4]: (_node: Node, children: Children) => (
        <H4 ncss={{ ...heading4Style, mt: 3 }}>{children}</H4>
      ),
      [BLOCKS.HEADING_5]: (_node: Node, children: Children) => (
        <H5 ncss={{ ...heading5Style, mt: 3 }}>{children}</H5>
      ),
      [BLOCKS.HEADING_6]: (_node: Node, children: Children) => (
        <H6 ncss={{ ...heading6Style, mt: 3 }}>{children}</H6>
      ),
      [BLOCKS.EMBEDDED_ASSET]: (node: Node) => {
        const fields = node.data.target.fields
        const image = {
          title: getLocalizedValue(textProps.locale, fields.title),
          description: getLocalizedValue(textProps.locale, fields.description),
          fluid: {
            src:
              getLocalizedValue(textProps.locale, fields.file).url +
              '?w=2560&q=50',
          },
        } as FluidImage
        return <ImageBox image={image} key={node.data.target.id} />
      },
    },
  } as Options

  return (
    <Box is="div" ncss={wrapperStyle}>
      <Container is="div" ncss={containerStyle}>
        <Flex
          is="div"
          ncss={{
            label: 'text',
            mx: 'auto',
            my: 7,
            maxWidth: '640px',
          }}
        >
          {documentToReactComponents(
            (props.text.json as unknown) as Document,
            options
          )}
        </Flex>
      </Container>
    </Box>
  )
}

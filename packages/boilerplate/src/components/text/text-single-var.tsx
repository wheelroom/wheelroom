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
import { MediaObject } from '../../core/elements/primary/types'
import { Image } from '../../core/elements/primary/image'
import { MARKS, BLOCKS, INLINES, Document } from '@contentful/rich-text-types'
import { Any } from '../../core/elements/primary/any'
import { Paragraph } from '../../core/elements/primary/paragraph'
import { List } from '../../core/elements/primary/list'
import { ALink } from '../../core/elements/primary/a-link'
import { GLink } from '../../core/elements/primary/g-link'
import { H1, H2, H3, H4, H5, H6 } from '../../core/elements/primary/heading'
import { getLocalizedValue } from './get-localized-value'
import { Flex } from '../../core/elements/primary/grid'
import {
  documentToReactComponents,
  Options,
} from '@contentful/rich-text-react-renderer'
import { Video } from '../../core/elements/primary/video'

type Node = any
type Children = any

export const TextSingleVar = (props: TextProps) => {
  const textProps = props
  const styleTree = props.styleTree || {}

  const options = {
    renderText: (text) => {
      return text
        .split('\n')
        .reduce((children: Children, textSegment, index) => {
          return [...children, index > 0 && <br key={index} />, textSegment]
        }, [])
    },
    renderMark: {
      [MARKS.BOLD]: (text) => (
        <Any is="b" ncss={styleTree.marksBold}>
          {text}
        </Any>
      ),
      [MARKS.CODE]: (code) => (
        <Any is="pre" ncss={styleTree.marksCode.pre}>
          <Any is="code" ncss={styleTree.marksCode.code}>
            {code}
          </Any>
        </Any>
      ),
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (_node: Node, children: Children) => {
        return <Paragraph>{children}</Paragraph>
      },
      [BLOCKS.QUOTE]: (_node: Node, children: Children) => {
        return (
          <Any is="blockquote" ncss={styleTree.blocksQuote}>
            {children}
          </Any>
        )
      },
      [BLOCKS.UL_LIST]: (_node: Node, children: Children) => {
        return (
          <List is="ul" ncss={styleTree.blocksUlList}>
            {children}
          </List>
        )
      },
      [BLOCKS.OL_LIST]: (_node: Node, children: Children) => {
        return (
          <List is="ol" ncss={styleTree.blocksOlList}>
            {children}
          </List>
        )
      },
      [BLOCKS.LIST_ITEM]: (_node: Node, children: Children) => {
        return (
          <List is="li" ncss={styleTree.blocksLiList}>
            {children}
          </List>
        )
      },
      [INLINES.HYPERLINK]: (node: Node, children: Children) => {
        const uri = node.data.uri
        return (
          <ALink href={uri} ncss={styleTree.inlinesHyperlink}>
            {children}
          </ALink>
        )
      },
      [INLINES.ENTRY_HYPERLINK]: (node: Node, children: Children) => {
        const internalPath =
          node.data.target.fields &&
          node.data.target.fields.path[textProps.locale]
        return (
          <GLink ncss={styleTree.entryHyperlink} to={internalPath}>
            {children}
          </GLink>
        )
      },
      [BLOCKS.HEADING_1]: (_node: Node, children: Children) => (
        <H1 ncss={styleTree.blocksHeading1}>{children}</H1>
      ),
      [BLOCKS.HEADING_2]: (_node: Node, children: Children) => (
        <H2 ncss={styleTree.blocksHeading2}>{children}</H2>
      ),
      [BLOCKS.HEADING_3]: (_node: Node, children: Children) => (
        <H3 ncss={styleTree.blocksHeading3}>{children}</H3>
      ),
      [BLOCKS.HEADING_4]: (_node: Node, children: Children) => (
        <H4 ncss={styleTree.blocksHeading4}>{children}</H4>
      ),
      [BLOCKS.HEADING_5]: (_node: Node, children: Children) => (
        <H5 ncss={styleTree.blocksHeading5}>{children}</H5>
      ),
      [BLOCKS.HEADING_6]: (_node: Node, children: Children) => (
        <H6 ncss={styleTree.blocksHeading6}>{children}</H6>
      ),
      [BLOCKS.HR]: () => <Any is="hr" ncss={styleTree.blocksHr} />,
      [BLOCKS.EMBEDDED_ASSET]: (node: Node) => {
        const fields = node.data.target.fields
        if (!fields) {
          console.log(
            'Warning: embedded asset fields not found, try npx gatsby clean'
          )
          return null
        }
        const localizedFile = getLocalizedValue(textProps.locale, fields.file)
        const localizedTitle = getLocalizedValue(textProps.locale, fields.title)
        const localizedDescription = getLocalizedValue(
          textProps.locale,
          fields.description
        )
        const contentType = localizedFile.contentType
        if (!contentType || !contentType.includes('/')) {
          return null
        }
        const contentTypeSplit = contentType.split('/')
        if (contentTypeSplit[0] === 'image') {
          const media = {
            title: localizedTitle,
            description: localizedDescription,
            fluid: {
              src: localizedFile.url + '?w=2560&q=75',
            },
          } as MediaObject
          return (
            <Image
              key={node.data.target.id}
              includeFigcaption={true}
              media={media}
              styleTree={styleTree.image}
            />
          )
        }
        if (contentTypeSplit[0] === 'video') {
          const media = {
            title: localizedTitle,
            description: localizedDescription,
            file: {
              url: localizedFile.url,
              fileName: localizedFile.name,
              contentType: localizedFile.contentType,
            },
          } as MediaObject
          return (
            <Video
              media={media}
              title={localizedTitle}
              description={localizedDescription}
              styleTree={styleTree.video}
            />
          )
        }

        return null
      },
    },
  } as Options

  return (
    <Flex is="div" ncss={styleTree.wrapper}>
      {documentToReactComponents(
        (props.text.json as unknown) as Document,
        options
      )}
    </Flex>
  )
}

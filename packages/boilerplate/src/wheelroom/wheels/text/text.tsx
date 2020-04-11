/* eslint-disable react/display-name */
/**
 * Component variation
 *
 * Component type: text
 * Variation: Single
 *
 */

import React from 'react'
import { MediaObject } from '../elements/types'
import { Image } from '../elements/image'
import { MARKS, BLOCKS, INLINES, Document } from '@contentful/rich-text-types'
import { Any } from '../elements/any'
import { Paragraph } from '../elements/paragraph'
import { List } from '../elements/list'
import { ALink } from '../elements/a-link'
import { GLink } from '../elements/g-link'
import { H1, H2, H3, H4, H5, H6 } from '../elements/heading'
import { getLocalizedValue } from './get-localized-value'
import { Box } from '../elements/grid'
import {
  documentToReactComponents,
  Options,
} from '@contentful/rich-text-react-renderer'
import { Video } from '../elements/video'
import { TextProps } from '../../../models/text'
import { TextPreset } from './text-preset'

export interface TextTreeProps {
  /** Locale needed for rendering rich text */
  locale: string
  treeStyle?: TextPreset
  text: TextProps
}

type Node = any
type Children = any

export const Text = (props: TextTreeProps) => {
  const textProps = props
  const treeStyle = props.treeStyle || {}

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
        <Any is="b" ncss={treeStyle.marksBold}>
          {text}
        </Any>
      ),
      [MARKS.CODE]: (code) => (
        <Any is="pre" ncss={treeStyle.marksCode && treeStyle.marksCode.pre}>
          <Any is="code" ncss={treeStyle.marksCode && treeStyle.marksCode.code}>
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
          <Any is="blockquote" ncss={treeStyle.blocksQuote}>
            {children}
          </Any>
        )
      },
      [BLOCKS.UL_LIST]: (_node: Node, children: Children) => {
        return (
          <List is="ul" ncss={treeStyle.blocksUlList}>
            {children}
          </List>
        )
      },
      [BLOCKS.OL_LIST]: (_node: Node, children: Children) => {
        return (
          <List is="ol" ncss={treeStyle.blocksOlList}>
            {children}
          </List>
        )
      },
      [BLOCKS.LIST_ITEM]: (_node: Node, children: Children) => {
        return (
          <List is="li" ncss={treeStyle.blocksLiList}>
            {children}
          </List>
        )
      },
      [INLINES.HYPERLINK]: (node: Node, children: Children) => {
        const uri = node.data.uri
        return (
          <ALink href={uri} ncss={treeStyle.inlinesHyperlink}>
            {children}
          </ALink>
        )
      },
      [INLINES.ENTRY_HYPERLINK]: (node: Node, children: Children) => {
        const internalPath =
          node.data.target.fields &&
          node.data.target.fields.path[textProps.locale]
        return (
          <GLink ncss={treeStyle.entryHyperlink} to={internalPath}>
            {children}
          </GLink>
        )
      },
      [BLOCKS.HEADING_1]: (_node: Node, children: Children) => (
        <H1 ncss={treeStyle.blocksHeading1}>{children}</H1>
      ),
      [BLOCKS.HEADING_2]: (_node: Node, children: Children) => (
        <H2 ncss={treeStyle.blocksHeading2}>{children}</H2>
      ),
      [BLOCKS.HEADING_3]: (_node: Node, children: Children) => (
        <H3 ncss={treeStyle.blocksHeading3}>{children}</H3>
      ),
      [BLOCKS.HEADING_4]: (_node: Node, children: Children) => (
        <H4 ncss={treeStyle.blocksHeading4}>{children}</H4>
      ),
      [BLOCKS.HEADING_5]: (_node: Node, children: Children) => (
        <H5 ncss={treeStyle.blocksHeading5}>{children}</H5>
      ),
      [BLOCKS.HEADING_6]: (_node: Node, children: Children) => (
        <H6 ncss={treeStyle.blocksHeading6}>{children}</H6>
      ),
      [BLOCKS.HR]: () => <Any is="hr" ncss={treeStyle.blocksHr} />,
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
              includeFigcaption={false}
              media={media}
              treeStyle={treeStyle.image}
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
              key={node.data.target.id}
              media={media}
              includeTitle={false}
              includeDescription={false}
              title={localizedTitle}
              description={localizedDescription}
              treeStyle={treeStyle.video}
            />
          )
        }

        return null
      },
    },
  } as Options

  return (
    <Box is="div" ncss={treeStyle.wrapper.ncss}>
      {documentToReactComponents(
        (props.text.text.json as unknown) as Document,
        options
      )}
    </Box>
  )
}

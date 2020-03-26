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
import { MediaObject } from '../../core/elements/types'
import { Image } from '../../core/elements/image'
import { MARKS, BLOCKS, INLINES, Document } from '@contentful/rich-text-types'
import { Any } from '../../core/elements/any'
import { Paragraph } from '../../core/elements/paragraph'
import { defaultParagraphStyle } from '../../core/styles/paragraph'
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
import { Flex } from '../../core/elements/grid'
import {
  documentToReactComponents,
  Options,
} from '@contentful/rich-text-react-renderer'
import { commonALinkStyle } from '../../core/styles/a-link'
import { Video } from '../../core/elements/video'

const richTextLinkStyle = {
  wordBreak: 'break-all',
}

const blockquoteStyle = {
  textAlign: 'center',
  ':before': {
    fontFamily: 'text',
    color: 'metal',
    fontSize: 8,
    content: 'open-quote',
  },
}

const boldTextStyle = {
  label: 'strong',
  fontWeight: 7,
}

const preTextStyle = {
  label: 'pre',
  fontSize: 3,
  bg: 'skyblue',
  py: 2,
  px: 3,
  wordBreak: 'break-all',
  wordWrap: 'break-word',
}
const codeTextStyle = {
  label: 'code',
}

const hrStyle = {
  label: 'hr',
  overflow: 'hidden',
  borderTop: '1px solid transparent',
  borderColor: 'text',
  w: 1,
  my: 3,
}

type Node = any
type Children = any

const ImageBox = (props: { media: MediaObject }) => (
  <Image
    includeFigcaption={true}
    media={props.media}
    imgNcss={{ my: [4, 5] }}
    figcaptionNcss={{ mt: 0, mb: [4, 5] }}
  />
)

export const TextSingleVar = (props: TextProps) => {
  const textProps = props

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
        <Any is="b" ncss={{ ...boldTextStyle }}>
          {text}
        </Any>
      ),
      [MARKS.CODE]: (code) => (
        <Any is="pre" ncss={{ ...preTextStyle }}>
          <Any is="code" ncss={{ ...codeTextStyle }}>
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
          <Any is="blockquote" ncss={{ ...blockquoteStyle }}>
            {children}
          </Any>
        )
      },
      [BLOCKS.UL_LIST]: (_node: Node, children: Children) => {
        return (
          <List is="ul" ncss={{ ...defaultParagraphStyle }}>
            {children}
          </List>
        )
      },
      [BLOCKS.OL_LIST]: (_node: Node, children: Children) => {
        return (
          <List is="ol" ncss={{ ...defaultParagraphStyle }}>
            {children}
          </List>
        )
      },
      [BLOCKS.LIST_ITEM]: (_node: Node, children: Children) => {
        return (
          <List is="li" ncss={{ ...defaultParagraphStyle }}>
            {children}
          </List>
        )
      },
      [INLINES.HYPERLINK]: (node: Node, children: Children) => {
        const uri = node.data.uri
        return (
          <ALink
            href={uri}
            ncss={{ ...commonALinkStyle, ...richTextLinkStyle }}
          >
            {children}
          </ALink>
        )
      },
      [INLINES.ENTRY_HYPERLINK]: (node: Node, children: Children) => {
        const internalPath =
          node.data.target.fields &&
          node.data.target.fields.path[textProps.locale]
        return (
          <GLink
            ncss={{ ...commonALinkStyle, ...richTextLinkStyle }}
            to={internalPath}
          >
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
      [BLOCKS.HR]: () => <Any is="hr" ncss={{ ...hrStyle }} />,
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
          return <ImageBox media={media} key={node.data.target.id} />
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
              videoNcss={{ my: [4, 5] }}
            />
          )
        }

        return null
      },
    },
  } as Options

  return (
    <Flex
      is="div"
      ncss={{
        label: 'text',
        mx: 'auto',
        maxWidth: '640px',
        flexDirection: 'column',
        textAlign: 'left',
      }}
    >
      {documentToReactComponents(
        (props.text.json as unknown) as Document,
        options
      )}
    </Flex>
  )
}

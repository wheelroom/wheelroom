/* eslint-disable react/display-name */
/**
 * Component variation
 *
 * Component type: text
 * Variation: Single
 *
 */

import React from 'react'
import { Image } from '../../element/image'
import { BLOCKS, Document, INLINES, MARKS } from '@contentful/rich-text-types'
import { Paragraph } from '../../element/paragraph'
import { Li, Ol, Ul } from '../../element/self'
import { ALink } from '../../element/a-link'
import { GLink } from '../../element/g-link'
import { H1, H2, H3, H4, H5, H6 } from '../../element/heading'
import { getLocalizedValue } from './get-localized-value'
import { Wrapper } from '../../element/grid'
import {
  Options,
  documentToReactComponents,
} from '@contentful/rich-text-react-renderer'
import { Video } from '../../element/video'
import { TextWheelStyle } from './text-preset'
import { MediaObject } from '../../element/types/media'
import { Wheel } from '../../types'
import { TextProps } from '../../../../models/text'
import { Strong } from '../../element/self'
import { Pre } from '../../element/self'
import { Code } from '../../element/self'
import { Hr } from '../../element/self'
import { Blockquote } from '../../element/self'

export interface TextWheel extends Wheel {
  style: TextWheelStyle
}

export interface TextWheelProps {
  /** Locale needed for rendering rich text */
  locale: string
  wheel: TextWheel
  text: TextProps
}

type Node = any
type Children = any

export const Text = (props: TextWheelProps) => {
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
        <Strong
          wheel={{
            ...textProps.wheel,
            style: textProps.wheel.style.strong,
          }}
        >
          {text}
        </Strong>
      ),
      [MARKS.CODE]: (code) => (
        <Code
          wheel={{
            ...textProps.wheel,
            style: textProps.wheel.style.code,
          }}
        >
          {code}
        </Code>
      ),
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (_node: Node, children: Children) => {
        const isCode =
          _node.content[0].marks &&
          _node.content[0].marks.length &&
          _node.content[0].marks[0].type === 'code'
        if (isCode) {
          return (
            <Pre
              wheel={{
                ...textProps.wheel,
                style: textProps.wheel.style.pre,
              }}
            >
              {children}
            </Pre>
          )
        } else {
          return (
            <Paragraph
              wheel={{
                ...textProps.wheel,
                style: textProps.wheel.style.p,
              }}
            >
              {children}
            </Paragraph>
          )
        }
      },
      [BLOCKS.QUOTE]: (_node: Node, children: Children) => {
        return (
          <Blockquote
            wheel={{
              ...textProps.wheel,
              style: textProps.wheel.style.blockquote,
            }}
          >
            {children}
          </Blockquote>
        )
      },
      [BLOCKS.UL_LIST]: (_node: Node, children: Children) => {
        return (
          <Ul
            wheel={{
              ...textProps.wheel,
              style: textProps.wheel.style.ul,
            }}
          >
            {children}
          </Ul>
        )
      },
      [BLOCKS.OL_LIST]: (_node: Node, children: Children) => {
        return (
          <Ol
            wheel={{
              ...textProps.wheel,
              style: textProps.wheel.style.ol,
            }}
          >
            {children}
          </Ol>
        )
      },
      [BLOCKS.LIST_ITEM]: (_node: Node, children: Children) => {
        return (
          <Li
            wheel={{
              ...textProps.wheel,
              style: textProps.wheel.style.li,
            }}
          >
            {children}
          </Li>
        )
      },
      [INLINES.HYPERLINK]: (node: Node, children: Children) => {
        const uri = node.data.uri
        return (
          <ALink
            href={uri}
            wheel={{
              ...textProps.wheel,
              style: textProps.wheel.style.inlinesHyperlink,
            }}
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
            wheel={{
              ...textProps.wheel,
              style: textProps.wheel.style.entryHyperlink,
            }}
            to={internalPath}
          >
            {children}
          </GLink>
        )
      },
      [BLOCKS.HEADING_1]: (_node: Node, children: Children) => (
        <H1
          wheel={{
            ...textProps.wheel,
            style: textProps.wheel.style.h1,
          }}
        >
          {children}
        </H1>
      ),
      [BLOCKS.HEADING_2]: (_node: Node, children: Children) => (
        <H2
          wheel={{
            ...textProps.wheel,
            style: textProps.wheel.style.h2,
          }}
        >
          {children}
        </H2>
      ),
      [BLOCKS.HEADING_3]: (_node: Node, children: Children) => (
        <H3
          wheel={{
            ...textProps.wheel,
            style: textProps.wheel.style.h3,
          }}
        >
          {children}
        </H3>
      ),
      [BLOCKS.HEADING_4]: (_node: Node, children: Children) => (
        <H4
          wheel={{
            ...textProps.wheel,
            style: textProps.wheel.style.h4,
          }}
        >
          {children}
        </H4>
      ),
      [BLOCKS.HEADING_5]: (_node: Node, children: Children) => (
        <H5
          wheel={{
            ...textProps.wheel,
            style: textProps.wheel.style.h5,
          }}
        >
          {children}
        </H5>
      ),
      [BLOCKS.HEADING_6]: (_node: Node, children: Children) => (
        <H6
          wheel={{
            ...textProps.wheel,
            style: textProps.wheel.style.h6,
          }}
        >
          {children}
        </H6>
      ),
      [BLOCKS.HR]: () => (
        <Hr
          wheel={{
            ...textProps.wheel,
            style: textProps.wheel.style.hr,
          }}
        />
      ),
      [BLOCKS.EMBEDDED_ASSET]: (node: Node) => {
        const fields = node.data.target.fields
        if (!fields) {
          // eslint-disable-next-line no-undef
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
              wheel={{
                ...textProps.wheel,
                style: textProps.wheel.style.image,
              }}
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
              wheel={{
                ...textProps.wheel,
                style: textProps.wheel.style.video,
              }}
            />
          )
        }

        return null
      },
    },
  } as Options

  return (
    <Wrapper
      wheel={{
        ...textProps.wheel,
        style: textProps.wheel.style.wrapper,
      }}
    >
      {documentToReactComponents(
        (props.text.text.json as unknown) as Document,
        options
      )}
    </Wrapper>
  )
}

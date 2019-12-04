import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS, INLINES } from '@contentful/rich-text-types'
import { Image } from '@jacco-meijer/content-models'
import { normalizedPath } from 'gatsby-theme-wheelroom'
import * as React from 'react'
import { enlargingImageStyle } from '../../styles/enlarging-image'
import { paragraphStyle } from '../../styles/paragraph'
import { title1Style, title2Style, title3Style } from '../../styles/title'
import { Box } from '../core-elements/grid'
import { Heading } from '../core-elements/heading'
import { Text } from '../core-elements/text'
import { SimpleALink } from '../simple-a-link/simple-a-link'

const getLocalizedFields = (fields: any, locale: string) => {
  const localizedFields = {} as { [propName: string]: any }
  Object.entries(fields).forEach(([fieldName, field]: [string, any]) => {
    // Check if locale is present, if not, use first locale found
    if (locale in field) {
      localizedFields[fieldName] = field[locale]
    } else {
      const firstLocale = Object.keys(field)[0]
      localizedFields[fieldName] = fields[fieldName][firstLocale]
    }
  })
  return localizedFields
}

const embeddedBlocks = {} as any

const ImageBox = (props: any) => (
  <Box ncss={{ overflow: 'hidden', my: [4, 5, 6, 7] }}>
    <Image image={props.image} objectFit="cover" {...enlargingImageStyle} />
  </Box>
)

type Node = any
type Children = any

export interface ArticleTextProps {
  articleText: any
  embeddedBlocksProps?: any
  locale: string
}

export const ArticleText = (props: ArticleTextProps) => {
  const articleText = JSON.parse(props.articleText)
  const embeddedBlocksProps = props.embeddedBlocksProps

  const options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node: Node, children: Children) => (
        <Text ncss={paragraphStyle}>{children}</Text>
      ),
      [BLOCKS.HEADING_1]: (node: Node, children: Children) => (
        <Heading ncss={title1Style}>{children}</Heading>
      ),
      [BLOCKS.HEADING_2]: (node: Node, children: Children) => (
        <Heading ncss={title2Style}>{children}</Heading>
      ),
      [BLOCKS.HEADING_3]: (node: Node, children: Children) => (
        <Heading ncss={title3Style}>{children}</Heading>
      ),
      [BLOCKS.UL_LIST]: (node: Node, children: Children) => <ul>{children}</ul>,
      [BLOCKS.OL_LIST]: (node: Node, children: Children) => <ol>{children}</ol>,
      [BLOCKS.LIST_ITEM]: (node: Node, children: Children) => (
        <li>{children}</li>
      ),
      [BLOCKS.QUOTE]: (node: Node, children: Children) => <q>{children}</q>,
      [BLOCKS.HR]: (node: Node, children: Children) => (
        <Text ncss={paragraphStyle}>
          <hr />
          {children}
        </Text>
      ),
      [INLINES.HYPERLINK]: (node: Node, children: Children) => (
        <SimpleALink href={normalizedPath(node.data.uri)}>
          {children}
        </SimpleALink>
      ),
      [BLOCKS.EMBEDDED_ASSET]: (node: Node) => {
        const fields = getLocalizedFields(node.data.target.fields, props.locale)
        const image = {
          description: fields.title,
          fluid: {
            src: fields.file.url + '?w=1024&q=50',
          },
        }
        return <ImageBox image={image} />
      },

      [BLOCKS.EMBEDDED_ENTRY]: (node: Node) => {
        const fields = getLocalizedFields(node.data.target.fields, props.locale)
        const blockName = node.data.target.sys.contentType.sys.id
        const Block = embeddedBlocks[blockName]
        return <Block {...fields} {...embeddedBlocksProps} />
      },
    },
  }
  return <article>{documentToReactComponents(articleText, options)}</article>
}

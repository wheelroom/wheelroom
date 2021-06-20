/* eslint-disable react/display-name */
import { BLOCKS, MARKS } from '@contentful/rich-text-types'
import { AnyProps, Div, B } from '@wheelroom/any/react'
import {
  documentToReactComponents,
  Options,
} from '@contentful/rich-text-react-renderer'
import { ReactNode } from 'react'
import { ContentfulPageSection, PageSection } from '../page/page-section'
import { ContentfulAsset } from '../asset/contentful-asset'
import { Asset } from '../asset/asset'
import { Text } from '../text/text'
import { H1, H2, H3, H4, H5, H6 } from '../heading/heading'
import { ContentfulTextSection } from './contentful-text-section'

export interface TextSection {
  contentfulTextSection?: ContentfulTextSection
}

type AnyDivProps = AnyProps['div']
export interface TextSectionProps extends AnyDivProps {
  model?: TextSection
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const textSectionStyleFactory = (args: {
  variant?: any
  options?: any
}) => {
  return {}
}

export const TextSection = ({ model, ...props }: TextSectionProps) => {
  if (!model?.contentfulTextSection) return null
  const css = textSectionStyleFactory({})
  const document = model.contentfulTextSection.text?.json
  const links = model.contentfulTextSection.text?.links

  const options: Options = {
    renderMark: {
      [MARKS.BOLD]: (text: ReactNode) => <B>{text}</B>,
    },
    renderNode: {
      [BLOCKS.HEADING_1]: (node, children) => <H1>{children}</H1>,
      [BLOCKS.HEADING_2]: (node, children) => <H2>{children}</H2>,
      [BLOCKS.HEADING_3]: (node, children) => <H3>{children}</H3>,
      [BLOCKS.HEADING_4]: (node, children) => <H4>{children}</H4>,
      [BLOCKS.HEADING_5]: (node, children) => <H5>{children}</H5>,
      [BLOCKS.HEADING_6]: (node, children) => <H6>{children}</H6>,
      [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
      [BLOCKS.EMBEDDED_ENTRY]: (node) => {
        const entry = links?.entries.block.find(
          (entry) => entry.sys?.id === node.data.target.sys.id
        ) as ContentfulPageSection
        return <PageSection model={{ contentfulPageSections: [entry] }} />
      },
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const asset = links?.assets.block.find(
          (asset) => asset.sys?.id === node.data.target.sys.id
        ) as ContentfulAsset
        return <Asset model={{ contentfulAsset: asset }} />
      },
    },
  }

  return (
    <Div css={css} {...props}>
      {document && documentToReactComponents(document, options)}
    </Div>
  )
}

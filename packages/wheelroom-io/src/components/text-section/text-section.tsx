/* eslint-disable react/display-name */
import { BLOCKS, MARKS, INLINES } from '@contentful/rich-text-types'
import { AnyProps, Div, B, P } from '@wheelroom/any/react'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { ContentfulPageSection, PageSection } from '../page/page-section'
import { Image } from '../asset/image'
import { ContentfulAsset } from '../asset/contentful-asset'
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
  return { color: 'blue' }
}

export const TextSection = ({ model, ...props }: TextSectionProps) => {
  if (!model?.contentfulTextSection) return null
  const css = textSectionStyleFactory({})
  const document = model.contentfulTextSection.text?.json
  const links = model.contentfulTextSection.text?.links

  const options = {
    renderMark: {
      [MARKS.BOLD]: (text: string) => <B>{text}</B>,
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node: any, children: any) => <P>{children}</P>,
      [BLOCKS.EMBEDDED_ENTRY]: (node: any) => {
        const entry = links?.entries.block.find(
          (entry) => entry.sys?.id === node.data.target.sys.id
        ) as ContentfulPageSection
        return <PageSection model={{ contentfulPageSections: [entry] }} />
      },
      // [INLINES.EMBEDDED_ENTRY]: (node: any) => {
      //   const entry = links?.entries.block.find(
      //     (entry) => entry.sys?.id === node.data.target.sys.id
      //   ) as ContentfulPageSection
      //   return <PageSection model={{ contentfulPageSections: [entry] }} />
      // },
      [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
        const asset = links?.entries.block.find(
          (entry) => entry.sys?.id === node.data.target.sys.id
        ) as ContentfulAsset
        return <Image model={{ contentfulAsset: asset }} />
      },
    },
    renderText: (text: any) => text.replace('!', '?'),
  }

  return (
    <Div css={css} {...props}>
      {document && documentToReactComponents(document, options as any)}
    </Div>
  )
}

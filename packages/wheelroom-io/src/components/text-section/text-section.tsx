/* eslint-disable react/display-name */
import { BLOCKS, MARKS, INLINES } from '@contentful/rich-text-types'
import { AnyProps, Div, B, P } from '@wheelroom/any/react'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
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

const options = {
  renderMark: {
    [MARKS.BOLD]: (text: string) => <B>{text}</B>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node: any, children: any) => <P>{children}</P>,
  },
  [BLOCKS.EMBEDDED_ENTRY]: (node: any) => {
    console.log('BLOCKS.EMBEDDED_ENTRY', node)
    return <>BLOCKS.EMBEDDED_ENTRY</>
  },
  [INLINES.EMBEDDED_ENTRY]: (node: any) => {
    console.log('INLINES.EMBEDDED_ENTRY', node)
    return <>INLINES.EMBEDDED_ENTRY</>
  },
  [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
    console.log('BLOCKS.EMBEDDED_ASSET', node)
    return <>BLOCKS.EMBEDDED_ASSET</>
  },
  renderText: (text: any) => text.replace('!', '?'),
}

export const TextSection = ({ model, ...props }: TextSectionProps) => {
  if (!model?.contentfulTextSection) return null
  const css = textSectionStyleFactory({})
  const document = model.contentfulTextSection.text?.json
  console.log('document', document)

  return (
    <Div css={css} {...props}>
      {document && documentToReactComponents(document, options as any)}
    </Div>
  )
}

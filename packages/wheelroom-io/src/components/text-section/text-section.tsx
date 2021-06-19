import { AnyProps, Div } from '@wheelroom/any/react'
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
  console.log(model.contentfulTextSection.text?.json)

  return (
    <Div css={css} {...props}>
      Text section
    </Div>
  )
}

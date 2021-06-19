import { AnyProps, Div, Hr } from '@wheelroom/any/react'
import { ContentfulNavigationSection } from './contentful-navigation-section'

export interface NavigationSection {
  contentfulNavigationSection?: ContentfulNavigationSection
}

type AnyDivProps = AnyProps['div']
export interface NavigationSectionProps extends AnyDivProps {
  model?: NavigationSection
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const navigationSectionStyleFactory = (args: {
  variant?: any
  options?: any
}) => {
  return {}
}

export const NavigationSection = ({
  model,
  ...props
}: NavigationSectionProps) => {
  model = model || {}
  const section = model.contentfulNavigationSection || {}
  console.log('section', section)

  const css = navigationSectionStyleFactory({})

  return (
    <Div css={css} {...props}>
      Navigation Section Hoi
    </Div>
  )
}

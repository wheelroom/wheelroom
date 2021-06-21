import { AnyProps, Div, H3 } from '@wheelroom/any/react'
import { NavigationSegment } from './navigation-segment'
import { ContentfulNavigationSection } from './contentful-navigation-section'

export interface NavigationActions {
  contentfulNavigationSection?: ContentfulNavigationSection
}

type AnyDivProps = AnyProps['div']
export interface NavigationActionsProps extends AnyDivProps {
  model?: NavigationActions
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const navigationActionsStyleFactory = (args: {
  variant?: any
  options?: any
}) => {
  return {}
}

export const NavigationActions = ({
  model,
  ...props
}: NavigationActionsProps) => {
  const section = model?.contentfulNavigationSection
  if (!section?.legal) return null
  const css = navigationActionsStyleFactory({})

  return (
    <Div css={css} {...props}>
      <H3>Navigation Actions</H3>
      <NavigationSegment
        model={{
          contentfulNavigationSegment: section?.legal,
        }}
      />
    </Div>
  )
}

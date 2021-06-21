import { AnyProps, Div, H3 } from '@wheelroom/any/react'
import { NavigationSegment } from './navigation-segment'
import { ContentfulNavigationSegment } from './contentful-navigation-segment'

export interface NavigationActions {
  contentfulNavigationSegment?: ContentfulNavigationSegment
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
  const contentfulNavigationSegment = model?.contentfulNavigationSegment
  const css = navigationActionsStyleFactory({})

  return (
    <Div css={css} {...props}>
      <H3>Navigation Actions</H3>
      <NavigationSegment
        model={{ contentfulNavigationSegment }}
        variant="actions"
      />
    </Div>
  )
}

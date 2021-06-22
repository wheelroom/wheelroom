import { AnyProps, Div } from '@wheelroom/any/react'
import { StyleFactory } from '../../lib/component-styles'
import { ContentfulAction } from '../models/contentful-action'
import { ActionButton } from './action-button'
import { ContentfulNavigationSegment } from './contentful-navigation-segment'

export type NavigationSegmentVariant = 'actions'

export interface NavigationSegment {
  contentfulNavigationSegment?: ContentfulNavigationSegment
}

type AnyDivProps = AnyProps['div']
export interface NavigationSegmentProps extends AnyDivProps {
  model?: NavigationSegment
  variant?: NavigationSegmentVariant
}

export const navigationSegmentStyleFactory: StyleFactory = () => {
  return {}
}

export const NavigationSegment = ({
  model,
  ...props
}: NavigationSegmentProps) => {
  if (!model?.contentfulNavigationSegment?.actionsCollection?.items?.length)
    return null
  const actions = model.contentfulNavigationSegment.actionsCollection.items
  const css = navigationSegmentStyleFactory({})

  return (
    <Div css={css} {...props}>
      {actions.map((contentfulAction: ContentfulAction) => (
        <ActionButton
          key={contentfulAction.sys?.id}
          model={{ contentfulAction }}
          variant="primary"
        />
      ))}
    </Div>
  )
}

import { Div } from '@wheelroom/any/react'
import {
  ComponentProps,
  StyleFactory,
  StyleMap,
} from '../../lib/component-styles'
import { mediaQuery } from '../../lib/media-query'
import { ButtonOptions, ButtonVariant } from '../elements/button'
import { ActionButton } from '../models/action-button'
import { ContentfulAction } from '../models/contentful-action'
import { ContentfulNavigationSegment } from './contentful-navigation-segment'

export type NavigationSegmentVariant = 'actions'

export type NavigationSegment = {
  contentfulNavigationSegment?: ContentfulNavigationSegment
}
export type NavigationSegmentProps = ComponentProps<
  NavigationSegment,
  ButtonVariant,
  ButtonOptions
>['div']

const buttonGroupStyle = {
  // Adding space between the Button(s). The Button container will remove / eliminate the margin that is added by the Button(s).
  margin: -4,
  a: {
    margin: 4,
  },
}

const styleMap: StyleMap<ButtonVariant> = {
  primary: buttonGroupStyle,
  secondary: buttonGroupStyle,
  display: {},
}

export const navigationSegmentStyleFactory: StyleFactory<
  ButtonVariant,
  ButtonOptions
> = (args) => {
  const useVariant = args.variant || 'primary'
  const baseStyle = styleMap[useVariant]
  return mediaQuery([baseStyle])
}

export const NavigationSegment = ({
  model,
  variant,
  options,
  ...props
}: NavigationSegmentProps) => {
  if (!model?.contentfulNavigationSegment?.actionsCollection?.items?.length)
    return null
  const actions = model.contentfulNavigationSegment.actionsCollection.items
  const css = navigationSegmentStyleFactory({
    variant,
    options,
  })

  return (
    <Div css={css} {...props}>
      {actions.map((contentfulAction: ContentfulAction) => (
        <ActionButton
          key={contentfulAction.sys?.id}
          model={{ contentfulAction }}
          variant={variant}
          options={options}
        />
      ))}
    </Div>
  )
}

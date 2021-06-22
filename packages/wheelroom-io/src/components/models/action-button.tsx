import { Link, GatsbyLinkProps } from 'gatsby'
import { css } from '@emotion/css'
import {
  ButtonOptions,
  buttonStyleFactory,
  ButtonVariant,
} from '../elements/button'
import { Anchor, AnchorProps } from '../elements/anchor'
import { ComponentProps } from '../../lib/component-styles'
import { ContentfulAction } from './contentful-action'

/**
 * This is an in-between component without styling. This component returnes
 * either a Link or a Anchor element and uses Button variant styling
 */

export type ActionButton = {
  contentfulAction?: ContentfulAction
}
export type ActionButtonProps = ComponentProps<
  ActionButton,
  ButtonVariant,
  ButtonOptions
>['a']

type LinkProps = Omit<GatsbyLinkProps<any>, 'ref'>
export const ActionButton = ({
  variant,
  model,
  options,
  ...props
}: ActionButtonProps) => {
  const action = model?.contentfulAction
  const path = action?.page?.path
  const url = action?.url
  const heading = action?.heading

  // Render as a button
  const buttonStyle = buttonStyleFactory({ variant, options })
  if (path) {
    // Use Gatsby Link Element that routes with the router
    const linkProps = { ...props, to: path } as LinkProps
    return (
      <Link className={css(buttonStyle)} {...linkProps}>
        {heading}
      </Link>
    )
  } else {
    // Use Anchor element for external urls
    const anchorProps = {
      ...props,
      href: url,
    } as AnchorProps
    return (
      <Anchor css={buttonStyle} {...anchorProps}>
        {heading}
      </Anchor>
    )
  }
}

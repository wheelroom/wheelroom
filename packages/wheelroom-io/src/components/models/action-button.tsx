import { Link, GatsbyLinkProps } from 'gatsby'
import { css } from '@emotion/css'
import {
  ButtonOptions,
  ButtonProps,
  buttonStyleFactory,
  ButtonVariant,
} from '../elements/button'
import { Anchor, AnchorProps } from '../elements/anchor'
import { ContentfulAction } from './contentful-action'

export type ActionButtonVariant = ButtonVariant
export type ActionButtonOptions = ButtonOptions

export interface ActionButton {
  contentfulAction?: ContentfulAction
}

export type ActionButtonProps<T> = T & {
  model?: ActionButton
  options?: ActionButtonOptions
  variant?: ActionButtonVariant
}

type LinkProps = Omit<GatsbyLinkProps<any>, 'ref'>
export const ActionButton = ({
  variant,
  model,
  options,
  ...props
}: ActionButtonProps<ButtonProps | AnchorProps | LinkProps>) => {
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

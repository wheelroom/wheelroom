import { Link, GatsbyLinkProps } from 'gatsby'
import { css } from '@emotion/css'
import {
  ButtonOptions,
  ButtonProps,
  buttonStyleFactory,
  ButtonVariant,
} from '../elements/button'
import { Anchor, AnchorProps, AnchorVariant } from '../elements/anchor'
import { ContentfulAction } from './contentful-action'

export type ActionVariant = ButtonVariant | AnchorVariant
export type ActionOptions = ButtonOptions

export interface Action {
  contentfulAction?: ContentfulAction
}

export type ActionProps<T> = T & {
  model?: Action
  options?: ActionOptions
  variant?: ActionVariant
}

// const onClickHander = ({ eventId, globals }: OnClickHander) => {
//   const siteEmbeds = globals.siteEmbeds || []
//   siteEmbeds.forEach((embed: ContentfulEmbed) => {
//     if (embed.code && embed.type === 'js-action') {
//       Function('eventId', 'props', embed.code)(eventId, globals)
//     }
//   })
// }
type LinkProps = Omit<GatsbyLinkProps<any>, 'ref'>
export const Action = ({
  variant,
  model,
  options,
  ...props
}: ActionProps<ButtonProps | AnchorProps | LinkProps>) => {
  const action = model?.contentfulAction
  const path = action?.page?.path
  const url = action?.url
  const heading = action?.heading
  if (!variant || variant === 'link') {
    // Render as a anchor text link
    if (path) {
      const linkProps = { ...props, to: path } as LinkProps
      return <Link {...linkProps}>{heading}</Link>
    } else {
      const anchorProps = {
        ...props,
        href: url,
      } as AnchorProps
      return <Anchor {...anchorProps}>{heading}</Anchor>
    }
  } else {
    // Render as a button
    const buttonStyle = buttonStyleFactory({ variant, options })
    if (path) {
      const linkProps = { ...props, to: path } as LinkProps
      return (
        <Link className={css(buttonStyle)} {...linkProps}>
          {heading}
        </Link>
      )
    } else {
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
}

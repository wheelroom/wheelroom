import { Link } from 'gatsby'
import {
  Button,
  ButtonOptions,
  ButtonProps,
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

export const Action = ({
  variant,
  model,
  options,
  ...props
}: ActionProps<ButtonProps | AnchorProps>) => {
  const action = model?.contentfulAction
  const path = action?.page?.path
  const url = action?.url
  const heading = action?.heading
  if (variant === 'link') {
    if (path) {
      // TODO: What about GatsbyLinkProps<any>
      return <Link to={path}>{heading}</Link>
    } else {
      const anchorProps = {
        ...props,
        href: url,
      } as AnchorProps
      return <Anchor {...anchorProps}>{heading}</Anchor>
    }
  } else {
    if (path) {
      //TODO: Apply button styling
      return <Link to={path}>{heading}</Link>
    } else {
      //TODO: Add onClick hander? Or use Link element?
      const buttonProps = { ...props, variant, options } as ButtonProps
      return <Button {...buttonProps}>{heading}</Button>
    }
  }
}

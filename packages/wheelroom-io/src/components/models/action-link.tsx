import { Link, GatsbyLinkProps } from 'gatsby'
import { ButtonProps } from '../elements/button'
import { Anchor, AnchorProps, AnchorVariant } from '../elements/anchor'
import { ContentfulAction } from './contentful-action'

export type ActionLinkVariant = AnchorVariant

export interface ActionLink {
  contentfulAction?: ContentfulAction
}

export type ActionLinkProps<T> = T & {
  model?: ActionLink
  variant?: ActionLinkVariant
}

type LinkProps = Omit<GatsbyLinkProps<any>, 'ref'>
export const ActionLink = ({
  model,
  ...props
}: ActionLinkProps<ButtonProps | AnchorProps | LinkProps>) => {
  const action = model?.contentfulAction
  const path = action?.page?.path
  const url = action?.url
  const heading = action?.heading

  if (path) {
    // Use Gatsby Link Element that routes with the router
    const linkProps = { ...props, to: path } as LinkProps
    return <Link {...linkProps}>{heading}</Link>
  } else {
    // Use Anchor element for external urls
    const anchorProps = {
      ...props,
      href: url,
    } as AnchorProps
    return <Anchor {...anchorProps}>{heading}</Anchor>
  }
}

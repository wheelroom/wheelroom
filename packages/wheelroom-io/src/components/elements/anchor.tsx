import { A as AnyA } from '@wheelroom/any/react'
import { mediaQuery } from '../../lib/media-query'
import {
  ComponentProps,
  StyleFactory,
  StyleMap,
} from '../../lib/component-styles'

export type AnchorVariant = 'link' | 'menu' | 'sitemap'
export type AnchorProps = ComponentProps<undefined, AnchorVariant>['a']

const baseStyle = {
  fontSize: 18,
  backgroundColor: 'transparent',
  color: 'var(--colors-azure)',
  border: 0,
  padding: 0,
  textDecoration: 'underline',
}

const styleMap: StyleMap<AnchorVariant> = {
  link: baseStyle,
  menu: baseStyle,
  sitemap: baseStyle,
}

export const anchorStyleFactory: StyleFactory<AnchorVariant> = (args) => {
  const useVariant = args.variant || 'link'
  const baseStyle = styleMap[useVariant]
  return mediaQuery([baseStyle])
}

export const Anchor = ({ variant, ...props }: AnchorProps) => {
  const css = anchorStyleFactory({
    variant,
  })
  return <AnyA css={css as any} {...props} />
}

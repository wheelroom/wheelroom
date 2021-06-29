import { A as AnyA } from '@wheelroom/any/react'
import {
  ComponentProps,
  StyleFactory,
  StyleMap,
  StyleObject,
} from '../../lib/component-styles'
import { mediaQuery } from '../../lib/media-query'

export type AnchorVariant = 'branding' | 'link' | 'menu' | 'sitemap'
export type AnchorProps = ComponentProps<
  undefined,
  AnchorVariant,
  undefined
>['a']

const anchorStyle: StyleObject = {
  backgroundColor: 'transparent',
  border: 0,
  color: 'var(--colors-azure)',
  fontSize: 18,
  padding: 0,
  textDecoration: 'underline',
}

const linkVariantStyle: StyleObject = anchorStyle

const brandingVariantStyle: StyleObject = {
  ...anchorStyle,
  color: 'var(--colors-black)',
  fontWeight: 'bold',
  textDecoration: 'none',
}

const menuVariantStyle: StyleObject = {
  ...anchorStyle,
  fontSize: 16,
  display: 'inline-block',
  padding: '16px 8px',
  textDecoration: 'none',
  // Gastby adds class name `.active` on current page link
  ':hover, &.active': {
    textDecoration: 'underline',
  },
}

const sitemapVariantStyle: StyleObject = anchorStyle

const styleMap: StyleMap<AnchorVariant> = {
  branding: brandingVariantStyle,
  link: linkVariantStyle,
  menu: menuVariantStyle,
  sitemap: sitemapVariantStyle,
}

export const anchorStyleFactory: StyleFactory<AnchorVariant> = (args) => {
  const useVariant = args.variant || 'link'
  const baseAnchorStyle = styleMap[useVariant]
  console.log(useVariant)
  return mediaQuery([baseAnchorStyle])
}

export const Anchor = ({ variant, ...props }: AnchorProps) => {
  const css = anchorStyleFactory({
    variant,
  })
  return <AnyA css={css} {...props} />
}

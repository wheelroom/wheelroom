import { AnyProps, A as AnyA } from '@wheelroom/any/react'
import { mediaQuery } from '../../lib/media-query'

export type AnchorVariant = 'link' | 'header' | 'footer' | 'sitemap'
export type AnchorOption = ''
export type AnchorOptions = Partial<Record<AnchorOption, boolean>>

type AnyAProps = AnyProps['a']
export interface AnchorProps extends AnyAProps {
  options?: AnchorOptions
  variant?: AnchorVariant
}

const baseStyle = {
  fontSize: 18,
  backgroundColor: 'transparent',
  color: 'var(--colors-azure)',
  border: 0,
  padding: 0,
  textDecoration: 'underline',
}

const styleMap: Partial<Record<AnchorVariant, any>> = {
  link: baseStyle,
  header: baseStyle,
  footer: baseStyle,
  sitemap: baseStyle,
}

export const anchorStyleFactory = (args: {
  variant?: AnchorVariant
  options?: AnchorOptions
}) => {
  const useVariant = args.variant || 'link'
  const baseStyle = styleMap[useVariant]
  return mediaQuery([baseStyle])
}

export const Anchor = ({ variant, options, ...props }: AnchorProps) => {
  const css = anchorStyleFactory({
    variant,
    options,
  })
  return <AnyA css={css as any} {...props} />
}

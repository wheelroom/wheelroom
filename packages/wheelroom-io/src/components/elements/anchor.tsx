import { AnyProps, A as AnyA } from '@wheelroom/any/react'
import { mediaQuery } from '../../lib/media-query'
import { StyleFactory } from '../../lib/style-factory'

export type AnchorVariant = 'link' | 'header' | 'footer' | 'sitemap'

type AnyAProps = AnyProps['a']
export interface AnchorProps extends AnyAProps {
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

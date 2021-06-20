import { AnyProps, A as AnyA } from '@wheelroom/any/react'

export type AnchorVariant = 'link'

type AnyAProps = AnyProps['a']
export type AnchorProps = AnyAProps

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const anchorStyleFactory = (args: { variant?: any; options?: any }) => {
  return {
    fontSize: 18,
    backgroundColor: 'transparent',
    color: 'var(--colors-azure)',
    border: 0,
    padding: 0,
    textDecoration: 'underline',
  }
}

export const Anchor = (props: AnchorProps) => {
  const css = anchorStyleFactory({})
  return <AnyA css={css as any} {...props} />
}

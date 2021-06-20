import { AnyProps, A as AnyA } from '@wheelroom/any/react'

type AnyAProps = AnyProps['a']
export type AnchorProps = AnyAProps

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const anchorStyleFactory = (args: { variant?: any; options?: any }) => {
  return {
    color: 'red',
  }
}

export const Anchor = (props: AnchorProps) => {
  const css = anchorStyleFactory({})
  return <AnyA css={css as any} {...props} />
}

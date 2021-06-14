import { MediaBreakpoint, MediaBreakpointProps } from './breakpoint'
import { Embed, EmbedProps } from './embed'
import { Asset, AssetProps } from './asset'

export type Media = Asset | MediaBreakpoint | Embed
export type MediaProps = AssetProps | MediaBreakpointProps | EmbedProps

export const Media = (props: MediaProps) => {
  const model = props || {}
  if ('asset' in model) {
    return <Asset {...(props as AssetProps)} />
  } else if ('code' in model) {
    return <Embed {...(props as EmbedProps)} />
  } else {
    return <MediaBreakpoint {...(props as MediaBreakpointProps)} />
  }
}

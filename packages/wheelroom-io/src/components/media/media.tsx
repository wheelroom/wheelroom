import { MediaBreakpoint } from './breakpoint'
import { Embed } from './embed'
import { Asset } from './asset'

export type Media = Asset | MediaBreakpoint

export interface MediaProps {
  model: Media
}

export const Media = ({ model, ...props }: MediaProps) => {
  model = model || {}
  if ('asset' in model) {
    return <Asset {...props} />
  } else if ('code' in model) {
    return <Embed {...props} />
  } else {
    return <MediaBreakpoint {...props} />
  }
}

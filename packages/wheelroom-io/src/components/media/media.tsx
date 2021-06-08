import React from 'react'
import { MediaBreakpoint } from './breakpoint'
import { Embed } from './embed'
import { Asset } from './asset'

export type Media = {
  asset?: Asset
  mediaBreakpoint?: MediaBreakpoint
  embed?: Embed
  poster?: Asset
}

export interface MediaProps {
  model: Media
}

export const Media = (props: MediaProps) => {
  if (props.model.mediaBreakpoint) {
    return <MediaBreakpoint model={props.model.mediaBreakpoint} />
  } else if (props.model.asset) {
    return <Asset model={props.model.asset} poster={props.model.poster} />
  } else if (props.model.embed) {
    return <Embed model={props.model.embed} />
  }
  return null
}

/** @jsx jsx */
import { ElementProps } from './element'
import { getSelf } from './self'
import { iframeReset } from './iframe-reset'

export interface IframeElementProps extends ElementProps {
  /** Iframe's can have any props */
  iframeProps?: any
}

export const Iframe = (props: IframeElementProps) => {
  return getSelf(props, iframeReset, 'iframe', props.iframeProps)
}

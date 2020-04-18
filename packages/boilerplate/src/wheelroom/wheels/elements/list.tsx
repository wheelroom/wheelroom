/** @jsx jsx */
import { jsx } from '@emotion/core'
import { listReset } from './list-reset'
import { styledSystem } from '@wheelroom/styled-system'
import { mergeNcss } from '../../lib/merge-ncss'
import { ElementProps, getElementAttrs } from './element'

const getNcss = (props: ElementProps, elementName: string) => {
  const label = { ncss: { label: elementName } }
  return mergeNcss([
    label,
    listReset,
    props.wheel.elementPresets[elementName],
    props.wheel.style,
    props,
  ])
}

export const Li = (props: ElementProps) => {
  const ncss = getNcss(props, 'li')
  const attrs: any = getElementAttrs(props)
  attrs.css = styledSystem(
    props.wheel.styledSystemConfig,
    props.wheel.theme,
    ncss
  )

  return jsx('li', attrs, props.children)
}

export const Ol = (props: ElementProps) => {
  const ncss = getNcss(props, 'ol')
  const attrs: any = getElementAttrs(props)
  attrs.css = styledSystem(
    props.wheel.styledSystemConfig,
    props.wheel.theme,
    ncss
  )
  return jsx('ol', attrs, props.children)
}

export const Ul = (props: ElementProps) => {
  const ncss = getNcss(props, 'ul')
  const attrs: any = getElementAttrs(props)
  attrs.css = styledSystem(
    props.wheel.styledSystemConfig,
    props.wheel.theme,
    ncss
  )
  return jsx('ul', attrs, props.children)
}

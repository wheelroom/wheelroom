import { Fragment } from 'react'
import React from 'react'
import { systemCss } from '../styled-system/system-css'
import { jsx } from '@emotion/core'

// This element wraps the landmark element specified in sections.jsx around each
// section. Not that the landmarks are added in a fixed order as shown in the
// Fragment below. As a consequence the order of the sections is bound to the
// order of the landmarks below.
//

export const Landmarks = (props: any) => {
  const landMarkedChildren = {
    aside: [],
    footer: [],
    header: [],
    main: [],
  } as any

  React.Children.forEach(props.children, child => {
    landMarkedChildren[child.props.landMark].push(child)
  })

  return (
    <Fragment>
      <header>{landMarkedChildren.header}</header>
      <main>{landMarkedChildren.main}</main>
      <aside>{landMarkedChildren.aside}</aside>
      <footer>{landMarkedChildren.footer}</footer>
    </Fragment>
  )
}

export const Landmark = (props: any) => {
  const label = 'Landmark-div'
  const css = systemCss({
    ncss: { label, boxSizing: 'border-box', ...props.ncss },
  })
  const attrs = {
    css,
  }
  return jsx('div', attrs, props.children)
}

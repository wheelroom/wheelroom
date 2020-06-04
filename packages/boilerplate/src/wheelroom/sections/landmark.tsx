import { jsx } from '@emotion/core'

export const getLandmark = (): string => {
  // TODO: @jacco – fix the getLandmark function
  // const info = getPageSectionInfo(pageProps)
  // if (
  //   info.index <= 1 &&
  //   (info.variation === 'hero' || info.variation === 'navigation')
  // ) {
  //   return 'header'
  // }
  // if (info.index === sectionCount - 1 && info.hasNavigationSegment) {
  //   return 'footer'
  // }
  return 'main'
}

export const Landmark = (props: {
  variation: string
  children: any
  key: number
}) => {
  const label = 'variation-' + props.variation || 'single'
  const dashedLabel = label.replace(' ', '-')
  const css = {
    label: dashedLabel,
    /** Render the `main` element consistently in IE. */
    display: 'block',
  }
  const attrs = {
    css,
  }
  return jsx('section', attrs, props.children)
}

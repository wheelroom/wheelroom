import { PageSectionProps } from '../../models/page-section/page-section'
import { getPageSectionInfo } from '../lib/get-page-section-info'
import { jsx } from '@emotion/core'

export const getLandmark = (
  pageProps: PageSectionProps,
  sectionCount: number
): string => {
  const info = getPageSectionInfo(pageProps)
  if (
    info.index <= 1 &&
    (info.variation === 'hero-wr' || info.variation === 'navigation-wr')
  ) {
    return 'header'
  }
  if (info.index === sectionCount - 1 && info.hasNavigation) {
    return 'footer'
  }

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

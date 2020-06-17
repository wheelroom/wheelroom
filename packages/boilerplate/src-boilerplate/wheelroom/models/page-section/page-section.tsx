/**
 * Component
 *
 * Component type: pageSection
 *
 */

import React from 'react'
import { getVariation } from '../../lib/get-variation'
import { PageSectionBlockVar } from './page-section-block-var'
import { PageSectionCardVar } from './page-section-card-var'
import { PageSectionDividerVar } from './page-section-divider-var'
import { PageSectionFeaturedVar } from './page-section-featured-var'
import { PageSectionGalleryVar } from './page-section-gallery-var'
import { PageSectionHeadlineVar } from './page-section-headline-var'
import { PageSectionHeroVar } from './page-section-hero-var'
import { PageSectionImageVar } from './page-section-image-var'
import { PageSectionProps } from './model-types'
import { PageSectionQuoteVar } from './page-section-quote-var'
import { PageSectionShowcaseVar } from './page-section-showcase-var'
import { PageSectionVideoVar } from './page-section-video-var'

const componentList = {
  ['block']: PageSectionBlockVar,
  ['card']: PageSectionCardVar,
  ['divider']: PageSectionDividerVar,
  ['featured']: PageSectionFeaturedVar,
  ['gallery']: PageSectionGalleryVar,
  ['headline']: PageSectionHeadlineVar,
  ['hero']: PageSectionHeroVar,
  ['image']: PageSectionImageVar,
  ['quote']: PageSectionQuoteVar,
  ['showcase']: PageSectionShowcaseVar,
  ['video']: PageSectionVideoVar,
}

export const PageSection = (props: PageSectionProps) => {
  const Variation = getVariation(props, componentList)

  return <Variation {...props} />
}

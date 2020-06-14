import { Wheel, StyledSystemTheme } from '../wheelroom'
import { ThemeId } from '../admin-resources/theme-info'
import { elementStyles } from './glacier/elements/element-styles'
import { styledSystemConfig } from './glacier/styled-system/styled-system-config'
import { glacierDark } from './glacier/glacier-dark'
import { glacierLight } from './glacier/glacier-light'
import { pageSectionBlockStyle } from './glacier/models/page-section-block-style'
import {
  pageSectionCardShadowStyle,
  pageSectionCardStyle,
} from './glacier/models/page-section-card-style'
import { navigationSectionFooterStyle } from './glacier/models/navigation-section-footer-style'
import { navigationSectionHeaderStyle } from './glacier/models/navigation-section-header-style'
import { textSectionTextStyle } from './glacier/models/text-section-text-style'
import { pageSectionDividerStyle } from './glacier/models/page-section-divider-style'
import {
  pageSectionFeaturedStyle,
  pageSectionFeaturedReverseStyle,
} from './glacier/models/page-section-featured-style'
import { pageSectionGalleryStyle } from './glacier/models/page-section-gallery-style'
import { pageSectionHeadlineStyle } from './glacier/models/page-section-headline-style'
import { pageSectionHeroStyle } from './glacier/models/page-section-hero-style'
import { pageSectionImageStyle } from './glacier/models/page-section-image-style'
import { pageSectionQuoteStyle } from './glacier/models/page-section-quote-style'
import { pageSectionShowcaseStyle } from './glacier/models/page-section-showcase-style'
import { pageSectionVideoStyle } from './glacier/models/page-section-video-style'

import { blogSectionBlogStyle } from './glacier/models/blog-section-blog-style'
import { blogSectionListStyle } from './glacier/models/blog-section-list-style'
import { tableSectionTableStyle } from './glacier/models/table-section-table-style'
import { tableSectionPriceStyle } from './glacier/models/table-section-price-style'

export type sectionId =
  | 'blogSection'
  | 'navigationSection'
  | 'pageSection'
  | 'tableSection'
  | 'textSection'

const themeMap = {
  dark: glacierDark,
  light: glacierLight,
}

const sectionStyleMap = {
  blogSection: {
    blog: blogSectionBlogStyle,
    list: blogSectionListStyle,
  },
  navigationSection: {
    header: navigationSectionHeaderStyle,
    footer: navigationSectionFooterStyle,
  },
  pageSection: {
    block: pageSectionBlockStyle,
    card: pageSectionCardStyle,
    cardShadow: pageSectionCardShadowStyle,
    divider: pageSectionDividerStyle,
    featured: pageSectionFeaturedStyle,
    featuredReversed: pageSectionFeaturedReverseStyle,
    gallery: pageSectionGalleryStyle,
    headline: pageSectionHeadlineStyle,
    hero: pageSectionHeroStyle,
    image: pageSectionImageStyle,
    quote: pageSectionQuoteStyle,
    showcase: pageSectionShowcaseStyle,
    video: pageSectionVideoStyle,
  },
  tableSection: {
    table: tableSectionTableStyle,
    price: tableSectionPriceStyle,
  },
  textSection: {
    text: textSectionTextStyle,
  },
}

export const getTheme = (activeThemeId: ThemeId): StyledSystemTheme => {
  if (!activeThemeId) {
    return themeMap.light
  }
  return themeMap[activeThemeId]
}

export const getWheel = (activeThemeId: ThemeId): Wheel => {
  return {
    style: undefined,
    elementStyles,
    theme: getTheme(activeThemeId),
    styledSystemConfig,
  }
}

export const getSectionStyle = (sectionId: sectionId): any => {
  return sectionStyleMap[sectionId]
}

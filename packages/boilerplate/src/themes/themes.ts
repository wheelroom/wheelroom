import { Wheel, StyledSystemTheme } from '../wheelroom'
import { ThemeId } from '../admin-resources/theme-info'
import { elementStyles } from './yosemite/elements/element-styles'
import { styledSystemConfig } from './yosemite/styled-system/styled-system-config'
import { yosemiteDark } from './yosemite/yosemite-dark'
import { yosemiteLight } from './yosemite/yosemite-light'
import { sectionBlockStyle } from './yosemite/sections/section-block-style'
import {
  sectionCardShadowStyle,
  sectionCardStyle,
} from './yosemite/sections/section-card-style'
import { navigationFooterStyle } from './yosemite/sections/nav-footer-style'
import { navigationHeaderStyle } from './yosemite/sections/nav-header-style'
import { sectionTextStyle } from './yosemite/sections/section-text-style'
import { sectionDividerStyle } from './yosemite/sections/section-divider-style'
import {
  sectionFeaturedStyle,
  sectionFeaturedReverseStyle,
} from './yosemite/sections/section-featured-style'
import { sectionGalleryStyle } from './yosemite/sections/section-gallery-style'
import { sectionHeadlineStyle } from './yosemite/sections/section-headline-style'
import { sectionHeroStyle } from './yosemite/sections/section-hero-style'
import { sectionImageStyle } from './yosemite/sections/section-image-style'
import { sectionQuoteStyle } from './yosemite/sections/section-quote-style'
import { sectionShowcaseStyle } from './yosemite/sections/section-showcase-style'
import { sectionVideoStyle } from './yosemite/sections/section-video-style'

import { sectionTableStyle } from './yosemite/sections/section-table-style'
import { blogSectionBlogStyle } from './yosemite/sections/blog-section-blog-style'
import { blogSectionListStyle } from './yosemite/sections/blog-section-list-style'

export type sectionId =
  | 'block'
  | 'blog'
  | 'blogList'
  | 'card'
  | 'divider'
  | 'featured'
  | 'gallery'
  | 'headline'
  | 'hero'
  | 'image'
  | 'navigation'
  | 'table'
  | 'quote'
  | 'showcase'
  | 'text'
  | 'video'

const themeMap = {
  light: yosemiteLight,
  dark: yosemiteDark,
}

const sectionStyleMap = {
  block: {
    base: sectionBlockStyle,
  },
  blog: {
    base: blogSectionBlogStyle,
  },
  blogList: {
    base: blogSectionListStyle,
  },
  card: {
    base: sectionCardStyle,
    shadow: sectionCardShadowStyle,
  },
  divider: {
    base: sectionDividerStyle,
  },
  featured: {
    base: sectionFeaturedStyle,
    reversed: sectionFeaturedReverseStyle,
  },
  gallery: {
    base: sectionGalleryStyle,
  },
  headline: {
    base: sectionHeadlineStyle,
  },
  hero: {
    base: sectionHeroStyle,
  },
  image: {
    base: sectionImageStyle,
  },
  navigation: {
    header: navigationHeaderStyle,
    footer: navigationFooterStyle,
  },
  table: {
    base: sectionTableStyle,
  },
  quote: {
    base: sectionQuoteStyle,
  },
  showcase: {
    base: sectionShowcaseStyle,
  },
  text: {
    base: sectionTextStyle,
  },
  video: {
    base: sectionVideoStyle,
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

import { SectionWheelThemeStyles } from '../../../../src-core'
import { blogSectionBlogStyle } from './blog/blog-style'
import { blogSectionListStyle } from './blog/list-style'
import { navigationSectionHeaderStyle } from './navigation/header-style'
import { navigationSectionFooterStyle } from './navigation/footer-style'
import { topicSectionBlockStyle } from './topic/block-style'
import { topicSectionCardStyle } from './topic/card-style'
import { topicSectionDividerStyle } from './topic/divider-style'
import { topicSectionFeaturedStyle } from './topic/featured-style'
import { topicSectionGalleryStyle } from './topic/gallery-style'
import { topicSectionHeadlineStyle } from './topic/headline-style'
import { topicSectionHeroStyle } from './topic/hero-style'
import { topicSectionImageStyle } from './topic/image-style'
import { topicSectionQuoteStyle } from './topic/quote-style'
import { topicSectionShowcaseStyle } from './topic/showcase-style'
import { topicSectionVideoStyle } from './topic/video-style'

export const styles: SectionWheelThemeStyles = {
  blogSection: {
    blog: blogSectionBlogStyle,
    list: blogSectionListStyle,
  },
  navigationSection: {
    header: navigationSectionHeaderStyle,
    footer: navigationSectionFooterStyle,
  },
  topicSection: {
    block: topicSectionBlockStyle,
    card: topicSectionCardStyle,
    divider: topicSectionDividerStyle,
    feature: topicSectionFeaturedStyle,
    gallery: topicSectionGalleryStyle,
    headline: topicSectionHeadlineStyle,
    hero: topicSectionHeroStyle,
    image: topicSectionImageStyle,
    quote: topicSectionQuoteStyle,
    showcase: topicSectionShowcaseStyle,
    video: topicSectionVideoStyle,
  },
}

import { SectionWheelThemeStyles, deepMerge } from '../../../../src-core'
import {
  navigationHeaderPreset,
  navigationFooterPreset,
} from '../../../../src-navigation-wheel'
import { blogSectionBlogStyle } from './blog/blog-style'
import { blogSectionListStyle } from './blog/list-style'
import { navigationSectionHeaderStyle } from './navigation/header-style'
import { navigationSectionFooterStyle } from './navigation/footer-style'
import { topicSectionBlockStyle } from './topic/topic-section/block-style'
import { topicSectionCardStyle } from './topic/topic-section/card-style'
import { topicSectionDividerStyle } from './topic/topic-section/divider-style'
import { topicSectionFeaturedStyle } from './topic/topic-section/featured-style'
import { topicSectionGalleryStyle } from './topic/topic-section/gallery-style'
import { topicSectionHeadlineStyle } from './topic/topic-section/headline-style'
import { topicSectionHeroStyle } from './topic/topic-section/hero-style'
import { topicSectionImageStyle } from './topic/topic-section/image-style'
import { topicSectionQuoteStyle } from './topic/topic-section/quote-style'
import { topicSectionShowcaseStyle } from './topic/topic-section/showcase-style'
import { topicSectionVideoStyle } from './topic/topic-section/video-style'
import { topicStyle } from './topic/topic/topic-style'

const mergeTopic = (style: any) => deepMerge([{ topic: topicStyle }, style])

export const styles: SectionWheelThemeStyles = {
  blogSection: {
    blog: blogSectionBlogStyle,
    list: blogSectionListStyle,
  },
  navigationSection: {
    header: deepMerge([navigationHeaderPreset, navigationSectionHeaderStyle]),
    footer: deepMerge([navigationFooterPreset, navigationSectionFooterStyle]),
  },
  topicSection: {
    block: mergeTopic(topicSectionBlockStyle),
    card: mergeTopic(topicSectionCardStyle),
    divider: mergeTopic(topicSectionDividerStyle),
    featured: mergeTopic(topicSectionFeaturedStyle),
    gallery: mergeTopic(topicSectionGalleryStyle),
    headline: mergeTopic(topicSectionHeadlineStyle),
    hero: mergeTopic(topicSectionHeroStyle),
    image: mergeTopic(topicSectionImageStyle),
    quote: mergeTopic(topicSectionQuoteStyle),
    showcase: mergeTopic(topicSectionShowcaseStyle),
    video: mergeTopic(topicSectionVideoStyle),
  },
}

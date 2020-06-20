import { SectionWheelThemeStyles, deepMerge } from '../../../../src-core'
import { topicPreset } from '../../../../src-topic-wheel/models/topic/presets/topic-preset'
import {
  navigationHeaderPreset,
  navigationFooterPreset,
} from '../../../../src-navigation-wheel'
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

const mergeTopic = (style: any) => deepMerge([{ topic: topicPreset }, style])

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

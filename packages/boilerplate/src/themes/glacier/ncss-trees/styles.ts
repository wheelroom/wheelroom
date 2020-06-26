import { SectionWheelThemeStyles, deepMerge } from '../../../../src-core'
import { blogSectionBlogNcssTree } from './blog/blog-tree'
import { blogSectionListNcssTree } from './blog/list-tree'
import { navigationSectionHeaderNcssTree } from './navigation/navigation-section/header-tree'
import { navigationSectionFooterNcssTree } from './navigation/navigation-section/footer-tree'
import { topicSectionBlockNcssTree } from './topic/topic-section/block-style'
import { topicSectionCardNcssTree } from './topic/topic-section/card-style'
import { topicSectionDividerNcssTree } from './topic/topic-section/divider-style'
import { topicSectionFeaturedNcssTree } from './topic/topic-section/featured-style'
import { topicSectionGalleryNcssTree } from './topic/topic-section/gallery-style'
import { topicSectionHeadlineNcssTree } from './topic/topic-section/headline-style'
import { topicSectionHeroNcssTree } from './topic/topic-section/hero-style'
import { topicSectionImageNcssTree } from './topic/topic-section/image-style'
import { topicSectionQuoteNcssTree } from './topic/topic-section/quote-style'
import { topicSectionShowcaseNcssTree } from './topic/topic-section/showcase-style'
import { topicSectionVideoNcssTree } from './topic/topic-section/video-style'
import { topicNcssTree } from './topic/topic/topic-style'
import { textSectionTextNcssTree } from './text/text-tree'
import { tableSectionTableNcssTree } from './table/table-tree'
import { tableSectionPriceNcssTree } from './table/price-tree'

const mergeTopic = (style: any) => deepMerge([{ topic: topicNcssTree }, style])

export const styles: SectionWheelThemeStyles = {
  blogSection: {
    blog: blogSectionBlogNcssTree,
    list: blogSectionListNcssTree,
  },
  navigationSection: {
    header: navigationSectionHeaderNcssTree,
    footer: navigationSectionFooterNcssTree,
  },
  tableSection: {
    table: tableSectionTableNcssTree,
    price: tableSectionPriceNcssTree,
  },
  textSection: {
    text: textSectionTextNcssTree,
  },
  topicSection: {
    block: mergeTopic(topicSectionBlockNcssTree),
    card: mergeTopic(topicSectionCardNcssTree),
    divider: mergeTopic(topicSectionDividerNcssTree),
    featured: mergeTopic(topicSectionFeaturedNcssTree),
    gallery: mergeTopic(topicSectionGalleryNcssTree),
    headline: mergeTopic(topicSectionHeadlineNcssTree),
    hero: mergeTopic(topicSectionHeroNcssTree),
    image: mergeTopic(topicSectionImageNcssTree),
    quote: mergeTopic(topicSectionQuoteNcssTree),
    showcase: mergeTopic(topicSectionShowcaseNcssTree),
    video: mergeTopic(topicSectionVideoNcssTree),
  },
}

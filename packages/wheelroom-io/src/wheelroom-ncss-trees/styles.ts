import { SectionWheelThemeStyles, deepMerge } from '@wheelroom/core'
import { blogSectionBlogNcssTree } from './blog/blog-ncss-tree'
import { blogSectionListNcssTree } from './blog/list-ncss-tree'
import { tomStaalSectionImageActionNcssTree } from './tom-staal/tom-staal-section/image-action-ncss-tree'
import { tomStaalSectionCarouselNcssTree } from './tom-staal/tom-staal-section/carousel-ncss-tree'
import { docsSectionDocsNcssTree } from './docs/docs-ncss-tree'
import { navigationSectionFooterNcssTree } from './navigation/navigation-section/footer-ncss-tree'
import { navigationSectionHeaderNcssTree } from './navigation/navigation-section/header-ncss-tree'
import { navigationSectionSitemapNcssTree } from './navigation/navigation-section/sitemap-ncss-tree'
import { tableSectionPriceNcssTree } from './table/price-ncss-tree'
import { tableSectionTableNcssTree } from './table/table-ncss-tree'
import { textSectionTextNcssTree } from './text/text-ncss-tree'
import { topicNcssTree } from './topic/topic/topic-ncss-tree'
import { topicSectionBlockNcssTree } from './topic/topic-section/block-ncss-tree'
import { topicSectionCardNcssTree } from './topic/topic-section/card-ncss-tree'
import { topicSectionDividerNcssNode } from './topic/topic-section/divider-ncss'
import { topicSectionFeaturedNcssTree } from './topic/topic-section/featured-ncss-tree'
import { topicSectionGalleryNcssTree } from './topic/topic-section/gallery-ncss-tree'
import { topicSectionHeadlineNcssTree } from './topic/topic-section/headline-ncss-tree'
import { topicSectionHeroNcssTree } from './topic/topic-section/hero-ncss-tree'
import { topicSectionImageNcssTree } from './topic/topic-section/image-ncss-tree'
import { topicSectionQuoteNcssTree } from './topic/topic-section/quote-ncss-tree'
import { topicSectionShowcaseNcssTree } from './topic/topic-section/showcase-ncss-tree'
import { topicSectionVideoNcssTree } from './topic/topic-section/video-ncss-tree'

const mergeTopic = (style: any) => deepMerge([{ topic: topicNcssTree }, style])

export const styles: SectionWheelThemeStyles = {
  blogSection: {
    blog: blogSectionBlogNcssTree,
    list: blogSectionListNcssTree,
  },
  tomStaalSection: {
    carousel: mergeTopic(tomStaalSectionCarouselNcssTree),
    imageAction: mergeTopic(tomStaalSectionImageActionNcssTree),
  },
  docsSection: {
    docs: docsSectionDocsNcssTree,
  },
  navigationSection: {
    header: navigationSectionHeaderNcssTree,
    footer: navigationSectionFooterNcssTree,
    sitemap: navigationSectionSitemapNcssTree,
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
    divider: topicSectionDividerNcssNode,
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

// These constants are ID's and used within the Contentful (editor) UI

import { ArticleSectionInlineVar } from './article-section-inline-var'
import { ArticleSectionLinkedVar } from './article-section-linked-var'

export const variations = {
  'Inline article text, specific to this section': ArticleSectionInlineVar,
  'Linked article text, derived from slug in url': ArticleSectionLinkedVar,
}

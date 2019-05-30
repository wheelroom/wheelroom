// These constants are ID's and used within the Contentful (editor) UI

import { ArticleSectionInline } from './article-section-inline'
import { ArticleSectionLinked } from './article-section-linked'

export const variations = {
  'Inline article text, specific to this section': ArticleSectionInline,
  'Linked article text, derived from slug in url': ArticleSectionLinked,
}

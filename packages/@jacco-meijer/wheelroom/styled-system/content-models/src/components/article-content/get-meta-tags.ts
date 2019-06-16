import { SeoContentTypeInfo } from '../../lib/types/seo'

export const getArticleImage = (article: any) => {
  if (!article) {
    return
  }
  if (!article.image) {
    return
  }
  return article.image.fluid.src
}

export const getSeoContentTypeInfo = (
  page: any,
  article: any
): SeoContentTypeInfo | null => {
  const info = {} as SeoContentTypeInfo
  if (!article) {
    return null
  }

  // Do we have an article?
  if (page.pathName === 'article') {
    info.type = 'article'
    info.tags = {
      author: article.author,
      // expiration_time: '',
      modified_time: article.updatedAt,
      published_time: article.createdAt,
      section: 'Technology',
      // tag: '',
    }
    return info
  }

  return info
}

import { SeoContentTypeInfo } from '../../../types/seo'

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
): SeoContentTypeInfo => {
  const noInfo = {
    type: 'none',
  } as SeoContentTypeInfo
  if (!article) {
    return noInfo
  }

  // Do we have an article?
  if (page.pathName === 'article') {
    return {
      tags: {
        author: article.author,
        modified_time: article.updatedAt,
        published_time: article.createdAt,
        section: 'Technology',
        // expiration_time: '',
        // tag: '',
      },
      type: 'article',
    } as SeoContentTypeInfo
  }

  return noInfo
}

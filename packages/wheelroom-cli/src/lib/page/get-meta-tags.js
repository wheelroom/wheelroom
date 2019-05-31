// In order to supply an image tag for a page, find the image associated with
// the opener section of the page.

export const getPageImage = page => {
  for (let i = 0; i < page.sections.length; i++) {
    const section = page.sections[i]
    if (section.__typename === 'ContentfulSectionOpener') {
      if (!section.image) return
      return section.image.fluid.src
    }
  }
}

export const getArticleImage = article => {
  if (!article.image) return
  return article.image.fluid.src
}

export const getPageTypeInfo = (page, article) => {
  let info = {}

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

  // Do we have a profile page?
  if (page.pathName === 'profile') {
    info.type = 'profile'
    info.tags = {
      first_name: 'Jacco',
      last_name: 'Meijer',
      username: 'jaccomeijer',
      gender: 'male',
    }
    return info
  }
}

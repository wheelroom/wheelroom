export const expectCallWriteFiles = {
  dryRun: true,
  fileList: [
    {
      basePath: 'test-output',
      content:
        '/**\n* Graphql fragment definition\n*\n*\n*/\n\nexport const fragment = `\nfragment Article on ContentfulArticle {\n  __typename\n  articleText {\n    articleText\n  }\n  author\n  createdAt\n  date\n  heading\n  image {\n    title\n    description\n    fluid(maxWidth: 1024) {\n      sizes\n      src\n      srcSet\n    }\n  }\n  slug\n  subHeading\n  title\n  updatedAt\n}\n`',
      relPath: 'article-fragment.js',
    },
    {
      basePath: 'test-output',
      content:
        '/**\n* Graphql fragment definition\n*\n*\n*/\n\nexport const fragment = `\nfragment ArticleSection on ContentfulArticleSection {\n  __typename\n  articleText\n  title\n  variation\n}\n`',
      relPath: 'article-section-fragment.js',
    },
    {
      basePath: 'test-output',
      content:
        '/**\n* Graphql fragment definition\n*\n*\n*/\n\nexport const fragment = `\nfragment ArticlesSection on ContentfulArticlesSection {\n  __typename\n  articles {\n    ... on Node {\n      ...Article\n    }\n  }\n  heading\n  maxArticles\n  title\n}\n`',
      relPath: 'articles-section-fragment.js',
    },
    {
      basePath: 'test-output',
      content:
        '/**\n* Graphql fragment definition\n*\n*\n*/\n\nexport const fragment = `\nfragment ExamplePart on ContentfulExamplePart {\n  __typename\n  someText\n  title\n}\n`',
      relPath: 'example-part-fragment.js',
    },
    {
      basePath: 'test-output',
      content:
        '/**\n* Graphql fragment definition\n*\n*\n*/\n\nexport const fragment = `\nfragment Globals on ContentfulGlobals {\n  __typename\n  addressLine1\n  addressLine2\n  emailAddress\n  githubUrl\n  heading\n  linkedinUrl\n  phoneNumber\n  siteAuthor\n  siteDescription\n  siteKeywords\n  siteTitle\n  title\n}\n`',
      relPath: 'globals-fragment.js',
    },
    {
      basePath: 'test-output',
      content:
        '/**\n* Graphql fragment definition\n*\n*\n*/\n\nexport const fragment = `\nfragment Page on ContentfulPage {\n  __typename\n  image {\n    title\n    description\n    fluid(maxWidth: 1024) {\n      sizes\n      src\n      srcSet\n    }\n  }\n  navigationTitle\n  sections {\n    ... on Node {\n      ...ArticleSection\n      ...ArticlesSection\n    }\n  }\n  seoDescription\n  seoTitle\n  title\n}\n`',
      relPath: 'page-fragment.js',
    },
    {
      basePath: 'test-output',
      content:
        "/**\n* Graphql query definition\n*\n* Query type: subPage\n*\n*/\n\nexport const type = 'subPage'\nexport const query = `\n{\n  article: allContentfulArticle(limit: 10) {\n    edges {\n      node {\n        id\n        node_locale\n        slug\n      }\n    }\n  }\n}\n`",
      relPath: 'article-query.js',
    },
    {
      basePath: 'test-output',
      content:
        "/**\n* Graphql query definition\n*\n* Query type: global\n*\n*/\n\nexport const type = 'global'\nexport const query = `\n{\n  globals: allContentfulGlobals {\n    edges {\n      node {\n        id\n        node_locale\n      }\n    }\n  }\n}\n`",
      relPath: 'globals-query.js',
    },
    {
      basePath: 'test-output',
      content:
        "/**\n* Graphql query definition\n*\n* Query type: page\n*\n*/\n\nexport const type = 'page'\nexport const query = `\n{\n  page: allContentfulPage {\n    edges {\n      node {\n        id\n        node_locale\n        path\n        pathName\n      }\n    }\n  }\n}\n`",
      relPath: 'page-query.js',
    },
  ],
  yes: true,
}

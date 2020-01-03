export const writeFilesOutput = {
  dryRun: true,
  fileList: [
    {
      basePath: 'dist/test-output',
      content:
        '/**\n* Graphql definitions\n*\n* Component: article\n*\n*/\n\nexport const fragment = `\nfragment article on Contentfularticle {\n  __typename\n  articleText\n  author\n  createdAt\n  date\n  heading\n  image\n  slug\n  subHeading\n  title\n  updatedAt\n}\n`',
      relPath: 'article-fragment.js',
    },
    {
      basePath: 'dist/test-output',
      content:
        '/**\n* Graphql definitions\n*\n* Component: article\n*\n*/\n\nexport const query = `\n{\n  firstName\n  lastName\n}\n`',
      relPath: 'article-query.js',
    },
    {
      basePath: 'dist/test-output',
      content:
        '/**\n* Graphql definitions\n*\n* Component: articleSection\n*\n*/\n\nexport const fragment = `\nfragment article-section on Contentfularticle-section {\n  __typename\n  articleText\n  title\n  variation\n}\n`',
      relPath: 'article-section-fragment.js',
    },
    {
      basePath: 'dist/test-output',
      content:
        '/**\n* Graphql definitions\n*\n* Component: articleSection\n*\n*/\n\nexport const query = `\n{\n  firstName\n  lastName\n}\n`',
      relPath: 'article-section-query.js',
    },
    {
      basePath: 'dist/test-output',
      content:
        '/**\n* Graphql definitions\n*\n* Component: articlesSection\n*\n*/\n\nexport const fragment = `\nfragment articles-section on Contentfularticles-section {\n  __typename\n  articles\n  heading\n  maxArticles\n  title\n}\n`',
      relPath: 'articles-section-fragment.js',
    },
    {
      basePath: 'dist/test-output',
      content:
        '/**\n* Graphql definitions\n*\n* Component: articlesSection\n*\n*/\n\nexport const query = `\n{\n  firstName\n  lastName\n}\n`',
      relPath: 'articles-section-query.js',
    },
    {
      basePath: 'dist/test-output',
      content:
        '/**\n* Graphql definitions\n*\n* Component: exampleBlock\n*\n*/\n\nexport const fragment = `\nfragment example-block on Contentfulexample-block {\n  __typename\n  someText\n  title\n}\n`',
      relPath: 'example-block-fragment.js',
    },
    {
      basePath: 'dist/test-output',
      content:
        '/**\n* Graphql definitions\n*\n* Component: exampleBlock\n*\n*/\n\nexport const query = `\n{\n  firstName\n  lastName\n}\n`',
      relPath: 'example-block-query.js',
    },
    {
      basePath: 'dist/test-output',
      content:
        '/**\n* Graphql definitions\n*\n* Component: examplePart\n*\n*/\n\nexport const fragment = `\nfragment example-part on Contentfulexample-part {\n  __typename\n  someText\n  title\n}\n`',
      relPath: 'example-part-fragment.js',
    },
    {
      basePath: 'dist/test-output',
      content:
        '/**\n* Graphql definitions\n*\n* Component: examplePart\n*\n*/\n\nexport const query = `\n{\n  firstName\n  lastName\n}\n`',
      relPath: 'example-part-query.js',
    },
    {
      basePath: 'dist/test-output',
      content:
        '/**\n* Graphql definitions\n*\n* Component: globals\n*\n*/\n\nexport const fragment = `\nfragment globals on Contentfulglobals {\n  __typename\n  addressLine1\n  addressLine2\n  emailAddress\n  githubUrl\n  heading\n  linkedinUrl\n  phoneNumber\n  siteAuthor\n  siteDescription\n  siteKeywords\n  siteTitle\n  title\n}\n`',
      relPath: 'globals-fragment.js',
    },
    {
      basePath: 'dist/test-output',
      content:
        '/**\n* Graphql definitions\n*\n* Component: globals\n*\n*/\n\nexport const query = `\n{\n  firstName\n  lastName\n}\n`',
      relPath: 'globals-query.js',
    },
    {
      basePath: 'dist/test-output',
      content:
        '/**\n* Graphql definitions\n*\n* Component: page\n*\n*/\n\nexport const fragment = `\nfragment page on Contentfulpage {\n  __typename\n  image\n  navigationTitle\n  sections\n  seoDescription\n  seoTitle\n  title\n}\n`',
      relPath: 'page-fragment.js',
    },
    {
      basePath: 'dist/test-output',
      content:
        '/**\n* Graphql definitions\n*\n* Component: page\n*\n*/\n\nexport const query = `\n{\n  firstName\n  lastName\n}\n`',
      relPath: 'page-query.js',
    },
  ],
  yes: true,
}

export const expectCallWriteFiles = {
  dryRun: true,
  fileList: [
    {
      basePath: 'test-output',
      content:
        "/**\n * Component\n *\n * Component type: article\n *\n */\n\nimport { getVariation } from '@jacco-meijer/content-models'\nimport React from 'react'\nimport { SectionProps } from '../section-props'\nimport { FluidImage } from './src/views/image/image'\nimport { ArticleSingleVar } from './article-single-var'\n\nconst componentList = {\n  ['single']: ArticleSingleVar,\n}\n\nexport interface ArticleProps extends SectionProps {\n  /** Gatsby fetched data */\n  __typename: string\n  articleText: {\n    articleText: string\n  }\n  author: string\n  createdAt: string\n  date: string\n  heading: string\n  image: FluidImage\n  slug: string\n  subHeading: string\n  title: string\n  updatedAt: string\n}\n\nexport const Article = (props: ArticleProps) => {\n  const Variation = getVariation(props, componentList)\n\n  return <Variation {...props} />\n}\n",
      relPath: 'article/article.tsx',
    },
    {
      basePath: 'test-output',
      content:
        "/**\n * Component variation\n *\n * Component type: article\n * Variation: single\n *\n */\n\nimport React from 'react'\n\nimport { ArticleProps } from './article'\n\nexport const ArticleSingleVar = (props: ArticleProps) => {\n  return (\n    <div>\n      <h2>ArticleSingleVar</h2>\n      <p>Hello world</p>\n    </div>\n  )\n}\n",
      relPath: 'article/article-single-var.tsx',
    },
    {
      basePath: 'test-output',
      content:
        "/**\n * Component index\n *\n * Component type: article\n *\n */\n\nexport * from './article'\n",
      relPath: 'article/index.ts',
    },
    {
      basePath: 'test-output',
      content:
        "# Article\n\n```jsx\nimport { Article } from './article'\n<Article %componentFields% />\n```\n",
      relPath: 'article/README.md',
    },
    {
      basePath: 'test-output',
      content:
        "/**\n * Component\n *\n * Component type: articleSection\n *\n */\n\nimport { getVariation } from '@jacco-meijer/content-models'\nimport React from 'react'\nimport { SectionProps } from '../section-props'\nimport { FluidImage } from './src/views/image/image'\nimport { ArticleSectionSpecificToThisSectionVar } from './article-section-specific-to-this-section-var'\nimport { ArticleSectionDerivedFromSlugInUrlVar } from './article-section-derived-from-slug-in-url-var'\n\nconst componentList = {\n  ['Specific to this section']: ArticleSectionSpecificToThisSectionVar,\n  ['Derived from slug in url']: ArticleSectionDerivedFromSlugInUrlVar,\n}\n\nexport interface ArticleSectionProps extends SectionProps {\n  /** Gatsby fetched data */\n  __typename: string\n  articleText: string\n  title: string\n  variation: string\n}\n\nexport const ArticleSection = (props: ArticleSectionProps) => {\n  const Variation = getVariation(props, componentList)\n\n  return <Variation {...props} />\n}\n",
      relPath: 'article-section/article-section.tsx',
    },
    {
      basePath: 'test-output',
      content:
        "/**\n * Component variation\n *\n * Component type: articleSection\n * Variation: specificToThisSection\n *\n */\n\nimport React from 'react'\n\nimport { ArticleSectionProps } from './article-section'\n\nexport const ArticleSectionSpecificToThisSectionVar = (props: ArticleSectionProps) => {\n  return (\n    <div>\n      <h2>ArticleSectionSpecificToThisSectionVar</h2>\n      <p>Hello world</p>\n    </div>\n  )\n}\n",
      relPath:
        'article-section/article-section-specific-to-this-section-var.tsx',
    },
    {
      basePath: 'test-output',
      content:
        "/**\n * Component variation\n *\n * Component type: articleSection\n * Variation: derivedFromSlugInUrl\n *\n */\n\nimport React from 'react'\n\nimport { ArticleSectionProps } from './article-section'\n\nexport const ArticleSectionDerivedFromSlugInUrlVar = (props: ArticleSectionProps) => {\n  return (\n    <div>\n      <h2>ArticleSectionDerivedFromSlugInUrlVar</h2>\n      <p>Hello world</p>\n    </div>\n  )\n}\n",
      relPath:
        'article-section/article-section-derived-from-slug-in-url-var.tsx',
    },
    {
      basePath: 'test-output',
      content:
        "/**\n * Component index\n *\n * Component type: articleSection\n *\n */\n\nexport * from './article-section'\n",
      relPath: 'article-section/index.ts',
    },
    {
      basePath: 'test-output',
      content:
        "# Article section\n\n```jsx\nimport { ArticleSection } from './article-section'\n<ArticleSection %componentFields% />\n```\n",
      relPath: 'article-section/README.md',
    },
    {
      basePath: 'test-output',
      content:
        "/**\n * Component\n *\n * Component type: articlesSection\n *\n */\n\nimport { getVariation } from '@jacco-meijer/content-models'\nimport React from 'react'\nimport { SectionProps } from '../section-props'\nimport { FluidImage } from './src/views/image/image'\nimport { ArticlesSectionSingleVar } from './articles-section-single-var'\n\nconst componentList = {\n  ['single']: ArticlesSectionSingleVar,\n}\n\nexport interface ArticlesSectionProps extends SectionProps {\n  /** Gatsby fetched data */\n  __typename: string\n  articles: any\n  heading: string\n  maxArticles: number\n  title: string\n}\n\nexport const ArticlesSection = (props: ArticlesSectionProps) => {\n  const Variation = getVariation(props, componentList)\n\n  return <Variation {...props} />\n}\n",
      relPath: 'articles-section/articles-section.tsx',
    },
    {
      basePath: 'test-output',
      content:
        "/**\n * Component variation\n *\n * Component type: articlesSection\n * Variation: single\n *\n */\n\nimport React from 'react'\n\nimport { ArticlesSectionProps } from './articles-section'\n\nexport const ArticlesSectionSingleVar = (props: ArticlesSectionProps) => {\n  return (\n    <div>\n      <h2>ArticlesSectionSingleVar</h2>\n      <p>Hello world</p>\n    </div>\n  )\n}\n",
      relPath: 'articles-section/articles-section-single-var.tsx',
    },
    {
      basePath: 'test-output',
      content:
        "/**\n * Component index\n *\n * Component type: articlesSection\n *\n */\n\nexport * from './articles-section'\n",
      relPath: 'articles-section/index.ts',
    },
    {
      basePath: 'test-output',
      content:
        "# Articles section\n\n```jsx\nimport { ArticlesSection } from './articles-section'\n<ArticlesSection %componentFields% />\n```\n",
      relPath: 'articles-section/README.md',
    },
    {
      basePath: 'test-output',
      content:
        "/**\n * Component\n *\n * Component type: exampleBlock\n *\n */\n\nimport { getVariation } from '@jacco-meijer/content-models'\nimport React from 'react'\nimport { SectionProps } from '../section-props'\nimport { FluidImage } from './src/views/image/image'\nimport { ExampleBlockSingleVar } from './example-block-single-var'\n\nconst componentList = {\n  ['single']: ExampleBlockSingleVar,\n}\n\nexport interface ExampleBlockProps extends SectionProps {\n  /** Gatsby fetched data */\n  __typename: string\n  someText: string\n  title: string\n}\n\nexport const ExampleBlock = (props: ExampleBlockProps) => {\n  const Variation = getVariation(props, componentList)\n\n  return <Variation {...props} />\n}\n",
      relPath: 'example-block/example-block.tsx',
    },
    {
      basePath: 'test-output',
      content:
        "/**\n * Component variation\n *\n * Component type: exampleBlock\n * Variation: single\n *\n */\n\nimport React from 'react'\n\nimport { ExampleBlockProps } from './example-block'\n\nexport const ExampleBlockSingleVar = (props: ExampleBlockProps) => {\n  return (\n    <div>\n      <h2>ExampleBlockSingleVar</h2>\n      <p>Hello world</p>\n    </div>\n  )\n}\n",
      relPath: 'example-block/example-block-single-var.tsx',
    },
    {
      basePath: 'test-output',
      content:
        "/**\n * Component index\n *\n * Component type: exampleBlock\n *\n */\n\nexport * from './example-block'\n",
      relPath: 'example-block/index.ts',
    },
    {
      basePath: 'test-output',
      content:
        "# Example block\n\n```jsx\nimport { ExampleBlock } from './example-block'\n<ExampleBlock %componentFields% />\n```\n",
      relPath: 'example-block/README.md',
    },
    {
      basePath: 'test-output',
      content:
        "/**\n * Component\n *\n * Component type: examplePart\n *\n */\n\nimport { getVariation } from '@jacco-meijer/content-models'\nimport React from 'react'\nimport { SectionProps } from '../section-props'\nimport { FluidImage } from './src/views/image/image'\nimport { ExamplePartSingleVar } from './example-part-single-var'\n\nconst componentList = {\n  ['single']: ExamplePartSingleVar,\n}\n\nexport interface ExamplePartProps extends SectionProps {\n  /** Gatsby fetched data */\n  __typename: string\n  someText: string\n  title: string\n}\n\nexport const ExamplePart = (props: ExamplePartProps) => {\n  const Variation = getVariation(props, componentList)\n\n  return <Variation {...props} />\n}\n",
      relPath: 'example-part/example-part.tsx',
    },
    {
      basePath: 'test-output',
      content:
        "/**\n * Component variation\n *\n * Component type: examplePart\n * Variation: single\n *\n */\n\nimport React from 'react'\n\nimport { ExamplePartProps } from './example-part'\n\nexport const ExamplePartSingleVar = (props: ExamplePartProps) => {\n  return (\n    <div>\n      <h2>ExamplePartSingleVar</h2>\n      <p>Hello world</p>\n    </div>\n  )\n}\n",
      relPath: 'example-part/example-part-single-var.tsx',
    },
    {
      basePath: 'test-output',
      content:
        "/**\n * Component index\n *\n * Component type: examplePart\n *\n */\n\nexport * from './example-part'\n",
      relPath: 'example-part/index.ts',
    },
    {
      basePath: 'test-output',
      content:
        "# Example part\n\n```jsx\nimport { ExamplePart } from './example-part'\n<ExamplePart %componentFields% />\n```\n",
      relPath: 'example-part/README.md',
    },
    {
      basePath: 'test-output',
      content:
        "/**\n * Component\n *\n * Component type: globals\n *\n */\n\nimport { getVariation } from '@jacco-meijer/content-models'\nimport React from 'react'\nimport { SectionProps } from '../section-props'\nimport { FluidImage } from './src/views/image/image'\nimport { GlobalsSingleVar } from './globals-single-var'\n\nconst componentList = {\n  ['single']: GlobalsSingleVar,\n}\n\nexport interface GlobalsProps extends SectionProps {\n  /** Gatsby fetched data */\n  __typename: string\n  addressLine1: string\n  addressLine2: string\n  emailAddress: string\n  githubUrl: string\n  heading: string\n  linkedinUrl: string\n  phoneNumber: string\n  siteAuthor: string\n  siteDescription: string\n  siteKeywords: string[]\n  siteTitle: string\n  title: string\n}\n\nexport const Globals = (props: GlobalsProps) => {\n  const Variation = getVariation(props, componentList)\n\n  return <Variation {...props} />\n}\n",
      relPath: 'globals/globals.tsx',
    },
    {
      basePath: 'test-output',
      content:
        "/**\n * Component variation\n *\n * Component type: globals\n * Variation: single\n *\n */\n\nimport React from 'react'\n\nimport { GlobalsProps } from './globals'\n\nexport const GlobalsSingleVar = (props: GlobalsProps) => {\n  return (\n    <div>\n      <h2>GlobalsSingleVar</h2>\n      <p>Hello world</p>\n    </div>\n  )\n}\n",
      relPath: 'globals/globals-single-var.tsx',
    },
    {
      basePath: 'test-output',
      content:
        "/**\n * Component index\n *\n * Component type: globals\n *\n */\n\nexport * from './globals'\n",
      relPath: 'globals/index.ts',
    },
    {
      basePath: 'test-output',
      content:
        "# Globals\n\n```jsx\nimport { Globals } from './globals'\n<Globals %componentFields% />\n```\n",
      relPath: 'globals/README.md',
    },
    {
      basePath: 'test-output',
      content:
        "/**\n * Component\n *\n * Component type: page\n *\n */\n\nimport { getVariation } from '@jacco-meijer/content-models'\nimport React from 'react'\nimport { SectionProps } from '../section-props'\nimport { FluidImage } from './src/views/image/image'\nimport { PageSingleVar } from './page-single-var'\n\nconst componentList = {\n  ['single']: PageSingleVar,\n}\n\nexport interface PageProps extends SectionProps {\n  /** Gatsby fetched data */\n  __typename: string\n  image: FluidImage\n  navigationTitle: string\n  sections: any\n  seoDescription: string\n  seoTitle: string\n  title: string\n}\n\nexport const Page = (props: PageProps) => {\n  const Variation = getVariation(props, componentList)\n\n  return <Variation {...props} />\n}\n",
      relPath: 'page/page.tsx',
    },
    {
      basePath: 'test-output',
      content:
        "/**\n * Component variation\n *\n * Component type: page\n * Variation: single\n *\n */\n\nimport React from 'react'\n\nimport { PageProps } from './page'\n\nexport const PageSingleVar = (props: PageProps) => {\n  return (\n    <div>\n      <h2>PageSingleVar</h2>\n      <p>Hello world</p>\n    </div>\n  )\n}\n",
      relPath: 'page/page-single-var.tsx',
    },
    {
      basePath: 'test-output',
      content:
        "/**\n * Component index\n *\n * Component type: page\n *\n */\n\nexport * from './page'\n",
      relPath: 'page/index.ts',
    },
    {
      basePath: 'test-output',
      content:
        "# Page\n\n```jsx\nimport { Page } from './page'\n<Page %componentFields% />\n```\n",
      relPath: 'page/README.md',
    },
  ],
  yes: true,
}

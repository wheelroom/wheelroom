export const writeFilesOutput = {
  dryRun: true,
  fileList: [
    {
      basePath: 'dist/test-output',
      content:
        "/**\n * Component variation\n *\n * Component type: article\n * Variation: %variation%\n *\n */\n\nimport React from 'react'\n\nimport { ArticleProps } from './article'\n\nexport const ArticleBasicVar = (props: ArticleProps) => {\n  return (\n    <div>\n      <h2>ArticleBasic</h2>\n      <p>Hello world</p>\n    </div>\n  )\n}\n",
      relPath: 'article/article-basic-var.tsx',
    },
    {
      basePath: 'dist/test-output',
      content:
        "/**\n * Component index\n *\n * Component type: article\n *\n */\n\nexport * from './article'\n",
      relPath: 'article/index.ts',
    },
    {
      basePath: 'dist/test-output',
      content:
        "# Article\n\n```jsx\nimport { Article } from './article'\n<Article %componentFields% />\n```\n",
      relPath: 'article/README.md',
    },
    {
      basePath: 'dist/test-output',
      content:
        "/**\n * Component\n *\n * Component type: article\n *\n */\n\nimport { getVariation } from '@jacco-meijer/content-models'\nimport React from 'react'\nimport { SectionProps } from '../section-props'\nimport ArticleBasicVar from './article-basic-var'\nimport { FluidImage } from './src/views/image/image'\n\nconst componentList = {\n%variationList(indent:2)%\n}\n\nexport interface ArticleProps extends SectionProps {\n  /** Gatsby fetched data */\n  typename: string\n  articleText: {\n    articleText: string\n  }\n  author: string\n  createdAt: string\n  date: string\n  heading: string\n  image: FluidImage\n  slug: string\n  subHeading: string\n  title: string\n  updatedAt: string\n\n}\n\nexport const Article = (props: ArticleProps) => {\n  const Variation = getVariation(props, componentList)\n\n  return <Variation {...props} />\n}\n",
      relPath: 'article/article.tsx',
    },
    {
      basePath: 'dist/test-output',
      content:
        "/**\n * Component variation\n *\n * Component type: articleSection\n * Variation: %variation%\n *\n */\n\nimport React from 'react'\n\nimport { ArticleSectionProps } from './article-section'\n\nexport const ArticleSectionBasicVar = (props: ArticleSectionProps) => {\n  return (\n    <div>\n      <h2>ArticleSectionBasic</h2>\n      <p>Hello world</p>\n    </div>\n  )\n}\n",
      relPath: 'article-section/article-section-basic-var.tsx',
    },
    {
      basePath: 'dist/test-output',
      content:
        "/**\n * Component index\n *\n * Component type: articleSection\n *\n */\n\nexport * from './article-section'\n",
      relPath: 'article-section/index.ts',
    },
    {
      basePath: 'dist/test-output',
      content:
        "# Article section\n\n```jsx\nimport { ArticleSection } from './article-section'\n<ArticleSection %componentFields% />\n```\n",
      relPath: 'article-section/README.md',
    },
    {
      basePath: 'dist/test-output',
      content:
        "/**\n * Component\n *\n * Component type: articleSection\n *\n */\n\nimport { getVariation } from '@jacco-meijer/content-models'\nimport React from 'react'\nimport { SectionProps } from '../section-props'\nimport ArticleSectionBasicVar from './article-section-basic-var'\nimport { FluidImage } from './src/views/image/image'\n\nconst componentList = {\n  ['Inline article text, specific to this section']: ArticleSectionBasicVar,\n  ['Linked article text, derived from slug in url']: ArticleSectionBasicVar,\n}\n\nexport interface ArticleSectionProps extends SectionProps {\n  /** Gatsby fetched data */\n  typename: string\n  articleText: string\n  title: string\n  variation: string\n\n}\n\nexport const ArticleSection = (props: ArticleSectionProps) => {\n  const Variation = getVariation(props, componentList)\n\n  return <Variation {...props} />\n}\n",
      relPath: 'article-section/article-section.tsx',
    },
    {
      basePath: 'dist/test-output',
      content:
        "/**\n * Component variation\n *\n * Component type: articlesSection\n * Variation: %variation%\n *\n */\n\nimport React from 'react'\n\nimport { ArticlesSectionProps } from './articles-section'\n\nexport const ArticlesSectionBasicVar = (props: ArticlesSectionProps) => {\n  return (\n    <div>\n      <h2>ArticlesSectionBasic</h2>\n      <p>Hello world</p>\n    </div>\n  )\n}\n",
      relPath: 'articles-section/articles-section-basic-var.tsx',
    },
    {
      basePath: 'dist/test-output',
      content:
        "/**\n * Component index\n *\n * Component type: articlesSection\n *\n */\n\nexport * from './articles-section'\n",
      relPath: 'articles-section/index.ts',
    },
    {
      basePath: 'dist/test-output',
      content:
        "# Articles section\n\n```jsx\nimport { ArticlesSection } from './articles-section'\n<ArticlesSection %componentFields% />\n```\n",
      relPath: 'articles-section/README.md',
    },
    {
      basePath: 'dist/test-output',
      content:
        "/**\n * Component\n *\n * Component type: articlesSection\n *\n */\n\nimport { getVariation } from '@jacco-meijer/content-models'\nimport React from 'react'\nimport { SectionProps } from '../section-props'\nimport ArticlesSectionBasicVar from './articles-section-basic-var'\nimport { FluidImage } from './src/views/image/image'\n\nconst componentList = {\n%variationList(indent:2)%\n}\n\nexport interface ArticlesSectionProps extends SectionProps {\n  /** Gatsby fetched data */\n  typename: string\n  articles: any\n  heading: string\n  maxArticles: number\n  title: string\n\n}\n\nexport const ArticlesSection = (props: ArticlesSectionProps) => {\n  const Variation = getVariation(props, componentList)\n\n  return <Variation {...props} />\n}\n",
      relPath: 'articles-section/articles-section.tsx',
    },
    {
      basePath: 'dist/test-output',
      content:
        "/**\n * Component variation\n *\n * Component type: exampleBlock\n * Variation: %variation%\n *\n */\n\nimport React from 'react'\n\nimport { ExampleBlockProps } from './example-block'\n\nexport const ExampleBlockBasicVar = (props: ExampleBlockProps) => {\n  return (\n    <div>\n      <h2>ExampleBlockBasic</h2>\n      <p>Hello world</p>\n    </div>\n  )\n}\n",
      relPath: 'example-block/example-block-basic-var.tsx',
    },
    {
      basePath: 'dist/test-output',
      content:
        "/**\n * Component index\n *\n * Component type: exampleBlock\n *\n */\n\nexport * from './example-block'\n",
      relPath: 'example-block/index.ts',
    },
    {
      basePath: 'dist/test-output',
      content:
        "# Example block\n\n```jsx\nimport { ExampleBlock } from './example-block'\n<ExampleBlock %componentFields% />\n```\n",
      relPath: 'example-block/README.md',
    },
    {
      basePath: 'dist/test-output',
      content:
        "/**\n * Component\n *\n * Component type: exampleBlock\n *\n */\n\nimport { getVariation } from '@jacco-meijer/content-models'\nimport React from 'react'\nimport { SectionProps } from '../section-props'\nimport ExampleBlockBasicVar from './example-block-basic-var'\nimport { FluidImage } from './src/views/image/image'\n\nconst componentList = {\n%variationList(indent:2)%\n}\n\nexport interface ExampleBlockProps extends SectionProps {\n  /** Gatsby fetched data */\n  typename: string\n  someText: string\n  title: string\n\n}\n\nexport const ExampleBlock = (props: ExampleBlockProps) => {\n  const Variation = getVariation(props, componentList)\n\n  return <Variation {...props} />\n}\n",
      relPath: 'example-block/example-block.tsx',
    },
    {
      basePath: 'dist/test-output',
      content:
        "/**\n * Component variation\n *\n * Component type: examplePart\n * Variation: %variation%\n *\n */\n\nimport React from 'react'\n\nimport { ExamplePartProps } from './example-part'\n\nexport const ExamplePartBasicVar = (props: ExamplePartProps) => {\n  return (\n    <div>\n      <h2>ExamplePartBasic</h2>\n      <p>Hello world</p>\n    </div>\n  )\n}\n",
      relPath: 'example-part/example-part-basic-var.tsx',
    },
    {
      basePath: 'dist/test-output',
      content:
        "/**\n * Component index\n *\n * Component type: examplePart\n *\n */\n\nexport * from './example-part'\n",
      relPath: 'example-part/index.ts',
    },
    {
      basePath: 'dist/test-output',
      content:
        "# Example part\n\n```jsx\nimport { ExamplePart } from './example-part'\n<ExamplePart %componentFields% />\n```\n",
      relPath: 'example-part/README.md',
    },
    {
      basePath: 'dist/test-output',
      content:
        "/**\n * Component\n *\n * Component type: examplePart\n *\n */\n\nimport { getVariation } from '@jacco-meijer/content-models'\nimport React from 'react'\nimport { SectionProps } from '../section-props'\nimport ExamplePartBasicVar from './example-part-basic-var'\nimport { FluidImage } from './src/views/image/image'\n\nconst componentList = {\n%variationList(indent:2)%\n}\n\nexport interface ExamplePartProps extends SectionProps {\n  /** Gatsby fetched data */\n  typename: string\n  someText: string\n  title: string\n\n}\n\nexport const ExamplePart = (props: ExamplePartProps) => {\n  const Variation = getVariation(props, componentList)\n\n  return <Variation {...props} />\n}\n",
      relPath: 'example-part/example-part.tsx',
    },
    {
      basePath: 'dist/test-output',
      content:
        "/**\n * Component variation\n *\n * Component type: globals\n * Variation: %variation%\n *\n */\n\nimport React from 'react'\n\nimport { GlobalsProps } from './globals'\n\nexport const GlobalsBasicVar = (props: GlobalsProps) => {\n  return (\n    <div>\n      <h2>GlobalsBasic</h2>\n      <p>Hello world</p>\n    </div>\n  )\n}\n",
      relPath: 'globals/globals-basic-var.tsx',
    },
    {
      basePath: 'dist/test-output',
      content:
        "/**\n * Component index\n *\n * Component type: globals\n *\n */\n\nexport * from './globals'\n",
      relPath: 'globals/index.ts',
    },
    {
      basePath: 'dist/test-output',
      content:
        "# Globals\n\n```jsx\nimport { Globals } from './globals'\n<Globals %componentFields% />\n```\n",
      relPath: 'globals/README.md',
    },
    {
      basePath: 'dist/test-output',
      content:
        "/**\n * Component\n *\n * Component type: globals\n *\n */\n\nimport { getVariation } from '@jacco-meijer/content-models'\nimport React from 'react'\nimport { SectionProps } from '../section-props'\nimport GlobalsBasicVar from './globals-basic-var'\nimport { FluidImage } from './src/views/image/image'\n\nconst componentList = {\n%variationList(indent:2)%\n}\n\nexport interface GlobalsProps extends SectionProps {\n  /** Gatsby fetched data */\n  typename: string\n  addressLine1: string\n  addressLine2: string\n  emailAddress: string\n  githubUrl: string\n  heading: string\n  linkedinUrl: string\n  phoneNumber: string\n  siteAuthor: string\n  siteDescription: string\n  siteKeywords: string[]\n  siteTitle: string\n  title: string\n\n}\n\nexport const Globals = (props: GlobalsProps) => {\n  const Variation = getVariation(props, componentList)\n\n  return <Variation {...props} />\n}\n",
      relPath: 'globals/globals.tsx',
    },
    {
      basePath: 'dist/test-output',
      content:
        "/**\n * Component variation\n *\n * Component type: page\n * Variation: %variation%\n *\n */\n\nimport React from 'react'\n\nimport { PageProps } from './page'\n\nexport const PageBasicVar = (props: PageProps) => {\n  return (\n    <div>\n      <h2>PageBasic</h2>\n      <p>Hello world</p>\n    </div>\n  )\n}\n",
      relPath: 'page/page-basic-var.tsx',
    },
    {
      basePath: 'dist/test-output',
      content:
        "/**\n * Component index\n *\n * Component type: page\n *\n */\n\nexport * from './page'\n",
      relPath: 'page/index.ts',
    },
    {
      basePath: 'dist/test-output',
      content:
        "# Page\n\n```jsx\nimport { Page } from './page'\n<Page %componentFields% />\n```\n",
      relPath: 'page/README.md',
    },
    {
      basePath: 'dist/test-output',
      content:
        "/**\n * Component\n *\n * Component type: page\n *\n */\n\nimport { getVariation } from '@jacco-meijer/content-models'\nimport React from 'react'\nimport { SectionProps } from '../section-props'\nimport PageBasicVar from './page-basic-var'\nimport { FluidImage } from './src/views/image/image'\n\nconst componentList = {\n%variationList(indent:2)%\n}\n\nexport interface PageProps extends SectionProps {\n  /** Gatsby fetched data */\n  typename: string\n  image: FluidImage\n  navigationTitle: string\n  sections: any\n  seoDescription: string\n  seoTitle: string\n  title: string\n\n}\n\nexport const Page = (props: PageProps) => {\n  const Variation = getVariation(props, componentList)\n\n  return <Variation {...props} />\n}\n",
      relPath: 'page/page.tsx',
    },
  ],
  yes: true,
}

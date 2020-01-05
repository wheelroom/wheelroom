import { TemplatParser } from '../template-parser'

const article: TemplatParser = {
  component: {
    fields: {
      articleText: {
        type: 'richText',
      },
      createdAt: {
        system: true,
        type: 'date',
      },
      image: {
        type: 'image',
      },
      title: {
        required: true,
        type: 'shortText',
      },
    },
    graphQL: {
      createPageQuery: 'subPage',
    },
    modelVersion: '1.0.0',
  },
  componentName: 'article',
  unparsed: '',
}

const articlesSection: TemplatParser = {
  component: {
    fields: {
      __typename: {
        system: true,
        type: 'shortText',
      },
      heading: {
        type: 'shortText',
      },
      maxArticles: {
        type: 'number',
      },
      // tslint:disable-next-line: object-literal-sort-keys
      articles: {
        components: ['Article'],
        type: 'multipleComponents',
      },
      variation: {
        type: 'dropdown',
      },
      title: {
        required: true,
        type: 'shortText',
      },
    },
    graphQL: {
      createPageQuery: 'global',
      limit: 10,
    },
    modelVersion: '1.0.0',
  },
  componentName: 'articlesSection',
  unparsed: '',
}

const featuredPageSection: TemplatParser = {
  component: {
    fields: {
      __typename: {
        system: true,
        type: 'shortText',
      },
      heading: {
        type: 'shortText',
      },
      text: {
        type: 'richText',
      },
      // tslint:disable-next-line: object-literal-sort-keys
      featuredPage: {
        component: 'page',
        type: 'singleComponent',
      },
      image: {
        type: 'image',
      },
      variation: {
        type: 'dropdown',
      },
      title: {
        required: true,
        type: 'shortText',
      },
    },
    graphQL: {
      createPageQuery: 'page',
    },
    modelVersion: '1.0.0',
  },
  componentName: 'featuredPageSection',
  unparsed: '',
}

const subPageUnparsed = `
export const query = \`
%componentQuery(prefix:allContentful, indent:0)%
\``
export const subPageQueryInput: TemplatParser = Object.assign({}, article, {
  unparsed: subPageUnparsed,
})

const globalQueryUnparsed = `
export const query = \`
%componentQuery(prefix:allContentful, indent:0)%
\``
export const globalQueryInput: TemplatParser = Object.assign(
  {},
  articlesSection,
  {
    unparsed: globalQueryUnparsed,
  }
)

const pageQueryUnparsed = `
export const query = \`
%componentQuery(prefix:allContentful, indent:0)%
\``
export const pageQueryInput: TemplatParser = Object.assign(
  {},
  featuredPageSection,
  {
    unparsed: pageQueryUnparsed,
  }
)

const articleFragmentUnparsed = `
export const fragment = \`
%componentFragment(prefix:Contentful, indent:2)%
\``
export const articleFragmentInput: TemplatParser = Object.assign({}, article, {
  unparsed: articleFragmentUnparsed,
})

const articlesSectionFragmentUnparsed = `
export const fragment = \`
%componentFragment(prefix:Contentful, indent:2)%
\``
export const articlesSectionFragmentInput: TemplatParser = Object.assign(
  {},
  articlesSection,
  {
    unparsed: articlesSectionFragmentUnparsed,
  }
)

const featuredPageSectionFragmentUnparsed = `
export const fragment = \`
%componentFragment(prefix:Contentful, indent:2)%
\``
export const featuredPageSectionFragmentInput: TemplatParser = Object.assign(
  {},
  featuredPageSection,
  {
    unparsed: featuredPageSectionFragmentUnparsed,
  }
)

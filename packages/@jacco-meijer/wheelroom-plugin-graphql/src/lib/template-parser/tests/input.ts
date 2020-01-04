import { TemplatParser } from '../template-parser'

const article: TemplatParser = {
  component: {
    fields: {
      __typename: {
        system: true,
        type: 'shortText',
      },
      someComponentOneText: {
        type: 'shortText',
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
      someComponentOneText: {
        type: 'shortText',
      },
      title: {
        required: true,
        type: 'shortText',
      },
    },
    graphQL: {
      createPageQuery: 'global',
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
      someComponentOneText: {
        type: 'shortText',
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
  componentName: 'article',
  unparsed: '',
}

const subPageUnparsed = `
export const query = \`
%componentQuery(prefix:allContentful)
\``
export const subPageQueryInput: TemplatParser = Object.assign({}, article, {
  unparsed: subPageUnparsed,
})

const globalQueryUnparsed = `
export const query = \`
%componentQuery(prefix:allContentful)
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
%componentQuery(prefix:allContentful)
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
%componentFragment%(prefix:Contentful)
\``
export const articleFragmentInput: TemplatParser = Object.assign({}, article, {
  unparsed: articleFragmentUnparsed,
})

const articlesSectionFragmentUnparsed = `
export const fragment = \`
%componentFragment%(prefix:Contentful)
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
%componentFragment%(prefix:Contentful)
\``
export const featuredPageSectionFragmentInput: TemplatParser = Object.assign(
  {},
  featuredPageSection,
  {
    unparsed: featuredPageSectionFragmentUnparsed,
  }
)

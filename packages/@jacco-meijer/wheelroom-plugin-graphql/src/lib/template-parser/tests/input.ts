import { WheelroomComponents } from '@jacco-meijer/wheelroom'
import { TemplateParser } from '../template-parser'

const components: WheelroomComponents = {
  page: {
    fields: {
      image: {
        type: 'image',
      },
      pageHeading: {
        type: 'shortText',
      },
      pageText: {
        type: 'richText',
      },
      shouldSkipA: {
        allowedComponents: ['page'],
        type: 'multipleComponents',
      },
      shouldSkipB: {
        allowedComponents: ['page'],
        expandFragmentRef: true,
        type: 'singleComponent',
      },
    },
    modelVersion: '1.0.0',
    settings: {
      asQuery: 'page',
    },
  },
}

const article: TemplateParser = {
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
    modelVersion: '1.0.0',
    settings: {
      asQuery: 'subPage',
      queryLimit: 20,
    },
  },
  componentName: 'article',
  components,
  unparsed: '',
}

const articlesSection: TemplateParser = {
  component: {
    fields: {
      __typename: {
        system: true,
        type: 'shortText',
      },
      // tslint:disable-next-line: object-literal-sort-keys
      articles: {
        allowedComponents: ['Article'],
        type: 'multipleComponents',
      },
      heading: {
        type: 'shortText',
      },
      maxArticles: {
        type: 'number',
      },
      title: {
        required: true,
        type: 'shortText',
      },
      variation: {
        items: ['Choose', 'From', 'These'],
        type: 'dropdown',
      },
    },
    modelVersion: '1.0.0',
    settings: {
      asQuery: 'global',
      queryLimit: 15,
    },
  },
  componentName: 'articlesSection',
  components,
  unparsed: '',
}

const featuredPageSection: TemplateParser = {
  component: {
    fields: {
      __typename: {
        system: true,
        type: 'shortText',
      },
      // tslint:disable-next-line: object-literal-sort-keys
      featuredPage: {
        allowedComponents: ['page'],
        expandFragmentRef: true,
        type: 'singleComponent',
      },
      heading: {
        type: 'shortText',
      },
      image: {
        type: 'image',
      },
      text: {
        type: 'richText',
      },
      title: {
        required: true,
        type: 'shortText',
      },
      variation: {
        items: ['Choose', 'From', 'These'],
        type: 'dropdown',
      },
    },
    modelVersion: '1.0.0',
    settings: {
      asQuery: 'page',
    },
  },
  componentName: 'featuredPageSection',
  components,
  unparsed: '',
}

const articleUnparsed = `
export const query = \`
%componentQuery(prefix:allContentful, indent:0)%
\``
export const articleQueryInput: TemplateParser = Object.assign({}, article, {
  unparsed: articleUnparsed,
})

const articlesSectionQueryUnparsed = `
export const query = \`
%componentQuery(prefix:allContentful, indent:0)%
\``
export const articlesSectionQueryInput: TemplateParser = Object.assign(
  {},
  articlesSection,
  {
    unparsed: articlesSectionQueryUnparsed,
  }
)

const featuredPageSectionQueryUnparsed = `
export const query = \`
%componentQuery(prefix:allContentful, indent:0)%
\``
export const featuredPageSectionQueryInput: TemplateParser = Object.assign(
  {},
  featuredPageSection,
  {
    unparsed: featuredPageSectionQueryUnparsed,
  }
)

const articleFragmentUnparsed = `
export const fragment = \`
%componentFragment(prefix:Contentful, indent:2)%
\``
export const articleFragmentInput: TemplateParser = Object.assign({}, article, {
  unparsed: articleFragmentUnparsed,
})

const articlesSectionFragmentUnparsed = `
export const fragment = \`
%componentFragment(prefix:Contentful, indent:2)%
\``
export const articlesSectionFragmentInput: TemplateParser = Object.assign(
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
export const featuredPageSectionFragmentInput: TemplateParser = Object.assign(
  {},
  featuredPageSection,
  {
    unparsed: featuredPageSectionFragmentUnparsed,
  }
)

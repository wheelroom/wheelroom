import { WheelroomComponents } from '@wheelroom/wheelroom'
import { ReplaceVars } from '@wheelroom/wheelroom'

const components: WheelroomComponents = {
  page: {
    fields: {
      media: {
        type: 'media',
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

const article: ReplaceVars = {
  component: {
    fields: {
      articleText: {
        type: 'richText',
      },
      createdAt: {
        system: true,
        type: 'date',
      },
      media: {
        type: 'media',
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
}

const articlesSection: ReplaceVars = {
  component: {
    fields: {
      __typename: {
        system: true,
        type: 'shortText',
      },
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
}

const featuredPageSection: ReplaceVars = {
  component: {
    fields: {
      __typename: {
        system: true,
        type: 'shortText',
      },
      featuredPage: {
        allowedComponents: ['page'],
        expandFragmentRef: true,
        type: 'singleComponent',
      },
      heading: {
        type: 'shortText',
      },
      media: {
        type: 'media',
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
}

export const replaceVars = {
  article,
  articlesSection,
  components,
  featuredPageSection,
}

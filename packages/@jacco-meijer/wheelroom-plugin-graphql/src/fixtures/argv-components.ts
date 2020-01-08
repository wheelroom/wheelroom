/**
 * Part of the mock output of the wheelroom binary. This output is part of the
 * input for a wheelroom command. Command handlers can be added by plugins.
 */

import { WheelroomComponents } from '@jacco-meijer/wheelroom'
export const argvComponents: WheelroomComponents = {
  allFieldTypes: {
    fields: {
      __typename: {
        system: true,
        type: 'shortText',
      },
      dateField: {
        localized: false,
        required: false,
        type: 'date',
      },
      dropdownField: {
        items: ['item A', 'item B', 'item C'],
        localized: false,
        required: false,
        type: 'dropdown',
      },
      imageField: {
        localized: false,
        required: false,
        type: 'image',
      },
      longTextField: {
        localized: false,
        required: false,
        type: 'longText',
      },
      multipleComponentsField: {
        allowedComponents: ['page', 'firstSection', 'secondSection'],
        initialContent: ['firstSection', 'secondSection'],
        localized: false,
        required: false,
        type: 'multipleComponents',
      },
      numberField: {
        initialContent: 5,
        localized: false,
        required: false,
        type: 'number',
      },
      richTextField: {
        localized: false,
        required: false,
        type: 'richText',
      },
      shortTextField: {
        localized: false,
        maxLength: 155,
        required: false,
        type: 'shortText',
      },
      singleComponentField: {
        allowedComponents: ['page'],
        localized: false,
        required: false,
        type: 'singleComponent',
      },
      tagsField: {
        localized: false,
        required: false,
        type: 'tags',
      },
      title: {
        helpText: 'Never displayed, only used for listing within Contentful',
        localized: false,
        required: true,
        type: 'shortText',
      },
    },
    modelVersion: '1.0.0',
    settings: {
      asFragment: true,
      asQuery: 'subPage',
      queryLimit: 10,
    },
  },
  firstSection: {
    fields: {
      __typename: {
        system: true,
        type: 'shortText',
      },
      defaultField: {
        localized: false,
        required: false,
        type: 'shortText',
      },
      title: {
        helpText: 'Never displayed, only used for listing within Contentful',
        localized: false,
        required: true,
        type: 'shortText',
      },
    },
    modelVersion: '1.0.0',
    settings: {
      asFragment: true,
      asPageSection: true,
    },
  },
  globalModel: {
    fields: {
      __typename: {
        system: true,
        type: 'shortText',
      },
      heading: {
        localized: false,
        required: false,
        type: 'shortText',
      },
      title: {
        helpText: 'Never displayed, only used for listing within Contentful',
        localized: false,
        required: true,
        type: 'shortText',
      },
    },
    modelVersion: '1.0.0',
    settings: {
      asFragment: true,
      asQuery: 'global',
      queryLimit: 10,
    },
  },
  noFragment: {
    fields: {
      __typename: {
        system: true,
        type: 'shortText',
      },
      heading: {
        localized: false,
        required: false,
        type: 'shortText',
      },
      title: {
        helpText: 'Never displayed, only used for listing within Contentful',
        localized: false,
        required: true,
        type: 'shortText',
      },
    },
    modelVersion: '1.0.0',
    settings: {},
  },
  pageModel: {
    fields: {
      __typename: {
        system: true,
        type: 'shortText',
      },
      heading: {
        localized: false,
        required: false,
        type: 'shortText',
      },
      title: {
        helpText: 'Never displayed, only used for listing within Contentful',
        localized: false,
        required: true,
        type: 'shortText',
      },
    },
    modelVersion: '1.0.0',
    settings: {
      asFragment: true,
      asQuery: 'page',
      queryLimit: 10,
    },
  },
  secondSection: {
    fields: {
      __typename: {
        system: true,
        type: 'shortText',
      },
      heading: {
        localized: false,
        required: false,
        type: 'shortText',
      },
      title: {
        helpText: 'Never displayed, only used for listing within Contentful',
        localized: false,
        required: true,
        type: 'shortText',
      },
    },
    modelVersion: '1.0.0',
    settings: {
      asFragment: true,
      asPageSection: true,
    },
  },
  subPageModel: {
    fields: {
      __typename: {
        system: true,
        type: 'shortText',
      },
      heading: {
        localized: false,
        required: false,
        type: 'shortText',
      },
      title: {
        helpText: 'Never displayed, only used for listing within Contentful',
        localized: false,
        required: true,
        type: 'shortText',
      },
    },
    modelVersion: '1.0.0',
    settings: {
      asFragment: true,
      asQuery: 'subPage',
      queryLimit: 10,
    },
  },
}

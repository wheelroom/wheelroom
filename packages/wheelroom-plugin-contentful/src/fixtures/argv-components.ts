/**
 * Part of the mock output of the wheelroom binary. This output is part of the
 * input for a wheelroom command. Command handlers can be added by plugins.
 */

import { WheelroomComponents } from '@wheelroom/wheelroom'

export const argvComponents: WheelroomComponents = {
  allFieldTypes: {
    fields: {
      __typename: {
        system: true,
        type: 'shortText',
      },
      dateField: {
        localized: false,
        name: 'Date field',
        required: false,
        type: 'date',
      },
      dropdownField: {
        initialContent: 'item A',
        items: ['item A', 'item B', 'item C'],
        localized: false,
        name: 'Dropdown field',
        required: false,
        type: 'dropdown',
      },
      mediaField: {
        initialContent: true,
        localized: false,
        name: 'Image field',
        required: false,
        type: 'media',
      },
      longTextField: {
        initialContent: 'This is a long text field',
        localized: false,
        name: 'Long text field',
        required: false,
        type: 'longText',
      },
      multipleComponentsField: {
        allowedComponents: ['page', 'firstSection', 'secondSection'],
        initialContent: ['firstSection', 'secondSection'],
        localized: false,
        name: 'Multiple components field',
        required: false,
        type: 'multipleComponents',
      },
      numberField: {
        initialContent: 5,
        localized: false,
        name: 'Number field',
        required: false,
        type: 'number',
      },
      richTextField: {
        initialContent: 'This is a rich text field',
        localized: false,
        name: 'Rich text field',
        required: false,
        type: 'richText',
      },
      shortTextField: {
        initialContent: 'This is a short text field',
        localized: false,
        maxLength: 155,
        name: 'Short text field',
        required: false,
        type: 'shortText',
      },
      shortTextFieldExtended: {
        initialContent: 'onlyCamelCaseAllowdForThisExtendedField',
        localized: false,
        maxLength: 155,
        name: 'Short text field extended',
        required: false,
        type: 'shortText',
        typePostfix: 'Extended',
      },
      singleComponentField: {
        allowedComponents: ['pageModel'],
        initialContent: 'pageModel',
        localized: false,
        name: 'Single component field',
        required: false,
        type: 'singleComponent',
      },
      tagsField: {
        initialContent: ['tag A', 'tag B'],
        localized: false,
        name: 'Tags field',
        required: false,
        type: 'tags',
      },
      title: {
        helpText: 'Never displayed, only used for listing within Contentful',
        initialContent: 'All field types generated from boilerplate',
        localized: false,
        name: 'Title',
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
        name: 'Default field',
        required: false,
        type: 'shortText',
      },
      title: {
        helpText: 'Never displayed, only used for listing within Contentful',
        initialContent: 'First section generated from boilerplate',
        localized: false,
        name: 'Title',
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
        name: 'Heading',
        required: false,
        type: 'shortText',
      },
      title: {
        helpText: 'Never displayed, only used for listing within Contentful',
        initialContent: 'Global model generated from boilerplate',
        localized: false,
        name: 'Title',
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
        name: 'Heading',
        required: false,
        type: 'shortText',
      },
      title: {
        helpText: 'Never displayed, only used for listing within Contentful',
        initialContent: 'No fragment generated from boilerplate',
        localized: false,
        name: 'Title',
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
        name: 'Heading',
        required: false,
        type: 'shortText',
      },
      title: {
        helpText: 'Never displayed, only used for listing within Contentful',
        initialContent: 'Page model generated from boilerplate',
        localized: false,
        name: 'Title',
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
        name: 'Heading',
        required: false,
        type: 'shortText',
      },
      title: {
        helpText: 'Never displayed, only used for listing within Contentful',
        initialContent: 'Second section generated from boilerplate',
        localized: false,
        name: 'Title',
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
        name: 'Heading',
        required: false,
        type: 'shortText',
      },
      title: {
        helpText: 'Never displayed, only used for listing within Contentful',
        initialContent: 'Sub page model generated from boilerplate',
        localized: false,
        name: 'Title',
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

import {
  DropdownField,
  ImageField,
  LongTextField,
  MultipleComponentsField,
  RichTextField,
  ShortTextField,
  SingleComponentField,
  TagsField,
  WheelroomComponents,
  CheckboxField,
} from '@jacco-meijer/wheelroom'

export const configComponents: WheelroomComponents = {
  topic: {
    fields: {
      heading: {
        type: 'shortText',
      } as ShortTextField,
      abstract: {
        type: 'longText',
      } as LongTextField,
      image: {
        type: 'image',
      } as ImageField,
      icon: {
        items: ['aap', 'noot', 'mies'],
        type: 'dropdown',
      } as DropdownField,
      actions: {
        allowedComponents: ['action'],
        type: 'multipleComponents',
      } as MultipleComponentsField,
    },
    settings: {
      asBoilerplate: true,
      asFragment: true,
    },
    modelVersion: '1.0.0',
  },
  action: {
    fields: {
      heading: {
        type: 'shortText',
      } as ShortTextField,
      page: {
        allowedComponents: ['page'],
        // Limit expanding pages, prevent circ refs
        expandFragmentRef: true,
        type: 'singleComponent',
      } as SingleComponentField,
      url: {
        initialContent: 'https://localhost:8000',
        type: 'shortText',
        typePostfix: 'Url',
      } as ShortTextField,
    },
    settings: {
      asBoilerplate: true,
      asFragment: true,
    },
    modelVersion: '1.0.0',
  },
  navigationSegment: {
    fields: {
      heading: {
        type: 'shortText',
      } as ShortTextField,
      pages: {
        allowedComponents: ['page'],
        // Limit expanding pages, prevent circ refs
        expandFragmentRef: true,
        type: 'multipleComponents',
      } as MultipleComponentsField,
    },
    settings: {
      asBoilerplate: true,
      asFragment: true,
    },
    modelVersion: '1.0.0',
  },
  navigation: {
    fields: {
      segments: {
        allowedComponents: ['navigationSegment'],
        type: 'multipleComponents',
      } as MultipleComponentsField,
    },
    settings: {
      asBoilerplate: true,
      asFragment: true,
    },
    modelVersion: '1.0.0',
  },
  text: {
    fields: {
      text: {
        required: true,
        type: 'richText',
      } as RichTextField,
    },
    modelVersion: '1.0.0',
    settings: {
      asBoilerplate: true,
      asFragment: true,
    },
  },
  pageSection: {
    fields: {
      variation: {
        items: [
          'cards',
          'featured list',
          'featured',
          'headline',
          'hero',
          'images',
        ],
        type: 'dropdown',
      } as DropdownField,
      topics: {
        allowedComponents: ['topic'],
        type: 'multipleComponents',
      } as MultipleComponentsField,
      topicOptions: {
        items: [
          'Hide icon',
          'Hide image',
          'Hide heading',
          'Hide abstract',
          'Hide action',
          'Reversed order',
        ],
        type: 'checkbox',
      } as CheckboxField,
      text: {
        allowedComponents: ['text'],
        type: 'singleComponent',
      } as SingleComponentField,
      navigation: {
        allowedComponents: ['navigation'],
        type: 'singleComponent',
      } as SingleComponentField,
      actions: {
        allowedComponents: ['action'],
        type: 'multipleComponents',
      } as MultipleComponentsField,
    },
    modelVersion: '1.0.0',
    settings: {
      asBoilerplate: true,
      asFragment: true,
      asPageSection: true,
    },
  },
  page: {
    fields: {
      path: {
        initialContent: '/boilerplate',
        required: true,
        type: 'shortText',
        typePostfix: 'Path',
        unique: true,
      } as ShortTextField,
      navigationHeading: {
        type: 'shortText',
      } as ShortTextField,
      sections: {
        allowedComponents: [
          '%componentNameArray(filter:settings.asPageSection)%',
        ],
        initialContent: ['%componentNameArray(filter:settings.asPageSection)%'],
        required: true,
        type: 'multipleComponents',
      } as MultipleComponentsField,
      theme: {
        items: ['light', 'dark'],
        type: 'dropdown',
      } as DropdownField,
      seoTitle: {
        type: 'shortText',
      } as ShortTextField,
      seoDescription: {
        maxLength: 155,
        type: 'shortText',
      } as ShortTextField,
    },
    modelVersion: '1.0.0',
    settings: {
      asFragment: true,
      asQuery: 'page',
    },
  },
  globals: {
    fields: {
      addressLine1: {
        type: 'shortText',
      } as ShortTextField,
      addressLine2: {
        type: 'shortText',
      } as ShortTextField,
      emailAddress: {
        type: 'shortText',
      } as ShortTextField,
      linkedinUrl: {
        type: 'shortText',
      } as ShortTextField,
      phoneNumber: {
        type: 'shortText',
      } as ShortTextField,
      siteAuthor: {
        type: 'shortText',
      } as ShortTextField,
      siteDescription: {
        type: 'shortText',
      } as ShortTextField,
      siteHeading: {
        type: 'shortText',
      } as ShortTextField,
      siteKeywords: {
        type: 'tags',
      } as TagsField,
    },
    modelVersion: '1.0.0',
    settings: {
      asFragment: true,
      asQuery: 'global',
    },
  },
}

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
        expandFragmentRef: true,
        type: 'singleComponent',
      } as SingleComponentField,
      url: {
        initialContent: 'https://localhost:8000',
        type: 'shortText',
        typePostfix: 'Url',
      } as ShortTextField,
      actions: {
        allowedComponents: ['action'],
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
        items: ['extra-large', 'large', 'medium', 'small', 'quote'],
        type: 'dropdown',
      } as DropdownField,
      topics: {
        allowedComponents: ['topic'],
        type: 'multipleComponents',
      } as MultipleComponentsField,
      text: {
        allowedComponents: ['text'],
        type: 'singleComponent',
      } as SingleComponentField,
      navigation: {
        allowedComponents: ['navigation'],
        type: 'singleComponent',
      } as SingleComponentField,
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
      sections: {
        allowedComponents: [
          '%componentNameArray(filter:settings.asPageSection)%',
        ],
        initialContent: ['%componentNameArray(filter:settings.asPageSection)%'],
        required: true,
        type: 'multipleComponents',
      } as MultipleComponentsField,
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

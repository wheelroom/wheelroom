import { WheelroomComponents } from '../types/wheelroom-components'
import {
  DateField,
  DropdownField,
  ImageField,
  LongTextField,
  MultipleComponentsField,
  NumberField,
  RichTextField,
  ShortTextField,
  SingleComponentField,
  TagsField,
} from '../types/wheelroom-fields'

export const configComponents: WheelroomComponents = {
  allFieldTypes: {
    fields: {
      dateField: {
        type: 'date',
      } as DateField,
      dropdownField: {
        items: ['item A', 'item B', 'item C'],
        type: 'dropdown',
      } as DropdownField,
      imageField: {
        type: 'image',
      } as ImageField,
      longTextField: {
        type: 'longText',
      } as LongTextField,
      multipleComponentsField: {
        allowedComponents: ['page', 'firstSection', 'secondSection'],
        initialContent: ['firstSection', 'secondSection'],
        type: 'multipleComponents',
      } as MultipleComponentsField,
      numberField: {
        initialContent: 5,
        type: 'number',
      } as NumberField,
      richTextField: {
        type: 'richText',
      } as RichTextField,
      shortTextField: {
        maxLength: 155,
        type: 'shortText',
      } as ShortTextField,
      singleComponentField: {
        allowedComponents: ['page'],
        type: 'singleComponent',
      } as SingleComponentField,
      tagsField: {
        type: 'tags',
      } as TagsField,
    },
    graphQL: {
      createPageQuery: 'subPage',
      fragment: true,
      limit: 10,
    },
    modelVersion: '1.0.0',
  },
  firstSection: {
    fields: {
      defaultField: {
        type: 'shortText',
      } as ShortTextField,
    },
    graphQL: {
      fragment: true,
      pageSection: true,
    },
    modelVersion: '1.0.0',
  },
  globalModel: {
    fields: {
      heading: {
        type: 'shortText',
      } as ShortTextField,
    },
    graphQL: {
      createPageQuery: 'global',
      fragment: true,
      limit: 10,
    },
    modelVersion: '1.0.0',
  },
  noFragment: {
    fields: {
      heading: {
        type: 'shortText',
      } as ShortTextField,
    },
    graphQL: {},
    modelVersion: '1.0.0',
  },
  pageModel: {
    fields: {
      heading: {
        type: 'shortText',
      } as ShortTextField,
    },
    graphQL: {
      createPageQuery: 'page',
      fragment: true,
      limit: 10,
    },
    modelVersion: '1.0.0',
  },
  secondSection: {
    fields: {
      heading: {
        type: 'shortText',
      } as ShortTextField,
    },
    graphQL: {
      fragment: true,
      pageSection: true,
    },
    modelVersion: '1.0.0',
  },
  subPageModel: {
    fields: {
      heading: {
        type: 'shortText',
      } as ShortTextField,
    },
    graphQL: {
      createPageQuery: 'subPage',
      fragment: true,
      limit: 10,
    },
    modelVersion: '1.0.0',
  },
}

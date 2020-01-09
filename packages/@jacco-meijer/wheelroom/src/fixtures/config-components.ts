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
        allowedComponents: [
          'page',
          '%componentNameArray(filter:settings.asPageSection)%',
        ],
        initialContent: ['%componentNameArray(filter:settings.asPageSection)%'],
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
    modelVersion: '1.0.0',
    settings: {
      asFragment: true,
      asQuery: 'subPage',
      queryLimit: 10,
    },
  },
  firstSection: {
    fields: {
      defaultField: {
        type: 'shortText',
      } as ShortTextField,
    },
    modelVersion: '1.0.0',
    settings: {
      asFragment: true,
      asPageSection: true,
    },
  },
  globalModel: {
    fields: {
      heading: {
        type: 'shortText',
      } as ShortTextField,
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
      heading: {
        type: 'shortText',
      } as ShortTextField,
    },
    modelVersion: '1.0.0',
    settings: {},
  },
  pageModel: {
    fields: {
      heading: {
        type: 'shortText',
      } as ShortTextField,
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
      heading: {
        type: 'shortText',
      } as ShortTextField,
    },
    modelVersion: '1.0.0',
    settings: {
      asFragment: true,
      asPageSection: true,
    },
  },
  subPageModel: {
    fields: {
      heading: {
        type: 'shortText',
      } as ShortTextField,
    },
    modelVersion: '1.0.0',
    settings: {
      asFragment: true,
      asQuery: 'subPage',
      queryLimit: 10,
    },
  },
}

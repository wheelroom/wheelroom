import {
  RichTextField,
  ShortTextField,
  SingleComponentField,
  WheelroomComponents,
} from '@wheelroom/wheelroom'

export const models: WheelroomComponents = {
  doc: {
    fields: {
      slug: {
        initialContent: 'initial-boilerplate-slug',
        required: true,
        type: 'shortText',
        typePostfix: 'Slug',
        unique: true,
      } as ShortTextField,
      text: {
        required: true,
        type: 'richText',
      } as RichTextField,
      parent: {
        allowedComponents: ['doc'],
        initialContent: undefined,
        type: 'singleComponent',
        expandFragmentRef: true,
      } as SingleComponentField,
      next: {
        allowedComponents: ['doc'],
        initialContent: undefined,
        type: 'singleComponent',
        expandFragmentRef: true,
      } as SingleComponentField,
    },
    modelVersion: '1.0.0',
    settings: {
      asFragment: true,
      asQuery: 'subPage',
    },
  },
}

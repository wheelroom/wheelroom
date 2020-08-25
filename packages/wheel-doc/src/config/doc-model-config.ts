import {
  DropdownField,
  RichTextField,
  ShortTextField,
  SingleComponentField,
  WheelroomComponents,
} from '@wheelroom/wheelroom'

export const docModelConfig: WheelroomComponents = {
  doc: {
    fields: {
      heading: {
        type: 'shortText',
      } as ShortTextField,
      slug: {
        initialContent: 'initial-doc-slug',
        type: 'shortText',
        required: true,
        typePostfix: 'Slug',
        unique: true,
      } as ShortTextField,
      text: {
        required: true,
        type: 'richText',
      } as RichTextField,
      parent: {
        allowedComponents: ['doc'],
        // Limit expanding pages, prevent circ refs
        expandFragmentRef: true,
        initialContent: undefined,
        type: 'singleComponent',
      } as SingleComponentField,
      sortOrder: {
        type: 'shortText',
      } as ShortTextField,
    },
    modelVersion: '1.0.0',
    settings: {
      asFragment: true,
      asQuery: 'subPage',
    },
  },
  docSection: {
    fields: {
      variation: {
        items: ['doc'],
        type: 'dropdown',
      } as DropdownField,
      eventId: {
        type: 'shortText',
        initialContent: 'initial-content-for-doc-section-event-id',
        typePostfix: 'Slug',
        helpText: 'Example: my-event-id',
        unique: true,
      } as ShortTextField,
    },
    modelVersion: '1.0.0',
    settings: {
      // asPageSection will create boilerplate code
      asBoilerplate: false,
      asFragment: true,
      asPageSection: true,
    },
  },
}

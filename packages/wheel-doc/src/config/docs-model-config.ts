import {
  DropdownField,
  RichTextField,
  ShortTextField,
  SingleComponentField,
  WheelroomComponents,
} from '@wheelroom/wheelroom'

export const docsModelConfig: WheelroomComponents = {
  docs: {
    fields: {
      heading: {
        type: 'shortText',
      } as ShortTextField,
      slug: {
        initialContent: 'initial-docs-slug',
        type: 'shortText',
        required: true,
        typePostfix: 'Slug',
        unique: true,
      } as ShortTextField,
      text: {
        required: true,
        type: 'richText',
      } as RichTextField,
      parentDocs: {
        allowedComponents: ['docs'],
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
  docsSection: {
    fields: {
      variation: {
        items: ['docs'],
        type: 'dropdown',
      } as DropdownField,
      eventId: {
        type: 'shortText',
        initialContent: 'initial-content-for-docs-section-event-id',
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

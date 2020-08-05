import {
  DropdownField,
  LongTextField,
  MediaField,
  MultipleComponentsField,
  ShortTextField,
  WheelroomComponents,
} from '@wheelroom/wheelroom'

export const customModelConfig: WheelroomComponents = {
  custom: {
    fields: {
      heading: {
        type: 'shortText',
      } as ShortTextField,
      abstract: {
        type: 'longText',
      } as LongTextField,
      media: {
        type: 'media',
      } as MediaField,
    },
    modelVersion: '1.0.0',
    settings: {
      asBoilerplate: true,
      asFragment: true,
    },
  },
  customSection: {
    fields: {
      variation: {
        items: ['large', 'small'],
        type: 'dropdown',
      } as DropdownField,
      section: {
        allowedComponents: ['custom'],
        type: 'multipleComponents',
      } as MultipleComponentsField,
      eventId: {
        type: 'shortText',
        initialContent: 'initial-content-for-custom-section-event-id',
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

import {
  DropdownField,
  RichTextField,
  ShortTextField,
  WheelroomComponents,
} from '@wheelroom/wheelroom'

export const textModelConfig: WheelroomComponents = {
  textSection: {
    fields: {
      variation: {
        items: ['text'],
        type: 'dropdown',
      } as DropdownField,
      text: {
        required: true,
        translations: {
          name: {
            nl: 'Tekst',
          },
          helpText: {
            nl: 'Eenvoudig opgemaakte tekstveld met kopjes en afbeeldingen',
          },
        },
        type: 'richText',
      } as RichTextField,
      eventId: {
        initialContent: 'initial-content-for-text-section-event-id',
        translations: {
          helpText: {
            'en-US': 'Example: my-event-id',
            nl: 'Voorbeeld: mijn-event-id',
          },
        },
        type: 'shortText',
        typePostfix: 'Slug',
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

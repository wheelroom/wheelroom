import {
  CheckboxField,
  DropdownField,
  LongTextField,
  MultipleComponentsField,
  ShortTextField,
  WheelroomComponents,
} from '@wheelroom/wheelroom'
import { featherIconNames } from '@wheelroom/core'
import { topicOptionsEnglish, topicOptionsDutch } from '@wheelroom/wheel-topic'

export const tableModelConfig: WheelroomComponents = {
  tableRow: {
    fields: {
      variation: {
        items: ['header', 'body', 'footer'],
        type: 'dropdown',
      } as DropdownField,
      heading: {
        type: 'shortText',
      } as ShortTextField,
      abstract: {
        type: 'longText',
      } as LongTextField,
      icon: {
        items: featherIconNames,
        type: 'dropdown',
      } as DropdownField,
      actions: {
        allowedComponents: ['action'],
        type: 'multipleComponents',
      } as MultipleComponentsField,
      topics: {
        allowedComponents: ['topic'],
        type: 'multipleComponents',
      } as MultipleComponentsField,
    },
    settings: {
      asBoilerplate: true,
      asFragment: true,
    },
    modelVersion: '1.0.0',
  },
  tableSection: {
    fields: {
      variation: {
        items: ['table', 'price'],
        type: 'dropdown',
      } as DropdownField,
      topicOptions: {
        initialContent: ['Hide icon'],
        items: Object.values(topicOptionsEnglish),
        translations: {
          name: {
            nl: 'Onderwerp opties',
          },
          helpText: {
            nl:
              'Deze opties passen de weergave van de onderwerpen in de sectie aan.',
          },
          items: {
            nl: Object.values(topicOptionsDutch),
          },
        },
        type: 'checkbox',
      } as CheckboxField,
      tableRows: {
        allowedComponents: ['tableRow'],
        type: 'multipleComponents',
      } as MultipleComponentsField,
      eventId: {
        type: 'shortText',
        initialContent: 'initial-content-for-table-section-event-id',
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

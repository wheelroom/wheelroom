import {
  DropdownField,
  LongTextField,
  MultipleComponentsField,
  ShortTextField,
  WheelroomComponents,
} from '@wheelroom/wheelroom'

export const navigationModelConfig: WheelroomComponents = {
  navigation: {
    fields: {
      variation: {
        items: ['actions', 'brand', 'card', 'legal', 'list', 'menu', 'social'],
        type: 'dropdown',
      } as DropdownField,
      segments: {
        allowedComponents: ['navigationSegment'],
        translations: {
          name: {
            nl: 'Navigatie segmenten',
          },
          helpText: {
            nl:
              "Een navigatie segment bevat verwijzingen naar pagina's. Navigatie kan worden opgebouwd uit meerdere segmenten.",
          },
        },
        type: 'multipleComponents',
      } as MultipleComponentsField,
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
        translations: {
          name: {
            nl: 'Navigatiesegment titel',
          },
          helpText: {
            nl:
              'De naam van dit navigatiesegment. Alleen nodig bij meerdere segmenten.',
          },
        },
        type: 'shortText',
      } as ShortTextField,
      abstract: {
        translations: {
          name: {
            nl: 'Segment tekst',
          },
          helpText: {
            nl: 'Tekst voor dit menu segment',
          },
        },
        type: 'longText',
      } as LongTextField,
      actions: {
        allowedComponents: ['action'],
        translations: {
          name: {
            nl: 'Acties voor dit segment',
          },
          helpText: {
            nl: "De pagina's in dit navigatie segment.",
          },
        },
        type: 'multipleComponents',
      } as MultipleComponentsField,
    },
    settings: {
      asBoilerplate: true,
      asFragment: true,
    },
    modelVersion: '1.0.0',
  },
  navigationSection: {
    fields: {
      variation: {
        items: ['header', 'footer', 'sitemap'],
        type: 'dropdown',
      } as DropdownField,
      navigation: {
        allowedComponents: ['navigation'],
        translations: {
          name: {
            nl: 'Sectie navigatie',
          },
          helpText: {
            nl: 'De navigatie die gebruikt wordt in de sectie',
          },
        },
        type: 'multipleComponents',
      } as MultipleComponentsField,
      eventId: {
        initialContent: 'initial-content-for-navigation-section-event-id',
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

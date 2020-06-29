import {
  DropdownField,
  LongTextField,
  MediaField,
  MultipleComponentsField,
  ShortTextField,
  SingleComponentField,
  TagsField,
  WheelroomComponents,
} from '@wheelroom/wheelroom'
import { featherIconNames } from './feather-icon-names'

export const coreModels: WheelroomComponents = {
  action: {
    fields: {
      heading: {
        translations: {
          name: {
            nl: 'Actie naam',
          },
          helpText: {
            nl: 'Naam van de actie, zonder punt aan eind',
          },
        },
        type: 'shortText',
      } as ShortTextField,
      description: {
        translations: {
          name: {
            nl: 'Actie omschrijving',
          },
          helpText: {
            nl: 'Omschrijving van de actie, voor zoekmachines',
          },
        },
        type: 'shortText',
      } as ShortTextField,
      icon: {
        items: featherIconNames,
        type: 'dropdown',
      } as DropdownField,
      page: {
        allowedComponents: ['page'],
        // Limit expanding pages, prevent circ refs
        expandFragmentRef: true,
        translations: {
          name: {
            nl: 'Actie paginalink',
          },
          helpText: {
            nl: 'De pagina waar de actie naar linkt (of gebruik de URL)',
          },
        },
        type: 'singleComponent',
      } as SingleComponentField,
      url: {
        initialContent: 'https://localhost:8000',
        translations: {
          name: {
            nl: 'Actie URL',
          },
          helpText: {
            nl: 'De URL waar de actie naar linkt (of gebruik de paginalink)',
          },
        },
        type: 'shortText',
        typePostfix: 'Url',
      } as ShortTextField,
      anchor: {
        translations: {
          helpText: {
            'en-US': 'Example: my-anchor',
            nl: 'Voorbeeld: mijn-anchor',
          },
        },
        type: 'shortText',
      } as ShortTextField,
      query: {
        translations: {
          helpText: {
            'en-US': 'Example: &x=1&y=2',
            nl: 'Voorbeeld: &x=1&y=2',
          },
        },
        type: 'shortText',
      } as ShortTextField,
      eventId: {
        initialContent: 'initial-content-for-action-event-id',
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
    settings: {
      asBoilerplate: true,
      asFragment: true,
    },
    modelVersion: '1.0.0',
  },
  embed: {
    fields: {
      code: {
        type: 'longText',
      } as LongTextField,
      type: {
        items: ['html', 'js-app', 'js-page', 'js-action', 'js-page-section'],
        type: 'dropdown',
      } as DropdownField,
    },
    settings: {
      asBoilerplate: true,
      asFragment: true,
    },
    modelVersion: '1.0.0',
  },
  globals: {
    fields: {
      siteAuthor: {
        translations: {
          name: {
            nl: 'Site auteur',
          },
          helpText: {
            nl: 'Beschiknaar in alle secties',
          },
        },
        type: 'shortText',
      } as ShortTextField,
      siteDescription: {
        translations: {
          name: {
            nl: 'Site omschrijving',
          },
          helpText: {
            nl:
              'Omschrijving van de site, gebruikt door zoek machines zoals Google',
          },
        },
        type: 'shortText',
      } as ShortTextField,
      siteHeading: {
        translations: {
          name: {
            nl: 'Site titel',
          },
          helpText: {
            nl: 'Titel van de site, gebruikt door zoek machines zoals Google',
          },
        },
        type: 'shortText',
      } as ShortTextField,
      siteKeywords: {
        translations: {
          name: {
            nl: 'Site sleutelwoorden',
          },
          helpText: {
            nl:
              'Sleutelwoorden voor de site, gebruikt door zoek machines zoals Google',
          },
        },
        type: 'tags',
      } as TagsField,
      siteImage: {
        type: 'media',
        typePostfix: 'Image',
      } as MediaField,
      siteEmbeds: {
        allowedComponents: ['embed'],
        type: 'multipleComponents',
      } as MultipleComponentsField,
      skipToContentHeading: {
        translations: {
          name: {
            nl: 'Direct naar content',
          },
          helpText: {
            nl:
              'Tekst voor schermlezers om direct door te gaan naar de content.',
          },
        },
        type: 'shortText',
      } as ShortTextField,
    },
    modelVersion: '1.0.0',
    settings: {
      asFragment: true,
      asQuery: 'global',
    },
  },
  mediaBreakpoint: {
    fields: {
      small: {
        type: 'media',
        typePostfix: 'Image',
      } as MediaField,
      medium: {
        type: 'media',
        typePostfix: 'Image',
      } as MediaField,
      large: {
        type: 'media',
        typePostfix: 'Image',
      } as MediaField,
      extraLarge: {
        type: 'media',
        typePostfix: 'Image',
      } as MediaField,
    },
    settings: {
      asBoilerplate: true,
      asFragment: true,
    },
    modelVersion: '1.0.0',
  },
  page: {
    fields: {
      path: {
        initialContent: '/boilerplate',
        required: true,
        translations: {
          name: {
            nl: 'Pagina URL',
          },
          helpText: {
            nl:
              'Laatste deel van de URL naar deze pagina. Bijvoorbeeld: www.mijnsite.nl/stel-dit-deel-hier-in',
          },
        },
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
        translations: {
          name: {
            nl: 'Paginasecties',
          },
          helpText: {
            nl: 'Kies de secties die met elkaar deze pagina vormen',
          },
        },
        type: 'multipleComponents',
      } as MultipleComponentsField,
      theme: {
        items: ['yosemiteLight', 'yosemiteDark'],
        translations: {
          name: {
            nl: 'Paginathema',
          },
          helpText: {
            nl: 'Kies het thema voor deze pagina',
          },
        },
        type: 'dropdown',
      } as DropdownField,
      seoTitle: {
        translations: {
          name: {
            nl: 'SEO titel',
          },
          helpText: {
            nl: 'Titel van de pagina, gebruikt door zoek machines zoals Google',
          },
        },
        type: 'shortText',
      } as ShortTextField,
      seoDescription: {
        maxLength: 155,
        translations: {
          name: {
            nl: 'SEO omschrijving',
          },
          helpText: {
            nl:
              'Omschrijving van de pagina, gebruikt door zoek machines zoals Google',
          },
        },
        type: 'shortText',
      } as ShortTextField,
      seoImage: {
        translations: {
          name: {
            nl: 'SEO afbeelding',
          },
          helpText: {
            nl:
              'Afbeelding bij de pagina, wordt meegegeven aan een link en weergegeven door social media',
          },
        },
        type: 'media',
        typePostfix: 'Image',
      } as MediaField,
      seoKeywords: {
        type: 'tags',
      } as TagsField,
    },
    modelVersion: '1.0.0',
    settings: {
      asFragment: true,
      asQuery: 'page',
    },
  },
}

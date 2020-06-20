import {
  CheckboxField,
  DropdownField,
  LongTextField,
  MediaField,
  MultipleComponentsField,
  RichTextField,
  ShortTextField,
  SingleComponentField,
  TagsField,
  WheelroomComponents,
} from '@wheelroom/wheelroom'
import { featherIconNames } from '../feather-icon-names'
import { topicOptions } from './topic-options'

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
  navigation: {
    fields: {
      variation: {
        items: ['menu', 'list', 'actions', 'social', 'brand', 'legal'],
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
        items: ['header', 'footer'],
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
        items: ['light', 'dark'],
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
  pageSection: {
    fields: {
      variation: {
        items: [
          'block',
          'card',
          'divider',
          'featured',
          'gallery',
          'headline',
          'hero',
          'image',
          'quote',
          'showcase',
          'video',
        ],
        translations: {
          name: {
            nl: 'Sectie weergave',
          },
          helpText: {
            nl: 'Hoe de sectie wordt weergegeven',
          },
        },
        type: 'dropdown',
      } as DropdownField,
      topics: {
        allowedComponents: ['topic'],
        translations: {
          name: {
            nl: 'Sectie onderwerpen',
          },
          helpText: {
            nl:
              'Eén of meerder onderwerpen die worden weergegeven in de sectie',
          },
        },
        type: 'multipleComponents',
      } as MultipleComponentsField,
      topicOptions: {
        initialContent: ['Hide icon'],
        items: topicOptions.en,
        translations: {
          name: {
            nl: 'Onderwerp opties',
          },
          helpText: {
            nl:
              'Deze opties passen de weergave van de onderwerpen in de sectie aan.',
          },
          items: {
            nl: [
              'Verberg actie',
              'Verberg icoon',
              'Verberg media',
              'Verberg tekst',
              'Verberg titel',
              'Draai volgorde om',
            ],
          },
        },
        type: 'checkbox',
      } as CheckboxField,
      eventId: {
        initialContent: 'initial-content-for-page-section-event-id',
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
  text: {
    fields: {
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
    },
    modelVersion: '1.0.0',
    settings: {
      asBoilerplate: true,
      asFragment: true,
    },
  },
  textSection: {
    fields: {
      variation: {
        items: ['text'],
        type: 'dropdown',
      } as DropdownField,
      text: {
        allowedComponents: ['text'],
        translations: {
          name: {
            nl: 'Sectie tekst',
          },
          helpText: {
            nl: 'Tekst die wordt weergegeven in de sectie',
          },
        },
        type: 'singleComponent',
      } as SingleComponentField,
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
  topic: {
    fields: {
      heading: {
        translations: {
          name: {
            nl: 'Onderwerp titel',
          },
          helpText: {
            nl: 'Titel van het onderwerp, zonder punt aan eind',
          },
        },
        type: 'shortText',
      } as ShortTextField,
      abstract: {
        translations: {
          name: {
            nl: 'Onderwerp tekst',
          },
          helpText: {
            nl: 'Korte omschrijving van het onderwerp, sluit af met een punt',
          },
        },
        type: 'longText',
      } as LongTextField,
      media: {
        translations: {
          name: {
            nl: 'Onderwerp afbeelding',
          },
          helpText: {
            nl: 'Afbeelding bij het onderwerp',
          },
        },
        type: 'media',
      } as MediaField,
      icon: {
        items: featherIconNames,
        translations: {
          name: {
            nl: 'Onderwerp icoon',
          },
          helpText: {
            nl: 'Icoon bij het onderwerp',
          },
        },
        type: 'dropdown',
      } as DropdownField,
      actions: {
        allowedComponents: ['action'],
        translations: {
          name: {
            nl: 'Onderwerp acties',
          },
          helpText: {
            nl:
              'Eén of meerdere acties bij het onderwerp. Een actie heeft een eigen naam en kan ook linken naar een extern bron.',
          },
        },
        type: 'multipleComponents',
      } as MultipleComponentsField,
      poster: {
        type: 'media',
        typePostfix: 'Image',
      } as MediaField,
      mediaEmbed: {
        helpText:
          'Add a Youtube/Vimeo embed code. Note: Media embed only uses Embed-type: html',
        allowedComponents: ['embed'],
        translations: {
          helpText: {
            nl:
              'Voeg Youtube/Vimeo embed code toe. Note: Media embed ondersteund alleen Embed-type: html',
          },
        },
        type: 'singleComponent',
      } as SingleComponentField,
      mediaBreakpoint: {
        helpText: 'Display a different media asset on each Breakpoint',
        allowedComponents: ['mediaBreakpoint'],
        translations: {
          helpText: {
            nl: 'Laat verschillende media asset zien op iedere Breakpoint',
          },
        },
        type: 'singleComponent',
      } as SingleComponentField,
    },
    settings: {
      asBoilerplate: true,
      asFragment: true,
    },
    modelVersion: '1.0.0',
  },
}

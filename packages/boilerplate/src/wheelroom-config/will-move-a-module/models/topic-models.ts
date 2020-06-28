import {
  CheckboxField,
  DropdownField,
  LongTextField,
  MediaField,
  MultipleComponentsField,
  ShortTextField,
  SingleComponentField,
  WheelroomComponents,
} from '@wheelroom/wheelroom'
import { featherIconNames } from '../feather-icon-names'
import { topicOptions } from './topic-options'

export const topicModels: WheelroomComponents = {
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
  topicSection: {
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
            nl: topicOptions.nl,
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
}

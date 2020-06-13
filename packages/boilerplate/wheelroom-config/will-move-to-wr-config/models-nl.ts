import {
  CheckboxField,
  DateField,
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
import { featherIcons } from './feather-icons'

export const models: WheelroomComponents = {
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
  topic: {
    fields: {
      heading: {
        helpText: 'Titel van het onderwerp, zonder punt aan eind',
        name: 'Onderwerp titel',
        type: 'shortText',
      } as ShortTextField,
      abstract: {
        helpText: 'Korte omschrijving van het onderwerp, sluit af met een punt',
        name: 'Onderwerp tekst',
        type: 'longText',
      } as LongTextField,
      media: {
        helpText: 'Afbeelding bij het onderwerp',
        name: 'Onderwerp afbeelding',
        type: 'media',
      } as MediaField,
      icon: {
        helpText: 'Icoon bij het onderwerp',
        name: 'Onderwerp icoon',
        items: featherIcons,
        type: 'dropdown',
      } as DropdownField,
      actions: {
        allowedComponents: ['action'],
        helpText:
          'Eén of meerdere acties bij het onderwerp. Een actie heeft een eigen naam en kan ook linken naar een extern bron.',
        name: 'Onderwerp acties',
        type: 'multipleComponents',
      } as MultipleComponentsField,
      poster: {
        type: 'media',
        typePostfix: 'Image',
      } as MediaField,
      mediaEmbed: {
        helpText:
          'Voeg Youtube/Vimeo embed code toe. Note: Media embed ondersteund alleen Embed-type: html',
        allowedComponents: ['embed'],
        type: 'singleComponent',
      } as SingleComponentField,
      mediaBreakpoint: {
        helpText: 'Laat verschillende media asset zien op iedere Breakpoint',
        allowedComponents: ['mediaBreakpoint'],
        type: 'singleComponent',
      } as SingleComponentField,
    },
    settings: {
      asBoilerplate: true,
      asFragment: true,
    },
    modelVersion: '1.0.0',
  },
  topicTable: {
    fields: {
      heading: {
        type: 'shortText',
      } as ShortTextField,
      abstract: {
        type: 'longText',
      } as LongTextField,
      icon: {
        items: featherIcons,
        type: 'dropdown',
      } as DropdownField,
      actions: {
        allowedComponents: ['action'],
        type: 'multipleComponents',
      } as MultipleComponentsField,
      rows: {
        allowedComponents: ['topicRow'],
        type: 'multipleComponents',
      } as MultipleComponentsField,
    },
    settings: {
      asBoilerplate: true,
      asFragment: true,
    },
    modelVersion: '1.0.0',
  },
  topicRow: {
    fields: {
      variation: {
        items: ['header', 'footer'],
        type: 'dropdown',
      } as DropdownField,
      heading: {
        type: 'shortText',
      } as ShortTextField,
      abstract: {
        type: 'longText',
      } as LongTextField,
      icon: {
        items: featherIcons,
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
  action: {
    fields: {
      heading: {
        helpText: 'Naam van de actie, zonder punt aan eind',
        name: 'Actie naam',
        type: 'shortText',
      } as ShortTextField,
      description: {
        helpText: 'Omschrijving van de actie, voor zoekmachines',
        name: 'Actie omschrijving',
        type: 'shortText',
      } as ShortTextField,
      icon: {
        items: featherIcons,
        type: 'dropdown',
      } as DropdownField,
      page: {
        allowedComponents: ['page'],
        // Limit expanding pages, prevent circ refs
        expandFragmentRef: true,
        helpText: 'De pagina waar de actie naar linkt (of gebruik de URL)',
        name: 'Actie paginalink',
        type: 'singleComponent',
      } as SingleComponentField,
      url: {
        helpText: 'De URL waar de actie naar linkt (of gebruik de paginalink)',
        initialContent: 'https://localhost:8000',
        name: 'Actie URL',
        type: 'shortText',
        typePostfix: 'Url',
      } as ShortTextField,
      anchor: {
        helpText: 'Voorbeeld: mijn-anchor',
        type: 'shortText',
      } as ShortTextField,
      query: {
        helpText: 'Voorbeeld: &x=1&y=2',
        type: 'shortText',
      } as ShortTextField,
      eventId: {
        initialContent: 'initial-content-voor-action-event-id',
        typePostfix: 'Slug',
        helpText: 'Voorbeeld: mijn-event-id',
        type: 'shortText',
        unique: true,
      } as ShortTextField,
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
        helpText:
          'De naam van dit navigatiesegment. Alleen nodig bij meerdere segmenten.',
        name: 'Navigatiesegment titel',
        type: 'shortText',
      } as ShortTextField,
      actions: {
        allowedComponents: ['action'],
        helpText: "De pagina's in dit navigatie segment.",
        name: 'Navigatiesegment van Actions',
        type: 'multipleComponents',
      } as MultipleComponentsField,
    },
    settings: {
      asBoilerplate: true,
      asFragment: true,
    },
    modelVersion: '1.0.0',
  },
  navigation: {
    fields: {
      segments: {
        allowedComponents: ['navigationSegment'],
        helpText:
          "Een navigatie segment bevat verwijzingen naar pagina's. Navigatie kan worden opgebouwd uit meerdere segmenten.",
        name: 'Navigatie segmenten',
        type: 'multipleComponents',
      } as MultipleComponentsField,
      skipToContentHeading: {
        helpText:
          'Tekst voor schermlezers om direct door te gaan naar de content.',
        name: 'Direct naar content',
        type: 'shortText',
      } as ShortTextField,
      brandAction: {
        allowedComponents: ['action'],
        helpText: 'Actie die wordt gebruikt voor het logo',
        name: 'Logo actie',
        type: 'singleComponent',
      } as SingleComponentField,
    },
    settings: {
      asBoilerplate: true,
      asFragment: true,
    },
    modelVersion: '1.0.0',
  },
  text: {
    fields: {
      text: {
        helpText: 'Eenvoudig opgemaakte tekstveld met kopjes en afbeeldingen',
        name: 'Tekst',
        required: true,
        type: 'richText',
      } as RichTextField,
    },
    modelVersion: '1.0.0',
    settings: {
      asBoilerplate: true,
      asFragment: true,
    },
  },
  pageSection: {
    fields: {
      variation: {
        helpText: 'Hoe de sectie wordt weergegeven',
        name: 'Sectie weergave',
        items: [
          'block-wr',
          'blog-wr',
          'blog-list-wr',
          'card-wr',
          'divider-wr',
          'featured-wr',
          'gallery-wr',
          'headline-wr',
          'hero-wr',
          'image-wr',
          'navigation-wr',
          'price-table-wr',
          'quote-wr',
          'showcase-wr',
          'text-wr',
          'video-wr',
        ],
        type: 'dropdown',
      } as DropdownField,
      topics: {
        allowedComponents: ['topic'],
        helpText:
          'Eén of meerder onderwerpen die worden weergegeven in de sectie',
        name: 'Sectie onderwerpen',
        type: 'multipleComponents',
      } as MultipleComponentsField,
      topicOptions: {
        helpText:
          'Deze opties passen de weergave van de onderwerpen in de sectie aan.',
        initialContent: ['Verberg icoon'],
        items: [
          'Verberg actie',
          'Verberg icoon',
          'Verberg media',
          'Verberg tekst',
          'Verberg titel',
          'Draai volgorde om',
        ],
        name: 'Onderwerp opties',
        type: 'checkbox',
      } as CheckboxField,
      text: {
        allowedComponents: ['text'],
        helpText: 'Tekst die wordt weergegeven in de sectie',
        name: 'Sectie tekst',
        type: 'singleComponent',
      } as SingleComponentField,
      topicTables: {
        allowedComponents: ['topicTable'],
        type: 'multipleComponents',
      } as MultipleComponentsField,
      navigation: {
        allowedComponents: ['navigation'],
        helpText: 'De navigatie die gebruikt wordt in de sectie',
        name: 'Sectie navigatie',
        type: 'multipleComponents',
      } as MultipleComponentsField,
      actions: {
        allowedComponents: ['action'],
        helpText:
          'Eén of meerdere acties in de sectie. Een actie heeft een eigen naam en kan ook linken naar een extern bron.',
        name: 'Sectie acties',
        type: 'multipleComponents',
      } as MultipleComponentsField,
      eventId: {
        type: 'shortText',
        initialContent: 'initial-content-voor-page-section-event-id',
        typePostfix: 'Slug',
        helpText: 'Voorbeeld: mijn-event-id',
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
        helpText:
          'Laatste deel van de URL naar deze pagina. Bijvoorbeeld: www.mijnsite.nl/stel-dit-deel-hier-in',
        initialContent: '/boilerplate',
        name: 'Pagina URL',
        required: true,
        type: 'shortText',
        typePostfix: 'Path',
        unique: true,
      } as ShortTextField,
      sections: {
        allowedComponents: [
          '%componentNameArray(filter:settings.asPageSection)%',
        ],
        helpText: 'Kies de secties die met elkaar deze pagina vormen',
        initialContent: ['%componentNameArray(filter:settings.asPageSection)%'],
        name: 'Paginasecties',
        required: true,
        type: 'multipleComponents',
      } as MultipleComponentsField,
      theme: {
        helpText: 'Kies het thema voor deze pagina',
        items: ['light', 'dark'],
        name: 'Paginathema',
        type: 'dropdown',
      } as DropdownField,
      seoTitle: {
        helpText:
          'Titel van de pagina, gebruikt door zoek machines zoals Google',
        name: 'SEO titel',
        type: 'shortText',
      } as ShortTextField,
      seoDescription: {
        helpText:
          'Omschrijving van de pagina, gebruikt door zoek machines zoals Google',
        maxLength: 155,
        name: 'SEO omschrijving',
        type: 'shortText',
      } as ShortTextField,
      seoImage: {
        helpText:
          'Afbeelding bij de pagina, wordt meegegeven aan een link en weergegeven door social media',
        name: 'SEO afbeelding',
        type: 'media',
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
  blog: {
    fields: {
      slug: {
        initialContent: 'initial-content-for-slug',
        required: true,
        type: 'shortText',
        typePostfix: 'Slug',
        unique: true,
      } as ShortTextField,
      date: {
        helpText: 'Override Contentful publish date',
        type: 'date',
      } as DateField,
      text: {
        required: true,
        type: 'richText',
      } as RichTextField,
      labels: {
        allowedComponents: ['topic'],
        type: 'multipleComponents',
      } as MultipleComponentsField,
      topics: {
        required: true,
        allowedComponents: ['topic'],
        type: 'multipleComponents',
      } as MultipleComponentsField,
      authors: {
        allowedComponents: ['topic'],
        type: 'multipleComponents',
      } as MultipleComponentsField,
      seoTitle: {
        type: 'shortText',
      } as ShortTextField,
      seoDescription: {
        maxLength: 155,
        type: 'shortText',
      } as ShortTextField,
      seoImage: {
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
      asQuery: 'subPage',
    },
  },
  globals: {
    fields: {
      siteAuthor: {
        helpText: 'Beschiknaar in alle secties',
        name: 'Site auteur',
        type: 'shortText',
      } as ShortTextField,
      siteDescription: {
        helpText:
          'Omschrijving van de site, gebruikt door zoek machines zoals Google',
        name: 'Site omschrijving',
        type: 'shortText',
      } as ShortTextField,
      siteHeading: {
        helpText: 'Titel van de site, gebruikt door zoek machines zoals Google',
        name: 'Site titel',
        type: 'shortText',
      } as ShortTextField,
      siteKeywords: {
        helpText:
          'Sleutelwoorden voor de site, gebruikt door zoek machines zoals Google',
        name: 'Site sleutelwoorden',
        type: 'tags',
      } as TagsField,
      siteEmbeds: {
        allowedComponents: ['embed'],
        type: 'multipleComponents',
      } as MultipleComponentsField,
    },
    modelVersion: '1.0.0',
    settings: {
      asFragment: true,
      asQuery: 'global',
    },
  },
}

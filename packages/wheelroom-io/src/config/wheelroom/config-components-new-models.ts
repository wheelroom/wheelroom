import {
  DropdownField,
  ImageField,
  LongTextField,
  MultipleComponentsField,
  RichTextField,
  ShortTextField,
  SingleComponentField,
  TagsField,
  WheelroomComponents,
} from '@jacco-meijer/wheelroom'

export const configComponents: WheelroomComponents = {
  topic: {
    fields: {
      heading: {
        helpText: 'Titel voor het onderwerp',
        name: 'Onderwerp titel',
        type: 'shortText',
      } as ShortTextField,
      subHeading: {
        helpText: 'Subtitel voor het onderwerp',
        name: 'Onderwerp ondertitel',
        type: 'shortText',
      } as ShortTextField,
      image: {
        helpText: 'Afbeelding bij het onderwerp',
        name: 'Onderwerp afbeelding',
        type: 'image',
      } as ImageField,
      abstract: {
        helpText: 'Korte omschrijving van het onderwerp',
        name: 'Onderwerp tekst',
        type: 'longText',
      } as LongTextField,
      link: {
        allowedComponents: ['page'],
        expandFragmentRef: true,
        helpText:
          'Navigeer naar deze pagina wanneer op het onderwerp geklikt wordt',
        name: 'Onderwerp link',
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
  navigationSection: {
    fields: {
      variation: {
        helpText: 'Hoe de sectie wordt weergegeven',
        name: 'Sectie weergave',
        items: ['Homepagina bovenkant', 'Pagina bovenkant', 'Pagina onderkant'],
        type: 'dropdown',
      } as DropdownField,
      topic: {
        allowedComponents: ['topic'],
        expandFragmentRef: true,
        helpText: 'Het onderwerp voor de sectie',
        name: 'Sectie onderwerp',
        type: 'singleComponent',
      } as SingleComponentField,
      navigation: {
        allowedComponents: ['page'],
        expandFragmentRef: true,
        helpText: "Pagina's in het menu van de sectie",
        name: 'Menuitems',
        required: true,
        type: 'multipleComponents',
      } as MultipleComponentsField,
    },
    modelVersion: '1.0.0',
    settings: {
      asBoilerplate: true,
      asFragment: true,
      asPageSection: true,
    },
  },
  pageSection: {
    fields: {
      variation: {
        helpText: 'Hoe de sectie wordt weergegeven',
        name: 'Sectie weergave',
        items: ['Groot', 'Klein'],
        type: 'dropdown',
      } as DropdownField,
      topics: {
        allowedComponents: ['topic'],
        expandFragmentRef: true,
        helpText: 'De onderwerpen voor de sectie',
        name: 'Sectie onderwerpen',
        type: 'multipleComponents',
      } as MultipleComponentsField,
      text: {
        allowedComponents: ['text'],
        expandFragmentRef: true,
        helpText: 'Tekst voor de sectie',
        name: 'Sectie tekst',
        type: 'singleComponent',
      } as SingleComponentField,
    },
    modelVersion: '1.0.0',
    settings: {
      asBoilerplate: true,
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
      navigationHeading: {
        helpText:
          'Naam van de pagina wanneer deze wordt weergegeven om te navigeren',
        name: 'Navigatietitel',
        type: 'shortText',
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
    },
    modelVersion: '1.0.0',
    settings: {
      asFragment: true,
      asQuery: 'page',
    },
  },
  globals: {
    fields: {
      addressLine1: {
        helpText: 'Beschiknaar in alle secties',
        name: 'Adres eerste regel',
        type: 'shortText',
      } as ShortTextField,
      addressLine2: {
        helpText: 'Beschiknaar in alle secties',
        name: 'Adres tweede regel',
        type: 'shortText',
      } as ShortTextField,
      emailAddress: {
        helpText: 'Beschiknaar in alle secties',
        name: 'E=mailadres',
        type: 'shortText',
      } as ShortTextField,
      linkedinUrl: {
        helpText: 'Beschiknaar in alle secties',
        name: 'Url naar linkedin profiel',
        type: 'shortText',
      } as ShortTextField,
      phoneNumber: {
        helpText: 'Beschiknaar in alle secties',
        name: 'Telefoonnummer',
        type: 'shortText',
      } as ShortTextField,
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
    },
    modelVersion: '1.0.0',
    settings: {
      asFragment: true,
      asQuery: 'global',
    },
  },
}

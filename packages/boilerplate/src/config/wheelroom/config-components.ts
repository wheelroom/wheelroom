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
  footerSection: {
    fields: {
      backgroundColor: {
        helpText: 'Kies een achtergrondkleur voor deze sectie',
        items: ['green', 'mint'],
        name: 'Sectie achtergrondkleur',
        required: true,
        type: 'dropdown',
      } as DropdownField,
      navigation: {
        allowedComponents: ['navigation'],
        helpText: 'Navigatie onderaan deze sectie',
        name: 'Sectienavigatie',
        required: true,
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
  listItem: {
    fields: {
      view: {
        helpText: 'Hoe wordt de tegel weergegeven?',
        name: 'Tegelweergave',
        items: ['onderkant mint', 'onderkant groen', 'volledige afbeelding'],
        type: 'dropdown',
      } as DropdownField,
      link: {
        allowedComponents: ['page'],
        expandFragmentRef: true,
        helpText: 'Navigeer naar deze link bij klik op de tegel',
        name: 'Tegel-link',
        type: 'singleComponent',
      } as SingleComponentField,
      heading: {
        helpText: 'Gebruik deze titel en niet die van de link',
        name: 'Tegeltitel',
        type: 'shortText',
      } as ShortTextField,
      image: {
        helpText: 'Gebruik deze afbeelding en niet die van de link',
        name: 'Tegelafbeelding',
        type: 'image',
      } as ImageField,
      abstract: {
        helpText:
          'Gebruik deze tekst op de tegel en niet de samenvattingstekst van de link',
        name: 'Tegeltekst',
        type: 'longText',
      } as LongTextField,
      extraText: {
        helpText:
          'In eerste instantie verborgen, verschijnt na interactie zoals bijvoorbeeld een klik',
        name: 'Tegeltekst bij interactie',
        type: 'shortText',
      } as ShortTextField,
    },
    modelVersion: '1.0.0',
    settings: {
      asBoilerplate: true,
      asFragment: true,
    },
  },
  listSection: {
    fields: {
      variation: {
        helpText: 'Hoe deze sectie wordt weergegeven',
        items: ['grote tegels', 'kleine tegels'],
        name: 'Sectieweergave',
        required: true,
        type: 'dropdown',
      } as DropdownField,
      items: {
        allowedComponents: ['listItem'],
        helpText: 'Tegels in deze sectie',
        name: 'Sectietegels',
        required: true,
        type: 'multipleComponents',
      } as MultipleComponentsField,
      heading: {
        helpText: 'Titel bovenaan deze sectie',
        name: 'Sectietitel',
        type: 'shortText',
      } as ShortTextField,
    },
    modelVersion: '1.0.0',
    settings: {
      asBoilerplate: true,
      asFragment: true,
      asPageSection: true,
    },
  },
  navigation: {
    fields: {
      pages: {
        allowedComponents: ['page'],
        expandFragmentRef: true,
        helpText: "Pagina's in deze navigatie",
        name: "Pagina's",
        required: true,
        type: 'multipleComponents',
      } as MultipleComponentsField,
    },
    modelVersion: '1.0.0',
    settings: {
      asBoilerplate: true,
      asFragment: true,
    },
  },
  openerSection: {
    fields: {
      variation: {
        helpText: 'Hoe deze sectie wordt weergegeven',
        items: ['home pagina', 'normale pagina'],
        name: 'Sectieweergave',
        required: true,
        type: 'dropdown',
      } as DropdownField,
      navigation: {
        allowedComponents: ['navigation'],
        helpText: 'Navigatie in deze sectie',
        name: 'Sectienavigatie',
        required: true,
        type: 'singleComponent',
      } as SingleComponentField,
      boxBackgroundColor: {
        helpText: 'Kies een achtergrondkleur voor de tekstbox in deze sectie',
        items: ['green', 'mint'],
        name: 'Tekstboxachtergrondkleur',
        required: true,
        type: 'dropdown',
      } as DropdownField,
      heading: {
        helpText: 'Gebruik deze titel in deze sectie en niet de paginatitel',
        name: 'Sectietitel',
        type: 'shortText',
      } as ShortTextField,
      image: {
        helpText:
          'Gebruik deze afbeelding in deze sectie en niet de pagina-afbeelding',
        name: 'Sectieafbeelding',
        type: 'image',
      } as ImageField,
      abstract: {
        helpText:
          'Gebruik deze tekst in deze sectie en niet de samenvattingstekst van de pagina',
        name: 'Tekstboxtekst',
        type: 'longText',
      },
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
      heading: {
        helpText:
          'Titel van de pagina, wordt gebruikt in andere secties als die geen eigen titel hebben',
        name: 'Paginatitel',
        required: true,
        type: 'shortText',
      } as ShortTextField,
      navigationHeading: {
        helpText:
          'Naam van de pagina wanneer deze wordt weergegeven om te navigeren',
        name: 'Navigatietitel',
        type: 'shortText',
      } as ShortTextField,
      image: {
        helpText:
          'Afbeelding van de pagina, wordt gebruikt in andere secties als die geen eigen afbeelding hebben',
        name: 'Paginaafbeelding',
        type: 'image',
      } as ImageField,
      abstract: {
        helpText:
          'Samenvatting van de pagina, wordt gebruikt in andere secties als die geen eigen samenvatting hebben',
        name: 'Paginasamenvatting',
        type: 'longText',
      },
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
  quoteSection: {
    fields: {
      heading: {
        helpText: 'Naam van de persoon die deze uitspraak deed',
        name: 'Naam persoon',
        required: true,
        type: 'shortText',
      } as ShortTextField,
      subHeading: {
        helpText: 'In welke functie de persoon deze uitspraak deed',
        name: 'Functie persoon',
        required: true,
        type: 'shortText',
      } as ShortTextField,
      abstract: {
        helpText: 'Dat wat de persoon gezegd heeft',
        name: 'Uitspraak',
        required: true,
        type: 'longText',
      },
      image: {
        helpText: 'Afbeelding van de persoon',
        name: 'Foto persoon',
        type: 'image',
      } as ImageField,
    },
    modelVersion: '1.0.0',
    settings: {
      asBoilerplate: true,
      asFragment: true,
      asPageSection: true,
    },
  },
  textSection: {
    fields: {
      text: {
        helpText: 'Eenvoudig opgemaakte tekst veld met kopjes en afbeeldingen',
        name: 'Tekst',
        required: true,
        type: 'richText',
      } as RichTextField,
    },
    modelVersion: '1.0.0',
    settings: {
      asBoilerplate: true,
      asFragment: true,
      asPageSection: true,
    },
  },
}

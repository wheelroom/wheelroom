export const contentTypes = {
  sys: {
    type: 'Array',
  },
  total: 9,
  skip: 0,
  limit: 100,
  items: [
    {
      sys: {
        space: {
          sys: {
            type: 'Link',
            linkType: 'Space',
            id: 'jeb9ft1t2asv',
          },
        },
        type: 'ContentType',
        id: 'listItem',
        revision: 7,
        createdAt: '2020-02-12T14:57:32.736Z',
        updatedAt: '2020-02-13T09:04:07.054Z',
        environment: {
          sys: {
            id: 'master',
            type: 'Link',
            linkType: 'Environment',
          },
        },
      },
      displayField: 'title',
      name: 'listItem',
      description: 'List item',
      fields: [
        {
          id: 'title',
          name: 'Titel binnen Contentful',
          type: 'Symbol',
          localized: false,
          required: true,
          disabled: false,
          omitted: false,
        },
        {
          id: 'view',
          name: 'Tegelweergave',
          type: 'Symbol',
          localized: false,
          required: false,
          disabled: false,
          omitted: false,
        },
        {
          id: 'link',
          name: 'Tegel-link',
          type: 'Link',
          localized: false,
          required: false,
          disabled: false,
          omitted: false,
          linkType: 'Entry',
        },
        {
          id: 'heading',
          name: 'Tegeltitel',
          type: 'Symbol',
          localized: false,
          required: false,
          disabled: false,
          omitted: false,
        },
        {
          id: 'image',
          name: 'Tegelafbeelding',
          type: 'Link',
          localized: false,
          required: false,
          disabled: false,
          omitted: false,
          linkType: 'Asset',
        },
        {
          id: 'abstract',
          name: 'Tegeltekst',
          type: 'Text',
          localized: false,
          required: false,
          disabled: false,
          omitted: false,
        },
        {
          id: 'extraText',
          name: 'Tegeltekst bij interactie',
          type: 'Symbol',
          localized: false,
          required: false,
          disabled: false,
          omitted: false,
        },
        {
          id: 'modelVersion',
          name: '1.0.0',
          type: 'Symbol',
          localized: false,
          required: false,
          disabled: true,
          omitted: false,
        },
      ],
    },
    {
      sys: {
        space: {
          sys: {
            type: 'Link',
            linkType: 'Space',
            id: 'jeb9ft1t2asv',
          },
        },
        type: 'ContentType',
        id: 'page',
        revision: 4,
        createdAt: '2020-02-12T19:30:41.549Z',
        updatedAt: '2020-02-13T08:19:22.445Z',
        environment: {
          sys: {
            id: 'master',
            type: 'Link',
            linkType: 'Environment',
          },
        },
      },
      displayField: 'title',
      name: 'page',
      description: 'Page',
      fields: [
        {
          id: 'title',
          name: 'Titel binnen Contentful',
          type: 'Symbol',
          localized: false,
          required: true,
          disabled: false,
          omitted: false,
        },
        {
          id: 'path',
          name: 'Pagina URL',
          type: 'Symbol',
          localized: false,
          required: true,
          disabled: false,
          omitted: false,
        },
        {
          id: 'sections',
          name: 'Paginasecties',
          type: 'Array',
          localized: false,
          required: true,
          disabled: false,
          omitted: false,
          items: {
            type: 'Link',
            validations: [
              {
                linkContentType: [
                  'footerSection',
                  'listSection',
                  'openerSection',
                  'quoteSection',
                  'textSection',
                ],
              },
            ],
            linkType: 'Entry',
          },
        },
        {
          id: 'heading',
          name: 'Paginatitel',
          type: 'Symbol',
          localized: true,
          required: true,
          disabled: false,
          omitted: false,
        },
        {
          id: 'navigationHeading',
          name: 'Navigatietitel',
          type: 'Symbol',
          localized: false,
          required: false,
          disabled: false,
          omitted: false,
        },
        {
          id: 'image',
          name: 'Pagina-afbeelding',
          type: 'Link',
          localized: false,
          required: false,
          disabled: false,
          omitted: false,
          linkType: 'Asset',
        },
        {
          id: 'abstract',
          name: 'Paginasamenvatting',
          type: 'Text',
          localized: false,
          required: false,
          disabled: false,
          omitted: false,
        },
        {
          id: 'seoTitle',
          name: 'SEO titel',
          type: 'Symbol',
          localized: false,
          required: false,
          disabled: false,
          omitted: false,
        },
        {
          id: 'seoDescription',
          name: 'SEO omschrijving',
          type: 'Symbol',
          localized: false,
          required: false,
          disabled: false,
          omitted: false,
        },
        {
          id: 'modelVersion',
          name: '1.0.0',
          type: 'Symbol',
          localized: false,
          required: false,
          disabled: true,
          omitted: false,
        },
      ],
    },
    {
      sys: {
        space: {
          sys: {
            type: 'Link',
            linkType: 'Space',
            id: 'jeb9ft1t2asv',
          },
        },
        type: 'ContentType',
        id: 'footerSection',
        revision: 3,
        createdAt: '2020-02-12T14:57:35.018Z',
        updatedAt: '2020-02-12T19:30:39.197Z',
        environment: {
          sys: {
            id: 'master',
            type: 'Link',
            linkType: 'Environment',
          },
        },
      },
      displayField: 'title',
      name: 'footerSection',
      description: 'Footer section',
      fields: [
        {
          id: 'title',
          name: 'Titel binnen Contentful',
          type: 'Symbol',
          localized: false,
          required: true,
          disabled: false,
          omitted: false,
        },
        {
          id: 'backgroundColor',
          name: 'Sectie achtergrondkleur',
          type: 'Symbol',
          localized: false,
          required: true,
          disabled: false,
          omitted: false,
        },
        {
          id: 'navigation',
          name: 'Sectienavigatie',
          type: 'Link',
          localized: false,
          required: true,
          disabled: false,
          omitted: false,
          linkType: 'Entry',
        },
        {
          id: 'modelVersion',
          name: '1.0.0',
          type: 'Symbol',
          localized: false,
          required: false,
          disabled: true,
          omitted: false,
        },
      ],
    },
    {
      sys: {
        space: {
          sys: {
            type: 'Link',
            linkType: 'Space',
            id: 'jeb9ft1t2asv',
          },
        },
        type: 'ContentType',
        id: 'listSection',
        revision: 3,
        createdAt: '2020-02-12T14:57:30.421Z',
        updatedAt: '2020-02-12T19:30:33.081Z',
        environment: {
          sys: {
            id: 'master',
            type: 'Link',
            linkType: 'Environment',
          },
        },
      },
      displayField: 'title',
      name: 'listSection',
      description: 'List section',
      fields: [
        {
          id: 'title',
          name: 'Titel binnen Contentful',
          type: 'Symbol',
          localized: false,
          required: true,
          disabled: false,
          omitted: false,
        },
        {
          id: 'variation',
          name: 'Sectieweergave',
          type: 'Symbol',
          localized: false,
          required: true,
          disabled: false,
          omitted: false,
        },
        {
          id: 'items',
          name: 'Sectietegels',
          type: 'Array',
          localized: false,
          required: true,
          disabled: false,
          omitted: false,
          items: {
            type: 'Link',
            validations: [
              {
                linkContentType: ['listItem'],
              },
            ],
            linkType: 'Entry',
          },
        },
        {
          id: 'heading',
          name: 'Sectietitel',
          type: 'Symbol',
          localized: false,
          required: false,
          disabled: false,
          omitted: false,
        },
        {
          id: 'modelVersion',
          name: '1.0.0',
          type: 'Symbol',
          localized: false,
          required: false,
          disabled: true,
          omitted: false,
        },
      ],
    },
    {
      sys: {
        space: {
          sys: {
            type: 'Link',
            linkType: 'Space',
            id: 'jeb9ft1t2asv',
          },
        },
        type: 'ContentType',
        id: 'navigation',
        revision: 3,
        createdAt: '2020-02-12T14:57:27.698Z',
        updatedAt: '2020-02-12T19:30:29.700Z',
        environment: {
          sys: {
            id: 'master',
            type: 'Link',
            linkType: 'Environment',
          },
        },
      },
      displayField: 'title',
      name: 'navigation',
      description: 'Navigation',
      fields: [
        {
          id: 'title',
          name: 'Titel binnen Contentful',
          type: 'Symbol',
          localized: false,
          required: true,
          disabled: false,
          omitted: false,
        },
        {
          id: 'pages',
          name: "Pagina's",
          type: 'Array',
          localized: false,
          required: true,
          disabled: false,
          omitted: false,
          items: {
            type: 'Link',
            validations: [
              {
                linkContentType: ['page'],
              },
            ],
            linkType: 'Entry',
          },
        },
        {
          id: 'modelVersion',
          name: '1.0.0',
          type: 'Symbol',
          localized: false,
          required: false,
          disabled: true,
          omitted: false,
        },
      ],
    },
    {
      sys: {
        space: {
          sys: {
            type: 'Link',
            linkType: 'Space',
            id: 'jeb9ft1t2asv',
          },
        },
        type: 'ContentType',
        id: 'openerSection',
        revision: 3,
        createdAt: '2020-02-12T14:57:24.873Z',
        updatedAt: '2020-02-12T19:30:26.086Z',
        environment: {
          sys: {
            id: 'master',
            type: 'Link',
            linkType: 'Environment',
          },
        },
      },
      displayField: 'title',
      name: 'openerSection',
      description: 'Opener section',
      fields: [
        {
          id: 'title',
          name: 'Titel binnen Contentful',
          type: 'Symbol',
          localized: false,
          required: true,
          disabled: false,
          omitted: false,
        },
        {
          id: 'variation',
          name: 'Sectieweergave',
          type: 'Symbol',
          localized: false,
          required: true,
          disabled: false,
          omitted: false,
        },
        {
          id: 'navigation',
          name: 'Sectienavigatie',
          type: 'Link',
          localized: false,
          required: true,
          disabled: false,
          omitted: false,
          linkType: 'Entry',
        },
        {
          id: 'boxBackgroundColor',
          name: 'Tekstboxachtergrondkleur',
          type: 'Symbol',
          localized: false,
          required: true,
          disabled: false,
          omitted: false,
        },
        {
          id: 'heading',
          name: 'Sectietitel',
          type: 'Symbol',
          localized: false,
          required: false,
          disabled: false,
          omitted: false,
        },
        {
          id: 'image',
          name: 'Sectieafbeelding',
          type: 'Link',
          localized: false,
          required: false,
          disabled: false,
          omitted: false,
          linkType: 'Asset',
        },
        {
          id: 'abstract',
          name: 'Tekstboxtekst',
          type: 'Text',
          localized: false,
          required: false,
          disabled: false,
          omitted: false,
        },
        {
          id: 'modelVersion',
          name: '1.0.0',
          type: 'Symbol',
          localized: false,
          required: false,
          disabled: true,
          omitted: false,
        },
      ],
    },
    {
      sys: {
        space: {
          sys: {
            type: 'Link',
            linkType: 'Space',
            id: 'jeb9ft1t2asv',
          },
        },
        type: 'ContentType',
        id: 'globals',
        revision: 3,
        createdAt: '2020-02-12T14:57:22.466Z',
        updatedAt: '2020-02-12T19:30:22.906Z',
        environment: {
          sys: {
            id: 'master',
            type: 'Link',
            linkType: 'Environment',
          },
        },
      },
      displayField: 'title',
      name: 'globals',
      description: 'Globals',
      fields: [
        {
          id: 'title',
          name: 'Titel binnen Contentful',
          type: 'Symbol',
          localized: false,
          required: true,
          disabled: false,
          omitted: false,
        },
        {
          id: 'addressLine1',
          name: 'Adres eerste regel',
          type: 'Symbol',
          localized: false,
          required: false,
          disabled: false,
          omitted: false,
        },
        {
          id: 'addressLine2',
          name: 'Adres tweede regel',
          type: 'Symbol',
          localized: false,
          required: false,
          disabled: false,
          omitted: false,
        },
        {
          id: 'emailAddress',
          name: 'E=mailadres',
          type: 'Symbol',
          localized: false,
          required: false,
          disabled: false,
          omitted: false,
        },
        {
          id: 'linkedinUrl',
          name: 'Url naar linkedin profiel',
          type: 'Symbol',
          localized: false,
          required: false,
          disabled: false,
          omitted: false,
        },
        {
          id: 'phoneNumber',
          name: 'Telefoonnummer',
          type: 'Symbol',
          localized: false,
          required: false,
          disabled: false,
          omitted: false,
        },
        {
          id: 'siteAuthor',
          name: 'Site auteur',
          type: 'Symbol',
          localized: false,
          required: false,
          disabled: false,
          omitted: false,
        },
        {
          id: 'siteDescription',
          name: 'Site omschrijving',
          type: 'Symbol',
          localized: false,
          required: false,
          disabled: false,
          omitted: false,
        },
        {
          id: 'siteHeading',
          name: 'Site titel',
          type: 'Symbol',
          localized: false,
          required: false,
          disabled: false,
          omitted: false,
        },
        {
          id: 'siteKeywords',
          name: 'Site sleutelwoorden',
          type: 'Array',
          localized: false,
          required: false,
          disabled: false,
          omitted: false,
          items: {
            type: 'Symbol',
            validations: [],
          },
        },
        {
          id: 'modelVersion',
          name: '1.0.0',
          type: 'Symbol',
          localized: false,
          required: false,
          disabled: true,
          omitted: false,
        },
      ],
    },
    {
      sys: {
        space: {
          sys: {
            type: 'Link',
            linkType: 'Space',
            id: 'jeb9ft1t2asv',
          },
        },
        type: 'ContentType',
        id: 'quoteSection',
        revision: 3,
        createdAt: '2020-02-12T14:57:20.035Z',
        updatedAt: '2020-02-12T19:30:19.537Z',
        environment: {
          sys: {
            id: 'master',
            type: 'Link',
            linkType: 'Environment',
          },
        },
      },
      displayField: 'title',
      name: 'quoteSection',
      description: 'Quote section',
      fields: [
        {
          id: 'title',
          name: 'Titel binnen Contentful',
          type: 'Symbol',
          localized: false,
          required: true,
          disabled: false,
          omitted: false,
        },
        {
          id: 'heading',
          name: 'Naam persoon',
          type: 'Symbol',
          localized: false,
          required: true,
          disabled: false,
          omitted: false,
        },
        {
          id: 'subHeading',
          name: 'Functie persoon',
          type: 'Symbol',
          localized: false,
          required: true,
          disabled: false,
          omitted: false,
        },
        {
          id: 'abstract',
          name: 'Uitspraak',
          type: 'Text',
          localized: false,
          required: true,
          disabled: false,
          omitted: false,
        },
        {
          id: 'image',
          name: 'Foto persoon',
          type: 'Link',
          localized: false,
          required: false,
          disabled: false,
          omitted: false,
          linkType: 'Asset',
        },
        {
          id: 'modelVersion',
          name: '1.0.0',
          type: 'Symbol',
          localized: false,
          required: false,
          disabled: true,
          omitted: false,
        },
      ],
    },
    {
      sys: {
        space: {
          sys: {
            type: 'Link',
            linkType: 'Space',
            id: 'jeb9ft1t2asv',
          },
        },
        type: 'ContentType',
        id: 'textSection',
        revision: 3,
        createdAt: '2020-02-12T14:57:17.833Z',
        updatedAt: '2020-02-12T19:30:16.097Z',
        environment: {
          sys: {
            id: 'master',
            type: 'Link',
            linkType: 'Environment',
          },
        },
      },
      displayField: 'title',
      name: 'textSection',
      description: 'Text section',
      fields: [
        {
          id: 'title',
          name: 'Titel binnen Contentful',
          type: 'Symbol',
          localized: false,
          required: true,
          disabled: false,
          omitted: false,
        },
        {
          id: 'text',
          name: 'Tekst',
          type: 'RichText',
          localized: false,
          required: true,
          disabled: false,
          omitted: false,
        },
        {
          id: 'modelVersion',
          name: '1.0.0',
          type: 'Symbol',
          localized: false,
          required: false,
          disabled: true,
          omitted: false,
        },
      ],
    },
  ],
}

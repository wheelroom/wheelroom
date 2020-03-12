export const contentTypesLocalized = {
  sys: {
    type: 'Array',
  },
  total: 13,
  skip: 0,
  limit: 100,
  items: [
    {
      sys: {
        space: {
          sys: {
            type: 'Link',
            linkType: 'Space',
            id: 'woj2vjlmjj5u',
          },
        },
        type: 'ContentType',
        id: 'page',
        revision: 21,
        createdAt: '2019-06-22T18:44:01.497Z',
        updatedAt: '2020-02-11T18:50:59.839Z',
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
          id: 'navigationTitle',
          name: 'Navigation title',
          type: 'Symbol',
          localized: true,
          required: true,
          disabled: false,
          omitted: false,
        },
        {
          id: 'path',
          name: 'Path',
          type: 'Symbol',
          localized: true,
          required: true,
          disabled: false,
          omitted: false,
        },
        {
          id: 'pathName',
          name: 'Path name',
          type: 'Symbol',
          localized: false,
          required: true,
          disabled: false,
          omitted: false,
        },
        {
          id: 'sections',
          name: 'Sections',
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
                  'bicycleSection',
                  'openerSection',
                  'globals',
                  'articleSection',
                  'articlesSection',
                  'featuredPageSection',
                  'authorSection',
                  'footerSection',
                ],
              },
            ],
            linkType: 'Entry',
          },
        },
        {
          id: 'seoDescription',
          name: 'Seo description',
          type: 'Symbol',
          localized: true,
          required: true,
          disabled: false,
          omitted: false,
        },
        {
          id: 'seoTitle',
          name: 'Seo title',
          type: 'Symbol',
          localized: true,
          required: true,
          disabled: false,
          omitted: false,
        },
        {
          id: 'title',
          name: 'Title',
          type: 'Symbol',
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
    {
      sys: {
        space: {
          sys: {
            type: 'Link',
            linkType: 'Space',
            id: 'woj2vjlmjj5u',
          },
        },
        type: 'ContentType',
        id: 'openerSection',
        revision: 24,
        createdAt: '2019-06-22T18:44:24.917Z',
        updatedAt: '2020-02-06T16:52:02.873Z',
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
          id: 'variation',
          name: 'Variation',
          type: 'Symbol',
          localized: false,
          required: true,
          disabled: false,
          omitted: false,
        },
        {
          id: 'illustration',
          name: 'Illustration',
          type: 'Symbol',
          localized: false,
          required: true,
          disabled: false,
          omitted: false,
        },
        {
          id: 'image',
          name: 'Image',
          type: 'Link',
          localized: false,
          required: false,
          disabled: false,
          omitted: false,
          linkType: 'Asset',
        },
        {
          id: 'infoLine',
          name: 'Info line',
          type: 'Symbol',
          localized: false,
          required: false,
          disabled: false,
          omitted: false,
        },
        {
          id: 'navigation',
          name: 'Navigation',
          type: 'Link',
          localized: false,
          required: false,
          disabled: false,
          omitted: false,
          linkType: 'Entry',
        },
        {
          id: 'preHeading',
          name: 'Pre heading',
          type: 'Symbol',
          localized: true,
          required: false,
          disabled: false,
          omitted: false,
        },
        {
          id: 'heading',
          name: 'Heading',
          type: 'Symbol',
          localized: true,
          required: true,
          disabled: false,
          omitted: false,
        },
        {
          id: 'subHeading',
          name: 'Sub heading',
          type: 'Symbol',
          localized: true,
          required: true,
          disabled: false,
          omitted: false,
        },
        {
          id: 'title',
          name: 'Title',
          type: 'Symbol',
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
    {
      sys: {
        space: {
          sys: {
            type: 'Link',
            linkType: 'Space',
            id: 'woj2vjlmjj5u',
          },
        },
        type: 'ContentType',
        id: 'globals',
        revision: 18,
        createdAt: '2019-06-22T18:44:20.144Z',
        updatedAt: '2020-02-05T11:44:17.455Z',
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
          id: 'addressLine1',
          name: 'Address line1',
          type: 'Symbol',
          localized: true,
          required: true,
          disabled: false,
          omitted: false,
        },
        {
          id: 'addressLine2',
          name: 'Address line2',
          type: 'Symbol',
          localized: true,
          required: true,
          disabled: false,
          omitted: false,
        },
        {
          id: 'emailAddress',
          name: 'Email address',
          type: 'Symbol',
          localized: true,
          required: true,
          disabled: false,
          omitted: false,
        },
        {
          id: 'githubUrl',
          name: 'Github url',
          type: 'Symbol',
          localized: true,
          required: false,
          disabled: false,
          omitted: false,
        },
        {
          id: 'heading',
          name: 'Heading',
          type: 'Symbol',
          localized: true,
          required: true,
          disabled: false,
          omitted: false,
        },
        {
          id: 'linkedinUrl',
          name: 'Linkedin url',
          type: 'Symbol',
          localized: false,
          required: false,
          disabled: false,
          omitted: false,
        },
        {
          id: 'localeNames',
          name: 'Locale names',
          type: 'Symbol',
          localized: false,
          required: false,
          disabled: false,
          omitted: false,
        },
        {
          id: 'siteAuthor',
          name: 'Site author',
          type: 'Symbol',
          localized: true,
          required: false,
          disabled: false,
          omitted: false,
        },
        {
          id: 'siteDescription',
          name: 'Site description',
          type: 'Symbol',
          localized: true,
          required: false,
          disabled: false,
          omitted: false,
        },
        {
          id: 'siteKeywords',
          name: 'Site keywords',
          type: 'Array',
          localized: true,
          required: false,
          disabled: false,
          omitted: false,
          items: {
            type: 'Symbol',
            validations: [],
          },
        },
        {
          id: 'siteTitle',
          name: 'Site title',
          type: 'Symbol',
          localized: true,
          required: false,
          disabled: false,
          omitted: false,
        },
        {
          id: 'title',
          name: 'Title',
          type: 'Symbol',
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
    {
      sys: {
        space: {
          sys: {
            type: 'Link',
            linkType: 'Space',
            id: 'woj2vjlmjj5u',
          },
        },
        type: 'ContentType',
        id: 'bicycleSection',
        revision: 17,
        createdAt: '2019-06-22T18:44:12.605Z',
        updatedAt: '2020-02-04T13:19:12.471Z',
        environment: {
          sys: {
            id: 'master',
            type: 'Link',
            linkType: 'Environment',
          },
        },
      },
      displayField: 'title',
      name: 'bicycleSection',
      description: 'Bicycle section',
      fields: [
        {
          id: 'text',
          name: 'Text',
          type: 'RichText',
          localized: false,
          required: true,
          disabled: false,
          omitted: false,
        },
        {
          id: 'title',
          name: 'Title',
          type: 'Symbol',
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
    {
      sys: {
        space: {
          sys: {
            type: 'Link',
            linkType: 'Space',
            id: 'woj2vjlmjj5u',
          },
        },
        type: 'ContentType',
        id: 'navigation',
        revision: 17,
        createdAt: '2019-06-22T18:44:22.914Z',
        updatedAt: '2020-02-04T13:19:07.893Z',
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
          id: 'routes',
          name: 'Routes',
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
          id: 'title',
          name: 'Title',
          type: 'Symbol',
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
    {
      sys: {
        space: {
          sys: {
            type: 'Link',
            linkType: 'Space',
            id: 'woj2vjlmjj5u',
          },
        },
        type: 'ContentType',
        id: 'article',
        revision: 6,
        createdAt: '2019-07-01T09:16:01.404Z',
        updatedAt: '2020-02-04T13:19:06.259Z',
        environment: {
          sys: {
            id: 'master',
            type: 'Link',
            linkType: 'Environment',
          },
        },
      },
      displayField: 'title',
      name: 'article',
      description: 'Article',
      fields: [
        {
          id: 'subTitle',
          name: 'Sub title',
          type: 'Symbol',
          localized: false,
          required: true,
          disabled: false,
          omitted: false,
        },
        {
          id: 'author',
          name: 'Author',
          type: 'Symbol',
          localized: false,
          required: true,
          disabled: false,
          omitted: false,
        },
        {
          id: 'date',
          name: 'Date',
          type: 'Date',
          localized: false,
          required: true,
          disabled: false,
          omitted: false,
        },
        {
          id: 'image',
          name: 'Image',
          type: 'Link',
          localized: false,
          required: false,
          disabled: false,
          omitted: false,
          linkType: 'Asset',
        },
        {
          id: 'slug',
          name: 'Slug',
          type: 'Symbol',
          localized: false,
          required: true,
          disabled: false,
          omitted: false,
        },
        {
          id: 'articleText',
          name: 'Article text',
          type: 'RichText',
          localized: false,
          required: true,
          disabled: false,
          omitted: false,
        },
        {
          id: 'title',
          name: 'Title',
          type: 'Symbol',
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
    {
      sys: {
        space: {
          sys: {
            type: 'Link',
            linkType: 'Space',
            id: 'woj2vjlmjj5u',
          },
        },
        type: 'ContentType',
        id: 'articleSection',
        revision: 16,
        createdAt: '2019-06-22T18:44:05.689Z',
        updatedAt: '2020-02-04T13:19:02.841Z',
        environment: {
          sys: {
            id: 'master',
            type: 'Link',
            linkType: 'Environment',
          },
        },
      },
      displayField: 'title',
      name: 'articleSection',
      description: 'Article section',
      fields: [
        {
          id: 'variation',
          name: 'Variation',
          type: 'Symbol',
          localized: false,
          required: true,
          disabled: false,
          omitted: false,
        },
        {
          id: 'articleText',
          name: 'Article text',
          type: 'RichText',
          localized: false,
          required: true,
          disabled: false,
          omitted: false,
        },
        {
          id: 'title',
          name: 'Title',
          type: 'Symbol',
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
    {
      sys: {
        space: {
          sys: {
            type: 'Link',
            linkType: 'Space',
            id: 'woj2vjlmjj5u',
          },
        },
        type: 'ContentType',
        id: 'articlesSection',
        revision: 17,
        createdAt: '2019-06-22T18:44:07.299Z',
        updatedAt: '2020-02-04T13:19:01.586Z',
        environment: {
          sys: {
            id: 'master',
            type: 'Link',
            linkType: 'Environment',
          },
        },
      },
      displayField: 'title',
      name: 'articlesSection',
      description: 'Articles section',
      fields: [
        {
          id: 'articles',
          name: 'Articles',
          type: 'Array',
          localized: false,
          required: true,
          disabled: false,
          omitted: false,
          items: {
            type: 'Link',
            validations: [
              {
                linkContentType: ['article'],
              },
            ],
            linkType: 'Entry',
          },
        },
        {
          id: 'heading',
          name: 'Heading',
          type: 'Symbol',
          localized: false,
          required: true,
          disabled: false,
          omitted: false,
        },
        {
          id: 'maxArticles',
          name: 'Max articles',
          type: 'Integer',
          localized: false,
          required: false,
          disabled: false,
          omitted: false,
        },
        {
          id: 'title',
          name: 'Title',
          type: 'Symbol',
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
    {
      sys: {
        space: {
          sys: {
            type: 'Link',
            linkType: 'Space',
            id: 'woj2vjlmjj5u',
          },
        },
        type: 'ContentType',
        id: 'bicycleText',
        revision: 20,
        createdAt: '2019-06-22T18:44:14.913Z',
        updatedAt: '2020-02-04T13:18:59.779Z',
        environment: {
          sys: {
            id: 'master',
            type: 'Link',
            linkType: 'Environment',
          },
        },
      },
      displayField: 'title',
      name: 'bicycleText',
      description: 'Bicycle text',
      fields: [
        {
          id: 'addBikeLine',
          name: 'Add bike line',
          type: 'Symbol',
          localized: false,
          required: true,
          disabled: false,
          omitted: false,
        },
        {
          id: 'countdownLine',
          name: 'Countdown line',
          type: 'Symbol',
          localized: false,
          required: true,
          disabled: false,
          omitted: false,
        },
        {
          id: 'explanation',
          name: 'Explanation',
          type: 'Text',
          localized: false,
          required: true,
          disabled: false,
          omitted: false,
        },
        {
          id: 'frequency',
          name: 'Frequency',
          type: 'Integer',
          localized: false,
          required: true,
          disabled: false,
          omitted: false,
        },
        {
          id: 'noChanges',
          name: 'No changes',
          type: 'Symbol',
          localized: false,
          required: true,
          disabled: false,
          omitted: false,
        },
        {
          id: 'refreshing',
          name: 'Refreshing',
          type: 'Symbol',
          localized: false,
          required: true,
          disabled: false,
          omitted: false,
        },
        {
          id: 'removeBikeLine',
          name: 'Remove bike line',
          type: 'Symbol',
          localized: false,
          required: true,
          disabled: false,
          omitted: false,
        },
        {
          id: 'title',
          name: 'Title',
          type: 'Symbol',
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
    {
      sys: {
        space: {
          sys: {
            type: 'Link',
            linkType: 'Space',
            id: 'woj2vjlmjj5u',
          },
        },
        type: 'ContentType',
        id: 'featuredPageSection',
        revision: 18,
        createdAt: '2019-06-22T21:39:31.067Z',
        updatedAt: '2020-02-04T13:18:57.821Z',
        environment: {
          sys: {
            id: 'master',
            type: 'Link',
            linkType: 'Environment',
          },
        },
      },
      displayField: 'title',
      name: 'featuredPageSection',
      description: 'Featured page section',
      fields: [
        {
          id: 'variation',
          name: 'Variation',
          type: 'Symbol',
          localized: false,
          required: true,
          disabled: false,
          omitted: false,
        },
        {
          id: 'featuredPage',
          name: 'Featured page',
          type: 'Link',
          localized: false,
          required: true,
          disabled: false,
          omitted: false,
          linkType: 'Entry',
        },
        {
          id: 'heading',
          name: 'Heading',
          type: 'Symbol',
          localized: true,
          required: true,
          disabled: false,
          omitted: false,
        },
        {
          id: 'image',
          name: 'Image',
          type: 'Link',
          localized: false,
          required: false,
          disabled: false,
          omitted: false,
          linkType: 'Asset',
        },
        {
          id: 'text',
          name: 'Text',
          type: 'Text',
          localized: true,
          required: true,
          disabled: false,
          omitted: false,
        },
        {
          id: 'title',
          name: 'Title',
          type: 'Symbol',
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
    {
      sys: {
        space: {
          sys: {
            type: 'Link',
            linkType: 'Space',
            id: 'woj2vjlmjj5u',
          },
        },
        type: 'ContentType',
        id: 'authorSection',
        revision: 19,
        createdAt: '2019-06-22T18:44:09.000Z',
        updatedAt: '2020-02-04T13:18:55.757Z',
        environment: {
          sys: {
            id: 'master',
            type: 'Link',
            linkType: 'Environment',
          },
        },
      },
      displayField: 'title',
      name: 'authorSection',
      description: 'Author section',
      fields: [
        {
          id: 'heading',
          name: 'Heading',
          type: 'Symbol',
          localized: true,
          required: true,
          disabled: false,
          omitted: false,
        },
        {
          id: 'image',
          name: 'Image',
          type: 'Link',
          localized: false,
          required: false,
          disabled: false,
          omitted: false,
          linkType: 'Asset',
        },
        {
          id: 'text',
          name: 'Text',
          type: 'Text',
          localized: true,
          required: true,
          disabled: false,
          omitted: false,
        },
        {
          id: 'title',
          name: 'Title',
          type: 'Symbol',
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
    {
      sys: {
        space: {
          sys: {
            type: 'Link',
            linkType: 'Space',
            id: 'woj2vjlmjj5u',
          },
        },
        type: 'ContentType',
        id: 'footerSection',
        revision: 18,
        createdAt: '2019-06-22T21:39:33.459Z',
        updatedAt: '2020-02-04T13:18:54.296Z',
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
          id: 'navigation',
          name: 'Navigation',
          type: 'Link',
          localized: false,
          required: false,
          disabled: false,
          omitted: false,
          linkType: 'Entry',
        },
        {
          id: 'title',
          name: 'Title',
          type: 'Symbol',
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
    {
      sys: {
        space: {
          sys: {
            type: 'Link',
            linkType: 'Space',
            id: 'woj2vjlmjj5u',
          },
        },
        type: 'ContentType',
        id: 'bicycleMap',
        revision: 19,
        createdAt: '2019-06-22T18:44:10.492Z',
        updatedAt: '2020-02-04T13:18:52.412Z',
        environment: {
          sys: {
            id: 'master',
            type: 'Link',
            linkType: 'Environment',
          },
        },
      },
      displayField: 'title',
      name: 'bicycleMap',
      description: 'Bicycle map',
      fields: [
        {
          id: 'mapHeight',
          name: 'Map height',
          type: 'Integer',
          localized: false,
          required: false,
          disabled: false,
          omitted: false,
        },
        {
          id: 'title',
          name: 'Title',
          type: 'Symbol',
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

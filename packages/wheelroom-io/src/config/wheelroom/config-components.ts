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
        helpText: 'Choose a background color for this section',
        items: ['transparent', 'black', 'white'],
        name: 'Section background color',
        required: true,
        type: 'dropdown',
      } as DropdownField,
      navigation: {
        allowedComponents: ['navigation'],
        helpText: 'Navigation at the bottom of this section',
        name: 'Navigation section',
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
        helpText: 'Available in all sections',
        name: 'First line address',
        type: 'shortText',
      } as ShortTextField,
      addressLine2: {
        helpText: 'Available in all sections',
        name: 'Second line address',
        type: 'shortText',
      } as ShortTextField,
      emailAddress: {
        helpText: 'Available in all sections',
        name: 'E-mail address',
        type: 'shortText',
      } as ShortTextField,
      linkedinUrl: {
        helpText: 'Available in all sections',
        name: 'Linkedin profile URL',
        type: 'shortText',
      } as ShortTextField,
      phoneNumber: {
        helpText: 'Available in all sections',
        name: 'Phone number',
        type: 'shortText',
      } as ShortTextField,
      siteAuthor: {
        helpText: 'Available in all sections',
        name: 'Site author',
        type: 'shortText',
      } as ShortTextField,
      siteDescription: {
        helpText:
          'Description for the site, used by search engines such as Google',
        name: 'Site description',
        type: 'shortText',
      } as ShortTextField,
      siteHeading: {
        helpText: 'Title for the site, used by search engines such as Google',
        name: 'Site title',
        type: 'shortText',
      } as ShortTextField,
      siteKeywords: {
        helpText:
          'Keywords for the site, used by search engines such as Google',
        name: 'Site keywords',
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
        helpText: 'How is the item displayed?',
        name: 'Item view',
        items: ['bottom white', 'bottom black', 'full width image'],
        type: 'dropdown',
      } as DropdownField,
      link: {
        allowedComponents: ['page'],
        expandFragmentRef: true,
        helpText: 'Navigate to this link by clicking on the link',
        name: 'Item link',
        type: 'singleComponent',
      } as SingleComponentField,
      heading: {
        helpText: 'Use title and not the link',
        name: 'Item title',
        type: 'shortText',
      } as ShortTextField,
      image: {
        helpText: 'Use image and not the link',
        name: 'Item image',
        type: 'image',
      } as ImageField,
      abstract: {
        helpText:
          'Use text on item and not the summary of the link',
        name: 'Item text',
        type: 'longText',
      } as LongTextField,
      extraText: {
        helpText: 'Initially hidden but appears after a click',
        name: 'Item text after interaction',
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
        helpText: 'How this section is displayed',
        items: ['large items', 'small items'],
        name: 'Section view',
        required: true,
        type: 'dropdown',
      } as DropdownField,
      items: {
        allowedComponents: ['listItem'],
        helpText: 'Items in this section',
        name: 'Section items',
        required: true,
        type: 'multipleComponents',
      } as MultipleComponentsField,
      heading: {
        helpText: 'Title at the top of this section',
        name: 'Section title',
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
        helpText: 'Add pages to the navigation',
        name: 'Pages',
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
        helpText: 'How this section is displayed',
        items: ['home page', 'navigation only'],
        name: 'Section view',
        required: true,
        type: 'dropdown',
      } as DropdownField,
      navigation: {
        allowedComponents: ['navigation'],
        helpText: 'Navigation in this section',
        name: 'Section navigation',
        required: true,
        type: 'singleComponent',
      } as SingleComponentField,
      boxBackgroundColor: {
        helpText: 'Choose a background color for the text box in this section',
        items: ['transparent', 'black', 'white'],
        name: 'Section background color',
        type: 'dropdown',
      } as DropdownField,
      heading: {
        helpText: 'Use title in this section and not the page title',
        name: 'Section title',
        type: 'shortText',
      } as ShortTextField,
      image: {
        helpText: 'Use image in this section and not the page image',
        name: 'Section image',
        type: 'image',
      } as ImageField,
      abstract: {
        helpText:
          'Use text in this section and not the summary text of the page',
        name: 'Section text',
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
          'Last part of the URL (slug) to this page. For example: www.wheelroom.com/this-is-a-slug',
        initialContent: '/boilerplate',
        name: 'Page URL',
        required: true,
        type: 'shortText',
        typePostfix: 'Path',
        unique: true,
      } as ShortTextField,
      sections: {
        allowedComponents: [
          '%componentNameArray(filter:settings.asPageSection)%',
        ],
        helpText: 'Choose the sections that together form this page',
        initialContent: ['%componentNameArray(filter:settings.asPageSection)%'],
        name: 'Page sections',
        required: true,
        type: 'multipleComponents',
      } as MultipleComponentsField,
      heading: {
        helpText:
          'Title of the page is used in other sections if they do not have their own title',
        name: 'Page title',
        required: true,
        type: 'shortText',
      } as ShortTextField,
      navigationHeading: {
        helpText: 'Name of the page when it is displayed for navigation',
        name: 'Navigation title',
        type: 'shortText',
      } as ShortTextField,
      image: {
        helpText:
          'Image of the page is used in other sections if they do not have their own image',
        name: 'Page image',
        type: 'image',
      } as ImageField,
      abstract: {
        helpText:
          'Page summary, used in other sections if they do not have their own summary',
        name: 'Page summary',
        type: 'longText',
      },
      seoTitle: {
        helpText: 'Title of the page used by search engines such as Google',
        name: 'SEO title',
        type: 'shortText',
      } as ShortTextField,
      seoDescription: {
        helpText:
          'Description of the page used by search engines such as Google',
        maxLength: 155,
        name: 'SEO description',
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
        helpText: 'Name of the person who made this statement',
        name: 'Name person',
        required: true,
        type: 'shortText',
      } as ShortTextField,
      subHeading: {
        helpText: 'In which position is the person who made the statement',
        name: 'Position',
        required: true,
        type: 'shortText',
      } as ShortTextField,
      abstract: {
        helpText: 'Something the person said',
        name: 'Statement',
        required: true,
        type: 'longText',
      },
      image: {
        helpText: 'Image of the person',
        name: 'Image person',
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
        helpText: 'Basic formatted text field with headings and images',
        name: 'Text',
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

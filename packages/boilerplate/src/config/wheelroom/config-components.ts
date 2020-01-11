import { WheelroomComponents } from '@jacco-meijer/wheelroom'
import {
  DropdownField,
  ImageField,
  LongTextField,
  MultipleComponentsField,
  RichTextField,
  ShortTextField,
  SingleComponentField,
  TagsField,
} from '@jacco-meijer/wheelroom'

export const configComponents: WheelroomComponents = {
  footerSection: {
    fields: {
      backgroundColor: {
        helpText: 'Select a background color',
        initialContent: '%firstItem%',
        items: ['blue', 'orange'],
        required: true,
        type: 'dropdown',
      } as DropdownField,
      footerNavigation: {
        allowedComponents: ['navigation'],
        initialContent: '%firstAllowedComponent%',
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
        initialContent: 'Boilerplate street 1',
        required: true,
        type: 'shortText',
      } as ShortTextField,
      addressLine2: {
        initialContent: '282398 SOMETOWN',
        required: true,
        type: 'shortText',
      } as ShortTextField,
      emailAddress: {
        initialContent: 'info@jaccomeijer.nl',
        required: true,
        type: 'shortText',
      } as ShortTextField,
      linkedinUrl: {
        initialContent: '%Field name% for %component name%',
        type: 'shortText',
      } as ShortTextField,
      phoneNumber: {
        initialContent: '39-823-408',
        type: 'shortText',
      } as ShortTextField,
      siteAuthor: {
        initialContent: 'Jacco Meijer',
        type: 'shortText',
      } as ShortTextField,
      siteDescription: {
        initialContent: 'Boilerplate site code based on Wheelroom',
        type: 'shortText',
      } as ShortTextField,
      siteHeading: {
        initialContent: 'Welcome to the boilerplate',
        required: true,
        type: 'shortText',
      } as ShortTextField,
      siteKeywords: {
        initialContent: ['gatsbyjs', 'wheelroom', 'contentful'],
        type: 'tags',
      } as TagsField,
      siteTitle: {
        initialContent: 'Boilerplate demo',
        type: 'shortText',
      } as ShortTextField,
    },
    modelVersion: '1.0.0',
    settings: {
      asFragment: true,
      asQuery: 'global',
    },
  },
  listSection: {
    fields: {
      heading: {
        initialContent: '%Field name% for %component name%',
        required: true,
        type: 'shortText',
      } as ShortTextField,
      listItems: {
        allowedComponents: ['page'],
        expandFragmentRef: true,
        initialContent: ['%firstAllowedComponent%'],
        required: true,
        type: 'multipleComponents',
      } as MultipleComponentsField,
      variation: {
        helpText: 'Select a view variation',
        initialContent: '%firstItem%',
        items: ['large items', 'small items'],
        required: true,
        type: 'dropdown',
      } as DropdownField,
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
      routes: {
        allowedComponents: ['page'],
        expandFragmentRef: true,
        initialContent: ['%firstAllowedComponent%'],
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
      boxBackgroundColor: {
        helpText: 'Select a background color for the opener box',
        initialContent: '%firstItem%',
        items: ['blue', 'orange'],
        type: 'dropdown',
      } as DropdownField,
      heading: {
        helpText: 'Overrides page heading',
        initialContent: '%Field name% for %component name%',
        type: 'shortText',
      } as ShortTextField,
      image: {
        helpText: 'Overrides page image',
        initialContent: true,
        type: 'image',
      } as ImageField,
      infoText: {
        helpText: 'Overrides page info text',
        initialContent: '%Field name% for %component name%',
        type: 'longText',
      },
      mainNavigation: {
        allowedComponents: ['navigation'],
        initialContent: '%firstAllowedComponent%',
        required: true,
        type: 'singleComponent',
      } as SingleComponentField,
      variation: {
        helpText: 'Select a view variation',
        initialContent: '%firstItem%',
        items: ['home opener', 'page opener'],
        required: true,
        type: 'dropdown',
      } as DropdownField,
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
      listItemHeading: {
        helpText: 'Heading when page is a list item, overrides page heading',
        initialContent: '%Field name% for %component name%',
        type: 'shortText',
      } as ShortTextField,
      listItemHiddenText: {
        helpText: 'Initially hidden text when page is a list item',
        initialContent: '%Field name% for %component name%',
        type: 'shortText',
      } as ShortTextField,
      listItemImage: {
        helpText: 'Image when page is a list item, overrides page image',
        initialContent: true,
        type: 'image',
      } as ImageField,
      listItemInfoText: {
        helpText:
          'Info text when page is a list item, overrides page info text',
        initialContent: '%Field name% for %component name%',
        type: 'longText',
      } as LongTextField,
      listItemView: {
        helpText: 'How the page looks as a list item',
        initialContent: '%firstItem%',
        items: ['orange bottom', 'blue bottom', 'full image'],
        type: 'dropdown',
      } as DropdownField,
      navigationHeading: {
        helpText: 'Heading when page is a navigation item',
        initialContent: '%Field name% for %component name%',
        type: 'shortText',
      } as ShortTextField,
      pageHeading: {
        helpText: 'Heading for this page',
        initialContent: '%Field name% for %component name%',
        required: true,
        type: 'shortText',
      } as ShortTextField,
      pageImage: {
        helpText: 'Image for this page',
        initialContent: true,
        required: true,
        type: 'image',
      } as ImageField,
      pageInfoText: {
        helpText: 'Info text for this page',
        initialContent: '%Field name% for %component name%',
        required: true,
        type: 'longText',
      } as LongTextField,
      path: {
        helpText: 'System field, changing this can break things',
        initialContent: '/boilerplate',
        required: true,
        type: 'shortText',
      } as ShortTextField,
      pathName: {
        helpText: 'System field, changing this can break things',
        initialContent: 'boilerplate',
        required: true,
        type: 'shortText',
      } as ShortTextField,
      sections: {
        allowedComponents: [
          '%componentNameArray(filter:settings.asPageSection)%',
        ],
        helpText: 'Select sections for this page',
        initialContent: ['%componentNameArray(filter:settings.asPageSection)%'],
        required: true,
        type: 'multipleComponents',
      } as MultipleComponentsField,
      seoDescription: {
        helpText: 'Description used by search engines like Google',
        initialContent: '%Field name% for %component name%',
        maxLength: 155,
        required: true,
        type: 'shortText',
      } as ShortTextField,
      seoTitle: {
        helpText: 'Title used by search engines like Google',
        initialContent: '%Field name% for %component name%',
        required: true,
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
      avatar: {
        helpText: 'Optional photo displayed with the quote',
        initialContent: true,
        required: false,
        type: 'image',
      },
      heading: {
        initialContent: '%Field name% for %component name%',
        required: true,
        type: 'shortText',
      } as ShortTextField,
      subHeading: {
        initialContent: '%Field name% for %component name%',
        required: false,
        type: 'shortText',
      } as ShortTextField,
      text: {
        initialContent: '%Field name% for %component name%',
        required: true,
        type: 'longText',
      } as LongTextField,
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
        helpText: 'Rich text with headings and images',
        initialContent: '%Field name% for %component name%',
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

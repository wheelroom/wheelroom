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
        items: ['blue', 'orange'],
        required: true,
        type: 'dropdown',
      } as DropdownField,
      footerNavigation: {
        allowedComponents: ['navigation'],
        initialContent: 'navigation',
        required: true,
        type: 'singleComponent',
      } as SingleComponentField,
    },
    graphQL: {
      fragment: true,
      pageSection: true,
    },
    modelVersion: '1.0.0',
  },
  globals: {
    fields: {
      addressLine1: {
        required: true,
        type: 'shortText',
      } as ShortTextField,
      addressLine2: {
        required: true,
        type: 'shortText',
      } as ShortTextField,
      emailAddress: {
        required: true,
        type: 'shortText',
      } as ShortTextField,
      linkedinUrl: {
        type: 'shortText',
      } as ShortTextField,
      phoneNumber: {
        type: 'shortText',
      } as ShortTextField,
      siteAuthor: {
        type: 'shortText',
      } as ShortTextField,
      siteDescription: {
        type: 'shortText',
      } as ShortTextField,
      siteHeading: {
        required: true,
        type: 'shortText',
      } as ShortTextField,
      siteKeywords: {
        type: 'tags',
      } as TagsField,
      siteTitle: {
        type: 'shortText',
      } as ShortTextField,
    },
    graphQL: {
      createPageQuery: 'global',
      fragment: true,
    },
    modelVersion: '1.0.0',
  },
  listSection: {
    fields: {
      heading: { required: true, type: 'shortText' } as ShortTextField,
      listItems: {
        allowedComponents: ['page'],
        expandFragmentRef: true,
        required: true,
        type: 'multipleComponents',
      } as MultipleComponentsField,
      variation: {
        helpText: 'Select a view variation',
        items: ['large items', 'small items'],
        required: true,
        type: 'dropdown',
      } as DropdownField,
    },
    graphQL: {
      fragment: true,
      pageSection: true,
    },
    modelVersion: '1.0.0',
  },
  navigation: {
    fields: {
      routes: {
        allowedComponents: ['page'],
        expandFragmentRef: true,
        initialContent: ['page'],
        required: true,
        type: 'multipleComponents',
      } as MultipleComponentsField,
    },
    graphQL: {
      fragment: true,
    },
    modelVersion: '1.0.0',
  },
  openerSection: {
    fields: {
      boxBackgroundColor: {
        helpText: 'Select a background color for the opener box',
        items: ['blue', 'orange'],
        type: 'dropdown',
      } as DropdownField,
      heading: {
        helpText: 'Overrides page heading',
        type: 'shortText',
      } as ShortTextField,
      image: {
        helpText: 'Overrides page image',
        type: 'image',
      } as ImageField,
      infoText: {
        helpText: 'Overrides page info text',
        type: 'longText',
      },
      mainNavigation: {
        allowedComponents: ['navigation'],
        initialContent: 'navigation',
        required: true,
        type: 'singleComponent',
      } as SingleComponentField,
      variation: {
        helpText: 'Select a view variation',
        items: ['home opener', 'page opener'],
        required: true,
        type: 'dropdown',
      } as DropdownField,
    },
    graphQL: {
      fragment: true,
      pageSection: true,
    },
    modelVersion: '1.0.0',
  },
  page: {
    fields: {
      listItemHeading: {
        helpText: 'Heading when page is a list item, overrides page heading',
        type: 'shortText',
      } as ShortTextField,
      listItemHiddenText: {
        helpText: 'Initially hidden text when page is a list item',
        type: 'shortText',
      } as ShortTextField,
      listItemImage: {
        helpText: 'Image when page is a list item, overrides page image',
        type: 'image',
      } as ImageField,
      listItemInfoText: {
        helpText:
          'Info text when page is a list item, overrides page info text',
        type: 'longText',
      } as LongTextField,
      listItemView: {
        helpText: 'How the page looks as a list item',
        items: ['orange bottom', 'blue bottom', 'full image'],
        type: 'dropdown',
      } as DropdownField,
      navigationHeading: {
        helpText: 'Heading when page is a navigation item',
        type: 'shortText',
      } as ShortTextField,
      pageHeading: {
        helpText: 'Heading for this page',
        required: true,
        type: 'shortText',
      } as ShortTextField,
      pageImage: {
        helpText: 'Image for this page',
        required: true,
        type: 'image',
      } as ImageField,
      pageInfoText: {
        helpText: 'Info text for this page',
        required: true,
        type: 'longText',
      } as LongTextField,
      path: {
        helpText: 'System field, changing this can break things',
        initialContent: '/',
        required: true,
        type: 'shortText',
      } as ShortTextField,
      pathName: {
        helpText: 'System field, changing this can break things',
        initialContent: 'home',
        required: true,
        type: 'shortText',
      } as ShortTextField,
      sections: {
        allowedComponents: [
          'footerSection',
          'listSection',
          'openerSection',
          'quoteSection',
          'textSection',
        ],
        helpText: 'Select sections for this page',
        initialContent: [
          'openerSection',
          'textSection',
          'listSection',
          'quoteSection',
          'footerSection',
        ],
        required: true,
        type: 'multipleComponents',
      } as MultipleComponentsField,
      seoDescription: {
        helpText: 'Description used by search engines like Google',
        maxLength: 155,
        required: true,
        type: 'shortText',
      } as ShortTextField,
      seoTitle: {
        helpText: 'Title used by search engines like Google',
        required: true,
        type: 'shortText',
      } as ShortTextField,
    },
    graphQL: {
      createPageQuery: 'page',
      fragment: true,
    },
    modelVersion: '1.0.0',
  },
  quoteSection: {
    fields: {
      avatar: {
        helpText: 'Optional photo displayed with the quote',
        required: false,
        type: 'image',
      },
      heading: {
        required: true,
        type: 'shortText',
      } as ShortTextField,
      subHeading: {
        required: false,
        type: 'shortText',
      } as ShortTextField,
      text: {
        required: true,
        type: 'longText',
      } as LongTextField,
    },
    graphQL: {
      fragment: true,
      pageSection: true,
    },
    modelVersion: '1.0.0',
  },
  textSection: {
    fields: {
      text: {
        helpText: 'Rich text with headings and images',
        required: true,
        type: 'richText',
      } as RichTextField,
    },
    graphQL: {
      fragment: true,
      pageSection: true,
    },
    modelVersion: '1.0.0',
  },
}

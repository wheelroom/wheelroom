import { WheelroomComponents } from '@jacco-meijer/wheelroom'

export const configComponents: WheelroomComponents = {
  footerSection: {
    fields: {
      backgroundColor: {
        helpText: 'Select a background color',
        items: ['blue', 'orange'],
        required: true,
        type: 'dropdown',
      },
      footerNavigation: {
        components: ['navigation'],
        required: true,
        type: 'singleComponent',
      },
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
      },
      addressLine2: {
        required: true,
      },
      emailAddress: {
        required: true,
      },
      linkedinUrl: {},
      phoneNumber: {},
      siteAuthor: {},
      siteDescription: {},
      siteHeading: {
        required: true,
      },
      siteKeywords: {
        type: 'tags',
      },
      siteTitle: {},
    },
    graphQL: {
      createPageQuery: 'global',
      fragment: true,
    },
    modelVersion: '1.0.0',
  },
  listSection: {
    fields: {
      heading: { required: true },
      listItems: {
        components: ['page'],
        required: true,
        type: 'multipleComponents',
      },
      variation: {
        helpText: 'Select a view variation',
        items: ['large items', 'small items'],
        required: true,
        type: 'dropdown',
      },
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
        components: ['page'],
        required: true,
        type: 'multipleComponents',
      },
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
      },
      heading: {
        helpText: 'Overrides page heading',
      },
      image: {
        helpText: 'Overrides page image',
        type: 'image',
      },
      infoText: {
        helpText: 'Overrides page info text',
        type: 'longText',
      },
      mainNavigation: {
        components: ['navigation'],
        required: true,
        type: 'singleComponent',
      },
      variation: {
        helpText: 'Select a view variation',
        items: ['home opener', 'page opener'],
        required: true,
        type: 'dropdown',
      },
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
      },
      listItemHiddenText: {
        helpText: 'Initially hidden text when page is a list item',
      },
      listItemImage: {
        helpText: 'Image when page is a list item, overrides page image',
        type: 'image',
      },
      listItemInfoText: {
        helpText:
          'Info text when page is a list item, overrides page info text',
        type: 'longText',
      },
      listItemView: {
        helpText: 'How the page looks as a list item',
        items: ['orange bottom', 'blue bottom', 'full image'],
        type: 'dropdown',
      },
      navigationHeading: {
        helpText: 'Heading when page is a navigation item',
      },
      pageHeading: {
        helpText: 'Heading for this page',
        required: true,
      },
      pageImage: {
        helpText: 'Image for this page',
        required: true,
        type: 'image',
      },
      pageInfoText: {
        helpText: 'Info text for this page',
        required: true,
        type: 'longText',
      },
      path: {
        helpText: 'System field, changing this can break things',
        initialContent: '/',
        required: true,
      },
      pathName: {
        helpText: 'System field, changing this can break things',
        initialContent: 'home',
        required: true,
      },
      sections: {
        components: ['%pageSectionsArray%'],
        helpText: 'Select sections for this page',
        required: true,
        type: 'multipleComponents',
      },
      seoDescription: {
        helpText: 'Description used by search engines like Google',
        maxLength: 155,
        required: true,
      },
      seoTitle: {
        helpText: 'Title used by search engines like Google',
        required: true,
      },
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
      },
      subHeading: {
        required: false,
      },
      text: {
        required: true,
        type: 'longText',
      },
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
      },
    },
    graphQL: {
      fragment: true,
      pageSection: true,
    },
    modelVersion: '1.0.0',
  },
}

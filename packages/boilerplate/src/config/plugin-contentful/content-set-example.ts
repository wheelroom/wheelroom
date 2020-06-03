import { ContentTypes } from './content-types-example'

export const example: ContentTypes = {
  siteGlobals: {
    fields: {
      siteAuthor: 'Wheelroom',
      siteDescription:
        'Wheelroom is an open source project and created for developers that want to work with the latest technology and services.',
      siteHeading: 'Wheelroom',
      siteKeywords: ['Wheelroom', 'Boilerplate', 'Example set'],
      title: 'Global settings for this site',
    },
    model: 'globals',
  },
  homePage: {
    fields: {
      path: '/',
      sections: ['siteHeader', 'homeHero', 'homeBlock', 'siteFooter'],
      seoTitle: 'The world’s fastest boilerplate for building applications',
      seoDescription:
        'Wheelroom is a new approach to faster, cost efficient and more secure applications.',
      seoImage: true,
      title: 'Home',
    },
    model: 'page',
  },
  examplesPage: {
    fields: {
      path: '/examples',
      sections: [
        'siteHeader',
        'exampleHeadline',
        'exampleFeatured',
        'exampleBlock',
        'exampleGallery',
        'exampleCard',
        'exampleImage',
        'exampleShowcase',
        'exampleQuote',
        'siteFooter',
      ],
      seoTitle: 'Examples',
      seoDescription:
        'Wheelroom is an open source project and created for developers that want to work with the latest technology and services.',
      seoImage: true,
      title: 'Examples',
    },
    model: 'page',
  },
  documentationPage: {
    fields: {
      path: '/documentation',
      sections: ['siteHeader', 'exampleText', 'siteFooter'],
      seoTitle: 'Documentation',
      seoDescription:
        'Wheelroom connects your code base within 5 minutes to many services like Contentful and Netlify.',
      seoImage: true,
      title: 'Documentation',
    },
    model: 'page',
  },
  homeHero: {
    fields: {
      topics: ['promiseTopic'],
      topicOptions: ['Hide icon'],
      variation: 'hero',
      title: 'Example (variation: hero)',
    },
    model: 'pageSection',
  },
  homeBlock: {
    fields: {
      topics: ['openSourceTopic', 'nonprofitTopic', 'freeForEveryoneTopic'],
      topicOptions: ['Hide media'],
      variation: 'block',
      title: 'Example (variation: block)',
    },
    model: 'pageSection',
  },
  exampleText: {
    fields: {
      variation: 'block',
      title: 'Example (variation: text)',
    },
    model: 'pageSection',
  },
  exampletext: {
    fields: {
      text: `# Wheelroom

Wheelroom connects your code base within 5 minutes to many services like Contentful and Netlify. The Wheelroom boilerplate includes content models, page sections, wheelroom themes, example content and much more.

### Why Wheelroom?

Wheelroom is an open source project and created for developers that want to work with the latest technology and services. Wheelroom seamlessly connects many services and renders a data driven client side interface. Check for more information the plugins or start building your own project with the Wheelroom boilerplate.

### Wheelroom boilerplate

With the [Wheelroom boilerplate](https://github.com/wheelroom/wheelroom/tree/master/packages/boilerplate) you can build your own client side application with JAMstack technology. It is secure, super fast, low cost and scalable.

### Contributors

Feel free to contribute to the open source Wheelroom project. Do you have question or a feature request, please add an [issue](https://github.com/wheelroom/wheelroom/issues).

- [Jacco Meijer](https://github.com/jaccomeijer)
- [Thijs Krooswijk](https://github.com/thijskrooswijk)`,
      title: 'Example (variation: rich text)',
    },
    model: 'text',
  },
  exampleHeadline: {
    fields: {
      topics: ['exampleTopic'],
      topicOptions: ['Reversed order'],
      variation: 'headline',
      title: 'Example (variation: headline)',
    },
    model: 'pageSection',
  },
  exampleFeatured: {
    fields: {
      topics: ['exampleTopic', 'exampleTopic'],
      variation: 'featured',
      title: 'Example (variation: featured)',
    },
    model: 'pageSection',
  },
  exampleBlock: {
    fields: {
      topics: ['exampleTopic', 'exampleTopic', 'exampleTopic'],
      variation: 'block',
      title: 'Example (variation: block)',
    },
    model: 'pageSection',
  },
  exampleCard: {
    fields: {
      topics: ['exampleTopic', 'exampleTopic', 'exampleTopic', 'exampleTopic'],
      variation: 'card',
      title: 'Example (variation: card)',
    },
    model: 'pageSection',
  },
  exampleGallery: {
    fields: {
      topics: ['exampleTopic', 'exampleTopic', 'exampleTopic', 'exampleTopic'],
      topicOptions: [
        'Hide icon',
        'Hide heading',
        'Hide abstract',
        'Hide action',
      ],
      variation: 'gallery',
      title: 'Example (variation: gallery)',
    },
    model: 'pageSection',
  },
  exampleImage: {
    fields: {
      topics: ['exampleTopic'],
      variation: 'image',
      title: 'Example (variation: image)',
    },
    model: 'pageSection',
  },
  exampleQuote: {
    fields: {
      topics: ['exampleTopic'],
      variation: 'quote',
      title: 'Example (variation: quote)',
    },
    model: 'pageSection',
  },
  exampleShowcase: {
    fields: {
      topics: ['exampleTopic', 'exampleTopic', 'exampleTopic', 'exampleTopic'],
      topicOptions: ['Hide icon'],
      variation: 'showcase',
      title: 'Example (variation: showcase)',
    },
    model: 'pageSection',
  },
  promiseTopic: {
    fields: {
      heading: 'The world’s fastest boilerplate for applications',
      abstract: `Wheelroom connects your code base within 5 minutes to many services like Contentful and Netlify. `,
      icon: 'layers',
      media: true,
      actions: ['exampleAction'],
      title: 'Promise',
    },
    model: 'topic',
  },
  openSourceTopic: {
    fields: {
      heading: 'Open Source',
      abstract: `Everything we produce is open source. Every time we write code, we get to share it with the world.`,
      icon: 'code',
      media: true,
      actions: ['exampleAction'],
      title: 'Open Source',
    },
    model: 'topic',
  },
  nonprofitTopic: {
    fields: {
      heading: 'Nonprofit',
      abstract: `Our goal is to protect free expression and enable secure global communication. We're working with users to build something sustainable.`,
      icon: 'heart',
      media: true,
      actions: ['exampleAction'],
      title: 'Nonprofit',
    },
    model: 'topic',
  },
  freeForEveryoneTopic: {
    fields: {
      heading: 'Free for everyone',
      abstract: `Wheelroom is an independent nonprofit. Development is supported by grants and donations from people like you.`,
      icon: 'globe',
      media: true,
      actions: ['exampleAction'],
      title: 'Free for everyone',
    },
    model: 'topic',
  },
  exampleTopic: {
    fields: {
      heading: 'Build great things with Wheelroom',
      abstract: `Wheelroom is a new approach to faster, cost efficient and more secure applications.`,
      icon: 'box',
      media: false,
      actions: ['githubAction'],
      title: 'Example',
    },
    model: 'topic',
  },
  githubProfileTopic: {
    fields: {
      heading: 'Github profile',
      abstract: `Check our code-base on Github`,
      icon: 'github',
      media: true,
      actions: ['githubAction'],
      title: 'Github profile',
    },
    model: 'topic',
  },
  brandAction: {
    fields: {
      heading: 'Wheelroom',
      description: 'Go back to the Wheelroom homepage',
      page: 'homePage',
      title: 'Wheelroom',
    },
    model: 'action',
  },
  githubAction: {
    fields: {
      heading: 'Try Wheelroom for Free',
      description: 'Visit our Github Wheelroom code repository',
      url: 'https://github.com/wheelroom/wheelroom',
      title: 'Try Wheelroom for Free',
    },
    model: 'action',
  },
  getStartedAction: {
    fields: {
      heading: 'Get started',
      description: 'Visit our Github Wheelroom code repository',
      url: 'https://github.com/wheelroom/wheelroom',
      title: 'Get started',
    },
    model: 'action',
  },
  exampleAction: {
    fields: {
      heading: 'Check the Wheelroom examples',
      description: 'An overview of all the Wheelroom page-section exmaples',
      page: 'examplesPage',
      title: 'Check the Wheelroom examples',
    },
    model: 'action',
  },
  homeAction: {
    fields: {
      heading: 'Home',
      description: 'The world’s fastest boilerplate for building applications',
      page: 'homePage',
      title: 'Home',
    },
    model: 'action',
  },
  documentationAction: {
    fields: {
      heading: 'Documentation',
      description: 'Wheelroom connects your code base within 5 minutes',
      page: 'documentationPage',
      title: 'Documentation',
    },
    model: 'action',
  },
  examplesAction: {
    fields: {
      heading: 'Examples',
      description: 'Work with the latest technology and services',
      page: 'examplesPage',
      title: 'Examples',
    },
    model: 'action',
  },
  headerNavigationSegment: {
    fields: {
      actions: ['homeAction', 'examplesAction', 'documentationAction'],
      title: 'Header navigation',
    },
    model: 'navigationSegment',
  },
  headerNavigation: {
    fields: {
      segments: ['headerNavigationSegment'],
      title: 'Header navigation',
    },
    model: 'navigation',
  },
  footerNavigationSegment: {
    fields: {
      actions: ['homeAction', 'examplesAction', 'documentationAction'],
      title: 'Footer navigation',
    },
    model: 'navigationSegment',
  },
  footerNavigation: {
    fields: {
      segments: ['footerNavigationSegment'],
      title: 'Footer navigation',
    },
    model: 'navigation',
  },
  siteHeader: {
    model: 'navigationSection',
    fields: {
      title: 'navigation (variation: header)',
      variation: 'header',
      navigation: ['headerNavigation'],
    },
  },
  siteFooter: {
    model: 'navigationSection',
    fields: {
      title: 'navigation (variation: footer)',
      variation: 'footer',
      navigation: ['footerNavigation'],
    },
  },
}

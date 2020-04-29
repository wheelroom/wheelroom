/**
 * Defines the boilerplate content set. In English.
 *
 *
 */

import { ContentTypes } from './content-types'

export interface ContentSets {
  [contentSetName: string]: ContentTypes
}

// export const contentSets: any = {
export const contentSets: ContentSets = {
  boilerplate: {
    siteGlobals: {
      fields: {
        siteAuthor: 'Wheelroom',
        siteDescription:
          'Wheelroom is an open source project and created for developers that want to work with the latest technology and services.',
        siteHeading: 'Wheelroom',
        siteKeywords: [
          'Wheelroom',
          'Boilerplate',
          'TypeScript',
          'Contentful',
          'Netlify',
        ],
        title: 'Global settings for this site',
      },
      model: 'globals',
    },
    homePage: {
      fields: {
        path: '/',
        navigationHeading: 'Home',
        sections: ['siteHeader', 'homeHero', 'homeBlock', 'siteFooter'],
        seoTitle: 'The world’s fastest boilerplate for building applications',
        seoDescription:
          'Wheelroom is a new approach to faster, cost efficient and more secure applications.',
        seoImage: true,
        title: 'Home (Demo page)',
      },
      model: 'page',
    },
    examplePage: {
      fields: {
        path: '/examples',
        navigationHeading: 'Examples',
        sections: [
          'siteHeader',
          'exampleHeadline',
          'exampleBlock',
          'exampleCard',
          'exampleFeatured',
          'exampleGallery',
          'exampleImage',
          'exampleShowcase',
          'exampleQuote',
          'siteFooter',
        ],
        seoTitle: 'Examples',
        seoDescription:
          'Wheelroom is an open source project and created for developers that want to work with the latest technology and services.',
        seoImage: true,
        title: 'Examples (Demo page)',
      },
      model: 'page',
    },
    aboutPage: {
      fields: {
        path: '/documentation',
        navigationHeading: 'Documentation',
        sections: ['siteHeader', 'docsText', 'siteFooter'],
        seoTitle: 'Documentation',
        seoDescription:
          'Wheelroom connects your code base within 5 minutes to many services like Contentful and Netlify.',
        seoImage: true,
        title: 'Documentation (Demo page)',
      },
      model: 'page',
    },
    siteHeader: {
      fields: {
        variation: 'navigation-wr',
        navigation: 'headerNavigation',
        title: 'Site header (navigation)',
        actions: ['wrGetStartedAction'],
      },
      model: 'pageSection',
    },
    siteFooter: {
      fields: {
        variation: 'navigation-wr',
        navigation: 'footerNavigation',
        topics: ['githubProfileTopic'],
        title: 'Site footer (navigation)',
      },
      model: 'pageSection',
    },
    homeHero: {
      fields: {
        topics: ['promiseTopic'],
        topicOptions: ['Hide icon'],
        variation: 'hero-wr',
        title: 'Wheelroom promise (Demo headline)',
      },
      model: 'pageSection',
    },
    homeBlock: {
      fields: {
        topics: ['openSourceTopic', 'nonprofitTopic', 'freeForEveryoneTopic'],
        topicOptions: ['Hide media'],
        variation: 'block-wr',
        title: 'Three (3) demo topics (Demo block)',
      },
      model: 'pageSection',
    },
    docsText: {
      fields: {
        variation: 'text-wr',
        text: 'docstext',
        title: 'Wheelroom documentation (Demo text)',
      },
      model: 'pageSection',
    },
    docstext: {
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
        title: 'Rich Text (Demo text)',
      },
      model: 'text',
    },
    exampleHeadline: {
      fields: {
        topics: ['exampleTopic'],
        topicOptions: ['Reversed order'],
        variation: 'headline-wr',
        title: 'Example (Demo headline)',
      },
      model: 'pageSection',
    },
    exampleFeatured: {
      fields: {
        topics: ['exampleTopic', 'exampleTopic'],
        variation: 'featured-wr',
        title: 'Example (Demo featured)',
      },
      model: 'pageSection',
    },
    exampleBlock: {
      fields: {
        topics: ['exampleTopic', 'exampleTopic', 'exampleTopic'],
        variation: 'block-wr',
        title: 'Example (Demo block)',
      },
      model: 'pageSection',
    },
    exampleCard: {
      fields: {
        topics: [
          'exampleTopic',
          'exampleTopic',
          'exampleTopic',
          'exampleTopic',
        ],
        variation: 'card-wr',
        title: 'Example (Demo card)',
      },
      model: 'pageSection',
    },
    exampleGallery: {
      fields: {
        topics: [
          'exampleTopic',
          'exampleTopic',
          'exampleTopic',
          'exampleTopic',
        ],
        topicOptions: [
          'Hide icon',
          'Hide media',
          'Hide heading',
          'Hide abstract',
          'Hide action',
        ],
        variation: 'gallery-wr',
        title: 'Example (Demo gallery)',
      },
      model: 'pageSection',
    },
    exampleImage: {
      fields: {
        topics: ['exampleTopic'],
        variation: 'image-wr',
        title: 'Example (Demo image)',
      },
      model: 'pageSection',
    },
    exampleQuote: {
      fields: {
        topics: ['exampleTopic'],
        variation: 'quote-wr',
        title: 'Example (Demo quote)',
      },
      model: 'pageSection',
    },
    exampleShowcase: {
      fields: {
        topics: [
          'exampleTopic',
          'exampleTopic',
          'exampleTopic',
          'exampleTopic',
        ],
        topicOptions: ['Hide icon'],
        variation: 'showcase-wr',
        title: 'Example (Demo showcase)',
      },
      model: 'pageSection',
    },
    promiseTopic: {
      fields: {
        heading: 'The world’s fastest boilerplate for applications',
        abstract: `Wheelroom connects your code base within 5 minutes to many services like Contentful and Netlify. `,
        icon: 'layers',
        media: true,
        actions: ['wrExampleAction'],
        title: 'Promise (Demo topic)',
      },
      model: 'topic',
    },
    openSourceTopic: {
      fields: {
        heading: 'Open Source',
        abstract: `Everything we produce is open source. Every time we write code, we get to share it with the world.`,
        icon: 'code',
        media: true,
        actions: ['wrExampleAction'],
        title: 'Open Source (Demo topic)',
      },
      model: 'topic',
    },
    nonprofitTopic: {
      fields: {
        heading: 'Nonprofit',
        abstract: `Our goal is to protect free expression and enable secure global communication. We're working with users to build something sustainable.`,
        icon: 'heart',
        media: true,
        actions: ['wrExampleAction'],
        title: 'Nonprofit (Demo topic)',
      },
      model: 'topic',
    },
    freeForEveryoneTopic: {
      fields: {
        heading: 'Free for everyone',
        abstract: `Wheelroom is an independent nonprofit. Development is supported by grants and donations from people like you.`,
        icon: 'globe',
        media: true,
        actions: ['wrExampleAction'],
        title: 'Nonprofit (Demo topic)',
      },
      model: 'topic',
    },
    exampleTopic: {
      fields: {
        heading: 'Build great things with Wheelroom',
        abstract: `Wheelroom is a new approach to faster, cost efficient and more secure applications.`,
        icon: 'box',
        media: true,
        actions: ['wrGithubAction'],
        title: 'Example (Demo topic)',
      },
      model: 'topic',
    },
    githubProfileTopic: {
      fields: {
        heading: 'Github profile',
        abstract: `Check our code-base on Github`,
        icon: 'github',
        media: false,
        actions: ['wrGithubAction'],
        title: 'Github profile (Demo topic)',
      },
      model: 'topic',
    },
    wrBrandAction: {
      fields: {
        heading: 'Wheelroom',
        description: 'Go back to the Wheelroom homepage',
        page: 'homePage',
        title: 'Wheelroom (Demo action)',
      },
      model: 'action',
    },
    wrGithubAction: {
      fields: {
        heading: 'Try Wheelroom for Free',
        description: 'Visit our Github Wheelroom code repository',
        url: 'https://github.com/wheelroom/wheelroom',
        title: 'Try Wheelroom for Free (Demo action)',
      },
      model: 'action',
    },
    wrGetStartedAction: {
      fields: {
        heading: 'Get started',
        description: 'Visit our Github Wheelroom code repository',
        url: 'https://github.com/wheelroom/wheelroom',
        title: 'Get started (Demo action)',
      },
      model: 'action',
    },
    wrExampleAction: {
      fields: {
        heading: 'Check the Wheelroom examples',
        description: 'An overview of all the Wheelroom page-section exmaples',
        page: 'examplePage',
        title: 'Check the Wheelroom examples (Demo action)',
      },
      model: 'action',
    },
    headerNavigationSegment: {
      fields: {
        pages: ['homePage', 'examplePage', 'aboutPage'],
        title: 'Header navigation segment',
      },
      model: 'navigationSegment',
    },
    headerNavigation: {
      fields: {
        segments: ['headerNavigationSegment'],
        title: 'Header navigation',
        skipToContentHeading: 'Skip to Wheelroom content',
        brandAction: 'wrBrandAction',
      },
      model: 'navigation',
    },
    footerNavigationSegment: {
      fields: {
        pages: ['homePage', 'examplePage', 'aboutPage'],
        title: 'Footer navigation segment',
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
  },
}

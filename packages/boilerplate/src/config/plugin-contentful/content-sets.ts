/**
 * Defines the boilerplate content set.
 * — English
 */

import { ContentTypes } from './content-types'

export interface ContentSets {
  [contentSetName: string]: ContentTypes
}

// export const contentSets: any = {
export const contentSets: ContentSets = {
  starterSet: {
    siteGlobals: {
      fields: {
        siteAuthor: 'Wheelroom',
        siteDescription:
          'Wheelroom is an open source project and created for developers that want to work with the latest technology and services.',
        siteHeading: 'Wheelroom',
        siteKeywords: ['Wheelroom', 'Boilerplate', 'Starter set'],
        title: 'Global settings for this site',
      },
      model: 'globals',
    },
    homePage: {
      fields: {
        path: '/',
        navigationHeading: 'Home',
        sections: ['siteHeader', 'starterHero', 'starterBlock', 'siteFooter'],
        seoTitle: 'The world’s fastest boilerplate for building applications',
        seoDescription:
          'Wheelroom is a new approach to faster, cost efficient and more secure applications.',
        seoImage: true,
        title: 'Home (page)',
      },
      model: 'page',
    },
    openSourcePage: {
      fields: {
        path: '/open-source',
        navigationHeading: 'Open source',
        sections: ['siteHeader', 'starterFeatured', 'siteFooter'],
        seoTitle: 'Open source',
        seoDescription:
          'Everything we produce is open source. Every time we write code, we get to share it with the world.',
        seoImage: true,
        title: 'Open source (page)',
      },
      model: 'page',
    },
    nonProfitPage: {
      fields: {
        path: '/nonprofit',
        navigationHeading: 'Nonprofit',
        sections: [
          'siteHeader',
          'starterHeadline',
          'starterText',
          'siteFooter',
        ],
        seoTitle: 'Nonprofit',
        seoDescription:
          "Our goal is to protect free expression and enable secure global communication. We're working with users to build something sustainable.",
        seoImage: true,
        title: 'Nonprofit (page)',
      },
      model: 'page',
    },
    freeForEveryonePage: {
      fields: {
        path: '/free-for-everyone',
        navigationHeading: 'Free for everyone',
        sections: ['siteHeader', 'starterCard', 'starterQuote', 'siteFooter'],
        seoTitle: 'Free for everyone',
        seoDescription:
          'Wheelroom is an independent nonprofit. Development is supported by grants and donations from people like you.',
        seoImage: true,
        title: 'Free for everyone (page)',
      },
      model: 'page',
    },
    siteHeader: {
      fields: {
        variation: 'navigation-wr',
        navigation: 'headerNavigation',
        title: 'Site header (navigation)',
        actions: ['getStartedAction'],
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
    starterHero: {
      fields: {
        topics: ['promiseTopic'],
        topicOptions: ['Hide icon'],
        variation: 'hero-wr',
        title: 'Starter content (hero)',
      },
      model: 'pageSection',
    },
    starterBlock: {
      fields: {
        topics: ['freeForEveryoneTopic', 'openSourceTopic', 'nonprofitTopic'],
        variation: 'block-wr',
        topicOptions: ['Hide media'],
        title: 'Starter content (block)',
      },
      model: 'pageSection',
    },
    starterText: {
      fields: {
        variation: 'text-wr',
        text: 'startertext',
        title: 'Starter content (text)',
      },
      model: 'pageSection',
    },
    startertext: {
      fields: {
        text: `## Wheelroom

Everything we produce is open source. Every time we write code, we get to share it with the world.`,
        title: 'Starter content (rich text)',
      },
      model: 'text',
    },
    starterHeadline: {
      fields: {
        topics: ['nonprofitTopic'],
        topicOptions: ['Reversed order'],
        variation: 'headline-wr',
        title: 'Starter content (headline)',
      },
      model: 'pageSection',
    },
    starterFeatured: {
      fields: {
        topics: ['openSourceTopic', 'promiseTopic'],
        variation: 'featured-wr',
        title: 'Starter content (featured)',
      },
      model: 'pageSection',
    },
    starterCard: {
      fields: {
        topics: [
          'freeForEveryoneTopic',
          'nonprofitTopic',
          'openSourceTopic',
          'promiseTopic',
        ],
        variation: 'card-wr',
        title: 'Starter content (card)',
      },
      model: 'pageSection',
    },
    starterQuote: {
      fields: {
        topics: ['promiseTopic'],
        variation: 'quote-wr',
        title: 'Starter content (quote)',
      },
      model: 'pageSection',
    },
    starterShowcase: {
      fields: {
        topics: [
          'freeForEveryoneTopic',
          'nonprofitTopic',
          'openSourceTopic',
          'promiseTopic',
        ],
        topicOptions: ['Hide icon'],
        variation: 'showcase-wr',
        title: 'Starter content (showcase)',
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
        title: 'Promise (topic)',
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
        title: 'Open Source (topic)',
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
        title: 'Nonprofit (topic)',
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
        title: 'Free for everyone (topic)',
      },
      model: 'topic',
    },
    githubProfileTopic: {
      fields: {
        heading: 'Github profile',
        abstract: `Check our code-base on Github`,
        icon: 'github',
        media: false,
        actions: ['getStartedAction'],
        title: 'Github profile (topic)',
      },
      model: 'topic',
    },
    brandAction: {
      fields: {
        heading: 'Wheelroom',
        description: 'Go back to the Wheelroom homepage',
        page: 'homePage',
        title: 'Wheelroom (action)',
      },
      model: 'action',
    },
    getStartedAction: {
      fields: {
        heading: 'Get started',
        description: 'Visit our Github Wheelroom code repository',
        url: 'https://github.com/wheelroom/wheelroom',
        title: 'Get started (action)',
      },
      model: 'action',
    },
    exampleAction: {
      fields: {
        heading: 'Example action',
        description: 'Wheelroom example action description',
        page: 'homePage',
        title: 'Example (action)',
      },
      model: 'action',
    },
    headerNavigationSegment: {
      fields: {
        pages: [
          'homePage',
          'freeForEveryonePage',
          'nonProfitPage',
          'openSourcePage',
        ],
        title: 'Header navigation (segment)',
      },
      model: 'navigationSegment',
    },
    headerNavigation: {
      fields: {
        segments: ['headerNavigationSegment'],
        title: 'Header navigation',
        skipToContentHeading: 'Skip to Wheelroom content',
        brandAction: 'brandAction',
      },
      model: 'navigation',
    },
    footerNavigationSegment: {
      fields: {
        pages: [
          'homePage',
          'freeForEveryonePage',
          'nonProfitPage',
          'openSourcePage',
        ],
        title: 'Footer navigation (segment)',
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
  exampleSet: {
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
        navigationHeading: 'Home',
        sections: ['siteHeader', 'homeHero', 'homeBlock', 'siteFooter'],
        seoTitle: 'The world’s fastest boilerplate for building applications',
        seoDescription:
          'Wheelroom is a new approach to faster, cost efficient and more secure applications.',
        seoImage: true,
        title: 'Home (page)',
      },
      model: 'page',
    },
    examplesPage: {
      fields: {
        path: '/examples',
        navigationHeading: 'Examples',
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
        title: 'Examples (page)',
      },
      model: 'page',
    },
    documentationPage: {
      fields: {
        path: '/documentation',
        navigationHeading: 'Documentation',
        sections: ['siteHeader', 'exampleText', 'siteFooter'],
        seoTitle: 'Documentation',
        seoDescription:
          'Wheelroom connects your code base within 5 minutes to many services like Contentful and Netlify.',
        seoImage: true,
        title: 'Documentation (page)',
      },
      model: 'page',
    },
    siteHeader: {
      fields: {
        variation: 'navigation-wr',
        navigation: 'headerNavigation',
        title: 'Site header (navigation)',
        actions: ['getStartedAction'],
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
        title: 'Example (hero)',
      },
      model: 'pageSection',
    },
    homeBlock: {
      fields: {
        topics: ['openSourceTopic', 'nonprofitTopic', 'freeForEveryoneTopic'],
        topicOptions: ['Hide media'],
        variation: 'block-wr',
        title: 'Example (block)',
      },
      model: 'pageSection',
    },
    exampleText: {
      fields: {
        variation: 'text-wr',
        text: 'exampletext',
        title: 'Example (text)',
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
        title: 'Example (rich text)',
      },
      model: 'text',
    },
    exampleHeadline: {
      fields: {
        topics: ['exampleTopic'],
        topicOptions: ['Reversed order'],
        variation: 'headline-wr',
        title: 'Example (headline)',
      },
      model: 'pageSection',
    },
    exampleFeatured: {
      fields: {
        topics: ['exampleTopic', 'exampleTopic'],
        variation: 'featured-wr',
        title: 'Example (featured)',
      },
      model: 'pageSection',
    },
    exampleBlock: {
      fields: {
        topics: ['exampleTopic', 'exampleTopic', 'exampleTopic'],
        variation: 'block-wr',
        title: 'Example (block)',
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
        title: 'Example (card)',
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
          'Hide heading',
          'Hide abstract',
          'Hide action',
        ],
        variation: 'gallery-wr',
        title: 'Example (gallery)',
      },
      model: 'pageSection',
    },
    exampleImage: {
      fields: {
        topics: ['exampleTopic'],
        variation: 'image-wr',
        title: 'Example (image)',
      },
      model: 'pageSection',
    },
    exampleQuote: {
      fields: {
        topics: ['exampleTopic'],
        variation: 'quote-wr',
        title: 'Example (quote)',
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
        title: 'Example (showcase)',
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
        title: 'Promise (topic)',
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
        title: 'Open Source (topic)',
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
        title: 'Nonprofit (topic)',
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
        title: 'Free for everyone (topic)',
      },
      model: 'topic',
    },
    exampleTopic: {
      fields: {
        heading: 'Build great things with Wheelroom',
        abstract: `Wheelroom is a new approach to faster, cost efficient and more secure applications.`,
        icon: 'box',
        media: true,
        actions: ['githubAction'],
        title: 'Example (topic)',
      },
      model: 'topic',
    },
    githubProfileTopic: {
      fields: {
        heading: 'Github profile',
        abstract: `Check our code-base on Github`,
        icon: 'github',
        media: false,
        actions: ['githubAction'],
        title: 'Github profile (topic)',
      },
      model: 'topic',
    },
    brandAction: {
      fields: {
        heading: 'Wheelroom',
        description: 'Go back to the Wheelroom homepage',
        page: 'homePage',
        title: 'Wheelroom (action)',
      },
      model: 'action',
    },
    githubAction: {
      fields: {
        heading: 'Try Wheelroom for Free',
        description: 'Visit our Github Wheelroom code repository',
        url: 'https://github.com/wheelroom/wheelroom',
        title: 'Try Wheelroom for Free (action)',
      },
      model: 'action',
    },
    getStartedAction: {
      fields: {
        heading: 'Get started',
        description: 'Visit our Github Wheelroom code repository',
        url: 'https://github.com/wheelroom/wheelroom',
        title: 'Get started (action)',
      },
      model: 'action',
    },
    exampleAction: {
      fields: {
        heading: 'Check the Wheelroom examples',
        description: 'An overview of all the Wheelroom page-section exmaples',
        page: 'examplesPage',
        title: 'Check the Wheelroom examples (action)',
      },
      model: 'action',
    },
    headerNavigationSegment: {
      fields: {
        pages: ['homePage', 'examplesPage', 'documentationPage'],
        title: 'Header navigation (segment)',
      },
      model: 'navigationSegment',
    },
    headerNavigation: {
      fields: {
        segments: ['headerNavigationSegment'],
        title: 'Header navigation',
        skipToContentHeading: 'Skip to Wheelroom content',
        brandAction: 'brandAction',
      },
      model: 'navigation',
    },
    footerNavigationSegment: {
      fields: {
        pages: ['homePage', 'examplesPage', 'documentationPage'],
        title: 'Footer navigation (segment)',
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

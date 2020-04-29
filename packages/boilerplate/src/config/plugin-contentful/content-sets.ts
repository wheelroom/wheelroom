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
        siteAuthor: 'Site author',
        siteDescription: 'Site description',
        siteHeading: 'Site heading',
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
        title: 'Home (Demo page)',
      },
      model: 'page',
    },
    examplesPage: {
      fields: {
        path: '/examples',
        navigationHeading: 'Examples',
        sections: [
          'siteHeader',
          'examplesHeadline',
          'examplesBlock',
          'siteFooter',
        ],
        title: 'Demo of Wheelroom (Demo page)',
      },
      model: 'page',
    },
    aboutPage: {
      fields: {
        path: '/documentation',
        navigationHeading: 'Documentation',
        sections: ['siteHeader', 'docsText', 'siteFooter'],
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
        topicOptions: ['Reversed order'],
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
        title: 'Rich Text',
      },
      model: 'text',
    },
    examplesHeadline: {
      fields: {
        topics: ['exampleTopic'],
        topicOptions: ['Reversed order'],
        variation: 'headline-wr',
        title: 'Example (Demo headline)',
      },
      model: 'pageSection',
    },
    examplesBlock: {
      fields: {
        topics: ['exampleTopic', 'exampleTopic', 'exampleTopic'],
        variation: 'block-wr',
        title: 'Example (Demo block)',
      },
      model: 'pageSection',
    },
    promiseTopic: {
      fields: {
        heading: 'The world’s fastest boilerplate for applications',
        abstract: `Wheelroom connects your code base within 5 minutes to many services like Contentful and Netlify. `,
        icon: 'layers',
        media: true,
        actions: ['wrGithubAction'],
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
        actions: ['wrGithubAction'],
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
        actions: ['wrGithubAction'],
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
        actions: ['wrGithubAction'],
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
    wrExamplesAction: {
      fields: {
        heading: 'Check the Wheelroom examples',
        description: 'An overview of all the Wheelroom page-section exmaples',
        page: 'examplesPage',
        title: 'Check the Wheelroom examples (Demo action)',
      },
      model: 'action',
    },
    headerNavigationSegment: {
      fields: {
        pages: ['homePage', 'examplesPage', 'aboutPage'],
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
        pages: ['homePage', 'examplesPage', 'aboutPage'],
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

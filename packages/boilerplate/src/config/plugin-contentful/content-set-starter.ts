import { ContentTypes } from './content-types-starter'

export const starter: ContentTypes = {
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
  advancedMedia: {
    fields: {
      title: 'Advanced media',
      small: true,
      medium: true,
      large: true,
      extraLarge: true,
    },
    model: 'mediaBreakpoint',
  },
  homePage: {
    fields: {
      path: '/',
      sections: ['siteHeader', 'starterHero', 'starterBlock', 'siteFooter'],
      seoTitle: 'The world’s fastest boilerplate for building applications',
      seoDescription:
        'Wheelroom is a new approach to faster, cost efficient and more secure applications.',
      seoImage: true,
      title: 'Home',
    },
    model: 'page',
  },
  openSourcePage: {
    fields: {
      path: '/open-source',
      sections: ['siteHeader', 'starterFeatured', 'siteFooter'],
      seoTitle: 'Open source',
      seoDescription:
        'Everything we produce is open source. Every time we write code, we get to share it with the world.',
      seoImage: true,
      title: 'Open source',
    },
    model: 'page',
  },
  nonprofitPage: {
    fields: {
      path: '/nonprofit',
      sections: ['siteHeader', 'starterHeadline', 'starterText', 'siteFooter'],
      seoTitle: 'Nonprofit',
      seoDescription:
        "Our goal is to protect free expression and enable secure global communication. We're working with users to build something sustainable.",
      seoImage: true,
      title: 'Nonprofit',
    },
    model: 'page',
  },
  freeForEveryonePage: {
    fields: {
      path: '/free-for-everyone',
      sections: ['siteHeader', 'starterCard', 'starterQuote', 'siteFooter'],
      seoTitle: 'Free for everyone',
      seoDescription:
        'Wheelroom is an independent nonprofit. Development is supported by grants and donations from people like you.',
      seoImage: true,
      title: 'Free for everyone',
    },
    model: 'page',
  },
  siteHeader: {
    fields: {
      variation: 'navigation-wr',
      navigation: ['headerNavigation'],
      title: 'Site header (variation: navigation-wr)',
      actions: ['getStartedAction'],
    },
    model: 'pageSection',
  },
  siteFooter: {
    fields: {
      variation: 'navigation-wr',
      navigation: ['footerNavigation'],
      topics: ['githubProfileTopic'],
      title: 'Site footer (variation: navigation-wr)',
    },
    model: 'pageSection',
  },
  starterHero: {
    fields: {
      topics: ['promiseTopic'],
      topicOptions: ['Hide icon'],
      variation: 'hero-wr',
      title: 'Starter content (variation: hero-wr)',
    },
    model: 'pageSection',
  },
  starterBlock: {
    fields: {
      topics: ['freeForEveryoneTopic', 'openSourceTopic', 'nonprofitTopic'],
      variation: 'block-wr',
      topicOptions: ['Hide media'],
      title: 'Starter content (variation: block-wr)',
    },
    model: 'pageSection',
  },
  starterText: {
    fields: {
      variation: 'text-wr',
      text: 'startertext',
      title: 'Starter content (variation: text-wr)',
    },
    model: 'pageSection',
  },
  startertext: {
    fields: {
      text: `## Wheelroom

Everything we produce is open source. Every time we write code, we get to share it with the world.`,
      title: 'Starter content',
    },
    model: 'text',
  },
  starterHeadline: {
    fields: {
      topics: ['nonprofitTopic'],
      topicOptions: ['Reversed order'],
      variation: 'headline-wr',
      title: 'Starter content (variation: headline-wr)',
    },
    model: 'pageSection',
  },
  starterFeatured: {
    fields: {
      topics: ['openSourceTopic', 'promiseTopic'],
      variation: 'featured-wr',
      title: 'Starter content (variation: featured-wr)',
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
      title: 'Starter content (variation: card-wr)',
    },
    model: 'pageSection',
  },
  starterQuote: {
    fields: {
      topics: ['promiseTopic'],
      variation: 'quote-wr',
      title: 'Starter content (variation: quote-wr)',
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
      title: 'Starter content (variation: showcase-wr)',
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
  githubProfileTopic: {
    fields: {
      heading: 'Github profile',
      abstract: `Check our code-base on Github`,
      icon: 'github',
      media: true,
      actions: ['getStartedAction'],
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
      heading: 'Example action',
      description: 'Wheelroom example action description',
      page: 'homePage',
      title: 'Example',
    },
    model: 'action',
  },
  homeAction: {
    fields: {
      heading: 'Home',
      description: 'Go to Wheelroom homepage',
      page: 'homePage',
      title: 'Home',
    },
    model: 'action',
  },
  openSourceAction: {
    fields: {
      heading: 'Open source',
      description: 'Wheelroom is an open source boilerplate',
      page: 'openSourcePage',
      title: 'Open source',
    },
    model: 'action',
  },
  nonprofitAction: {
    fields: {
      heading: 'Nonprofit',
      description: 'Wheelroom is an independent nonprofit',
      page: 'nonprofitPage',
      title: 'Nonprofit',
    },
    model: 'action',
  },
  freeForEveryoneAction: {
    fields: {
      heading: 'Free for everyone',
      description: "We're working with users to build something sustainable",
      page: 'freeForEveryonePage',
      title: 'Free for everyone',
    },
    model: 'action',
  },
  headerNavigationSegment: {
    fields: {
      actions: [
        'homeAction',
        'freeForEveryoneAction',
        'nonprofitAction',
        'openSourceAction',
      ],
      title: 'Header navigation',
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
      actions: [
        'homeAction',
        'freeForEveryoneAction',
        'nonprofitAction',
        'openSourceAction',
      ],
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
}

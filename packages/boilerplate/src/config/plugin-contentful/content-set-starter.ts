import { ContentTypes } from './content-types-starter'

export const starter: ContentTypes = {
  advancedMedia: {
    fields: {
      extraLarge: true,
      large: true,
      medium: true,
      small: true,
      title: 'Advanced media',
    },
    model: 'mediaBreakpoint',
  },
  blogPage: {
    fields: {
      path: '/blog/%slug%',
      sections: [
        'siteHeaderSection',
        'starterBlogSection',
        'siteFooterSection',
      ],
      seoDescription: 'Blogs are here to stay',
      seoImage: true,
      seoTitle: 'Blog',
      title: 'Blog template',
    },
    model: 'page',
  },
  brandAction: {
    fields: {
      description: 'Go back to the Wheelroom homepage',
      heading: 'Wheelroom',
      page: 'homePage',
      title: 'Go home',
    },
    model: 'action',
  },
  footerNavigation: {
    fields: {
      segments: ['footerNavigationSegment'],
      title: 'Footer navigation',
    },
    model: 'navigation',
  },
  footerNavigationSegment: {
    fields: {
      actions: ['goHome', 'goFreeForEveryone', 'goNonprofit', 'goOpenSource'],
      title: 'Footer navigation segment',
    },
    model: 'navigationSegment',
  },
  freeForEveryonePage: {
    fields: {
      path: '/free-for-everyone',
      sections: [
        'siteHeaderSection',
        'starterCardSection',
        'starterQuoteSection',
        'siteFooterSection',
      ],
      seoDescription:
        'Wheelroom is an independent nonprofit. Development is supported by grants and donations from people like you.',
      seoImage: true,
      seoTitle: 'Free for everyone',
      title: '/free-for-everyone',
    },
    model: 'page',
  },
  freeForEveryoneTopic: {
    fields: {
      abstract:
        'Wheelroom is an independent nonprofit. Development is supported by grants and donations from people like you.',
      actions: ['goHome'],
      heading: 'Free for everyone',
      icon: 'globe',
      media: true,
      title: 'Free for everyone',
    },
    model: 'topic',
  },
  getStarted: {
    fields: {
      description: 'Visit our Github Wheelroom code repository',
      heading: 'Get started',
      title: 'Get started link',
      url: 'https://github.com/wheelroom/wheelroom',
    },
    model: 'action',
  },
  githubProfileTopic: {
    fields: {
      abstract: 'Check our code-base on Github',
      actions: ['getStarted'],
      heading: 'Github profile',
      icon: 'github',
      media: true,
      title: 'Github profile',
    },
    model: 'topic',
  },
  goFreeForEveryone: {
    fields: {
      description: "We're working with users to build something sustainable",
      heading: 'Free for everyone',
      page: 'freeForEveryonePage',
      title: 'Go free for everyone',
    },
    model: 'action',
  },
  goHome: {
    fields: {
      description: 'Go to Wheelroom homepage',
      heading: 'Home',
      page: 'homePage',
      title: 'Go home',
    },
    model: 'action',
  },
  goNonprofit: {
    fields: {
      description: 'Wheelroom is an independent nonprofit',
      heading: 'Nonprofit',
      page: 'nonprofitPage',
      title: 'Go nonprofit',
    },
    model: 'action',
  },
  goOpenSource: {
    fields: {
      description: 'Wheelroom is an open source boilerplate',
      heading: 'Open source',
      page: 'openSourcePage',
      title: 'Go open source',
    },
    model: 'action',
  },
  headerNavigation: {
    fields: {
      brandAction: 'brandAction',
      segments: ['headerNavigationSegment'],
      skipToContentHeading: 'Skip to Wheelroom content',
      title: 'Header navigation',
    },
    model: 'navigation',
  },
  headerNavigationSegment: {
    fields: {
      actions: ['goHome', 'goFreeForEveryone', 'goNonprofit', 'goOpenSource'],
      title: 'Header navigation segment',
    },
    model: 'navigationSegment',
  },
  homePage: {
    fields: {
      path: '/',
      sections: [
        'siteHeaderSection',
        'starterHeroSection',
        'starterBlockSection',
        'siteFooterSection',
      ],
      seoDescription:
        'Wheelroom is a new approach to faster, cost efficient and more secure applications.',
      seoImage: true,
      seoTitle: 'The world’s fastest boilerplate for building applications',
      title: '/',
    },
    model: 'page',
  },
  myFrstBlog: {
    fields: {
      date: '2020-05-01T00:00+01:00',
      navigationHeading: 'My first blog',
      profiles: ['myGreatBlogProfile'],
      seoDescription: 'Blogs are here to stay',
      seoImage: true,
      seoTitle: 'My first blog',
      slug: 'my-first-blog',
      text: `# My first blog
This is my first blog.
## Blogs are green

All blogs that I produce are green. Every time I talk, I get to improve the world.`,
      title: 'My first blog',
    },
    model: 'blog',
  },
  myGreatBlogProfile: {
    fields: {
      abstract: 'I am a blogger',
      actions: ['goHome'],
      heading: 'Mr. Blog',
      icon: 'smile',
      media: true,
      title: 'Mr. Blog',
    },
    model: 'topic',
  },
  mySecondBlog: {
    fields: {
      date: '2020-05-02T00:00+02:00',
      navigationHeading: 'My second blog',
      profiles: ['wheelroomConnectsTopic'],
      seoDescription: 'Blogs are here to stay',
      seoImage: true,
      seoTitle: 'My second blog',
      slug: 'my-second-blog',
      text: `# My second blog
This is my second blog.
## Blogs are cool

All blogs that I produce are open source. Every time I talk, I get to share it with the world.`,
      title: 'My second blog',
    },
    model: 'blog',
  },
  nonprofitPage: {
    fields: {
      path: '/nonprofit',
      sections: [
        'siteHeaderSection',
        'starterHeadlineSection',
        'starterTextSection',
        'siteFooterSection',
      ],
      seoDescription:
        "Our goal is to protect free expression and enable secure global communication. We're working with users to build something sustainable.",
      seoImage: true,
      seoTitle: 'Nonprofit',
      title: '/nonprofit',
    },
    model: 'page',
  },
  nonprofitTopic: {
    fields: {
      abstract:
        "Our goal is to protect free expression and enable secure global communication. We're working with users to build something sustainable.",
      actions: ['goHome'],
      heading: 'Nonprofit',
      icon: 'heart',
      media: true,
      title: 'Nonprofit',
    },
    model: 'topic',
  },
  openSourcePage: {
    fields: {
      path: '/open-source',
      sections: [
        'siteHeaderSection',
        'starterFeaturedSection',
        'siteFooterSection',
      ],
      seoDescription:
        'Everything we produce is open source. Every time we write code, we get to share it with the world.',
      seoImage: true,
      seoTitle: 'Open source',
      title: '/open-source',
    },
    model: 'page',
  },
  openSourceTopic: {
    fields: {
      abstract:
        'Everything we produce is open source. Every time we write code, we get to share it with the world.',
      actions: ['goHome'],
      heading: 'Open Source',
      icon: 'code',
      media: true,
      title: 'Open Source',
    },
    model: 'topic',
  },
  siteFooterSection: {
    fields: {
      navigation: ['footerNavigation'],
      title: 'Site footer (variation: navigation-wr)',
      topics: ['githubProfileTopic'],
      variation: 'navigation-wr',
    },
    model: 'pageSection',
  },
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
  siteHeaderSection: {
    fields: {
      actions: ['getStarted'],
      navigation: ['headerNavigation'],
      title: 'Site header (variation: navigation-wr)',
      variation: 'navigation-wr',
    },
    model: 'pageSection',
  },
  starterBlockSection: {
    fields: {
      title: 'Starter content (variation: block-wr)',
      topicOptions: ['Hide media'],
      topics: ['freeForEveryoneTopic', 'openSourceTopic', 'nonprofitTopic'],
      variation: 'block-wr',
    },
    model: 'pageSection',
  },
  starterBlogSection: {
    fields: {
      title: 'Starter blog (variation: blog-wr)',
      variation: 'blog-wr',
    },
    model: 'pageSection',
  },
  starterCardSection: {
    fields: {
      title: 'Starter content (variation: card-wr)',
      topics: [
        'freeForEveryoneTopic',
        'nonprofitTopic',
        'openSourceTopic',
        'wheelroomConnectsTopic',
      ],
      variation: 'card-wr',
    },
    model: 'pageSection',
  },
  starterFeaturedSection: {
    fields: {
      title: 'Starter content (variation: featured-wr)',
      topics: ['openSourceTopic', 'wheelroomConnectsTopic'],
      variation: 'featured-wr',
    },
    model: 'pageSection',
  },
  starterHeadlineSection: {
    fields: {
      title: 'Starter content (variation: headline-wr)',
      topicOptions: ['Reversed order'],
      topics: ['nonprofitTopic'],
      variation: 'headline-wr',
    },
    model: 'pageSection',
  },
  starterHeroSection: {
    fields: {
      title: 'Starter content (variation: hero-wr)',
      topicOptions: ['Hide icon'],
      topics: ['wheelroomConnectsTopic'],
      variation: 'hero-wr',
    },
    model: 'pageSection',
  },
  starterQuoteSection: {
    fields: {
      title: 'Starter content (variation: quote-wr)',
      topics: ['wheelroomConnectsTopic'],
      variation: 'quote-wr',
    },
    model: 'pageSection',
  },
  starterShowcaseSection: {
    fields: {
      title: 'Starter content (variation: showcase-wr)',
      topicOptions: ['Hide icon'],
      topics: [
        'freeForEveryoneTopic',
        'nonprofitTopic',
        'openSourceTopic',
        'wheelroomConnectsTopic',
      ],
      variation: 'showcase-wr',
    },
    model: 'pageSection',
  },
  starterText: {
    fields: {
      text: `## Wheelroom

Everything we produce is open source. Every time we write code, we get to share it with the world.`,
      title: 'Starter content',
    },
    model: 'text',
  },
  starterTextSection: {
    fields: {
      text: 'starterText',
      title: 'Starter content (variation: text-wr)',
      variation: 'text-wr',
    },
    model: 'pageSection',
  },
  wheelroomConnectsTopic: {
    fields: {
      abstract:
        'Wheelroom connects your code base within 5 minutes to many services like Contentful and Netlify. ',
      actions: ['goHome'],
      heading: 'The world’s fastest boilerplate for applications',
      icon: 'layers',
      media: true,
      title: 'Wheelroom connects',
    },
    model: 'topic',
  },
}

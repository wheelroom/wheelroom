export const cfNavigationField = {
  sys: {
    space: {
      sys: {
        type: 'Link',
        linkType: 'Space',
        id: 'jeb9ft1t2asv',
      },
    },
    type: 'Entry',
    id: 'openerNavigatie',
    contentType: {
      sys: {
        type: 'Link',
        linkType: 'ContentType',
        id: 'navigation',
      },
    },
    revision: 4,
    createdAt: '2020-02-12T21:37:34.599Z',
    updatedAt: '2020-02-13T11:18:57.364Z',
    environment: {
      sys: {
        id: 'master',
        type: 'Link',
        linkType: 'Environment',
      },
    },
    locale: 'en-US',
  },
  fields: {
    title: 'Opener navigatie',
    pages: [
      {
        sys: {
          type: 'Link',
          linkType: 'Entry',
          id: 'homePage',
          circular: true,
        },
      },
      {
        sys: {
          space: {
            sys: {
              type: 'Link',
              linkType: 'Space',
              id: 'jeb9ft1t2asv',
            },
          },
          type: 'Entry',
          id: 'productPage',
          contentType: {
            sys: {
              type: 'Link',
              linkType: 'ContentType',
              id: 'page',
            },
          },
          revision: 5,
          createdAt: '2020-02-12T21:37:40.774Z',
          updatedAt: '2020-02-13T11:16:27.177Z',
          environment: {
            sys: {
              id: 'master',
              type: 'Link',
              linkType: 'Environment',
            },
          },
          locale: 'en-US',
        },
        fields: {
          title: 'Producten',
          path: '/producten',
          sections: [
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: 'productOpener',
              },
            },
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: 'productcodeText',
              },
            },
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: 'buildLoveQuote',
              },
            },
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: 'merkverwateringText',
              },
            },
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: 'endOfPageLinks',
              },
            },
            {
              sys: {
                space: {
                  sys: {
                    type: 'Link',
                    linkType: 'Space',
                    id: 'jeb9ft1t2asv',
                  },
                },
                type: 'Entry',
                id: 'standardFooter',
                contentType: {
                  sys: {
                    type: 'Link',
                    linkType: 'ContentType',
                    id: 'footerSection',
                  },
                },
                revision: 3,
                createdAt: '2020-02-12T21:37:22.504Z',
                updatedAt: '2020-02-13T11:16:09.797Z',
                environment: {
                  sys: {
                    id: 'master',
                    type: 'Link',
                    linkType: 'Environment',
                  },
                },
                locale: 'en-US',
              },
              fields: {
                title: 'Standaard footer',
                backgroundColor: 'mint',
                navigation: {
                  sys: {
                    space: {
                      sys: {
                        type: 'Link',
                        linkType: 'Space',
                        id: 'jeb9ft1t2asv',
                      },
                    },
                    type: 'Entry',
                    id: 'footerNavigatie',
                    contentType: {
                      sys: {
                        type: 'Link',
                        linkType: 'ContentType',
                        id: 'navigation',
                      },
                    },
                    revision: 3,
                    createdAt: '2020-02-12T21:37:21.346Z',
                    updatedAt: '2020-02-13T11:16:08.253Z',
                    environment: {
                      sys: {
                        id: 'master',
                        type: 'Link',
                        linkType: 'Environment',
                      },
                    },
                    locale: 'en-US',
                  },
                  fields: {
                    title: 'Footer navigatie',
                    pages: [
                      {
                        sys: {
                          type: 'Link',
                          linkType: 'Entry',
                          id: 'productPage',
                          circular: true,
                        },
                      },
                      {
                        sys: {
                          space: {
                            sys: {
                              type: 'Link',
                              linkType: 'Space',
                              id: 'jeb9ft1t2asv',
                            },
                          },
                          type: 'Entry',
                          id: 'backgroundPage',
                          contentType: {
                            sys: {
                              type: 'Link',
                              linkType: 'ContentType',
                              id: 'page',
                            },
                          },
                          revision: 4,
                          createdAt: '2020-02-12T21:37:39.425Z',
                          updatedAt: '2020-02-13T11:16:25.907Z',
                          environment: {
                            sys: {
                              id: 'master',
                              type: 'Link',
                              linkType: 'Environment',
                            },
                          },
                          locale: 'en-US',
                        },
                        fields: {
                          title: 'Achtergrond',
                          path: '/achtergrond',
                          sections: [
                            {
                              sys: {
                                type: 'Link',
                                linkType: 'Entry',
                                id: 'backgroundOpener',
                              },
                            },
                            {
                              sys: {
                                type: 'Link',
                                linkType: 'Entry',
                                id: 'naamcreatieText',
                              },
                            },
                            {
                              sys: {
                                type: 'Link',
                                linkType: 'Entry',
                                id: 'careQuote',
                              },
                            },
                            {
                              sys: {
                                type: 'Link',
                                linkType: 'Entry',
                                id: 'endOfPageLinks',
                              },
                            },
                            {
                              sys: {
                                type: 'Link',
                                linkType: 'Entry',
                                id: 'standardFooter',
                                circular: true,
                              },
                            },
                          ],
                          heading:
                            'Op dit moment is er maar één gemeente in Nederland zonder achtergrond.',
                          navigationHeading: 'achtergrond',
                          image: {
                            sys: {
                              space: {
                                sys: {
                                  type: 'Link',
                                  linkType: 'Space',
                                  id: 'jeb9ft1t2asv',
                                },
                              },
                              type: 'Asset',
                              id: 'demoAsset',
                              revision: 5,
                              createdAt: '2020-02-12T21:37:01.335Z',
                              updatedAt: '2020-02-13T11:15:53.740Z',
                              environment: {
                                sys: {
                                  id: 'master',
                                  type: 'Link',
                                  linkType: 'Environment',
                                },
                              },
                              locale: 'en-US',
                            },
                            fields: {
                              title: 'wheelroom',
                              description: 'Demo asset with fixed id',
                              file: {
                                url:
                                  '//images.ctfassets.net/jeb9ft1t2asv/demoAsset/95162fee3f8da29ed8c15182e62f2c98/wheelroom',
                                details: {
                                  size: 13154,
                                  image: {
                                    width: 1026,
                                    height: 1025,
                                  },
                                },
                                fileName: 'wheelroom',
                                contentType: 'image/png',
                              },
                            },
                          },
                          abstract:
                            'In de journalistiek wordt de term achtergrond gebruikt voor de feitelijke en betekenisgevende context waarin het dagelijkse nieuws zich afspeelt.',
                        },
                      },
                      {
                        sys: {
                          space: {
                            sys: {
                              type: 'Link',
                              linkType: 'Space',
                              id: 'jeb9ft1t2asv',
                            },
                          },
                          type: 'Entry',
                          id: 'contactPage',
                          contentType: {
                            sys: {
                              type: 'Link',
                              linkType: 'ContentType',
                              id: 'page',
                            },
                          },
                          revision: 3,
                          createdAt: '2020-02-12T21:37:38.017Z',
                          updatedAt: '2020-02-13T11:16:24.342Z',
                          environment: {
                            sys: {
                              id: 'master',
                              type: 'Link',
                              linkType: 'Environment',
                            },
                          },
                          locale: 'en-US',
                        },
                        fields: {
                          title: 'Contact',
                          path: '/contact',
                          sections: [
                            {
                              sys: {
                                type: 'Link',
                                linkType: 'Entry',
                                id: 'contactOpener',
                              },
                            },
                            {
                              sys: {
                                type: 'Link',
                                linkType: 'Entry',
                                id: 'contactText',
                              },
                            },
                            {
                              sys: {
                                space: {
                                  sys: {
                                    type: 'Link',
                                    linkType: 'Space',
                                    id: 'jeb9ft1t2asv',
                                  },
                                },
                                type: 'Entry',
                                id: 'passionQuote',
                                contentType: {
                                  sys: {
                                    type: 'Link',
                                    linkType: 'ContentType',
                                    id: 'quoteSection',
                                  },
                                },
                                revision: 3,
                                createdAt: '2020-02-12T21:37:07.920Z',
                                updatedAt: '2020-02-13T11:15:54.974Z',
                                environment: {
                                  sys: {
                                    id: 'master',
                                    type: 'Link',
                                    linkType: 'Environment',
                                  },
                                },
                                locale: 'en-US',
                              },
                              fields: {
                                title: 'Quote Michael Hyatt',
                                heading: 'Michael Hyatt',
                                subHeading: 'Virtual business mentor',
                                abstract:
                                  'Marketing gaat eigenlijk gewoon over het delen van je passie.',
                                image: {
                                  sys: {
                                    space: {
                                      sys: {
                                        type: 'Link',
                                        linkType: 'Space',
                                        id: 'jeb9ft1t2asv',
                                      },
                                    },
                                    type: 'Asset',
                                    id: 'demoAsset',
                                    revision: 5,
                                    createdAt: '2020-02-12T21:37:01.335Z',
                                    updatedAt: '2020-02-13T11:15:53.740Z',
                                    environment: {
                                      sys: {
                                        id: 'master',
                                        type: 'Link',
                                        linkType: 'Environment',
                                      },
                                    },
                                    locale: 'en-US',
                                  },
                                  fields: {
                                    title: 'wheelroom',
                                    description: 'Demo asset with fixed id',
                                    file: {
                                      url:
                                        '//images.ctfassets.net/jeb9ft1t2asv/demoAsset/95162fee3f8da29ed8c15182e62f2c98/wheelroom',
                                      details: {
                                        size: 13154,
                                        image: {
                                          width: 1026,
                                          height: 1025,
                                        },
                                      },
                                      fileName: 'wheelroom',
                                      contentType: 'image/png',
                                    },
                                  },
                                },
                              },
                            },
                            {
                              sys: {
                                type: 'Link',
                                linkType: 'Entry',
                                id: 'naamcreatieText',
                              },
                            },
                            {
                              sys: {
                                type: 'Link',
                                linkType: 'Entry',
                                id: 'endOfPageLinks',
                              },
                            },
                            {
                              sys: {
                                type: 'Link',
                                linkType: 'Entry',
                                id: 'standardFooter',
                                circular: true,
                              },
                            },
                          ],
                          heading: 'Contact',
                          navigationHeading: 'contact',
                          image: {
                            sys: {
                              space: {
                                sys: {
                                  type: 'Link',
                                  linkType: 'Space',
                                  id: 'jeb9ft1t2asv',
                                },
                              },
                              type: 'Asset',
                              id: 'demoAsset',
                              revision: 5,
                              createdAt: '2020-02-12T21:37:01.335Z',
                              updatedAt: '2020-02-13T11:15:53.740Z',
                              environment: {
                                sys: {
                                  id: 'master',
                                  type: 'Link',
                                  linkType: 'Environment',
                                },
                              },
                              locale: 'en-US',
                            },
                            fields: {
                              title: 'wheelroom',
                              description: 'Demo asset with fixed id',
                              file: {
                                url:
                                  '//images.ctfassets.net/jeb9ft1t2asv/demoAsset/95162fee3f8da29ed8c15182e62f2c98/wheelroom',
                                details: {
                                  size: 13154,
                                  image: {
                                    width: 1026,
                                    height: 1025,
                                  },
                                },
                                fileName: 'wheelroom',
                                contentType: 'image/png',
                              },
                            },
                          },
                          abstract:
                            'Communicatie is een activiteit waarbij levende wezens betekenissen uitwisselen door op elkaars signalen te reageren. ',
                        },
                      },
                    ],
                  },
                },
              },
            },
          ],
        },
      },
    ],
  },
}

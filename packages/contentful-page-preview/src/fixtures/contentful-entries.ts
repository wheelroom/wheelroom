export const contentfulEntries = {
  sys: {
    type: 'Array',
  },
  total: 1,
  skip: 0,
  limit: 100,
  items: [
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
        id: 'homePage',
        contentType: {
          sys: {
            type: 'Link',
            linkType: 'ContentType',
            id: 'page',
          },
        },
        revision: 5,
        createdAt: '2020-02-12T21:37:42.018Z',
        updatedAt: '2020-02-16T13:38:53.820Z',
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
        title: 'Home',
        path: '/',
        sections: [
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
              id: 'homeOpener',
              contentType: {
                sys: {
                  type: 'Link',
                  linkType: 'ContentType',
                  id: 'openerSection',
                },
              },
              revision: 3,
              createdAt: '2020-02-12T21:37:35.755Z',
              updatedAt: '2020-02-13T11:16:23.281Z',
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
              title: 'Homepagina opener',
              variation: 'home pagina',
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
                                            createdAt:
                                              '2020-02-12T21:37:01.335Z',
                                            updatedAt:
                                              '2020-02-13T11:15:53.740Z',
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
                                            description:
                                              'Demo asset with fixed id',
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
                                              createdAt:
                                                '2020-02-12T21:37:07.920Z',
                                              updatedAt:
                                                '2020-02-13T11:15:54.974Z',
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
                                              subHeading:
                                                'Virtual business mentor',
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
                                                  createdAt:
                                                    '2020-02-12T21:37:01.335Z',
                                                  updatedAt:
                                                    '2020-02-13T11:15:53.740Z',
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
                                                  description:
                                                    'Demo asset with fixed id',
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
                                            createdAt:
                                              '2020-02-12T21:37:01.335Z',
                                            updatedAt:
                                              '2020-02-13T11:15:53.740Z',
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
                                            description:
                                              'Demo asset with fixed id',
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
                        heading:
                          'Een product in economische zin is een tastbare zaak met een bepaalde waarde.',
                        navigationHeading: 'product',
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
                          'Een product kan worden vergezeld van productinformatie. Voor veel productcategorieën is het beschrijven van het product wettelijk vastgelegd. Zo moeten voedselproducten voorzien zijn van een etiket met de ingrediënten, de inhoud en de houdbaarheidsdatum.',
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
                                              type: 'Link',
                                              linkType: 'Entry',
                                              id: 'standardFooter',
                                              circular: true,
                                            },
                                          },
                                        ],
                                        heading:
                                          'Een product in economische zin is een tastbare zaak met een bepaalde waarde.',
                                        navigationHeading: 'product',
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
                                            createdAt:
                                              '2020-02-12T21:37:01.335Z',
                                            updatedAt:
                                              '2020-02-13T11:15:53.740Z',
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
                                            description:
                                              'Demo asset with fixed id',
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
                                          'Een product kan worden vergezeld van productinformatie. Voor veel productcategorieën is het beschrijven van het product wettelijk vastgelegd. Zo moeten voedselproducten voorzien zijn van een etiket met de ingrediënten, de inhoud en de houdbaarheidsdatum.',
                                      },
                                    },
                                    {
                                      sys: {
                                        type: 'Link',
                                        linkType: 'Entry',
                                        id: 'backgroundPage',
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
                                              createdAt:
                                                '2020-02-12T21:37:07.920Z',
                                              updatedAt:
                                                '2020-02-13T11:15:54.974Z',
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
                                              subHeading:
                                                'Virtual business mentor',
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
                                                  createdAt:
                                                    '2020-02-12T21:37:01.335Z',
                                                  updatedAt:
                                                    '2020-02-13T11:15:53.740Z',
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
                                                  description:
                                                    'Demo asset with fixed id',
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
                                            createdAt:
                                              '2020-02-12T21:37:01.335Z',
                                            updatedAt:
                                              '2020-02-13T11:15:53.740Z',
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
                                            description:
                                              'Demo asset with fixed id',
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
                                              type: 'Link',
                                              linkType: 'Entry',
                                              id: 'standardFooter',
                                              circular: true,
                                            },
                                          },
                                        ],
                                        heading:
                                          'Een product in economische zin is een tastbare zaak met een bepaalde waarde.',
                                        navigationHeading: 'product',
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
                                            createdAt:
                                              '2020-02-12T21:37:01.335Z',
                                            updatedAt:
                                              '2020-02-13T11:15:53.740Z',
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
                                            description:
                                              'Demo asset with fixed id',
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
                                          'Een product kan worden vergezeld van productinformatie. Voor veel productcategorieën is het beschrijven van het product wettelijk vastgelegd. Zo moeten voedselproducten voorzien zijn van een etiket met de ingrediënten, de inhoud en de houdbaarheidsdatum.',
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
                                            createdAt:
                                              '2020-02-12T21:37:01.335Z',
                                            updatedAt:
                                              '2020-02-13T11:15:53.740Z',
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
                                            description:
                                              'Demo asset with fixed id',
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
                                        type: 'Link',
                                        linkType: 'Entry',
                                        id: 'contactPage',
                                        circular: true,
                                      },
                                    },
                                  ],
                                },
                              },
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
                        id: '59J3EhUcb2ud1QCpjuIahf',
                        contentType: {
                          sys: {
                            type: 'Link',
                            linkType: 'ContentType',
                            id: 'page',
                          },
                        },
                        revision: 1,
                        createdAt: '2020-02-13T11:17:37.240Z',
                        updatedAt: '2020-02-13T11:18:10.684Z',
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
                        title: 'Tentoonstellingen',
                        path: '/tentoonstellingen',
                        sections: [
                          {
                            sys: {
                              type: 'Link',
                              linkType: 'Entry',
                              id: 'productOpener',
                            },
                          },
                        ],
                        heading: 'Tentoonstellingen',
                      },
                    },
                  ],
                },
              },
              boxBackgroundColor: 'green',
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
              id: 'merkarchitectuurText',
              contentType: {
                sys: {
                  type: 'Link',
                  linkType: 'ContentType',
                  id: 'textSection',
                },
              },
              revision: 3,
              createdAt: '2020-02-12T21:37:14.109Z',
              updatedAt: '2020-02-13T11:16:00.421Z',
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
              title: 'Tekst merkarchitectuur',
              text: {
                nodeType: 'document',
                data: {},
                content: [
                  {
                    nodeType: 'heading-1',
                    content: [
                      {
                        nodeType: 'text',
                        value: 'Merkenarchitectuur',
                        marks: [],
                        data: {},
                      },
                    ],
                    data: {},
                  },
                  {
                    nodeType: 'paragraph',
                    content: [
                      {
                        nodeType: 'text',
                        value:
                          "De verschillende merken van een onderneming vormen wat de merkarchitectuur\n(Engels: 'brand architecture') wordt genoemd. Soms hebben die merken ook wat\nbetreft de naam een duidelijke relatie. McDonald's gebruikt bijvoorbeeld voor\nverschillende producten het voorvoegsel 'Mc-' (McFlurry, McKroket), evenals\nNestlé (Nescafé, Nesquik, Nespresso).",
                        marks: [],
                        data: {},
                      },
                    ],
                    data: {},
                  },
                ],
              },
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
              space: {
                sys: {
                  type: 'Link',
                  linkType: 'Space',
                  id: 'jeb9ft1t2asv',
                },
              },
              type: 'Entry',
              id: 'endOfPageLinksLarge',
              contentType: {
                sys: {
                  type: 'Link',
                  linkType: 'ContentType',
                  id: 'listSection',
                },
              },
              revision: 3,
              createdAt: '2020-02-12T21:37:23.785Z',
              updatedAt: '2020-02-13T11:16:11.403Z',
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
              title: 'Referenties groot',
              variation: 'grote tegels',
              items: [
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
                    id: 'productPageItem',
                    contentType: {
                      sys: {
                        type: 'Link',
                        linkType: 'ContentType',
                        id: 'listItem',
                      },
                    },
                    revision: 7,
                    createdAt: '2020-02-12T21:37:29.878Z',
                    updatedAt: '2020-02-13T11:16:16.478Z',
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
                    title: 'Tegel productpagina',
                    view: 'volledige afbeelding',
                    link: {
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
                                            createdAt:
                                              '2020-02-12T21:37:01.335Z',
                                            updatedAt:
                                              '2020-02-13T11:15:53.740Z',
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
                                            description:
                                              'Demo asset with fixed id',
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
                                              createdAt:
                                                '2020-02-12T21:37:07.920Z',
                                              updatedAt:
                                                '2020-02-13T11:15:54.974Z',
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
                                              subHeading:
                                                'Virtual business mentor',
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
                                                  createdAt:
                                                    '2020-02-12T21:37:01.335Z',
                                                  updatedAt:
                                                    '2020-02-13T11:15:53.740Z',
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
                                                  description:
                                                    'Demo asset with fixed id',
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
                                            createdAt:
                                              '2020-02-12T21:37:01.335Z',
                                            updatedAt:
                                              '2020-02-13T11:15:53.740Z',
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
                                            description:
                                              'Demo asset with fixed id',
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
                        heading:
                          'Een product in economische zin is een tastbare zaak met een bepaalde waarde.',
                        navigationHeading: 'product',
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
                          'Een product kan worden vergezeld van productinformatie. Voor veel productcategorieën is het beschrijven van het product wettelijk vastgelegd. Zo moeten voedselproducten voorzien zijn van een etiket met de ingrediënten, de inhoud en de houdbaarheidsdatum.',
                      },
                    },
                    heading: 'Geniale producten',
                    abstract:
                      'Onze producten zijn fantastisch. Deze tekst overschijft de pagina samenvatting.',
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
                    id: 'backgroundPageItem',
                    contentType: {
                      sys: {
                        type: 'Link',
                        linkType: 'ContentType',
                        id: 'listItem',
                      },
                    },
                    revision: 5,
                    createdAt: '2020-02-12T21:37:28.630Z',
                    updatedAt: '2020-02-13T11:16:15.366Z',
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
                    title: 'Tegel achtergrondpagina',
                    view: 'onderkant groen',
                    link: {
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
                                              type: 'Link',
                                              linkType: 'Entry',
                                              id: 'standardFooter',
                                              circular: true,
                                            },
                                          },
                                        ],
                                        heading:
                                          'Een product in economische zin is een tastbare zaak met een bepaalde waarde.',
                                        navigationHeading: 'product',
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
                                            createdAt:
                                              '2020-02-12T21:37:01.335Z',
                                            updatedAt:
                                              '2020-02-13T11:15:53.740Z',
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
                                            description:
                                              'Demo asset with fixed id',
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
                                          'Een product kan worden vergezeld van productinformatie. Voor veel productcategorieën is het beschrijven van het product wettelijk vastgelegd. Zo moeten voedselproducten voorzien zijn van een etiket met de ingrediënten, de inhoud en de houdbaarheidsdatum.',
                                      },
                                    },
                                    {
                                      sys: {
                                        type: 'Link',
                                        linkType: 'Entry',
                                        id: 'backgroundPage',
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
                                              createdAt:
                                                '2020-02-12T21:37:07.920Z',
                                              updatedAt:
                                                '2020-02-13T11:15:54.974Z',
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
                                              subHeading:
                                                'Virtual business mentor',
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
                                                  createdAt:
                                                    '2020-02-12T21:37:01.335Z',
                                                  updatedAt:
                                                    '2020-02-13T11:15:53.740Z',
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
                                                  description:
                                                    'Demo asset with fixed id',
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
                                            createdAt:
                                              '2020-02-12T21:37:01.335Z',
                                            updatedAt:
                                              '2020-02-13T11:15:53.740Z',
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
                                            description:
                                              'Demo asset with fixed id',
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
                    heading: 'Voorgrond en achterhoofd',
                    abstract:
                      'Wie zijn wij? Deze tekst overschijft de pagina samenvatting.',
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
                    id: 'contactPageItem',
                    contentType: {
                      sys: {
                        type: 'Link',
                        linkType: 'ContentType',
                        id: 'listItem',
                      },
                    },
                    revision: 5,
                    createdAt: '2020-02-12T21:37:26.572Z',
                    updatedAt: '2020-02-13T11:16:13.899Z',
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
                    title: 'Tegel contactpagina',
                    view: 'onderkant mint',
                    link: {
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
                                              type: 'Link',
                                              linkType: 'Entry',
                                              id: 'standardFooter',
                                              circular: true,
                                            },
                                          },
                                        ],
                                        heading:
                                          'Een product in economische zin is een tastbare zaak met een bepaalde waarde.',
                                        navigationHeading: 'product',
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
                                            createdAt:
                                              '2020-02-12T21:37:01.335Z',
                                            updatedAt:
                                              '2020-02-13T11:15:53.740Z',
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
                                            description:
                                              'Demo asset with fixed id',
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
                                          'Een product kan worden vergezeld van productinformatie. Voor veel productcategorieën is het beschrijven van het product wettelijk vastgelegd. Zo moeten voedselproducten voorzien zijn van een etiket met de ingrediënten, de inhoud en de houdbaarheidsdatum.',
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
                                            createdAt:
                                              '2020-02-12T21:37:01.335Z',
                                            updatedAt:
                                              '2020-02-13T11:15:53.740Z',
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
                                            description:
                                              'Demo asset with fixed id',
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
                                        type: 'Link',
                                        linkType: 'Entry',
                                        id: 'contactPage',
                                        circular: true,
                                      },
                                    },
                                  ],
                                },
                              },
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
                    abstract:
                      'Omarm de nostalgie. Stuur een fax! Deze tekst overschijft de pagina samenvatting.',
                  },
                },
              ],
              heading: 'Kijk ook eens hier',
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
                              type: 'Link',
                              linkType: 'Entry',
                              id: 'standardFooter',
                              circular: true,
                            },
                          },
                        ],
                        heading:
                          'Een product in economische zin is een tastbare zaak met een bepaalde waarde.',
                        navigationHeading: 'product',
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
                          'Een product kan worden vergezeld van productinformatie. Voor veel productcategorieën is het beschrijven van het product wettelijk vastgelegd. Zo moeten voedselproducten voorzien zijn van een etiket met de ingrediënten, de inhoud en de houdbaarheidsdatum.',
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
        heading: 'Deze merknaam is heel goed...',
        navigationHeading: 'home',
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
          "Een merk is een teken om goederen of diensten te onderscheiden. Een merknaam kan daartoe dienen, maar het begrip 'merk' is breder en omvat ook de verschijningsvorm van de naam, het logo en kan ook iets anders zijn dan een naam, bijvoorbeeld een kleur of een beeldmerk.",
      },
    },
  ],
  includes: {
    Entry: [
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
          id: '59J3EhUcb2ud1QCpjuIahf',
          contentType: {
            sys: {
              type: 'Link',
              linkType: 'ContentType',
              id: 'page',
            },
          },
          revision: 1,
          createdAt: '2020-02-13T11:17:37.240Z',
          updatedAt: '2020-02-13T11:18:10.684Z',
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
          title: 'Tentoonstellingen',
          path: '/tentoonstellingen',
          sections: [
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: 'productOpener',
              },
            },
          ],
          heading: 'Tentoonstellingen',
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
                                type: 'Link',
                                linkType: 'Entry',
                                id: 'standardFooter',
                                circular: true,
                              },
                            },
                          ],
                          heading:
                            'Een product in economische zin is een tastbare zaak met een bepaalde waarde.',
                          navigationHeading: 'product',
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
                            'Een product kan worden vergezeld van productinformatie. Voor veel productcategorieën is het beschrijven van het product wettelijk vastgelegd. Zo moeten voedselproducten voorzien zijn van een etiket met de ingrediënten, de inhoud en de houdbaarheidsdatum.',
                        },
                      },
                      {
                        sys: {
                          type: 'Link',
                          linkType: 'Entry',
                          id: 'backgroundPage',
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
          id: 'backgroundPageItem',
          contentType: {
            sys: {
              type: 'Link',
              linkType: 'ContentType',
              id: 'listItem',
            },
          },
          revision: 5,
          createdAt: '2020-02-12T21:37:28.630Z',
          updatedAt: '2020-02-13T11:16:15.366Z',
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
          title: 'Tegel achtergrondpagina',
          view: 'onderkant groen',
          link: {
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
                                    type: 'Link',
                                    linkType: 'Entry',
                                    id: 'standardFooter',
                                    circular: true,
                                  },
                                },
                              ],
                              heading:
                                'Een product in economische zin is een tastbare zaak met een bepaalde waarde.',
                              navigationHeading: 'product',
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
                                'Een product kan worden vergezeld van productinformatie. Voor veel productcategorieën is het beschrijven van het product wettelijk vastgelegd. Zo moeten voedselproducten voorzien zijn van een etiket met de ingrediënten, de inhoud en de houdbaarheidsdatum.',
                            },
                          },
                          {
                            sys: {
                              type: 'Link',
                              linkType: 'Entry',
                              id: 'backgroundPage',
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
          heading: 'Voorgrond en achterhoofd',
          abstract:
            'Wie zijn wij? Deze tekst overschijft de pagina samenvatting.',
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
                                type: 'Link',
                                linkType: 'Entry',
                                id: 'standardFooter',
                                circular: true,
                              },
                            },
                          ],
                          heading:
                            'Een product in economische zin is een tastbare zaak met een bepaalde waarde.',
                          navigationHeading: 'product',
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
                            'Een product kan worden vergezeld van productinformatie. Voor veel productcategorieën is het beschrijven van het product wettelijk vastgelegd. Zo moeten voedselproducten voorzien zijn van een etiket met de ingrediënten, de inhoud en de houdbaarheidsdatum.',
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
                          type: 'Link',
                          linkType: 'Entry',
                          id: 'contactPage',
                          circular: true,
                        },
                      },
                    ],
                  },
                },
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
          id: 'contactPageItem',
          contentType: {
            sys: {
              type: 'Link',
              linkType: 'ContentType',
              id: 'listItem',
            },
          },
          revision: 5,
          createdAt: '2020-02-12T21:37:26.572Z',
          updatedAt: '2020-02-13T11:16:13.899Z',
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
          title: 'Tegel contactpagina',
          view: 'onderkant mint',
          link: {
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
                                    type: 'Link',
                                    linkType: 'Entry',
                                    id: 'standardFooter',
                                    circular: true,
                                  },
                                },
                              ],
                              heading:
                                'Een product in economische zin is een tastbare zaak met een bepaalde waarde.',
                              navigationHeading: 'product',
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
                                'Een product kan worden vergezeld van productinformatie. Voor veel productcategorieën is het beschrijven van het product wettelijk vastgelegd. Zo moeten voedselproducten voorzien zijn van een etiket met de ingrediënten, de inhoud en de houdbaarheidsdatum.',
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
                              type: 'Link',
                              linkType: 'Entry',
                              id: 'contactPage',
                              circular: true,
                            },
                          },
                        ],
                      },
                    },
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
          abstract:
            'Omarm de nostalgie. Stuur een fax! Deze tekst overschijft de pagina samenvatting.',
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
          id: 'endOfPageLinksLarge',
          contentType: {
            sys: {
              type: 'Link',
              linkType: 'ContentType',
              id: 'listSection',
            },
          },
          revision: 3,
          createdAt: '2020-02-12T21:37:23.785Z',
          updatedAt: '2020-02-13T11:16:11.403Z',
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
          title: 'Referenties groot',
          variation: 'grote tegels',
          items: [
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
                id: 'productPageItem',
                contentType: {
                  sys: {
                    type: 'Link',
                    linkType: 'ContentType',
                    id: 'listItem',
                  },
                },
                revision: 7,
                createdAt: '2020-02-12T21:37:29.878Z',
                updatedAt: '2020-02-13T11:16:16.478Z',
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
                title: 'Tegel productpagina',
                view: 'volledige afbeelding',
                link: {
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
                                              createdAt:
                                                '2020-02-12T21:37:01.335Z',
                                              updatedAt:
                                                '2020-02-13T11:15:53.740Z',
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
                                              description:
                                                'Demo asset with fixed id',
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
                    heading:
                      'Een product in economische zin is een tastbare zaak met een bepaalde waarde.',
                    navigationHeading: 'product',
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
                      'Een product kan worden vergezeld van productinformatie. Voor veel productcategorieën is het beschrijven van het product wettelijk vastgelegd. Zo moeten voedselproducten voorzien zijn van een etiket met de ingrediënten, de inhoud en de houdbaarheidsdatum.',
                  },
                },
                heading: 'Geniale producten',
                abstract:
                  'Onze producten zijn fantastisch. Deze tekst overschijft de pagina samenvatting.',
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
                id: 'backgroundPageItem',
                contentType: {
                  sys: {
                    type: 'Link',
                    linkType: 'ContentType',
                    id: 'listItem',
                  },
                },
                revision: 5,
                createdAt: '2020-02-12T21:37:28.630Z',
                updatedAt: '2020-02-13T11:16:15.366Z',
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
                title: 'Tegel achtergrondpagina',
                view: 'onderkant groen',
                link: {
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
                                          type: 'Link',
                                          linkType: 'Entry',
                                          id: 'standardFooter',
                                          circular: true,
                                        },
                                      },
                                    ],
                                    heading:
                                      'Een product in economische zin is een tastbare zaak met een bepaalde waarde.',
                                    navigationHeading: 'product',
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
                                      'Een product kan worden vergezeld van productinformatie. Voor veel productcategorieën is het beschrijven van het product wettelijk vastgelegd. Zo moeten voedselproducten voorzien zijn van een etiket met de ingrediënten, de inhoud en de houdbaarheidsdatum.',
                                  },
                                },
                                {
                                  sys: {
                                    type: 'Link',
                                    linkType: 'Entry',
                                    id: 'backgroundPage',
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
                                              createdAt:
                                                '2020-02-12T21:37:01.335Z',
                                              updatedAt:
                                                '2020-02-13T11:15:53.740Z',
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
                                              description:
                                                'Demo asset with fixed id',
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
                heading: 'Voorgrond en achterhoofd',
                abstract:
                  'Wie zijn wij? Deze tekst overschijft de pagina samenvatting.',
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
                id: 'contactPageItem',
                contentType: {
                  sys: {
                    type: 'Link',
                    linkType: 'ContentType',
                    id: 'listItem',
                  },
                },
                revision: 5,
                createdAt: '2020-02-12T21:37:26.572Z',
                updatedAt: '2020-02-13T11:16:13.899Z',
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
                title: 'Tegel contactpagina',
                view: 'onderkant mint',
                link: {
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
                                          type: 'Link',
                                          linkType: 'Entry',
                                          id: 'standardFooter',
                                          circular: true,
                                        },
                                      },
                                    ],
                                    heading:
                                      'Een product in economische zin is een tastbare zaak met een bepaalde waarde.',
                                    navigationHeading: 'product',
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
                                      'Een product kan worden vergezeld van productinformatie. Voor veel productcategorieën is het beschrijven van het product wettelijk vastgelegd. Zo moeten voedselproducten voorzien zijn van een etiket met de ingrediënten, de inhoud en de houdbaarheidsdatum.',
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
                                    type: 'Link',
                                    linkType: 'Entry',
                                    id: 'contactPage',
                                    circular: true,
                                  },
                                },
                              ],
                            },
                          },
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
                abstract:
                  'Omarm de nostalgie. Stuur een fax! Deze tekst overschijft de pagina samenvatting.',
              },
            },
          ],
          heading: 'Kijk ook eens hier',
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
                          type: 'Link',
                          linkType: 'Entry',
                          id: 'footerNavigatie',
                          circular: true,
                        },
                      },
                    },
                  },
                ],
                heading:
                  'Een product in economische zin is een tastbare zaak met een bepaalde waarde.',
                navigationHeading: 'product',
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
                  'Een product kan worden vergezeld van productinformatie. Voor veel productcategorieën is het beschrijven van het product wettelijk vastgelegd. Zo moeten voedselproducten voorzien zijn van een etiket met de ingrediënten, de inhoud en de houdbaarheidsdatum.',
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
                          type: 'Link',
                          linkType: 'Entry',
                          id: 'footerNavigatie',
                          circular: true,
                        },
                      },
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
                          type: 'Link',
                          linkType: 'Entry',
                          id: 'footerNavigatie',
                          circular: true,
                        },
                      },
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
          id: 'homeOpener',
          contentType: {
            sys: {
              type: 'Link',
              linkType: 'ContentType',
              id: 'openerSection',
            },
          },
          revision: 3,
          createdAt: '2020-02-12T21:37:35.755Z',
          updatedAt: '2020-02-13T11:16:23.281Z',
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
          title: 'Homepagina opener',
          variation: 'home pagina',
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
                    space: {
                      sys: {
                        type: 'Link',
                        linkType: 'Space',
                        id: 'jeb9ft1t2asv',
                      },
                    },
                    type: 'Entry',
                    id: 'homePage',
                    contentType: {
                      sys: {
                        type: 'Link',
                        linkType: 'ContentType',
                        id: 'page',
                      },
                    },
                    revision: 5,
                    createdAt: '2020-02-12T21:37:42.018Z',
                    updatedAt: '2020-02-16T13:38:53.820Z',
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
                    title: 'Home',
                    path: '/',
                    sections: [
                      {
                        sys: {
                          type: 'Link',
                          linkType: 'Entry',
                          id: 'homeOpener',
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
                          id: 'merkarchitectuurText',
                          contentType: {
                            sys: {
                              type: 'Link',
                              linkType: 'ContentType',
                              id: 'textSection',
                            },
                          },
                          revision: 3,
                          createdAt: '2020-02-12T21:37:14.109Z',
                          updatedAt: '2020-02-13T11:16:00.421Z',
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
                          title: 'Tekst merkarchitectuur',
                          text: {
                            nodeType: 'document',
                            data: {},
                            content: [
                              {
                                nodeType: 'heading-1',
                                content: [
                                  {
                                    nodeType: 'text',
                                    value: 'Merkenarchitectuur',
                                    marks: [],
                                    data: {},
                                  },
                                ],
                                data: {},
                              },
                              {
                                nodeType: 'paragraph',
                                content: [
                                  {
                                    nodeType: 'text',
                                    value:
                                      "De verschillende merken van een onderneming vormen wat de merkarchitectuur\n(Engels: 'brand architecture') wordt genoemd. Soms hebben die merken ook wat\nbetreft de naam een duidelijke relatie. McDonald's gebruikt bijvoorbeeld voor\nverschillende producten het voorvoegsel 'Mc-' (McFlurry, McKroket), evenals\nNestlé (Nescafé, Nesquik, Nespresso).",
                                    marks: [],
                                    data: {},
                                  },
                                ],
                                data: {},
                              },
                            ],
                          },
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
                          space: {
                            sys: {
                              type: 'Link',
                              linkType: 'Space',
                              id: 'jeb9ft1t2asv',
                            },
                          },
                          type: 'Entry',
                          id: 'endOfPageLinksLarge',
                          contentType: {
                            sys: {
                              type: 'Link',
                              linkType: 'ContentType',
                              id: 'listSection',
                            },
                          },
                          revision: 3,
                          createdAt: '2020-02-12T21:37:23.785Z',
                          updatedAt: '2020-02-13T11:16:11.403Z',
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
                          title: 'Referenties groot',
                          variation: 'grote tegels',
                          items: [
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
                                id: 'productPageItem',
                                contentType: {
                                  sys: {
                                    type: 'Link',
                                    linkType: 'ContentType',
                                    id: 'listItem',
                                  },
                                },
                                revision: 7,
                                createdAt: '2020-02-12T21:37:29.878Z',
                                updatedAt: '2020-02-13T11:16:16.478Z',
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
                                title: 'Tegel productpagina',
                                view: 'volledige afbeelding',
                                link: {
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
                                              createdAt:
                                                '2020-02-12T21:37:21.346Z',
                                              updatedAt:
                                                '2020-02-13T11:16:08.253Z',
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
                                                    createdAt:
                                                      '2020-02-12T21:37:39.425Z',
                                                    updatedAt:
                                                      '2020-02-13T11:16:25.907Z',
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
                                                          id:
                                                            'backgroundOpener',
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
                                                    navigationHeading:
                                                      'achtergrond',
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
                                                        createdAt:
                                                          '2020-02-12T21:37:01.335Z',
                                                        updatedAt:
                                                          '2020-02-13T11:15:53.740Z',
                                                        environment: {
                                                          sys: {
                                                            id: 'master',
                                                            type: 'Link',
                                                            linkType:
                                                              'Environment',
                                                          },
                                                        },
                                                        locale: 'en-US',
                                                      },
                                                      fields: {
                                                        title: 'wheelroom',
                                                        description:
                                                          'Demo asset with fixed id',
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
                                                          contentType:
                                                            'image/png',
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
                                                    createdAt:
                                                      '2020-02-12T21:37:38.017Z',
                                                    updatedAt:
                                                      '2020-02-13T11:16:24.342Z',
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
                                                              id:
                                                                'jeb9ft1t2asv',
                                                            },
                                                          },
                                                          type: 'Entry',
                                                          id: 'passionQuote',
                                                          contentType: {
                                                            sys: {
                                                              type: 'Link',
                                                              linkType:
                                                                'ContentType',
                                                              id:
                                                                'quoteSection',
                                                            },
                                                          },
                                                          revision: 3,
                                                          createdAt:
                                                            '2020-02-12T21:37:07.920Z',
                                                          updatedAt:
                                                            '2020-02-13T11:15:54.974Z',
                                                          environment: {
                                                            sys: {
                                                              id: 'master',
                                                              type: 'Link',
                                                              linkType:
                                                                'Environment',
                                                            },
                                                          },
                                                          locale: 'en-US',
                                                        },
                                                        fields: {
                                                          title:
                                                            'Quote Michael Hyatt',
                                                          heading:
                                                            'Michael Hyatt',
                                                          subHeading:
                                                            'Virtual business mentor',
                                                          abstract:
                                                            'Marketing gaat eigenlijk gewoon over het delen van je passie.',
                                                          image: {
                                                            sys: {
                                                              space: {
                                                                sys: {
                                                                  type: 'Link',
                                                                  linkType:
                                                                    'Space',
                                                                  id:
                                                                    'jeb9ft1t2asv',
                                                                },
                                                              },
                                                              type: 'Asset',
                                                              id: 'demoAsset',
                                                              revision: 5,
                                                              createdAt:
                                                                '2020-02-12T21:37:01.335Z',
                                                              updatedAt:
                                                                '2020-02-13T11:15:53.740Z',
                                                              environment: {
                                                                sys: {
                                                                  id: 'master',
                                                                  type: 'Link',
                                                                  linkType:
                                                                    'Environment',
                                                                },
                                                              },
                                                              locale: 'en-US',
                                                            },
                                                            fields: {
                                                              title:
                                                                'wheelroom',
                                                              description:
                                                                'Demo asset with fixed id',
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
                                                                fileName:
                                                                  'wheelroom',
                                                                contentType:
                                                                  'image/png',
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
                                                    navigationHeading:
                                                      'contact',
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
                                                        createdAt:
                                                          '2020-02-12T21:37:01.335Z',
                                                        updatedAt:
                                                          '2020-02-13T11:15:53.740Z',
                                                        environment: {
                                                          sys: {
                                                            id: 'master',
                                                            type: 'Link',
                                                            linkType:
                                                              'Environment',
                                                          },
                                                        },
                                                        locale: 'en-US',
                                                      },
                                                      fields: {
                                                        title: 'wheelroom',
                                                        description:
                                                          'Demo asset with fixed id',
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
                                                          contentType:
                                                            'image/png',
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
                                    heading:
                                      'Een product in economische zin is een tastbare zaak met een bepaalde waarde.',
                                    navigationHeading: 'product',
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
                                      'Een product kan worden vergezeld van productinformatie. Voor veel productcategorieën is het beschrijven van het product wettelijk vastgelegd. Zo moeten voedselproducten voorzien zijn van een etiket met de ingrediënten, de inhoud en de houdbaarheidsdatum.',
                                  },
                                },
                                heading: 'Geniale producten',
                                abstract:
                                  'Onze producten zijn fantastisch. Deze tekst overschijft de pagina samenvatting.',
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
                                id: 'backgroundPageItem',
                                contentType: {
                                  sys: {
                                    type: 'Link',
                                    linkType: 'ContentType',
                                    id: 'listItem',
                                  },
                                },
                                revision: 5,
                                createdAt: '2020-02-12T21:37:28.630Z',
                                updatedAt: '2020-02-13T11:16:15.366Z',
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
                                title: 'Tegel achtergrondpagina',
                                view: 'onderkant groen',
                                link: {
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
                                              createdAt:
                                                '2020-02-12T21:37:21.346Z',
                                              updatedAt:
                                                '2020-02-13T11:16:08.253Z',
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
                                                    createdAt:
                                                      '2020-02-12T21:37:40.774Z',
                                                    updatedAt:
                                                      '2020-02-13T11:16:27.177Z',
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
                                                          id:
                                                            'merkverwateringText',
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
                                                      'Een product in economische zin is een tastbare zaak met een bepaalde waarde.',
                                                    navigationHeading:
                                                      'product',
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
                                                        createdAt:
                                                          '2020-02-12T21:37:01.335Z',
                                                        updatedAt:
                                                          '2020-02-13T11:15:53.740Z',
                                                        environment: {
                                                          sys: {
                                                            id: 'master',
                                                            type: 'Link',
                                                            linkType:
                                                              'Environment',
                                                          },
                                                        },
                                                        locale: 'en-US',
                                                      },
                                                      fields: {
                                                        title: 'wheelroom',
                                                        description:
                                                          'Demo asset with fixed id',
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
                                                          contentType:
                                                            'image/png',
                                                        },
                                                      },
                                                    },
                                                    abstract:
                                                      'Een product kan worden vergezeld van productinformatie. Voor veel productcategorieën is het beschrijven van het product wettelijk vastgelegd. Zo moeten voedselproducten voorzien zijn van een etiket met de ingrediënten, de inhoud en de houdbaarheidsdatum.',
                                                  },
                                                },
                                                {
                                                  sys: {
                                                    type: 'Link',
                                                    linkType: 'Entry',
                                                    id: 'backgroundPage',
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
                                                    id: 'contactPage',
                                                    contentType: {
                                                      sys: {
                                                        type: 'Link',
                                                        linkType: 'ContentType',
                                                        id: 'page',
                                                      },
                                                    },
                                                    revision: 3,
                                                    createdAt:
                                                      '2020-02-12T21:37:38.017Z',
                                                    updatedAt:
                                                      '2020-02-13T11:16:24.342Z',
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
                                                              id:
                                                                'jeb9ft1t2asv',
                                                            },
                                                          },
                                                          type: 'Entry',
                                                          id: 'passionQuote',
                                                          contentType: {
                                                            sys: {
                                                              type: 'Link',
                                                              linkType:
                                                                'ContentType',
                                                              id:
                                                                'quoteSection',
                                                            },
                                                          },
                                                          revision: 3,
                                                          createdAt:
                                                            '2020-02-12T21:37:07.920Z',
                                                          updatedAt:
                                                            '2020-02-13T11:15:54.974Z',
                                                          environment: {
                                                            sys: {
                                                              id: 'master',
                                                              type: 'Link',
                                                              linkType:
                                                                'Environment',
                                                            },
                                                          },
                                                          locale: 'en-US',
                                                        },
                                                        fields: {
                                                          title:
                                                            'Quote Michael Hyatt',
                                                          heading:
                                                            'Michael Hyatt',
                                                          subHeading:
                                                            'Virtual business mentor',
                                                          abstract:
                                                            'Marketing gaat eigenlijk gewoon over het delen van je passie.',
                                                          image: {
                                                            sys: {
                                                              space: {
                                                                sys: {
                                                                  type: 'Link',
                                                                  linkType:
                                                                    'Space',
                                                                  id:
                                                                    'jeb9ft1t2asv',
                                                                },
                                                              },
                                                              type: 'Asset',
                                                              id: 'demoAsset',
                                                              revision: 5,
                                                              createdAt:
                                                                '2020-02-12T21:37:01.335Z',
                                                              updatedAt:
                                                                '2020-02-13T11:15:53.740Z',
                                                              environment: {
                                                                sys: {
                                                                  id: 'master',
                                                                  type: 'Link',
                                                                  linkType:
                                                                    'Environment',
                                                                },
                                                              },
                                                              locale: 'en-US',
                                                            },
                                                            fields: {
                                                              title:
                                                                'wheelroom',
                                                              description:
                                                                'Demo asset with fixed id',
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
                                                                fileName:
                                                                  'wheelroom',
                                                                contentType:
                                                                  'image/png',
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
                                                    navigationHeading:
                                                      'contact',
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
                                                        createdAt:
                                                          '2020-02-12T21:37:01.335Z',
                                                        updatedAt:
                                                          '2020-02-13T11:15:53.740Z',
                                                        environment: {
                                                          sys: {
                                                            id: 'master',
                                                            type: 'Link',
                                                            linkType:
                                                              'Environment',
                                                          },
                                                        },
                                                        locale: 'en-US',
                                                      },
                                                      fields: {
                                                        title: 'wheelroom',
                                                        description:
                                                          'Demo asset with fixed id',
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
                                                          contentType:
                                                            'image/png',
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
                                heading: 'Voorgrond en achterhoofd',
                                abstract:
                                  'Wie zijn wij? Deze tekst overschijft de pagina samenvatting.',
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
                                id: 'contactPageItem',
                                contentType: {
                                  sys: {
                                    type: 'Link',
                                    linkType: 'ContentType',
                                    id: 'listItem',
                                  },
                                },
                                revision: 5,
                                createdAt: '2020-02-12T21:37:26.572Z',
                                updatedAt: '2020-02-13T11:16:13.899Z',
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
                                title: 'Tegel contactpagina',
                                view: 'onderkant mint',
                                link: {
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
                                              createdAt:
                                                '2020-02-12T21:37:01.335Z',
                                              updatedAt:
                                                '2020-02-13T11:15:53.740Z',
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
                                              description:
                                                'Demo asset with fixed id',
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
                                              createdAt:
                                                '2020-02-12T21:37:21.346Z',
                                              updatedAt:
                                                '2020-02-13T11:16:08.253Z',
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
                                                    createdAt:
                                                      '2020-02-12T21:37:40.774Z',
                                                    updatedAt:
                                                      '2020-02-13T11:16:27.177Z',
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
                                                          id:
                                                            'merkverwateringText',
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
                                                      'Een product in economische zin is een tastbare zaak met een bepaalde waarde.',
                                                    navigationHeading:
                                                      'product',
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
                                                        createdAt:
                                                          '2020-02-12T21:37:01.335Z',
                                                        updatedAt:
                                                          '2020-02-13T11:15:53.740Z',
                                                        environment: {
                                                          sys: {
                                                            id: 'master',
                                                            type: 'Link',
                                                            linkType:
                                                              'Environment',
                                                          },
                                                        },
                                                        locale: 'en-US',
                                                      },
                                                      fields: {
                                                        title: 'wheelroom',
                                                        description:
                                                          'Demo asset with fixed id',
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
                                                          contentType:
                                                            'image/png',
                                                        },
                                                      },
                                                    },
                                                    abstract:
                                                      'Een product kan worden vergezeld van productinformatie. Voor veel productcategorieën is het beschrijven van het product wettelijk vastgelegd. Zo moeten voedselproducten voorzien zijn van een etiket met de ingrediënten, de inhoud en de houdbaarheidsdatum.',
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
                                                    createdAt:
                                                      '2020-02-12T21:37:39.425Z',
                                                    updatedAt:
                                                      '2020-02-13T11:16:25.907Z',
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
                                                          id:
                                                            'backgroundOpener',
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
                                                    navigationHeading:
                                                      'achtergrond',
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
                                                        createdAt:
                                                          '2020-02-12T21:37:01.335Z',
                                                        updatedAt:
                                                          '2020-02-13T11:15:53.740Z',
                                                        environment: {
                                                          sys: {
                                                            id: 'master',
                                                            type: 'Link',
                                                            linkType:
                                                              'Environment',
                                                          },
                                                        },
                                                        locale: 'en-US',
                                                      },
                                                      fields: {
                                                        title: 'wheelroom',
                                                        description:
                                                          'Demo asset with fixed id',
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
                                                          contentType:
                                                            'image/png',
                                                        },
                                                      },
                                                    },
                                                    abstract:
                                                      'In de journalistiek wordt de term achtergrond gebruikt voor de feitelijke en betekenisgevende context waarin het dagelijkse nieuws zich afspeelt.',
                                                  },
                                                },
                                                {
                                                  sys: {
                                                    type: 'Link',
                                                    linkType: 'Entry',
                                                    id: 'contactPage',
                                                    circular: true,
                                                  },
                                                },
                                              ],
                                            },
                                          },
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
                                abstract:
                                  'Omarm de nostalgie. Stuur een fax! Deze tekst overschijft de pagina samenvatting.',
                              },
                            },
                          ],
                          heading: 'Kijk ook eens hier',
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
                                          type: 'Link',
                                          linkType: 'Entry',
                                          id: 'standardFooter',
                                          circular: true,
                                        },
                                      },
                                    ],
                                    heading:
                                      'Een product in economische zin is een tastbare zaak met een bepaalde waarde.',
                                    navigationHeading: 'product',
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
                                      'Een product kan worden vergezeld van productinformatie. Voor veel productcategorieën is het beschrijven van het product wettelijk vastgelegd. Zo moeten voedselproducten voorzien zijn van een etiket met de ingrediënten, de inhoud en de houdbaarheidsdatum.',
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
                                              createdAt:
                                                '2020-02-12T21:37:01.335Z',
                                              updatedAt:
                                                '2020-02-13T11:15:53.740Z',
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
                                              description:
                                                'Demo asset with fixed id',
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
                    heading: 'Deze merknaam is heel goed...',
                    navigationHeading: 'home',
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
                      "Een merk is een teken om goederen of diensten te onderscheiden. Een merknaam kan daartoe dienen, maar het begrip 'merk' is breder en omvat ook de verschijningsvorm van de naam, het logo en kan ook iets anders zijn dan een naam, bijvoorbeeld een kleur of een beeldmerk.",
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
                                              createdAt:
                                                '2020-02-12T21:37:01.335Z',
                                              updatedAt:
                                                '2020-02-13T11:15:53.740Z',
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
                                              description:
                                                'Demo asset with fixed id',
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
                    heading:
                      'Een product in economische zin is een tastbare zaak met een bepaalde waarde.',
                    navigationHeading: 'product',
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
                      'Een product kan worden vergezeld van productinformatie. Voor veel productcategorieën is het beschrijven van het product wettelijk vastgelegd. Zo moeten voedselproducten voorzien zijn van een etiket met de ingrediënten, de inhoud en de houdbaarheidsdatum.',
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
                                          type: 'Link',
                                          linkType: 'Entry',
                                          id: 'standardFooter',
                                          circular: true,
                                        },
                                      },
                                    ],
                                    heading:
                                      'Een product in economische zin is een tastbare zaak met een bepaalde waarde.',
                                    navigationHeading: 'product',
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
                                      'Een product kan worden vergezeld van productinformatie. Voor veel productcategorieën is het beschrijven van het product wettelijk vastgelegd. Zo moeten voedselproducten voorzien zijn van een etiket met de ingrediënten, de inhoud en de houdbaarheidsdatum.',
                                  },
                                },
                                {
                                  sys: {
                                    type: 'Link',
                                    linkType: 'Entry',
                                    id: 'backgroundPage',
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
                                              createdAt:
                                                '2020-02-12T21:37:01.335Z',
                                              updatedAt:
                                                '2020-02-13T11:15:53.740Z',
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
                                              description:
                                                'Demo asset with fixed id',
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
                                          type: 'Link',
                                          linkType: 'Entry',
                                          id: 'standardFooter',
                                          circular: true,
                                        },
                                      },
                                    ],
                                    heading:
                                      'Een product in economische zin is een tastbare zaak met een bepaalde waarde.',
                                    navigationHeading: 'product',
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
                                      'Een product kan worden vergezeld van productinformatie. Voor veel productcategorieën is het beschrijven van het product wettelijk vastgelegd. Zo moeten voedselproducten voorzien zijn van een etiket met de ingrediënten, de inhoud en de houdbaarheidsdatum.',
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
                                    type: 'Link',
                                    linkType: 'Entry',
                                    id: 'contactPage',
                                    circular: true,
                                  },
                                },
                              ],
                            },
                          },
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
                    id: '59J3EhUcb2ud1QCpjuIahf',
                    contentType: {
                      sys: {
                        type: 'Link',
                        linkType: 'ContentType',
                        id: 'page',
                      },
                    },
                    revision: 1,
                    createdAt: '2020-02-13T11:17:37.240Z',
                    updatedAt: '2020-02-13T11:18:10.684Z',
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
                    title: 'Tentoonstellingen',
                    path: '/tentoonstellingen',
                    sections: [
                      {
                        sys: {
                          type: 'Link',
                          linkType: 'Entry',
                          id: 'productOpener',
                        },
                      },
                    ],
                    heading: 'Tentoonstellingen',
                  },
                },
              ],
            },
          },
          boxBackgroundColor: 'green',
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
          id: 'merkarchitectuurText',
          contentType: {
            sys: {
              type: 'Link',
              linkType: 'ContentType',
              id: 'textSection',
            },
          },
          revision: 3,
          createdAt: '2020-02-12T21:37:14.109Z',
          updatedAt: '2020-02-13T11:16:00.421Z',
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
          title: 'Tekst merkarchitectuur',
          text: {
            nodeType: 'document',
            data: {},
            content: [
              {
                nodeType: 'heading-1',
                content: [
                  {
                    nodeType: 'text',
                    value: 'Merkenarchitectuur',
                    marks: [],
                    data: {},
                  },
                ],
                data: {},
              },
              {
                nodeType: 'paragraph',
                content: [
                  {
                    nodeType: 'text',
                    value:
                      "De verschillende merken van een onderneming vormen wat de merkarchitectuur\n(Engels: 'brand architecture') wordt genoemd. Soms hebben die merken ook wat\nbetreft de naam een duidelijke relatie. McDonald's gebruikt bijvoorbeeld voor\nverschillende producten het voorvoegsel 'Mc-' (McFlurry, McKroket), evenals\nNestlé (Nescafé, Nesquik, Nespresso).",
                    marks: [],
                    data: {},
                  },
                ],
                data: {},
              },
            ],
          },
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
                space: {
                  sys: {
                    type: 'Link',
                    linkType: 'Space',
                    id: 'jeb9ft1t2asv',
                  },
                },
                type: 'Entry',
                id: 'homePage',
                contentType: {
                  sys: {
                    type: 'Link',
                    linkType: 'ContentType',
                    id: 'page',
                  },
                },
                revision: 5,
                createdAt: '2020-02-12T21:37:42.018Z',
                updatedAt: '2020-02-16T13:38:53.820Z',
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
                title: 'Home',
                path: '/',
                sections: [
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
                      id: 'homeOpener',
                      contentType: {
                        sys: {
                          type: 'Link',
                          linkType: 'ContentType',
                          id: 'openerSection',
                        },
                      },
                      revision: 3,
                      createdAt: '2020-02-12T21:37:35.755Z',
                      updatedAt: '2020-02-13T11:16:23.281Z',
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
                      title: 'Homepagina opener',
                      variation: 'home pagina',
                      navigation: {
                        sys: {
                          type: 'Link',
                          linkType: 'Entry',
                          id: 'openerNavigatie',
                          circular: true,
                        },
                      },
                      boxBackgroundColor: 'green',
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
                      id: 'merkarchitectuurText',
                      contentType: {
                        sys: {
                          type: 'Link',
                          linkType: 'ContentType',
                          id: 'textSection',
                        },
                      },
                      revision: 3,
                      createdAt: '2020-02-12T21:37:14.109Z',
                      updatedAt: '2020-02-13T11:16:00.421Z',
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
                      title: 'Tekst merkarchitectuur',
                      text: {
                        nodeType: 'document',
                        data: {},
                        content: [
                          {
                            nodeType: 'heading-1',
                            content: [
                              {
                                nodeType: 'text',
                                value: 'Merkenarchitectuur',
                                marks: [],
                                data: {},
                              },
                            ],
                            data: {},
                          },
                          {
                            nodeType: 'paragraph',
                            content: [
                              {
                                nodeType: 'text',
                                value:
                                  "De verschillende merken van een onderneming vormen wat de merkarchitectuur\n(Engels: 'brand architecture') wordt genoemd. Soms hebben die merken ook wat\nbetreft de naam een duidelijke relatie. McDonald's gebruikt bijvoorbeeld voor\nverschillende producten het voorvoegsel 'Mc-' (McFlurry, McKroket), evenals\nNestlé (Nescafé, Nesquik, Nespresso).",
                                marks: [],
                                data: {},
                              },
                            ],
                            data: {},
                          },
                        ],
                      },
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
                      space: {
                        sys: {
                          type: 'Link',
                          linkType: 'Space',
                          id: 'jeb9ft1t2asv',
                        },
                      },
                      type: 'Entry',
                      id: 'endOfPageLinksLarge',
                      contentType: {
                        sys: {
                          type: 'Link',
                          linkType: 'ContentType',
                          id: 'listSection',
                        },
                      },
                      revision: 3,
                      createdAt: '2020-02-12T21:37:23.785Z',
                      updatedAt: '2020-02-13T11:16:11.403Z',
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
                      title: 'Referenties groot',
                      variation: 'grote tegels',
                      items: [
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
                            id: 'productPageItem',
                            contentType: {
                              sys: {
                                type: 'Link',
                                linkType: 'ContentType',
                                id: 'listItem',
                              },
                            },
                            revision: 7,
                            createdAt: '2020-02-12T21:37:29.878Z',
                            updatedAt: '2020-02-13T11:16:16.478Z',
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
                            title: 'Tegel productpagina',
                            view: 'volledige afbeelding',
                            link: {
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
                                                createdAt:
                                                  '2020-02-12T21:37:39.425Z',
                                                updatedAt:
                                                  '2020-02-13T11:16:25.907Z',
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
                                                navigationHeading:
                                                  'achtergrond',
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
                                                    createdAt:
                                                      '2020-02-12T21:37:01.335Z',
                                                    updatedAt:
                                                      '2020-02-13T11:15:53.740Z',
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
                                                    description:
                                                      'Demo asset with fixed id',
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
                                                createdAt:
                                                  '2020-02-12T21:37:38.017Z',
                                                updatedAt:
                                                  '2020-02-13T11:16:24.342Z',
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
                                                          linkType:
                                                            'ContentType',
                                                          id: 'quoteSection',
                                                        },
                                                      },
                                                      revision: 3,
                                                      createdAt:
                                                        '2020-02-12T21:37:07.920Z',
                                                      updatedAt:
                                                        '2020-02-13T11:15:54.974Z',
                                                      environment: {
                                                        sys: {
                                                          id: 'master',
                                                          type: 'Link',
                                                          linkType:
                                                            'Environment',
                                                        },
                                                      },
                                                      locale: 'en-US',
                                                    },
                                                    fields: {
                                                      title:
                                                        'Quote Michael Hyatt',
                                                      heading: 'Michael Hyatt',
                                                      subHeading:
                                                        'Virtual business mentor',
                                                      abstract:
                                                        'Marketing gaat eigenlijk gewoon over het delen van je passie.',
                                                      image: {
                                                        sys: {
                                                          space: {
                                                            sys: {
                                                              type: 'Link',
                                                              linkType: 'Space',
                                                              id:
                                                                'jeb9ft1t2asv',
                                                            },
                                                          },
                                                          type: 'Asset',
                                                          id: 'demoAsset',
                                                          revision: 5,
                                                          createdAt:
                                                            '2020-02-12T21:37:01.335Z',
                                                          updatedAt:
                                                            '2020-02-13T11:15:53.740Z',
                                                          environment: {
                                                            sys: {
                                                              id: 'master',
                                                              type: 'Link',
                                                              linkType:
                                                                'Environment',
                                                            },
                                                          },
                                                          locale: 'en-US',
                                                        },
                                                        fields: {
                                                          title: 'wheelroom',
                                                          description:
                                                            'Demo asset with fixed id',
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
                                                            fileName:
                                                              'wheelroom',
                                                            contentType:
                                                              'image/png',
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
                                                    createdAt:
                                                      '2020-02-12T21:37:01.335Z',
                                                    updatedAt:
                                                      '2020-02-13T11:15:53.740Z',
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
                                                    description:
                                                      'Demo asset with fixed id',
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
                                heading:
                                  'Een product in economische zin is een tastbare zaak met een bepaalde waarde.',
                                navigationHeading: 'product',
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
                                  'Een product kan worden vergezeld van productinformatie. Voor veel productcategorieën is het beschrijven van het product wettelijk vastgelegd. Zo moeten voedselproducten voorzien zijn van een etiket met de ingrediënten, de inhoud en de houdbaarheidsdatum.',
                              },
                            },
                            heading: 'Geniale producten',
                            abstract:
                              'Onze producten zijn fantastisch. Deze tekst overschijft de pagina samenvatting.',
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
                            id: 'backgroundPageItem',
                            contentType: {
                              sys: {
                                type: 'Link',
                                linkType: 'ContentType',
                                id: 'listItem',
                              },
                            },
                            revision: 5,
                            createdAt: '2020-02-12T21:37:28.630Z',
                            updatedAt: '2020-02-13T11:16:15.366Z',
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
                            title: 'Tegel achtergrondpagina',
                            view: 'onderkant groen',
                            link: {
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
                                                createdAt:
                                                  '2020-02-12T21:37:40.774Z',
                                                updatedAt:
                                                  '2020-02-13T11:16:27.177Z',
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
                                                      type: 'Link',
                                                      linkType: 'Entry',
                                                      id: 'standardFooter',
                                                      circular: true,
                                                    },
                                                  },
                                                ],
                                                heading:
                                                  'Een product in economische zin is een tastbare zaak met een bepaalde waarde.',
                                                navigationHeading: 'product',
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
                                                    createdAt:
                                                      '2020-02-12T21:37:01.335Z',
                                                    updatedAt:
                                                      '2020-02-13T11:15:53.740Z',
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
                                                    description:
                                                      'Demo asset with fixed id',
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
                                                  'Een product kan worden vergezeld van productinformatie. Voor veel productcategorieën is het beschrijven van het product wettelijk vastgelegd. Zo moeten voedselproducten voorzien zijn van een etiket met de ingrediënten, de inhoud en de houdbaarheidsdatum.',
                                              },
                                            },
                                            {
                                              sys: {
                                                type: 'Link',
                                                linkType: 'Entry',
                                                id: 'backgroundPage',
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
                                                id: 'contactPage',
                                                contentType: {
                                                  sys: {
                                                    type: 'Link',
                                                    linkType: 'ContentType',
                                                    id: 'page',
                                                  },
                                                },
                                                revision: 3,
                                                createdAt:
                                                  '2020-02-12T21:37:38.017Z',
                                                updatedAt:
                                                  '2020-02-13T11:16:24.342Z',
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
                                                          linkType:
                                                            'ContentType',
                                                          id: 'quoteSection',
                                                        },
                                                      },
                                                      revision: 3,
                                                      createdAt:
                                                        '2020-02-12T21:37:07.920Z',
                                                      updatedAt:
                                                        '2020-02-13T11:15:54.974Z',
                                                      environment: {
                                                        sys: {
                                                          id: 'master',
                                                          type: 'Link',
                                                          linkType:
                                                            'Environment',
                                                        },
                                                      },
                                                      locale: 'en-US',
                                                    },
                                                    fields: {
                                                      title:
                                                        'Quote Michael Hyatt',
                                                      heading: 'Michael Hyatt',
                                                      subHeading:
                                                        'Virtual business mentor',
                                                      abstract:
                                                        'Marketing gaat eigenlijk gewoon over het delen van je passie.',
                                                      image: {
                                                        sys: {
                                                          space: {
                                                            sys: {
                                                              type: 'Link',
                                                              linkType: 'Space',
                                                              id:
                                                                'jeb9ft1t2asv',
                                                            },
                                                          },
                                                          type: 'Asset',
                                                          id: 'demoAsset',
                                                          revision: 5,
                                                          createdAt:
                                                            '2020-02-12T21:37:01.335Z',
                                                          updatedAt:
                                                            '2020-02-13T11:15:53.740Z',
                                                          environment: {
                                                            sys: {
                                                              id: 'master',
                                                              type: 'Link',
                                                              linkType:
                                                                'Environment',
                                                            },
                                                          },
                                                          locale: 'en-US',
                                                        },
                                                        fields: {
                                                          title: 'wheelroom',
                                                          description:
                                                            'Demo asset with fixed id',
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
                                                            fileName:
                                                              'wheelroom',
                                                            contentType:
                                                              'image/png',
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
                                                    createdAt:
                                                      '2020-02-12T21:37:01.335Z',
                                                    updatedAt:
                                                      '2020-02-13T11:15:53.740Z',
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
                                                    description:
                                                      'Demo asset with fixed id',
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
                            heading: 'Voorgrond en achterhoofd',
                            abstract:
                              'Wie zijn wij? Deze tekst overschijft de pagina samenvatting.',
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
                            id: 'contactPageItem',
                            contentType: {
                              sys: {
                                type: 'Link',
                                linkType: 'ContentType',
                                id: 'listItem',
                              },
                            },
                            revision: 5,
                            createdAt: '2020-02-12T21:37:26.572Z',
                            updatedAt: '2020-02-13T11:16:13.899Z',
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
                            title: 'Tegel contactpagina',
                            view: 'onderkant mint',
                            link: {
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
                                          description:
                                            'Demo asset with fixed id',
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
                                                createdAt:
                                                  '2020-02-12T21:37:40.774Z',
                                                updatedAt:
                                                  '2020-02-13T11:16:27.177Z',
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
                                                      type: 'Link',
                                                      linkType: 'Entry',
                                                      id: 'standardFooter',
                                                      circular: true,
                                                    },
                                                  },
                                                ],
                                                heading:
                                                  'Een product in economische zin is een tastbare zaak met een bepaalde waarde.',
                                                navigationHeading: 'product',
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
                                                    createdAt:
                                                      '2020-02-12T21:37:01.335Z',
                                                    updatedAt:
                                                      '2020-02-13T11:15:53.740Z',
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
                                                    description:
                                                      'Demo asset with fixed id',
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
                                                  'Een product kan worden vergezeld van productinformatie. Voor veel productcategorieën is het beschrijven van het product wettelijk vastgelegd. Zo moeten voedselproducten voorzien zijn van een etiket met de ingrediënten, de inhoud en de houdbaarheidsdatum.',
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
                                                createdAt:
                                                  '2020-02-12T21:37:39.425Z',
                                                updatedAt:
                                                  '2020-02-13T11:16:25.907Z',
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
                                                navigationHeading:
                                                  'achtergrond',
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
                                                    createdAt:
                                                      '2020-02-12T21:37:01.335Z',
                                                    updatedAt:
                                                      '2020-02-13T11:15:53.740Z',
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
                                                    description:
                                                      'Demo asset with fixed id',
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
                                                type: 'Link',
                                                linkType: 'Entry',
                                                id: 'contactPage',
                                                circular: true,
                                              },
                                            },
                                          ],
                                        },
                                      },
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
                            abstract:
                              'Omarm de nostalgie. Stuur een fax! Deze tekst overschijft de pagina samenvatting.',
                          },
                        },
                      ],
                      heading: 'Kijk ook eens hier',
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
                                      type: 'Link',
                                      linkType: 'Entry',
                                      id: 'standardFooter',
                                      circular: true,
                                    },
                                  },
                                ],
                                heading:
                                  'Een product in economische zin is een tastbare zaak met een bepaalde waarde.',
                                navigationHeading: 'product',
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
                                  'Een product kan worden vergezeld van productinformatie. Voor veel productcategorieën is het beschrijven van het product wettelijk vastgelegd. Zo moeten voedselproducten voorzien zijn van een etiket met de ingrediënten, de inhoud en de houdbaarheidsdatum.',
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
                                          description:
                                            'Demo asset with fixed id',
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
                heading: 'Deze merknaam is heel goed...',
                navigationHeading: 'home',
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
                  "Een merk is een teken om goederen of diensten te onderscheiden. Een merknaam kan daartoe dienen, maar het begrip 'merk' is breder en omvat ook de verschijningsvorm van de naam, het logo en kan ook iets anders zijn dan een naam, bijvoorbeeld een kleur of een beeldmerk.",
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
                                          description:
                                            'Demo asset with fixed id',
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
                heading:
                  'Een product in economische zin is een tastbare zaak met een bepaalde waarde.',
                navigationHeading: 'product',
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
                  'Een product kan worden vergezeld van productinformatie. Voor veel productcategorieën is het beschrijven van het product wettelijk vastgelegd. Zo moeten voedselproducten voorzien zijn van een etiket met de ingrediënten, de inhoud en de houdbaarheidsdatum.',
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
                                      type: 'Link',
                                      linkType: 'Entry',
                                      id: 'standardFooter',
                                      circular: true,
                                    },
                                  },
                                ],
                                heading:
                                  'Een product in economische zin is een tastbare zaak met een bepaalde waarde.',
                                navigationHeading: 'product',
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
                                  'Een product kan worden vergezeld van productinformatie. Voor veel productcategorieën is het beschrijven van het product wettelijk vastgelegd. Zo moeten voedselproducten voorzien zijn van een etiket met de ingrediënten, de inhoud en de houdbaarheidsdatum.',
                              },
                            },
                            {
                              sys: {
                                type: 'Link',
                                linkType: 'Entry',
                                id: 'backgroundPage',
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
                                          description:
                                            'Demo asset with fixed id',
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
                                      type: 'Link',
                                      linkType: 'Entry',
                                      id: 'standardFooter',
                                      circular: true,
                                    },
                                  },
                                ],
                                heading:
                                  'Een product in economische zin is een tastbare zaak met een bepaalde waarde.',
                                navigationHeading: 'product',
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
                                  'Een product kan worden vergezeld van productinformatie. Voor veel productcategorieën is het beschrijven van het product wettelijk vastgelegd. Zo moeten voedselproducten voorzien zijn van een etiket met de ingrediënten, de inhoud en de houdbaarheidsdatum.',
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
                                type: 'Link',
                                linkType: 'Entry',
                                id: 'contactPage',
                                circular: true,
                              },
                            },
                          ],
                        },
                      },
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
                id: '59J3EhUcb2ud1QCpjuIahf',
                contentType: {
                  sys: {
                    type: 'Link',
                    linkType: 'ContentType',
                    id: 'page',
                  },
                },
                revision: 1,
                createdAt: '2020-02-13T11:17:37.240Z',
                updatedAt: '2020-02-13T11:18:10.684Z',
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
                title: 'Tentoonstellingen',
                path: '/tentoonstellingen',
                sections: [
                  {
                    sys: {
                      type: 'Link',
                      linkType: 'Entry',
                      id: 'productOpener',
                    },
                  },
                ],
                heading: 'Tentoonstellingen',
              },
            },
          ],
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
          heading:
            'Een product in economische zin is een tastbare zaak met een bepaalde waarde.',
          navigationHeading: 'product',
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
            'Een product kan worden vergezeld van productinformatie. Voor veel productcategorieën is het beschrijven van het product wettelijk vastgelegd. Zo moeten voedselproducten voorzien zijn van een etiket met de ingrediënten, de inhoud en de houdbaarheidsdatum.',
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
          id: 'productPageItem',
          contentType: {
            sys: {
              type: 'Link',
              linkType: 'ContentType',
              id: 'listItem',
            },
          },
          revision: 7,
          createdAt: '2020-02-12T21:37:29.878Z',
          updatedAt: '2020-02-13T11:16:16.478Z',
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
          title: 'Tegel productpagina',
          view: 'volledige afbeelding',
          link: {
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
              heading:
                'Een product in economische zin is een tastbare zaak met een bepaalde waarde.',
              navigationHeading: 'product',
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
                'Een product kan worden vergezeld van productinformatie. Voor veel productcategorieën is het beschrijven van het product wettelijk vastgelegd. Zo moeten voedselproducten voorzien zijn van een etiket met de ingrediënten, de inhoud en de houdbaarheidsdatum.',
            },
          },
          heading: 'Geniale producten',
          abstract:
            'Onze producten zijn fantastisch. Deze tekst overschijft de pagina samenvatting.',
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
                          type: 'Link',
                          linkType: 'Entry',
                          id: 'standardFooter',
                          circular: true,
                        },
                      },
                    ],
                    heading:
                      'Een product in economische zin is een tastbare zaak met een bepaalde waarde.',
                    navigationHeading: 'product',
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
                      'Een product kan worden vergezeld van productinformatie. Voor veel productcategorieën is het beschrijven van het product wettelijk vastgelegd. Zo moeten voedselproducten voorzien zijn van een etiket met de ingrediënten, de inhoud en de houdbaarheidsdatum.',
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
    Asset: [
      {
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
    ],
  },
}

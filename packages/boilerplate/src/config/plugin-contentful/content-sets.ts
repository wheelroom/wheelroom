/**
 * Fixture content for testing
 *
 *
 */

import { ContentTypes } from './content-types'

export interface ContentSets {
  [contentSetName: string]: ContentTypes
}

// tslint:disable: object-literal-sort-keys
export const contentSets: ContentSets = {
  boilerplate: {
    globals: {
      fields: {
        addressLine1: 'Grote straat 55',
        addressLine2: '1234 AB  Grootendam',
        emailAddress: 'info@grootenmerkbaar.io',
        linkedinUrl: 'n/a',
        phoneNumber: '030-1234567',
        siteAuthor: 'Ad van den autheur',
        siteDescription:
          'Merknamen zijn namen voor producten, diensten of organisaties.',
        siteHeading: 'Deze merknaam is fantastisch',
        siteKeywords: ['merknaam', 'onderwerp', 'onderscheid', 'essentie'],
        siteTitle: 'Merknamen worden op verschillende manieren ingedeeld.',
        title: 'Globale instellingen voor deze site',
      },
      model: 'globals',
    },
    homePage: {
      fields: {
        listItemHeading: '',
        listItemHiddenText: 'n/a',
        listItemImage: true,
        listItemInfoText: '',
        listItemView: 'blue bottom',
        navigationHeading: 'home',
        pageHeading: 'Deze merknaam is fantastisch',
        pageImage: true,
        pageInfoText:
          "Een merk is een teken om goederen of diensten te onderscheiden. Een merknaam kan daartoe dienen, maar het begrip 'merk' is breder en omvat ook de verschijningsvorm van de naam, het logo en kan ook iets anders zijn dan een naam, bijvoorbeeld een kleur of een beeldmerk.",
        path: '/',
        pathName: 'home',
        sections: [
          'homeOpener',
          'merkarchitectuurText',
          'passionQuote',
          'endOfPageLinks',
          'standardFooter',
        ],
        seoDescription: 'Specifiek voor SEO',
        seoTitle: 'Homepagina',
        title: 'Home',
      },
      model: 'page',
    },
    homeOpener: {
      fields: {
        boxBackgroundColor: 'blue',
        heading: '',
        image: true,
        infoText: 'n/a',
        mainNavigation: 'openerNavigatie',
        title: 'Homepagina opener',
        variation: 'home opener',
      },
      model: 'openerSection',
    },
    openerNavigatie: {
      fields: {
        routes: ['homePage', 'productPage', 'backgroundPage', 'contactPage'],
        title: 'Opener navigatie',
      },
      model: 'navigation',
    },
    productPage: {
      fields: {
        listItemHeading: 'Onze producten',
        listItemHiddenText: '',
        listItemImage: true,
        listItemInfoText:
          'Onze producten zijn biologisch, harmonisch en zeer interessant.',
        listItemView: 'blue bottom',
        navigationHeading: 'home',
        pageHeading:
          'Een product in economische zin is een tastbare zaak met een bepaalde waarde.',
        pageImage: true,
        pageInfoText:
          'Een product kan worden vergezeld van productinformatie. Voor veel productcategorieën is het beschrijven van het product wettelijk vastgelegd. Zo moeten voedselproducten voorzien zijn van een etiket met de ingrediënten, de inhoud en de houdbaarheidsdatum.',
        path: '/producten',
        pathName: 'producten',
        sections: [
          'productOpener',
          'productcodeText',
          'merkverwateringText',
          'buildLoveQuote',
          'endOfPageLinks',
          'standardFooter',
        ],
        seoDescription: 'Specifiek voor SEO',
        seoTitle: 'Productpagina',
        title: 'Producten',
      },
      model: 'page',
    },
    productOpener: {
      fields: {
        boxBackgroundColor: 'orange',
        heading: 'any',
        image: true,
        infoText: '',
        mainNavigation: 'openerNavigatie',
        title: 'Productpagina opener',
        variation: 'page opener',
      },
      model: 'openerSection',
    },
    backgroundPage: {
      fields: {
        listItemHeading: 'Achtergrond informatie',
        listItemHiddenText: '',
        listItemImage: true,
        listItemInfoText:
          'Waarom zijn we hier, wat we doen, onzie visie en onze passie.',
        listItemView: 'blue bottom',
        navigationHeading: 'home',
        pageHeading:
          'Op dit moment is er maar één gemeente in Nederland zonder achtergrond.',
        pageImage: true,
        pageInfoText:
          'In de journalistiek wordt de term achtergrond gebruikt voor de feitelijke en betekenisgevende context waarin het dagelijkse nieuws zich afspeelt.',
        path: '/achtergrond',
        pathName: 'achtergrond',
        sections: [
          'backgroundOpener',
          'naamcreatieText',
          'careQuote',
          'endOfPageLinks',
          'standardFooter',
        ],
        seoDescription: 'Specifiek voor SEO',
        seoTitle: 'Achtergrondpagina',
        title: 'Achtergrond',
      },
      model: 'page',
    },
    backgroundOpener: {
      fields: {
        boxBackgroundColor: 'blue',
        heading: 'any',
        image: true,
        infoText: '',
        mainNavigation: 'openerNavigatie',
        title: 'Achtergrondpagina opener',
        variation: 'page opener',
      },
      model: 'openerSection',
    },
    contactPage: {
      fields: {
        listItemHeading: 'Onze contactinformatie',
        listItemHiddenText: '',
        listItemImage: true,
        listItemInfoText: 'Hoe je ons kunt bellen, e-mailen en faxen.',
        listItemView: 'orange bottom',
        navigationHeading: 'home',
        pageHeading: 'Contact?',
        pageImage: true,
        pageInfoText:
          'Communicatie is een activiteit waarbij levende wezens betekenissen uitwisselen door op elkaars signalen te reageren. ',
        path: '/contact',
        pathName: 'contact',
        sections: [
          'contactOpener',
          'contactText',
          'naamcreatieText',
          'passionQuote',
          'endOfPageLinks',
          'standardFooter',
        ],
        seoDescription: 'Specifiek voor SEO',
        seoTitle: 'Contactpagina',
        title: 'Contact',
      },
      model: 'page',
    },
    contactOpener: {
      fields: {
        boxBackgroundColor: 'orange',
        heading: 'any',
        image: true,
        infoText: '',
        mainNavigation: 'openerNavigatie',
        title: 'Contactpagina opener',
        variation: 'page opener',
      },
      model: 'openerSection',
    },
    contactText: {
      fields: {
        text:
          'Bij communicatie wordt informatie met elkaar gedeeld door middel van geluid (zoals bij spraak en toon) en vorm (zoals beeld, symboliek en tekst). Het contact omvat ook handelingen want door gedrag worden eindeloos veel betekenissen kenbaar gemaakt. De impact van (on–)bewuste daden kan heel groot zijn bij betekenistoekenning: non-verbale communicatie kan zelfs de doorslag geven boven doelbewust gekozen woorden en symboliek. Denk aan de (on–)geloofwaardigheid van een gesprekspartner die beweert dat hij niet nerveus is, maar wel zweet en trilt. Gedrag moet hier ruim worden uitgelegd: zo kunnen architecten door middel van een bouwwerk mensen imponeren of juist op hun gemak stellen. De keuze voor de plaats en de gebruikte beweging of stijl, geweld, mode, muziek en mimiek zijn slechts enkele voorbeelden die met communicatief handelen c.q. gedrag te maken hebben. Ook door geur, warmte, licht, kleur, intonatie, smaak en zelfs door pauzes of door te zwijgen kan men betekenissen versturen en indrukken verkrijgen. Omdat er niet zoiets bestaat als anti-gedrag, is het onmogelijk om niet te communiceren, stelde de psycholoog Watzlawick vast.',
        title: 'Tekst communicatie',
      },
      model: 'textSection',
    },
    productcodeText: {
      fields: {
        text:
          'Een product kan gekenmerkt worden door een productnummer, ook wel artikelcode genoemd. Bekende voorbeelden daarvan zijn de barcode of streepjescode EAN en het ISBN. Hierin wordt een product qua vorm, functie en passendheid uniek weergegeven (form, fit and function).',
        title: 'Tekst productcode',
      },
      model: 'textSection',
    },
    merkverwateringText: {
      fields: {
        text:
          "Merkverwatering is het verschijnsel dat een merknaam van een bepaald product of dienst zo bekend wordt, dat men in de spreektaal deze naam ook gaat gebruiken om te refereren aan soortgelijke producten van een ander merk. Deze betiteling is overigens feitelijk onjuist; niet het merk, maar de merknaam is verwaterd. De eigenaar van het merk behoudt het unieke recht om de naam als merk te presenteren. Unilever heeft bijvoorbeeld 'Vaseline' nog altijd als geregistreerd woordmerk in handen. Concurrenten mogen vaseline alleen onder die naam verkopen onder een paraplumerk.",
        title: 'Tekst merkverwatering',
      },
      model: 'textSection',
    },
    merkarchitectuurText: {
      fields: {
        text:
          "De verschillende merken van een onderneming vormen wat de merkarchitectuur (Engels: 'brand architecture') wordt genoemd. Soms hebben die merken ook wat betreft de naam een duidelijke relatie. McDonald's gebruikt bijvoorbeeld voor verschillende producten het voorvoegsel 'Mc-' (McFlurry, McKroket), evenals Nestlé (Nescafé, Nesquik, Nespresso).",
        title: 'Tekst merkarchitectuur',
      },
      model: 'textSection',
    },
    naamcreatieText: {
      fields: {
        text:
          "Het verzinnen van merknamen wordt 'naamcreatie' of 'naamontwikkeling' genoemd. Er is in Nederland en België een klein aantal hierin gespecialiseerde bureaus actief, in navolging van Amerikaanse 'naming agencies'. In het bedenken van namen gespecialiseerde copywriters heten 'naamcreatieven'.",
        title: 'Tekst naamcreatie',
      },
      model: 'textSection',
    },
    careQuote: {
      fields: {
        avatar: true,
        heading: 'Gary Vaynerchuk',
        subHeading: 'Ondernemer, spreker & marketing expert',
        text: 'De beste marketing strategie ooit: CARE.',
        title: 'Quote Gary Vaynerchuk',
      },
      model: 'quoteSection',
    },
    buildLoveQuote: {
      fields: {
        avatar: true,
        heading: 'Brian Chesky',
        subHeading: 'Cofounder van Airbnb',
        text:
          'Bouw iets waar 100 mensen van houden, niet iets dat 1 miljoen mensen een soort van leuk vinden.',
        title: 'Quote Brian Chesky',
      },
      model: 'quoteSection',
    },
    passionQuote: {
      fields: {
        avatar: true,
        heading: 'Michael Hyatt',
        subHeading: 'Virtual business mentor',
        text: 'Marketing gaat eigenlijk gewoon over het delen van je passie.',
        title: 'Quote Michael Hyatt',
      },
      model: 'quoteSection',
    },
    endOfPageLinks: {
      fields: {
        heading: 'any',
        listItems: ['homePage'],
        title: 'Einde pagina referenties',
        variation: 'large items',
      },
      model: 'listSection',
    },
    standardFooter: {
      fields: {
        backgroundColor: 'blue',
        footerNavigation: 'footerNavigatie',
        title: 'Standaard footer',
      },
      model: 'footerSection',
    },
    footerNavigatie: {
      fields: {
        routes: ['productPage', 'backgroundPage', 'contactPage'],
        title: 'Footer navigatie',
      },
      model: 'navigation',
    },
  },
}

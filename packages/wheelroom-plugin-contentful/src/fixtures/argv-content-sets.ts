/**
 * Fixture content for testing
 *
 *
 */

import { ContentSets } from '../types/content-set'

export const argvContentSets: ContentSets = {
  test: {
    allFieldTypesPage1: {
      fields: {
        dateField: '2019-06-03T00:00+01:00',
        dropdownField: 'item A',
        mediaField: true,
        longTextField: 'Content for testing this field',
        multipleComponentsField: ['firstSectionA', 'secondSection'],
        numberField: 25,
        richTextField: 'Content for testing this field',
        shortTextField: 'Content for testing this field',
        shortTextFieldExtended: 'onlyCamelCaseHere',
        singleComponentField: 'anotherPage',
        tagsField: ['some', 'tags'],
        title: 'Testing allFieldTypesPage #1',
      },
      model: 'allFieldTypes',
    },
    allFieldTypesPage2: {
      fields: {
        dateField: '2020-06-03T00:00+01:00',
        dropdownField: 'item B',
        mediaField: true,
        longTextField: 'Content for testing this field',
        multipleComponentsField: ['firstSectionB', 'secondSection'],
        numberField: 25,
        richTextField: 'Content for testing this field',
        shortTextField: 'Content for testing this field',
        shortTextFieldExtended: 'onlyCamelCaseHere',
        singleComponentField: 'anotherPage',
        tagsField: ['some', 'tags'],
        title: 'Testing allFieldTypesPage #2',
      },
      model: 'allFieldTypes',
    },
    anotherPage: {
      fields: {
        heading: 'Content for testing this field',
        title: 'Testing another page model',
      },
      model: 'pageModel',
    },
    firstSectionA: {
      fields: {
        defaultField: 'First content for testing this field',
        title: 'A - Testing first section model',
      },
      model: 'firstSection',
    },
    firstSectionB: {
      fields: {
        defaultField: 'Second content for testing this field',
        title: 'B - Testing first section model',
      },
      model: 'firstSection',
    },
    firstSectionC: {
      fields: {
        defaultField: 'Third content for testing this field',
        title: 'C - Testing first section model',
      },
      model: 'firstSection',
    },
    globals: {
      fields: {
        heading: 'Content for testing this field',
        title: 'Testing global model',
      },
      model: 'globalModel',
    },
    noFragment: {
      fields: {
        heading: 'Content for testing this field',
        title: 'Testing no fragment model',
      },
      model: 'noFragment',
    },
    secondSection: {
      fields: {
        heading: 'Content for testing this field',
        title: 'testing second section model',
      },
      model: 'secondSection',
    },
    someSubPage: {
      fields: {
        heading: 'Content for testing this field',
        title: 'Testing some sub page',
      },
      model: 'subPageModel',
    },
  },
}

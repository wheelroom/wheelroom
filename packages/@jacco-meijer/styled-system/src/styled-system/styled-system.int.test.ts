import { defaultTheme } from './config/default-theme'
import { styledSystem } from './styled-system'

const emotionCss = (props: any) => styledSystem(props)(defaultTheme)

const nestedTest = {
  color: ['blue', 'red'],
  fontFamily: 'text',
  fontSize: [2, 2, 3, 3],
  fontWeight: 2,
  height: 1,
  lineHeight: [3, 3, 4, 5],
  top: [6, 8],
  width: 1 / 2,

  // Nested objects in a ncss object should be handled as well
  ncss: {
    '>ul>li>p': {
      backgroundColor: 'yellow',
      px: [2, 3, 4, 5],
    },
  },
}

const nestedTestResult = {
  color: ' #20476A',
  fontFamily: 'Work Sans, sans-serif',
  fontSize: '15px',
  // tslint:disable-next-line: object-literal-sort-keys
  '@media (min-width: 37.5em)': {
    color: 'red',
    fontSize: '15px',
    lineHeight: 1.3,
    top: '60px',
  },
  '@media (min-width: 50em)': { fontSize: '18px', lineHeight: 1.4 },
  '@media (min-width: 75em)': { fontSize: '18px', lineHeight: 1.5 },
  fontWeight: 300,
  height: '100px',
  lineHeight: 1.3,
  top: '39px',
  width: '50%',
  '>ul>li>p': {
    backgroundColor: 'yellow',
    paddingRight: '9px',
    // tslint:disable-next-line: object-literal-sort-keys
    '@media (min-width: 37.5em)': { paddingRight: '15px', paddingLeft: '15px' },
    '@media (min-width: 50em)': { paddingRight: '22px', paddingLeft: '22px' },
    '@media (min-width: 75em)': { paddingRight: '30px', paddingLeft: '30px' },
    paddingLeft: '9px',
  },
}

test('Nested', () => {
  expect(emotionCss(nestedTest)).toStrictEqual(nestedTestResult)
})

const nonNestedTest = {
  // Nested objects not wrapped in ncss object should be skipped
  '>ul>li>p': {
    backgroundColor: 'yellow',
    px: [2, 3, 4, 5],
  },
  lineHeight: [3, 3, 4, 5],
  mb: 4,
  ml: '20px',
  mt: 0,
  px: [2, 3, 4, 5],
  py: [1, 2, 3, 4],
  w: [1, 1 / 2],
}

const nonNestedResult = {
  lineHeight: 1.3,
  // tslint:disable-next-line: object-literal-sort-keys
  '@media (min-width: 37.5em)': {
    lineHeight: 1.3,
    paddingRight: '15px',
    // tslint:disable-next-line: object-literal-sort-keys
    paddingLeft: '15px',
    paddingTop: '9px',
    paddingBottom: '9px',
    width: '50%',
  },
  '@media (min-width: 50em)': {
    lineHeight: 1.4,
    paddingRight: '22px',
    // tslint:disable-next-line: object-literal-sort-keys
    paddingLeft: '22px',
    paddingTop: '15px',
    paddingBottom: '15px',
  },
  '@media (min-width: 75em)': {
    lineHeight: 1.5,
    paddingRight: '30px',
    // tslint:disable-next-line: object-literal-sort-keys
    paddingLeft: '30px',
    paddingTop: '22px',
    paddingBottom: '22px',
  },
  marginBottom: '22px',
  marginLeft: '20px',
  marginTop: '0px',
  paddingRight: '9px',
  paddingLeft: '9px',
  paddingTop: '4px',
  paddingBottom: '4px',
  width: '100%',
}

test('Non nested', () => {
  expect(emotionCss(nonNestedTest)).toStrictEqual(nonNestedResult)
})

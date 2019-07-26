import { defaultTheme } from './config/default-theme'
import { parseStyles } from './parse-styles'

const testStyle = {
  // Nested objects should be handled as well
  '>ul>li>p': {
    backgroundColor: 'yellow',
    px: [2, 3, 4, 5],
  },
  // Color is not configured responsive. This issues a warning and uses only 'blue'
  color: ['blue', 'red'],
  fontFamily: 'text',
  fontSize: [2, 2, 3, 3],
  fontWeight: 2,
  lineHeight: [3, 3, 4, 5],
  mb: 4,
  ml: '20px',
  mt: 0,
  px: 3,
  py: 4,
  w: [1, 1 / 2],
}

const expects = {
  '>ul>li>p': {
    backgroundColor: 'yellow',
    paddingRight: '9px',
    // tslint:disable-next-line: object-literal-sort-keys
    paddingLeft: '9px',
    '@media (min-width: 37.5em)': { paddingRight: '15px', paddingLeft: '15px' },
    '@media (min-width: 50em)': { paddingRight: '22px', paddingLeft: '22px' },
    '@media (min-width: 75em)': { paddingRight: '30px', paddingLeft: '30px' },
  },
  color: ' #20476A',
  fontFamily: 'Work Sans, sans-serif',
  fontSize: 15,
  fontWeight: 300,
  lineHeight: 1.3,
  marginBottom: '22px',
  marginLeft: '20px',
  marginTop: '0px',
  paddingRight: '15px',
  // tslint:disable-next-line: object-literal-sort-keys
  paddingLeft: '15px',
  paddingTop: '22px',
  paddingBottom: '22px',
  width: '100%',
  '@media (min-width: 37.5em)': { fontSize: 15, lineHeight: 1.3, width: '50%' },
  '@media (min-width: 50em)': { fontSize: 18, lineHeight: 1.4 },
  '@media (min-width: 75em)': { fontSize: 18, lineHeight: 1.5 },
}

test('test style', () => {
  expect(parseStyles(defaultTheme, testStyle)).toStrictEqual(expects)
})

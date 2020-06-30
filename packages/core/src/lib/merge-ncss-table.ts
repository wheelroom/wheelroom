export interface MergeNcssTable {
  [cssPropertyName: string]: string[]
}

export const mergeNcssTable: MergeNcssTable = {
  m: ['marginLeft', 'marginRight', 'marginTop', 'marginBottom'],
  margin: ['marginLeft', 'marginRight', 'marginTop', 'marginBottom'],
  mb: ['marginBottom'],
  ml: ['marginLeft'],
  mr: ['marginRight'],
  mt: ['marginTop'],
  mx: ['marginLeft', 'marginRight'],
  my: ['marginTop', 'marginBottom'],

  p: ['paddingLeft', 'paddingRight', 'paddingTop', 'paddingBottom'],
  padding: ['paddingLeft', 'paddingRight', 'paddingTop', 'paddingBottom'],
  pb: ['paddingBottom'],
  pl: ['paddingLeft'],
  pr: ['paddingRight'],
  pt: ['paddingTop'],
  px: ['paddingLeft', 'paddingRight'],
  py: ['paddingTop', 'paddingBottom'],
}

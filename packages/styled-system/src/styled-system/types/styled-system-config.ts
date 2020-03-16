type CssProperty = string
type CssProperties = CssProperty[]
type Alias = string
type Aliases = Alias[]

export interface StyledSystemConfig {
  ignoreProperties: string[]
  propertyAliases: {
    [alias: string]: Aliases
  }
  responsiveProperties: CssProperties
  scales: {
    [scaleName: string]: CssProperties
  }
  initialZeroScales: CssProperties
  stringMaps: {
    [stringMapName: string]: CssProperties
  }
  units: { [unitName: string]: CssProperties }
}

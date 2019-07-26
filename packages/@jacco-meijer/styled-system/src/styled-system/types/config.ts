type UnitName = 'px' | 'em' | 'percent'
type CssProperty = string
type CssProperties = CssProperty[]
type Alias = string
type Aliases = Alias[]

export interface Config {
  ignoreProperties: string[]
  propertyAliases: {
    [alias: string]: Aliases
  }
  responsiveProperties: CssProperties
  scales: {
    [scaleName: string]: CssProperties
  }
  stringMaps: {
    [stringMapName: string]: CssProperties
  }
  units: { [key in UnitName]: CssProperties }
}

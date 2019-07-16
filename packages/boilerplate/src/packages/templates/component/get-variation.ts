export const getVariation = (vars: any) =>
  `import * as React from 'react'

const VariationNotFound = (props: any) => (
  <div>Variation "{props.variation}" not found</div>
)

const VariationPropNotFound = (props: any) => (
  <div>Property 'props.variation' not found</div>
)

const VariationWarning = (props: any) => (
  <div>
    Warning: number of components and numer of variation ids are not equal
  </div>
)

export const getVariation = (props: any, variations: any, components: any) => {
  if (!('variation' in props)) {
    return VariationPropNotFound
  }
  if (variations.indexOf(props.variation) === -1) {
    return VariationNotFound
  }
  if (variations.length !== components.length) {
    return VariationWarning
  }
  const Variation = components[variations.indexOf(props.variation)]
  return Variation
}
`

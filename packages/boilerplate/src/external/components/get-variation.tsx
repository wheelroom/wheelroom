import * as React from 'react'

const VariationNotFound = (props: any) => (
  <div>Variation "{props.variation}" not found</div>
)

const VariationPropNotFound = (props: any) => (
  <div>Property 'props.variation' not found</div>
)

export const getVariation = (props: any, variations: any) => {
  if (!('variation' in props)) {
    return VariationPropNotFound
  }
  if (!variations[props.variation]) {
    return VariationNotFound
  }
  const Variation = variations[props.variation]
  return Variation
}

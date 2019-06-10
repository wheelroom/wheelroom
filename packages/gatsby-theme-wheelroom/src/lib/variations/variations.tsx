import * as React from 'react'

const VariationNotFound = (props: any) => (
  <div>Variation "{props.variation}" not found</div>
)

export const getVariation = (props: any, variations: any) => {
  const Variation = variations[props.variation] || VariationNotFound
  return Variation
}

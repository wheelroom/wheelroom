import * as React from 'react'

export const VariationNotFound = props => (
  <div>Variation "{props.variation}" not found</div>
)

export const getVariation = (props, variations) => {
  const Variation = variations[props.variation] || VariationNotFound
  return Variation
}

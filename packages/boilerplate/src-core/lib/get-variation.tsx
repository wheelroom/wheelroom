import React from 'react'

const VariationNotFound = (props: any) => (
  <div>Variation &quot;{props.variation}&quot; not found</div>
)

const VariationPropNotFound = () => (
  <div>Property &apos;props.variation&apos; not found</div>
)

export const getVariation = (props: any, variations: any) => {
  if ('variation' in props) {
    if (!variations[props.variation]) {
      return VariationNotFound
    }
    const Variation = variations[props.variation]
    return Variation
  }
  if ('single' in variations) {
    const Variation = variations.single
    return Variation
  }
  return VariationPropNotFound
}

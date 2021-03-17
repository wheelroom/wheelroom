import { intrinsicElements } from "./intrinsic-elements"

const writeIndex = (elements: string[]) => {


  // import React from 'react'
  // import { Any, AnyProps } from './Any'
  
  elements.forEach((element) => {
    const jsxComponentName = element[0].toUpperCase() + element.slice(1)
    return console.log(
      `export const ${jsxComponentName}: React.FC<AnyProps['${element}']> = (props) => (
  <Any is="${element}" {...props} />
)`
    )
  })
}

writeIndex(intrinsicElements)

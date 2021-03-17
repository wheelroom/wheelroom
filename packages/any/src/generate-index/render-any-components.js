const RenderAnyComponents = (elements) => {
  return elements.map((element) => {
    const jsxComponentName = element[0].toUpperCase() + element.slice(1)
    return console.log(
      `export const ${jsxComponentName}: React.FC<AnyProps['${element}']> = (props) => (
  <Any is="${element}" {...props} />
)`
    )
  })
}

RenderAnyComponents(intrinsicElements)

import { cssObjToVars } from './css-obj-to-vars'

export interface StyleElementProps {
  theme: any
}

export const StyleElement = (props: StyleElementProps) => {
  const cssVars = cssObjToVars({ obj: props.theme })
  let cssVarsString = ''
  Object.entries(cssVars).map(([name, value]) => {
    cssVarsString += `${name}: ${value}; `
  })
  return <style>{`:root { ${cssVarsString} }`}</style>
}

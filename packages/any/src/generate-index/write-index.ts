import fs from 'fs'
import path from 'path'

const FOLDER = 'src'
const FILE = 'index.tsx'

export const writeIndex = (elements: string[]) => {
  const folder = FOLDER
  fs.mkdirSync(folder, { recursive: true })

  let data = `import React from 'react'
import { Any, AnyProps } from './Any'
export { Any } from './Any'
export { AnyComponent } from './Any'
export type { AnyProps } from './Any'
export { anyReset } from './resets/any-reset'
export { elementResetMap } from './resets/element-reset-map'
export { globalReset } from './resets/global-reset'

`
  elements.forEach((element) => {
    const jsxComponentName = element[0].toUpperCase() + element.slice(1)
    data += `export const ${jsxComponentName}: React.FC<AnyProps['${element}']> = (props) => <Any is="${element}" {...props} />
`
  })
  const file = path.join(FOLDER, FILE)
  fs.writeFileSync(file, data)
}

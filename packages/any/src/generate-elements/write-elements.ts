import fs from 'fs'
import path from 'path'

const FOLDER = 'src'
const FILE = 'elements.tsx'

export const writeElements = (elements: string[]) => {
  const folder = FOLDER
  fs.mkdirSync(folder, { recursive: true })

  let data = `import { Interpolation, Theme } from '@emotion/react'
import { Any, AnyProps } from './Any'
export type AnyStyle = Interpolation<Theme>

`
  elements.forEach((element) => {
    const jsxComponentName = element[0].toUpperCase() + element.slice(1)
    data += `export const ${jsxComponentName}: React.FC<AnyProps['${element}']> = (props) => <Any is="${element}" css={{ label: '${element}' }} {...props} />
`
  })
  const file = path.join(FOLDER, FILE)
  fs.writeFileSync(file, data)
}

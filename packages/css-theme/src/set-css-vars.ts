import { cssObjToVars } from './css-obj-to-vars'

export const setCssVars = ({ theme }: { theme: any }) => {
  const cssVars = cssObjToVars({ obj: theme })
  Object.entries(cssVars).forEach(([key, value]: any) =>
    document.documentElement.style.setProperty(key, value)
  )
}

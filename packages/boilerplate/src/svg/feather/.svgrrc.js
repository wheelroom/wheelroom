path = require('path')
svgrCliUtil = require('@svgr/cli/lib/util')
module.exports = {
  expandProps: false,
  svgProps: {
    css: '{css}',
    id: '{componentId}',
    stroke: 'currentColor',
    strokeWidth: '{strokeWidth}',
    width: '100%',
  },
  template(
    { template },
    opts,
    { imports, componentName, props, jsx, exports }
  ) {
    const typeScriptTpl = template.smart({ plugins: ['typescript'] })
    return typeScriptTpl.ast`
    import React, { SVGProps } from 'react'
    import { systemCss } from '../../styled-system/system-css'
    import { useGetCurrentThemeId } from '@wheelroom/admin-theme-switcher'

    export interface IconProps extends SVGProps<SVGSVGElement> {
      ncss: any
    }
    
    const componentId = '${svgrCliUtil.transformFilename(
      opts.state.componentName,
      'kebab'
    )}';
    export const ${componentName} = (props: IconProps) => {
      const currentThemeId: any = useGetCurrentThemeId()
      const strokeWidth = props.strokeWidth || 2
      const css = systemCss({ ncss: props.ncss }, currentThemeId)
        
      return ${jsx};
    }
  `
  },
  indexTemplate(files) {
    const exportEntries = files.map(file => {
      const basename = path.basename(file, path.extname(file))
      return `export * from './${basename}'`
    })
    return exportEntries.join('\n') + `\n`
  },
}

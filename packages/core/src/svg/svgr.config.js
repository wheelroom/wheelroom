/* eslint-disable */
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
    const plugins = ['jsx']
    if (opts.typescript) {
      plugins.push('typescript')
    }
    const typeScriptTpl = template.smart({ plugins })
    return typeScriptTpl.ast`
    import React, { SVGProps } from 'react'
    import { styledSystem } from '@wheelroom/styled-system'
    import { Wheel } from '../../lib/wheel'
    interface IconProps extends SVGProps<SVGSVGElement> {
      ncss: any
      wheel: Wheel
      strokeWidth: number
    }
    
    const componentId = '${svgrCliUtil.transformFilename(
      opts.state.componentName,
      'kebab'
    )}';
    export const ${componentName} = (props: IconProps) => {
      const strokeWidth = props.strokeWidth || 2
      const css = styledSystem(
        props.wheel.wrSystemConfig,
        props.wheel.wrSystemTheme,
        {
          ncss: props.ncss,
        }
      )
      return ${jsx};
    }
  `
  },
  indexTemplate(files) {
    const exportEntries = files.map((file) => {
      const basename = path.basename(file, path.extname(file))
      return `export * from './${basename}'`
    })
    return exportEntries.join('\n') + `\n`
  },
}

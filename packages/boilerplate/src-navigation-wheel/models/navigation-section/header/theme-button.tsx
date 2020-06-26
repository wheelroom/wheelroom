import React from 'react'
import { Wheel, NcssNode, Button } from '../../../../src-core'

interface ThemeButtonWheel extends Wheel {
  style: NcssNode
}

export interface ThemeButtonWheelProps {
  buttonName?: string
  hideThemeButton?: boolean
  toggleTheme: () => void
  wheel: ThemeButtonWheel
}

export const ThemeButton = (props: ThemeButtonWheelProps) => {
  if (props.hideThemeButton) {
    return null
  }
  return (
    <Button
      ariaLabel={`Current theme is ` + props.buttonName}
      onClick={() => props.toggleTheme()}
      title={`Current theme is ` + props.buttonName}
      type="button"
      value=""
      wheel={{
        ...props.wheel,
        style: props.wheel.style,
      }}
    >
      {props.buttonName}
    </Button>
  )
}

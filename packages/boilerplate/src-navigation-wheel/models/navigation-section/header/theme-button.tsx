import React from 'react'
import { Wheel, ButtonElementStyle, Button } from '../../../../src-core'

interface ThemeButtonWheel extends Wheel {
  style: ButtonElementStyle
}

export interface ThemeButtonWheelProps {
  activeThemeId?: string
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
      ariaLabel={`Current theme is ` + props.activeThemeId}
      onClick={() => props.toggleTheme()}
      title={`Current theme is ` + props.activeThemeId}
      type="button"
      value=""
      wheel={{
        ...props.wheel,
        style: props.wheel.style,
      }}
    >
      {props.activeThemeId}
    </Button>
  )
}

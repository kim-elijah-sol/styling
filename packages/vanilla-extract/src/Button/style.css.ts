import { style } from '@vanilla-extract/css'
import { vars } from '../Theme/theme.css'

export const buttonStyle = style({
  background: vars.color.brand,
  color: vars.color.white,
  border: vars.constant.NONE,
})

export const warningButtonStyle = style([
  buttonStyle,
  {
    background: vars.color.warning,
  },
])

import { style } from '@vanilla-extract/css'
import { colors, vars } from '../Theme/theme.css'
import { rgbToRgba } from '../utils/rgbToRgba'

export const buttonStyle = style({
  background: vars.color.brand,
  color: vars.color.white,
  border: vars.constant.NONE,
  padding: '6px 16px',
  borderRadius: 12,
  cursor: 'pointer',
  width: 'max-content',
  transition: '0.21s',
  ':hover': {
    background: rgbToRgba(colors.brand, 0.6),
  },
})

export const warningButtonStyle = style([
  buttonStyle,
  {
    background: vars.color.warning,
    ':hover': {
      background: rgbToRgba(colors.warning, 0.6),
    },
  },
])

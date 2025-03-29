import { style, styleVariants } from '@vanilla-extract/css'
import { colors, vars } from '../Theme/theme.css'
import { rgbToRgba } from '../utils/rgbToRgba'

const buttonBase = style({
  color: vars.color.white,
  border: vars.constant.NONE,
  padding: '6px 16px',
  borderRadius: 12,
  cursor: 'pointer',
  width: 'max-content',
  transition: '0.21s',
})

export const buttonStyle = styleVariants({
  brand: [
    buttonBase,
    {
      background: vars.color.brand,
      ':hover': {
        background: rgbToRgba(colors.brand, 0.6),
      },
    },
  ],
  warning: [
    buttonBase,
    {
      background: vars.color.warning,
      ':hover': {
        background: rgbToRgba(colors.warning, 0.6),
      },
    },
  ],
})

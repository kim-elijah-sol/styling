import { style } from '@vanilla-extract/css'
import { vars } from '../Theme/theme.css'

const buttonClassName = style({
  background: vars.color.brand,
  color: vars.color.white,
  border: vars.constant.NONE,
})

export default buttonClassName

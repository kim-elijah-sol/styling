import { style } from '@vanilla-extract/css'
import { vars } from '../Theme/theme.css'

const buttonClassName = style({
  background: vars.color.brand,
})

export default buttonClassName

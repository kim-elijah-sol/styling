import { createTheme } from '@vanilla-extract/css'

const colors = {
  brand: '#0064FF',
  white: '#FFF',
  warning: '#FF0064',
  black: '#000',
}

const [themeClass, vars] = createTheme({
  color: colors,
  constant: {
    NONE: 'none',
    AUTO: 'auto',
  },
})

export { themeClass, vars, colors }

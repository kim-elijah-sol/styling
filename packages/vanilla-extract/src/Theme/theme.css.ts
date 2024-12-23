import { createTheme } from '@vanilla-extract/css'

const [themeClass, vars] = createTheme({
  color: {
    brand: '#0064FF',
    white: '#FFF',
    black: '#000',
  },
})

export { themeClass, vars }

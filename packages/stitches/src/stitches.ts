import { createStitches } from '@stitches/react'

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      brand: '#0064FF',
      white: '#FFFFFF',
      warning: '#FF0064',
      black: '#000000',
    },
  },
  utils: {
    paddingX: (value: number | string) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    paddingY: (value: number | string) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
  },
})

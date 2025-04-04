import { styled } from '../stitches'

export const Button = styled('button', {
  paddingX: 16,
  paddingY: 6,
  border: 'none',
  borderRadius: 12,
  cursor: 'pointer',
  width: 'max-content',
  transition: '0.21s',
  color: '$white',

  variants: {
    color: {
      brand: {
        background: '$brand',
        '&:hover': {
          background: 'rgba(0,106,255,0.6)',
        },
      },
      warning: {
        background: '$warning',
        '&:hover': {
          background: 'rgba(255,0,106,0.6)',
        },
      },
    },
  },
})

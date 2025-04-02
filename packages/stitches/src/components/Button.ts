import { CSS, styled } from '@stitches/react'

export const Button = styled('button', {
  padding: '6px 16px',
  border: 'none',
  borderRadius: 12,
  cursor: 'pointer',
  width: 'max-content',
  transition: '0.21s',
  color: '#FFFFFF',
  background: '#006AFF',
  '&:hover': {
    background: 'rgba(0,106,255,0.6)',
  },
} as CSS)

import { globalStyle } from '@styling/stitches'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'

globalStyle()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
)

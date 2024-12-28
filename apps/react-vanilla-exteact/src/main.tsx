import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { ThemeRoot } from '@styling/vanilla-extract'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeRoot>
      <App />
    </ThemeRoot>
  </StrictMode>
)

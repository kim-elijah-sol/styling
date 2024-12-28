import { Button } from '@styling/vanilla-extract'
import { containerStyle } from './App.css'

function App() {
  return (
    <div className={containerStyle}>
      <Button>안녕하세요!</Button>
      <Button.Warning>이건 누르면 위험해요!</Button.Warning>
    </div>
  )
}

export default App

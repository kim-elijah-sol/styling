import { Button } from '@styling/stitches'

function App() {
  return (
    <div>
      <Button
        type='button'
        css={{
          background: '$warning',
        }}
      >
        안녕하세요!
      </Button>
    </div>
  )
}

export default App

import { Button, styled } from '@styling/stitches'

const TitleText = styled('h1', {
  fontSize: '1rem',
})

function App() {
  return (
    <div>
      <TitleText as='h2'>제목입니당</TitleText>
      <Button type='button'>안녕하세요!</Button>
      <Button color='warning' type='button'>
        위험한 버튼이에요!
      </Button>
    </div>
  )
}

export default App

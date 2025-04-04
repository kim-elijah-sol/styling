import { Button, styled, WarningButton } from '@styling/stitches'

const TitleText = styled('h1', {
  fontSize: '1rem',
})

function App() {
  return (
    <div>
      <TitleText>제목입니당</TitleText>
      <Button type='button'>안녕하세요!</Button>
      <WarningButton type='button'>위험한 버튼이에요!</WarningButton>
    </div>
  )
}

export default App

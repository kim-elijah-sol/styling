import { PropsWithChildren } from 'react'
import './App.css'

function Wrapper({ children }: PropsWithChildren) {
  return (
    <main className='w-full p-8 overflow-y-auto gap-2 flex flex-wrap'>
      {children}
    </main>
  )
}

type CardProps = {
  colors: string[]
}

function Card({ colors }: CardProps) {
  return (
    <div className='rounded-[16px] shadow-md flex overflow-hidden'>
      {colors.map((it) => (
        <div
          key={it}
          className='w-[120px] h-[120px]'
          style={{ backgroundColor: it }}
        />
      ))}
    </div>
  )
}

function App() {
  return (
    <Wrapper>
      <Card colors={['#006AFF', '#6284F5', '#8E8AF5', '#C0ADF4']} />
    </Wrapper>
  )
}

export default App

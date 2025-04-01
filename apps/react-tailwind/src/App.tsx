import { PropsWithChildren } from 'react'
import './App.css'

function Wrapper({ children }: PropsWithChildren) {
  return (
    <main className='w-full p-8 overflow-y-auto gap-6 flex flex-wrap'>
      {children}
    </main>
  )
}

type CardProps = {
  colors: string[]
}

function Card({ colors }: CardProps) {
  return (
    <div className='rounded-2xl shadow-lg p-3'>
      <div className='flex h-[100px] w-[400px] rounded-lg overflow-hidden mb-2'>
        {colors.map((it) => (
          <div
            className='flex-1 cursor-pointer'
            key={it}
            style={{ background: it }}
          />
        ))}
      </div>
      <div className='flex w-[400px] flex justify-around'>
        {colors.map((it) => (
          <button
            key={it}
            className='px-3 py-1 rounded-md transition-all hover:bg-slate-200 cursor-pointer active:bg-slate-300'
          >
            <p className='text-slate-700 font-bold'>{it.replace('#', '')}</p>
          </button>
        ))}
      </div>
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

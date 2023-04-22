import { Sidebar } from './components/Sidebar'
import { Atendimento } from './components/Atendimento'
import { NossaHistoria } from './components/NossaHistoria'
import { Depoimentos } from './components/Depoimentos'
import { Contato } from './components/Contato'
import { useEffect, useState } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import bg from './assets/bg.png'


export function App() {
  const [color, setColor] = useState(false)
  useEffect(() => {
    Aos.init({ duration: 1500 })
  }, [])

  useEffect(() => {
    function positionScroll() {
      if (window.scrollY > 500) {
        setColor(true)
      } else {
        setColor(false)
      }
      if (window.scrollY > 3400) {
        setColor(false)
      } else {
      }
      if (window.scrollY > 4100) {
        setColor(true)
      } else {
      }
      if (window.scrollY > 4900) {
        setColor(false)
      } else {
      }
    }

    window.addEventListener('scroll', positionScroll)
  }, [])
  return (
    <div className='transition-all'>
      <section className='flex  bg-main h-screen' id='home'>
        <Sidebar acao={color} nameSection={''} childrenSection={[]} descriptionSection={''} />
        <div className='max-w-md m-auto mt-32 flex-1'>
          <img src={bg} alt="" className='m-auto' />
        </div>
      </section>
      <Atendimento />
      <NossaHistoria />
      <Depoimentos />
      <Contato />
    </div>
  )
}

export default App

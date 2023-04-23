import { Sidebar } from './components/Sidebar'
import { Atendimento } from './components/Atendimento'
import { NossaHistoria } from './components/NossaHistoria'
import { Depoimentos } from './components/Depoimentos'
import { Contato } from './components/Contato'
import { useEffect, useState } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import bg from './assets/bg.png'
import { AppContext } from './contexts/Index'
import { WhatsappLogo } from '@phosphor-icons/react'


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
    <AppContext>
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
        <div className='fixed bottom-4 right-4 md:bottom-8 md:right-8 flex flex-col items-end'>

          <a className='bg-green-500 rounded-full px-3 h-12 text-white flex items-center group'>
            <WhatsappLogo className='w-8 h-8' />

            <span className='max-w-0 overflow-hidden lg:flex hidden group-hover:max-w-xl transition-all duration-700 ease-linear'>
              <span className='p-2'></span>
              <p className='font-bold transition-all duration-100 ease-linear'>
                Em que posso ajudar?
              </p>
            </span>
          </a>
        </div>
      </div>
    </AppContext>
  )
}

export default App

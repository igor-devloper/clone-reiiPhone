import { useEffect, useState } from 'react'
import { Atendimento } from './components/Atendimento'
import Aos from 'aos'
import 'aos/dist/aos.css'
import bg from './assets/bg.png'
import { Sidebar } from './components/Sidebar'


export function App() {
  const [color, setColor] = useState(false)

  useEffect(() => {
    Aos.init({ duration: 1500 })
  }, [])

  useEffect(() => {
    function positionScroll(){
      if(window.scrollY > 500){
        setColor(true)
      }else {
        setColor(false)
      } 
    }
    

    window.addEventListener('scroll', positionScroll)
  }, [])
  return (
    <div>
      <section className='flex h-[700px] bg-main' id='#home'>
        <Sidebar acao={color}/>
        <div className='max-w-md m-auto mt-32 flex-1'>
          <img src={bg} alt="" className='m-auto' />
        </div>
      </section>
      <Atendimento />
    </div>
  )
}

export default App

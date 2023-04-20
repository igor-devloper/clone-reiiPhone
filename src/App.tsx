import bg from './assets/bg.png'
import logo from './assets/logo.png'
import icon1 from './assets/headphone.png'
import icon2 from './assets/crown.png'
import { Atendimento } from './components/Atendimento'


export function App() {
  return (
    <div>
      <section className='flex h-[700px]' id='#home'>
        <aside className='bg-white w-24 flex-col h-screen justify-center p-4 fixed'>
          <img src={logo} alt="" className='max-h-8' />
          <nav className='mt-56 p-4'>
            <a href="#home" className=''>
              <img src={icon1} alt="" />
            </a>
            <a href="">
              <img src={icon2} alt="" />
            </a>
            <a href=""></a>
            <a href=""></a>
            <a href=""></a>

          </nav>
          <div>

          </div>
        </aside>
        <div className='max-w-md m-auto mt-32 flex-1'>
          <img src={bg} alt="" className='m-auto' />
        </div>
      </section>
      <Atendimento/>
    </div>
  )
}

export default App

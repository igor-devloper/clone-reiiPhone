import { CrownSimple, FacebookLogo, Headset, InstagramLogo, MapPin, Megaphone, Wrench } from "@phosphor-icons/react";
import logo from '../assets/logo.png'
import white from '../assets/whitw.png'

interface SidebarProps {
  acao: boolean;
}

export function Sidebar(props: SidebarProps) {
  return (
    
    <aside className={(props.acao ? 'bg-atendimento w-24 h-screen fixed transition-all' : 'bg-white w-24 h-screen fixed')}>

      {props.acao ? <img src={white} alt="" className='max-h-8 flex m-auto mt-10' /> : <img src={logo} alt="" className='max-h-8 flex m-auto mt-10' />}

      <nav className='mt-28 p-6 space-y-4'>
        <a href="#home" className='flex items-center gap-2'>
          <Wrench size={32}  className={(props.acao ?'text-white' : '')}weight="bold" />
        </a>
        <a href="" className='flex items-center gap-2'>
          <Headset size={32}  className={(props.acao ?'text-white' : 'b')}weight="bold" />
        </a>
        <a href="" className='flex items-center gap-2'>
          <CrownSimple size={32}  className={(props.acao ?'text-white' : '')}weight="bold" />
        </a>
        <a href="" className='flex items-center gap-2'>
          <Megaphone size={32}  className={(props.acao ? 'text-white' : '')}weight="bold" />
        </a>
        <a href="" className='flex items-center gap-2'>
          <MapPin size={32} weight="bold" className={(props.acao ? 'text-white' : '')}/>
        </a>
      </nav>


      <div className='p-6 space-y-4 mt-10'>
        <a href="" className={props.acao ? 'text-white flex items-center gap-2' : 'flex items-center gap-2'}>
          <InstagramLogo size={42}/>
        </a>
        <a href="" className={props.acao ? 'text-white flex items-center gap-2' : 'flex items-center gap-2'}>
          <FacebookLogo size={42} />
        </a>
      </div>


    </aside>
  )
}
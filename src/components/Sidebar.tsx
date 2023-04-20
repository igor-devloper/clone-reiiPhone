import { CrownSimple, FacebookLogo, Headset, InstagramLogo, MapPin, Megaphone, Wrench } from "@phosphor-icons/react";
import logo from '../assets/logo.png'

export function Sidebar() {
  return (
    <aside className='bg-white w-24 h-screen fixed'>
      <img src={logo} alt="" className='max-h-8 flex m-auto mt-10' />
      <nav className='mt-28 p-6 space-y-4'>
        <a href="#home" className='flex items-center gap-2'>
          <Wrench size={32} color="#192338" weight="bold" />
        </a>
        <a href="" className='flex items-center gap-2'>
          <Headset size={32} color="#192338" weight="bold" />
        </a>
        <a href="" className='flex items-center gap-2'>
          <CrownSimple size={32} color="#192338" weight="bold" />
        </a>
        <a href="" className='flex items-center gap-2'>
          <Megaphone size={32} color="#192338" weight="bold" />
        </a>
        <a href="" className='flex items-center gap-2'>
          <MapPin size={32} color="#192338" weight="bold" />
        </a>
      </nav>
      <div className='p-6 space-y-4 mt-10'>
        <a href="" className='flex items-center gap-2'>
          <InstagramLogo size={42} color="#386BA1" />
        </a>
        <a href="" className='flex items-center gap-2'>
          <FacebookLogo size={42} color="#386BA1" />
        </a>
      </div>
    </aside>
  )
}
import { CrownSimple, FacebookLogo, Headset, InstagramLogo, MapPin, Megaphone, Wrench } from "@phosphor-icons/react";
import logo from '/src/assets/logo.png'
import white from '/src/assets/whitw.png'
import { HamburgerIcon } from "../components/HamburguerIcon";
import { NavItem } from "./NavIItem";

interface SidebarProps {
  acao?: boolean;
  nameSection: string;
  childrenSection: JSX.Element[];
  descriptionSection: string;
}

export function Sidebar(props: SidebarProps): JSX.Element {
  return (

    <div className="flex flex-row">
      <aside className={(props.acao ? 'bg-atendimento w-24 h-screen fixed transition-all z-50 hidden  items-center flex-col lg:flex' : 'bg-white w-24 h-screen fixed z-50 hidden lg:flex items-center flex-col')}>

        {props.acao ? <img src={white} alt="" className='max-h-8 flex m-auto mt-10' /> : <img src={logo} alt="" className='max-h-8 flex m-auto mt-10' />}

        <nav className='flex flex-col items-center justify-center mb-10 space-y-4'>
          <NavItem childrenSection={[<Wrench />]} nameSection="home" descriptionSection="Reparos" />
          <NavItem childrenSection={[<Headset />]} nameSection="atendimento" descriptionSection="Atendimento"/>
          <NavItem childrenSection={[<CrownSimple />]} nameSection="nossaHistoria" descriptionSection="Nossa Historia"/>
          <NavItem childrenSection={[<Megaphone />]} nameSection="depoimentos" descriptionSection="Depoimentos"/>
          <NavItem childrenSection={[<MapPin />]} nameSection="contato" descriptionSection="Contato"/>
        </nav>


        <div className='p-6 space-y-4 mt-10'>
          <a href="" className={props.acao ? 'text-white flex items-center gap-2' : 'flex items-center gap-2 text-atendimento '}>
            <InstagramLogo size={42} />
          </a>
          <a href="" className={props.acao ? 'text-white flex items-center gap-2' : 'flex items-center gap-2 text-atendimento'}>
            <FacebookLogo size={42} />
          </a>
        </div>
      </aside>
      <div className="flex lg:hidden text-white p-4" >
        <HamburgerIcon />
      </div>
    </div>
  )
}
import { CrownSimple, FacebookLogo, Headset, InstagramLogo, MapPin, Megaphone, Wrench } from "@phosphor-icons/react";
import logo from '/src/assets/logo.png'
import white from '/src/assets/whitw.png'
import logoComp from '/src/assets/logo-comp.png'
import { HamburgerIcon } from "../components/HamburguerIcon";
import { NavItem } from "./NavIItem";
import { NavItemResp } from "./NavItemResp";
import { useNavMobileContext } from "../contexts/NavMobileContext";
import { useEffect, useState } from "react";

interface SidebarProps {
  acao: boolean;
  nameSection: string;
  childrenSection: JSX.Element[];
  descriptionSection: string;
}

export function Sidebar(props: SidebarProps): JSX.Element {
  const [Visible, setVisible] = useState(false)
  useEffect(() => {
    function positionScroll() {
      if (window.scrollY < 300) {
        setVisible(true)
      } else {
        setVisible(false)
      }
  
    }
  
    window.addEventListener('scroll', positionScroll)
  }, [])
  const { isVisible, setIsVisible } = useNavMobileContext()
  return (
    <>
      <div className="flex flex-row">
        <aside className={(props.acao ? 'bg-atendimento w-24 h-screen fixed transition-all z-50 hidden  items-center flex-col lg:flex' : 'bg-white w-24 h-screen fixed z-50 hidden lg:flex items-center flex-col')}>

          {props.acao ? <img src={white} alt="" className='max-h-8 flex m-auto mt-10' /> : <img src={logo} alt="" className='max-h-8 flex m-auto mt-10' />}

          <nav className='flex flex-col items-center justify-center mb-10 space-y-4'>
            <NavItem childrenSection={[<Wrench />]} nameSection="home" descriptionSection="Reparos" acao={props.acao} />
            <NavItem childrenSection={[<Headset />]} nameSection="atendimento" descriptionSection="Atendimento" acao={props.acao} />
            <NavItem childrenSection={[<CrownSimple />]} nameSection="nossaHistoria" descriptionSection="Nossa Historia" acao={props.acao} />
            <NavItem childrenSection={[<Megaphone />]} nameSection="depoimentos" descriptionSection="Depoimentos" acao={props.acao} />
            <NavItem childrenSection={[<MapPin />]} nameSection="contato" descriptionSection="Contato" acao={props.acao} />
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
        <div className="flex fixed lg:hidden text-white p-4 transition-transform duration-150" >
          <button onClick={() => setIsVisible((prev) => !prev)}>
            {isVisible ?
              <span className={Visible ? 'text-2xl text-black transition-all duration-500 ease-in font-semibold' : 'hidden'}>X</span> :
              <HamburgerIcon estilo={Visible ? 'flex' : 'hidden'}/>}
          </button>
        </div>
      </div>
      {
        isVisible && (
          <div className="w-full h-screen lg:hidden left-0 bg-gradient-to-tr from-from to-atendimento transition-all duration-500 ease-in">
            <div className="w-5/12 transition-all duration-500 ease-in h-screen bg-white p-4">
              <img src={logoComp} alt="" className='max-w-[100px] flex m-auto mt-10' />
              <nav className=' mt-20 flex flex-col items-center justify-center mb-10 space-y-4'>
                <NavItemResp childrenSection={[<Wrench weight="bold" />]} nameSection="home" descriptionSection="Reparos" acao={props.acao} />
                <NavItemResp childrenSection={[<Headset weight="bold" />]} nameSection="atendimento" descriptionSection="Atendimento" acao={props.acao} />
                <NavItemResp childrenSection={[<CrownSimple weight="bold" />]} nameSection="nossaHistoria" descriptionSection="Nossa Historia" acao={props.acao} />
                <NavItemResp childrenSection={[<Megaphone weight="bold" />]} nameSection="depoimentos" descriptionSection="Depoimentos" acao={props.acao} />
                <NavItemResp childrenSection={[<MapPin weight="bold" />]} nameSection="contato" descriptionSection="Contato" acao={props.acao} />
              </nav>
            </div>
          </div>
        )
      }
    </>
  )
}
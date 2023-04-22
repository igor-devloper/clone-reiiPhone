import { MapPin } from "@phosphor-icons/react";
import { Children } from "react";

interface SidebarProps {
  acao?: boolean;
  nameSection: string;
  childrenSection: JSX.Element[];
  descriptionSection: string;
}


export function NavItem(props: SidebarProps): JSX.Element {
  return (
    <div className="hover:ml-10 transition-transform">
      <a href={'#' + props.nameSection} className='flex group relative group-hover:p-10'>
        <div className={(props.acao ? 'group-hover:rounded-l-lg transition-all text-white' : ' p-2 text-blue-950 group-hover:bg-white group-hover:text-atendimento group-hover:-2 group-hover:rounded-l-lg text-2xl transition-all')} >
          {props.childrenSection}
        </div>
        <span className={(props.acao ? 'max-w-0 overflow-hidden  group-hover:bg-white  group-hover:max-w-xs transition-all duration-200 ease-in-out text-xs font-light' : 'flex justify-center w-[95px] items-center pt-2 text-xs font-light group-hover:bg-white group-hover:text-atendimento max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-200 ease-in-out group-hover:shadow group-hover:shadow-atendimento/30 group-hover:rounded-r-lg')}>
          <span className='pl-20'></span>
          <div className="mr-24 mb-2">{props.descriptionSection}</div>
        </span>
      </a>
    </div>
  )
}
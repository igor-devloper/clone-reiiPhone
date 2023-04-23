import { MapPin } from "@phosphor-icons/react";
import { Children } from "react";

interface SidebarProps {
  acao: boolean;
  nameSection: string;
  childrenSection: JSX.Element[];
  descriptionSection: string;
}


export function NavItemResp(props: SidebarProps): JSX.Element {
  console.log(props.acao);
  return (
    <div className="">
      <a href={'#' + props.nameSection} className='flex items-center justify-center'>
        <div className={(props.acao ? 'p-2 group-hover:bg-white group-hover:text-atendimento group-hover:-2 group-hover:rounded-l-lg text-2xl transition-all text-white' : 'p-2 text-from group-hover:bg-from group-hover:text-white group-hover:rounded-l-lg text-2xl transition-all')} >
          {props.childrenSection}
        </div>
        <span className="text-sm p-2">
          <div className="">{props.descriptionSection}</div>
        </span>
      </a>
    </div>
  )
}
import { WhatsappLogo } from "@phosphor-icons/react";
import { Form } from "./Form";
import { Location } from "./Location";

export function Contato() {
  return (
    <section id='contato' className="bg-gradient-to-tr from-from to-atendimento ">
      <div className="">
        <div className="flex lg:justify-between lg:space-x-10 lg:mr-10">
          <span className="text-white lg:p-8 lg:ml-28 lg:mt-12 lg:text-4xl text-xl p-10 font-bold">Venha conhecer nossa loja.</span>
          <div className=" lg:flex  hidden items-center gap-2 text-white font-bold  text-xl ">
            <WhatsappLogo size={44} />
            <span className="w-full"> 11 94558-0443</span>
          </div>
        </div>
        <div >
          <div className="flex">
            <div className="lg:gap-44 lg:max-w-[670px] lg:flex hidden">
              <Form />
            </div>
            <div className="lg:max-w-[670px] lg:flex">
              <Location />
            </div>
          </div>
          <div className=" lg:hidden flex items-center pb-10 flex-col  lg:gap-2 lg:m-auto lg:items-center lg:justify-center lg:p-10  text-white font-bold  text-xl ">
            <WhatsappLogo size={44} />
            <span className=""> 11 94558-0443</span>
            <a href="/Form" className="box-border bg-blackA5 inline-flex appearance-none items-center justify-center rounded-[4px] p-[10px] text-[15px] w-40 h-10 float-right hover:bg-white hover:text-atendimento transition-all hover:font-semibold leading-none text-white shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA9 max-w-[500px] max-h-[90px]">
              fale com a gente
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
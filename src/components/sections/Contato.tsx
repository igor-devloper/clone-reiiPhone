import { WhatsappLogo } from "@phosphor-icons/react";
import { Form } from "../Form/Form";
import { Location } from "../Location/Location";

export function Contato() {
  return (
    <section id='contato' className="bg-gradient-to-tr from-from to-atendimento">
      <div className="">
        <div className="flex lg:justify-between lg:space-x-50 lg:mr-10">
          <span className="text-white lg:p-10 lg:ml-28 lg:mt-12 lg:text-4xl text-xl p-10 w-full font-bold">Venha conhecer nossa loja.</span>
          <div className=" lg:flex hidden items-center gap-2 text-white font-bold  text-xl ">
            <WhatsappLogo size={44} />
            <span className=""> 11 94558-0443</span>
          </div>
        </div>
        <div className="lg:gap-44 lg:flex hidden">
          <Form />
        </div>
        <div className="max-w-[670px]">
          <Location />
        </div>
        <div className=" lg:hidden flex flex-col gap-2 m-auto items-center justify-center p-10 gap-2 text-white font-bold  text-xl ">
          <WhatsappLogo size={44} />
          <span className=""> 11 94558-0443</span>
          <button className="box-border bg-blackA5 inline-flex appearance-none items-center justify-center rounded-[4px] p-[10px] text-[15px] w-40 h-10 float-right hover:bg-white hover:text-atendimento transition-all hover:font-semibold leading-none text-white shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA9 max-w-[500px] max-h-[90px]">
            fale com a gengte
          </button>
        </div>
      </div>
    </section>
  )
}
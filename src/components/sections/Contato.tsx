import { WhatsappLogo } from "@phosphor-icons/react";
import { Form } from "../Form";
import { Location } from "../Location";

export function Contato() {
  return (
    <section id='#contato' className="bg-gradient-to-tr from-from to-atendimento">
      <div className="">
        <div className="flex justify-between space-x-50 mr-10">
          <span className="text-white p-10 ml-28 mt-12 text-4xl font-bold">Venha conhecer nossa loja.</span>
          <div className=" flex items-center gap-2 text-white font-bold  text-xl ">
            <WhatsappLogo size={44} />
            <span> 11 94558-0443</span>
          </div>
        </div>
        <div className="flex gap-44">
          <Form />
          <Location/>
        </div>
      </div>
    </section>
  )
}
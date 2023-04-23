import { Root, Field, Label, Message, Control, Submit } from '@radix-ui/react-form';

export function FormResp() {
  return (
    <div className='bg-gradient-to-tr from-from to-atendimento w-full h-screen 10'>
      <a href="/" >
        <span className='absolute top-7 left-6 p-2 w-10 rounded text-atendimento font-bolt font-bold flex items-center justify-center text-2xl bg-white'>X</span>
      </a>
      <Root className="p-9 font-head space-y-10 max-w-[500px] m-auto mb-20">
        <Field className="grid mb-[10px]" name="nome">
          <div className="flex items-baseline justify-between">
            <Label className="text-white text-sm mb-2">Nome</Label>
            <Message className="text-[13px] text-whit" match="valueMissing">
              Digite seu Nome
            </Message>
          </div>
          <Control asChild>
            <input
              className="box-border bg-transparent font-head flex h-[35px] appearance-none items-center justify-center rounded-[4px] p-4 text-[14px] leading-none text-white shadow-[0_0_0_1px]  hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA9"
              type="text"
              required
              placeholder='Nome'
            />
          </Control>
        </Field>
        <Field className="grid mb-[10px]" name="email">
          <div className="flex items-baseline justify-between">
            <Label className="text-white text-sm mb-2">Email</Label>
            <Message className="text-[13px] text-whit" match="valueMissing">
              Digite seu Email
            </Message>
          </div>
          <Control asChild>
            <input
              className="box-border bg-transparent font-head flex h-[35px] appearance-none items-center justify-center rounded-[4px] p-4 text-[14px] leading-none text-white shadow-[0_0_0_1px]  hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA9"
              type="text"
              required
              placeholder='Nome'
            />
          </Control>
        </Field>
        <Field className="grid mb-[10px]" name="telefone">
          <div className="flex items-baseline justify-between">
            <Label className="text-white text-sm mb-2">Telefone</Label>
            <Message className="text-[13px] text-white" match="valueMissing">
              Digite seu Telefone
            </Message>
          </div>
          <Control asChild>
            <input
              className="box-border bg-transparent font-head flex h-[35px] appearance-none items-center justify-center rounded-[4px] p-4 text-[14px] leading-none text-white shadow-[0_0_0_1px]  hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA9"
              type="text"
              required
              placeholder='(11) 98765-4321'
            />
          </Control>
        </Field>
        <Field className="grid mb-[10px]" name="question">
          <div className="flex items-baseline justify-between">
            <Label className="text-[15px] font-medium leading-[35px] text-white">
              Mensagem
            </Label>
            <Message className="text-[13px] text-white" match="valueMissing">
              Digite uma Mensagem
            </Message>
          </div>
          <Control asChild>
            <textarea
              className="box-border w-full h-28 bg-blackA5 inline-flex appearance-none items-center justify-center rounded-[4px] p-[10px] text-[15px] leading-none text-white shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA9 max-w-[500px] max-h-[200px]"
              required
              placeholder='Escreva sua mensagem'
            />
          </Control>
        </Field>

        <Submit asChild>
          <button className="box-border bg-blackA5 inline-flex appearance-none items-center justify-center rounded-[4px] p-[10px] text-[15px] w-40 h-10 float-right hover:bg-white hover:text-atendimento transition-all hover:font-semibold leading-none text-white shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA9 max-w-[500px] max-h-[90px]">
            Enviar
          </button>
        </Submit>
      </Root>
    </div>
  );
}
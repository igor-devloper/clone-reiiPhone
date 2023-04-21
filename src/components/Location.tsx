import * as Tabs from '@radix-ui/react-tabs';
import tab1 from '../assets/tab1.png'
import tab2 from '../assets/tab2.png'
import { CaretUp } from '@phosphor-icons/react';

export function Location() {
  return (
    <Tabs.Root
      className="flex-1 m-10 flex-col bottom-56"
      defaultValue="tab1"
    >
      <Tabs.Content
        className="mb-10"
        value="tab1"
      >
        <a href="https://www.google.com/maps/place//data=!4m2!3m1!1s0x94ce5850b9b27e57:0x4d3f8cca5893ddd8?source=g.page.share" target='_blank' className='h-full'>
          <img src={tab1} alt="" />
        </a>
      </Tabs.Content>

      <Tabs.Content
        className="mb-4"
        value="tab2"
      >
        <a href="https://www.google.com/maps/place/Rei+do+iPhone+2%C2%AA+Unidade/@-23.5850316,-46.6781399,19z/data=!3m1!4b1!4m5!3m4!1s0x94ce57f3abdf5263:0xed9fbc5627e160e4!8m2!3d-23.5850316!4d-46.6775914?shorturl=1" target='_blank'>
          <img src={tab2} alt="" />
        </a>
      </Tabs.Content>
      <Tabs.List className="flex gap-4 mt-10 " aria-label="Manage your account">
        <Tabs.Trigger
          className="data-[state=active]:bg-white data-[state=active]:text-from data-[state=active]:p-2 data-[state=active]:rounded-md text-white "
          value="tab1"
        >
          <div className='items-center text-sm w-60 d '>
            <span className='font-head font-bold'>Rei do iPhone - Loja Sta Efigênia</span>
            <p>R. Santa Ifigênia, 78 - Santa Ifigênia
              São Paulo/SP - 01207-001</p>
          </div>
        </Tabs.Trigger>
        <Tabs.Trigger
          className="data-[state=active]:bg-white data-[state=active]:text-from data-[state=active]:p-2 data-[state=active]:rounded-md text-white"
          value="tab2"
        >
          <div className=''></div>
          <div className='items-center text-sm w-64 '>
            <span className='font-head font-bold'>Rei do iPhone - Loja João Cachoeira</span>
            <p className='font-thin'>R. João Cachoeira, 567 - Itaim Bibi
              São Paulo/SP - 04535-011</p>
          </div>
        </Tabs.Trigger>
      </Tabs.List>

    </Tabs.Root >
  )
}
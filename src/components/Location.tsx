import * as Tabs from '@radix-ui/react-tabs';
import tab1 from '/src/assets/tab1.png'
import tab2 from '/src/assets/tab2.png'

export function Location() {
  return (
    <Tabs.Root
      className="pr-32 ml-20 mb-20 "
      defaultValue="tab1"
    >
      <Tabs.Content
        className="mb-10"
        value="tab1"
      >
        <a href="https://www.google.com/maps/place//data=!4m2!3m1!1s0x94ce5850b9b27e57:0x4d3f8cca5893ddd8?source=g.page.share" target='_blank' className='h-full'>
          <img src={tab1} alt="" className='w-full lg:max-w-[600px] lg:pr-24' />
        </a>
      </Tabs.Content>

      <Tabs.Content
        className="mb-4"
        value="tab2"
      >
        <a href="https://www.google.com/maps/place/Rei+do+iPhone+2%C2%AA+Unidade/@-23.5850316,-46.6781399,19z/data=!3m1!4b1!4m5!3m4!1s0x94ce57f3abdf5263:0xed9fbc5627e160e4!8m2!3d-23.5850316!4d-46.6775914?shorturl=1" target='_blank'>
          <img src={tab2} alt="" className='w-full  lg:max-w-[600px] lg:pr-24' />
        </a>
      </Tabs.Content>
      <Tabs.List className="lg:flex lg:gap-4 w-screen lg:mt-10 flex lg:mr-36 transition-transform duration-200" aria-label="Manage your account">
        <Tabs.Trigger
          className="lg:flex hidden data-[state=active]:bg-white data-[state=active]:text-from data-[state=active]:p-2 data-[state=active]:rounded-md text-white "
          value="tab1"
        >
          <div className='items-center text-sm max-w-[200px]'>
            <span className='font-head font-bold'>Rei do iPhone - Loja Sta Efigênia</span>
            <p>R. Santa Ifigênia, 78 - Santa Ifigênia
              São Paulo/SP - 01207-001</p>
          </div>
        </Tabs.Trigger>
        <Tabs.Trigger
          className="lg:hidden flex w-full  transition-colors duration-100 data-[state=active]:bg-white data-[state=active]:text-from data-[state=active]:p-2 data-[state=active]:rounded-md text-white "
          value="tab1"
        >
          <div className='items-center text-xs'>
            <span className='font-head font-bold'>Loja Sta Efigênia</span>
            <p>R. Santa Ifigênia, 78
              Santa Ifigênia - SP</p>
          </div>
        </Tabs.Trigger>
        <Tabs.Trigger
          className="lg:flex hidden  data-[state=active]:bg-white data-[state=active]:text-from data-[state=active]:p-2 data-[state=active]:rounded-md text-white"
          value="tab2"
        >
          <div className=''></div>
          <div className='items-center text-sm w-64 '>
            <span className='font-head font-bold'>Rei do iPhone - Loja João Cachoeira</span>
            <p className='font-thin'>R. João Cachoeira, 567 - Itaim Bibi
              São Paulo/SP - 04535-011</p>
          </div>
        </Tabs.Trigger>
        <Tabs.Trigger
          className="lg:hidden w-screen  data-[state=active]:bg-white data-[state=active]:text-from data-[state=active]:p-2 data-[state=active]:rounded-md text-white "
          value="tab2"
        >
          <div className='items-center text-xs'>
            <span className='font-head font-bold'>Loja João Cachoeira</span>
            <p>R. João Cachoeira, 567
              Itaim Bibi - SP</p>
          </div>
        </Tabs.Trigger>
      </Tabs.List>

    </Tabs.Root >
  )
}
import dep1 from '/src/assets/dep1.png'
import dep2 from '/src/assets/dep2.png'
import dep3 from '/src/assets/dep3.png'
import dep4 from '/src/assets/dep4.png'
import dep5 from '/src/assets/dep5.png'
import dep6 from '/src/assets/dep6.png'
import dep7 from '/src/assets/dep7.png'




export function Depoimentos() {
  return (
    <section id='depoimentos' className='mb-24'>
      <div className='m-auto max-w-[965px]'>
        <h1 className='text-from  text-3xl flex justify-center font-bold mt-16 mb-4' data-aos="fade-up">Depoimentos</h1>
        <div className='lg:flex lg:gap-8 hidden'>
          <img src={dep1} alt="" className='max-w-[641px] max-h-[642px] cursor-pointer' />
          <div className='lg:grid lg:grid-cols-3 gap-4 hidden'>
            <img src={dep2} alt="" className='cursor-pointer' />
            <img src={dep3} alt="" className='cursor-pointer' />
            <img src={dep4} alt="" className='cursor-pointer' />
            <img src={dep5} alt="" className='cursor-pointer' />
            <img src={dep6} alt="" className='cursor-pointer' />
            <img src={dep7} alt="" className='cursor-pointer' />
          </div>
        </div>
        <div className='lg:hidden lg:gap-8 grid grid-cols-2 w-full gap-10 p-4'>
          <img src={dep1} alt="" className='max-w-[200px] max-h-[642px] cursor-pointer' />
          <img src={dep2} alt="" className='cursor-pointer h-full w-full' />
          <img src={dep3} alt="" className='cursor-pointer h-full w-full' />
          <img src={dep4} alt="" className='cursor-pointer h-full w-full'/>
          <img src={dep5} alt="" className='cursor-pointer h-full w-full' />
          <img src={dep6} alt="" className='cursor-pointer h-full w-full' />
          <img src={dep7} alt="" className='cursor-pointer h-full w-full' />
        </div>
      </div>
    </section>
  )
}
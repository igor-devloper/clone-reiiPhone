import img1 from '/src/assets/img1-atendimento.png'
import img2 from '/src/assets/img2-atendimento.png'
import img3 from '/src/assets/img3-atendimento.png'
import img4 from '/src/assets/img4-atendimento.png'
import img5 from '/src/assets/img5-atendimento.png'
import img6 from '/src/assets/img6-atendimento.png'


export function Atendimento() {
  return (
    <section className='bg-white font-head bg-fixed bg-cover bg-center' id='atendimento'>
      <div className='mt-24'>
        <h1 className='text-from text-3xl flex justify-center font-bold mb-8' data-aos="fade-up">Atendimento</h1>
        <div className="lg:flex lg:items-center lg:justify-center lg:text-xl lg:ml-[130px]">
          <img src={img1} alt="" className='flex w-full lg:w- lg:hidden' data-aos="fade-left" />
          <div className='lg:font-head lg:max-w-[272px]  lg:mr-16 text-atendimento max-w-[680] py-20 px-8 text-xs' data-aos="fade-right">
            <strong className='font-bold text-xl lg:text-bla'  >O cuidado que você e seu aparelho merecem</strong>
            <p className='mt-2 text-xs'>Para nós do Rei do iPhone, atender você bem é tão importante quanto oferecer uma assistência de qualidade ao seu aparelho da Apple. Somos uma equipe que conta com profissionais prontos para te proporcionar a melhor experiência possível. Estamos aqui para te ajudar sempre, desde uma tela rachada à um botão que não funciona.</p>
          </div>
          <img src={img1} alt="" className='lg:flex  hidden' data-aos="fade-left" />
        </div>
      </div>
      <div className='lg:flex lg:mx-44 lg:max-h-[332px]'>
        <img src={img2} alt="" className='lg:z-50 w-full max-h-[377px]'/>
        <div className='lg:w-[407px] lg:bg-main lg:p-10 hidden lg:flex' data-aos="fade-right">
          <h1 className='text-white text-2xl font-bold max-w-[219px] m-auto'>Agilidade e atendimento com atenção garantem a satisfação</h1>
          <p className='text-white text-sm max-w-[219px] m-auto'>Todos os nossos atendimentos são feitos individualmente e atenciosamente, respeitando a ordem das senhas retiradas na entrada, e assegurando um cliente satisfeito.</p>
        </div>
        <div className='lg:w-[407px] lg:bg-main lg:p-10 flex lg:hidden bg-main p-10 gap-2' data-aos="fade-down">
          <h1 className='text-white text-2xl font-bold ] m-auto'>Agilidade e atendimento com atenção garantem a satisfação</h1>
          <p className='text-white text-sm max-w-[219px] m-auto'>Todos os nossos atendimentos são feitos individualmente e atenciosamente, respeitando a ordem das senhas retiradas na entrada, e assegurando um cliente satisfeito.</p>
        </div>
      </div>
      <div className=''>
        <div className="lg:flex lg:items-center lg:justify-center lg:text-xl lg:ml-[130px]">
          <img src={img3} alt="" className='lg:hidden flex' data-aos="fade-up" />
          <div className='font-head lg:max-w-[272px] lg:mr-16 text-atendimento py-20 px-8 text-xs' data-aos="fade-right">
            <strong className='font-bold text-xl'>Mundo Pão do Olivier</strong>
            <p className='lg:mt-2 lg:text-base' >Aqui no Rei do iPhone temos um amplo espaço para circulação, elevadores e acesso facilitado, com toda a segurança e tranquilidade. Você também encontra um confortável café pra relaxar e comer um lanche enquanto espera nossa assistência. (Disponível na unidade Santa Ifigênia)</p>
          </div>
          <img src={img3} alt="" className='lg:flex hidden' data-aos="fade-left" />
        </div>
      </div>
      <div className='lg:flex '>
        <div className='lg:pl-44' data-aos="fade-right">
          <img src={img4} alt="" className='flex bg-center items-center justify-center m-auto' data-aos="fade-right"/>
        </div>
        <div className=' lg:m-auto text-atendimento py-20 px-8 text-xs' data-aos="fade-down">
          <h1 className='lg:mt-4 text-xl font-bold lg:max-w-[191px]'>Reparo que você vê</h1>
          <p className='lg:mt-[12px] text-xs lg:max-w-[204px]'>No Rei do iPhone, trabalhamos com total transparência. Por isso, a maioria dos reparos são feitos com o celular aberto na frente do cliente. Isso significa que você pode acompanhar tudo bem de pertinho, passo a passo, seja bateria viciada ou um aparelho sem áudio. Ainda, você tem a oportunidade de tirar suas dúvidas durante o processo, e ter certeza da privacidade e segurança que a nossa assistência proporciona.</p>
        </div>
        <div data-aos="fade-left" className='lg:mr-[100px] w-full flex'>
          <img src={img5} alt="" className='flex bg-center items-center justify-center m-auto'/>
        </div>
      </div>
      <div className='lg:flex lg:mb-36 llg:bg-fixed'>
        <img src={img6} alt="" className='lg:ml-[570px] lg:flex hidden' data-aos="fade-up" />
        <div className='lg:w-[357px] lg:h-[346px] bg-main lg:mt-72 '>
          <div className='text-white p-14'>
            <h1 className='text-xl font-bold' data-aos="fade-up-left">Aparelhos reparados rapidinho</h1>
            <p className='mt-4' data-aos="fade-up-left">Arrumamos aparelhos super rápido. Nossos reparos de iPhone duram, em média, 30 minutos. Mas, caso seja necessário mais tempo, avisamos nossos clientes com antecedência.</p>
          </div>
        </div>
          <img src={img6} alt="" className='lg:ml-[570px] lg:hidden flex m-auto' data-aos="fade-up" />
      </div>
    </section>
  )
}
import img1 from '../assets/img1-atendimento.png'
import img2 from '../assets/img2-atendimento.png'
import img3 from '../assets/img3-atendimento.png'
import img4 from '../assets/img4-atendimento.png'
import img5 from '../assets/img5-atendimento.png'
import img6 from '../assets/img6-atendimento.png'


export function Atendimento() {
  return (
    <section className='bg-white font-head' id='#atendimento'>
      <div className='mt-24 '>
        <h1 className='text-blue-900 text-4xl flex justify-center font-bold mb-8' data-aos="fade-up">Atendimento</h1>
        <div className="flex items-center justify-center text-xl ml-[130px]">
          <div className='font-head max-w-[272px] mr-16 text-atendimento' data-aos="fade-right">
            <strong className='font-bold text-xl' >O cuidado que você e seu aparelho merecem</strong>
            <p className='mt-2 text-base'>Para nós do Rei do iPhone, atender você bem é tão importante quanto oferecer uma assistência de qualidade ao seu aparelho da Apple. Somos uma equipe que conta com profissionais prontos para te proporcionar a melhor experiência possível. Estamos aqui para te ajudar sempre, desde uma tela rachada à um botão que não funciona.</p>
          </div>
          <img src={img1} alt="" className='flex' data-aos="fade-left" />
        </div>
      </div>
      <div className='flex mx-44 max-h-[332px]'>
        <img src={img2} alt="" className='z-50' />
        <div className='w-[407px] bg-main p-10 ' data-aos="fade-right">
          <h1 className='text-white text-2xl font-bold max-w-[219px] m-auto'>Agilidade e atendimento com atenção garantem a satisfação</h1>
          <p className='text-white text-sm max-w-[219px] m-auto'>Todos os nossos atendimentos são feitos individualmente e atenciosamente, respeitando a ordem das senhas retiradas na entrada, e assegurando um cliente satisfeito.</p>
        </div>
      </div>
      <div className=''>
        <div className="flex items-center justify-center text-xl ml-[130px]">
          <div className='font-head max-w-[272px] mr-16 text-atendimento' data-aos="fade-right">
            <strong className='font-bold text-xl' >Mundo Pão do Olivier</strong>
            <p className='mt-2 text-base'>Aqui no Rei do iPhone temos um amplo espaço para circulação, elevadores e acesso facilitado, com toda a segurança e tranquilidade. Você também encontra um confortável café pra relaxar e comer um lanche enquanto espera nossa assistência. (Disponível na unidade Santa Ifigênia)</p>
          </div>
          <img src={img3} alt="" className='flex' data-aos="fade-left" />
        </div>
      </div>
      <div className='flex'>
        <div className='pl-44' data-aos="fade-right">
          <img src={img4} alt="" />
        </div>
        <div className=' m-auto text-atendimento' data-aos="fade-down">
          <h1 className='mt-4 text-xl font-bold max-w-[191px]'>Reparo que você vê</h1>
          <p className='mt-[12px] text-base max-w-[204px]'>No Rei do iPhone, trabalhamos com total transparência. Por isso, a maioria dos reparos são feitos com o celular aberto na frente do cliente. Isso significa que você pode acompanhar tudo bem de pertinho, passo a passo, seja bateria viciada ou um aparelho sem áudio. Ainda, você tem a oportunidade de tirar suas dúvidas durante o processo, e ter certeza da privacidade e segurança que a nossa assistência proporciona.</p>
        </div>
        <div  data-aos="fade-left" className='mr-[100px]'>
          <img src={img5} alt="" />
        </div>
      </div>
      <div className='flex'>
        <img src={img6} alt="" className='ml-[570px]' data-aos="fade-up"/>
        <div className='w-[357px] h-[346px] bg-main mt-72'>
          <div className='text-white p-14'>
            <h1 className='text-xl font-bold' data-aos="fade-up-left">Aparelhos reparados rapidinho</h1>
            <p className='mt-4' data-aos="fade-up-left">Arrumamos aparelhos super rápido. Nossos reparos de iPhone duram, em média, 30 minutos. Mas, caso seja necessário mais tempo, avisamos nossos clientes com antecedência.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
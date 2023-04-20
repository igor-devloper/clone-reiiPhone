import img1 from '../assets/img1-atendimento.png'
import img2 from '../assets/img2-atendimento.png'
import img3 from '../assets/img3-atendimento.png'
import img4 from '../assets/img4-atendimento.png'
import img5 from '../assets/img5-atendimento.png'
import img6 from '../assets/img6-atendimento.png'


export function Atendimento() {
  return (
    <section className='bg-white' id='#atendimento'>
      <div className='mt-24 '>
        <h1 className='text-blue-900 text-4xl flex justify-center font-bold mb-8' data-aos="fade-up">Atendimento</h1>
        <div className="flex items-center justify-center text-xl ml-20">
          <div className='font-head max-w-[272px] mr-16 text-atendimento' data-aos="fade-right">
            <strong className='font-bold text-xl' >O cuidado que você e seu aparelho merecem</strong>
            <p className='mt-2 text-base'>Para nós do Rei do iPhone, atender você bem é tão importante quanto oferecer uma assistência de qualidade ao seu aparelho da Apple. Somos uma equipe que conta com profissionais prontos para te proporcionar a melhor experiência possível. Estamos aqui para te ajudar sempre, desde uma tela rachada à um botão que não funciona.</p>
          </div>
          <img src={img1} alt="" className='flex mb-10' data-aos="fade-left" />
        </div>
      </div>
      <div>

      </div>
      <div>

      </div>
      <div>

      </div>
      <div>

      </div>
    </section>
  )
}
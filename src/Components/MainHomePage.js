import svg from '../book.svg'
const features = [
  {
    name: 'Por Que Escolher os Serviços do Didacto?',
    description:
      'O Didacto oferece uma abordagem abrangente para o gerenciamento de livros didáticos, desde o cadastro até o controle de estoque. Nossa plataforma intuitiva e repleta de recursos avançados otimiza os processos para instituições de todos os tamanhos, garantindo que educadores e alunos tenham acesso contínuo aos recursos necessários para o sucesso acadêmico.',
  },
  {
    name: 'Capacitando Educadores e Alunos',
    description:
      'Nossa missão é capacitar educadores, fornecendo ferramentas robustas para o gerenciamento eficiente de recursos educacionais. Além de simplificar a catalogação e organização de livros, o Didacto incentiva a colaboração entre educadores, permitindo o compartilhamento de melhores práticas e materiais de ensino.',
  },
  {
    name: 'Junte-se à Evolução Educacional',
    description:
      'Ao escolher o Didacto, você está abraçando a inovação na educação. Convidamos você a fazer parte desta jornada transformadora, contribuindo para aprimorar as experiências de aprendizagem de estudantes em todo o mundo. Juntos, estamos moldando o futuro da educação.',
  },
  {
    name: 'Segurança Avançada',
    description:
      'Utilizamos as melhores tecnologias do mercado e para a sua melhor experiencia e utilização das nossas plataformas',
  },
]

export default function MainHomePage() {
  return (
    <div className="bg-white py-24 sm:py-32">

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
        <h2 className="text-base font-semibold leading-7" style={{color : '#00A8F4'}}>Revolutionizando o Acesso ao Conhecimento</h2>
            <div className="d-flex ">  
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Bem-vindo ao Didacto: Transformando a Educação através do Controle de Livros Didáticos
          </p>
                    </div>

        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-neutral-200">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path opacity="0.5" d="M12 20.0283V18H8L8 20.0283C8 20.3054 8 20.444 8.09485 20.5C8.18971 20.556 8.31943 20.494 8.57888 20.3701L9.82112 19.7766C9.9089 19.7347 9.95279 19.7138 10 19.7138C10.0472 19.7138 10.0911 19.7347 10.1789 19.7767L11.4211 20.3701C11.6806 20.494 11.8103 20.556 11.9051 20.5C12 20.444 12 20.3054 12 20.0283Z" fill="#00A8F4"></path> <path d="M8 18H7.42598C6.34236 18 5.96352 18.0057 5.67321 18.0681C5.15982 18.1785 4.71351 18.4151 4.38811 18.7347C4.27837 18.8425 4.22351 18.8964 4.09696 19.2397C3.97041 19.5831 3.99045 19.7288 4.03053 20.02C4.03761 20.0714 4.04522 20.1216 4.05343 20.1706C4.16271 20.8228 4.36259 21.1682 4.66916 21.4142C4.97573 21.6602 5.40616 21.8206 6.21896 21.9083C7.05566 21.9986 8.1646 22 9.75461 22H14.1854C15.7754 22 16.8844 21.9986 17.7211 21.9083C18.5339 21.8206 18.9643 21.6602 19.2709 21.4142C19.5774 21.1682 19.7773 20.8228 19.8866 20.1706C19.9784 19.6228 19.9965 18.9296 20 18H12V20.0283C12 20.3054 12 20.444 11.9051 20.5C11.8103 20.556 11.6806 20.494 11.4211 20.3701L10.1789 19.7767C10.0911 19.7347 10.0472 19.7138 10 19.7138C9.95279 19.7138 9.9089 19.7347 9.82112 19.7766L8.57888 20.3701C8.31943 20.494 8.18971 20.556 8.09485 20.5C8 20.444 8 20.3054 8 20.0283V18Z" fill="#00A8F4"></path> <path opacity="0.5" d="M4.72718 2.73332C5.03258 2.42535 5.46135 2.22456 6.27103 2.11478C7.10452 2.00177 8.2092 2 9.7931 2H14.2069C15.7908 2 16.8955 2.00177 17.729 2.11478C18.5387 2.22456 18.9674 2.42535 19.2728 2.73332C19.5782 3.0413 19.7773 3.47368 19.8862 4.2902C19.9982 5.13073 20 6.24474 20 7.84202L20 18H7.42598C6.34236 18 5.96352 18.0057 5.67321 18.0681C5.15982 18.1785 4.71351 18.4151 4.38811 18.7347C4.27837 18.8425 4.22351 18.8964 4.09696 19.2397C4.02435 19.4367 4 19.5687 4 19.7003V7.84202C4 6.24474 4.00176 5.13073 4.11382 4.2902C4.22268 3.47368 4.42179 3.0413 4.72718 2.73332Z" fill="#00A8F4"></path> <path d="M7.25 7C7.25 6.58579 7.58579 6.25 8 6.25H16C16.4142 6.25 16.75 6.58579 16.75 7C16.75 7.41421 16.4142 7.75 16 7.75H8C7.58579 7.75 7.25 7.41421 7.25 7Z" fill="#00A8F4"></path> <path d="M8 9.75C7.58579 9.75 7.25 10.0858 7.25 10.5C7.25 10.9142 7.58579 11.25 8 11.25H13C13.4142 11.25 13.75 10.9142 13.75 10.5C13.75 10.0858 13.4142 9.75 13 9.75H8Z" fill="#00A8F4"></path> </g></svg>
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
          </div>
  )
}

import Aos from "aos"
import { useEffect } from "react"

const people = [
    {
      name: 'Felipe Momesso',
      role: 'Project Manager / Full stack',
      imageUrl:
        'https://i.ibb.co/3cBKyXn/Whats-App-Image-2023-08-21-at-13-43-45.jpg',
    },
    {
      name: 'Caio Marins',
      role: 'Backend Developer',
      imageUrl:
        'https://i.ibb.co/995Y7ZM/Whats-App-Image-2023-08-21-at-13-21-42.jpg',
    },
    {
      name: 'Guilherme Sales',
      role: 'DataBase Developer',
      imageUrl:
        'https://i.ibb.co/42hcjZW/Whats-App-Image-2023-08-21-at-19-28-33.jpg',
    },
    {
      name: 'Carleandro Gomes',
      role: 'Designer / FrontEnd Developer',
      imageUrl:
        'https://i.ibb.co/BthTLXb/Whats-App-Image-2023-08-22-at-19-41-15.jpg',
    },
    {
      name: 'Fabiana Bonifacio',
      role: 'FullStack Developer',
      imageUrl:
        'https://i.ibb.co/HF4rF9x/Whats-App-Image-2023-08-22-at-21-37-32.jpg',
    },
    
  ]
  
  export default function Team() {
    useEffect(() => {
      Aos.init();
    }, [])
    return (
      <div  className="bg-white py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
          <div data-aos="fade-up" className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Conheça nossa equipe</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
             Estamos trabalhando na melhor forma de melhorar o sistema para o cadastro
            </p>
          </div>
          <ul  role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
            {people.map((person) => (
              <li data-aos="fade-up" key={person.name}>
                <div className="flex items-center gap-x-6">
                  <img className="h-16 w-16 rounded-full" src={person.imageUrl} alt="" />
                  <div>
                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                    <p className="text-sm font-semibold leading-6 texto">{person.role}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
  

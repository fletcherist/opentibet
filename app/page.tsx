import Image from 'next/image'


import { BackgroundSlider, Arrow, PhotoGallery, FAQ } from '../components/components'


export default function Home() {

  // const backgroundImageUrl = 'https://downloader.disk.yandex.ru/preview/7c934c34aeb3afccf224c723f98841ce270e22cb26e7c0a8d9f002c3e5b8a3dd/65293fe3/L1sEtzb6m2fyknzu_fd_YnrYpZEqDsNpW6nAFt2plIsrgbMBIr7R9wmjRk2sv0JgkDL4dWbgZgAB2B9raCXXnQ%3D%3D?uid=0&filename=39f89fbd0aea0779c5a622aa8e221ec9.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=1466x1782'
  return (
    <main className="flex min-h-screen flex-col items-center justify-between max-w-2xl">
      <div className='w-full h-[92vh] relative'>
        <BackgroundSlider />
        {/* <div className='absolute inset-0 bg-black opacity-20'></div> */}
        <div className='absolute inset-0' style={{ backgroundImage: 'linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0))' }} />
        <div className='h-full flex flex-col justify-center px-4 md:px-20 relative z-10'>
          <div className='text-gray-200 font-bold text-2xl md:text-4xl lg:text-5xl'>
            Откройте для себя Тибет
          </div>
          <div className='text-gray-300 py-2 pr-6 text-base md:text-xl'>
            Эксклюзивные маршруты по доступным ценам
          </div>
          <div className='py-4'>
            <ActionButton />
          </div>
        </div>
        <div className='absolute bottom-0 z-10 w-full'>
          <Arrow />
        </div>
      </div>


      <div className='p-4'>
        {/* <div className='text-center text-gray-900 text-2xl font-bold md:text-4xl lg:text-5xl py-2 tracking-widest'>
          OPEN TIBET
        </div> */}
        <div className='flex justify-center'>
          <img src="https://storage.googleapis.com/opentibet/logo-1.jpg" width={200} />
        </div>

        <div className='py-4'>
          <h2 className="mb-2 text-lg font-semibold text-gray-900">OPEN TIBET - это совместный туристический проект</h2>
          <ul className="max-w-md space-y-1 text-gray-900 list-disc list-inside ">
            <li>
              Тибетского туристического офиса (правительство Тибета)
            </li>
            <li>
              Tash Delek travel agency, Тибет, Лхаса (<a href="https://www.tibettour.travel" className='text-sm font-semibold text-blue-500 hover:text-blue-700' target='_blank'>https://www.tibettour.travel</a>)
            </li>
            <li>
              Kailash-explorer agency, Россия, Санкт Петербург
            </li>
          </ul>

          <p className='py-6'>
            Ключевая цель проекта - сделать Тибет <b>доступнее для всех желающих</b>. Поэтому в рамках данного проекта мы заключили эксклюзивные контракты и смогли добиться наилучших предложений чтобы гарантировать поломникам:.
            <ul className='py-4 max-w-md space-y-1 list-inside'>
              <li className="flex items-center">
                <svg className="w-3.5 h-3.5 mr-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                размещение в хороших отелях
              </li>
              <li className="flex items-center">
                <svg className="w-3.5 h-3.5 mr-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                качественный транспорт
              </li>
              <li className="flex items-center">
                <svg className="w-3.5 h-3.5 mr-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                квалифицированных гидов
              </li>
              <li className="flex items-center">
                <svg className="w-3.5 h-3.5 mr-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                по самым низким ценам
              </li>
            </ul>
          </p>
        </div>
      </div>

      {/* <ul className="list-disc list-inside">
        <li className="mb-2">Высокогорные пейзажи: Тибет славится своими величественными высокогорными пейзажами, включая Монт-Эверест и Канченджунгу. Эти места предоставляют непередаваемые виды и приключения для любителей горных походов.</li>
        <li className="mb-2">Духовное наследие: Тибет - родина буддизма и дом для множества духовных практик и ритуалов. Монастыри и храмы, находящиеся среди гор и долин, погружают вас в атмосферу покоя и медитации.</li>
        <li className="mb-2">Культурная уникальность: Культура Тибета удивляет своей уникальностью, включая традиционные праздники, музыку, танцы и удивительные ремесла. Этот регион также известен своей гостеприимностью и теплотой его народа.</li>
        <li className="mb-2">Духовные практики: Тибет предоставляет возможность погрузиться в духовные практики и медитации, обрести внутренний покой и гармонию.</li>
        <li className="mb-2">Природная красота: Высокогорные озера, такие как Намтсо и Манасаровар, являются жемчужинами Тибета. Здесь вы можете наслаждаться кристально чистой водой и окружающей красотой.</li>
      </ul> */}

      <div >
        <div className='flex px-4'>
          <div className="w-32 h-32">
            <img
              className="object-cover rounded-full w-full h-full"
              src="https://storage.googleapis.com/opentibet/alexey-portrait.jpeg"
              alt="profile picture"
            />
          </div>
          <div className='flex items-center flex-1 pl-4'>
            <div>
              <div className='text-xl font-bold text-gray-800'>Алексей Перчуков</div>
              <div className='text-sm text-gray-400 pt-1'>Координатор проекта</div>
              <a href='https://www.instagram.com/kailash_explorer/' className='text-sm font-semibold text-blue-500 hover:text-blue-700' target='_blank'>@kailash_explorer</a>
            </div>
          </div>
        </div>
        <div className='p-4'>
          Автор нескольких профессиональных путеводителей по Тибету на русском языке, со-автор фильма “Тибет, место которое меняет жизнь”. Докладчик многочисленных международных конференции, посвященных Кайласу. Автор статьи “ Спиральная Кора”, исследователь , который поднялся на все плечи Кайласа и посетил все священные долины Мандалы Кайласа.
        </div>
        <div className="grid grid-cols-2 gap-1">
          <img src="https://storage.googleapis.com/opentibet/alex-1.jpg" className="col-start-1 col-end-3 rounded-sm cursor-pointer" />
          <img src="https://storage.googleapis.com/opentibet/alex-6.jpg" className="col-start-1 col-end-2 row-start-2 row-end-4 rounded-sm cursor-pointer" />
          <img src="https://storage.googleapis.com/opentibet/alex-2.jpg" className="col-start-2 col-end-3 row-start-2 row-end-3 rounded-sm cursor-pointer" />
          <img src="https://storage.googleapis.com/opentibet/alex-4.jpg" className="col-start-2 col-end-3 rounded-sm cursor-pointer" />
        </div>

        <div className='text-center p-4'>
          <p className='text-gray-400 text-sm'>
            Больше фото в <a href='https://www.instagram.com/kailash_explorer/' className='text-blue-500 hover:text-blue-700' target='_blank'>Instagram</a>
          </p>
        </div>
      </div>

      <div className='w-full'>
        <div className='px-4 py-2'>
          <div className='text-gray-900 font-semibold text-xl md:text-4xl lg:text-5xl'>
            Посмотрите фильм о Тибете
          </div>
          <div className='text-gray-600 pr-6 text-base md:text-xl'>
            снятый{' '}
            <a href='https://www.instagram.com/kailash_explorer/' className='text-blue-500 hover:text-blue-700' target='_blank'>Алексеем Перчуковым</a>
          </div>

          <p className='py-4 pb-0'>
            Мы организуем регулярные ежемесячные туры в Тибет по уникальной программе. Пример программы можно посмотреть в фильме “Тибет, место которое меняет жизнь”, снятом в одном из таких туров:
          </p>
        </div>
        <div className='w-full'>
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/OhtIDb8ioT0?si=rnbXixWvQlm4pVIA"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen />
        </div>
      </div>

      <div>
        <div className='text-gray-900 font-semibold text-2xl md:text-4xl lg:text-5xl py-10 text-center'>
          Почему стоит ехать<br /> в Тибет с нами?
        </div>

      </div>

      <div className='text-gray-900 font-semibold text-2xl md:text-4xl lg:text-5xl py-10'>
        Отзывы участников
      </div>
      <div className="grid mb-8 border border-gray-200 rounded-lg shadow-sm md:mb-12 md:grid-cols-2">
        <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border-r">
          <figcaption className="flex items-center justify-center space-x-3">
            <img className="rounded-full w-9 h-9" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png" alt="profile picture" />
            <div className="space-y-0.5 font-medium text-left">
              <div>Людмила К.</div>
              <div className="text-sm text-gray-500">Участница экспедиции 2021</div>
            </div>
          </figcaption>
          <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8">
            <p className="my-4">Спасибо за возможность познакомиться с Тибетом так близко и интимно. Это было невероятное путешествие в мире медитаций и красоты природы. Ваша компания сделала это возможным, и я вам очень благодарна.</p>
          </blockquote>
        </figure>
        <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border-r">
          <figcaption className="flex items-center justify-center space-x-3">
            <img className="rounded-full w-9 h-9" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png" alt="profile picture" />
            <div className="space-y-0.5 font-medium text-left">
              <div>Марк и Сара</div>
              <div className="text-sm text-gray-500">Участники экспедиции 2019</div>
            </div>
          </figcaption>
          <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8">
            <p className="my-4">Это было наше первое путешествие в Тибет, и мы в восторге! Опыт был духовно поднимающим и вдохновляющим. Организация маршрута и качество услуг были выше всяких похвал. Мы обязательно вернемся снова!</p>
          </blockquote>

        </figure>
        <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border-r">
          <figcaption className="flex items-center justify-center space-x-3">
            <img className="rounded-full w-9 h-9" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png" alt="profile picture" />
            <div className="space-y-0.5 font-medium text-left">
              <div>Джон С</div>
              <div className="text-sm text-gray-500">Экспедиция 2022</div>
            </div>
          </figcaption>
          <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8">
            <p className="my-4">Моя поездка в Тибет с этой компанией оказалась невероятным приключением! Горы, монастыри и доброжелательные люди сделали это путешествие незабываемым. Организация была на высшем уровне, и я чувствовал себя в надежных руках на протяжении всей поездки.</p>
          </blockquote>

        </figure>
      </div>

      <div className='text-gray-900 font-semibold text-2xl md:text-4xl lg:text-5xl py-2'>
        Часто задаваемые вопросы
      </div>
      <FAQ />

      <div className='text-gray-900 font-semibold text-2xl md:text-4xl lg:text-5xl py-2'>
        Фото с прошлых туров
      </div>
      <PhotoGallery />

      <div className='relative'>
        <div className='absolute inset-0' style={{ backgroundImage: 'linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0))' }} />
        <div className='absolute h-full w-full'>
          <div className='flex h-full items-center justify-center'>
            <div className='text-gray-200 font-bold text-3xl md:text-4xl lg:text-5xl p-8'>
              До втречи в Тибете.
            </div>
          </div>
        </div>
        <video src='https://storage.googleapis.com/opentibet/doors.mp4' autoPlay muted loop></video>
      </div>
      <Copyright />
    </main>
  )
}


const ActionButton = () => {
  return (
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center">
      Смотреть программу на 2024
    </button>
  )
}

const Copyright: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="text-center text-gray-500 text-sm py-4">
      &copy; {currentYear} All rights reserved.
    </div>
  );
};




import Image from 'next/image'


import { BackgroundSlider, Arrow, PhotoGallery, FAQ } from '../components/components'

export default function Home() {

  // const backgroundImageUrl = 'https://downloader.disk.yandex.ru/preview/7c934c34aeb3afccf224c723f98841ce270e22cb26e7c0a8d9f002c3e5b8a3dd/65293fe3/L1sEtzb6m2fyknzu_fd_YnrYpZEqDsNpW6nAFt2plIsrgbMBIr7R9wmjRk2sv0JgkDL4dWbgZgAB2B9raCXXnQ%3D%3D?uid=0&filename=39f89fbd0aea0779c5a622aa8e221ec9.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=1466x1782'
  return (
    <main className="flex min-h-screen flex-col items-center justify-between max-w-2xl">
      <div className='w-full h-[80vh] relative'>
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
        <div className='pt-10'>
          <h2 className="text-lg font-semibold text-gray-900 text-center">OPEN TIBET – это совместный туристический проект</h2>
          <ul className="py-8 max-w-md space-y-6 list-inside">
            <li className="flex items-center">
              <IconBookmark />
              <div>
                <span className='font-semibold'>Тибетского туристического офиса</span>{' '}<span>правительство Тибета</span>
              </div>

            </li>
            <li className="flex flex-wrap items-center">
              <IconBookmark />
              <div>
                <span className='font-semibold'>Tash Delek travel agency</span><br /> Тибет, Лхаса
              </div>

              {/* (<a href="https://www.tibettour.travel" className='text-sm font-semibold text-blue-500 hover:text-blue-700' target='_blank'>https://www.tibettour.travel</a>) */}
            </li>
            <li className="flex items-center">
              <IconBookmark />
              <div>
                <span className='font-semibold'>
                  Kailash-explorer agency
                </span><br /> Россия, Санкт Петербург
              </div>

            </li>
          </ul>
          <div className='flex pt-4'>
            <div className="w-[33%] flex items-center justify-center">
              <img src="https://storage.googleapis.com/opentibet/china-tibet-tour.jpg" className="w-[80%] rounded-sm cursor-pointer" />
            </div>
            <div className="w-[33%] flex items-center justify-center">
              <img src="https://storage.googleapis.com/opentibet/tashidelek-logo.jpg" className="w-[80%] rounded-sm cursor-pointer" />
            </div>
            <div className="w-[33%] flex items-center justify-center">
              <img src="https://storage.googleapis.com/opentibet/kailash-explorer-logo.jpg" className="w-[90%] rounded-sm cursor-pointer" />
            </div>
          </div>

          <p className='pt-10 leading-7'>
            Ключевая цель проекта - сделать Тибет <b>доступнее для всех желающих</b>. Поэтому в рамках данного проекта мы заключили эксклюзивные контракты и смогли добиться наилучших предложений чтобы гарантировать поломникам:
          </p>
          <ul className='py-4 max-w-md space-y-2 list-inside'>
            <li className="flex items-center">
              <IconMark />
              Размещение в хороших отелях
            </li>
            <li className="flex items-center">
              <IconMark />
              Качественный транспорт
            </li>
            <li className="flex items-center">
              <IconMark />
              Квалифицированных гидов
            </li>
            <li className="flex items-center">
              <IconMark />
              По самым низким ценам
            </li>
          </ul>
        </div>
      </div>

      {/* <ul className="list-disc list-inside">
        <li className="mb-2">Высокогорные пейзажи: Тибет славится своими величественными высокогорными пейзажами, включая Монт-Эверест и Канченджунгу. Эти места предоставляют непередаваемые виды и приключения для любителей горных походов.</li>
        <li className="mb-2">Духовное наследие: Тибет - родина буддизма и дом для множества духовных практик и ритуалов. Монастыри и храмы, находящиеся среди гор и долин, погружают вас в атмосферу покоя и медитации.</li>
        <li className="mb-2">Культурная уникальность: Культура Тибета удивляет своей уникальностью, включая традиционные праздники, музыку, танцы и удивительные ремесла. Этот регион также известен своей гостеприимностью и теплотой его народа.</li>
        <li className="mb-2">Духовные практики: Тибет предоставляет возможность погрузиться в духовные практики и медитации, обрести внутренний покой и гармонию.</li>
        <li className="mb-2">Природная красота: Высокогорные озера, такие как Намтсо и Манасаровар, являются жемчужинами Тибета. Здесь вы можете наслаждаться кристально чистой водой и окружающей красотой.</li>
      </ul> */}

      <WhyGoTibetWithUs />


      <div className='w-full pt-8'>
        <div className='px-4 py-2'>
          <div className='text-gray-900 font-semibold text-xl md:text-4xl lg:text-5xl'>
            Посмотрите фильм о Тибете
          </div>
          <div className='pt-1 pr-6 md:text-xl'>
            снятый{' '}
            <a href='https://www.instagram.com/kailash_explorer/' className='text-blue-600 hover:text-blue-700 font-semibold' target='_blank'>Алексеем Перчуковым</a>
          </div>

          <p className='py-4 pb-0 leading-7'>
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
      <div className="pt-10">
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
        <div className='p-4 leading-7'>
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


      <div className='text-gray-900 font-semibold text-xl md:text-4xl lg:text-5xl pt-10 pb-5'>
        Отзывы участников
      </div>
      <div className="grid mb-8 rounded-lg md:mb-12 md:grid-cols-2">
        <Review name="Людмила К." subtitle='Участница экспедиции 2021' text='Спасибо за возможность познакомиться с Тибетом так близко и интимно. Это было невероятное путешествие в мире медитаций и красоты природы. Ваша компания сделала это возможным, и я вам очень благодарна.' />
        <Review name="Марк и Сара" subtitle='Участники экспедиции 2019' text='Это было наше первое путешествие в Тибет, и мы в восторге! Опыт был духовно поднимающим и вдохновляющим. Организация маршрута и качество услуг были выше всяких похвал. Мы обязательно вернемся снова!' />
        <Review name="Джон С" subtitle='Экспедиция 2022' text='Моя поездка в Тибет с этой компанией оказалась невероятным приключением! Горы, монастыри и доброжелательные люди сделали это путешествие незабываемым. Организация была на высшем уровне, и я чувствовал себя в надежных руках на протяжении всей поездки.' />
      </div>

      <div className='text-gray-900 font-semibold text-xl md:text-4xl lg:text-5xl py-2'>
        Часто задаваемые вопросы
      </div>
      <FAQ />

      <div className='pt-10' />
      <div className='text-gray-900 font-semibold text-xl md:text-4xl lg:text-5xl pt-2'>
        Фото с прошлых туров
      </div>
      <div className="text-xs text-gray-400 pb-6">нажмите на фото, чтобы открыть галерею</div>
      <div>
        <PhotoGallery />
      </div>

      <div className='relative pt-1'>
        <div className='absolute inset-0' style={{ backgroundImage: 'linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0))' }} />
        <div className='absolute h-full w-full'>
          <div className='flex h-full items-center justify-center'>
            <div className='text-gray-200 font-bold text-3xl md:text-4xl lg:text-5xl p-8'>
              До втречи в Тибете.
            </div>
          </div>
        </div>
        <video src='https://storage.googleapis.com/opentibet/doors.mp4' autoPlay muted loop playsInline></video>
      </div>

      <div className='max-w-[30vh]'>
        <div className='flex pt-8'>
          <div className="w-[33%] flex items-center justify-center">
            <img src="https://storage.googleapis.com/opentibet/china-tibet-tour.jpg" className="w-[80%] rounded-sm cursor-pointer" style={{ filter: 'grayscale(100%) opacity(60%)' }} />
          </div>
          <div className="w-[33%] flex items-center justify-center">
            <img src="https://storage.googleapis.com/opentibet/tashidelek-logo.jpg" className="w-[80%] rounded-sm cursor-pointer" style={{ filter: 'grayscale(100%) opacity(60%)' }} />
          </div>
          <div className="w-[33%] flex items-center justify-center">
            <img src="https://storage.googleapis.com/opentibet/kailash-explorer-logo.jpg" className="w-[90%] rounded-sm cursor-pointer" style={{ filter: 'grayscale(100%) opacity(60%)' }} />
          </div>
        </div>
      </div>


      <Copyright />
    </main>
  )
}

const Review: React.FC<{
  name: string;
  subtitle: string;
  text: string
}> = ({ name, subtitle, text }) => {
  return (
    <figure className="flex flex-col p-4 bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border-r">
      <figcaption className="flex items-center space-x-3">
        <img className="rounded-full w-12 h-12" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png" alt="profile picture" />
        <div className="space-y-0.5 font-medium text-left">
          <div>{name}</div>
          <div className="text-xs text-gray-700">{subtitle}</div>
        </div>
      </figcaption>
      <blockquote className="max-w-2xl mx-auto text-gray-800 text-sm lg:mb-8 leading-6">
        <p className="my-3">{text}</p>
      </blockquote>
    </figure>
  )
}

const IconMark = () => {
  return (
    <svg className="w-3.5 h-3.5 mr-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
    </svg>
  )
}

const IconBookmark = () => {
  return (
    <svg className="w-4 h-4 text-gray-300 mr-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 14 20">
      <path d="M13 20a1 1 0 0 1-.64-.231L7 15.3l-5.36 4.469A1 1 0 0 1 0 19V2a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v17a1 1 0 0 1-1 1Z" />
    </svg>
  )
}

const WhyGoTibetWithUs = () => {

  return (
    <div className='w-full'>
      <div className='text-gray-900 font-semibold text-lg md:text-4xl lg:text-5xl py-2 px-4'>
        Почему стоит ехать в Тибет с нами?
      </div>
      <WhyGoTibetWithUsStatement
        title='Глубокое знание Тибета'
        image='https://storage.googleapis.com/opentibet/background-1.jpg'
      >
        Мы имеем богатый опыт и глубокое понимание Тибета. Наши гиды - местные эксперты, которые помогут вам раскрыть все тайны и красоту этой уникальной земли
      </WhyGoTibetWithUsStatement>
      <WhyGoTibetWithUsStatement
        title='Эксклюзивные маршруты'
      >
        Мы предлагаем эксклюзивные маршруты, которые не доступны большинству туристов. Вы увидите Тибет изнутри, открыв его магию и аутентичность.
      </WhyGoTibetWithUsStatement>
      <WhyGoTibetWithUsStatement
        title='Персонализированный опыт'
        image='https://storage.googleapis.com/opentibet/background-8.jpg'
      >
        Мы понимаем, что каждый клиент уникален. Мы создадим маршрут, который соответствует вашим интересам и пожеланиям, обеспечивая максимальный комфорт и удовлетворение.
      </WhyGoTibetWithUsStatement>
      <WhyGoTibetWithUsStatement
        title='Высокое качество услуг'
      >
        Мы гарантируем высокое качество услуг, начиная с разработки маршрута и заканчивая качеством проживания и питания. Ваше удовольствие и безопасность для нас приоритет
      </WhyGoTibetWithUsStatement>

      <div className='flex w-full justify-center pt-8 pb-4'>
        <ActionButton />
      </div>
    </div>
  )
}

const WhyGoTibetWithUsStatement: React.FC<{
  title: string;
  children: React.ReactNode;
  image?: string;
}> = ({ title, children, image }) => {
  return (
    <div className=''>
      <div className='py-4'>
        <div className='flex items-center px-4'>
          <div className='w-2 h-2 rounded-full bg-blue-500 mr-2' />
          <div className='font-semibold'>
            {title}
          </div>
        </div>
        <div className='leading-7 pt-1 px-4'>
          {children}
        </div>
        {image && (
          <div className='pt-2'>
            <img src={image} className='rounded-sm' />
          </div>
        )}
      </div>
    </div>
  )
}


const ActionButton = () => {
  return (
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center">
      Смотреть программу на 2024
      <svg className="w-4 h-4 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1" />
      </svg>
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


import Image from 'next/image'



import { BackgroundSlider, Arrow, PhotoGallery } from '../components/components'

export default function Home() {

  const backgroundImageUrl = 'https://downloader.disk.yandex.ru/preview/7c934c34aeb3afccf224c723f98841ce270e22cb26e7c0a8d9f002c3e5b8a3dd/65293fe3/L1sEtzb6m2fyknzu_fd_YnrYpZEqDsNpW6nAFt2plIsrgbMBIr7R9wmjRk2sv0JgkDL4dWbgZgAB2B9raCXXnQ%3D%3D?uid=0&filename=39f89fbd0aea0779c5a622aa8e221ec9.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=1466x1782'
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className='w-full h-screen relative'>
        <BackgroundSlider />
        {/* <div className='absolute inset-0 bg-black opacity-20'></div> */}
        <div className='absolute inset-0' style={{ backgroundImage: 'linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0))' }}></div>
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

      <ul className="list-disc list-inside">
        <li className="mb-2">Высокогорные пейзажи: Тибет славится своими величественными высокогорными пейзажами, включая Монт-Эверест и Канченджунгу. Эти места предоставляют непередаваемые виды и приключения для любителей горных походов.</li>
        <li className="mb-2">Духовное наследие: Тибет - родина буддизма и дом для множества духовных практик и ритуалов. Монастыри и храмы, находящиеся среди гор и долин, погружают вас в атмосферу покоя и медитации.</li>
        <li className="mb-2">Культурная уникальность: Культура Тибета удивляет своей уникальностью, включая традиционные праздники, музыку, танцы и удивительные ремесла. Этот регион также известен своей гостеприимностью и теплотой его народа.</li>
        <li className="mb-2">Духовные практики: Тибет предоставляет возможность погрузиться в духовные практики и медитации, обрести внутренний покой и гармонию.</li>
        <li className="mb-2">Природная красота: Высокогорные озера, такие как Намтсо и Манасаровар, являются жемчужинами Тибета. Здесь вы можете наслаждаться кристально чистой водой и окружающей красотой.</li>
      </ul>

      <div className='w-full'>
        <div className='px-4 py-2'>
          <div className='text-gray-900 font-semibold text-xl md:text-4xl lg:text-5xl'>
            Посмотрите фильм о Тибете
          </div>
          <div className='text-gray-600 pr-6 text-base md:text-xl'>
            снятый{' '}
            <a href='https://www.instagram.com/kailash_explorer/' className='text-blue-500 hover:text-blue-700' target='_blank'>Алексеем Перчуковым</a>
          </div>
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

      <img className="rounded-full w-24 h-24" src="https://downloader.disk.yandex.ru/preview/6f2b4409163903f3bae6b144ff90a3dcb42c8c89203c2fad0de268ed033a4e18/652975df/xWUaUHU8xdhCmr-NJ2FpAz00V0ukOKc1QLF-u_GKOIQZzEouq2ftScfrtTJi3Q-eSMC2yxyfSOrHv-rXslD2Kg%3D%3D?uid=0&filename=a36b8b0447091e9dc61a60b2c95f72f9.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=1098x1227" alt="profile picture" />

      <PhotoGallery />
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



import Image from 'next/image'

import { Arrow, PhotoGallery, FAQ, ActionButton, IconArrowDown, IconArrowClose, TimetableButton, BackgroundSlider, ButtonWithContent, Header, ApplyForm, TibetInfo, Navbar } from '../components/components'
import { LINK_CONTACTS, LINK_PHOTO_GALLERY, LINK_TOURS } from '@/utils/constants';

export default function Home() {
  return (
    <main lang="ru" className="flex min-h-screen flex-col items-center justify-between">
      <Navbar />
      <div className='w-full h-[100vh] mt-[-5vh] relative'>
        <video id='background-video' className='absolute w-full h-full object-cover' autoPlay playsInline muted poster='https://storage.googleapis.com/opentibet/doors-4-preview.jpg'>
          <source src='https://storage.googleapis.com/opentibet/doors-4-compressed.mp4' type='video/mp4' />
          <source src='https://storage.googleapis.com/opentibet/doors-4.webm' type='video/webm' />
        </video>
        {/* <video src='https://storage.googleapis.com/opentibet/doors-2.mp4' autoPlay muted loop playsInline className='w-full h-full absolute object-cover'></video> */}
        {/* <div className='absolute inset-0 bg-black opacity-20'></div> */}
        <div className='absolute inset-0' style={{ backgroundImage: 'linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0))' }} />
        <div className='h-full flex flex-col justify-center items-center px-4 md:px-20 relative z-100'>
          <div className='max-w-4xl w-full'>
            <div className='text-gray-200 font-bold text-2xl md:text-4xl lg:text-5xl'>
              Откройте для себя Тибет
            </div>
            <div className='text-gray-300 py-2 pr-6 text-base md:text-xl'>
              Маршруты по доступным ценам<br />
              Пакетные туры от 2000 $
            </div>
            <div className='py-4'>
              <ActionButton />
            </div>
          </div>
        </div>
        <div className='absolute bottom-0 z-10 w-full'>
          <Arrow />
        </div>
      </div>
      <div className='max-w-4xl'>
        <div className='flex justify-center p-4'>
          <Image src="opentibet-logo-v.svg" width={200} height={100} alt='Open Tibet Logo' />
          {/* <img src="https://storage.googleapis.com/opentibet/logo-1.jpg" width={200} /> */}
        </div>
        <div className=''>
          <div className=''>

            <h2 className="text-2xl font-semibold text-center w-12/12 mx-auto">OPEN TIBET&nbsp;— это совместный туристический проект</h2>

            <ul className="mt-5 mx-auto w-fit mb-4 flex-col flex justify-center">
              <li className="flex items-center my-2">
                <div className="w-24 mr-3 flex-grow-0 flex-shrink-0">
                  <Image src="/ctt.png" alt="China Tibet Tour" height={80} width={80} className="object-contain w-28 h-[68px] rounded-sm cursor-pointer" />
                </div>
                <div className="text-lg leading-5">
                  <span className='font-semibold'>Тибетского туристического офиса</span><br />{' '}<span>правительство Тибета</span>
                </div>
              </li>
              <li className="flex items-center my-2">
                <div className="w-24 mr-3 flex-grow-0 flex-shrink-0">
                  <Image src="/kailash.png" alt="Kailash Explorer" height={309} width={551} className="object-contain w-28 h-16 rounded-sm cursor-pointer" />
                </div>
                <div className="text-lg leading-5">
                  <span className='font-semibold'>
                    Kailash-explorer agency
                  </span><br /> Россия, Санкт Петербург
                </div>
              </li>
              <li className="flex items-center my-2">
                <div className="w-24 mr-3 flex-grow-0 flex-shrink-0">
                  <Image src="/tashidelek.png" alt="Tashi Delek Travel Agency" height={100} width={100} className="object-contain w-28 h-16 brightness-75 -hue-rotate-15 rounded-sm cursor-pointer" />
                </div>
                <div className="text-lg leading-5">
                  <span className='font-semibold'>Tashi Delek Travel Agency</span><br /> Тибет, Лхаса
                </div>
                {/* (<a href="https://www.tibettour.travel" className='text-sm font-semibold text-blue-500 hover:text-blue-700' target='_blank'>https://www.tibettour.travel</a>) */}
              </li>
            </ul>
          </div>
          <div className='flex justify-center'>
            <div className='max-w-3xl'>
              <div className='flex'>
                <div className='flex max-w-[50%] flex-col'>
                  <Image src="https://storage.googleapis.com/opentibet/common-2.jpg" alt="" width={375} height={250} quality={75} className='h-full w-full rounded-sm' style={{ objectFit: 'cover' }} />
                </div>
                <div className='flex max-w-[50%] flex-col'>
                  <Image src="https://storage.googleapis.com/opentibet/alexey-company.jpg" alt="" width={375} height={250} quality={75} className='h-full w-full ml-1 rounded-sm' style={{ objectFit: 'cover' }} />
                </div>
              </div>
            </div>
          </div>
          <div className='p-6'>
            <p className='pt-10 text-lg leading-7'>
              Ключевая цель проекта — сделать Тибет <b>доступнее</b>. Мы заключили эксклюзивные контракты и смогли добиться наилучших предложений чтобы гарантировать паломникам:
            </p>
            <ul className='py-4 text-lg max-w-md w-fit mx-auto space-y-2 list-inside'>
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
      </div>
      <div className='max-w-4xl mt-4 w-full'>
        <WhyGoTibetWithUs />
      </div>
      <div className='max-w-4xl mt-6'>
        <div className='w-full pt-8'>
          <Header
            title='Посмотрите фильм о Тибете'
            subtitle='снятый Виктором Щербаковым и Алексеем Перчуковым'
          />
          <div className='px-4 py-2'>
            {/* <div className='text-black font-semibold text-xl md:text-4xl lg:text-5xl'>
              Посмотрите фильм о Тибете
            </div>
            <div className='pt-1 pr-6 md:text-xl'>
              снятый{' '}
              Виктором Щербаковым{' '} и{' '}
              <a href='https://www.instagram.com/kailash_explorer/' className='text-blue-600 hover:text-blue-700 font-semibold' target='_blank'>Алексеем Перчуковым</a>
            </div> */}
            <p className='py-4 pb-0 leading-7 hyphens-auto'>
              Мы организуем регулярные ежемесячные туры в Тибет по уникальной программе. Пример программы можно посмотреть в фильме «Тибет, место которое меняет жизнь», снятом в одном из таких туров:
            </p>
          </div>
          <div className='w-full h-[315px] mt-5 mb-2 md:h-96'>
            <iframe
              width="100%"
              // height="315"
              height="100%"
              src="https://www.youtube.com/embed/OhtIDb8ioT0?si=rnbXixWvQlm4pVIA"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen />
          </div>
        </div>
        <div className="pt-10">
          <div className='flex px-4 w-fit mb-4 mx-auto'>
            <div className="w-32 h-32">
              <img
                className="object-cover rounded-full w-full h-full"
                src="https://storage.googleapis.com/opentibet/alexey-portrait.jpeg"
                alt="profile picture"
              />
            </div>
            <div className='flex items-center flex-1 pl-4'>
              <div>
                <div className='text-xl'>Алексей Перчуков</div>
                <div className='text-sm font-semibold'>Координатор проекта OPEN TIBET</div>
                <a href='https://www.instagram.com/kailash_explorer/' className='text-sm text-blue-500 hover:text-blue-700' target='_blank'>@kailash_explorer</a>
              </div>
            </div>
          </div>
          <div className='p-4 leading-7 hyphens-auto'>
            Алексей &mdash; автор нескольких профессиональных путеводителей по Тибету на русском языке, со-автор фильма <a className='text-blue-600' href="https://www.youtube.com/watch?v=OhtIDb8ioT0" target='_blank'>«Тибет, место которое меняет жизнь»</a>. Докладчик многочисленных международных конференции, посвященных Кайласу.
            Автор статьи <a className='text-blue-600' href="https://kailash-explorer.com/2017/01/26/opisanie-spiralnoj-kory-gory-kajlas/">«Спиральная Кора»</a>, исследователь , который поднялся на все плечи Кайласа и посетил все священные долины Мандалы Кайласа.
          </div>
          <div className='flex justify-center'>
            <div className='flex max-w-lg gap-10'>
              <Image src="/putevoditel-india.jpg" alt="" width={120} height={90} quality={90} className="w-full cursor-pointer" />
              <Image src="/putevoditel-tibet.jpg" alt="" width={120} height={90} quality={90} className="w-full cursor-pointer" />
            </div>
          </div>

          <div className='pt-10 flex justify-center'>
            <div className="grid grid-cols-3 gap-1 max-w-2xl">
              {/* <Image src={"https://storage.googleapis.com/opentibet/chiu.jpg"} alt="" width={375} height={250} quality={75} className="col-start-1 col-end-2 row-start-2 row-end-4 rounded-sm cursor-pointer" /> */}
              <Image src="https://storage.googleapis.com/opentibet/alex-1.jpg" alt="" width={750} height={500} quality={90} className="w-full col-start-1 col-end-4  rounded-sm cursor-pointer" />
              <Image src="https://storage.googleapis.com/opentibet/alex-6.jpg" alt="" width={375} height={250} quality={75} className="w-full col-start-1 col-end-2 row-start-2 row-end-4 rounded-sm cursor-pointer" />
              <Image src="https://storage.googleapis.com/opentibet/alexey-7.jpg" alt="" width={375} height={250} quality={75} className="w-full col-start-2 col-end-4 row-start-2 row-end-4 rounded-sm cursor-pointer" />
              <Image src="https://storage.googleapis.com/opentibet/alex-4.jpg" alt="" width={375} height={250} quality={75} className="w-full col-start-2 col-end-3 rounded-sm cursor-pointer" />
              <Image src="https://storage.googleapis.com/opentibet/alex-2.jpg" alt="" width={375} height={250} quality={75} className="w-full col-start-3 col-end-3 row-start-4 row-end-5 rounded-sm cursor-pointer" />
            </div>
          </div>
          <div className='text-center p-4'>
            <p className='text-gray-400 text-sm'>
              Больше фото в <a href='https://www.instagram.com/kailash_explorer/' className='text-blue-500 hover:text-blue-700' target='_blank'>Instagram</a>
            </p>
          </div>
        </div>
      </div>

      <div className='w-full h-[40vh] md:h-[60vh]  relative'>
        <BackgroundSlider />
        <div className='absolute inset-0' style={{ backgroundImage: 'linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0))' }} />
        <div className='h-full flex flex-col justify-center items-center px-4 md:px-20 relative z-100'>
          <div className='max-w-4xl w-full'>
            <div className='text-gray-200 font-bold text-2xl md:text-4xl lg:text-5xl'>
              Посмотрите программы<br /> на 2024 год
            </div>
            <div className='text-gray-300 py-2 pr-6 text-base md:text-xl'>
              Регулярные и эксклюзивные маршруты
            </div>
            <div className='py-4'>
              <ActionButton />
            </div>
          </div>
        </div>
      </div>
      <div className='pt-5' />
      <div className='max-w-4xl w-full'>
        <Header
          title='Программы'
          subtitle='расписание на 2024 год'
          id={LINK_TOURS}
        />
        <TimetableButton
          title='Май'
          subtitle='2—21 мая'
          days={19}
          price={2000}
        />
        <TimetableButton
          title='Июнь'
          subtitle='6—19 июня'
          days={13}
          price={2000}
        />
        <TimetableButton
          title='Июль'
          subtitle='1—23 июля'
          days={22}
          price={1500}
        />
        <TimetableButton
          title='Август'
          subtitle='2—19 августа'
          days={17}
          price={2500}
        />
        <TimetableButton
          title='Сентябрь'
          subtitle='2—21 сентября'
          days={19}
          price={2650}
        />
        <TimetableButton
          title='Октябрь'
          subtitle='2—23 октября'
          days={21}
          price={2800}
        />
      </div>
      <div className='pt-10' />
      <div className='max-w-4xl w-full'>
        <div className='pb-5'>
          <Header
            title='Подготовка к поездке'
            subtitle='Список необходимых вещей для поездки в Тибет'
          />
        </div>
        <div>
          <ButtonWithContent title='Что взять с собой?' subtitle='Список необходимых вещей для поездки в Тибет'>
            <div className='p-4'>
              <ul className='space-y-1'>
                <li>1. Термобельё.</li>
                <li>2. Спальник для температур до минус 10оС.</li>
                <li>3. Тёплый вкладыш в спальник, если собираетесь брать спальник напрокат.</li>
                <li>4. Тёплые вещи для сна (в том числе шапку, шерстяные перчатки и носки).</li>
                <li>5. Непромокаемые высокие кроссовки для треккинга с рифлёной подошвой.</li>
                <li>6. Непромокаемые штаны (для совершения Коры).</li>
                <li>7. Флиска (куртка из флиса).</li>
                <li>8. Шерстяные носки или термоноски (2 пары).</li>
                <li> 9. Шапка шерстяная.</li>
                <li> 10. Перчатки (лучше 2 пары: флисовые и непромокаемые).</li>
                <li> 11. Непромокаемая куртка (ветровка goretex).</li>
                <li>12. Сменная одежда и бельё.</li>
                <li> 13. Сменная обувь (лёгкие кроссовки ).</li>
                <li> 14. Небольшой рюкзак (25-30 л).</li>
                <li> 15. Шарф (шаль).</li>
                <li> 16. Набор приборов для еды (нож, ложка, вилка, кружка).</li>
                <li> 17. Пластиковый контейнер (миска).</li>
                <li> 18. Кипятильник.</li>
                <li> 19. Термос (1 л).</li>
                <li> 20. Альпинистские «кошки» (желательно — для тех, кто пойдёт к северному склону).</li>
                <li> 22. Полотенце туристическое (быстросохнущее).</li>
                <li> 23. Две палки для треккинга.</li>
                <li> 24. Налобный фонарик и батарейки.</li>
                <li> 25. Беруши (на случай, если будут лаять собаки и храпеть соседи).</li>
                <li> 26. Солнцезащитный крем.</li>
                <li> 27. Гигиеническая помада.</li>
                <li> 28. Влажные салфетки.</li>
                <li> 29. Туристическая сидушка.</li>
                <li> 30. Зонт.</li>
                <li> 31. Еда: чай травяной, мёд, орехи, сухофрукты, каши быстрого приготовления, копчёный сыр.</li>
              </ul>
            </div>
          </ButtonWithContent>
          <ButtonWithContent title='Аптечка' subtitle='Нужные лекарственные препараты'>
            <div className='p-4'>
              <ul className='space-y-1 leading-7'>
                <li>
                  1. Ацетилсалициловая кислота (<b>аспирин</b>, тромбо АСС) для разжижения крови и улучшения транспорта кислорода. (для ежедневного приема)
                </li>
                <li>
                  2. <b>Витамин С</b>. Лучше брать растворимую форму по 500 или 1000мг. (Для ежедневного приема)
                </li>
                <li>
                  3. <b>Аспаркам</b> или <b>Панангин</b>. (Для ежедневного приема)
                </li>
                <li>
                  4. <b>Рибоксин</b>. (Для ежедневного приема)
                </li>
                <li>
                  5. <b>Калия оротат</b>. (Для ежедневного приема)
                </li>
                <li>
                  6. <b>Диакарб</b>. (Рекомендуется применять при ночевках на высотах выше 4000м).
                </li>
                <li>
                  7. <b>Дексаметазон</b>
                </li>
                <li>
                  8. <b>Ибупрофен</b> или <b>Солпадеин</b>. Хорошо снимает головную боль при начальных симптомах горной болезни.
                </li>
                <li>
                  9. <b>Церукал</b>. Противорвотное средство.
                </li>
                <li>
                  10. Противопростудные препараты, иммуномодуляторы (<b>Оциллококцинум</b>, <b>Анаферон</b>) их следует начинать принимать сразу же при переохлаждении, ознобах, насморке или при возникновении в группе любых аденовирусных инфекций.
                </li>
                <li>
                  11. Средства для разжижения мокроты (например, <b>АЦЦ</b>, прием которого начинать при любых формах кашля, для ранней профилактики отека легких).
                </li>
              </ul>
            </div>
          </ButtonWithContent>
        </div>
      </div>
      <div className='pt-5' />
      <div className='max-w-4xl w-full'>
        <Header
          title='Информация о Тибете'
          subtitle='что посмотреть?'
        />
        <TibetInfo />
      </div>
      <div className='pt-10' />
      <div className='max-w-4xl'>
        <div className='pb-5'>
          <Header
            title='Отзывы участников'
            subtitle='вот, что пишут участники прошлых туров'
          />
        </div>
        <div className="grid mb-8 rounded-lg md:mb-12 md:grid-cols-2">
          <Review name="Людмила К." subtitle='Участница экспедиции 2021' text='Спасибо за возможность познакомиться с Тибетом так близко и интимно. Это было невероятное путешествие в мире медитаций и красоты природы. Ваша компания сделала это возможным, и я вам очень благодарна.' />
          <Review name="Марк и Сара" subtitle='Участники экспедиции 2019' text='Это было наше первое путешествие в Тибет, и мы в восторге! Опыт был духовно поднимающим и вдохновляющим. Организация маршрута и качество услуг были выше всяких похвал. Мы обязательно вернемся снова!' />
          <Review name="Джон С" subtitle='Экспедиция 2022' text='Моя поездка в Тибет с этой компанией оказалась невероятным приключением! Горы, монастыри и доброжелательные люди сделали это путешествие незабываемым. Организация была на высшем уровне, и я чувствовал себя в надежных руках на протяжении всей поездки.' />
        </div>
      </div>

      <div className='max-w-4xl w-full'>
        <Header
          title='Часто задаваемые вопросы'
          subtitle='вот, что спрашивают больше всего'
        />
        <FAQ />
      </div>

      <div className='pt-10' />
      <div className='max-w-4xl w-full'>
        <Header
          title='Фото с прошлых туров'
          subtitle='нажмите на фото, чтобы открыть галерею'
          id={LINK_PHOTO_GALLERY}
        />
        <div className='pt-6'>
          <PhotoGallery />
        </div>
      </div>

      <div className='pt-10' />
      <div className='max-w-4xl w-full'>
        <ApplyForm />
        <Header
          title='Контакты'
          subtitle='связаться с нами'
          id={LINK_CONTACTS}
        />
        <div className='p-4'>
          <div className='py-2'>
            <div>Россия, Алексей</div>
            <input type="tel" value="+7 911 927 41 14" className='text-3xl' readOnly />
          </div>
          <div className='py-2'>
            <div>Китай, Алексей</div>
            <input type="tel" value="+86 173 8999 5190" className='text-3xl' readOnly />
          </div>
        </div>
      </div>

      {/* <div className='relative pt-1 w-full max-w-4xl'>
        <div className='absolute inset-0' style={{ backgroundImage: 'linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0))' }} />
        <div className='absolute h-full w-full'>
          <div className='flex h-full items-center justify-center'>
            <div className='text-gray-200 font-bold text-3xl md:text-4xl p-8'>
              До втречи в Тибете.
            </div>
          </div>
        </div>
        <video src='https://storage.googleapis.com/opentibet/doors-2.mp4' autoPlay muted loop playsInline className='w-full'></video>
      </div> */}

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
          <div className="text-xs text-gray-400">{subtitle}</div>
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
    <div className='w-2 h-2 rounded-full bg-yellow-600 mr-2' />
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
    <>
      <div className='text-black font-semibold text-3xl py-2 px-4'>
        Почему стоит ехать в Тибет с нами?
      </div>
      <WhyGoTibetWithUsStatement
        title='Глубокое знание Тибета'
        image='https://storage.googleapis.com/opentibet/alexey-8.jpg'
        imgSize={400}
      >
        Мы имеем богатый опыт и глубокое понимание Тибета. Наши гиды — местные эксперты, которые помогут вам раскрыть все тайны и красоту этой уникальной земли
      </WhyGoTibetWithUsStatement>
      <WhyGoTibetWithUsStatement
        title='Эксклюзивные маршруты'
      >
        Мы предлагаем эксклюзивные маршруты, которые не доступны большинству туристов. Вы увидите Тибет изнутри, открыв его магию и аутентичность.
      </WhyGoTibetWithUsStatement>
      <WhyGoTibetWithUsStatement
        title='Персонализированный опыт'
        image='https://storage.googleapis.com/opentibet/background-kailas.jpg'
      >
        Мы понимаем, что каждый клиент уникален. Мы создадим маршрут, который соответствует вашим интересам и пожеланиям, обеспечивая максимальный комфорт и удовлетворение.
      </WhyGoTibetWithUsStatement>
      <WhyGoTibetWithUsStatement
        title='Высокое качество услуг'
      >
        Мы гарантируем высокое качество услуг, начиная с разработки маршрута и заканчивая качеством проживания и питания. Ваше удовольствие и безопасность для нас приоритет
      </WhyGoTibetWithUsStatement>

      <div className='flex w-full items-baseline flex-wrap justify-around pt-8 pb-4'>
        <h2 className="text-blue-500 text-3xl font-light mb-3 leading-8">от 2000 $ за 13 дней</h2>
        <ActionButton />
      </div>
    </>
  )
}

const WhyGoTibetWithUsStatement: React.FC<{
  title: string;
  children: React.ReactNode;
  image?: string;
  imgSize?: number;
}> = ({ title, children, image, imgSize }) => {
  return (
    <div className=''>
      <div className='py-4'>
        <div className='flex items-center px-4'>
          <div className='w-2 h-2 rounded-full bg-yellow-600 mr-2' />
          <div className='font-semibold text-lg'>
            {title}
          </div>
        </div>
        <div className='leading-7 pt-1 px-4'>
          {children}
        </div>
        {image && (
          <div className='py-5 md:py-10 flex justify-center'>
            <div className='max-w-xl'>
              <img src={image} className='rounded-sm' style={imgSize ? { maxWidth: imgSize } : undefined} />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

const Copyright: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="text-center text-gray-500 text-sm py-4">
      &copy; {currentYear} Все права защищены.
    </div>
  );
};






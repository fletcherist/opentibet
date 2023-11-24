import Image from "next/image";
import tibet from "./tibet.module.css";

import {
  Arrow,
  PhotoGallery,
  FAQ,
  ActionButton,
  IconArrowDown,
  IconArrowClose,
  TimetableButton,
  BackgroundSlider,
  ButtonWithContent,
  Header,
  ApplyForm,
  Navbar,
} from "../components/components";
import { TibetInfo } from "@/components/TibetInfo";
import {
  LINK_CONTACTS,
  LINK_PHOTO_GALLERY,
  LINK_TOURS,
} from "@/utils/constants";

export default function Home() {
  return (
    <main
      lang="ru"
      className="flex min-h-screen flex-col items-center justify-between"
    >
      <Navbar />
      <div className="w-full h-[93vh] mt-[-5vh] relative">
        <video
          id="background-video"
          className="absolute w-full h-full object-cover"
          autoPlay
          playsInline
          muted
          poster="https://storage.googleapis.com/opentibet/doors-4-preview.jpg"
        >
          <source
            src="https://storage.googleapis.com/opentibet/doors-4-compressed.mp4"
            type="video/mp4"
          />
          <source
            src="https://storage.googleapis.com/opentibet/doors-4.webm"
            type="video/webm"
          />
        </video>
        {/* <video src='https://storage.googleapis.com/opentibet/doors-2.mp4' autoPlay muted loop playsInline className='w-full h-full absolute object-cover'></video> */}
        {/* <div className='absolute inset-0 bg-black opacity-20'></div> */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to top, rgba(0,0,0,1) 2%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0) 70%)",
          }}
        />
        <div className="h-full flex flex-col justify-end items-center px-4 md:px-20 relative z-100">
          <div className="max-w-4xl w-full mb-[5vh]">
            <div className="text-gray-200 font-bold text-5xl md:text-[4em] uppercase tracking-wider leading-[1.15em]">
              Откройте
              <br />
              для&nbsp;себя
              <br />
              Тибет
            </div>
            <div className="text-gray-300 py-2 pr-6 text-base md:text-xl">
              Маршруты по доступным ценам
              <br />
              Пакетные туры от 2000 $
            </div>
            <div className="py-4">
              <ActionButton />
            </div>
          </div>
        </div>
        <div className="hidden absolute bottom-0 z-10 w-full">
          <Arrow />
        </div>
      </div>

      <div className="w-full text-white pb-14">
        <div className="h-[45vh] relative">
          <div
            className="w-full -z-10 h-full top-0 object-cover"
            style={{
              backgroundImage:
                "url(https://storage.googleapis.com/opentibet/batsum-tso.jpg)",
              backgroundSize: "cover",
              backgroundAttachment: "fixed",
              backgroundPosition: "60%",
            }}
          />
          <div className={tibet.triangle} />
          <Image
            src="opentibet-logo-v.svg"
            width={280}
            height={100}
            alt="Open Tibet Logo"
            className="absolute top-[50%] -translate-y-[50%] left-[50%] -translate-x-[50%] z-10"
          />
        </div>
      </div>

      <h2 className="text-3xl font-semibold text-center max-w-4xl mx-auto mb-10 mt-5">
        Мы делаем Тибет доступнее для вас
      </h2>

      <div className="max-w-4xl">
        <div className="p-4 pt-0">
          <p className="text-xl leading-9 text-center">
            Путешествия с <b>OPEN TIBET</b> &mdash; это:
          </p>
          <ul className="py-4 mt-3 max-w-md text-xl w-fit mx-auto space-y-3 list-inside">
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
              Квалифицированные гиды
            </li>
            <li className="flex items-center">
              <IconMark />
              Самые доступные цены
            </li>
          </ul>
        </div>
      </div>

      <p className="px-4 mt-5 mb-4 max-w-4xl mx-auto leading-7">
        Мы много трудились над каждым элементом путешествий и получили
        всестороннюю поддержку правительства Тибета, чтобы обеспечить самые
        лучшие предложения для паломников.
      </p>

      <p className="px-4 mb-8 max-w-4xl mx-auto leading-7">
        Это стало возможно благодаря партнёрству трёх агентств, имеющих годы
        опыта и высочайший профессионализм.
      </p>

      <h3 className="uppercase tracking-[.4em] mt-4 mb-3 font-semibold text-sm">
        Организаторы
      </h3>

      <ul className="mx-auto w-fit mb-4 px-4 flex-col flex justify-center">
        <li className="flex items-center my-2">
          <div className="w-24 mr-3 flex-grow-0 flex-shrink-0">
            <Image
              src="/ctt.png"
              alt="China Tibet Tour"
              height={80}
              width={80}
              className="object-contain w-28 h-[68px]  cursor-pointer"
            />
          </div>
          <div className="leading-5">
            <span className="font-semibold">Тибетский туристический офис</span>
            <br /> <span>правительство Тибета</span>
          </div>
        </li>
        <li className="flex items-center my-2">
          <div className="w-24 mr-3 flex-grow-0 flex-shrink-0">
            <Image
              src="/kailash.png"
              alt="Kailash Explorer"
              height={309}
              width={551}
              className="object-contain w-28 h-16  cursor-pointer"
            />
          </div>
          <div className="leading-5">
            <span className="font-semibold">Турагентство Kailash Explorer</span>
            <br /> Россия, Санкт Петербург
          </div>
        </li>
        <li className="flex items-center my-2">
          <div className="w-24 mr-3 flex-grow-0 flex-shrink-0">
            <Image
              src="/tashidelek.png"
              alt="Tashi Delek Travel Agency"
              height={100}
              width={100}
              className="object-contain w-28 h-16 brightness-75 -hue-rotate-15  cursor-pointer"
            />
          </div>
          <div className="leading-5">
            <span className="font-semibold">Турагентство Tashi Delek</span>
            <br /> Тибет, Лхаса
          </div>
          {/* (<a href="https://www.tibettour.travel" className='text-sm font-semibold text-blue-500 hover:text-blue-700' target='_blank'>https://www.tibettour.travel</a>) */}
        </li>
      </ul>

      <div className="mt-7 mb-12">
        <div className="mx-auto max-w-4xl flex justify-between">
          <Image
            src="https://storage.googleapis.com/opentibet/common-2.jpg"
            alt=""
            width={375}
            height={250}
            quality={75}
            className="w-[49.5%]"
            style={{ objectFit: "cover" }}
          />
          <Image
            src="https://storage.googleapis.com/opentibet/alexey-company.jpg"
            alt=""
            width={375}
            height={250}
            quality={75}
            className="w-[49.5%]"
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>

      <div className="max-w-4xl mt-4 mb-12 w-full">
        <WhyGoTibetWithUs />
      </div>

      <div
        className="w-full text-white relative mt-8"
        style={{
          backgroundImage:
            'url("https://storage.googleapis.com/opentibet/background-kailas.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0))",
          }}
        />
        <div className="h-full flex flex-col justify-center items-center px-4 md:px-20 py-10 md:py-40 relative z-100">
          <div className="max-w-5xl w-full">
            <div className="text-3xl font-semibold text-center w-full px-4 mt-5 mb-5">
              Тибет меняет жизнь. Проверьте и вы
            </div>
            <div className="text-xl font-light w-9/12 mx-auto text-center leading-7">
              Мы знаем и любим Тибет. Мы хотим, чтобы как можно больше людей
              открывали для себя эту священную землю.
              <br />
              <br />
            </div>
            <div className="flex max-w-[800px] mx-auto items-baseline flex-wrap justify-around pt-8 mb-12">
              <ActionButton />
              <h2 className="text-2xl font-light mt-3 leading-8">
                от 2000 $ за 13 дней
              </h2>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-gray-800 text-white pb-12">
        <div className="max-w-4xl mt-6 mx-auto">
          <div className="w-full pt-8">
            <Header
              title="Посмотрите фильм о Тибете"
              subtitle="снятый Виктором Щербаковым и Алексеем Перчуковым"
            />
            <div className="px-4 py-2">
              {/* <div className='text-black font-semibold text-xl md:text-4xl lg:text-5xl'>
              Посмотрите фильм о Тибете
            </div>
            <div className='pt-1 pr-6 md:text-xl'>
              снятый{' '}
              Виктором Щербаковым{' '} и{' '}
              <a href='https://www.instagram.com/kailash_explorer/' className='text-blue-600 hover:text-blue-700 font-semibold' target='_blank'>Алексеем Перчуковым</a>
            </div> */}
              <p className="py-4 pb-0 leading-7 hyphens-auto">
                Мы организуем регулярные ежемесячные туры в Тибет по уникальной
                программе. В фильме показана одна из наших программ. Оцените
                красоты местных монастырей и природы, силу и энергию тибетской
                земли:
              </p>
            </div>
            <div className="w-full h-[315px] mt-5 mb-2 md:h-96">
              <iframe
                width="100%"
                // height="315"
                height="100%"
                src="https://www.youtube.com/embed/OhtIDb8ioT0?si=rnbXixWvQlm4pVIA"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
          <div className="pt-10">
            <div className="flex px-4 w-fit mb-4 mx-auto">
              <div className="w-32 h-32">
                <img
                  className={`${tibet.alexeyPortrait} object-cover object-cover rounded-full w-full h-full`}
                  src="https://storage.googleapis.com/opentibet/alexey-portrait.jpeg"
                  alt="profile picture"
                />
              </div>
              <div className="flex items-center flex-1 pl-4">
                <div>
                  <div className="text-xl">Алексей Перчуков</div>
                  <div className="text-sm font-semibold">
                    Координатор проекта OPEN TIBET
                  </div>
                  <a
                    href="https://www.instagram.com/kailash_explorer/"
                    className="text-sm text-yellow-500 hover:text-yellow-700"
                    target="_blank"
                  >
                    @kailash_explorer
                  </a>
                </div>
              </div>
            </div>
            <div className="p-4 leading-7 hyphens-auto">
              Алексей &mdash; автор нескольких профессиональных путеводителей по
              Тибету на русском языке, со-автор фильма{" "}
              <a
                className="text-yellow-600"
                href="https://www.youtube.com/watch?v=OhtIDb8ioT0"
                target="_blank"
              >
                «Тибет, место которое меняет жизнь»
              </a>
              . Докладчик многочисленных международных конференции, посвященных
              Кайласу. Автор статьи{" "}
              <a
                className="text-yellow-600"
                href="https://kailash-explorer.com/2017/01/26/opisanie-spiralnoj-kory-gory-kajlas/"
              >
                «Спиральная Кора»
              </a>
              , исследователь , который поднялся на все плечи Кайласа и посетил
              все священные долины Мандалы Кайласа.
            </div>
            <div className="flex justify-center">
              <div className="flex max-w-lg gap-5 mb-4 mt-3">
                <Image
                  src="/putevoditel-india.jpg"
                  alt=""
                  width={120}
                  height={90}
                  quality={90}
                  className="w-full cursor-pointer"
                />
                <Image
                  src="/putevoditel-tibet.jpg"
                  alt=""
                  width={120}
                  height={90}
                  quality={90}
                  className="w-full cursor-pointer"
                />
              </div>
            </div>

            <div className="pt-10 flex justify-center">
              <div className="grid grid-cols-3 gap-1 max-w-2xl">
                {/* <Image src={"https://storage.googleapis.com/opentibet/chiu.jpg"} alt="" width={375} height={250} quality={75} className="col-start-1 col-end-2 row-start-2 row-end-4  cursor-pointer" /> */}
                <Image
                  src="https://storage.googleapis.com/opentibet/alex-2.jpg"
                  alt=""
                  width={750}
                  height={500}
                  quality={90}
                  className="w-full col-start-1 col-end-3 cursor-pointer"
                />
                <Image
                  src="https://storage.googleapis.com/opentibet/alex-10.jpg"
                  alt=""
                  width={375}
                  height={250}
                  quality={75}
                  className="h-full object-cover w-full col-start-3 col-end-4 cursor-pointer"
                />
                <Image
                  src="https://storage.googleapis.com/opentibet/alex-11.jpeg"
                  alt=""
                  width={375}
                  height={250}
                  quality={75}
                  className="w-full col-start-2 col-end-4 row-start-2 row-end-4  cursor-pointer"
                />
                <Image
                  src="https://storage.googleapis.com/opentibet/alex-12.jpeg"
                  alt=""
                  width={375}
                  height={250}
                  quality={75}
                  className="w-full col-start-1 col-end-2  cursor-pointer"
                />
                <Image
                  src="https://storage.googleapis.com/opentibet/alexey-7.jpg"
                  alt=""
                  width={375}
                  height={250}
                  quality={75}
                  className="w-full col-start-1 col-end-2 cursor-pointer"
                />
              </div>
            </div>
            <div className="text-center p-4">
              <p className="text-gray-400 text-sm">
                Больше фото в{" "}
                <a
                  href="https://www.instagram.com/kailash_explorer/"
                  className="text-yellow-500 hover:text-yellow-700"
                  target="_blank"
                >
                  Instagram
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-[40vh] md:h-[60vh]  relative">
        <BackgroundSlider />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0))",
          }}
        />
        <div className="h-full flex flex-col justify-center items-center px-4 md:px-20 relative z-100">
          <div className="max-w-4xl w-full">
            <div className="text-gray-200 font-bold text-2xl md:text-4xl lg:text-5xl">
              Посмотрите программы
              <br /> на 2024 год
            </div>
            <div className="text-gray-300 py-2 pr-6 text-base md:text-xl">
              Регулярные и эксклюзивные маршруты
            </div>
            <div className="py-4">
              <ActionButton />
            </div>
          </div>
        </div>
      </div>
      <div className="pt-5" />
      <div className="max-w-4xl w-full">
        <Header
          title="Программы"
          subtitle="расписание на 2024 год"
          id={LINK_TOURS}
        />
        <TimetableButton
          title="Май"
          subtitle="2—21 мая"
          days={19}
          price={2000}
        />
        <TimetableButton
          title="Июнь"
          subtitle="6—19 июня"
          days={13}
          price={2000}
        />
        <TimetableButton
          title="Июль"
          subtitle="1—23 июля"
          days={22}
          price={1500}
        />
        <TimetableButton
          title="Август"
          subtitle="2—19 августа"
          days={17}
          price={2500}
        />
        <TimetableButton
          title="Сентябрь"
          subtitle="2—21 сентября"
          days={19}
          price={2650}
        />
        <TimetableButton
          title="Октябрь"
          subtitle="2—23 октября"
          days={21}
          price={2800}
        />
      </div>
      <div className="pt-10" />
      <div className="max-w-4xl w-full">
        <div className="pb-5">
          <Header
            title="Подготовка к поездке"
            subtitle="Список необходимых вещей для поездки в Тибет"
          />
        </div>
        <div>
          <ButtonWithContent
            title="Что взять с собой?"
            subtitle="Список необходимых вещей для поездки в Тибет"
          >
            <div className="p-4">
              <ul className="list-decimal list-outside ms-10 leading-7 space-y-1 hyphens-auto">
                <li>Термобельё.</li>
                <li>Спальник для температур до −10&nbsp;°С.</li>
                <li>
                  Тёплый вкладыш в спальник, если собираетесь брать спальник
                  напрокат.
                </li>
                <li>
                  Тёплые вещи для сна (в том числе шапку, шерстяные перчатки и
                  носки).
                </li>
                <li>
                  Непромокаемые высокие кроссовки для треккинга с рифлёной
                  подошвой.
                </li>
                <li>Непромокаемые штаны (для совершения Коры).</li>
                <li>Флиска (куртка из флиса).</li>
                <li>Шерстяные носки или термоноски (2 пары).</li>
                <li>Шапка шерстяная.</li>
                <li>Перчатки (лучше 2 пары: флисовые и непромокаемые).</li>
                <li>Непромокаемая куртка (ветровка goretex).</li>
                <li>Сменная одежда и бельё.</li>
                <li>Сменная обувь (лёгкие кроссовки ).</li>
                <li>Небольшой рюкзак (25-30 л).</li>
                <li>Шарф (шаль).</li>
                <li> Набор приборов для еды (нож, ложка, вилка, кружка).</li>
                <li>Пластиковый контейнер (миска).</li>
                <li>Кипятильник.</li>
                <li>Термос (1 л).</li>
                <li>
                  {" "}
                  Альпинистские «кошки» (желательно — для тех, кто пойдёт к
                  северному склону).
                </li>
                <li>Полотенце туристическое (быстросохнущее).</li>
                <li>Две палки для треккинга.</li>
                <li>Налобный фонарик и батарейки.</li>
                <li>
                  {" "}
                  Беруши (на случай, если будут лаять собаки и храпеть соседи).
                </li>
                <li>Солнцезащитный крем.</li>
                <li>Гигиеническая помада.</li>
                <li>Влажные салфетки.</li>
                <li>Туристическая сидушка.</li>
                <li>Зонт.</li>
                <li>
                  {" "}
                  Еда: чай травяной, мёд, орехи, сухофрукты, каши быстрого
                  приготовления, копчёный сыр.
                </li>
              </ul>
            </div>
          </ButtonWithContent>
          <ButtonWithContent
            title="Аптечка"
            subtitle="Нужные лекарственные препараты"
          >
            <div className="p-4">
              <ul className="space-y-1 list-decimal list-outside ms-10 leading-7 hyphens-auto">
                <li>
                  Ацетилсалициловая кислота (
                  <b className="font-semibold">аспирин</b>, тромбо АСС) для
                  разжижения крови и улучшения транспорта кислорода. (для
                  ежедневного приема)
                </li>
                <li>
                  <b className="font-semibold">Витамин С</b>. Лучше брать
                  растворимую форму по 500 или 1000мг. (Для ежедневного приема)
                </li>
                <li>
                  <b className="font-semibold">Аспаркам</b> или{" "}
                  <b className="font-semibold">Панангин</b>. (Для ежедневного
                  приема)
                </li>
                <li>
                  <b className="font-semibold">Рибоксин</b>. (Для ежедневного
                  приема)
                </li>
                <li>
                  <b className="font-semibold">Калия оротат</b>. (Для
                  ежедневного приема)
                </li>
                <li>
                  <b className="font-semibold">Диакарб</b>. (Рекомендуется
                  применять при ночевках на высотах выше 4000м).
                </li>
                <li>
                  <b className="font-semibold">Дексаметазон</b>
                </li>
                <li>
                  <b className="font-semibold">Ибупрофен</b> или{" "}
                  <b className="font-semibold">Солпадеин</b>. Хорошо снимает
                  головную боль при начальных симптомах горной болезни.
                </li>
                <li>
                  <b className="font-semibold">Церукал</b>. Противорвотное
                  средство.
                </li>
                <li>
                  Противопростудные препараты, иммуномодуляторы (
                  <b className="font-semibold">Оциллококцинум</b>,{" "}
                  <b className="font-semibold">Анаферон</b>) их следует начинать
                  принимать сразу же при переохлаждении, ознобах, насморке или
                  при возникновении в группе любых аденовирусных инфекций.
                </li>
                <li>
                  Средства для разжижения мокроты (например,{" "}
                  <b className="font-semibold">АЦЦ</b>, прием которого начинать
                  при любых формах кашля, для ранней профилактики отека легких).
                </li>
              </ul>
            </div>
          </ButtonWithContent>
        </div>
      </div>
      <div className="pt-5" />
      <div className="w-full bg-blue-500 text-white py-12">
        <div className="max-w-4xl w-full mx-auto">
          <Header
            title="Знаковые места Тибета"
            subtitle="Перечень достопримечательностей по регионам"
          />
          <TibetInfo />
        </div>
      </div>

      <div className="pt-10" />
      <div className="max-w-4xl w-full">
        <Header
          title="Фото с прошлых туров"
          subtitle="Нажмите на фото, чтобы открыть галерею"
          id={LINK_PHOTO_GALLERY}
        />
        <div className="pt-6">
          <PhotoGallery />
        </div>
      </div>

      <div className="pt-10" />
      <div className="max-w-4xl">
        <div className="pb-5">
          <Header title="Отзывы участников" subtitle="" />
        </div>
        <div className="grid mb-8 rounded-lg md:mb-12 md:grid-cols-2">
          <Review
            name="Людмила К."
            subtitle="Участница экспедиции 2021"
            text="Спасибо за возможность познакомиться с Тибетом так близко и интимно. Это было невероятное путешествие в мире медитаций и красоты природы. Ваша компания сделала это возможным, и я вам очень благодарна."
          />
          <Review
            name="Марк и Сара"
            subtitle="Участники экспедиции 2019"
            text="Это было наше первое путешествие в Тибет, и мы в восторге! Опыт был духовно поднимающим и вдохновляющим. Организация маршрута и качество услуг были выше всяких похвал. Мы обязательно вернемся снова!"
          />
          <Review
            name="Джон С"
            subtitle="Экспедиция 2022"
            text="Моя поездка в Тибет с этой компанией оказалась невероятным приключением! Горы, монастыри и доброжелательные люди сделали это путешествие незабываемым. Организация была на высшем уровне, и я чувствовал себя в надежных руках на протяжении всей поездки."
          />
        </div>
      </div>

      <div className="max-w-4xl w-full">
        <Header title="Часто задаваемые вопросы" subtitle="" />
        <FAQ />
      </div>

      <div className="pt-10" />
      <div className="max-w-4xl w-full">
        <ApplyForm />
        <Header
          title="Контакты"
          subtitle="Алексей Перчуков"
          id={LINK_CONTACTS}
        />
        <div className="p-4 pt-0">
          <div className="py-2">
            <input
              type="tel"
              value="+7 981 160 88 00"
              className="text-3xl max-w-full"
              readOnly
            />
            <div className="text-[10px] uppercase tracking-wider font-bold">
              Россия
            </div>
          </div>
          <div className="py-2">
            <input
              type="tel"
              value="+86 173 8999 5190"
              className="text-3xl max-w-full"
              readOnly
            />
            <div className="text-[10px] uppercase tracking-wider font-bold">
              Китай
            </div>
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

      <div className="max-w-[30vh] pb-18">
        <div className="flex pt-8 pb-4 opacity-80">
          <div className="w-[33%] h-[40px] flex items-center justify-center">
            <Image
              src="/ctt.png"
              alt="China Tibet Tour"
              height={80}
              width={80}
              className="object-contain w-28 h-[68px] saturate-0 contrast-125"
            />
          </div>
          <div className="w-[33%] h-[40px] flex items-center justify-center">
            <Image
              src="/kailash.png"
              alt="Kailash Explorer"
              height={309}
              width={551}
              className="object-contain w-28 h-16 saturate-0 contrast-150"
            />
          </div>
          <div className="w-[33%] h-[40px] flex items-center justify-center">
            <Image
              src="/tashidelek.png"
              alt="Tashi Delek Travel Agency"
              height={100}
              width={100}
              className="object-contain w-28 h-16 brightness-0 saturate-0 "
            />
          </div>
        </div>
      </div>
      <Copyright />
    </main>
  );
}

const Review: React.FC<{
  name: string;
  subtitle: string;
  text: string;
}> = ({ name, subtitle, text }) => {
  return (
    <figure className="flex flex-col p-4 bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border-r">
      <figcaption className="flex items-center space-x-3">
        <img
          className="rounded-full w-12 h-12"
          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png"
          alt="profile picture"
        />
        <div className="space-y-0.5 font-medium text-left">
          <div>{name}</div>
          <div className="text-xs text-gray-400">{subtitle}</div>
        </div>
      </figcaption>
      <blockquote className="max-w-2xl mx-auto text-gray-800 text-sm lg:mb-8 leading-6">
        <p className="my-3">{text}</p>
      </blockquote>
    </figure>
  );
};

const IconMark = () => {
  return <div className="w-2 h-2 rounded-full bg-yellow-600 mr-2" />;
};

const IconBookmark = () => {
  return (
    <svg
      className="w-4 h-4 text-gray-300 mr-4"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 14 20"
    >
      <path d="M13 20a1 1 0 0 1-.64-.231L7 15.3l-5.36 4.469A1 1 0 0 1 0 19V2a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v17a1 1 0 0 1-1 1Z" />
    </svg>
  );
};

const WhyGoTibetWithUs = () => {
  return (
    <>
      <div className="text-black font-semibold text-3xl py-2 px-4">
        Почему стоит ехать в Тибет с нами?
      </div>

      <WhyGoTibetWithUsStatement title="Глубокое знание Тибета">
        Приезжая в место исключительной силы, хочется узнать как можно больше
        обо всех его традициях, истоках. Мы действительно понимаем Тибет. Наши
        гиды — местные эксперты с огромным опытом, и они помогут вам раскрыть
        все тайны и красоту этой уникальной земли.
      </WhyGoTibetWithUsStatement>
      <WhyGoTibetWithUsStatement title="Эксклюзивные маршруты">
        Мы предлагаем эксклюзивные маршруты, которые недоступны большинству
        туристов. Вы увидите Тибет изнутри, открыв его магию и аутентичность.
      </WhyGoTibetWithUsStatement>
      <WhyGoTibetWithUsStatement title="Индивидуальный подход">
        Мы понимаем, что каждый клиент уникален. Мы создадим маршрут, который
        соответствует вашим интересам и пожеланиям, обеспечивая максимальный
        комфорт и удовлетворение.
      </WhyGoTibetWithUsStatement>
      <WhyGoTibetWithUsStatement title="Высокое качество услуг">
        Мы позаботимся обо всем, чтобы вы получили незабываемые впечатления, не
        переплачивая. Авторские маршруты, достойные отели, заботливые и
        компетентные гиды, хороший сервис. Ваше удовольствие и безопасность
        &emdash; наша главная задача.
      </WhyGoTibetWithUsStatement>
    </>
  );
};

const WhyGoTibetWithUsStatement: React.FC<{
  title: string;
  children: React.ReactNode;
  image?: string;
  imgSize?: number;
}> = ({ title, children, image, imgSize }) => {
  return (
    <div className="">
      <div className="py-4">
        <div className="flex items-center px-4">
          <div className="w-2 h-2 rounded-full bg-yellow-600 mr-2" />
          <div className="font-semibold text-lg">{title}</div>
        </div>
        <div className="leading-7 pt-1 px-4">{children}</div>
        {image && (
          <div className="py-5 md:py-10 flex justify-center">
            <div className="max-w-xl">
              <img
                src={image}
                className=""
                style={imgSize ? { maxWidth: imgSize } : undefined}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const Copyright: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="text-center text-xs text-gray-500 text-sm py-4">
      &copy; {currentYear}, OPEN TIBET
      {/*<br />
      <span className="text-[9px]">
        Дизайн:{" "}
        <a href="https://k60.in" className="hover:text-red-500">
          k60.in
        </a>
  </span>*/}
    </div>
  );
};

import Image from "next/image";
import tibet from "./tibet.module.css";

import {
  Arrow,
  PhotoGallery,
  FAQ,
  AbstractButton,
  ActionButton,
  IconArrowDown,
  IconArrowClose,
  TimetableButton,
  BackgroundSlider,
  ButtonWithContent,
  Header,
  ApplyForm,
  Navbar,
  Footer,
} from "../components/components";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { TibetInfo } from "@/components/TibetInfo";
import {
  LINK_CONTACTS,
  LINK_PHOTO_GALLERY,
  LINK_WELCOME_SCREEN,
  LINK_OFFERS,
  LINK_TIBET_PREPARATION,
  getTourPriceForMonth,
} from "@/utils/constants";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Link from "next/link";

export default function Home() {
  return (
    <main
      lang="ru"
      className="flex min-h-screen flex-col items-center justify-between"
    >
      <div
        className="w-full h-[93vh] mt-[-5vh] relative"
        id={LINK_WELCOME_SCREEN}
      >
        <video
          id="background-video"
          className="absolute w-full h-full object-cover saturate-[1.15] brightness-[1.2]"
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
              "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.2) 25%, rgba(0,0,0,0) 50%)",
          }}
        />
        <div className="h-full flex flex-col justify-end items-center px-4 md:px-20 relative z-100">
          <div className="max-w-4xl w-full mb-[5vh]">
            <div
              className="text-white font-bold text-5xl md:text-[4em] uppercase tracking-wider leading-[1.15em]"
              style={{
                textShadow: "0 3px 20px rgba(0, 0, 0, .6)",
              }}
            >
              Откройте
              <br />
              для&nbsp;себя
              <br />
              Тибет
            </div>
            <div className="text-white py-2 pr-6 text-base md:text-xl">
              Маршруты по доступным ценам
              <br />
              Пакетные туры от 1900 $
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
            'url("https://storage.googleapis.com/opentibet/kailash_alt.jpg")',
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
                от 1900 $ за 14 дней
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
              <div className="flex flex-col  gap-1 max-w-2xl">
                <div className="grid gap-1">
                  <Image
                    src="https://storage.googleapis.com/opentibet/alex-2.jpg"
                    alt=""
                    width={750}
                    height={500}
                    quality={90}
                    className="w-full col-start-1 col-end-3 cursor-pointer"
                  />
                  {/* <AspectRatio ratio={16 / 9} className="bg-muted">
                    <Image
                      src="https://storage.googleapis.com/opentibet/alex-10.jpg"
                      alt="Photo by Drew Beamer"
                      fill
                      className="rounded-md object-cover"
                    />
                  </AspectRatio> */}
                  <Image
                    src="https://storage.googleapis.com/opentibet/alex-10.jpg"
                    alt=""
                    width={375}
                    height={250}
                    quality={75}
                    className="h-full object-cover w-full col-start-3 col-end-4 cursor-pointer"
                  />
                </div>
                <div className="flex gap-1">
                  <div className="bg-blue max-w-[40%] w-full h-full">
                    <Image
                      src="https://storage.googleapis.com/opentibet/alex-12.jpeg"
                      alt=""
                      width={375}
                      height={250}
                      quality={75}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="bg-blue max-w-[60%] w-full h-full">
                    <Image
                      src="https://storage.googleapis.com/opentibet/alex-13.jpg"
                      alt="Фото Алексея Перчукова"
                      width={375}
                      height={250}
                      quality={75}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
                <div className="flex gap-1">
                  <div className="bg-blue max-w-[50%] w-full h-full">
                    <Image
                      src="https://storage.googleapis.com/opentibet/alex-rare.jpg"
                      alt="Фото Алексея Перчукова"
                      width={375}
                      height={250}
                      quality={75}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="bg-blue max-w-[50%] w-full h-full">
                    <Image
                      src="https://storage.googleapis.com/opentibet/alex-shiva.jpg"
                      alt=""
                      width={375}
                      height={250}
                      quality={75}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
                {/* <Image
                  src="https://storage.googleapis.com/opentibet/alex-11.jpeg"
                  alt=""
                  width={375}
                  height={250}
                  quality={75}
                  className="w-full col-start-2 col-end-4 row-start-2 row-end-4  cursor-pointer"
                /> */}
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

      <div
        className="mt-12 max-w-4xl w-full scroll-m-[60px] md:scroll-m-[64px]"
        id={LINK_OFFERS}
      >
        <Header title="Программы на 2024" subtitle="" />
        <p className="mx-4 mb-6">
          Мы предлагаем как регулярные пакетные туры, так и эксклюзивные
          авторские маршруты.
        </p>
        <Tabs defaultValue="reg" className="w-full px-4">
          <TabsList className="shadow-inner shadow-black/20 border-black border-[2px] md:border-2 p-2 rounded-full h-min bg-white -mx-3 z-30 relative self-center flex">
            <TabsTrigger
              value="reg"
              className="rounded-full rounded-r-none w-1/2 h-[70px] m-0 transition-none md:whitespace-nowrap whitespace-normal 
              data-[state=inactive]:text-blue-500 shadow-xl shadow-black/30 data-[state=active]:bg-blue-500 data-[state=active]:text-white"
            >
              <h3 className="px-2 md:px-6 font-bold uppercase leading-4 tracking-wide md:tracking-widest text-sm md:text-lg">
                Пакетные <br className="md:hidden" />
                туры
              </h3>
            </TabsTrigger>
            <TabsTrigger
              value="exc"
              className="rounded-full rounded-l-none w-1/2 h-[70px] m-0 transition-none md:whitespace-nowrap whitespace-normal
              data-[state=inactive]:text-black shadow-xl shadow-black/30 data-[state=active]:bg-black data-[state=active]:text-yellow-500"
            >
              <h3 className="px-2 md:px-6 font-bold uppercase leading-4 tracking-wide whitespace-nowrap md:tracking-widest text-sm md:text-lg">
                {/*<div className="rounded-full w-[1em] h-[1em] bg-yellow-500 inline-block mr-[0.33em] align-middle mb-[0.25em]"></div>*/}
                <span className="text-yellow-500 leading-3 text-lg md:text-2xl">
                  ★
                </span>{" "}
                Эксклюзивные <br className="md:hidden" />
                туры
              </h3>
            </TabsTrigger>
          </TabsList>

          <TabsContent
            className="bg-gray-200 mt-4 -mx-3 rounded-sm"
            value="reg"
          >
            <h4 className="font-bold mx-3 pt-3 mt-2 leading-5 text-xl text-blue-500">
              Пакетные туры OPEN TIBET
            </h4>
            <p className="font-semibold mx-3 mb-3 text-blue-500">
              Всё, что нужно паломнику. От 1900$
            </p>
            <div>
              <Link href={"/tours/tibet-may-2024"} target="_blank">
                <TimetableButton
                  title="Май"
                  subtitle="2—21 мая"
                  days={14}
                  price={getTourPriceForMonth("may")}
                />
              </Link>
              <Link href={"/tours/tibet-june-2024"} target="_blank">
                <TimetableButton
                  title="Июнь"
                  subtitle="6—19 июня"
                  days={14}
                  price={getTourPriceForMonth("june")}
                />
              </Link>
              <Link href={"/tours/tibet-july-2024"} target="_blank">
                <TimetableButton
                  title="Июль"
                  subtitle="1—23 июля"
                  days={14}
                  price={getTourPriceForMonth("july")}
                />
              </Link>
              <Link href={"/tours/tibet-august-2024"} target="_blank">
                <TimetableButton
                  title="Август"
                  subtitle="2—19 августа"
                  days={14}
                  price={getTourPriceForMonth("august")}
                />
              </Link>
              <Link href={"/tours/tibet-september-2024"} target="_blank">
                <TimetableButton
                  title="Сентябрь"
                  subtitle="2—21 сентября"
                  days={14}
                  price={getTourPriceForMonth("september")}
                />
              </Link>
              <Link href={"/tours/tibet-october-2024"} target="_blank">
                <TimetableButton
                  title="Октябрь"
                  subtitle="2—23 октября"
                  days={14}
                  price={getTourPriceForMonth("october")}
                />
              </Link>
            </div>
          </TabsContent>

          <TabsContent className="bg-black mt-4 -mx-3 rounded-sm" value="exc">
            <h4 className="font-bold mx-3 pt-3 mt-2 leading-5 text-xl text-yellow-500">
              Эксклюзивные туры
            </h4>
            <p className="font-semibold mx-3 mb-3 text-yellow-500">
              Авторские маршруты Алексея Перчукова
            </p>
            <div>
              <TimetableButton
                title="Май"
                subtitle="2—19 мая"
                days={20}
                price={3600}
                bgColor="yellow-500"
                fgColor="black"
                accentColor="white"
              />
              <TimetableButton
                title="Июнь"
                subtitle="2—21 июнь"
                days={20}
                price={3600}
                bgColor="yellow-500"
                fgColor="black"
                accentColor="white"
              />
              <TimetableButton
                title="Сентябрь"
                subtitle="2—23 сентября"
                days={21}
                price={3600}
                bgColor="yellow-500"
                fgColor="black"
                accentColor="white"
              />
              <TimetableButton
                title="Октябрь"
                subtitle="2—23 октября"
                days={21}
                price={3600}
                bgColor="yellow-500"
                fgColor="black"
                accentColor="white"
              />
            </div>
          </TabsContent>
        </Tabs>
      </div>
      <div className="pt-10" />
      <div className="max-w-4xl w-full" id={LINK_TIBET_PREPARATION}>
        <div className="pb-5">
          <Header title="Подготовка к поездке" subtitle="" />
          <p className="mx-4 mb-6">
            Поездка в Тибет требует тщательной подготовки. Мы собрали для вас
            сведения, которые помогут вам подготовиться духовно и физически.
          </p>
          <p className="mx-4 mb-6"></p>
        </div>
        <div>
          <ButtonWithContent
            title="Личный опыт Алексея&nbsp;Перчукова"
            subtitle=""
          >
            <div className="p-4 leading-8 hyphens-auto">
              <p className="leading-8">
                Хочу поделиться своим опытом, благодаря которому мне удалось
                достичь уникальных результатов без использования медицинских
                препаратов.
              </p>
              <p className="my-4 leading-8">
                Наилучшим образом подготовиться к путешествию в Тибет мне
                помогли сухие голодания. Этот метод хорош тем, что имеет своим
                следствием комплексную перестройку деятельности всех систем
                организма. В нем запускаются естественные оздоровительные
                процессы. Если в 2007 году я с большим трудом прошел обычную
                Кору за три дня, то после двух лет практики сухих голоданий (3,
                5, 7, 9 и 11 дней; каждый квартал я добавлял по два дня), мне не
                составило труда обойти священную гору за 9 часов.
              </p>
              <p className="my-4 leading-8">
                Перед тем, как приступать к голоданиям, обязательно
                проконсультируйтесь с врачом. Рекомендую начать с соблюдения два
                раза в месяц экадаши (11-й день после полнолуния и новолуния).
                Каждый квартал можно проводить длительные (3 дня и более) сухие
                голодания, то есть полное исключение пищи и воды, или голодания
                на воде. Если вы чувствуете непосредственную связь с Кайласом,
                то лучше соблюдать как экадаши, так и прадош (13-й лунный день
                на растущую и убывающую луну) – считается, что постящийся в эти
                дни получает особое благословение Шивы.
              </p>
              <p className="my-4 leading-8">
                Важнейшее значение имеет выход из голоданий. Использование при
                этом высокочастотной пищи, то есть продуктов с высокой частотой
                вибраций, в которой не могут выжить вредные микроорганизмы,
                увеличивает вибрацию всех клеток организма, из-за чего
                повышается иммунитет и кардинально улучшается самочувствие.
              </p>
              <p className="my-4 leading-8">
                После нескольких месяцев подобных практик вы легко перейдете к
                вегетарианству, а затем и к раздельному питанию.
              </p>
              <p className="my-4 leading-8">
                Но это еще не все. Изменения будут происходить на ментальном
                уровне – появится потребность в духовной (высокочастотной)
                информации. Ее можно найти в ведической литературе. Если
                говорить о моем опыте, то после голоданий я по-новому, более
                глубоко стал понимать Махабхарату , Пураны , а также увлекся
                учением Г. И. Гурджиева .
              </p>
              <p className="my-4 leading-8">
                Аскетические практики позволяют настроить организм на
                энергетические поля Тибета и смягчают во время поездки их
                воздействие, зачастую разрушительное для неподготовленного
                человека. Конечной целью подобных практик, несомненно, является
                изменение сознания. Я думаю, что этого можно достичь и с помощью
                произнесения мантр или чтения молитв, однако такой путь займет
                много времени, а самое главное – для него нужна сильная вера.
              </p>
              <p className="my-4 leading-8">
                Одновременно с голоданиями я регулярно выполнял комплекс
                упражнений, связанных с задержкой дыхания. Вызывание
                искусственной гипоксии в обычных условиях ускоряет начало
                долговременной высотной адаптации в горах
              </p>
            </div>
          </ButtonWithContent>
        </div>
        <div>
          <ButtonWithContent title="Высотная болезнь" subtitle="">
            <div className="p-4 leading-8">
              Это главная опасность, подстерегающая путешественников в горах.
              Из-за разреженного воздуха и недостаточного количества кислорода в
              организме человека развивается гипоксия.
              <br />
              <br />
              Разновидностью высотной болезни является горная болезнь, когда
              гипоксия усугубляется переутомлением, резкими перепадами
              температур, охлаждением и обезвоживанием организма и пр.
              Вследствие нехватки кислорода клеточные мембраны и стенки сосудов
              становятся более проницаемыми, а кровяное давление растет – так
              организм пытается увеличить перенос кислорода в ткани.
              <br />
              <br />
              В результате плазма крови начинает просачиваться через стенки
              сосудов и возникают отеки. Наиболее опасными являются отек
              головного мозга и легких. Человек испытывает головную боль,
              головокружение, тошноту.
              <br />
              <br />
              Дальнейшее развитие болезни характеризуется замедлением реакции,
              ухудшением координации движений, неадекватным восприятием
              действительности, потерей сознания. При отсутствии должного ухода
              и лечения может наступить смерть.
            </div>
          </ButtonWithContent>
          <ButtonWithContent title="Акклиматизация и адаптация" subtitle="">
            <div className="p-4 leading-8">
              Различают краткосрочную и долгосрочную высотные адаптации.
              <br />
              <br />
              Во время краткосрочной адаптации организм человека мобилизует все
              доступные ему средства для интенсификации процесса переноса
              кислорода: увеличиваются частота дыхания, сердцебиение, мозговой
              кровоток (ткани мозга вообще потребляют значительно больше
              кислорода, чем мышцы). Из депо селезенки экстренно вбрасываются в
              кровь содержащие гемоглобин эритроциты. Перераспределение
              кровотока, с одной стороны, приводит к головным болям, с другой –
              может быть причиной нарушения терморегуляции организма.
              <br />
              <br />
              Для комфортного многодневного пребывания в горах необходима
              долгосрочная высотная адаптация. Фактически это глубокая
              структурная перестройка всего организма, направленная на
              увеличение потенциала жизненно важных систем, более экономное
              расходование внутренних ресурсов, совершенствование механизмов
              утилизации кислорода в тканях.
              <br />
              <br />
              Процесс акклиматизации человека к пребыванию на высоте может быть
              поэтапным и ступенчатым.
              <br />
              <br />
              Поэтапный способ акклиматизации происходит при постоянном подъеме
              вверх. Человек взбирается на первую высоту маршрута. Кислорода уже
              не хватает, начинается краткосрочная адаптация организма, которая
              через некоторое время переходит в долгосрочную. Появившиеся
              симптомы легкой высотной болезни (учащенный пульс, легкая одышка,
              возможная головная боль) проходят, и путешественник чувствует в
              себе силы подниматься еще выше. Дальше все повторяется вновь и т.
              д. При таком способе акклиматизации силы и ресурсы организма
              расходуются неэкономно; с каждой новой высотой человек все больше
              устает, а интенсивность перестройки его организма снижается.
              <br />
              <br />
              Наиболее эффективной представляется ступенчатая акклиматизация. В
              этом случае подъемы чередуются со спусками (принцип пилы). Вы
              поднимаетесь на высоту, затем спускаетесь, восстанавливаете свои
              силы, поднимаетесь еще выше, снова спускаетесь и т.д. Данная схема
              восхождения обеспечит максимальную адаптацию организма. Для
              успешного прохождения Коры и хорошего самочувствия в течение всего
              путешествия примерный маршрут должен строиться следующим образом:
              два дня – набор высоты, день – спуск, затем день отдыха. Далее
              вновь подъем на уже достигнутую ранее высоту, два дня – дальнейший
              подъем вверх, потом опять дневной переход вниз и день отдыха. Отек
              внутренних органов и тканей в положении лежа усиливается. Связано
              это с тем, что кровь уходит из мышц в депо и ткани, что лишь
              усугубляет отек. Кроме того, в положении лежа верхняя часть
              туловища становится более полнокровна, и на отток перестает
              действовать гравитация.
            </div>
          </ButtonWithContent>
          <ButtonWithContent title="Ночевки в горах" subtitle="">
            <div className="p-4 leading-8">
              Наибольшую опасность для неподготовленных путешественников
              представляют ночевки в горах, когда во время сна контроль сознания
              над дыханием отключается, а тело принимает горизонтальное
              положение. Во время бодрствования днем в горах при нехватке
              кислорода глубина и частота дыхания усиливаются, увеличивается
              скорость выведения из крови углекислого газа. А ведь именно
              высокий уровень углекислого газа в крови является важным стимулом
              усиления возбуждения дыхательного центра. Во сне дефицит кислорода
              сказывается больше, и нередко возникает следующая ситуация: сердцу
              не хватает кислорода, интенсивность прокачки крови замедляется,
              количество кислорода в организме еще больше уменьшается. Важным
              фактором является естественная активизация в ночной период времени
              парасимпатической части вегетативной нервной системы, в первую
              очередь такого ее представителя, как нерв вагус (10-я пара
              черепно-мозговых нервов). Благодаря ему усиливается активизация
              процессов, происходящих во внутренних органах, и снижаются частота
              сердечных сокращений и сердечный выброс, что в конечном итоге
              ведет к нарастанию отека в тканях и к прогрессированию тканевой
              гипоксии. В итоге утром человек вообще не в состоянии что-либо
              делать.
              <br />
              <br />
              Во время высокогорных ночевок необходимо тщательным образом
              контролировать пульс. Допустим, что при легкой форме горной
              болезни вечером ваш пульс обычно превышает 100 ударов в минуту.
              Тогда к утру он должен снизиться до 80–90 ударов в минуту. Если
              этого не произошло, значит, организм не адаптировался к высоте, и
              дальнейший подъем не рекомендуется.
              <br />
              <br />
              Сон при высокогорных ночевках должен быть обязательно крепким, а
              пробуждение – легкое. Тогда вы будете чувствовать себя
              отдохнувшими. Только во время крепкого сна уменьшается потребление
              мозгом кислорода, восстанавливается активность всех центров
              организма и накапливается необходимая для дальнейших переходов
              энергия. Такой сон – лучшая профилактика отека мозга.
              <br />
              <br />
              Важнейшее значение имеет гигиена сна после дневного перехода. Как
              правило, вечером начинается головная боль, вызванная кислородным
              голоданием мозга. Это происходит потому, что днем легкие и сердце
              интенсивно работают, обеспечивая мышечную активность и поступление
              насыщенной кислородом крови в мозг, а вечером физическая
              активность снижается. Головную боль нельзя терпеть: она будет
              только усиливаться, а общее самочувствие – ухудшаться. Немедленно
              принимайте таблетки. Мне, например, очень хорошо помогает
              спазмалгон, а профессиональные альпинисты рекомендуют растворимый
              солпадеин: он не только снимает головную боль, но и улучшает общее
              состояние организма.
              <br />
              <br />
              Перед сном также нельзя пить кофе. Кроме того, необходимо
              обеспечить хорошую вентиляцию спального помещения – в противном
              случае к утру гипоксия усилится. Во сне не допускать положение ног
              выше головы!
              <br />
              <br />
              Еще одной проблемой является бессонница. Попробуйте расслабиться
              под музыку. Если в течение часа уснуть не получится, надо принять
              лекарственный препарат, например, димедрол. Это и снотворное, и
              хороший антигистаминный препарат. Также могу порекомендовать более
              легкие таблетки: мелатонин (3мг) или стрезам. Если принимать их в
              указанных в инструкции дозах, проблем не будет. Перед поездкой,
              обязательно проконсультируйтесь с врачом и убедитесь в
              эффективности и безвредности этих препаратов для своего организма
              и отсутствии побочных эффектов.
              <br />
              <br />
              Как и в случае с головной болью, терпеть бессонницу ни в коем
              случае нельзя. Забудьте аргументы, что снотворное может привести к
              вялости поутру. Не приняв вовремя таблетки, человек не высыпается
              и на следующий день становится еще более апатичным, чем от приема
              снотворного. Физические тренировки
              <br />
              <br />
              Перед поездкой в Тибет физические тренировки необходимы для
              улучшения работы сердца, сосудов и дыхательной системы. За два
              месяца или за месяц до отъезда начните совершать пробежки или
              катайтесь на велосипеде, желательно не менее чем три раза в неделю
              по 5 км, а лучше всего ежедневно по 10 км. Тренировки не должны
              быть утомительными, ведь главное в путешествии – это хорошее
              физическое и психоэмоциональное самочувствие.
            </div>
          </ButtonWithContent>
          <ButtonWithContent
            title="Что взять с собой?"
            subtitle="Список необходимых вещей для поездки в Тибет"
          >
            <div className="p-4">
              <ul className="list-decimal list-outside ms-5 leading-7 space-y-1 hyphens-auto">
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
            <div className="p-4 leading-8 hyphens-auto">
              <p className="leading-8">
                Перед поездкой обратитесь к врачу обязательно!
              </p>
              <p className="my-4 leading-8">
                Посетите своего лечащего врача, посоветуйтесь, какие средства
                вам лучше подойдут для снятия описанных ниже симптомов (в первую
                очередь – головная боль, бессонница, проблемы с давлением). Но
                даже самому опытному доктору будет трудно предсказать реакцию
                организма человека, впервые оказавшегося в условиях высокогорья.
              </p>
              <p className="my-4 leading-8">
                Основываясь на многолетнем опыте, могу порекомендовать до
                поездки и во время нее принимать поливитамины, содержащие все
                микроэлементы, например «Витрум», «Дуовит», «Центрум», а также
                ферментные средства – «Мезим» или «Биозим». На собственном опыте
                я убедился в том, что пищеварение на высоте работает не так, как
                в обычных условиях.
              </p>
              <p className="my-4 leading-8">
                Для улучшения общего самочувствия можно использовать такие
                препараты, как «Фенотропил», «Эскузиан», глютаминовая кислота,
                «Панангин».
              </p>
              <p className="my-4 leading-8">
                Для повышения иммунитета и укрепления стенок сосудов –
                «Капилар». Прием лучше начать за 15–60 дней до поездки, в
                зависимости от самочувствия.
              </p>
              <p className="my-4 leading-8">
                Если вы метеозависимы, у вас частые головные боли или
                остеохондроз шейного отдела позвоночника, то для улучшения
                мозгового кровообращения примерно за 30 дней до поездки нужно
                начать принимать «Кавинтон» или «Гинкго Билоба».
              </p>
              <p className="my-4 leading-8">
                Для преодоления последствий гипоксии прекрасно подходят
                «Гипоксен» (за неделю до путешествия), а также «Глицин» и
                «Милдронат». Два последних препората надо начать принимать за
                две недели до поездки. «Милдронат» – хороший энергетик для
                профилактики сердечной недостаточности.
              </p>
              <p className="my-4 leading-8">
                Для снижения воздействия на организм деятельности активно
                потребляющих кислород аэробных бактерий толстого кишечника
                рекомендую «Линекс», «Бифиформ», а также различные пробиотики и
                пребиотики (за месяц до поездки). Это очень важно, так как
                процесс пищеварения на высоте проходит иначе, и обязательно надо
                помочь организму переваривать и усваивать пищу.
              </p>
              <p className="my-4 leading-8">
                Для защиты печени от последствий гипоксии подойдут «Карсил»,
                «Ливолин Форте», «Метионин».
              </p>
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

      <Footer />
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
        &mdash; наша главная задача.
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

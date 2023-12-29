"use client";

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
  TourButton,
  BackgroundSlider,
  ButtonWithContent,
  Header,
  ApplyForm,
  Navbar,
  Footer,
  WithLanguageProvider,
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
import Link from "next/link";
import {
  Language,
  LanguageProvider,
  useLanguage,
  useTranslate,
  useTranslateFn,
  useTranslateMap,
} from "@/lib/language";

export default function Page() {
  return (
    <WithLanguageProvider>
      <Home />
    </WithLanguageProvider>
  );
}

function Home() {
  const translate = useTranslateFn();
  return (
    <main
      lang="ru"
      className="flex min-h-screen flex-col items-center justify-between"
    >
      <Navbar />
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
              {translate({
                ru: (
                  <>
                    Откройте
                    <br />
                    для&nbsp;себя
                    <br />
                    Тибет
                  </>
                ),
                en: (
                  <>
                    Discover
                    <br />
                    Tibet
                  </>
                ),
              })}
            </div>
            <div className="text-white py-2 pr-6 text-base md:text-xl">
              {translate({
                ru: (
                  <>
                    Маршруты по доступным ценам
                    <br />
                    Пакетные туры от 1900 $
                  </>
                ),
                en: (
                  <>
                    Routes at affordable prices
                    <br />
                    Package tours from $1900
                  </>
                ),
              })}
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

      <div
        className="bg-yellow-400 p-4 max-w-6xl mt-2 mb-10 mx-auto"
        style={{
          backgroundImage: 'url("/trees.jpg")',
          backgroundSize: "300px",
          backgroundBlendMode: "overlay",
          backgroundPosition: "center",
        }}
      >
        <div
          className="bg-red-500/80 text-black p-6 md:p-10 border-yellow-400"
          style={{
            backgroundImage: 'url("/trees.jpg")',
            backgroundSize: "300px",
            backgroundBlendMode: "overlay",
            backgroundPosition: "center",
          }}
        >
          <p className="mb-4 text-yellow-400 font-bold uppercase tracking-wider">
            2023 — год, превзошедший все мои ожидания и планы.
          </p>
          <p className="mb-4">
            Три года пост-пандемии я ждал, когда же наконец откроют границы
            Тибета. И все это время я планировал маршруты, разрабатывал
            программы, поддерживал контакты с местными партнерами. И время
            пришло!
          </p>
          <p className="mb-4">
            2023 год подарил мне гораздо больше, чем я мог себе представить.
            Я и мечтать не мог о том, сколько всего мне удастся совершить.
            Но Тибет, Кайлас — обитель Шивы, поддерживают тех, кто предан
            и верит. Как иначе объяснить это:
          </p>
          <p className="mb-4">
            — С мая по октябрь 2023 я совершил около 30 кор. Вдумайтесь, друзья!
            Большинство паломников делают одну-две за всю жизнь!
          </p>
          <p className="mb-4">
            Ради этого стоило ждать столько времени. Но это не всё.
          </p>
          <p className="mb-4">
            — За время поездок в Тибет в этом году я смог создать договоренности
            с правительством Тибета о специальных условиях для русскоговорящих
            туристов. И совместно с аккредитованной при правительстве турфирмой
            открыл международный проект OPEN TIBET.
          </p>
          <p className="mb-4">
            Он во многом «самый-самый». Самые бюджетные цены, самые комфортные
            отели и трансферы, самые компетентные гиды.
          </p>
          <p className="mb-4">
            — И как вишенка на торте, в завершение великолепного сезона,
            я написал новый, дополненный путеводитель по Тибету. Совсем скоро
            выйдет в печать. Издательство «Эксмо», серия «Оранжевый гид».
          </p>
          <p className="mb-4">
            Я повторюсь — Тибет, Кайлас — дают помощь всем, кто предан и верит.
          </p>
          <p className="mb-4">
            Посмотрите, какие программы и предложения мы подготовили для вас.
            Если вы уже бывали в Тибете — найдете новые программы для себя. Если
            едете первый раз — получите самое выгодное предложение и убедитесь,
            что лучше нас организатора туров просто нет.
          </p>
          <p className="mb-16">
            До встречи в Тибете, друзья.
            <br />
            И с наступающим новым годом!
          </p>
          <p className="mb-4 text-yellow-400 font-bold">
            Алексей Перчуков,
            <br />
            основатель проекта OPEN TIBET
          </p>
        </div>
      </div>

      <h2 className="text-3xl font-semibold text-center max-w-4xl mx-auto mb-10 mt-5">
        {translate({
          ru: "Мы делаем Тибет доступнее для вас",
          en: "We make Tibet more accessible to you",
        })}
      </h2>

      <div className="max-w-4xl">
        <div className="p-4 pt-0">
          <p className="text-xl leading-9 text-center">
            {translate({
              ru: (
                <>
                  Путешествия с <b>OPEN TIBET</b> &mdash; это:
                </>
              ),
              en: <>Travel with OPEN TIBET is:</>,
            })}
          </p>
          <ul className="py-4 mt-3 max-w-md text-xl w-fit mx-auto space-y-3 list-inside">
            <li className="flex items-center">
              <IconMark />
              {translate({
                ru: "Размещение в хороших отелях",
                en: "Accommodation in good hotels",
              })}
            </li>
            <li className="flex items-center">
              <IconMark />
              {translate({
                ru: "Качественный транспорт",
                en: "Quality transport",
              })}
            </li>
            <li className="flex items-center">
              <IconMark />
              {translate({
                ru: "Квалифицированные гиды",
                en: "Qualified guides",
              })}
            </li>
            <li className="flex items-center">
              <IconMark />
              {translate({
                ru: "Самые доступные цены",
                en: "The most affordable prices",
              })}
            </li>
          </ul>
        </div>
      </div>

      <p className="px-4 mt-5 mb-4 max-w-4xl mx-auto leading-7">
        {translate({
          ru: `Мы много трудились над каждым элементом путешествий и получили
                всестороннюю поддержку правительства Тибета, чтобы обеспечить самые
                лучшие предложения для паломников.`,
          en: "We have worked hard on every element of the travel experience and have received the full support of the Tibetan government to ensure the best possible offerings for pilgrims.",
        })}
      </p>

      <p className="px-4 mb-8 max-w-4xl mx-auto leading-7">
        {translate({
          ru: `Это стало возможно благодаря партнёрству трёх агентств, имеющих годы
          опыта и высочайший профессионализм.`,
          en: "This became possible thanks to the partnership of three agencies with years of experience and the highest professionalism.",
        })}
      </p>

      <h3 className="uppercase tracking-[.4em] mt-4 mb-3 font-semibold text-sm">
        {translate({
          ru: "Организаторы",
          en: "ORGANIZERS",
        })}
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
            <span className="font-semibold">
              {translate({
                ru: "Тибетский туристический офис",
                en: "Tibetan Tourism Office",
              })}
            </span>
            <br />{" "}
            <span>
              {translate({
                ru: "правительство Тибета",
                en: "Government of Tibet",
              })}
            </span>
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
            <span className="font-semibold">
              {translate({
                ru: "Турагентство Kailash Explorer",
                en: "Travel agency Kailash Explorer",
              })}
            </span>
            <br />
            {translate({
              ru: "Россия, Санкт Петербург",
              en: "Russia, St. Petersburg",
            })}
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
            <span className="font-semibold">
              {translate({
                ru: "Турагентство Tashi Delek",
                en: "Tashi Delek Travel Agency",
              })}
            </span>
            <br />
            {translate({
              ru: "Тибет, Лхаса",
              en: "Tibet, Lhasa",
            })}
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
              {translate({
                ru: "Тибет меняет жизнь. Проверьте и вы",
                en: "Tibet changes lives. Check it out too",
              })}
            </div>
            <div className="text-xl font-light w-9/12 mx-auto text-center leading-7">
              {translate({
                ru: `Мы знаем и любим Тибет. Мы хотим, чтобы как можно больше людей
                открывали для себя эту священную землю.`,
                en: "We know and love Tibet. We want as many people as possible to discover this sacred land.",
              })}
              <br />
              <br />
            </div>
            <div className="flex max-w-[800px] mx-auto items-baseline flex-wrap justify-around pt-8 mb-12">
              <ActionButton />
              <h2 className="text-2xl font-light mt-3 leading-8">
                {translate({
                  ru: `от 1900 $ за 14 дней`,
                  en: "from 1900 $ for 14 days",
                })}
              </h2>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-gray-800 text-white pb-12">
        <div className="max-w-4xl mt-6 mx-auto">
          <div className="w-full pt-8">
            <Header
              title={
                translate({
                  ru: "Посмотрите фильм о Тибете",
                  en: "Watch a film about Tibet",
                }) as string
              }
              subtitle={
                translate({
                  ru: "снятый Виктором Щербаковым и Алексеем Перчуковым",
                  en: "filmed by Viktor Shcherbakov and Alexey Perchukov",
                }) as string
              }
            />
            <div className="px-4 py-2">
              <p className="py-4 pb-0 leading-7 hyphens-auto">
                {translate({
                  ru: `Мы организуем регулярные ежемесячные туры в Тибет по уникальной
                  программе. В фильме показана одна из наших программ. Оцените
                  красоты местных монастырей и природы, силу и энергию тибетской
                  земли:`,
                  en: "We organize regular monthly tours to Tibet according to a unique program. The film shows one of our programs. Appreciate the beauty of local monasteries and nature, the strength and energy of the Tibetan land:",
                })}
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
                  className={`${tibet.alexeyPortrait} object-cover rounded-full w-full h-full`}
                  src="https://storage.googleapis.com/opentibet/alexey-portrait.jpeg"
                  alt="profile picture"
                />
              </div>
              <div className="flex items-center flex-1 pl-4">
                <div>
                  <div className="text-xl">
                    {translate({
                      ru: `Алексей Перчуков`,
                      en: "Alexey Perchukov",
                    })}
                  </div>
                  <div className="text-sm font-semibold">
                    {translate({
                      ru: `Координатор проекта OPEN TIBET`,
                      en: "Project Coordinator OPEN TIBET",
                    })}
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
              {translate({
                ru: (
                  <>
                    Алексей &mdash; автор нескольких профессиональных
                    путеводителей по Тибету на русском языке, со-автор фильма{" "}
                  </>
                ),
                en: (
                  <>
                    Alexey is the author of several professional guides to Tibet
                    in Russian, co-author of the film{" "}
                  </>
                ),
              })}

              <a
                className="text-yellow-600"
                href="https://www.youtube.com/watch?v=OhtIDb8ioT0"
                target="_blank"
              >
                {translate({
                  ru: "«Тибет, место которое меняет жизнь»",
                  en: "“Tibet, a place that changes your life”",
                })}
              </a>
              {translate({
                ru: (
                  <>
                    . Докладчик многочисленных международных конференции,
                    посвященных Кайласу. Автор статьи{" "}
                  </>
                ),
                en: (
                  <>
                    Speaker of numerous international conferences dedicated to
                    Kailash. The author of the article{" "}
                  </>
                ),
              })}
              <a
                className="text-yellow-600"
                href="https://kailash-explorer.com/2017/01/26/opisanie-spiralnoj-kory-gory-kajlas/"
              >
                {translate({
                  ru: "«Спиральная Кора»",
                  en: "“Spiral Kore”",
                })}
              </a>
              {translate({
                ru: `, исследователь , который поднялся на все плечи Кайласа и посетил
                все священные долины Мандалы Кайласа.`,
                en: `, a researcher who climbed all the shoulders of Kailash and visited all the sacred valleys of the Kailash Mandala.`,
              })}
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
              <div className="flex flex-col gap-1 max-w-2xl">
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
                {translate({
                  ru: <>Больше фото в </>,
                  en: <>More photos on </>,
                })}
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
      <ToursTabs />
      <div className="pt-10" />
      <div className="max-w-4xl w-full" id={LINK_TIBET_PREPARATION}>
        <div>
          <Header
            title={
              translate({
                ru: "Подготовка к поездке",
                en: "Preparing for the trip",
              }) as string
            }
            subtitle=""
          />
          <p className="mx-4">
            {translate({
              ru: `Поездка в Тибет требует тщательной подготовки. Мы собрали для вас
              сведения, которые помогут вам подготовиться духовно и физически.`,
              en: `A trip to Tibet requires careful preparation. We have collected information for you that will help you prepare spiritually and physically.`,
            })}
          </p>
        </div>
        <div className="p-1">
          <div className="w-full h-[315px] mt-5 mb-2 md:h-96">
            <iframe
              width="100%"
              // height="315"
              height="100%"
              src="https://www.youtube.com/embed/YmAMQHDuP2k?si=pfVRQfVv36idRIrm"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
        <div>
          <ButtonWithContent
            title={
              translate({
                ru: "Личный опыт Алексея Перчукова",
                en: "Personal experience of Alexey Perchukov",
              }) as string
            }
          >
            <div className="p-4 leading-8 hyphens-auto">
              <p className="leading-8">
                {translate({
                  ru: `Хочу поделиться своим опытом, благодаря которому мне удалось
              достичь уникальных результатов без использования медицинских
              препаратов.`,
                  en: `I want to share my experience, thanks to which I was able to achieve unique results without the use of medications.`,
                })}
              </p>
              <p className="my-4 leading-8">
                {translate({
                  ru: `Наилучшим образом подготовиться к путешествию в Тибет мне
                  помогли сухие голодания. Этот метод хорош тем, что имеет своим
                  следствием комплексную перестройку деятельности всех систем
                  организма. В нем запускаются естественные оздоровительные
                  процессы. Если в 2007 году я с большим трудом прошел обычную
                  Кору за три дня, то после двух лет практики сухих голоданий (3,
                  5, 7, 9 и 11 дней; каждый квартал я добавлял по два дня), мне не
                  составило труда обойти священную гору за 9 часов.`,
                  en: `Dry fasting helped me best prepare for the trip to Tibet. This method is good because it results in a comprehensive restructuring of the activities of all body systems. Natural healing processes are launched in it. If in 2007 I walked through the usual Kora in three days with great difficulty, then after two years of practicing dry fasting (3, 5, 7, 9 and 11 days; I added two days every quarter), it was not difficult for me to walk around the sacred mountain in 9 hours.`,
                })}
              </p>
              <p className="my-4 leading-8">
                {translate({
                  ru: `Перед тем, как приступать к голоданиям, обязательно
                  проконсультируйтесь с врачом. Рекомендую начать с соблюдения два
                  раза в месяц экадаши (11-й день после полнолуния и новолуния).
                  Каждый квартал можно проводить длительные (3 дня и более) сухие
                  голодания, то есть полное исключение пищи и воды, или голодания
                  на воде. Если вы чувствуете непосредственную связь с Кайласом,
                  то лучше соблюдать как экадаши, так и прадош (13-й лунный день
                  на растущую и убывающую луну) – считается, что постящийся в эти
                  дни получает особое благословение Шивы.`,
                  en: `Before you start fasting, be sure to consult your doctor. I recommend starting by observing Ekadashi twice a month (11th day after the full moon and new moon). Every quarter you can carry out long-term (3 days or more) dry fasting, that is, complete exclusion of food and water, or fasting on water. If you feel a direct connection with Kailash, then it is better to observe both Ekadashi and Pradosh (the 13th lunar day on the waxing and waning moon) - it is believed that the person fasting on these days receives a special blessing from Shiva.`,
                })}
              </p>
              <p className="my-4 leading-8">
                {translate({
                  ru: `Важнейшее значение имеет выход из голоданий. Использование при
                  этом высокочастотной пищи, то есть продуктов с высокой частотой
                  вибраций, в которой не могут выжить вредные микроорганизмы,
                  увеличивает вибрацию всех клеток организма, из-за чего
                  повышается иммунитет и кардинально улучшается самочувствие.`,
                  en: `The most important thing is to get out of fasting. The use of high-frequency food, that is, products with a high frequency of vibrations in which harmful microorganisms cannot survive, increases the vibration of all cells of the body, which increases immunity and radically improves well-being.`,
                })}
              </p>
              <p className="my-4 leading-8">
                {translate({
                  ru: `После нескольких месяцев подобных практик вы легко перейдете к
                  вегетарианству, а затем и к раздельному питанию.`,
                  en: `After several months of such practices, you will easily switch to vegetarianism, and then to separate meals.`,
                })}
              </p>
              <p className="my-4 leading-8">
                {translate({
                  ru: `Но это еще не все. Изменения будут происходить на ментальном
                  уровне – появится потребность в духовной (высокочастотной)
                  информации. Ее можно найти в ведической литературе. Если
                  говорить о моем опыте, то после голоданий я по-новому, более
                  глубоко стал понимать Махабхарату , Пураны , а также увлекся
                  учением Г. И. Гурджиева.`,
                  en: `But that is not all. Changes will occur at the mental level - there will be a need for spiritual (high-frequency) information. It can be found in Vedic literature. If we talk about my experience, then after fasting I began to understand the Mahabharata, Puranas in a new, more profound way, and also became interested in the teachings of G.I. Gurdjieff.`,
                })}
              </p>
              <p className="my-4 leading-8">
                {translate({
                  ru: `Аскетические практики позволяют настроить организм на
                  энергетические поля Тибета и смягчают во время поездки их
                  воздействие, зачастую разрушительное для неподготовленного
                  человека. Конечной целью подобных практик, несомненно, является
                  изменение сознания. Я думаю, что этого можно достичь и с помощью
                  произнесения мантр или чтения молитв, однако такой путь займет
                  много времени, а самое главное – для него нужна сильная вера.`,
                  en: `Ascetic practices allow you to attune your body to the energy fields of Tibet and soften their impact during the trip, which is often destructive for an unprepared person. The ultimate goal of such practices is undoubtedly a change in consciousness. I think this can be achieved by chanting mantras or reciting prayers, but this path will take a lot of time, and most importantly, it requires strong faith.`,
                })}
              </p>
              <p className="my-4 leading-8">
                {translate({
                  ru: `Одновременно с голоданиями я регулярно выполнял комплекс
                  упражнений, связанных с задержкой дыхания. Вызывание
                  искусственной гипоксии в обычных условиях ускоряет начало
                  долговременной высотной адаптации в горах`,
                  en: `Along with fasting, I regularly performed a set of exercises involving holding my breath. Inducing artificial hypoxia under normal conditions accelerates the onset of long-term altitude adaptation in the mountains`,
                })}
              </p>
            </div>
          </ButtonWithContent>
        </div>
        <div>
          <ButtonWithContent
            title={
              translate({
                ru: "Высотная болезнь",
                en: "Altitude sickness",
              }) as string
            }
          >
            <div className="p-4 leading-8">
              {translate({
                ru: `Это главная опасность, подстерегающая путешественников в горах.
              Из-за разреженного воздуха и недостаточного количества кислорода в
              организме человека развивается гипоксия.`,
                en: "This is the main danger that awaits travelers in the mountains. Due to thin air and insufficient oxygen, hypoxia develops in the human body.",
              })}
              <br />
              <br />
              {translate({
                ru: `Разновидностью высотной болезни является горная болезнь, когда
                гипоксия усугубляется переутомлением, резкими перепадами
                температур, охлаждением и обезвоживанием организма и пр.
                Вследствие нехватки кислорода клеточные мембраны и стенки сосудов
                становятся более проницаемыми, а кровяное давление растет – так
                организм пытается увеличить перенос кислорода в ткани.`,
                en: "A type of altitude sickness is mountain sickness, when hypoxia is aggravated by overwork, sudden temperature changes, cooling and dehydration of the body, etc. Due to lack of oxygen cell membranes and vessel walls become more permeable, and blood pressure rises - this is how the body tries to increase the transfer of oxygen to the tissues.",
              })}
              <br />
              <br />
              {translate({
                ru: `В результате плазма крови начинает просачиваться через стенки
                сосудов и возникают отеки. Наиболее опасными являются отек
                головного мозга и легких. Человек испытывает головную боль,
                головокружение, тошноту.`,
                en: "As a result, blood plasma begins to leak through the walls of blood vessels and edema occurs. The most dangerous are cerebral and pulmonary edema. The person experiences a headache, dizziness, nausea.",
              })}
              <br />
              <br />
              {translate({
                ru: `Дальнейшее развитие болезни характеризуется замедлением реакции,
                ухудшением координации движений, неадекватным восприятием
                действительности, потерей сознания. При отсутствии должного ухода
                и лечения может наступить смерть.`,
                en: "Further development of the disease is characterized by a slower reaction, deterioration in coordination of movements, inadequate perception of reality, and loss of consciousness. Without proper care and treatment, death can occur.",
              })}
            </div>
          </ButtonWithContent>
          <ButtonWithContent
            title={
              translate({
                ru: "Акклиматизация и адаптация",
                en: "Acclimatization and adaptation",
              }) as string
            }
          >
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
          <ButtonWithContent
            title={
              translate({
                ru: "Ночевки в горах",
                en: "Overnight in the mountains",
              }) as string
            }
          >
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
            title={
              translate({
                ru: "Собираем вещи на Кору вокруг Кайласа",
                en: "Packing for Kora around Kailash",
              }) as string
            }
          >
            <div className="p-4">
              <div className="w-full h-[315px] mt-5 mb-2 md:h-96">
                <iframe
                  width="100%"
                  // height="315"
                  height="100%"
                  src="https://www.youtube.com/embed/5KtoeQl4rW4?si=W8tHtnfAKdzWxDgw"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </div>
          </ButtonWithContent>
          <ButtonWithContent
            title={
              translate({
                ru: "Что взять с собой?",
                en: "What to take with you?",
              }) as string
            }
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
            title={
              translate({
                ru: "Аптечка",
                en: "First aid kit",
              }) as string
            }
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
            title={
              translate({
                ru: "Знаковые места Тибета",
                en: "Iconic places of Tibet",
              }) as string
            }
            subtitle={
              translate({
                ru: "Перечень достопримечательностей по регионам",
                en: "List of attractions by region",
              }) as string
            }
          />
          <TibetInfo />
        </div>
      </div>

      <div className="pt-10" />
      <div className="max-w-4xl w-full">
        <Header
          title={
            translate({
              ru: "Фото с прошлых туров",
              en: "Photos from past tours",
            }) as string
          }
          subtitle={
            translate({
              ru: "Нажмите на фото, чтобы открыть галерею",
              en: "Click on the photo to open the gallery",
            }) as string
          }
          id={LINK_PHOTO_GALLERY}
        />
      </div>
      <div className="max-w-6xl pt-6">
        <PhotoGallery />
      </div>

      <div className="pt-10" />

      {/* <div className="pt-10" />
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
      </div> */}

      <div className="max-w-4xl w-full">
        <Header
          title={
            translate({
              ru: "Часто задаваемые вопросы",
              en: "FAQ",
            }) as string
          }
          subtitle=""
        />
        <FAQ />
      </div>

      <div className="pt-10" />
      <div className="max-w-4xl w-full">
        <ApplyForm />
        <Header
          title={
            translate({
              ru: "Контакты",
              en: "Contacts",
            }) as string
          }
          subtitle={
            translate({
              ru: "Алексей Перчуков",
              en: "Alexey Perchukov",
            }) as string
          }
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
              {translate({
                ru: "Россия",
                en: "RUSSIA",
              })}
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
              {translate({
                ru: "Китай",
                en: "CHINA",
              })}
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

// const IconBookmark = () => {
//   return (
//     <svg
//       className="w-4 h-4 text-gray-300 mr-4"
//       aria-hidden="true"
//       xmlns="http://www.w3.org/2000/svg"
//       fill="currentColor"
//       viewBox="0 0 14 20"
//     >
//       <path d="M13 20a1 1 0 0 1-.64-.231L7 15.3l-5.36 4.469A1 1 0 0 1 0 19V2a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v17a1 1 0 0 1-1 1Z" />
//     </svg>
//   );
// };

const WhyGoTibetWithUs = () => {
  const translate = useTranslateFn();
  return (
    <>
      <div className="text-black font-semibold text-3xl py-2 px-4">
        {translate({
          ru: "Почему стоит ехать в Тибет с нами?",
          en: "Why is it worth going to Tibet with us?",
        })}
      </div>

      <WhyGoTibetWithUsStatement
        title={
          translate({
            ru: "Глубокое знание Тибета",
            en: "Deep knowledge of Tibet",
          }) as string
        }
      >
        {translate({
          ru: `Приезжая в место исключительной силы, хочется узнать как можно больше
          обо всех его традициях, истоках. Мы действительно понимаем Тибет. Наши
          гиды — местные эксперты с огромным опытом, и они помогут вам раскрыть
          все тайны и красоту этой уникальной земли.`,
          en: `Coming to a place of exceptional power, you want to learn as much as possible about all its traditions and origins. We truly understand Tibet. Our guides are local experts with extensive experience and will help you discover all the secrets and beauty of this unique land.`,
        })}
      </WhyGoTibetWithUsStatement>
      <WhyGoTibetWithUsStatement
        title={
          translate({
            ru: "Эксклюзивные маршруты",
            en: "Exclusive routes",
          }) as string
        }
      >
        {translate({
          ru: `Мы предлагаем эксклюзивные маршруты, которые недоступны большинству
          туристов. Вы увидите Тибет изнутри, открыв его магию и аутентичность.`,
          en: `We offer exclusive routes that are inaccessible to most tourists. You will see Tibet from the inside, discovering its magic and authenticity.`,
        })}
      </WhyGoTibetWithUsStatement>
      <WhyGoTibetWithUsStatement
        title={
          translate({
            ru: "Индивидуальный подход",
            en: "Individual approach",
          }) as string
        }
      >
        {translate({
          ru: `Мы понимаем, что каждый клиент уникален. Мы создадим маршрут, который
          соответствует вашим интересам и пожеланиям, обеспечивая максимальный
          комфорт и удовлетворение.`,
          en: `We understand that every client is unique. We will create an itinerary that suits your interests and wishes, ensuring maximum comfort and satisfaction.`,
        })}
      </WhyGoTibetWithUsStatement>
      <WhyGoTibetWithUsStatement
        title={
          translate({
            ru: "Высокое качество услуг",
            en: "High quality services",
          }) as string
        }
      >
        {translate({
          ru: `Мы позаботимся обо всем, чтобы вы получили незабываемые впечатления, не
          переплачивая. Авторские маршруты, достойные отели, заботливые и
          компетентные гиды, хороший сервис. Ваше удовольствие и безопасность
          &mdash; наша главная задача.`,
          en: `We will take care of everything so that you get an unforgettable experience without overpaying. Author's routes, decent hotels, caring and competent guides, good service. Your pleasure and safety are our main concern.`,
        })}
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

const ToursTabs = () => {
  const translate = useTranslateFn();
  return (
    <div
      className="mt-12 max-w-4xl w-full scroll-m-[60px] md:scroll-m-[64px]"
      id={LINK_OFFERS}
    >
      <Header
        title={
          translate({
            ru: "Программы на 2024",
            en: "Programs for 2024",
          }) as string
        }
        subtitle=""
      />
      <p className="mx-4 mb-6">
        {translate({
          ru: `Мы предлагаем как регулярные пакетные туры, так и эксклюзивные
          авторские маршруты.`,
          en: `We offer both regular package tours and exclusive signature routes.`,
        })}
      </p>
      <Tabs defaultValue="reg" className="w-full px-4">
        <TabsList className="shadow-inner shadow-black/20 border-black border-[2px] md:border-2 p-2 rounded-full h-min bg-white -mx-3 z-30 relative self-center flex">
          <TabsTrigger
            value="reg"
            className="rounded-full rounded-r-none w-1/2 h-[70px] m-0 transition-none md:whitespace-nowrap whitespace-normal 
              data-[state=inactive]:text-blue-500 shadow-xl shadow-black/30 data-[state=active]:bg-blue-500 data-[state=active]:text-white"
          >
            <h3 className="px-2 md:px-6 font-bold uppercase leading-4 tracking-wide md:tracking-widest text-sm md:text-lg">
              {translate({
                ru: (
                  <>
                    Пакетные <br className="md:hidden" />
                    туры
                  </>
                ),
                en: (
                  <>
                    Package <br className="md:hidden" />
                    tours
                  </>
                ),
              })}
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
              {translate({
                ru: (
                  <>
                    Эксклюзивные <br className="md:hidden" />
                    туры
                  </>
                ),
                en: (
                  <>
                    Exclusive <br className="md:hidden" />
                    tours
                  </>
                ),
              })}
            </h3>
          </TabsTrigger>
        </TabsList>

        <TabsContent className="bg-gray-200 mt-4 -mx-3 rounded-sm" value="reg">
          <h4 className="font-bold mx-3 pt-3 mt-2 leading-5 text-xl text-blue-500">
            {translate({
              ru: "Пакетные туры OPEN TIBET",
              en: "Package tours OPEN TIBET",
            })}
          </h4>
          <p className="font-semibold mx-3 mb-3 text-blue-500">
            {translate({
              ru: "Всё, что нужно паломнику. От 1900$",
              en: "Everything a pilgrim needs. From $1900",
            })}
          </p>
          <div>
            <Link href={"/tours/tibet-may-2024"} target="_blank">
              <TourButton
                title={
                  translate({
                    ru: "Май",
                    en: "May",
                  }) as string
                }
                subtitle="2—21 мая"
                days={14}
                price={getTourPriceForMonth("may")}
                withIcon
                withBorder
              />
            </Link>
            <Link href={"/tours/tibet-june-2024"} target="_blank">
              <TourButton
                title="Июнь"
                subtitle="6—19 июня"
                days={14}
                price={getTourPriceForMonth("june")}
                withIcon
                withBorder
              />
            </Link>
            <Link href={"/tours/tibet-july-2024"} target="_blank">
              <TourButton
                title="Июль"
                subtitle="1—23 июля"
                days={14}
                price={getTourPriceForMonth("july")}
                withIcon
                withBorder
              />
            </Link>
            <Link href={"/tours/tibet-august-2024"} target="_blank">
              <TourButton
                title="Август"
                subtitle="2—19 августа"
                days={14}
                price={getTourPriceForMonth("august")}
                withIcon
                withBorder
              />
            </Link>
            <Link href={"/tours/tibet-september-2024"} target="_blank">
              <TourButton
                title="Сентябрь"
                subtitle="2—21 сентября"
                days={14}
                price={getTourPriceForMonth("september")}
                withIcon
                withBorder
              />
            </Link>
            <Link href={"/tours/tibet-october-2024"} target="_blank">
              <TourButton
                title="Октябрь"
                subtitle="2—23 октября"
                days={14}
                price={getTourPriceForMonth("october")}
                withIcon
                withBorder
              />
            </Link>
          </div>
        </TabsContent>

        <TabsContent className="bg-black mt-4 -mx-3 rounded-sm" value="exc">
          <h4 className="font-bold mx-3 pt-3 mt-2 leading-5 text-xl text-yellow-500">
            {translate({
              ru: "Эксклюзивные туры",
              en: "Exclusive Tours",
            })}
          </h4>
          <p className="font-semibold mx-3 mb-3 text-yellow-500">
            {translate({
              ru: "Авторские маршруты Алексея Перчукова",
              en: "Author's routes of Alexey Perchukov",
            })}
          </p>
          <div>
            <Link href={"/tours/tibet-alex-may-2024"} target="_blank">
              <TourButton
                title="Май"
                subtitle="3—23 мая"
                days={21}
                price={"от 3800"}
                bgColor="yellow-500"
                fgColor="black"
                accentColor="white"
                withIcon
                withBorder
              />
            </Link>
            <Link href={"/tours/tibet-istoki-june"} target="_blank">
              <TourButton
                title="Июнь"
                subtitle="2—22 июня"
                days={21}
                price={"от 4500"}
                bgColor="yellow-500"
                fgColor="black"
                accentColor="white"
                withIcon
                withBorder
              />
            </Link>
            <Link href={"/tours/tibet-istoki"} target="_blank">
              <TourButton
                title="Сентябрь"
                subtitle="2—23 сентября"
                days={21}
                price={3600}
                bgColor="yellow-500"
                fgColor="black"
                accentColor="white"
                withIcon
                withBorder
              />
            </Link>
            <Link href={"/tours/tibet-istoki"} target="_blank">
              <TourButton
                title="Октябрь"
                subtitle="2—23 октября"
                days={21}
                price={3600}
                bgColor="yellow-500"
                fgColor="black"
                accentColor="white"
                withIcon
                withBorder
              />
            </Link>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

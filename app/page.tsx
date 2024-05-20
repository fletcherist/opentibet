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
  PreparingForTrip,
  WithLanguageProvider,
  BuyBookButtonContainer
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
import { Button } from "@/components/ui/button";

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

            <div className="p-4 leading-7 hyphens-auto mt-8" style={{ backgroundColor: 'rgba(0,0,0,0.3)' }}>
              <p className="mb-4 text-yellow-400 font-bold uppercase tracking-wider">
                Друзья!
              </p>
              <p className="mb-4">
              </p>
              <p className="mb-4">
                «Я рад поделиться с вами отличной новостью - наконец-то увидел свет третий созданный мною путеводитель по Тибету.
              </p>
              <p className="mb-4">
                Скоро в книжных магазинах страны.
              </p>
              <p className="mb-4">
                Этот полезнейший гайд я писал прямо с места "событий" – путешествуя по Тибету прошлой осенью, дополняя и обновляя, а где-то и полностью переписывая первый мой путеводитель. Кстати, единственный и самый полный в своем роде. Результатом работы я очень доволен. Принимаю поздравления)
              </p>
              <p className="mb-4">
                Заказать путеводитель с моим автографом можно по самой приятной цене 500р по кнопке ниже.
              </p>
              <div className="flex justify-center">
                <div className="flex max-w-2xl gap-5 mb-4 mt-3">
                  <Image
                    src="/tibet-putevoditel-2.jpg"
                    alt=""
                    width={600}
                    height={400}
                    quality={100}
                    className="w-full cursor-pointer max-w-sm"
                  />
                  {/* <Image
                    src="/putevoditel-tibet.jpg"
                    alt=""
                    width={120}
                    height={90}
                    quality={90}
                    className="w-full cursor-pointer"
                  /> */}
                </div>
              </div>

              <p className="mb-4">
                <div className="flex justify-center py-4">
                  <div className="max-w-4xl">
                    <BuyBookButtonContainer />
                  </div>
                </div>
              </p>
              <p className="mb-4">
                Невероятный Тибет уже много лет завораживает меня своей красотой, первозданностью, духовностью. Да, всего этого не передать через страницы путеводителя, но параллельно с ним я создавал компанию Open Tibet, на сайте которой вы сейчас находитесь.
              </p>
              <p className="mb-4">
                В этом проекте я аккумулировал все свои навыки организации поездок и все рекомендации для вашего самого незабываемого путешествия к Кайласу.
              </p>
              <p className="mb-4">
                Посмотрите наши программы, фильм о Тибете, фото. И присоединяйтесь!
              </p>
              <p className="mb-16">
                Путешествуйте с умом и с любовью, и Тибет откроется перед вами во всей своей красе, всем великолепии. Выбирайте лучшее для себя 🏔🙏»
              </p>
              <p className="mb-4 text-yellow-400 font-bold">
                Алексей Перчуков,
                <br />
                основатель проекта OPEN TIBET
              </p>
            </div>

            <div className="pt-10 flex justify-center">
              <div className="flex flex-col gap-1 max-w-2xl">

                <div className="flex gap-1">
                  <div className="bg-blue max-w-[50%] w-full h-full">
                    <Image
                      src="https://img.opentibet.ru/logo/tibet-group-1.jpg"
                      alt=""
                      width={375}
                      height={250}
                      quality={75}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="bg-blue max-w-[50%] w-full h-full">
                    <Image
                      src="https://img.opentibet.ru/logo/tibet-group-2.jpg"
                      alt=""
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
                      src="https://img.opentibet.ru/logo/tibet-group-3.jpg"
                      alt="Фото Алексея Перчукова"
                      width={375}
                      height={250}
                      quality={75}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="bg-blue max-w-[50%] w-full h-full">
                    <Image
                      src="https://img.opentibet.ru/logo/tibet-group-4.jpg"
                      alt=""
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
      <PreparingForTrip />
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
              value="+86 153 4891 9180"
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

          <div className="py-2">
            <Link href="https://t.me/gurutibet" target="_blank" className="text-3xl max-w-full text-blue-500">
              https://t.me/gurutibet
            </Link>
            <div className="text-[10px] uppercase tracking-wider font-bold">
              {translate({
                ru: "Telegram канал",
                en: "Telegram channel",
              })}
            </div>
          </div>

        </div>
      </div>

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
                subtitle="2—15 мая"
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
                subtitle="2—15 июля"
                days={14}
                price={getTourPriceForMonth("july")}
                withIcon
                withBorder
              />
            </Link>
            <Link href={"/tours/tibet-august-2024"} target="_blank">
              <TourButton
                title="Август"
                subtitle="2—15 августа"
                days={14}
                price={getTourPriceForMonth("august")}
                withIcon
                withBorder
              />
            </Link>
            <Link href={"/tours/tibet-september-2024"} target="_blank">
              <TourButton
                title="Сентябрь"
                subtitle="2—15 сентября"
                days={14}
                price={getTourPriceForMonth("september")}
                withIcon
                withBorder
              />
            </Link>
            <Link href={"/tours/tibet-october-2024"} target="_blank">
              <TourButton
                title="Октябрь"
                subtitle="2—15 октября"
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
                subtitle="15 июня - 5 июля"
                days={21}
                price={"от 4000"}
                bgColor="yellow-500"
                fgColor="black"
                accentColor="white"
                withIcon
                withBorder
              />
            </Link>
            <Link href={"/tours/tibet-alex-sep-2024"} target="_blank">
              <TourButton
                title="Сентябрь"
                subtitle="2—23 сентября"
                days={21}
                price={"от 3800"}
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

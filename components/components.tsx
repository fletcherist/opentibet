"use client";

import Image from "next/image";

import { useState, useEffect } from "react";
import { useRef } from "react";

import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

import {
  LINK_CONTACTS,
  LINK_PHOTO_GALLERY,
  LINK_WELCOME_SCREEN,
  LINK_OFFERS,
  LINK_TIBET_PREPARATION,
  LINK_APPLY_FORM,
} from "@/utils/constants";
import Link from "next/link";
import { TimetableFactoid } from "./ToursTimetable";
import { imagesSrc } from "./TibetInfo";
import { useLanguage, useSetLanguage, useTranslateFn } from "@/lib/language";

export const BackgroundSlider = () => {
  const images = [
    // 'https://storage.googleapis.com/opentibet/chiu.jpg',
    // 'https://storage.googleapis.com/opentibet/raduga.jpg',
    // 'https://storage.googleapis.com/opentibet/topor.jpg',
    "https://storage.googleapis.com/opentibet/background-6.jpg", // padmasambhava

    "https://storage.googleapis.com/opentibet/background-2.jpg", // drak yerpa ok
    // 'https://storage.googleapis.com/opentibet/background-3.jpg',
    "https://storage.googleapis.com/opentibet/background-4.jpg",
    "https://storage.googleapis.com/opentibet/background-5.jpg", // monah ok
    // 'https://storage.googleapis.com/opentibet/background-8.jpg',
    "https://storage.googleapis.com/opentibet/background-1.jpg", // devochka ok

    // одну с маносраваром
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((currentImageIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(intervalId);
  }, [currentImageIndex]);

  const currentImageUrl = images[currentImageIndex];
  // style={{ backgroundImage: `url('${backgroundImageUrl}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}

  // for cache
  const renderImagesList = () => {
    return images.map((url, index) => {
      return <img src={url} key={index} style={{ display: "none" }} />;
    });
  };
  return (
    <>
      <div
        className="w-full h-full absolute"
        style={{
          backgroundImage: `url(${currentImageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transition: "background-image 1s ease-in-out",
        }}
      />
      {renderImagesList()}
    </>
  );
};

export const Arrow = () => {
  const nextSectionRef = useRef<HTMLDivElement>(null);
  const scrollToNextSection = () => {
    if (nextSectionRef.current) {
      nextSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="flex justify-center items-center h-16 w-full">
      <div
        className="text-gray-300 hover:text-gray-600 cursor-pointer"
        onClick={scrollToNextSection}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
  );
};

export const PhotoGallery = () => {
  // const photo1src = "https://storage.googleapis.com/opentibet/chiu.jpg";
  // const photo2src = "https://storage.googleapis.com/opentibet/raduga.jpg";
  // const photo3src = "https://storage.googleapis.com/opentibet/topor.jpg";
  // const photo4src = "https://storage.googleapis.com/opentibet/background-7.jpg"; // replace with actual photos
  // const photo5src = "https://storage.googleapis.com/opentibet/background-8.jpg";
  const photo6src = "https://media.discordapp.net/attachments/1182687528613064777/1182705035767992360/azwj9jLfIEWJV9xS-6qHn9-0p4rChwLNdPupTzFdU-Jf8A2qMsFAEPhDNGW652PuiunrNjQU8Rjo9D6kUh1VWw3D3D.png?ex=6585aae6&is=657335e6&hm=b2be063f0e9cdd128ff6e1454682108195f21173308ae2aa314fb7c7f0d4a3c5&=&format=webp&quality=lossless&width=1522&height=1142";

  const imgClassName = "cursor-pointer w-48 bg-cover"

  return (
    <PhotoProvider>
      <div className="flex flex-wrap gap-1 justify-center">
        <PhotoView src={imagesSrc.namtso}>
          <img
            src={imagesSrc.namtso}
            alt=""
            className={imgClassName}
          />
        </PhotoView>
        <PhotoView src={imagesSrc.drepung}>
          <img
            src={imagesSrc.drepung}
            alt=""
            className={imgClassName}
          />
        </PhotoView>
        <PhotoView src={imagesSrc.namtsoNorth1}>
          <img
            src={imagesSrc.namtsoNorth1}
            alt=""
            className={imgClassName}
          />
        </PhotoView>
        <PhotoView src={imagesSrc.girjong}>
          <img
            src={imagesSrc.girjong}
            alt=""
            className={imgClassName}
          />
        </PhotoView>
        <PhotoView src={imagesSrc.ganden}>
          <img
            src={imagesSrc.ganden}
            alt=""
            className={imgClassName}
          />
        </PhotoView>
        <PhotoView src={photo6src}>
          <img
            src={photo6src}
            alt=""
            className={imgClassName}
          />
        </PhotoView>
        <PhotoView src={imagesSrc.jokang}>
          <img
            src={imagesSrc.jokang}
            alt=""
            className={imgClassName}
          />
        </PhotoView>
        <PhotoView src={imagesSrc.sakya}>
          <img
            src={imagesSrc.sakya}
            alt=""
            className={imgClassName}
          />
        </PhotoView>
        <PhotoView src={imagesSrc.everestBasecamp}>
          <img
            src={imagesSrc.everestBasecamp}
            alt=""
            className={imgClassName}
          />
        </PhotoView>
        <PhotoView src={imagesSrc.nandi}>
          <img
            src={imagesSrc.nandi}
            alt=""
            className={imgClassName}
          />
        </PhotoView>
        <PhotoView src={imagesSrc.nartang}>
          <img
            src={imagesSrc.nartang}
            alt=""
            className={imgClassName}
          />
        </PhotoView>
        <PhotoView src={imagesSrc.drakYerpa}>
          <img
            src={imagesSrc.drakYerpa}
            alt=""
            className={imgClassName}
          />
        </PhotoView>
        <PhotoView src={imagesSrc.pelkutso}>
          <img
            src={imagesSrc.pelkutso}
            alt=""
            className={imgClassName}
          />
        </PhotoView>
        <PhotoView src={imagesSrc.tsurphu}>
          <img
            src={imagesSrc.tsurphu}
            alt=""
            className={imgClassName}
          />
        </PhotoView>
        <PhotoView src={imagesSrc.sashipangma}>
          <img
            src={imagesSrc.sashipangma}
            alt=""
            className={imgClassName}
          />
        </PhotoView>
      </div>
    </PhotoProvider>
  );
};

const Accordion: React.FC<{ title: string; children: React.ReactNode }> = ({
  title,
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        className="flex justify-between items-center w-full py-6 px-6 text-base font-medium text-left text-gray-900 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{title}</span>
        <span className="ml-6">
          {isOpen ? <IconArrowClose /> : <IconArrowDown />}
        </span>
      </button>
      {isOpen && (
        <div className="px-6 py-6 pt-0 text-gray-700 leading-7">{children}</div>
      )}
    </div>
  );
};

export const IconArrowDown = () => {
  return (
    <svg
      className="w-4 h-4 opacity-70"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 14 8"
    >
      <path
        stroke="currentColor"
        strokeWidth="2"
        d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1"
      />
    </svg>
  );
};

export const IconArrowClose = () => {
  return (
    <svg
      className="w-4 h-4 opacity-70"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 14 14"
    >
      <path
        stroke="currentColor"
        strokeWidth="2"
        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
      />
    </svg>
  );
};

export const FAQ: React.FC = () => {
  const translate = useTranslateFn()
  return (
    <>
      <Accordion
        title={translate({
          ru: "Где лучше менять валюту и что лучше везти в Тибет?",
          en: "Where is the best place to change currency and what is the best thing to bring to Tibet?",
        }) as string}
      >
        {translate({
          ru: "Лучше всего везти с собой юани.",
          en: "It is best to take yuan with you.",
        })}
        <br />
        {translate({
          ru: "Если стоит выбор: доллары или евро, то лучше доллары.",
          en: "If you have a choice: dollars or euros, then dollars are better.",
        })}
        <br />
        {translate({
          ru: "Валюту можно менять в банке, это долго или на черном рынке, если гид поможет",
          en: "Currency can be changed at a bank, it takes a long time or on the black market, if the guide helps",
        })}
      </Accordion>
      <Accordion
        title={translate({
          ru: "Можно ли купить в Китае сим карту?",
          en: "Is it possible to buy a SIM card in China?",
        }) as string}
      >
        {translate({
          ru: "Покупка сим карты это очень долгая процедура",
          en: "Buying a SIM card is a very long procedure.",
        })}
        <br />
        {translate({
          ru: "Иностранцам продает сим карты China Mobile. И без гида это сложно сделать.",
          en: "China Mobile sells SIM cards to foreigners. And it’s difficult to do this without a guide.",
        })}
        <br />
        {translate({
          ru: "Если нужна гарантированно связь, то лучше приобрести e-sim. ",
          en: "If you need a guaranteed connection, it’s better to purchase an e-sim. ",
        })}
        <a className="text-blue-500" href="https://t.me/Mobile" target="_blank">https://t.me/Mobile</a>
      </Accordion>
      <Accordion
        title={
          translate({
            ru: "Работает ли в Тибете Гугл и Воцап?",
            en: "Do Google and Whatsapp work?"
          }) as string
        }
      >
        {translate({
          ru: <>В Китае для нормальной связи с Россией нужен VPN.
            <br />
            Оптимальным является Wire Guard</>,
          en: <>
            In China, for normal communication with Russia you need a VPN.
            Wire Guard is optimal</>
        })}
      </Accordion>
      <Accordion
        title={translate({
          ru: "Есть ли проблема с питанием ? С питанием для вегетарианцев?",
          en: "Is there a problem with food? With meals for vegetarians?"
        }) as string}
      >
        {translate({
          ru: <>Сейчас в Тибете нет никаких проблем с едой.<br />
            Большие супермаркеты есть в каждом городе, включая Дарчен. Фрукты (Яблоки, мандарины, манго и тд) и овощи (помидоры, огурцы, цветная капуста и тд) продается по всему маршруту. Китайские рестораны представлены везде.</>,
          en: <>Now in Tibet there are no problems with food.
            There are large supermarkets in every city, including Darchen. Fruits (Apples, tangerines, mangoes, etc.) and vegetables (tomatoes, cucumbers, cauliflower, etc.) are sold along the entire route. Chinese restaurants are everywhere.</>
        })}
      </Accordion>
      <Accordion
        title={translate({
          ru: "Как организовано питание на Кайлас коре?",
          en: "How is food organized on Kailash kora?",
        }) as string}
      >
        {translate({
          ru: <>В обязанность гида входит организация завтрака в гестхаусе.<br />
            Завтрак достаточно скромный. Хлеб, яйцо чай. Но по всему маршруту Коры очень много ресторанов/кафе где можно заказать полноценный обед. Китайская и Тибетская кухня.</>,
          en: <>
            It is the responsibility of the guide to organize breakfast in the guesthouse.<br />
            Breakfast is quite modest. Bread, egg tea. But along the entire Cora route there are a lot of restaurants/cafes where you can order a full lunch. Chinese and Tibetan cuisine</>
        })}
      </Accordion>
      <Accordion
        title={translate({
          ru: "Дорогая ли еда в Тибете?",
          en: "Is food expensive in Tibet?",
        }) as string}
      >
        {translate({
          ru: "Можно рассчитывать примерно на 200 юаней в день. (хороший обед и ужин)",
          en: "You can count on about 200 yuan per day. (good lunch and dinner)",
        })}
      </Accordion>
      <Accordion
        title={translate({
          ru: "Где можно купить сувениры?",
          en: "Where can you buy souvenirs?"
        }) as string}
      >
        {translate({
          ru: `Barkor supermarket лучшее место для этого. Или район Barkor, но цены там дороже`,
          en: `Barkor supermarket is the best place for this. Or the Barkor area, but prices are more expensive there`
        })}
      </Accordion>

      <Accordion
        title={translate({
          ru: "Какие условия проживания на Кайлас коре?",
          en: "What are the living conditions at Kailash Kor?"
        }) as string}
      >
        {translate({
          ru: "Проживание в гестхаусе скромное. В комнате находится 3-5 кроватей. Электричество доступно обычно с 20:00 до 00:00. Туалет находится на улице.",
          en: `Guesthouse accommodation is modest. There are 3-5 beds in the room. Electricity is usually available from 20:00 to 00:00. The toilet is located outside.`
        })}
      </Accordion>
      <Accordion
        title={
          translate({
            ru: "Можно ли купить в Лхассе снаряжение для Коры?",
            en: "Is it possible to buy equipment for Kora in Lhassa?",
          }) as string
        }
      >
        {translate({
          ru: `В Лхассе огромное количество таких магазинов. Представлены профессиональные бренды:
          North Face, Vaude, Kailas . Under Armor и тд`,
          en: `There are a huge number of such stores in Lhassa. Professional brands represented: North Face, Vaude, Kailas. Under Armor, etc.`
        })}
      </Accordion>
      <Accordion
        title={translate({
          ru: "Можно ли привезти в Китай дрон для съемки видео?",
          en: "Is it possible to bring a drone to China to shoot video?"
        }) as string}
      >
        {translate({
          ru: "Иностранцам это запрещено, хотя китайцы активно пользуются.",
          en: "Foreigners are prohibited from doing this, although the Chinese actively use it."
        })}

      </Accordion>
      <Accordion
        title={translate({
          ru: "Можно ли брать с собой в Тибет книги?",
          en: `Can I bring a book with me to Tibet?`
        }) as string}
      >
        {translate({
          ru: `Можно, но они не должны в себе содержать историю Тибета и изображение Далай Ламы`,
          en: `It is possible, but they should not contain the history of Tibet and the image of the Dalai Lama`
        })}

      </Accordion>
      <Accordion
        title={
          translate({
            ru: `Когда начинается «горная болезнь» по прилету в Тибет?`,
            en: `When does “mountain sickness” begin upon arrival in Tibet?`
          }) as string
        }
      >
        {translate({
          ru: `Наиболее острая форма на второй день. По прилету необходимо пить очень много воды с витамином С. И гиды рекомендуют в первый вечер не мочить голову, при приеме душа.`,
          en: `The most acute form is on the second day. Upon arrival, you need to drink a lot of water with vitamin C. And the guides recommend not getting your hair wet on the first evening when taking a shower.`
        })}
      </Accordion>
    </>
  );
};

export const AbstractButton: React.FC<{
  label: string;
  accentColor?: string;
  hoverColor?: string;
  textColor?: string;
  anchor?: string;
}> = ({
  label,
  accentColor = "blue-500",
  hoverColor = "blue-800",
  textColor = "white",
  anchor = LINK_OFFERS,
}) => {
    return (
      <button
        className={`bg-${accentColor} hover:bg-${hoverColor} text-${textColor} font-bold py-3 px-5 rounded-lg flex items-center md:py-3 md:px-6 md:text-lg`}
        onClick={() => {
          if (anchor) {
            const timetableElementRef = document.getElementById(anchor);
            if (timetableElementRef) {
              timetableElementRef.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }
          }
        }}
      >
        {label}
        <svg
          className="w-4 h-4 ml-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 8 14"
        >
          <path
            stroke="currentColor"
            strokeWidth="2"
            d="m1 13 5.7-5.326a 0 0 0 0 0 0-1.348L1 1"
          />
        </svg>
      </button>
    );
  };

export const ActionButton = () => {
  const translate = useTranslateFn()

  return <AbstractButton label={
    translate({
      ru: "Смотреть программы",
      en: "View programs"
    }) as string
  } anchor={LINK_OFFERS} />;
};

export const TimetableDay: React.FC<{
  title: string;
  accentColor: string;
  children: React.ReactNode;
}> = ({ children, accentColor = "blue-500", title }) => {
  return (
    <div className="flex">
      <div className="flex flex-col justify-center items-center">
        <div className="flex justify-center p-4 pl-2">
          <div className={`w-3 h-3 rounded-full bg-${accentColor}`} />
        </div>
        <div className="w-0.5 bg-gray-300 h-full" />
      </div>
      <div className="pr-10">
        <div className="font-bold text-xl text-gray-800 pt-2 pb-4">{title}</div>
        <div className="text-sm md:text-base md:leading-7">{children}</div>
      </div>
    </div>
  );
};

export const TimetablePhoto: React.FC<{
  src: string;
  title: string;
  maxHeight?: number
}> = ({ src, title, maxHeight }) => {
  return (
    <div className="py-5 flex justify-center">
      <div className="max-w-lg">
        <img
          src={src}
          className="rounded-lg"
          style={maxHeight ? { maxHeight } : {}}
        />
        <div className="text-center p-2 text-sm text-gray-500">
          {title}
        </div>
      </div>
    </div>
  );
};

export const TimetablePhotoDouble: React.FC<{
  src1: string;
  src2: string;
  maxHeight?: number
}> = ({ src1, src2, maxHeight }) => {
  return (
    <div className="py-5 md:py-5 flex justify-center">
      <div className="flex max-w-3xl gap-1">
        <img
          src={src1}
          className="rounded-lg w-[50%]"
          style={maxHeight ? { maxHeight } : {}}
        />
        <img
          src={src2}
          className="rounded-lg w-[50%]"
          style={maxHeight ? { maxHeight } : {}}
        />
      </div>
    </div>
  );
};

const getNoun = (n: number, one: string, two: string, five: string) => {
  let abs = Math.abs(n);
  abs %= 100;
  if (abs >= 5 && abs <= 20) {
    return five;
  }
  abs %= 10;
  if (abs === 1) {
    return one;
  }
  if (abs >= 2 && abs <= 4) {
    return two;
  }
  return five;
};

export const TimetableButton: React.FC<{
  title: string;
  subtitle: string;
  days: number;
  price: number;
  bgColor?: string;
  fgColor?: string;
  accentColor?: string;
  withIcon?: boolean
  withBorder?: boolean;
}> = ({
  title,
  subtitle,
  days,
  price,
  bgColor = "blue-500",
  fgColor = "white",
  accentColor = "yellow-500",
  withIcon = false,
  withBorder
}) => {
    const [isOpened, setIsOpened] = useState<boolean>(false);
    const daysLabel = getNoun(days, "день", "дня", "дней");

    return (
      <div className={`my-0 relative bg-gray-100`}>
        <div className="hidden bg-yellow-500" />
        <div
          className={`h-[72px] sticky top-[60px] md:top-[64px]
          ${withBorder ? `border-b-[1px] border-b-${fgColor}/30` : ''}
         text-${fgColor} bg-${bgColor} hover:brightness-90
         `}
        >
          <div
            className="py-3 px-4 flex cursor-pointer justify-between"
            onClick={() => {
              setIsOpened(!isOpened);
            }}
          >
            <div className="flex items-center">
              <div className="mr-4 w-[11ch]">
                <div className="font-semibold text-2xl leading-5">{title}</div>
                <div className={`text-${accentColor} text-xs`}>{subtitle}</div>
              </div>
              <div className={`flex space-x-4 text-${fgColor}/80`}>
                <TimetableFactoid fact={daysLabel} value={String(days)} />
                <TimetableFactoid fact="цена, $" value={`${price}`} />
              </div>
            </div>
            <div className="h-12" />
            {withIcon && (
              <div className={`w-12 h-12 text-${fgColor} flex items-center justify-center`}>
                <svg className="w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778" />
                </svg>
              </div>
            )}
          </div>
        </div>
        {/* {isOpened && (
          <>
            <div className="px-4">
              <TimetableList accentColor={bgColor} />
              <div className="py-4" />
            </div>
            <div
              className={`px-4 bg-${bgColor} text-${fgColor} border-b-[1px] border-b-${fgColor}/30`}
            >
              <ApplyForm />
            </div>
          </>
        )} */}
      </div>
    );
  };


export const ButtonWithContent: React.FC<{
  title: string;
  children: React.ReactNode;
}> = ({ title, children }) => {
  const [isOpened, setIsOpened] = useState<boolean>(false);

  return (
    <div className={`mx-1 my-0 bg-gray-100`}>
      <div
        className={`h-[72px] sticky top-[60px] md:top-[64px] bg-blue-500 hover:bg-blue-800 text-white
        border-b-[1px] border-b-white/20`}
      >
        <div
          className="py-3 px-4 cursor-pointer flex items-center justify-between"
          onClick={() => {
            setIsOpened(!isOpened);
            // when user closes button scroll to "Подготовка к поездке" block
            if (isOpened) {
              const el = document.getElementById(LINK_TIBET_PREPARATION);
              if (el) {
                el.scrollIntoView({ behavior: 'instant', block: "start" });
              }
            }
          }}
        >
          <div>
            <div className="font-semibold text-2xl leading-5">{title}</div>
          </div>
          <div className="p-4">
            {isOpened ? <IconArrowClose /> : <IconArrowDown />}
          </div>
        </div>
      </div>
      {isOpened && <>{children}</>}
    </div>
  );
};

export const ApplyForm: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const translate = useTranslateFn()

  return (
    <div id={LINK_APPLY_FORM}>
      <div className="flex items-center flex-wrap">
        <div className="w-full md:max-w-[50%]">
          <Header
            title={translate({
              ru: "Заявка на участие",
              en: "Application for participation"
            }) as string}
            subtitle={translate({
              ru: "Заполните заявку, и мы свяжемся с вами в ближайшее время",
              en: "Fill out the application and we will contact you shortly",
            }) as string}
          />
        </div>
        <div className="w-full md:max-w-[50%] p-4">
          <form
            onSubmit={async (event) => {
              event.preventDefault();
              try {
                const body = {
                  name: name,
                  email: email,
                  phone: phone,
                };
                const resp = await fetch("/api/applications", {
                  method: "POST",
                  body: JSON.stringify(body),
                  headers: {
                    "content-type": "application/json",
                  },
                });
                alert(
                  translate({
                    ru: `Спасибо за заявку, ${name}! Мы свяжемся с вами в ближайшее время`,
                    en: `Thanks for your submission, ${name}! We will contact you shortly`
                  })
                );
                setName("");
                setEmail("");
                setPhone("");
                console.log(resp);
                const json = await resp.json();
                console.log(json);
              } catch (error) {
                alert(
                  translate({
                    ru: `${name}, не удалось отправить заявку! Пожалуйста, попробуйте ещё раз или напишите нам на почту info@opentibet.ru`,
                    en: `${name}, failed to submit request! Please try again or write to us at info@opentibet.ru`
                  })
                );
              }
            }}
          >
            <div className="py-[8px]">
              <label
                htmlFor="first_name"
                className="block mb-1 text-[10px] uppercase tracking-wider font-semibold text-gray-900"
              >
                {translate({
                  ru: "Имя",
                  en: "Your Name"
                })}
              </label>
              <input
                type="text"
                id="first_name"
                className="bg-gray-100 border border-gray-100 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 px-1.5 outline-none"
                placeholder=""
                required
                value={name}
                onChange={(event) => {
                  setName(event.target.value);
                }}
              />
            </div>
            <div className="py-[8px]">
              <label
                htmlFor="email"
                className="block mb-1 text-[10px] uppercase tracking-wider font-semibold text-gray-900"
              >
                {translate({
                  ru: "Эл. почта",
                  en: "EMAIL"
                })}
              </label>
              <input
                type="email"
                id="email"
                className="bg-gray-100 border border-gray-100 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 px-1.5 outline-none"
                placeholder="example@gmail.com"
                required
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
            </div>
            <div className="py-[8px]">
              <label
                htmlFor="tel"
                className="block mb-1 text-[10px] uppercase tracking-wider font-semibold text-gray-900"
              >
                {translate({
                  ru: "Или номер телефона",
                  en: "OR PHONE NUMBER"
                })}
              </label>
              <input
                type="tel"
                id="email"
                className="bg-gray-100 border border-gray-100 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 px-1.5 outline-none"
                placeholder="+7 (999) 123 45 67"
                required
                value={phone}
                onChange={(event) => {
                  setPhone(event.target.value);
                }}
              />
            </div>
            <div className="flex justify-end py-4">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded flex items-center"
                type="submit"
              >
                {translate({
                  ru: "Отправить",
                  en: "Apply"
                })}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export const Header: React.FC<{
  title: string;
  subtitle: string;
  id?: string;
}> = ({ title, subtitle, id = undefined }) => {
  return (
    <div className="px-4" id={id}>
      <div className="text-black-500 font-semibold text-3xl pt-2">{title}</div>
      <div className="py-1 text-black-500 font-bold">{subtitle}</div>
    </div>
  );
};

export const Navbar = () => {
  const translate = useTranslateFn()
  const language = useLanguage()
  const setLanguage = useSetLanguage()

  return (
    <nav className="bg-black/60 text-white backdrop-blur-md w-[100vw] fixed z-50">
      <div className="flex justify-center">
        <div className="max-w-4xl flex flex-wrap items-center justify-between mx-auto p-2 pb-3 w-full">
          <Link className="flex items-center space-x-3 rtl:space-x-reverse cursor-pointer" href={"/"}>
            <Image
              src="/opentibet-logo-hb.svg"
              width={190}
              height={44}
              alt="OpenTibet Logo"
              className="h-8 w-auto mr-3 md:h-11"
              onClick={(event) => {
                // if on main page scroll to top,
                // on other pages navigate to main page
                if (window.location.pathname === "/") {
                  event.preventDefault();
                  const elRef = document.getElementById(LINK_WELCOME_SCREEN);
                  if (elRef) {
                    elRef.scrollIntoView({ behavior: "smooth", block: "start" });
                  }
                } else {
                  // do nothing bc default behavior is fine
                }
              }}
            />
          </Link>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white md:hidden hover:text-yellow focus:outline-none focus:text-yellow-500"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-colp-4 md:p-0 mt-4 mr-4 border border-gray-100 md:flex-row md:space-x-5 rtl:space-x-reverse md:mt-0 md:border-0">
              <li>
                <a
                  href={`#${LINK_OFFERS}`}
                  onClick={(event) => {
                    smoothScroll(event, LINK_OFFERS);
                  }}
                  className="block py-2 px-3 rounded text-xs md:text-base md:border-0 md:hover:text-red-500 md:p-0"
                >
                  {translate({
                    ru: 'Программы',
                    en: 'Tours'
                  })}
                </a>
              </li>
              <li>
                <a
                  href={`#${LINK_PHOTO_GALLERY}`}
                  onClick={(event) => {
                    smoothScroll(event, LINK_PHOTO_GALLERY);
                  }}
                  className="block py-2 px-3 rounded text-xs md:text-base md:border-0 md:hover:text-red-500 md:p-0"
                >
                  {translate({
                    ru: 'Фото',
                    en: 'Photos'
                  })}
                </a>
              </li>
              <li>
                <a
                  href={`#${LINK_CONTACTS}`}
                  onClick={(event) => {
                    smoothScroll(event, LINK_CONTACTS);
                  }}
                  className="block py-2 px-3 rounded text-xs md:text-base md:border-0 md:hover:text-red-500 md:p-0"
                >
                  {translate({
                    ru: 'Контакты',
                    en: 'Contacts'
                  })}
                </a>
              </li>
              <li>
                <a
                  onClick={(event) => {
                    const newLanguage = language === 'ru' ? 'en' : 'ru'
                    console.log(language, newLanguage)
                    setLanguage(newLanguage)
                  }}
                  className="block py-2 px-3 rounded text-xs md:text-base md:border-0 md:hover:text-red-500 md:p-0 cursor-pointer"
                >
                  {language === 'ru' ? 'En' : 'Ru'}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export const Footer = () => {
  return (
    <div>
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
    </div>
  )
}

const Copyright: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="text-center text-xs text-gray-500 py-4">
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

export const smoothScroll = (event: React.MouseEvent, elementId: string) => {
  event.preventDefault();
  const elRef = document.getElementById(elementId);
  if (elRef) {
    elRef.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  // change location
  window.history.pushState({}, "", `#${elementId}`);
};

export const LinkTours: React.FC = () => {
  const translate = useTranslateFn()
  return (
    <Link href={`/#${LINK_OFFERS}`}>
      <div className="flex items-center gap-2 py-2 cursor-pointer">
        <span className="text-blue-500">{
          translate({
            ru: "Смотреть все программы",
            en: "View programs"
          })
        }</span>
        <svg className="w-4 h-4 text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778" />
        </svg>
      </div>
    </Link>
  )
}
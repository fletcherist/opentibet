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
import { imagesSrc } from "./TibetInfo";

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
  const photo1src = "https://storage.googleapis.com/opentibet/chiu.jpg";
  const photo2src = "https://storage.googleapis.com/opentibet/raduga.jpg";
  const photo3src = "https://storage.googleapis.com/opentibet/topor.jpg";
  const photo4src = "https://storage.googleapis.com/opentibet/background-7.jpg"; // replace with actual photos
  const photo5src = "https://storage.googleapis.com/opentibet/background-8.jpg";
  const photo6src = "https://storage.googleapis.com/opentibet/background-1.jpg";

  return (
    <PhotoProvider>
      <div className="grid grid-cols-2 gap-1">
        <PhotoView src={photo1src}>
          {/* <Image src={photo1src} alt="" width={375} height={250} quality={75} className="col-start-1 col-end-2 row-start-2 row-end-4 rounded-sm cursor-pointer" /> */}
          <img
            src={photo1src}
            alt=""
            className="col-start-1 col-end-3 cursor-pointer"
          />
        </PhotoView>
        <PhotoView src={photo2src}>
          <img
            src={photo2src}
            alt=""
            className="col-start-1 col-end-2 row-start-2 row-end-4 cursor-pointer"
          />
        </PhotoView>
        <PhotoView src={photo3src}>
          <img
            src={photo3src}
            alt=""
            className="col-start-2 col-end-3 row-start-2 row-end-3 cursor-pointer"
          />
        </PhotoView>
        <PhotoView src={photo4src}>
          <img
            src={photo4src}
            alt=""
            className="col-start-1 col-end-2 row-start-3 row-end-4 cursor-pointer"
          />
        </PhotoView>
        <PhotoView src={photo5src}>
          <img
            src={photo5src}
            alt=""
            className="col-start-2 col-end-3 row-start-3 row-end-4 cursor-pointer"
          />
        </PhotoView>
      </div>
      {/* <PhotoView src={photo5src}>
        <img src={photo5src} alt="" />
      </PhotoView>
      <PhotoView src={photo6src}>
        <img src={photo6src} alt="" />
      </PhotoView> */}
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
  return (
    <>
      <Accordion
        title="Где лучше менять валюту и что лучше везти в Тибет?"
      >
        Лучше всего везти с собой юани.
        <br />
        Если стоит выбор: доллары или евро, то лучше доллары.
        <br />
        Валюту можно менять в банке, это долго или на черном рынке, если гид поможет
      </Accordion>
      <Accordion
        title="Можно ли купить в Китае сим карту?"
      >
        Покупка сим карты это очень долгая процедура.<br />
        Иностранцам продает сим карты China Mobile. И без гида это сложно сделать.
        <br />
        Если нужна гарантированно связь, то лучше приобрести e-sim. <a className="text-blue-500" href="https://t.me/Mobile" target="_blank">https://t.me/Mobile</a>
      </Accordion>
      <Accordion
        title="Работает ли Гугл и Воцап?"
      >
        В Китае для нормальной связи с Россией нужен VPN.
        <br />
        Оптимальным является Wire Guard
      </Accordion>
      <Accordion
        title="Есть ли проблема с питанием ? С питанием для вегетарианцев?"
      >
        Сейчас в Тибете нет никаких проблем с едой.<br />
        Большие супермаркеты есть в каждом городе, включая Дарчен. Фрукты (Яблоки, мандарины, манго и тд) и овощи (помидоры, огурцы, цветная капуста и тд) продается по всему маршруту. Китайские рестораны представлены везде.
      </Accordion>
      <Accordion
        title="Как организовано питание на Кайлас коре?"
      >
        В обязанность гида входит организация завтрака в гестхаусе.<br />
        Завтрак достаточно скромный. Хлеб, яйцо чай. Но по всему маршруту Коры очень много ресторанов/кафе где можно заказать полноценный обед. Китайская и Тибетская кухня.
      </Accordion>
      <Accordion
        title="Дорогая ли еда в Тибете?"
      >
        Можно рассчитывать примерно на 200 юаней в день. (хороший обед и ужин)
      </Accordion>
      <Accordion
        title=" Можно ли купить в Тибете орехи и сухофрукты?"
      >
        Все это продается. Стоит обратить внимание на Bayi supermarket.
      </Accordion>
      <Accordion
        title=" Где можно купить сувениры?"
      >
        Barkor supermarket лучшее место для этого. Или район Barkor, но цены там дороже
      </Accordion>
      <Accordion
        title="Какие условия проживания на Кайлас коре?"
      >
        Проживание в гестхаусе скромное. В комнате находится 3-5 кроватей. Электричество доступно обычно с 20.00 до 00.00. Туалет находится на улице.
      </Accordion>
      <Accordion
        title="Можно ли купить в Лхассе снаряжение для Коры?"
      >
        В Лхассе огромное количество таких магазинов. Представлены профессиональные бренды:
        North Face, Vaude, Kailas . Under Armor и тд
      </Accordion>
      <Accordion
        title="Можно ли взять с собой переносной душ? (для Коры)"
      >
        Нет смысла в этом
      </Accordion>
      <Accordion
        title="Можно ли привезти в Китай дрон для съемки видео?"
      >
        Иностранцам это запрещено, хотя китайцы активно пользуются.
      </Accordion>
      <Accordion
        title="Можно ли ввозить книги в Тибет?"
      >
        Можно, но они не должны в себе содержать историю Тибета и изображение Далай Ламы
      </Accordion>
      <Accordion
        title="Можно ли зарегистрировать багаж до Лхассы при перелете из Москвы?"
      >
        Нет. Багаж регистрируют только до первого китайского города на маршруте.
      </Accordion>
      <Accordion
        title="Какая норма провоза багажа?"
      >
        Проверяйте внимательно билеты.
      </Accordion>
      <Accordion
        title="Нужна ли копия пермита для вылета из Москвы?"
      >
        Лучше иметь, хотя это на усмотрение а.к.
      </Accordion>
      <Accordion
        title="Когда начинается «горная болезнь» по прилету в Тибет?"
      >
        Наиболее острая форма на второй день. По прилету необходимо пить очень много воды с витамином С. И гиды рекомендуют в первый вечер не мочить голову, при приеме душа.
      </Accordion>
      <Accordion
        title="Как готовиться для поездки в Тибет?"
      >
        Это лучше начинать на пол года. Более подробная информация в  моем путеводителе.
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
  label = "Смотреть программы на 2024",
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
  return <AbstractButton label="Смотреть программы" anchor={LINK_OFFERS} />;
};

const TimetableDay: React.FC<{
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

const TimetablePhoto: React.FC<{
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

const TimetablePhotoDouble = () => {
  return (
    <div className="py-5 md:py-5 flex justify-center">
      <div className="flex max-w-3xl gap-1">
        <img
          src="https://storage.googleapis.com/opentibet/background-kailas.jpg"
          className="rounded-lg w-[50%]"
        />
        <img
          src="https://storage.googleapis.com/opentibet/background-kailas.jpg"
          className="rounded-lg w-[50%]"
        />
      </div>
    </div>
  );
};

export const TimetableList = ({ accentColor = "blue-500" }) => {
  return (
    <>
      <TimetableDay accentColor={accentColor} title="1 день">
        Перелет Ченду-Лхаса
        Прибытие в аэропорт Гонкар – (3550м)
        <br />Трансфер в Лхасу (3600м)
        <br />
        <br />
        Ночь в Лхасе в <b>Banakshi hotel</b>
      </TimetableDay>
      <TimetableDay accentColor={accentColor} title="2 день">
        Посещение <b>Дворца Потала</b>, храма Джокханг и туристического района Баркор.
        <br />
        <br />
        Лхаса – столица Тибетского автономного округа, один из самых высоко расположенных городов в мире (ок. 3500 м над уровнем моря), древний духовный и государственный центр Тибета. В результате административной реформы 1960 г. в составе Тибетского автономного округа был образован городской округ Лхаса, а историческая городская территория стала окружным районом Чэнгуань (Chengguan). В настоящее время население округа составляет ок. 2 млн. человек, почти половина из которых живут непосредственно в историческом городе. Лхаса является также традиционной резиденцией Далай-ламы. Буквально в переводе с тибетского «лхаса» означает «место богов».
        <br />
        <br />
        Дворец Потала –Белый дворец – одна из главных «визитных карточек» Лхасы и Тибета.Это самый большой по площади и самый высокогорный дворец-музей (3700 м) в мире. Входит в Список Всемирного наследия ЮНЕСКО. В настоящее время возведенный в характерном для тибетской архитектуры эклектичном стиле дворец-храм занимает площадь свыше 360 тыс. м2, и в нем насчитывается более 1000 помещений. Многие из них это часовни со скульптурами Далай-лам и их тронные и медитационные залы, а также спальные покои, где бережно хранятся предметы личного быта духовных правителей Тибета. Стены многих комнат украшены фресками; в экспозиции также выставлены многочисленные скульптуры и манускрипты. С балконов открываются прекрасные виды на Лхасу и окружающие горы.
        <br />
        <br />
        <TimetablePhoto src={imagesSrc.potala} title="Дворец Потала" />
        Монастырь Джоканг - это самый почитаемый в Тибете храм (Jokhang), входит в список Всемирного наследия ЮНЕСКО. По преданию его построил Сонгцэн Гампо в 647 г. для своей жены, непальской принцессы Бхрикути. Внутри 4-этажного храма, в многочисленных часовнях, сейчас хранятся свыше 3 тыс. изображений (скульптуры, фрески) Будды, буддистских божеств и тибетских буддистских святых. Основным объектом поклонения является установленная в главном зале нижнего этажа статуя Джово Шакьямуни, изображающая Будду в 12 лет.
        <br />
        <br />
        Ночь в Лхасе. Ночь в <b>Banakshi hotel</b>.
      </TimetableDay>
      <TimetableDay accentColor={accentColor} title="3 день">
        Посещение монастырей Сера (4300м) и Дрепунг (4400м) .
        <br />
        <br />
        Сэра́ или Сера́ (тиб. སེ་ར) — монастырь в пригороде Лхасы в Тибете (около 5 км от города), один из самых крупных буддийских монастырей и университетов школы Гелуг тибетского буддизма. Является местом паломничества. Ранее был одним из трёх «государственных монастырей» Тибета, наряду с Дрепунгом и Ганденом. Сейчас монастырь продолжает функционировать; в нём проживает более сотни монахов. Монастырь также является музеем, который посещают многочисленные туристы. Монахи регулярно проводят оживлённые философские диспуты.
        <TimetablePhoto src={imagesSrc.sera} title="Монастырь Сера" />
        Дрепу́нг (тиб. འབྲས་སྤུངས, вайли: ’Bras-spungs, кит. 哲蚌 Чжэбан, китайская романизация тибетского языка: Zhaibung; согласно официальной тибетско-русской транскрипции — Джэбунг; в монгольском произношении — Брайбун) — монастырь в пригороде Лхасы в Тибетском автономном районе Китая, примерно в 10 км от города. Самый крупный буддийский монастырь и университет школы Гелуг тибетского буддизма, а также место паломничества. Ранее Дрепунг был одним из трёх государственных «великих» монастырей, с подворьями по всему Тибету и за его пределами. Территория монастыря составляет 200 тыс. м².
        Ночь в Лхасе в Banakshi hotel.
        <TimetablePhoto src={imagesSrc.drepung} title="Монастырь Дрепу́нг" />
      </TimetableDay>
      <TimetableDay accentColor={accentColor} title="4 день">
        Переезд Лхаса (3550 м)– Шигадзе (3950 м) (350км 5 часов)
        Посещение монастыря Ташилунпо.
        <br />
        <br />
        Шига́дзе, также Шигацзе́ (тиб. གཞིས་ཀ་རྩེ་, кит. упр. 日喀则, пиньинь Rìkāzé, палл. Жикацзэ) — Современный большой город, второй по величине в Тибете, столица уезда с населением 880 тыс. чел. Основная часть населения – китайцы; тибетцы проживают в своём небольшом квартале и в главной достопримечательности Шигадзе (Shigadze) – монастыре Ташилунпо (Tashilhunpo), одном из немногих, переживших Культурную революцию. Над старым кварталом возвышаются живописные руины крепости-дзонга. Южнее монастыря расположен летний дворец панчен-ламы, построенный в середине XIX в. в национальном стиле.
        <br />
        <br />
        Монастырь Ташилунпо - Важный центр школы Гелуг. Его основал в 1447 г. Генден Друп, ученик Цонкапы. Позже именно Генден Друпа стали считать первым Далай-ламой. В 1652 г. пятый Далай-лама признал за настоятелем монастыря право называться «панчен-ламой» («великим учителем»). Это второй по значимости титул в Тибете после Далай-ламы. Именно благодаря данному обстоятельству Ташилунпо (Tashilhunpo) избежал разрушений в 1960-е гг. Во времена расцвета в монастыре, и сейчас занимающем площадь более 70 тыс. м2, проживали свыше 5 тыс. монахов; в настоящее время – около 700.
        <TimetablePhoto src={imagesSrc.tashilhunpo} title="Монастырь Ташилунпо" />
        Ночь в Шигадзе, в Wan rui отель.
      </TimetableDay>
      <TimetableDay accentColor={accentColor} title="5 день">
        Переезд Шигадзе – Сага – Парьянг (4500м) (12 часов)
        <br />
        <br />
        Сага город в провинции Шигадзе, столица области Сага на высрте 4600м с населением 20 тыс. человек. Основан был в 1960 году. Область имеет общую границу с Непалом около 100км. Известность город приобрел, как транзитный пункт для непальских и индийских групп, цель которых паломничество к горе Кайлас.
        <br />
        <br />
        Парьянг (Paryang) находится на высоте 4610 м переводится с тибетского как «Широкое место»
        Это максимально отдалённая точка от Шигадзе (Shigadze) с возможностью ночёвки, которую можно достичь за день.
        <br />
        <br />
        Ночь в Paryang Hotel
      </TimetableDay>
      <TimetableDay accentColor={accentColor} title="6 день">
        Переез Парьянг (4500м) – Дарчен (4600м) – Пуранг (3700м)
        <br />
        <br />
        Преодоление первых перевалов высотой более 5000 метров, озеро Манасаровар  и первые виды на священный Кайлас.
        <br />
        <br />
        Осмотр монастыря Чиу ("Птичий монастырь"). Изначально Чиу Гомпа был построен на горе овальной формы Сангдуо Байре («Медная гора»). Центральное Место Силы здесь – пещера VIII в., в которой медитировал Падмасамбхава. Здесь он провёл последние семь дней своей земной жизни С вершины монастыря открывается великолепные вид на озера Ракшас Тал и Манасаровар (4500 м.), а также на заснеженную вершину Кайлаша.
        <TimetablePhoto src={imagesSrc.chiu} title="Монастырь Чиу" />
        Монастырь Госсул (Gossul Gompa) построен чуть правее пещеры, в которой великий Атиш́а проходил семидневную медитацию. С площадки перед монастырём открывается потрясающая
        панорама Кайласа и озера. Отсюда индусы обычно начинают свою Манасаровар-Кору. Внутри обители находится ещё одна пещера, где в XIII в. св. Гоцампа из школы Кагью.
        <br />
        <br />
        Ночь в Пуранге. Отель Holiday
      </TimetableDay>
      <TimetableDay accentColor={accentColor} title="7 день">
        Посещение Монастыря Корчаг – возвращение в Дарчен - по пути остановка у озеро Ракшас Тал
        <br />
        <br />
        Осмотр монастыря Корчег
        Монастырь, также называемый Монастырь Корчага— буддийский монастырь в городе Хоржак (пиньинь: Коркаг) уезда Буранг, префектуры Нгари в западном Тибете. известный монастырь 12 века Корчаг (Khorchag). Это очень известное священное место . Он был построен великим переводчиком Ринченом Цангпо, этот монастырь вначале относился к линии Кадам, а позднее перешёл в линию Сакья. В монастыре находится статуя Джобо Джампа Дордже (Бодхисаттвы Манджушри), которое было благословлено самим Ринченом Цангпо
        <br />
        <br />
        Озеро Ракшастал (Ланга-цо; Rakshas Tal, Langa Tso). Расположено слева от Манасаровара на высоте 4575 м. Длина его береговой линии составляет примерно 125 км, площадь – 360 км2. Другое название озера – Равана Храда связано с правнуком Брахмы Раваной, царём демонов (ракшасов). По одной из легенд, Равана простоял в Ракшастале на одной ноге 1000 лет, поклоняясь Шиве, после чего получил от него сверхсилы (сиддхи). По другой, Равана совершал здесь ягью (огненное подношение) Шиве, причем приносимой жертвой служила его собственная голова. Шива был настолько поражён его самоотречением, что подарил Раване неуязвимость и бессмертие.
        <TimetablePhoto src={imagesSrc.rakshastal} title="Озеро Ракшастал" />

        Дарчен – Название города (Darchen) в данном случае переводится как «большой флаг». Когда-то на стене местного монастыря, уничтоженного в годы Культурной революции, вывешивали огромную тханку с изображением Будды.
        После распада единого Тибетского государства в середине IX в. правители западного Тибета (Нгари) захватили расположенную южнее историческую область Ладакх (Ladakh; сегодня входит в состав индийского штата Джамму и Кашмир) и основали Ладакхское царство. В XII в. ладакхские цари подарили территорию, на которой расположен Дарчен, бутанскому ламе Друкчену Нгавангу Намгьялу. С этого времени начали возводиться монастыри на маршруте Кайлас-Коры.
        <br />
        <br />
        Ночь в Дарчене. New Castle hotel.
      </TimetableDay>
      <TimetableDay accentColor={accentColor} title="8 день">
        Кора первый день.
        <br />
        <br />
        Обычно кора начинается с Тарпоче,куда туристов привозит автобус из Дарчена. Это
        место известно священным кладбищем Драчом Нгагье Дуртрё (кладбище 84 махасиддх).Слева от Тарпоче видна большая белая ступа. Это Чортен Кангньи. Считается, что проход через арку в ступе (чортене) освобождает путника от последствий всех грехов.
        <br />
        <br />

        <TimetablePhoto src={imagesSrc.nandi} title="Кайлас" />

        Через нескольких километров от Тарпоче показывается мост через Лха Чу. Он ведёт к монастырю Чуку, который принадлежит линии Дрикунг школы Кагью.  Он построен в XIII в. в том месте, где, по легенде, из скалы появилась белая овца. Монастырь Чуку знаменит нерукотворной статуей Будды Амитабхи (Будды Бесконечного Света, по-тибетски — Нангва Тайе).  Статуя  сделана» из белого мрамора и считается важной святыней Кайлас коры.
        <br />
        <br />
        Монастырь Дрира Пхуг (Drira Phug), основан в 1213 г. Мастером Гоцангпа. Принадлежит линии Дрикунг школы Кагью. С ним и окружающими его горами связано огромное количество легенд. После длительной  медитации в пещере, на месте которой построен монастырь, Мастер произнес: «Каждый, кто обопрётся головой в этой пещере, будь то существо в драгоценном человеческом обличье, будь то существо из трёх видов живых существ: птиц, грызунов или насекомых, – каждый избежит перерождения в нижних мирах, даже если он попадёт сюда случайно». Говоря это, он оставил вмятину своей головой в скале.
        <br />
        <br />
        Ночь в New Guest Norh Face. (4950м)
      </TimetableDay>
      <TimetableDay accentColor={accentColor} title="9 день">
        Кора второй день.
        <br />
        <br />
        Это самый трудный день коры. Он является кульминационным днём коры вокруг Кайласа, так как Вы пересечете перевал Дролма-Ла (5600 м), который поразит Вас своей энергетикой. На вершине перевала лежит гигантский кубический камень под названием Пхаванг Мебар.
        <br />
        <br />
        Здесь Вы возрождаетесь, так как все грехи прощаются благодаря состраданию Дролмы, богини Милосердия.
        При спуске с перевала справа, чуть ниже тропы, виднеется священное озеро Йокмо Цо (также Тукдже Дзингбу, Озеро Сострадания, индийцы называют его Гаури Кунд). Гаури Кунд — одно из самых высокогорных в мире озёр. В индуизме считается, что озеро создал Шива по просьбе своей супруги Парвати.
        Далее Вас ждет шестичасовой переход к монастырю Зутур пхук (4750 м).
        <br />
        <br />
        Монастырь Зутрул Пхук (в переводе означает ‘Пещера чудес’) выстроен вокруг пещеры, которая стала
        местом знаменитой победы Миларепы над мастером бона Наро Бончунгом.
        Ночь у монастыря Зутур Пхук. New Guesthouse. (4700м)
      </TimetableDay>
      <TimetableDay accentColor={accentColor} title="10 день">
        Завершающий день коры – «финишная прямая» дорога идёт на спуск, возвращение в Дарчен,
        Посещение Гьяндрак и Серлунг на джипах. Опционно.
        <br />
        <br />
        Обитель Гьянгдрак Гомпа (Gyangdrak Gompa) на холме в долине Гьянгдрак-чу производит фантастическое впечатление. Приблизительный перевод названия – «предел слышимости». По преданиям, долина названа так потому, что находящиеся в ней могут вбирать в себя звуки окрестных священных мест.
        Монастырь (появился здесь в 1215 г)., и вот уже 800 лет принадлежит традиции Дрикунг школы Кагью.
        <br />
        <br />
        Серлунг Гомпа – самая маленькая из пяти обителей вокруг Кайласа; её строения расположены в виде прямоугольника. После полной реконструкции 2012 г. во внутреннем дворе справа – главный храм со статуей Падмасамбхавы. Рядом с монастырём находится большая белая ступа Джангчуб; такая же украшает противоположный берег одноимённой реки. В Серлунг Гомпа всего два монаха.
        <br />
        <br />
        Ночь в Дарчене. New Castle hotel.
      </TimetableDay>
      <TimetableDay accentColor={accentColor} title="11 день">
        Переезд Дарчен – Ладзе (около 14 часов)
        <br />
        <br />
        Обычно из Ладзе туристы направляются на юг, к непальской границе и базовому лагерю Эвереста.
        За последние несколько лет город стало не узнать. Из маленького провинциального городка он превратился в современный китайский город. Рядом с Лхадзе пролегают русла трёх рек. Ближайшая высочайшая вершина – гора Якри высотой 5656 м к северу от Лхадзе.
        <br />
        Единственной достопримечательностью является монастырь Чангмоче на западе города. Он принадлежит последователям «красношапочной» традиции школы Кагья.
      </TimetableDay>
      <TimetableDay accentColor={accentColor} title="12 день">
        Переезд Ладзе – Гияндзе – Лхасса
        <br />
        <br />
        Посещение монастыря Пелкхор Чеде и Озера Ямдрок
        Гьяндзе  - Когда-то Гьяндзе (Gyantse) был третьим городом Тибета по значимости и  численности населения (после Лхасы и Шигадзе). Находится он в 250 км к юго-западу от Лхасы на высоте 3977 м, население – свыше 50 тыс. чел. Старый город расположился в долине, образованной невысокими горами, на одной из которых (с крутыми склонами) ещё в IX в. воздвигли крепость дзонг, а у подножия другой, более пологой, в XIV-XV вв. возник монастырь Палчо (Пелкхор Чоде).
        <br />
        <br />

        Монастырь Пелкор Чёде (сокращённо Пелчо или Палчо) — большой буддийский монастырь в посёлке Гьянгдзе в Тибете. На его территории находится знаменитая ступа Кумбум со 108 внутренними залами и алтарями на четырёх этажах. В ней сохранились многочисленные буддийские скульптуры, выполненные в непальском стиле. Архитектура и росписи ступы Кумбум следуют символизму школы Сакья, в частности, собранию тантр этой школы — «Друбтат Канту». Монастырь был основан в 1418 году первым Панчен-Релдрупом.
        Весь комплекс Пелкор-Чёде включал в себя 15 монастырей различных школ, преимущественно Гелуг , Кадам и Сакья. Монахи этих трёх школ делят общий зал для диспутов и собраний и помещения для изучения буддизма.

        <TimetablePhoto src={imagesSrc.pelkhor} title="Пелкор Чёде" maxHeight={400} />
        Озеро Ямдрок одно из священных озер Тибета. Расположен на высоте 4408 м, название Ямдрок означает «бирюзовое озеро Тибета». По форме Ямдрок-(Юм)цо напоминает осьминога; его голова – это северная часть озера. На одном из 9 островов воздвигнут монастырь, главной реликвией которого является камень со следом ноги Падмасамбхавы
        <TimetablePhoto src={imagesSrc.yamdrok} title="Озеро Ямдрок Юмцо" />


        Ночь в Лхасе Banakshi hotel
      </TimetableDay>
      <TimetableDay accentColor={accentColor} title="13 день">
        Лхаса свободный день.
        <br />
        <br />
        Ночь в Лхасе Banakshi hotel
      </TimetableDay>
      <TimetableDay accentColor={accentColor} title="14 день">
        Возвращение, авиаперелет в Ченду.
      </TimetableDay>
    </>
  );
};

export const TimetableFactoid: React.FC<{
  fact: string;
  value: string;
}> = ({ fact, value }) => {
  return (
    <div className="self-center">
      <div className="text-2xl tabular-nums leading-5 font-light">{value}</div>
      <div className="text-xs">{fact}</div>
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
}> = ({
  title,
  subtitle,
  days,
  price,
  bgColor = "blue-500",
  fgColor = "white",
  accentColor = "yellow-500",
}) => {
    const [isOpened, setIsOpened] = useState<boolean>(false);
    const daysLabel = getNoun(days, "день", "дня", "дней");

    return (
      <div className={`my-0 relative bg-gray-100`}>
        <div className="hidden bg-yellow-500" />
        <div
          className={`h-[72px] sticky top-[60px] md:top-[64px]
         border-b-[1px] border-b-${fgColor}/30
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

            <div className={`p-4 text-${fgColor}`}>
              <svg className="w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778" />
              </svg>
              {/* {isOpened ? <IconArrowClose /> : <IconArrowDown />} */}
            </div>
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
  subtitle: string;
  children: React.ReactNode;
}> = ({ title, subtitle, children }) => {
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

  return (
    <div id={LINK_APPLY_FORM}>
      <div className="flex items-center flex-wrap">
        <div className="w-full md:max-w-[50%]">
          <Header
            title="Заявка на участие"
            subtitle="Заполните заявку, и мы свяжемся с вами в ближайшее время"
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
                const resp = await fetch("./api/applications", {
                  method: "POST",
                  body: JSON.stringify(body),
                  headers: {
                    "content-type": "application/json",
                  },
                });
                alert(
                  `Спасибо за заявку, ${name}! Мы свяжемся с вами в ближайшее время`
                );
                setName("");
                setEmail("");
                setPhone("");
                console.log(resp);
                const json = await resp.json();
                console.log(json);
              } catch (error) {
                alert(
                  `${name}, не удалось отправить заявку! Пожалуйста, попробуйте ещё раз или напишите нам на почту info@opentibet.ru`
                );
              }
            }}
          >
            <div className="py-[8px]">
              <label
                htmlFor="first_name"
                className="block mb-1 text-[10px] uppercase tracking-wider font-semibold text-gray-900"
              >
                Имя
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
                Эл. почта
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
                Или номер телефона
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
                Отправить
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
                  Программы
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
                  Фото
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
                  Контакты
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

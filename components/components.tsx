"use client";

import Image from 'next/image'

import { useState, useEffect } from 'react';
import { useRef } from 'react';


import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

import { Slick } from './Slick'
import { LINK_CONTACTS, LINK_PHOTO_GALLERY, LINK_TOURS } from '@/utils/constants';

export const BackgroundSlider = () => {
  const images = [
    // 'https://storage.googleapis.com/opentibet/chiu.jpg',
    // 'https://storage.googleapis.com/opentibet/raduga.jpg',
    // 'https://storage.googleapis.com/opentibet/topor.jpg',
    'https://storage.googleapis.com/opentibet/background-6.jpg', // padmasambhava

    'https://storage.googleapis.com/opentibet/background-2.jpg', // drak yerpa ok
    // 'https://storage.googleapis.com/opentibet/background-3.jpg',
    'https://storage.googleapis.com/opentibet/background-4.jpg',
    'https://storage.googleapis.com/opentibet/background-5.jpg', // monah ok
    // 'https://storage.googleapis.com/opentibet/background-8.jpg',
    'https://storage.googleapis.com/opentibet/background-1.jpg', // devochka ok

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
      return <img src={url} key={index} style={{ display: 'none' }} />
    })
  }
  return (
    <>
      <div
        className='w-full h-full absolute'
        style={{
          backgroundImage: `url(${currentImageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transition: 'background-image 1s ease-in-out',
        }}
      />
      {renderImagesList()}
    </>

  );
}


export const Arrow = () => {
  const nextSectionRef = useRef<HTMLDivElement>(null);
  const scrollToNextSection = () => {
    if (nextSectionRef.current) {
      nextSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div className="flex justify-center items-center h-16 w-full">
      <div className="text-gray-300 hover:text-gray-600 cursor-pointer" onClick={scrollToNextSection}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
  )
}

export const PhotoGallery = () => {
  const photo1src = 'https://storage.googleapis.com/opentibet/chiu.jpg'
  const photo2src = 'https://storage.googleapis.com/opentibet/raduga.jpg'
  const photo3src = 'https://storage.googleapis.com/opentibet/topor.jpg'
  const photo4src = 'https://storage.googleapis.com/opentibet/background-7.jpg' // replace with actual photos
  const photo5src = 'https://storage.googleapis.com/opentibet/background-8.jpg'
  const photo6src = 'https://storage.googleapis.com/opentibet/background-1.jpg'

  return (
    <PhotoProvider>
      <div className="grid grid-cols-2 gap-1">
        <PhotoView src={photo1src}>
          {/* <Image src={photo1src} alt="" width={375} height={250} quality={75} className="col-start-1 col-end-2 row-start-2 row-end-4 rounded-sm cursor-pointer" /> */}
          <img src={photo1src} alt="" className="col-start-1 col-end-3 rounded-sm cursor-pointer" />
        </PhotoView>
        <PhotoView src={photo2src}>
          <img src={photo2src} alt="" className="col-start-1 col-end-2 row-start-2 row-end-4 rounded-sm cursor-pointer" />
        </PhotoView>
        <PhotoView src={photo3src}>
          <img src={photo3src} alt="" className="col-start-2 col-end-3 row-start-2 row-end-3 rounded-sm cursor-pointer" />
        </PhotoView>
        <PhotoView src={photo4src}>
          <img src={photo4src} alt="" className="col-start-1 col-end-2 row-start-3 row-end-4 rounded-sm cursor-pointer" />
        </PhotoView>
        <PhotoView src={photo5src}>
          <img src={photo5src} alt="" className="col-start-2 col-end-3 row-start-3 row-end-4 rounded-sm cursor-pointer" />
        </PhotoView>
      </div>
      {/* <PhotoView src={photo5src}>
        <img src={photo5src} alt="" />
      </PhotoView>
      <PhotoView src={photo6src}>
        <img src={photo6src} alt="" />
      </PhotoView> */}
    </PhotoProvider>
  )
}

const Accordion: React.FC<{ title: string, content: string }> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        className="flex justify-between items-center w-full py-6 px-6 text-base font-medium text-left text-gray-900 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{title}</span>
        <span className="ml-6">
          {isOpen ? (
            <IconArrowClose />
          ) : (
            <IconArrowDown />
          )}
        </span>
      </button>
      {isOpen && (
        <div className="px-6 py-6 pt-0 text-gray-700 leading-7">{content}</div>
      )}
    </div>
  );
};

export const IconArrowDown = () => {
  return (
    <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 8">
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1" />
    </svg>

  )
}

export const IconArrowClose = () => {
  return (
    <svg className="w-3.5 h-3.5 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
    </svg>
  )

}

export const FAQ: React.FC = () => {
  return (
    <>
      <Accordion
        title="Какие документы и визы мне понадобятся для поездки в Тибет?"
        content="Для посещения Тибета необходимо получить специальное разрешение от китайских властей, известное как 'Тибетский пермит'. Этот пермит можно оформить через нашу компанию. Также вам потребуется китайская виза. Мы предоставим подробную информацию и помощь в получении всех необходимых документов."
      />
      <Accordion
        title="Какие медицинские меры безопасности следует предпринять перед поездкой в высокогорные районы Тибета?"
        content="Высокогорные районы Тибета могут вызвать высотную болезнь. Рекомендуется проконсультироваться с врачом перед поездкой. Мы также предоставляем медицинские советы и обеспечиваем медицинскую поддержку во время поездки."
      />
      <Accordion
        title="Какие виды путешествий и маршрутов вы предлагаете?"
        content="Мы предлагаем разнообразные маршруты, включая паломнические поездки, горные походы, культурные туры и многое другое. Мы также создаем индивидуальные маршруты, чтобы удовлетворить потребности каждого клиента."
      />
      <Accordion
        title="Какие условия проживания и питания во время поездки?"
        content="В зависимости от выбранного маршрута, размещение может варьироваться от комфортных гостиниц до традиционных монастырей. Мы предоставляем вкусное питание, включая местные блюда. Все детали проживания и питания будут ясно оговорены в выбранном путешествии."
      />
      <Accordion
        title="Какое лучшее время года для посещения Тибета?"
        content="Лучшее время для посещения Тибета — с мая по сентябрь, когда погода наиболее благоприятна. Однако, в зависимости от выбранного маршрута, есть возможность посещения Тибета в течение всего года. Мы поможем вам выбрать наилучшее время для вашей поездки."
      />
    </>
  );
};

export const ActionButton = () => {
  return (
    <button
      className="bg-blue-500 hover:bg-blue-800 text-white font-bold py-3 px-5 rounded-lg flex items-center md:py-3 md:px-6 md:text-lg"
      onClick={() => {
        const timetableElementRef = document.getElementById(LINK_TOURS);
        if (timetableElementRef) {
          timetableElementRef.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }}
    >
      Смотреть программы на 2024
      <svg className="w-4 h-4 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
        <path stroke="currentColor" strokeWidth="2" d="m1 13 5.7-5.326a 0 0 0 0 0 0-1.348L1 1" />
      </svg>
    </button>
  )
}

const TimetableDay: React.FC<{
  title: string;
  children: React.ReactNode
}> = ({ children, title }) => {
  return (
    <div className='flex'>
      <div className='flex flex-col justify-center items-center'>
        <div className='flex justify-center p-4 pl-2'>
          <div className="w-3 h-3 rounded-full bg-blue-500" />
        </div>
        <div className='w-0.5 bg-gray-300 h-full' />
      </div>
      <div className='pr-10'>
        <div className='font-bold text-xl text-gray-800 pt-2 pb-4'>{title}</div>
        <div className='leading-9 text-sm md:text-base'>
          {children}
        </div>
      </div>
    </div>
  )
}

const TimetablePhoto = () => {
  return (
    <div className='py-5 flex justify-center'>
      <div className='max-w-lg'>
        <img src="https://storage.googleapis.com/opentibet/background-kailas.jpg" className='rounded-lg' />
        <div className='text-center p-2 text-sm text-gray-500'>Манасаровар и Кайлас</div>
      </div>
    </div>
  )
}

const TimetablePhotoDouble = () => {
  return (
    <div className='py-5 md:py-5 flex justify-center'>
      <div className='flex max-w-3xl gap-1'>
        <img src="https://storage.googleapis.com/opentibet/background-kailas.jpg" className='rounded-lg w-[50%]' />
        <img src="https://storage.googleapis.com/opentibet/background-kailas.jpg" className='rounded-lg w-[50%]' />
      </div>
    </div>
  )
}


const TimetableList = () => {
  return (
    <>
      <TimetableDay title='1 день'>
        Перелет Ченду-Лхаса. Прибытие в аэропорт Гонкар в 19.00-(3550м)
        <br />
        Переезд в Лхасу (3600м). Ночь в Лхасе Tibet hotel
      </TimetableDay>
      <TimetableDay title='2 день'>
        Лхаса
        Посещение монастыря Джокханг, Дворца Потала (Опционно ) и туристического района Баркор.
        Лха́са (произносится l̥ásə, тиб. ལྷ་ས, Вайли lhasa, кит. трад. 拉薩, упр. 拉萨, пиньинь: Lāsà) — городской округ в Тибетском автономном районе КНР, место размещения правительства автономного района, бывшая столица независимого Тибетского государства. Лхаса является также традиционной резиденцией Далай-ламы. Буквально в переводе с тибетского «лхаса» означает «место богов».
        <br />
        <br />
        Дворец Потала – буддистский храмовый комплекс, сегодня – музей. Возведённый в характерном для тибетской архитектуры эклектичном стиле дворец-храм занимает площадь свыше 360 тыс. м2 и насчитывает свыше 1000 помещений. Многие из них – часовни со скульптурами Далай-лам, тронные и медитационные залы, а также спальные покои, где бережно хранятся предметы личного быта духовных правителей Тибета. Стены многих комнат украшены фресками.
        <TimetablePhoto />
        Монастырь Джоканг — это самый почитаемый в Тибете храм (Jokhang), входит в список Всемирного наследия ЮНЕСКО. По преданию его построил Сонгцэн Гампо в 647 г. для своей жены, непальской принцессы Бхрикути. Внутри 4-этажного храма, в многочисленных часовнях, сейчас хранятся свыше 3 тыс. изображений (скульптуры, фрески) Будды, буддистских божеств и тибетских буддистских святых. Основным объектом поклонения является установленная в главном зале нижнего этажа статуя Джово Шакьямуни, изображающая Будду в 12 лет.
      </TimetableDay>
      <TimetableDay title='3 день'>
        Экскурсии в монастыри Ганден(4300м) и Драк Йерпа(4400м) в окрестностях Лхасы.
        <br />
        <br />
        Ганден (тиб. དགའ་ལྡན, Вайли dga' ldan) — монастырь на горе Вангбур, один из самых крупных буддийских монастырей и знаменитый университет школы гелуг тибетского буддизма. Ганден был одним из трёх государственных монастырей. Название «Ганден» — это тибетский перевод санскритского «Тушита», легендарной обители Будды Майтреи. Находится на высоте 4300 м.
        <br />
        <br />
        Медитационные пещеры Драк Йерпа — одно из самых святых мест центрального Тибета, расположенное на склонах гор в примерно двух часах езды от Лхасы. Начиная с VII века в пещерах медитировали, царь Сонгцен Гампо, индийский буддийский мыслитель Атиша, великий махасиддха Гуру Падмасамбхава, просветлённая йогини и дакини Еше Цогъял. В этих пещерах проживали, изучали буддизм и уходили в затворничество отшельники, монахи и монахини на протяжении десяти веков.
        <br />
        <br />
        Ночь в Лхасе. Ночь в Tibet hotel.
      </TimetableDay>
      <TimetableDay title='4 день'>
        Посещение монастыря Ташилунпо. Монастырь построен в 1447 году на холме недалеко от центра города. Полное название монастыря по-тибетски буквально означает «всё счастье и благополучие собрано тут». Монастырь Ташилунпо традиционно является резиденцией Панчен-ламы, второго по значимости иерарха-тулку школы Гелуг после Далай-ламы. Панчен-лама является эманацией будды Амитабхи.
        <TimetablePhotoDouble />
        Переезд Шигадзе-Сакья 2 часа
        <br />
        <br />
        Монастырь Сакья – главный монастырь загадочной и самой закрытой школы Сакья тибетского буддизма. Школа Сакья переживала расцвет в XIII и XIV веках при покровительстве юаньской империи (монгольских правителей Китая). В это время школа Сакья была главной школой тибетского буддизма, а город Сакья — административным центром всего Тибета.
      </TimetableDay>
      <TimetableDay title='5 день'>
        Выезд в 7 утра. Прибытие в Ронгбук в 10.00
        <br />
        <br />
        Посещение самого высокогорного в мире монастыря Ронгбук — это реконструированный тибетский буддийский монастырь, когда-то самый крупный в регионе, где проживало более 500 монахов и монахинь. Сейчас их осталось около 30. Ронгбук был основан в 1902 году Нгвангом Тензином Норбу, ламой школы Ньингма. Один из основных храмов монастыря называется Зарум (Zarum).  В нескольких километрах находятся руины старого монастыря, на этом месте ещё с XVIII века были хижины и пещеры, которые использовались женской монашеской общиной для медитаций. Стоит обратить внимание на пещеру Падмасабхавы (8 век).
      </TimetableDay>
      <TimetableDay title='6 день'>
        Нью Тингри- Percu Tso (озеро ) – Сага -Парьянг
        Дорога проходит вдоль Гималайской гряды.
        <br />
        <br />
        Позже мы сворачиваем к священному озеру Percu tso и восьмитысячнику Шашипангма.
        <br />
        <br />
        Ночь Парьянг
      </TimetableDay>
      <TimetableDay title='7 день'>
        Преодоление первых перевалов высотой более 5000 метров, первые виды на священный Кайлас.
        <br />
        <br />
        Осмотр монастыря Чиу ("Птичий монастырь"). С вершины монастыря открывается великолепные вид на озера Ракшас Тал и Манасаровар, а также на заснеженную вершину Кайлаша. Посещение пещеры Падмасамбхавы, где он практиковал последние 7 дней, прежде чем ушёл из этого мира.
        <br />
        <br />
        Монастырь Госсул (Gossul Gompa) построен чуть правее пещеры, в которой великий Атиш́а проходил семидневную медитацию. С площадки перед монастырём открывается потрясающая
        панорама Кайласа и озера. Отсюда индусы обычно начинают свою Манасаровар-Кору. Внутри обители находится ещё одна пещера, где в XIII в. св. Гоцампа из школы Кагью.
        <br />
        <br />
        Ночь в Дарчене 4600 метров.
        <br />
        <br />
        Посещение монастыря Тхолинг.
        Полуразрушенный монастырь Тхолинг — один из древнейших в Тибете. Он был основан в начале 10-го века вторым правителем королевства Гуге Йеше О. На его территории можно увидеть многие шедевры архитектуры, выполненные в индийском стиле, явно отличающемся от традиционного тибетского. Особенную известность приобрели фрески монастыря.
      </TimetableDay>
      <TimetableDay title='9 день'>
        Цапаранг – древняя столица королевства Гуге, располагавшегося  в западном Тибете. Цапаранг пережил период расцвета в IX и был заброшен в XVII веке.
        В Гуге было основано более 100 буддийских монастырей. В Цапаранге огромное число монастырей, дворцов и часовен было выстроено на одном утесе высотой около 300 м и соединены между собой подземными туннелями и навесными мостами. Руины занимают площадь около 720 000 квадратных метров.
        <br />
        <br />
        Целый день экскурсий. Королевство Гуге.
        <br />
        <br />
        Ночь в Цапаранге, Guge Hotel.
      </TimetableDay>
      <TimetableDay title='10 день'>
        Переезд в Дарчен. Священная земля Тритхапури и монастыря Гурген.
        Посещение монастыря боннского Гурген на въезде в Долину Гаруды, столицу древнего королевства Шанг Шунг.
        <br />
        <br />
        Название "Тиртхапури" происходит от санскритского и состоит из двух слов – тиртха, что переводится как «священный водоем», и пури – «храм». Поэтому само название можно перевести, как «храм, стоящий на священных источниках», так как тут находятся термальные источники, которые считаются очень священными. Тиртхапури – мистическое место в Тибете, одно из "мест силы", связанных с Падмасамбхавой.
        <br />
        <br />
        Рядом на скале находится известный храм Тиртхапури с пещерой, где Падмасамбхава, Драгоценный Гуру, по преданию, покорил демона.
        <br />
        <br />
        <TimetablePhoto />
        Ночь в Дарчене Jingruihong hotel.
        <br />
        <br />
        Название "Тиртхапури" происходит от санскритского и состоит из двух слов – тиртха, что переводится как «священный водоем», и пури – «храм». Поэтому само название можно перевести, как «храм, стоящий на священных источниках», так как тут находятся термальные источники, которые считаются очень священными. Тиртхапури – мистическое место в Тибете, одно из "мест силы", связанных с Падмасамбхавой.
        <br />
        <br />
        Рядом на скале находится известный храм Тиртхапури с пещерой, где Падмасамбхава, Драгоценный Гуру, по преданию, покорил демона.
      </TimetableDay>
      <TimetableDay title='11 день'>
        Переход до монастыря Дирапук (4910 м) 20 км, около 6-7 часов ходьбы. Вы начинаете путь от Тарпоче, мимо ступ, по пути мы увидим небесное кладбище, связанное с 84 махасидхами (йогинами) из Индии, пройдем через Ворота Богов Смерти, мимо льющихся каскадов ручьев, водопадов и западного лица Кайласа, монастыря Чукку.
        <br />
        <br />
        Далее мы доходим до монастыря Дирапук и останавливаемся на ночлег в гостевом домике напротив северного лица Кайласа.
        Возможны 2 опции:
        <br />
        <br />
        -Подъем на плато перед Западным лицом (5300м), продолжительность около 6 часов.
        <br />
        -Возможен радиальный выход к северному лицу Кайласа.
        <br />
        <br />
        Ночь в гестхаузе рядом с монастырем Дхрира Пхук.
      </TimetableDay>
      <TimetableDay title='12 день'>
        Нам предстоит радиальный выход к Северо-восточному лицу Кайласа. Выход из гестхауса в 10ч.
        Подход к Северо-восточному лицу Кайласа и каменному зеркалу Дхарма Кинг Нарсанг. (5350м)
        <br />
        <br />
        Подъем на перевал Манджушари 5750 метров. Спуск в долину перевала Кхандро Санглам (5500м)
        <br />
        <br />
        Посещение священного озера Ваджравархи и завершение Манджушари Коры.
        <br />
        <br />
        Ночь в гестхаузе около монастыря Дрира Пхук (4950м)
      </TimetableDay>
      <TimetableDay title='13 день'>
        Это самый трудный день коры. Он является кульминационным днём коры вокруг Кайласа, так как Вы пересечете перевал Дролма-Ла (5600 м), который поразит Вас своей энергетикой. Здесь Вы возрождаетесь, так как все грехи прощаются благодаря состраданию Дролмы, богини Милосердия. Далее Вас ждет спуск вниз к монастырю Зутулпук (4790 м). По дороге Вы будете лицезреть: пики, потоки, водопады, горные пещеры. Также Вы сможете посетить монастырь Зутур Пхук.
        <br />
        <br />
        Для тех, кто уже был в Тибете и проходил  Внешнюю Кору будет возможность пройти альтернативным маршрутом, через перевал Кхандро Санглам (5675 м), так называемую Внутреннюю Кору.
        <br />
        <br />
        Ночь у монастыря Зутур Пхук (4800м). Посещение Пещеры Магических Сил. Обитель принадлежит линии Дрикунг школы Кагью. Гора над ней называется След Учителя Будды (5924 м).
        Главная святыня монастыря – пещера, где медитировал великий йогин Миларепа. Здесь же находится его статуя. На чёрном потолке – отпечатки рук и головы Миларепы. Снаружи монастыря, в нескольких метрах на юг, вертикально стоит огромная шестигранная глыба, окружённая каменной стеной
        <br />
        <br />
        Ночь в Гест Хаус Zutur Phuk
      </TimetableDay>
      <TimetableDay title='14 день'>
        Так же возможен радиальный выход в «симметричную Долину» (Гедхун)
        <br />
        <br />
        Уникальное по своей энергетики место
        <br />
        <br />
        -Возможна Кора вокруг горы Трон Будды. Со спуском к Монастырю Гяндрак.
        <br />
        Возвращение в Дарчен
        <br />
        Ночь в Дарчене  hotel.
      </TimetableDay>
      <TimetableDay title='15 день'>
        Дарчен (4600) – Сага (4500) – Ладзе (4000) (800км, 14 часов)
        <br />
        <br />
        Ночь в Ладзе в отеле Viena.
      </TimetableDay>
      <TimetableDay title='16 день'>
        Переезд Ладзе (4000) – Шигадзе (3900)–Лхаса (3600) (450км, 8 часов)
        <br />
        <br />
        Переезд. Ночь в Tibet hotel.
      </TimetableDay>
      <TimetableDay title='17 день'>
        Свободный день в Лхасе.
        <br />
        <br />
        Ночь в Tibet hotel.
      </TimetableDay>
      <TimetableDay title='18 день'>
        Свободный день Лхаса
        <br />
        <br />
        Ночь Tibet Hotel
      </TimetableDay>
      <TimetableDay title='19 день'>
        Перелет Лхаса-Ченду-Москва
      </TimetableDay>
    </>
  )
}

export const TimetableFactoid: React.FC<{
  fact: string;
  value: string;
}> = ({
  fact, value
}) => {
    return (
      <div className="self-center">
        <div className='text-2xl tabular-nums leading-5 font-light'>
          {value}
        </div>
        <div className="text-xs">
          {fact}
        </div>
      </div>
    )
  }

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
}

export const TimetableButton: React.FC<{
  title: string;
  subtitle: string;
  days: number;
  price: number;
}> = ({
  title, subtitle, days, price
}) => {
    const [isOpened, setIsOpened] = useState<boolean>(false);

    const daysLabel = getNoun(days, 'день', 'дня', 'дней')

    return (
      <div className={`m-4 my-2 relative bg-gray-100`}>
        <div className={`py-3 px-4 sticky top-[48px] bg-blue-500 hover:bg-blue-800 text-white`}>
          <div className='flex cursor-pointer justify-between' onClick={() => {
            setIsOpened(!isOpened)
          }}>
            <div className="flex items-center">
              <div className='mr-4 w-[11ch]'>
                <div className='font-semibold text-2xl leading-5'>{title}</div>
                <div className='text-yellow-500 text-xs'>{subtitle}</div>
              </div>
              <div className="flex space-x-4 text-white/80">
                <TimetableFactoid fact={daysLabel} value={String(days)} />
                <TimetableFactoid fact="цена, $" value={`${price}`} />
              </div>
            </div>

            <div className='p-4'>
              {isOpened ? (
                <IconArrowClose />
              ) : (
                <IconArrowDown />
              )}
            </div>
          </div>
        </div>
        {isOpened && <div className='px-4'>
          <TimetableList />
          <div className='py-4' />
          <ApplyForm />
        </div>}
      </div>
    )
  }


export const ButtonWithContent: React.FC<{
  title: string;
  subtitle: string;
  children: React.ReactNode
}> = ({
  title, subtitle, children
}) => {
    const [isOpened, setIsOpened] = useState<boolean>(false);

    return (
      <div className='border rounded p-4 m-4 my-2 hover:bg-gray-100'>
        <div className='flex cursor-pointer justify-between' onClick={() => {
          setIsOpened(!isOpened)
        }}>
          <div>
            <div className='font-semibold'>
              {title}
            </div>
            <div className='text-sm text-gray-500'>
              {subtitle}
            </div>
          </div>
          <div className='p-4'>
            {isOpened ? (
              <IconArrowClose />
            ) : (
              <IconArrowDown />
            )}
          </div>
        </div>
        {isOpened && <>{children}</>}
      </div>
    )
  }

export const ApplyForm: React.FC = () => {
  return (
    <div>
      <div className='flex items-center flex-wrap'>
        <div className='w-full md:max-w-[50%]'>
          <Header
            title='Заявка на участие'
            subtitle='заполните заявку и мы свяжемся с вами в ближайшее время'
          />
        </div>
        <div className='w-full md:max-w-[50%] p-4'>
          <form>
            <div className='py-2'>
              <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900">Имя  <span className='text-blue-700'>*</span></label>
              <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="" required />
            </div>
            <div className='py-2'>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Email <span className='text-blue-700'>*</span></label>
              <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="example@gmail.com" required />
            </div>
            <div className='py-2'>
              <label htmlFor="tel" className="block mb-2 text-sm font-medium text-gray-900">Телефон  <span className='text-blue-700'>*</span></label>
              <input type="tel" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="+7 (999) 123 45 67" required />
            </div>
            <div className='flex justify-end py-4'>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded flex items-center">
                Отправить
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export const Header: React.FC<{
  title: string;
  subtitle: string;
  id?: string;
}> = ({ title, subtitle, id = undefined }) => {
  return (
    <div className='px-4' id={id}>
      <div className='text-black-500 font-semibold text-3xl pt-2'>
        {title}
      </div>
      <div className="py-1 text-black-500 font-bold">{subtitle}</div>
    </div>
  )
}


export const TibetInfoCard: React.FC<{
  imageSrc: string
  children: React.ReactNode
  // defaultHeight?: number
}> = ({ children, imageSrc }) => {
  const defaultHeight = 100
  const [isExpanded, setIsExpanded] = useState(false)
  return (
    <div className='mb-4 relative bg-blue-500 text-white'>
      <img
        src={imageSrc}
        width={300}
        height={200}
        className='object-cover h-[190px]'
      />
      <div className='text-sm leading-6 hyphens-auto' style={isExpanded ? {
        height: 'auto'
      } :
        { height: `${defaultHeight}px`, overflow: 'hidden' }}>
        {children}
      </div>
      <div className='h-10' />
      <div className={`absolute w-full h-32 bottom-0 left-0 right-0 ${isExpanded ? '' : 'bg-gradient-to-b from-transparent to-blue-500'}`}
      // style={isExpanded ? {} : { backgroundImage: 'linear-gradient(to bottom, rgba(0,0,0,0), rgba(255,255,255,1))' }}
      >
        <div className='flex items-end h-full'>
          <div className='text-center text-white flex w-full justify-center items-center cursor-pointer bg-blue-800 hover:bg-blue-900 p-2' onClick={() => {
            setIsExpanded(!isExpanded)
          }}>
            <div className='p-1 font-bold text-sm'>
              {isExpanded ? 'свернуть' : 'развернуть'}
            </div>
            <div style={isExpanded ? {
              transform: 'rotate(180deg)'
            } : {}}>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const TibetInfoCardTitle: React.FC<{
  children: React.ReactNode
}> = ({ children }) => {
  return (
    <div className='text-white-500 font-semibold text-base ml-3 pt-3'>
      {children}
    </div>
  )
}

const TibetInfoCardContent: React.FC<{
  children: React.ReactNode
}> = ({ children }) => {
  return (
    <div className='px-3 py-2' style={{ zIndex: -1 }}>
      {children}
    </div>
  )
}

export const TibetInfo: React.FC<{

}> = ({ }) => {
  const contentLhasa = (
    <TibetInfoCard imageSrc="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/85/fa/a9/photo0jpg.jpg?w=2400&h=-1&s=1">
      <TibetInfoCardTitle>Лхаса</TibetInfoCardTitle>
      <TibetInfoCardContent>
        Лхаса — столица Тибета, автономного района Китая. Город расположен на высоте 3650 метров над уровнем моря и является важным центром тибетского буддизма.
        <br />
        <br />
        Лхаса — это духовный центр Тибета, и в нем находится множество важных религиозных сооружений, в том числе дворец Потала, резиденция Далай-ламы, и Джоканг, первый буддийский храм в Тибете. Город также известен своими традиционными тибетскими рынками, где можно купить все, от одежды и сувениров до продуктов питания и лекарств.
        <br />
        <br />
        Лхаса — это захватывающий город, который предлагает посетителям возможность познакомиться с богатой культурой и историей Тибета.
      </TibetInfoCardContent>
    </TibetInfoCard>
  )
  const contentPotala = (
    <TibetInfoCard imageSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Potala.jpg/548px-Potala.jpg">
      <TibetInfoCardTitle>Дворец Потала</TibetInfoCardTitle>
      <TibetInfoCardContent>
        Дворец Потала — это величественный буддийский храмовый комплекс, расположенный на вершине холма Марпори в Лхасе, Тибет. Он был построен в 7 веке и является резиденцией Далай-ламы, духовного лидера тибетского буддизма.
        <br />
        <br />
        Дворец Потала состоит из двух частей: Белого дворца и Красного дворца. Белый дворец был построен в 17 веке и использовался в качестве официальной резиденции Далай-ламы. Красный дворец был построен в 16 веке и содержит множество религиозных сооружений, в том числе храм Джоканг.
        <br />
        <br />
        Дворец Потала является объектом Всемирного наследия ЮНЕСКО и одним из самых популярных туристических направлений в Тибете. Он является символом тибетской культуры и религии и привлекает посетителей со всего мира.
      </TibetInfoCardContent>
    </TibetInfoCard>
  )
  const contentJokang = (
    <TibetInfoCard imageSrc="https://ic.pics.livejournal.com/vlade_mir/25001231/1603650/1603650_original.jpg">
      <TibetInfoCardTitle>Джоканг</TibetInfoCardTitle>
      <TibetInfoCardContent>
        Джоканг — это буддийский храм и монастырь, расположенный в центре Старого города Лхасы, Тибет. Он был построен в 7 веке и является одним из самых важных религиозных сооружений в Тибете.
        <br />
        <br />
        Джоканг является домом для статуи Будды Шакьямуни, привезенной в Тибет в 7 веке принцессой Вэньчэн, женой тибетского царя Сонгцен Гампо. Статуя является одной из самых почитаемых статуй Будды в мире и считается символом единства тибетского народа.
        <br />
        <br />
        Вот несколько дополнительных фактов о Джоканге:
        <ul>
          <li>
            Храм был построен в форме мандалы, символа буддийского космоса.
          </li>
          <li>
            В храме хранится множество других ценных реликвий, в том числе буддийские скульптуры, танка и рукописи.
          </li>
          <li>
            Храм был неоднократно разрушен и восстановлен на протяжении своей истории.
          </li>
        </ul>
        Джоканг является важным культурным и религиозным центром Тибета. Он является символом тибетской истории и культуры и привлекает посетителей со всего мира.
      </TibetInfoCardContent>
    </TibetInfoCard>
  )

  const contentGanden = (
    <TibetInfoCard imageSrc="https://snowliontours.ru/wp-content/uploads/2019/01/%D0%9C%D0%BE%D0%BD%D0%B0%D1%81%D1%82%D1%8B%D1%80%D1%8C-%D0%93%D0%B0%D0%BD%D0%B4%D0%B5%D0%BD-%D0%9B%D1%85%D0%B0%D1%81%D0%B0-%D1%82%D1%83%D1%80%D1%8B-%D0%B2-%D0%A2%D0%B8%D0%B1%D0%B5%D1%82-%D0%A6%D0%B5%D0%BD%D1%82%D1%80%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9-%D0%A2%D0%B8%D0%B1%D0%B5%D1%82.jpg">
      <TibetInfoCardTitle>Ганден</TibetInfoCardTitle>
      <TibetInfoCardContent>
        Ганден — это буддийский монастырь, расположенный в 47 км к востоку от Лхасы, Тибет. Он был основан в 14 веке Цонкапой, основателем школы гелуг тибетского буддизма.
        <br />
        <br />
        Монастырь является одним из шести главных монастырей школы гелуг и является важным местом паломничества для буддистов со всего мира. В монастыре хранятся множество ценных реликвий, в том числе статуя Будды Майтреи, будущего Будды.
        <br />
        <br />
        Ганден был разрушен во время Культурной революции, но впоследствии был восстановлен. Сегодня монастырь является важным культурным и религиозным центром Тибета.
        <ul>
          <li>
            Монастырь расположен на горе Вангбур, на высоте 4500 метров над уровнем моря.
          </li>
          <li>
            В монастыре обучается около 200 монахов.
          </li>
          <li>
            Ганден является местом проведения ежегодного Ганденского праздника, одного из крупнейших буддийских праздников в Тибете.
          </li>
        </ul>
      </TibetInfoCardContent>
    </TibetInfoCard>
  )

  const contentDrakYerpa = (
    <TibetInfoCard imageSrc="https://snowliontours.ru/wp-content/uploads/2018/10/%D0%BC%D0%B5%D0%B4%D0%B8%D1%82%D0%B0%D1%86%D0%B8%D0%BE%D0%BD%D0%BD%D1%8B%D0%B5-%D0%BF%D0%B5%D1%89%D0%B5%D1%80%D1%8B-%D0%94%D1%80%D0%B0%D0%B9-%D0%99%D0%B5%D1%80%D0%BF%D0%B0-%D0%99%D0%B5%D1%80%D0%BF%D0%B0-%D0%A6%D0%B5%D1%87%D1%83-%D0%BF%D0%B5%D1%80%D0%BC%D0%B8%D1%82%D1%8B-%D0%B2-%D0%9B%D1%85%D0%B0%D1%81%D1%83-%D0%A2%D0%B8%D0%B1%D0%B5%D1%82.jpg">
      <TibetInfoCardTitle>Драк Йерпа</TibetInfoCardTitle>
      <TibetInfoCardContent>
        Драк Йерпа — это буддийский монастырский комплекс, расположенный в 30 км к северо-востоку от Лхасы, Тибет. Он был основан в 8 веке и является одним из самых важных религиозных сооружений в Тибете.
        <br />
        <br />
        Монастырь включает в себя множество пещер для медитации, в которых в свое время медитировали многие известные буддийские учителя, в том числе Гуру Ринпоче и Атиша. Драк Йерпа также является домом для статуи Будды Майтреи, будущего Будды.
        <br />
        <br />
        Монастырь был разрушен во время Культурной революции, но впоследствии был восстановлен. Сегодня Драк Йерпа является важным местом паломничества для буддистов со всего мира.
        <br />
        <br />
        Вот несколько дополнительных фактов о Драк Йерпа:
        <ul>
          <li>
            Монастырь расположен на высоте 3800 метров над уровнем моря.
          </li>
          <li>
            В монастыре проживает около 15 монахов.
          </li>
          <li>
            Драк Йерпа является местом проведения ежегодного праздника Йерпа Цечу, одного из крупнейших буддийских праздников в Тибете.
          </li>
        </ul>
        Драк Йерпа является важным символом тибетского буддизма и привлекает посетителей со всего мира.
      </TibetInfoCardContent>
    </TibetInfoCard>
  )

  const contentTsurphu = (
    <TibetInfoCard imageSrc="https://wondersoftibet.com/wp-content/uploads/2018/09/Tsurpu-Monastery-complex-in-Tibet-1024x768.jpg">
      <TibetInfoCardTitle>Цурпу</TibetInfoCardTitle>
      <TibetInfoCardContent>
        Цурпу — это буддийский монастырь, расположенный в 70 км к западу от Лхасы, Тибет. Он был основан в 12 веке и является родиной школы карма кагью тибетского буддизма.
        <br />
        <br
        />
        Монастырь включает в себя множество религиозных сооружений, в том числе храмы, ступы и монастырские колокольни. Он также является домом для множества ценных реликвий, в том числе статуи Будды Шакьямуни.
        <br />
        <br />
        Цурпу был разрушен во время Культурной революции, но впоследствии был восстановлен. Сегодня монастырь является важным культурным и религиозным центром Тибета.
        <br />
        <br />
        Вот несколько дополнительных фактов о Цурпу:
        <ul>
          <li>
            Монастырь расположен на высоте 4300 метров над уровнем моря.
          </li>
          <li>
            В монастыре проживает около 300 монахов.
          </li>
          <li>
            Цурпу является местом проведения ежегодного праздника Цурпу Чембо, одного из крупнейших буддийских праздников в Тибете.
          </li>
        </ul>
        Цурпу является важным символом тибетского буддизма и привлекает посетителей со всего мира.
      </TibetInfoCardContent>
    </TibetInfoCard>
  )

  const contentNamTso = (
    <TibetInfoCard imageSrc="https://storage.googleapis.com/opentibet/namtso.jpg">
      <TibetInfoCardTitle>Озеро Намцо</TibetInfoCardTitle>
      <TibetInfoCardContent>
        Озеро Намцо — это большое солёное озеро, расположенное на Тибетском нагорье, на высоте 4718 метров над уровнем моря. Оно является одним из самых высоких озёр в мире и вторым по величине озёром в Тибете.
        <br />
        <br />
        Озеро Намцо является важным религиозным центром для тибетцев. Оно считается священным и является местом паломничества для многих буддистов. Озеро также является популярным туристическим направлением.
        <br />
        <br />
        Озеро Намцо окружено живописными горами, которые создают впечатляющий пейзаж. Озеро также богато дикой природой, в том числе птичьими колониями и стадами диких яков.
        <br />
        <br />
        Вот несколько дополнительных фактов об озере Намцо:
        <ul>
          <li>
            Озеро Намцо является вторым по величине озером в Тибете.
          </li>
          <li>
            Озеро Намцо является вторым по величине озером в Тибете.
          </li>
          <li>
            Озеро Намцо является вторым по величине озером в Тибете.
          </li>
        </ul>
      </TibetInfoCardContent>
    </TibetInfoCard>
  )

  const contentTashilhunpo = (
    <TibetInfoCard imageSrc="https://snowliontours.ru/wp-content/uploads/2018/10/%D0%A2%D0%B0%D1%88%D0%B8%D0%BB%D1%83%D0%BD%D0%BF%D0%BE-%D0%BC%D0%BE%D0%BD%D0%B0%D1%81%D1%82%D1%8B%D1%80%D1%8C-%D0%A2%D0%B0%D1%88%D0%B8-%D0%9B%D1%83%D0%BD%D0%BF%D0%BE-%D0%BF%D0%B5%D1%80%D0%BC%D0%B8%D1%82%D1%8B-%D0%B2-%D0%9B%D1%85%D0%B0%D1%81%D1%83-%D1%82%D1%83%D1%80-%D0%B2-%D0%A2%D0%B8%D0%B1%D0%B5%D1%82.jpg">
      <TibetInfoCardTitle>Ташилунпо</TibetInfoCardTitle>
      <TibetInfoCardContent>
        Ташилунпо — это буддийский монастырь, расположенный в городе Шигадзе, Тибет. Он был основан в 1447 году Гендун Друпом, первым Далай-ламой. Монастырь является резиденцией Панчен-ламы, второго по значимости ламы в тибетском буддизме.
        <br />
        <br />
        Монастырь Ташилунпо является одним из крупнейших и наиболее важных буддийских монастырей в мире. Он известен своей богатой историей, архитектурой и культурой. Монастырь состоит из множества храмов, пагод, монастырей и других религиозных сооружений. В нем также находится множество произведений искусства, включая статуи Будды, танка и рукописи.
        <br />
        <br />
        Ташилунпо был разрушен во время Культурной революции, но впоследствии был восстановлен. Сегодня монастырь является важным культурным и религиозным центром Тибета.
        <br />
        <br />
        Вот несколько дополнительных фактов о Ташилунпо:
        <ul>
          <li>
            Монастырь расположен на высоте 3800 метров над уровнем моря.
          </li>
          <li>
            В монастыре проживает около 3000 монахов.
          </li>
          <li>
            Монастырь является местом проведения ежегодного праздника Ташилунпо Цечу, одного из крупнейших буддийских праздников в Тибете.
          </li>
        </ul>
        Монастырь Ташилунпо является важным символом тибетского буддизма и привлекает посетителей со всего мира.
      </TibetInfoCardContent>
    </TibetInfoCard>
  )

  const contentGyandze = (
    <TibetInfoCard imageSrc="https://i.pinimg.com/236x/37/7f/03/377f03fa96d409f27c15ab919d69315e.jpg">
      <TibetInfoCardTitle>Гяндзе</TibetInfoCardTitle>
      <TibetInfoCardContent>
        Гьяндзе — это город в Тибетском автономном районе Китая. Он расположен на Тибетском нагорье, на высоте 3900 метров над уровнем моря. Гьяндзе является одним из старейших городов Тибета и является важным религиозным и культурным центром.
        <br />
        <br
        />
        Город был основан в 7 веке и был столицей Тибетского царства в течение нескольких столетий. Гьяндзе является домом для множества буддийских монастырей, включая Цурпу, Бери и Ташилунпо. Монастыри Гьяндзе являются важными центрами тибетского буддизма и привлекают паломников со всего мира.
        <br />
        <br />
        Город также известен своей традиционной тибетской архитектурой. Гьяндзе известен своими красочными стенами, украшенными фресками и скульптурами.
        <br />
        <br />
        Вот несколько дополнительных фактов о Гяндзе:
        <ul>
          <li>
            Город является домом для более чем 100 000 человек.
          </li>
          <li>
            Гьяндзе является важным центром торговли и коммерции.
          </li>
          <li>
            Город является популярным туристическим направлением.
          </li>
        </ul>
        Гьяндзе — это прекрасное место для посещения, если вы хотите познакомиться с Тибетом и его культурой.
      </TibetInfoCardContent>
    </TibetInfoCard>
  )

  const contentShalu = (
    <TibetInfoCard imageSrc="https://storage.googleapis.com/opentibet/shalu.jpg">
      <TibetInfoCardTitle>Монастырь Шалу</TibetInfoCardTitle>
      <TibetInfoCardContent>
        Шалу — это буддийский монастырь, расположенный в 22 км к югу от Шигадзе в Тибете. Он был основан в 1040 году Четсуном Шерабом Джунгнаем, и на протяжении веков был известен как центр научных исследований и экстрасенсорного обучения. Его настенные росписи считаются одними из самых древних и красивых в Тибете.
        <br />
        <br
        />
        Монастырь Шалу является одним из старейших и наиболее важных монастырей в Тибете. Он является важным центром обучения буддизму и является домом для многих ценных реликвий, в том числе статуй Будды, танка и рукописей.
        <br />
        <br />
        Монастырь был разрушен во время Культурной революции, но впоследствии был восстановлен. Сегодня монастырь является важным культурным и религиозным центром Тибета.
        <br />
        <br />
        Вот несколько интересных фактов о монастыре Шалу:
        <ul>
          <li>
            Монастырь расположен на высоте 3800 метров над уровнем моря.
          </li>
          <li>
            В монастыре проживает около 200 монахов.
          </li>
          <li>
            Монастырь является местом проведения ежегодного праздника Шалу Цечу, одного из крупнейших буддийских праздников в Тибете.
          </li>
        </ul>
        Монастырь Шалу является важным символом тибетского буддизма и привлекает посетителей со всего мира.
      </TibetInfoCardContent>
    </TibetInfoCard>
  )

  const contentNgor = (
    <TibetInfoCard imageSrc="https://storage.googleapis.com/opentibet/ngor.jpg">
      <TibetInfoCardTitle>Деревня Нгор</TibetInfoCardTitle>
      <TibetInfoCardContent>
        Нгор — это деревня в Тибетском автономном районе Китая, расположенная на высоте 4410 метров над уровнем моря. Она находится в долине реки Янгце, в 100 км к югу от города Шигадзе.
        <br />
        <br
        />
        Деревня Нгор известна своими буддийскими монастырями, которые являются одними из самых важных в Тибете. Среди них — монастырь Нгор Кадам, основанный в 11 веке, и монастырь Нгор Сачен, основанный в 12 веке.
        <br />
        <br />
        Монастырь Нгор Кадам является одним из крупнейших монастырей школы кадам тибетского буддизма. Он является домом для многих ценных реликвий, в том числе статуй Будды, танка и рукописей. Монастырь Нгор Кадам является важным центром обучения буддизму и привлекает паломников со всего мира.
        <br />
        <br />
        Вот несколько интересных фактов о деревне Нгор:
        <ul>
          <li>
            Деревня является домом для более чем 10 000 человек.
          </li>
          <li>
            Деревня является важным центром торговли и коммерции.
          </li>
          <li>
            Деревня является популярным туристическим направлением.
          </li>
        </ul>
        Деревня Нгор — это прекрасное место для посещения, если вы хотите познакомиться с Тибетом и его культурой.
      </TibetInfoCardContent>
    </TibetInfoCard>
  )

  const contentYamdrok = (
    <TibetInfoCard imageSrc="https://www.wondersoftibet.com/wp-content/uploads/2018/03/Yamdrok-Lake.jpg">
      <TibetInfoCardTitle>Озеро Ямдрок Юмцо</TibetInfoCardTitle>
      <TibetInfoCardContent>
        Ямдрок-Цо, или Ямдрок Юмцо, — это высокогорное озеро в Тибете, расположенное на высоте 4488 метров над уровнем моря. Оно является одним из четырех священных озер в Тибете, наряду с озерами Лхамо Лацо, Намцо и Мансаровар.
        <br />
        <br
        />
        Озеро Ямдрок имеет площадь 621 квадратный километр и протяженность более 73 километров. Оно окружено живописными горами, которые создают впечатляющий пейзаж. Озеро также богато дикой природой, в том числе птичьими колониями и стадами диких яков.
        <br />
        <br />
        Для тибетцев озеро Ямдрок является священным местом. Оно считается воплощением богини милосердия Авалокитешвары. Озеро является важным местом паломничества для буддистов со всего мира.
        <br />
        <br />
        Вот несколько интересных фактов об озере Ямдрок:
        <ul>
          <li>
            Озеро Ямдрок является домом для множества видов рыб, включая карпа, форель и щуку.
          </li>
          <li>
            Озеро Ямдрок является популярным местом для занятий водными видами спорта, такими как рыбалка, плавание и катание на лодках.
          </li>
          <li>
            Озеро Ямдрок является важным источником воды для сельского хозяйства и промышленности в регионе.
          </li>
        </ul>
        Озеро Ямдрок — это прекрасное место для посещения, если вы хотите познакомиться с Тибетом и его культурой.
      </TibetInfoCardContent>
    </TibetInfoCard>
  )

  const contentEverestBasecamp = (
    <TibetInfoCard imageSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Everest_Base_Camp_on_a_Stormy_Day.jpg/600px-Everest_Base_Camp_on_a_Stormy_Day.jpg">
      <TibetInfoCardTitle>Базовый лагерь Эвереста</TibetInfoCardTitle>
      <TibetInfoCardContent>
        Базовый лагерь Эвереста в Тибете, также известный как Базовый лагерь Эвереста на Северном склоне, расположен на высоте 5150 метров над уровнем моря. Он находится в долине реки Нгарцо, примерно в 60 км к северо-востоку от города Шигадзе.
        <br />
        <br />
        Базовый лагерь Эвереста в Тибете является отправной точкой для альпинистов, которые планируют восхождение на Эверест с северного склона. Он также является популярным туристическим направлением.
        <br />
        <br />
        В базовом лагере Эвереста в Тибете есть множество палаток, кафе, магазинов и других объектов инфраструктуры, необходимых альпинистам и туристам. Здесь также есть небольшой буддийский храм, посвященный богине Авалокитешваре.
        <br />
        <br />
        Добраться до базового лагеря Эвереста в Тибете можно на автомобиле или автобусе из города Шигадзе. Путешествие занимает около 6-8 часов.
        <br />
        <br />
        Вот несколько интересных фактов о базовом лагере Эвереста в Тибете:
        <ul>
          <li>
            Базовый лагерь был построен в 1956 году китайскими альпинистами.
          </li>
          <li>
            Базовый лагерь является одним из самых высокогорных базовых лагерей в мире.
          </li>
          <li>
            В базовом лагере Эвереста в Тибете ежегодно бывает около 10 000 альпинистов и туристов.
          </li>
        </ul>
        Базовый лагерь Эвереста в Тибете — это впечатляющее место, которое предлагает посетителям возможность познакомиться с одной из самых высоких и сложных гор в мире.
      </TibetInfoCardContent>
    </TibetInfoCard>
  )

  const contentSakya = (
    <TibetInfoCard imageSrc="https://storage.googleapis.com/opentibet/sakya.jpg">
      <TibetInfoCardTitle>Сакья</TibetInfoCardTitle>
      <TibetInfoCardContent>
        Базовый лагерь Эвереста в Тибете, также известный как Базовый лагерь Эвереста на Северном склоне, расположен на высоте 5150 метров над уровнем моря. Он находится в долине реки Нгарцо, примерно в 60 км к северо-востоку от города Шигадзе.
        <br />
        <br />
        Базовый лагерь Эвереста в Тибете является отправной точкой для альпинистов, которые планируют восхождение на Эверест с северного склона. Он также является популярным туристическим направлением.
        <br />
        <br />
        В базовом лагере Эвереста в Тибете есть множество палаток, кафе, магазинов и других объектов инфраструктуры, необходимых альпинистам и туристам. Здесь также есть небольшой буддийский храм, посвященный богине Авалокитешваре.
        <br />
        <br />
        Добраться до базового лагеря Эвереста в Тибете можно на автомобиле или автобусе из города Шигадзе. Путешествие занимает около 6-8 часов.
        <br />
        <br />
        Вот несколько интересных фактов о базовом лагере Эвереста в Тибете:
        <ul>
          <li>
            Базовый лагерь был построен в 1956 году китайскими альпинистами.
          </li>
          <li>
            Базовый лагерь является одним из самых высокогорных базовых лагерей в мире.
          </li>
          <li>
            В базовом лагере Эвереста в Тибете ежегодно бывает около 10 000 альпинистов и туристов.
          </li>
        </ul>
        Базовый лагерь Эвереста в Тибете — это впечатляющее место, которое предлагает посетителям возможность познакомиться с одной из самых высоких и сложных гор в мире.
      </TibetInfoCardContent>
    </TibetInfoCard>
  )

  const contentShashibangma = (
    <TibetInfoCard imageSrc="https://upload.wikimedia.org/wikipedia/commons/3/3f/Shishapangma3.jpg">
      <TibetInfoCardTitle>Шишабангма</TibetInfoCardTitle>
      <TibetInfoCardContent>
        Шишабангма — это гора, расположенная в Тибете. Это самая высокая гора в мире, расположенная полностью в пределах одной страны. Высота горы составляет 8048 метров над уровнем моря.
        <br />
        <br />
        Шишабангма считается священной горой в тибетском буддизме. Считается, что гора является домом для богини Мать Шиша. Паломники совершают паломничество к горе, чтобы получить духовное очищение и просветление.
        <br />
        <br />
        Паломничество к Шишабангма может быть опасным и сложным. Гора расположена на высоте более 8000 метров, и погода может быть очень суровой. Паломникам необходимо быть хорошо подготовленными к условиям высокогорья.
        <br />
        <br />
        Паломничество к Шишабангма обычно начинается в деревне Тагланг, расположенной у подножия горы. Паломники совершают восхождение на гору, останавливаясь на пути в небольших монастырях и лачугах.
        <br />
        <br />
        Восхождение на Шишабангма занимает несколько дней, и паломники должны быть готовы к трудностям. Они должны быть готовы к высоте, холоду, ветру и другим опасностям.
      </TibetInfoCardContent>
    </TibetInfoCard>
  )

  const contentPelkuTso = (
    <TibetInfoCard imageSrc="https://www.wondersoftibet.com/wp-content/uploads/2018/10/Peiku-Tso-Lake-in-Tibet-1024x462.jpg">
      <TibetInfoCardTitle>Озеро Пелку Цо</TibetInfoCardTitle>
      <TibetInfoCardContent>
        Пелку Цо — это большое озеро в Тибете, расположенное на высоте 5200 метров над уровнем моря. Оно является популярным туристическим направлением и прекрасным местом для пеших прогулок, рыбалки и других видов активного отдыха.
      </TibetInfoCardContent>
    </TibetInfoCard>
  )

  const contentMilarepaBirthplace = (
    <TibetInfoCard imageSrc="https://storage.googleapis.com/opentibet/milarepa-birthplace.jpg">
      <TibetInfoCardTitle>Место рождения Миларепы</TibetInfoCardTitle>
      <TibetInfoCardContent>
        Место рождения Миларепы — это деревня Га в Тибете, где он родился в 1052 году. Деревня является важным местом паломничества для буддистов со всего мира.
      </TibetInfoCardContent>
    </TibetInfoCard>
  )

  // const contentChakraDamtso = (
  //   <TibetInfoCard imageSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Everest_Base_Camp_on_a_Stormy_Day.jpg/600px-Everest_Base_Camp_on_a_Stormy_Day.jpg">
  //     <TibetInfoCardTitle>Пещера Чакра Дамцо</TibetInfoCardTitle>
  //     <TibetInfoCardContent>
  //       Пещера Чакра Дамцо — это пещера в Тибете, где, согласно легенде, медитировала богиня Чакра Дамцо. Пещера является важным местом паломничества для буддистов со всего мира.
  //     </TibetInfoCardContent>
  //   </TibetInfoCard>
  // )

  const contentLangatsoLake = (
    <TibetInfoCard imageSrc="https://storage.googleapis.com/opentibet/langtso.jpg">
      <TibetInfoCardTitle>Озеро Ланга Цо</TibetInfoCardTitle>
      <TibetInfoCardContent>
        Озеро Ланга Цо — это большое озеро в Тибете, расположенное на высоте 4400 метров над уровнем моря. Оно является популярным туристическим направлением и прекрасным местом для пеших прогулок, рыбалки и других видов активного отдыха.
      </TibetInfoCardContent>
    </TibetInfoCard>
  )

  const contentTsaparang = (
    <TibetInfoCard imageSrc="https://storage.googleapis.com/opentibet/tsaparang.jpg">
      <TibetInfoCardTitle>Цапаранг</TibetInfoCardTitle>
      <TibetInfoCardContent>
        Цапаранг — это разрушенная столица древнего царства Гуге, расположенная в долине реки Нгарцо, в провинции Нгари Западного Тибета. Город был основан в 14 веке и был важным торговым центром на Великом шёлковом пути. В 16 веке Цапаранг был разрушен в результате нападения войск Ладакха. С тех пор город лежит в руинах. Сегодня Цапаранг является популярным туристическим направлением. Город является напоминанием о богатой истории и культуре Тибета.
      </TibetInfoCardContent>
    </TibetInfoCard>
  )

  const contentDungar = (
    <TibetInfoCard imageSrc="https://storage.googleapis.com/opentibet/dungar.jpg">
      <TibetInfoCardTitle>Дунгар</TibetInfoCardTitle>
      <TibetInfoCardContent>
        Дунгар — это город в Тибете, основанный в 17 веке. Город является важным центром дунганской культуры и известен своими мечетями.
      </TibetInfoCardContent>
    </TibetInfoCard>
  )

  const contentPiyang = (
    <TibetInfoCard imageSrc="https://storage.googleapis.com/opentibet/piyang.jpg">
      <TibetInfoCardTitle>Пиянг</TibetInfoCardTitle>
      <TibetInfoCardContent>
        Пиянг — это деревня в Тибете, известная своими пещерными храмами, построенными в 10-11 веках. Фрески в пещерах изображают сцены из буддийской мифологии.
      </TibetInfoCardContent>
    </TibetInfoCard>
  )

  const contentPurang = (
    <TibetInfoCard imageSrc="https://www.ncpedia.org/sites/default/files//styles/anchor_images/public/nepal_190.jpg?itok=wZhNt3BT">
      <TibetInfoCardTitle>Пуранг</TibetInfoCardTitle>
      <TibetInfoCardContent>
        Пуранг — это город в Тибете, основанный в 15 веке. Город был важным торговым центром на Великом шёлковом пути, но в 16 веке был разрушен войсками Ладакха. Сегодня Пуранг является популярным туристическим направлением, где можно познакомиться с историей и культурой Тибета.
      </TibetInfoCardContent>
    </TibetInfoCard>
  )

  const contentKorchag = (
    <TibetInfoCard imageSrc="https://forum.awd.ru/gallery/images/upload/eee/17b/eee17beee4096c4f05c2e59bda24580f.jpg">
      <TibetInfoCardTitle>Корчаг</TibetInfoCardTitle>
      <TibetInfoCardContent>
        Корчаг — это деревня в Тибете, основанная в 16 веке. Деревня является важным центром тибетского буддизма и является домом для множества храмов и монастырей. Сегодня Корчаг является популярным туристическим направлением, где можно познакомиться с историей и культурой Тибета.
      </TibetInfoCardContent>
    </TibetInfoCard>
  )

  const contentManosarovarKora = (
    <TibetInfoCard imageSrc="https://storage.googleapis.com/opentibet/manosarovar.jpg">
      <TibetInfoCardTitle>Маносаровар Кора</TibetInfoCardTitle>
      <TibetInfoCardContent>
        Манасаровар кора — это паломнический маршрут вокруг священного озера Манасаровар в Тибете. Маршрут имеет длину около 50 километров и занимает около 2-3 дней.
        <br />
        <br />
        Манасаровар считается священным озером в индуизме и буддизме. Паломничество вокруг Манасаровара является одним из самых важных религиозных ритуалов для индуистов и буддистов. Маршрут проходит по пересеченной местности, включая горы, долины и леса.
        <br />
        <br />
        Манасаровар кора — это сложный и физический, но и духовно обогащающий опыт. Паломничество вокруг этого священного озера — это возможность познакомиться с историей и культурой Тибета.
        <br />
        <br />
        Вот некоторые интересные факты о Манасаровар коре:
        <br />
        <br />
        Озеро является одним из самых высокогорных пресноводных озер в мире.
        Озеро окружено горами высотой более 6000 метров.
      </TibetInfoCardContent>
    </TibetInfoCard>
  )

  const contentKailasKora = (
    <TibetInfoCard imageSrc="https://snowliontours.ru/wp-content/uploads/2020/02/%D0%A2%D0%B8%D0%B1%D0%B5%D1%82%D1%81%D0%BA%D0%B8%D0%B5-%D0%BF%D0%B0%D0%BB%D0%BE%D0%BC%D0%BD%D0%B8%D0%BA%D0%B8-%D1%83-%D0%9A%D0%B0%D0%B9%D0%BB%D0%B0%D1%81%D0%B0-%D0%BD%D0%B0-%D1%82%D1%80%D0%BE%D0%BF%D0%B5-%D0%BA%D0%BE%D1%80%D1%8B-%D0%B2%D0%BE%D0%BA%D1%80%D1%83%D0%B3-%D0%9A%D0%B0%D0%B9%D0%BB%D0%B0%D1%81%D0%B0-%D0%9A%D0%B0%D0%B9%D0%BB%D0%B0%D1%88-%D0%BA%D0%BE%D1%80%D0%B0-%D0%A2%D0%B8%D0%B1%D0%B5%D1%82-%D0%BF%D0%BE%D0%B5%D0%B7%D0%B4%D0%BA%D0%B0-%D0%BD%D0%B0-%D0%A2%D0%B8%D0%B1%D0%B5%D1%82-%D0%BF%D0%B0%D0%BB%D0%BE%D0%BC%D0%BD%D0%B8%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%BE-%D0%BA-%D0%9A%D0%B0%D0%B9%D0%BB%D0%B0%D1%81%D1%83.jpg">
      <TibetInfoCardTitle>Внешняя Кора</TibetInfoCardTitle>
      <TibetInfoCardContent>
        Внешняя кора мандалы Кайлас — это паломнический маршрут вокруг горы Кайлас, расположенной в Тибете. Маршрут имеет длину около 53 километров и занимает около 3-4 дней.
        <br />
        <br />
        Гора Кайлас считается священной в индуизме, буддизме и джайнизме. Считается, что гора является центром Вселенной и местом обитания богов.
        <br />
        <br />
        Паломничество вокруг Кайлас является одним из самых важных религиозных ритуалов для индуистов, буддистов и джайнистов. Паломники считают, что прохождение коры приносит им духовное очищение и просветление.
        <br />
        <br />
        Маршрут коры начинается и заканчивается в деревне Дарчен, расположенной у подножия горы Кайлас. Маршрут проходит по пересеченной местности, включая горы, долины и леса.
        <br />
        <br />
        Паломники, совершающие кору, обычно носят традиционные тибетские одежды и носят рюкзаки с необходимыми вещами. Они также часто носят молитвенные флаги, которые развешивают вдоль маршрута коры.
        <br />
        <br />
        Внешняя кора мандалы Кайлас — это сложный и физический, но и духовно обогащающий опыт. Паломничество вокруг этой священной горы — это возможность познакомиться с историей и культурой Тибета, а также получить духовное очищение.
      </TibetInfoCardContent>
    </TibetInfoCard>
  )

  const contentKailasInnerKora = (
    <TibetInfoCard imageSrc="https://farm8.staticflickr.com/7459/11837763826_5f13758997_o.jpg">
      <TibetInfoCardTitle>Внутренняя кора</TibetInfoCardTitle>
      <TibetInfoCardContent>
        Внутренняя кора мандалы Кайлас — это паломнический маршрут вокруг горы Кайлас в Тибете. Маршрут имеет длину около 14 километров и занимает около 1-2 дней. Паломники совершают внутреннюю кору, чтобы получить духовное очищение.
      </TibetInfoCardContent>
    </TibetInfoCard>
  )

  const contentNandiKora = (
    <TibetInfoCard imageSrc="https://snowliontours.ru/wp-content/uploads/2015/11/45.-%D0%AE%D0%B6%D0%BD%D1%8B%D0%B9-%D1%81%D0%BA%D0%BB%D0%BE%D0%BD-%D0%9A%D0%B0%D0%B9%D0%BB%D0%B0%D1%81%D0%B0-%D0%B8-%D0%9D%D0%B0%D0%BD%D0%B4%D0%B8.jpg">
      <TibetInfoCardTitle>Нанди кора</TibetInfoCardTitle>
      <TibetInfoCardContent>
        Нанди кора — это паломнический маршрут вокруг горы Нанди в Тибете. Маршрут имеет длину около 14 километров и занимает около 1-2 дней. Паломники совершают Нанди кору, чтобы получить духовное очищение и просветление.
      </TibetInfoCardContent>
    </TibetInfoCard>
  )

  const contentBuddhaThrone = (
    <TibetInfoCard imageSrc="https://www.mt-kailash.ru/wp-content/gallery/kaylas-2010-voshozhdenie-na-g-tron-buddyi/budha_thron_01.jpg">
      <TibetInfoCardTitle>Трон Будды</TibetInfoCardTitle>
      <TibetInfoCardContent>
        Трон Будды кора — это паломнический маршрут вокруг горы Трон Будды в Тибете. Маршрут имеет длину около 10 километров и занимает около 1 дня.
        <br />
        <br />
        Гора Трон Будды считается священной в индуизме и буддизме. В индуизме гора считается местом обитания бога Шивы. В буддизме гора считается местом обитания Будды Шакьямуни.
        <br />
        <br />
        Паломники совершают Трон Будды кору, чтобы получить духовное очищение и просветление. Они считают, что прохождение коры приносит им гармонию и умиротворение.
        <br />
        <br />
        Маршрут коры проходит по живописной местности, включая горы, долины и леса. Паломники, совершающие кору, обычно носят традиционные тибетские одежды и носят рюкзаки с необходимыми вещами. Они также часто носят молитвенные флаги, которые развешивают вдоль маршрута коры.
      </TibetInfoCardContent>
    </TibetInfoCard>
  )

  const contentTsedang = (
    <TibetInfoCard imageSrc="https://storage.googleapis.com/opentibet/tsedang.jpg">
      <TibetInfoCardTitle>Цеданг</TibetInfoCardTitle>
      <TibetInfoCardContent>
        Цеданг (Tsedang) находится примерно в 45 км от Миндроллинга по дороге S349 в Ярлунгской долине (Yarlung valley). До него можно доехать по старой дороге S349 или, если вернуться немного назад, переехать мост через Брахмапутру по скоростной автомагистрли G4219.  На въезде в Цеданг стоит КПП (проверка паспортов и пермитов). От него до центра – около 20 мин. В Цеданге надо обязательно зарегистрировать пермит (Public Security Bureau; Gaisang Lu; 9.00–12.30, 15.00–18.00). Процедура обычно занимает от 30 мин до часу.
        Цеданг, некогда маленький городок, сегодня является одним из центров Китая в Тибете. Здесь проживают около 300 тыс. человек. Большинство населения – китайцы, тибетцы живут в сравнительно неболшом квартале, где сохранились три небольших монастыря.
        Город расположен между двумя горами: Гонпо Ри (4130 м) и Ярлунг Чедар (4250 м).
      </TibetInfoCardContent>
    </TibetInfoCard>
  )

  const contentLamaling = (
    <TibetInfoCard imageSrc="https://storage.googleapis.com/opentibet/lamaling.jpg">
      <TibetInfoCardTitle>Ламалинг</TibetInfoCardTitle>
      <TibetInfoCardContent>
        Верстовой столб 1065км дороги S349 – поворот на дорогу (8.5 км) к монастырю Миндроллинг (Mindrolling) – самому большому в центральном Тибете, относящемуся к школе Ньингма, важному образовательному центру. Это один из 6 основных монастырей школы Ньингма. Комплекс окружен четырьмя горами. Входной билет стоит 35 юаней.
        Монастырь расположен в 8 км восточнее города Дрананг (Dranang), в 147 км от Лхасы. На этом месте еще с X в. существовал небольшой монастырь. В 1670-х гг. выдающийся ученый лама Тертон Тердак Лингпа (1646–1714) возвел огромный монастырский комплекс. Он же стал первым Минлинг Триченом (держателем трона Минлинг) – титул, который передавался по наследству от отца к сыну. Ученики Тердак Лингпы считали его пятым Далай-ламой. Комплекс серьеёзно пострадал в XVIII в. из-за нашествия монголов-джунгар и в годы Культурной революции. Сейчас активно ведутся восстановительные и реставрационные работы.
        Во внутренний двор можно пройти через ворота с северо- и юго-восточной сторон. Здесь привлекает внимание главный храм (Цуклакханг) с фасадом из коричневого камня. На трех его этажах находятся несколько часовен с многочисленными реликвиями (ковчеги с мощами, частицы мощей, старинные священные книги, мандалы, статуи и т.д.) и усыпальницами. Архитектурное убранство, стенные росписи, статуи, тексты, ступы сохранились в целости. В часовнях третьего этажа можно увидеть портрет основателя комплекса с позолоченными отпечатками его ладоней и стоп, а также старинные фрески с изображением всех традиций школы Ньингма.
        Главные статуи храма — это изображение Будды Шакьямуни высотой 4 метра, его учеников и 8 бодхисатв. В соседнеим храме установлена статуя Гуру Ринпоче.
        В храме Сангок Подранг (Sangok Podrang) в северной части внутреннего двора сохранилась знаменитая «говорящая» фреска. Согласно легенде, изображенный на ней основатель школы Ньингма Юнгдрунг Тонгдрол – Падмасамбхава – обратился к Тердаку Лингпе с просьбой оставаться в мире для помощи живым существам. В этом же храме хранится старинная большая тханка, которую открывают для поклонения раз в году.
        В 2000 г. на средства тайваньских буддистов была воздвигнута тринадцатиэтажная белоснежная ступа (чортен). Внутри находится 10-метровый Будда Маятрия.
        При монастыре действуют известный во всем мире «Колледж Пяти тибетских трактатов», а также фабрика по производству благовоний, рецептуры многих из которых разработал сам Тертон Тердак Лингпа.
      </TibetInfoCardContent>
    </TibetInfoCard>
  )

  const contentBuchu = (
    <TibetInfoCard imageSrc="https://storage.googleapis.com/opentibet/buchu.jpg">
      <TibetInfoCardTitle>Бучу</TibetInfoCardTitle>
      <TibetInfoCardContent>
        Расположен в 27 км от города Ньингчи (Баи). Храм был основан в VII веке по приказу Сангцэна Гампо и является одним из 12, фиксирующих демоницу Тибета, точнее ее левый локоть.
        Монастырь принадлежит школе Ньингма, недавно его отрестоврировали. В Главном зале по центру установлена статуя Падмасабхавы. Слева – Будда Будущего, справа – Падмасабхава в полный рост. За основным залом расположен храм Черези. Здесь по центру можно увидеть статую одиннадцатиглавого Авалокитешвары, Сонгцэна Гампо, Трисонга Децена и 8 бодхисаттв.
        На втором этаже храма находится мандала Авалокитешвары и изображения 21 формы Тары.
        В храме хранится собрание очень много буддистких книг. Основные реликвии монастыря: каменная масляная лампа, принадлежащая Сонгцэну Гампо, и камень с отпечатком ноги Гуру Ринпоче.
        Входной билет стоит 20 юаней.
      </TibetInfoCardContent>
    </TibetInfoCard>
  )

  const contentBatsumTso = (
    <TibetInfoCard imageSrc="https://storage.googleapis.com/opentibet/batsum-tso.jpg">
      <TibetInfoCardTitle>Бацум цо</TibetInfoCardTitle>
      <TibetInfoCardContent>
        Внешняя кора мандалы Кайлас — это паломнический маршрут вокруг горы Кайлас, расположенной в Тибете. Маршрут имеет длину около 53 километров и занимает около 3-4 дней.
        <br />
        <br />
        Гора Кайлас считается священной в индуизме, буддизме и джайнизме. Считается, что гора является центром Вселенной и местом обитания богов.
        <br />
        <br />
      </TibetInfoCardContent>
    </TibetInfoCard>
  )

  const contentSamye = (
    <TibetInfoCard imageSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/A_grand_view_of_Samye.jpg/560px-A_grand_view_of_Samye.jpg">
      <TibetInfoCardTitle>Монастырь Самье</TibetInfoCardTitle>
      <TibetInfoCardContent>
        Самье – самый первый тибетский буддистский монастырь. С его возникновением связано множество легенд. Согласно самой распространенной из них, Самье был построен при выдающемся правителе Ярлунгской династии Трисонге Децене (VIII в.). Руководил строительством великий буддистский гуру Шантаракшита, приглашенный Трисонгом Деценом из Индии. Однако местные божества, владыки почв, противились укреплению позиций буддизма в Тибете и по ночам с помощью землетрясений разрушали все, что Шантаракшите удавалось построить за день. Кроме того, в стране начался голод и вспыхнули эпидемии. Перепуганный Трисонг Децен попросил Шантаракшиту покинуть Тибет. Перед уходом великий гуру посоветовал царю пригласить Падмасамбхаву (Гуру Ринпоче), другого великого Учителя. Он так и сделал. Вскоре после прибытия Падмасамбхавы в Тибет в недостроенном монастыре Самье в присутствии царя и всей его свиты состоялся религиозный диспут между сторонниками тибетской религии бон и Гуру Ринпоче, в котором последний одержал победу. Трисонг Децен повелел всем бонцам принять буддизм, а монастырь Самье был наконец возведен.
        Самье стал центром распространения буддизма в Тибете: здесь приглашенные из Индии и Китая монахи переводили на тибетский язык священные тексты; здесь прошел Великий диспут между сторонниками индийской и китайской ветвей буддизма, в котором победили индийцы. За свою историю обитель много раз разрушалась и восстанавливалась. К счастью, сегодня практически все постройки комплекса являют собой образцы старинной тибетской архитектуры и по мере надобности реставрируются.
      </TibetInfoCardContent>
    </TibetInfoCard>
  )

  const contentDorjeDrak = (
    <TibetInfoCard imageSrc="https://storage.googleapis.com/opentibet/dorje-drag.jpg">
      <TibetInfoCardTitle>Дордже Драг</TibetInfoCardTitle>
      <TibetInfoCardContent>
        В 45 км от Самье (дорога S205, верстовой столб 459) расположен один из наиболее значимых для школы Ньингма в центральном Тибете монастырь Тхубтен Дордже Драк (Thubten Dorje Drak). Он возник в XVII в., а несколько лет назад его восстановили. Обитель находится у подножия скалы в форме ваджры. Паломники совершают вокруг нее Кору, конечной точкой которой являются развалины старинной крепости на вершине скалы.
        Лама – глава монастыря – носит потомственный титул «ригдзин». В монастыре можно увидеть статуи прежних ригдзинов. В процессе восстановления монастыря монахи бережно собирали осколки утвари, части фресок, обломки статуй и колонн. Все это сейчас можно осмотреть в реликварии. Сохранились старинные планы Дордже Драка, которые дают представление о его былом величии.
        Монастырь по-прежнему сохраняет традицию терма «Северных сокровищ» («Джангтер»), открытую Ригдзином Годемом Нгондрубом Гьялценом (1337–1409). В XVII в., когда молодой Нгаги Вангпо (Дордрак Ригдзин Ченпо III, третье воплощение Ригдзина Годема) и его опекун Джангдак Таши Топгьел подверглись гонениям со стороны царей Тцанга и были вынуждены бежать, монастырь был перенесен (1632 г.) в то место, где находится и поныне.
        Расцвет Дордже Драка начался во времена четвертого воплощения Ригдзина – Дордрака Ригдзина Ченпо Пема Тринлея (1641–1717), который безвременно погиб от рук монгольских захватчиков из Джунгара. Монастырь был разграблен джунгарами в 1717 г., восстановлен, а затем уничтожен снова в 1960-х гг. Сейчас он постепенно возрождается стараниями нынешнего воплощения Дордрака Ригдзина, проживающего в Лхасе, а также благодаря усилиям Келцанга Чод Жора и местной общины.
        В зале собраний (цогчене) можно увидеть большое изображение Падмасамбхавы, расположенном на месте, где когда-то находился оригинал, созданный четвертым Ригдзином – Пема Тринлеем. Также здесь есть расписные свитки с изображениями 100 Мирных и Гневных божеств и стенные росписи, изображающие 8 проявлений Падмасамбхавы. В зале установлены три трона: центральный – для самого Дордрака Ригдзина, а два других – для Таклунга Ринпоче (проживает в изгнании в Симле (Shimla) и Ладакхе (Ladakh)) и Чубзанга Ринпоче. В главном святилище храма находится самопроявившийся каменный образ двурукого Авалокитешвары, реликварий и библиотека, в которой хранится Кангьюр и ньингмапинский «Канон Древних Тантр» Гьюдбум.
        Самый древний храм расположен справа (сюда не допускаются женщины). Когда-то здесь находились изображения Трех Корней (гуру, божество сосредоточения и дакини) традиции Дордже Драк, однако сейчас можно увидеть лишь несколько старинных изображений, копию Канона Гьюдбум, изданного в Дерге, и ряд других священных реликвий: ваджр и колокольчик Четвертого Дордрака Ригдзина Ченпо Пема Тринлея, сундук, где хранилось сокровище-терма (тердром), частицу посоха Миларепы и подробный план монастыря в его первозданном виде. До разрушения джунгарскими войсками Дордже Драк славился огромными колоннами и воротами, расписанными черепами.
        Рядом с монастырем находится выезд на автостраду Airport Express в Лхасу – в 72 км от Самье (Samye). Выезд со «старой дороги» находится между мостом через Брахмапутру и тоннелем Галашань. Отсюда до КПП (верстовой столб 1909) при въезде в Лхасу примерно 30 км. До центра Лхасы от КПП приблизительно 20 км (30 минут).
      </TibetInfoCardContent>
    </TibetInfoCard>
  )

  const contentMidroling = (
    <TibetInfoCard imageSrc="https://storage.googleapis.com/opentibet/midroling.jpg">
      <TibetInfoCardTitle>Мидролинг</TibetInfoCardTitle>
      <TibetInfoCardContent>
        Внешняя кора мандалы Кайлас — это паломнический маршрут вокруг горы Кайлас, расположенной в Тибете. Маршрут имеет длину около 53 километров и занимает около 3-4 дней.
        <br />
        <br />
        Гора Кайлас считается священной в индуизме, буддизме и джайнизме. Считается, что гора является центром Вселенной и местом обитания богов.
        <br />
        <br />
      </TibetInfoCardContent>
    </TibetInfoCard>
  )

  const contentYumbulakhang = (
    <TibetInfoCard imageSrc="https://www.wondersoftibet.com/wp-content/uploads/2018/03/View-on-Yumbulakhang-from-the-hill.jpg">
      <TibetInfoCardTitle>Ямбулаканг</TibetInfoCardTitle>
      <TibetInfoCardContent>
        Внешняя кора мандалы Кайлас — это паломнический маршрут вокруг горы Кайлас, расположенной в Тибете. Маршрут имеет длину около 53 километров и занимает около 3-4 дней.
        <br />
        <br />
        Гора Кайлас считается священной в индуизме, буддизме и джайнизме. Считается, что гора является центром Вселенной и местом обитания богов.
        <br />
        <br />
      </TibetInfoCardContent>
    </TibetInfoCard>
  )

  const contentChongye = (
    <TibetInfoCard imageSrc="https://storage.googleapis.com/opentibet/chongye.jpg">
      <TibetInfoCardTitle>Чонгье</TibetInfoCardTitle>
      <TibetInfoCardContent>
        По преданию, здесь захоронены такие выдающиеся правители Ярлунгской династии, как Сонгцэн Гампо, который перенес столицу Тибета из Юмбулаганга в Лхасу, и Трисонг Децен (VII-VIII вв.). При них буддизм в Тибете окончательно стал государственной религией. Здесь же в 2021 году был отреставрирован монастырь Риво Дечен (Riwo Dechen). Рядом с ним находятся руины замка Чингва Тагце (Qingwa Tagdze), в котором родился пятый Далай-лама.
      </TibetInfoCardContent>
    </TibetInfoCard>
  )

  const contentBonri = (
    <TibetInfoCard imageSrc="https://storage.googleapis.com/opentibet/bonri.jpg">
      <TibetInfoCardTitle>Гора Бон Ри</TibetInfoCardTitle>
      <TibetInfoCardContent>
        Одно из самых примечательных мест восточного Тибета – это священная гора Бон Ри, особенно для последователей религии бон. Кора вокруг Бон Ри – это важная традиция в их жизни. Бон Ри является горным массивом, в который входит сама Бон Ри с четырьмя вершинами (наивысшая 4600 м )и гора Му Ри с девятью вершинами. Протяженность Коры составляет 72 км и занимает 2 дня. Перевал, через который проходят паломники, высотой около 4000 метров. Кору открыл и прошел первым в 1330 году Рива Дукши (Riwa Duksi), один из мастеров бон.
        Легенда о возникновении Бон Ри гласит, что, когда основатель бон Шераб Мивоче (Sherab Miwoche) пришел на восток Тибета, его пытался остановить злой дух этих мест. Он создал огромную черную гору на пути Мастера. Шераб же в ответ с помощью мантр и заклинаний сотворил гору большего размера, которая и получила название Бон Ри. На ней находится 4 пещеры для медитаций, расположенные по сторонам света и одна пещера в центре массива. Каждую из них охраняет дух-защитник.
        Вокруг горы было построено 8 монастырей. Они были разрушены в годы Культурной революции.
        Сейчас восстановлены только 6.
      </TibetInfoCardContent>
    </TibetInfoCard>
  )

  const contentKading = (
    <TibetInfoCard imageSrc="https://storage.googleapis.com/opentibet/kading.jpg">
      <TibetInfoCardTitle>Долина Кадинг</TibetInfoCardTitle>
      <TibetInfoCardContent>
        Внешняя кора мандалы Кайлас — это паломнический маршрут вокруг горы Кайлас, расположенной в Тибете. Маршрут имеет длину около 53 километров и занимает около 3-4 дней.
        <br />
        <br />
        Гора Кайлас считается священной в индуизме, буддизме и джайнизме. Считается, что гора является центром Вселенной и местом обитания богов.
        <br />
        <br />
      </TibetInfoCardContent>
    </TibetInfoCard>
  )

  const contentGangutso = (
    <TibetInfoCard imageSrc="https://storage.googleapis.com/opentibet/gangutso.jpg">
      <TibetInfoCardTitle>Ганг гю цо</TibetInfoCardTitle>
      <TibetInfoCardContent>
        Внешняя кора мандалы Кайлас — это паломнический маршрут вокруг горы Кайлас, расположенной в Тибете. Маршрут имеет длину около 53 километров и занимает около 3-4 дней.
        <br />
        <br />
        Гора Кайлас считается священной в индуизме, буддизме и джайнизме. Считается, что гора является центром Вселенной и местом обитания богов.
        <br />
        <br />
      </TibetInfoCardContent>
    </TibetInfoCard>
  )


  const groupTitle = (text: string) => {
    return (
      <div className='py-4 font-semibold text-xl'>{text}</div>
    )
  }
  const defaultSize = `max-w-[48%]`
  const mdSize = `md:max-w-[23%]`

  const cardWidth = 300
  return (
    <div>
      <div className='p-4'>
        <div className='py-2'>
          {groupTitle('Центральный Тибет')}
          <Slick step={cardWidth}>
            <div style={{ width: cardWidth }}>
              {contentLhasa}
            </div>
            <div style={{ width: cardWidth }}>
              {contentPotala}
            </div>
            <div style={{ width: cardWidth }}>
              {contentJokang}
            </div>
            <div style={{ width: cardWidth }}>
              {contentDrakYerpa}
            </div>
            <div style={{ width: cardWidth }}>
              {contentGanden}
            </div>
          </Slick>
        </div>
        {groupTitle('Северный Тибет')}
        <div className='flex flex-wrap gap-4'>
          <div style={{ width: cardWidth }}>
            {contentTsurphu}
          </div>
          <div style={{ width: cardWidth }}>
            {contentNamTso}
          </div>
        </div>
        {groupTitle('Округ Шигадзе')}
        <Slick step={cardWidth}>
          <div style={{ width: cardWidth }}>
            {contentTashilhunpo}
          </div>
          <div style={{ width: cardWidth }}>
            {contentGyandze}
          </div>
          <div style={{ width: cardWidth }}>
            {contentSakya}
          </div>
          <div style={{ width: cardWidth }}>
            {contentEverestBasecamp}
          </div>
          <div style={{ width: cardWidth }}>
            {contentNgor}
          </div>
          <div style={{ width: cardWidth }}>
            {contentShalu}
          </div>
          <div style={{ width: cardWidth }}>
            {contentYamdrok}
          </div>
        </Slick>
        {groupTitle('Гирьенг')}
        <Slick step={cardWidth}>
          <div style={{ width: cardWidth }}>
            {contentShashibangma}
          </div>
          <div style={{ width: cardWidth }}>
            {contentMilarepaBirthplace}
          </div>
          <div style={{ width: cardWidth }}>
            {contentLangatsoLake}
          </div>
          <div style={{ width: cardWidth }}>
            {contentPelkuTso}
          </div>
        </Slick>
        {groupTitle('Королевство Гуге')}
        <Slick step={cardWidth}>
          <div style={{ width: cardWidth }}>
            {contentDungar}
          </div>
          <div style={{ width: cardWidth }}>
            {contentTsaparang}
          </div>
          <div style={{ width: cardWidth }}>
            {contentPiyang}
          </div>
          <div style={{ width: cardWidth }}>
            {contentManosarovarKora}
          </div>
          <div style={{ width: cardWidth }}>
            {contentKorchag}
          </div>
          <div style={{ width: cardWidth }}>
            {contentPurang}
          </div>
        </Slick>
        {groupTitle('Мандала Кайласа')}
        <Slick step={cardWidth}>
          <div style={{ width: cardWidth }}>
            {contentKailasKora}
          </div>
          <div style={{ width: cardWidth }}>
            {contentKailasInnerKora}
          </div>
          <div style={{ width: cardWidth }}>
            {contentNandiKora}
          </div>
          <div style={{ width: cardWidth }}>
            {contentBuddhaThrone}
          </div>
        </Slick>
        {groupTitle('Восточный Тибет')}
        <Slick step={cardWidth}>
          <div style={{ width: cardWidth }}>
            {contentTsedang}
          </div>
          <div style={{ width: cardWidth }}>
            {contentLamaling}
          </div>
          <div style={{ width: cardWidth }}>
            {contentBuchu}
          </div>
          <div style={{ width: cardWidth }}>
            {contentBatsumTso}
          </div>
          <div style={{ width: cardWidth }}>
            {contentSamye}
          </div>
          <div style={{ width: cardWidth }}>
            {contentDorjeDrak}
          </div>
          <div style={{ width: cardWidth }}>
            {contentMidroling}
          </div>
          <div style={{ width: cardWidth }}>
            {contentYumbulakhang}
          </div>
          <div style={{ width: cardWidth }}>
            {contentChongye}
          </div>
          <div style={{ width: cardWidth }}>
            {contentBonri}
          </div>
          <div style={{ width: cardWidth }}>
            {contentKading}
          </div>
          <div style={{ width: cardWidth }}>
            {contentGangutso}
          </div>
        </Slick>
        {/* Над Сакьей фото Шашипангма
        Озеро Ланга Цо заменить фото
         */}
      </div>
    </div >
  )
}

export const Navbar = () => {
  const smoothScroll = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, elementId: string) => {
    event.preventDefault();
    const elRef = document.getElementById(elementId);
    if (elRef) {
      elRef.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    // change location
    window.history.pushState({}, '', `#${elementId}`);
  }
  return (
    <nav className="bg-black/60 text-white backdrop-blur-md w-full fixed z-10">
      <div className='flex justify-center'>
        <div className="max-w-4xl flex flex-wrap items-center justify-between mx-auto p-2 w-full">
          <a className="flex items-center space-x-3 rtl:space-x-reverse cursor-pointer">
            <Image src="opentibet-logo-hb.svg" width={150} height={80} alt='OpenTibet Logo' className="h-8 mr-3" />
          </a>
          <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 " aria-controls="navbar-default" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-colp-4 md:p-0 mt-4 mr-4 border border-gray-100 md:flex-row md:space-x-5 rtl:space-x-reverse md:mt-0 md:border-0">
              <li>
                <a href={`#${LINK_TOURS}`}
                  onClick={(event) => {
                    smoothScroll(event, LINK_TOURS)
                  }}
                  className="block py-2 px-3 rounded text-xs md:border-0 md:hover:text-red-500 md:p-0">Программы</a>
              </li>
              <li>
                <a href={`#${LINK_PHOTO_GALLERY}`}
                  onClick={(event) => {
                    smoothScroll(event, LINK_PHOTO_GALLERY)
                  }}
                  className="block py-2 px-3 rounded text-xs md:border-0 md:hover:text-red-500 md:p-0">Фото</a>
              </li>
              <li>
                <a href={`#${LINK_CONTACTS}`}
                  onClick={(event) => {
                    smoothScroll(event, LINK_CONTACTS)
                  }}
                  className="block py-2 px-3 rounded text-xs md:border-0 md:hover:text-red-500 md:p-0">Контакты</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

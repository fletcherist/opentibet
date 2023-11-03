"use client";

import Image from 'next/image'

import { useState, useEffect } from 'react';
import { useRef } from 'react';

import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

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
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
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
            <IconArrowDown />
          ) : (
            <IconArrowClose />
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
    <svg className="w-3.5 h-3.5 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
    </svg>
  )
}

export const IconArrowClose = () => {
  return (
    <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 8">
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1" />
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
        content="Лучшее время для посещения Тибета - с мая по сентябрь, когда погода наиболее благоприятна. Однако, в зависимости от выбранного маршрута, есть возможность посещения Тибета в течение всего года. Мы поможем вам выбрать наилучшее время для вашей поездки."
      />
    </>
  );
};

export const ActionButton = () => {
  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center md:py-3 md:px-6 md:text-lg"
      onClick={() => {
        const timetableElementRef = document.getElementById('timetable');
        if (timetableElementRef) {
          timetableElementRef.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }}
    >
      Смотреть программы на 2024
      <svg className="w-4 h-4 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1" />
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
        <div className='font-bold text-base text-gray-800 pt-2.5 pb-4 md:pt-2 md:pb-4'>{title}</div>
        <div className='leading-7 text-sm md:text-base'>
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
        Монастырь Джоканг - это самый почитаемый в Тибете храм (Jokhang), входит в список Всемирного наследия ЮНЕСКО. По преданию его построил Сонгцэн Гампо в 647 г. для своей жены, непальской принцессы Бхрикути. Внутри 4-этажного храма, в многочисленных часовнях, сейчас хранятся свыше 3 тыс. изображений (скульптуры, фрески) Будды, буддистских божеств и тибетских буддистских святых. Основным объектом поклонения является установленная в главном зале нижнего этажа статуя Джово Шакьямуни, изображающая Будду в 12 лет.
      </TimetableDay>
      <TimetableDay title='3 день'>
        Экскурсии в монастыри Ганден(4300м) и Драк Йерпа(4400м) в окрестностях Лхасы.
        <br />
        <br />
        Ганден (тиб. དགའ་ལྡན, Вайли dga' ldan) — монастырь на горе Вангбур, один из самых крупных буддийских монастырей и знаменитый университет школы гелуг тибетского буддизма. Ганден был одним из трёх государственных монастырей. Название «Ганден» — это тибетский перевод санскритского «Тушита», легендарной обители Будды Майтреи. Находится на высоте 4300 м.
        <br />
        <br />
        Медитационные пещеры Драк Йерпа - одно из самых святых мест центрального Тибета, расположенное на склонах гор в примерно двух часах езды от Лхасы. Начиная с VII века в пещерах медитировали, царь Сонгцен Гампо, индийский буддийский мыслитель Атиша, великий махасиддха Гуру Падмасамбхава, просветлённая йогини и дакини Еше Цогъял. В этих пещерах проживали, изучали буддизм и уходили в затворничество отшельники, монахи и монахини на протяжении десяти веков.
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
        Монастырь Сакья – главный монастырь загадочной и самой закрытой школы Сакья тибетского буддизма. Школа Сакья переживала расцвет в XIII и XIV веках при покровительстве юаньской империи (монгольских правителей Китая). В это время школа Сакья была главной школой тибетского буддизма, а город Сакья - административным центром всего Тибета.
      </TimetableDay>
      <TimetableDay title='5 день'>
        Выезд в 7 утра. Прибытие в Ронгбук в 10.00
        <br />
        <br />
        Посещение самого высокогорного в мире монастыря Ронгбук - это реконструированный тибетский буддийский монастырь, когда-то самый крупный в регионе, где проживало более 500 монахов и монахинь. Сейчас их осталось около 30. Ронгбук был основан в 1902 году Нгвангом Тензином Норбу, ламой школы Ньингма. Один из основных храмов монастыря называется Зарум (Zarum).  В нескольких километрах находятся руины старого монастыря, на этом месте ещё с XVIII века были хижины и пещеры, которые использовались женской монашеской общиной для медитаций. Стоит обратить внимание на пещеру Падмасабхавы (8 век).
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
        Полуразрушенный монастырь Тхолинг - один из древнейших в Тибете. Он был основан в начале 10-го века вторым правителем королевства Гуге Йеше О. На его территории можно увидеть многие шедевры архитектуры, выполненные в индийском стиле, явно отличающемся от традиционного тибетского. Особенную известность приобрели фрески монастыря.
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

export const TimetableButton: React.FC<{
  title: string;
  subtitle: string;
}> = ({
  title, subtitle
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
              <IconArrowDown />
            ) : (
              <IconArrowClose />
            )}
          </div>
        </div>
        {isOpened && <>
          <TimetableList />
          <div className='py-4' />
          <ApplyForm />
        </>}
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
              <IconArrowDown />
            ) : (
              <IconArrowClose />
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
      <div className='text-gray-900 font-semibold text-xl md:text-3xl pt-2'>
        {title}
      </div>
      <div className="text-xs md:text-sm md:py-1 text-gray-400">{subtitle}</div>
    </div>
  )
}

"use client"

import { AbstractButton, ActionButton, ApplyForm, BackgroundSlider, Footer, LinkTours, Navbar, TimetableDay, TimetablePhoto, TimetablePhotoDouble, TourButton, WithLanguageProvider } from "@/components/components";
import { imagesSrc } from "@/components/TibetInfo";
import { useTranslateFn } from "@/lib/language";
import { LINK_APPLY_FORM, LINK_OFFERS, Month } from "@/utils/constants";

export default function ({ params }: { params: { tibet: string } }) {
    return (
        <WithLanguageProvider>
            <main
                lang="ru"
                className="flex min-h-screen flex-col items-center justify-between"
            >
                <Navbar />
                <div className="w-full h-[70vh] md:h-[70vh]  relative">
                    <BackgroundSlider />
                    <div
                        className="absolute inset-0"
                        style={{
                            backgroundImage:
                                "linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0))",
                        }}
                    />
                    <div
                        className="absolute inset-0"
                        style={{
                            backgroundImage:
                                "linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0))",
                        }}
                    />
                    <div className="text-white h-full flex flex-col justify-center items-center px-4 md:px-20 py-10 md:py-40 relative z-100">
                        <div className="max-w-5xl w-full">
                            <div className="text-3xl font-semibold text-center w-full px-4 mt-5 mb-5">
                                Истоки четырех священных рек и<br /> исследование мандалы Кайласа.
                                <br />
                            </div>
                            <div className="text-xl font-light w-9/12 mx-auto text-center leading-7">
                                Эксклюзивный маршрут в июне 2024
                            </div>
                            <div className="flex max-w-[800px] mx-auto items-baseline flex-wrap justify-around pt-8 mb-12">
                                <AbstractButton label="Оставить заявку" anchor={LINK_APPLY_FORM} />
                                <h2 className="text-2xl font-light mt-3 leading-8">
                                    от 4000$ за 21 дня
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full max-w-4xl">
                    <div className="bg-white mt-4">
                        <div>
                            <h4 className="font-bold px-3 pt-3 leading-5 text-xl text-black">
                                Эксклюзивный тур
                            </h4>
                            <p className="font-semibold mx-3 mb-3 text-yellow-500">
                                Авторский маршрут Алексея Перчукова
                            </p>
                        </div>
                        <TourButton
                            title="Сентябрь"
                            subtitle="03—24 сентября"
                            days={22}
                            price={"от 4000"}
                            bgColor="yellow-500"
                            fgColor="black"
                            accentColor="white"
                        />
                    </div>
                    <div className="w-full flex justify-end">
                        <LinkTours />
                    </div>
                </div>
                <div className="pt-10" />
                <div className="max-w-4xl">
                    <TourExclusiveJune />
                    <ApplyForm />
                </div>
                <div className="pt-20" />
                <Footer />
            </main>
        </WithLanguageProvider>
    )
}

const TourExclusiveJune = ({ accentColor = "blue-500" }) => {
    return (
        <><div style={{textAlign: "center"}}>
        <b>Большое путешествие в обитель Богов Кайлас </b>
        <br />
        <br /><b>Тибет – сокровенная страна </b>
        </div>
        <TimetablePhoto src="https://img.opentibet.ru/TourTibetExlusiveSep2024/image01.jpg"  />
		
		<div style={{textAlign: "justify"}}>
		    &#8226; Обитель Шивы - священная гора Кайлас, место от которого Брахма создавал землю - озеро Манасаровар. Парикарма (Кора).
    <br /><br />&#8226; Настоящие места силы, где великие учителя прошлого совершали свои аскезы. Пещеры и монастыри, где практиковали Падмасамбхава,
	Миларепа и многие другие Махасидхи (великие души) прошлого и современности.
    <br /><br />&#8226; Завораживающая и чарующая природа. Заснеженные восьмитысячники на фоне песчаных дюн. Долина Гаруды и королевство Гугэ с каньонами не менее величественными, 
	чем Гранд каньон в Северной Америке. Священные озера и реки. Кристально чистый горный воздух. Гималайские перевалы высотой более 5000 м.
    <br /><br />&#8226; Неповторимая культура Тибета с тысячелетней историей. Очень богатая и интересная программа с посещением монастырей, храмов, священных ступ.
    <br /><br />&#8226; Продуманная программа для плавной акклиматизации. Большое кол-во пеших прогулок - треккингов. Сонастройка тонкого тела для совершения парикармы.
		</div>

<br />Программа тура:
<TimetableDay accentColor={accentColor} title="1 день">
<b>Москва -Ченду</b>
<br /><br />Перелет Москва-Ченду рейсом а/к 
</TimetableDay>

<TimetableDay accentColor={accentColor} title="2 день">
<b>Перелет Ченду-Лхаса. Прибытие в аэропорт Гонкар в 19.00-(3550м) –Переезд в Лхасу (3600м)</b>
<br /><br />Ночь в Лхасе Tibet hotel
</TimetableDay>

<TimetableDay accentColor={accentColor} title="3 день">
<b>Лхаса</b>
<br /><br />Монастырь Пабонка.
<TimetablePhoto src="https://img.opentibet.ru/TourTibetExlusiveSep2024/image02.jpg"  />
Страя Лхасса квартал Баркор
<TimetablePhoto src="https://img.opentibet.ru/TourTibetExlusiveSep2024/image03.jpg"  />
<br />Ночь в Тибет отеле
</TimetableDay>

<TimetableDay accentColor={accentColor} title="4 день">
<b>Лхаса</b>
<br /><br />Экскурсии в монастырь Цурпу в окрестностях Лхасы.
<br />
<br />Один из центров традиции Кармапа школы Кагью («черношапочники») расположен в 70 км западнее Лхасы на высоте 4480 м. Он был основан создателем традиции
 учеником Гампопы Дусум Кхьенпой (1110–1193) достигшим Просветления в 50 лет. Резиденция кармапы — ламы-тулку данной традиции.
<br /> <br />После смерти первого кармапы Кхьенпы Цурпу (Tsurpu) стал  главным монастырем традиции. Когда-то здесь проживали свыше 1000 монахов сегодня их насчитывается около 300.
<br /> <br />17-й кармапа принявший этот титул в 1992 г. сейчас живет в Индии.
  Статуи всех 16 кармап представлены в большом здании бывшей резиденции этих лам-тулку.
  <TimetablePhoto src="https://img.opentibet.ru/TourTibetExlusiveSep2024/image04.jpg"  />  
</TimetableDay>

<TimetableDay accentColor={accentColor} title="5 день">
    <b>   Лхаса (3550 м)– Шигадзе (3950 м) Бон Монастырь Менрм-Ладзе</b>
<br /><br />Ночь в Ладзе Viena hotel
</TimetableDay>

<TimetableDay accentColor={accentColor} title="6 день">
     <b>   Ладзе (4260) – Сага- Парьянг (4600м)</b>
<br />Ночь в Парьянге
</TimetableDay>

<TimetableDay accentColor={accentColor} title="7 день">
    <b>Парьянг (4500м) – Манасаровар (4500 м.) (350 км 7 часов)-Дарчен</b>
<br /><br />Преодоление первых перевалов высотой более 5000 метров первые виды на священный Кайлас.
<br /><br />Осмотр монастыря Чиу ("Птичий монастырь"). С вершины монастыря открывается великолепные вид на озера Ракшас Тал и Манасаровар а также на заснеженную вершину Кайлаша. 
Посещение пещеры Падмасамбхавы где он практиковал последние 7 дней прежде чем ушёл из этого мира.
<br /><br />Монастырь Госсул (Gossul Gompa) построен чуть правее пещеры в которой великий Атиш́а проходил семидневную медитацию. С площадки перед монастырём открывается потрясающая
панорама Кайласа и озера. 
<TimetablePhoto src="https://img.opentibet.ru/TourTibetExlusiveSep2024/image05.jpg"  />
Отсюда индусы обычно начинают свою Манасаровар-Кору. Внутри обители находится ещё одна пещера где в XIII в. св. Гоцампа из школы Кагью.
<TimetablePhoto src="https://img.opentibet.ru/TourTibetExlusiveSep2024/image06.jpg"  />
Ночь в Дарчене Cham bei hotel
</TimetableDay>

<TimetableDay accentColor={accentColor} title="8 день">
  <b> Дарчен (4600) - Цапаранг (3700). (350км около 6ч)</b>
<br /><br />Посещение монастыря боннского Гурген на въезде в Долину Гаруды столицу древнего королевства Шанг Шунг.
<TimetablePhoto src="https://img.opentibet.ru/TourTibetExlusiveSep2024/image07.jpg"  />
Переезд в Цапаранг.
<TimetablePhoto src="https://img.opentibet.ru/TourTibetExlusiveSep2024/image10.jpg"  />
<TimetablePhoto src="https://img.opentibet.ru/TourTibetExlusiveSep2024/image09.png"  />

Ночь в Цапаранге Gangadish Hotel.
</TimetableDay>

<TimetableDay accentColor={accentColor} title="9 день">
<b>Пещерные города королевства Гуге (3800 м) Dungar и Payang или Каменный лес (Tower Earth Forest)</b>

<br /><br />Посещение Королевств Гуге.
<TimetablePhoto src="https://img.opentibet.ru/TourTibetExlusiveSep2024/image11.jpg"  />
<br />Ночь в Цапаранге Gangadish Hotel.
<TimetablePhoto src="https://img.opentibet.ru/TourTibetExlusiveSep2024/image12.jpg"  />
</TimetableDay>

<TimetableDay accentColor={accentColor} title="10 день">
<b> Переезд Цапаранг (3800)-Тритхапури (3900) –Дарчен (4600м) (235 км около 6ч)</b>
<br /><br />Переезд в Дарчен. Священная земля Тритхапури и монастыря Гурген.
<br />Название "Тиртхапури" происходит от санскритского и состоит из двух слов – тиртха что переводится как «священный водоем» и пури – «храм». Поэтому само название можно перевести как «храм стоящий на 
священных источниках» так как тут находятся термальные источники которые считаются очень священными. Тиртхапури – мистическое место в Тибете одно из "мест силы" связанных с Падмасамбхавой.
<TimetablePhoto src="https://img.opentibet.ru/TourTibetExlusiveSep2024/image13.jpg"  />
Рядом на скале находится известный храм Тиртхапури с пещерой где Падмасамбхава Драгоценный Гуру по преданию покорил демона.
<TimetablePhoto src="https://img.opentibet.ru/TourTibetExlusiveSep2024/image14.png"  />
Ночь в Дарчене Jingruihong hotel.
</TimetableDay>

<TimetableDay accentColor={accentColor} title="11 день">
 <b> Первый день коры: (4920 м)</b>
<br /><br />Переход до монастыря Дирапук (4910 м) 20 км около 6-7 часов ходьбы. Вы начинаете путь от Тарпоче мимо ступ по пути мы увидим небесное кладбище связанное с 84 махасидхами (йогинами) из Индии пройдем через Ворота Богов Смерти мимо льющихся каскадов ручьев водопадов и западного лица Кайласа монастыря Чукку.
<TimetablePhoto src="https://img.opentibet.ru/TourTibetExlusiveSep2024/image15.jpg"  />
Далее мы доходим до монастыря Дирапук и останавливаемся на ночлег в гостевом домике напротив северного лица Кайласа.
<br /><br /><b>Возможны 2 опции:</b>
<br /><br />- Подъем на плато перед Западным лицом (5300м) продолжительность около 6 часов.
<TimetablePhoto src="https://img.opentibet.ru/TourTibetExlusiveSep2024/image16.jpg"  />
- Возможен радиальный выход к северному лицу Кайласа.
<br /><br />Ночь в гестхаузе рядом с монастырем Дхрира Пхук.
</TimetableDay>

<TimetableDay accentColor={accentColor} title="12 день">
 <b> Второй день коры.</b>
<br />Нам предстоит радиальный выход к Северо-восточному лицу Кайласа. Выход из гестхауса в 10ч.
<br />Подход к Северо-восточному лицу Кайласа и каменному зеркалу Дхарма Кинг Нарсанг. (5350м)
<TimetablePhoto src="https://img.opentibet.ru/TourTibetExlusiveSep2024/image17.jpg"  />
Подъем на перевал Манджушари 5750 метров. Спуск в долину перевала Кхандро Санглам (5500м)
<TimetablePhoto src="https://img.opentibet.ru/TourTibetExlusiveSep2024/image18.jpg"  />
Посещение священного озера Ваджравархи и завершение Манджушари Коры.
<br />Ночь в гестхаузе около монастыря Дрира Пхук. (4950м)
</TimetableDay>

<TimetableDay accentColor={accentColor} title="13 день">
 <b> Третий день Кайлас Коры</b>
<br />День отдыха 
<br />Подход к Северному Лицу
<TimetablePhoto src="https://img.opentibet.ru/TourTibetExlusiveSep2024/image19.jpg"  />

</TimetableDay>

<TimetableDay accentColor={accentColor} title="14 день">
   <b>Четвертый день коры: (5600 - 4800 м)</b>
<br /><br />
Вы пересечете перевал Дролма-Ла (5600 м) который поразит Вас своей энергетикой. Здесь Вы возрождаетесь так как все грехи прощаются благодаря состраданию Дролмы богини Милосердия. 
<TimetablePhoto src="https://img.opentibet.ru/TourTibetExlusiveSep2024/image20.png"  />
<TimetablePhoto src="https://img.opentibet.ru/TourTibetExlusiveSep2024/image21.jpg"  />
Далее Вас ждет спуск вниз к монастырю Зутулпук (4790 м). По дороге Вы будете лицезреть: пики потоки водопады горные пещеры. Также Вы сможете посетить монастырь Зутур Пхук.
<br /><br />Для тех кто уже был в Тибете и проходил Внешнюю Кору будет возможность пройти альтернативным маршрутом через перевал <b>Кхандро Санглам (5675 м)</b> так называемую Внутреннюю Кору.
<TimetablePhoto src="https://img.opentibet.ru/TourTibetExlusiveSep2024/image22.jpg"  />
Ночь у монастыря Зутур Пхук (4800м). Посещение Пещеры Магических Сил. Обитель принадлежит линии Дрикунг школы Кагью. Гора над ней называется След Учителя Будды (5924 м).
<br />
<br />
Главная святыня монастыря – пещера где медитировал великий йогин Миларепа. Здесь же находится его статуя. На чёрном потолке – отпечатки рук и головы Миларепы. 
Снаружи монастыря в нескольких метрах на юг вертикально стоит огромная шестигранная глыба окружённая каменной стеной.
<br />Ночь в Гест Хаус Zutur Phuk
</TimetableDay>

<TimetableDay accentColor={accentColor} title="15 день">
<b>Пятый день коры: (4550 м)</b>
<br />Возвращение в Дарчен.
<br />Также возможно посещение «симметричной Долины» (Гедхун)
<TimetablePhoto src="https://img.opentibet.ru/TourTibetExlusiveSep2024/image23.jpg"  />
Уникальное по своей энергетике место
<TimetablePhoto src="https://img.opentibet.ru/TourTibetExlusiveSep2024/image24.jpg"  />
Ночь в дарчене Cham bei
</TimetableDay>

<TimetableDay accentColor={accentColor} title="16 день">
<b>Шестой день Коры </b>
    <TimetablePhoto src="https://img.opentibet.ru/TourTibetExlusiveSep2024/image25.jpg"  />
Возможна Кора вокруг горы Трон Будды. Со спуском к Монастырю Гяндрак.
    <TimetablePhoto src="https://img.opentibet.ru/TourTibetExlusiveSep2024/image26.jpg"  />
Возвращение в Дарчен 
    <br />Ночь в Дарчене  Cham bei hotel.
</TimetableDay>

<TimetableDay accentColor={accentColor} title="17 день">
    <br /><b>Седьмой день Коры. </b>
 <br />   <br />День отдыха выход к монастырю Гяндрак.
    <TimetablePhoto src="https://img.opentibet.ru/TourTibetExlusiveSep2024/image27.jpg"  />
</TimetableDay>


<TimetableDay accentColor={accentColor} title="18 день">
<b>Восьмой день Коры. </b>
    <br /><br />Выход к Долине Гяндрак
    <TimetablePhoto src="https://img.opentibet.ru/TourTibetExlusiveSep2024/image28.jpg"  />
</TimetableDay>



<TimetableDay accentColor={accentColor} title="19 день">
<b>Дарчен (4600) – Сага (4500) – Ладзе (4000)</b>
<br /><br />Ночь в Ладзе в отеле Viena.
</TimetableDay>

<TimetableDay accentColor={accentColor} title="20 день">
<b>Переезд Ладзе (4000) – Шигадзе (3900)–Лхаса (3600) </b>
<br /><br />Переезд. Ночь в Tibet hotel.
</TimetableDay>

<TimetableDay accentColor={accentColor} title="21 день">
<b>Свободный день в Лхасе.</b>
<br /><br /><b>Ночь в Tibet hotel.</b>
</TimetableDay>

<TimetableDay accentColor={accentColor} title="22 день">
<b>Трансфер аэропорт</b>
</TimetableDay>

<br />Информация для подготовки к путешествию в высокогорье
<br /><br />Список вещей, аптечка для поездки в Тибет : <a href="https://kailash-explorer.com/2017/06/06/tour_poject_tibet/">https://kailash-explorer.com/2017/06/06/tour_poject_tibet/</a>
<br /><br />Часто задаваемые вопросы: <a href="https://kailash-explorer.com/faqs/">https://kailash-explorer.com/faqs/</a>

        </>
    );
}
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
                                Эксклюзивный маршрут в мае 2025 года
                                <br />
                            </div>
                            <div className="text-xl font-light w-9/12 mx-auto text-center leading-7">

                            </div>
                            <div className="flex max-w-[800px] mx-auto items-baseline flex-wrap justify-around pt-8 mb-12">
                                <AbstractButton label="Оставить заявку" anchor={LINK_APPLY_FORM} />
                                <h2 className="text-2xl font-light mt-3 leading-8">
                                    19 дней, от 3500$
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
                            title="Ооктябрь"
                            subtitle="10-28 октября"
                            days={18}
                            price={"от 2500"}
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
        <>
            <div style={{ textAlign: "center" }}>
                <b>Большое путешествие в обитель Богов Кайлас </b>
                <br />
                <br /><b>Тибет – сокровенная страна </b>
            </div>
            <TimetableDay accentColor={accentColor} title="1 день">
                <b>Перелет Ченду-Лхаса. Прибытие в аэропорт Гонкар (3550м). Время прибытия: 18.00. Переезд в Лхасу (3600м).</b>

                <br /><br /><b>Ночь в Лхасе.</b>
            </TimetableDay>

            <TimetableDay accentColor={accentColor} title="2 день">
                <b>Лхаса (3600м). Посещение Дворца Потала, храма Джокханг.</b>
                <br /><br /><b> Дворец Потала</b> – Белый дворец – одна из главных «визитных карточек» Лхасы и Тибета.Это самый большой по площади и самый
                высокогорный дворец-музей (3700 м) в мире. Входит в Список Всемирного наследия ЮНЕСКО. В настоящее время возведённый
                в характерном для тибетской архитектуры эклектичном стиле дворец-храм занимает площадь свыше 360 тыс. м2, и в нем насчитывается
                более 1000 помещений. Многие из них это часовни со скульптурами Далай-лам и их тронные и медитационные залы, а также спальные
                покои, где бережно хранятся предметы личного быта духовных правителей Тибета. Стены многих комнат украшены фресками; в экспозиции
                также выставлены многочисленные скульптуры и манускрипты. С балконов открываются прекрасные виды на Лхасу и окружающие горы.

                <br /><br /><b>Храм Джоканг</b> — это самый почитаемый в Тибете храм (Jokhang), входит в список Всемирного наследия ЮНЕСКО. По преданию его построил
                Сонгцэн Гампо в 647 г. для своей жены, непальской принцессы Бхрикути. Внутри 4-этажного храма, в многочисленных часовнях, сейчас
                хранятся свыше 3 тыс. изображений (скульптуры, фрески) Будды, буддистских божеств и тибетских буддистских святых. Основным объектом
                поклонения является установленная в главном зале нижнего этажа статуя Джово Шакьямуни, изображающая Будду в 12 лет.
                <TimetablePhoto src="https://img.opentibet.ru/2025/october/oct-2025-01.jpg" />
                <TimetablePhoto src="https://img.opentibet.ru/2025/october/oct-2025-02.jpg" />
                <br /><b>Ночь в Лхасе.</b>
            </TimetableDay>


            <TimetableDay accentColor={accentColor} title="3 день">
                <b>Лхаса (3600м). Посещение пещерного комплекса Драк Йерпа и Монастыря Дрепунг.</b>
                <br /><br /><b> Драк Йерпа</b> — Фактически монастырь представляет собой пещерный комплекс с  храмом. Это самый известный центр медитации в Тибете. Здесь
                медитировали такие известные мастера, как Падмасамбхава и его жена, Сонгцэн Гампо и его жена, Чжэ Ринпоче и  Атиша. До  «культурной революции»
                у  подножия горы Йерпа Лхари с  пещерами был монастырь Йерпа Друбде, сейчас он  восстанавливается.
                Пещеры следует осматривать по часовой стрелке. В каждой из них установлены статуи духовных учителей, медитировавших здесь. Кора вокруг горы
                Йерпа Лхари занимает около часа. Намного более сложная и  продолжительная  — Верхняя Кора на  вершину горы, на  которую обычно уходит несколько часов.
                <TimetablePhoto src="https://img.opentibet.ru/2025/october/oct-2025-03.jpg" />
                <br /><b>Дрепу́нг</b>  — монастырь в пригороде Лхасы в Тибетском автономном районе Китая, примерно в 10 км от города. Самый крупный буддийский
                монастырь и университет школы Гелуг тибетского буддизма, а также место паломничества. Ранее Дрепунг был одним из трёх государственных
                «великих» монастырей, с подворьями по всему Тибету и за его пределами. Территория монастыря составляет 200 тыс. м².

                <TimetablePhoto src="https://img.opentibet.ru/2025/october/oct-2025-04.jpg" />
                <TimetablePhoto src="https://img.opentibet.ru/2025/october/oct-2025-05.jpg" />
                <br /><b>Ночь в Лхасе.</b>
            </TimetableDay>


            <TimetableDay accentColor={accentColor} title="4 день">
                <b>Переезд Лхаса (3600м) - Менри - Яндрулинг - Карна - Шигадзе (3950м). Посещение бонских монастырей: Менри, Яндрулинг и Карна.</b>
                <br /><br /><b>Монастырь Менри</b> — самый оригинальный и главный монастырь религии Бон в Тибете.  Основанный приблизительно в 600 году н.э. Шерапом Гянценом,
                в период расцвета он насчитывал более 7000 монахов из Ладакха и Непала.  Разрушенный во время культурной революции, Менри ныне полностью
                отреставрирован. Главные реликвии монастыря — ступа с мощами Шерапа Гяцена (самая крупная из 108 частиц, образовавшихся после его смерти),
                бубны и одежда первого Менри Ринпоче, а также шкаф с реликвиями древних учителей (фрагменты костей, раковины, ритуальные кинжалы).
                Расположенный на склоне горы в долине, монастырь излучает мощную духовную энергию.
                <TimetablePhoto src="https://img.opentibet.ru/2025/october/oct-2025-07.jpg" />
                <br /><b>Монастырь Яндрулинг</b> — в этих местах тысячу лет назад медитировал Ширап Мивоче.  Именно здесь, на стене пещеры, впервые
                появилась бонская свастика, что и дало название монастырю Яндрулинг (Ямдрунгрула):  Yamdrung (свастика) и Rula (прекрасная).
                В VII веке н. э. Сонгцен Гампо основал здесь буддийский монастырь, но в конце VIII века он был разрушен по приказу Ландармы.
                В 1834 году, при правлении 10-м Далай-ламе, Лундун Дава Децен восстановил монастырь, но уже как бонскую обитель.  Сейчас монастырь
                принадлежит традиции Бон.
                <TimetablePhoto src="https://img.opentibet.ru/2025/october/oct-2025-08.jpg" />
                <br /><b>Монастырь Карна</b> — на гребне другой горы, расположенной в той же долине, что и Менри, находится еще один бонский монастырь —
                Карна (Yuri Karna). Название переводится как «замок на обрыве»
                <TimetablePhoto src="https://img.opentibet.ru/2025/october/oct-2025-06.jpg" />      .
                <br /><b>Ночь в Шигадзе.</b>
            </TimetableDay>


            <TimetableDay accentColor={accentColor} title="5 день">
                <b>Шигадзе (3950м). Посещение бонских монастырей и храмов: Храм Веншака (Wenshaka Temple), Храма Риксин (Rixing (Kyikhar Rizhing) Temple) и Jiangzi Baina.</b>
                <br /><br /><b>Шига́дзе</b>, также Шигацзе́ — Современный большой город, второй по величине в Тибете, столица уезда с населением 880 тыс.
                чел. Основная часть населения – китайцы; тибетцы проживают в своём небольшом квартале и в главной достопримечательности
                Шигадзе (Shigadze) – монастыре Ташилунпо (Tashilhunpo), одном из немногих, переживших Культурную революцию. Над старым
                кварталом возвышаются живописные руины крепости-дзонга. Южнее монастыря расположен летний дворец панчен-ламы, построенный
                в середине XIX в. в национальном стиле.
                <TimetablePhoto src="https://img.opentibet.ru/2025/october/oct-2025-09.jpg" />

                <br /><b>Ночь в Шигадзе.</b>
            </TimetableDay>

            <TimetableDay accentColor={accentColor} title="6 день">
                <b>Переезд Шигадзе (3950м) - Сага (4600м) - Парьянг (4600м).</b>
                <br /><br /><b>Сага</b> город в провинции Шигадзе, столица области Сага на высоте 4600м с населением 20 тыс. человек. Основан был в 1960 году.
                Область имеет общую границу с Непалом около 100км. Известность город приобрел, как транзитный пункт для непальских и индийских групп,
                цель которых паломничество к горе Кайлас.
                <br /><br /><b>Город Парьянг </b>(Paryang) находится на высоте 4600 м. Его название переводится с  тибетского как «широкое место».
                Это максимально отдаленная точка от Шигадзе (Shigadze) с возможностью ночевки, которую можно достичь за  день.
                Город сильно разросся за последние несколько лет.
                <br /><br /><b>Ночь в Парьянге.</b>
            </TimetableDay>

            <TimetableDay accentColor={accentColor} title="7 день">
                <b>Переезд Парьянг (4600м) - Манасаровар - Ракшас Тал - Дарчен (4600м). Посещение озер Манасаровар и Ракшас Тал.</b>
                <br /><br /><b>Манасаровар</b> — один из самых фантастических природных памятников западного Тибета и одна из главных святынь буддизма в мире наряду
                с заповедной горой Кайлас. Его площадь — около 500 км², максимальная глубина 82 м. По размерам Манасаровар можно сравнить с самыми
                большими высоко-горными озерами нашей планеты, но по степени почитаемости и символическому значению равных ему нет. Для представителей
                сразу четырех религий (буддистов, индуистов, джайнистов и последователей бон) именно здесь, у Кайласа и Манасаровара, бьется сердце Вселенной,
                проходит ось Земли.
                <TimetablePhoto src="https://img.opentibet.ru/2025/october/oct-2025-11.jpg" />
                <br />Приближение к мандале Кайласа рекомендуется начинать с Манасаровар-Коры, ритуального обхода озера, как бы преддверия Кайлас-Коры.
                Паломник сначала совершает омовение в Манасароваре и только потом — обход священной горы. С точки зрения ступенчатой акклиматизации
                это тоже имеет смысл.

                <br /><br /> <b>Озеро Ракшастал</b> (Ланга-цо; Rakshas Tal, Langa Tso). Расположено слева от Манасаровара на высоте 4575 м. Длина его береговой линии составляет
                примерно 125 км, площадь – 360 км2. Другое название озера – Равана Храда связано с правнуком Брахмы Раваной, царём демонов (ракшасов). По одной
                из легенд, Равана простоял в Ракшастале на одной ноге 1000 лет, поклоняясь Шиве, после чего получил от него сверхсилы (сиддхи). По другой, Равана
                совершал здесь ягью (огненное подношение) Шиве, причем приносимой жертвой служила его собственная голова. Шива был настолько поражён
                его самоотречением, что подарил Раване неуязвимость и бессмертие.
                <TimetablePhoto src="https://img.opentibet.ru/2025/october/oct-2025-12.jpg" />

                <br /><b>Дарчен</b> — название города (Darchen) в данном случае переводится как «большой флаг». Когда-то на стене местного монастыря, уничтоженного в годы
                Культурной революции, вывешивали огромную тханку с изображением Будды. После распада единого Тибетского государства в середине IX в.
                правители западного Тибета (Нгари) захватили расположенную южнее историческую область Ладакх (Ladakh; сегодня входит в состав индийского
                штата Джамму и Кашмир) и основали Ладакхское царство. В XII в. ладакхские цари подарили территорию, на которой расположен Дарчен,
                бутанскому ламе Друкчену Нгавангу Намгьялу. С этого времени начали возводиться монастыри на маршруте Кайлас-Коры.
                <TimetablePhoto src="https://img.opentibet.ru/2025/october/oct-2025-10.jpg" />
                <br /><b>Ночь в Дарчене.</b>
            </TimetableDay>

            <TimetableDay accentColor={accentColor} title="8 день">
                <b>Переезд Дарчен (4600м) - Долина Гаруды - Гуругьям - Гуге. Посещение Долины Гаруды и Монастрыя Гуругьям.</b>
                <br /><br /><b>Долина Гаруды</b> — священная долина Гаруды (Garuda valley) расположена в 30 км от Меши. Дорога с 2020 года заасфальтирована. Если спокойно
                посидеть здесь на  вершине холма, то  приходит понимание: все, что мы  видим вокруг, может неожиданно ожить. Начинаешь осознавать истинную
                суть многих жизненных ситуаций и событий.

                <TimetablePhoto src="https://img.opentibet.ru/2025/october/oct-2025-13.jpg" />

                <br />На середине пути, в 16 км от Меши (Meshi) и  в 8  км  от Тиртхапури (Tirthapuri), находится очень древний бонский <b>монастырь Гуругьям</b>
                (Gurugam) со  свастикой на  фасаде. Его основал лама Кьюнгтрил Джигме Намкха Дордже (1897–1956), появившийся здесь в 1930 г. Монастырь
                стал очень важным местом для всех тибетских буддистов. В  1950  г. здесь насчитывалось около 60 монахов. В 2013 г. монастырь решили
                целиком перестроить: сначала разобрать до основания, а  потом воссоздать. Сейчас восстановление завершено.

                <TimetablePhoto src="https://img.opentibet.ru/2025/october/oct-2025-14.jpg" />

                <b>Тхолинг</b>

                <TimetablePhoto src="https://img.opentibet.ru/2025/october/oct-2025-23.jpg" />
                <br /><b>Ночь в Гуге (Тхолинг).</b>
            </TimetableDay>

            <TimetableDay accentColor={accentColor} title="9 день">
                <b>Королевство Гуге.</b>
                <br /><br /><b>Гуге</b> — древнее царство на территории западного Тибета. Его столицами были города Тхолинг и Цапаранг. Когда-то именно через них
                пролегали караванные пути, по  которым к  Кайласу следовали многочисленные паломники. Сейчас на  месте некогда богатого царства лежат руины.
                <TimetablePhoto src="https://img.opentibet.ru/2025/october/oct-2025-15.jpg" />
                <br /><b>Ночь в Гуге (Тхолинг).</b>
            </TimetableDay>


            <TimetableDay accentColor={accentColor} title="10 день">
                <b>Переезд Гуге - Тритхапури - Дарчен.</b>
                <br /><br /><b>Священная земля Тритхапури</b> - эта священная земля на высоте 4300 м  считается границей между материальным миром и  миром богов.
                Название образовано от слова «тиртха», что в  переводе с  санскрита означает «священное место, где есть пруд, озеро или река,
                воды которых считаются святыми». Во время посещения Тиртхи принято совершать омовение в  священных водах. Тиртхапури тесно
                связано как с  Падмасамбхавой, так и  с Дордже Пхагмо — духовной супругой Чакрасамвары.
                <TimetablePhoto src="https://img.opentibet.ru/2025/october/oct-2025-16.jpg" />

                <br /><b>Ночь в Дарчене (Chuan Bei (b) Hotel).</b>
            </TimetableDay>

            <TimetableDay accentColor={accentColor} title="11 день">
                <b>Первый день Кайлас-коры. Монастырь Зутур Пхук (4750м).</b>
                <br /><br />Монастырь <b>Зутур Пхук </b>(в переводе означает ‘Пещера чудес’) выстроен вокруг пещеры, которая стала
                местом знаменитой победы Миларепы над мастером бона Наро Бончунгом.

                <TimetablePhoto src="https://img.opentibet.ru/2025/october/oct-2025-17.jpg" />
                <br /><b>Ночь в гестхаусе у монастыря Зутур Пхук</b>
            </TimetableDay>

            <TimetableDay accentColor={accentColor} title="12 день">
                <b>Второй день Кайлас-коры. Перевал Дрома-Ла (5600м).</b>
                <br /><br /><b>Ночь в гестхаусе у монастыря Дрира Пхук.</b>
            </TimetableDay>

            <TimetableDay accentColor={accentColor} title="13 день">
                <b>Третий день Кайлас-коры. Монастырь Дрира Пхук. Ночь в гестхаусе у монастыря Дрира Пхук.</b>
                <br /><br />Монастырь <b>Дрира Пхук</b> (Drira Phug) (4910м), основан в 1213 г. Мастером Гоцангпа. Принадлежит линии Дрикунг школы Кагью.
                <br /><br />С ним и окружающими его горами связано огромное количество легенд. После длительной  медитации в пещере, на месте которой
                построен монастырь, Мастер произнес: «Каждый, кто обопрётся головой в этой пещере, будь то существо в драгоценном человеческом
                обличье, будь то существо из трёх видов живых существ: птиц, грызунов или насекомых, – каждый избежит перерождения в нижних мирах,
                даже если он попадёт сюда случайно». Говоря это, он оставил вмятину своей головой в скале.
                <TimetablePhoto src="https://img.opentibet.ru/2025/october/oct-2025-18.jpg" />
            </TimetableDay>
            <TimetableDay accentColor={accentColor} title="14 день">
                <b>Четвертый день Кайлас-коры.  Возвращение в Дарчен. Посещение Монастыря Гьянгдрак и Серлунг на джипах.</b>
                <br /><br />Обитель <b>Гьянгдрак Гомпа </b>(Gyangdrak Gompa) на  холме в  долине Гьянгдрак-чу производит фантастическое впечатление. Приблизительный
                перевод названия  — «предел слышимости». По  преданиям, долина названа так потому, что находящиеся в ней могут вбирать в себя звуки
                окрестных священных мест.
                <TimetablePhoto src="https://img.opentibet.ru/2025/october/oct-2025-19.jpg" />
                <br /><b>Серлунг Гомпа</b>  — самая маленькая из  пяти обителей вокруг Кайласа; ее  строения расположены в  виде прямоугольника. После полной
                реконструкции 2012  г. во  внутреннем дворе слева располагаются кухня и  жилые помещения, справа  — главный храм со  статуей
                Падмасамбхавы. Рядом с  монастырем находится большая белая ступа Джангчуб; такая же украшает противоположный берег одноименной реки.
                В  Серлунг Гомпа живут всего два монаха. Серлунг Гомпа и Гьянгдрак Гомпа разделяет горный массив, через который проложена тропа. По
                ней примерно за  час можно попасть из одного монастыря в другой.

                <TimetablePhoto src="https://img.opentibet.ru/2025/october/oct-2025-20.jpg" />

                <br /><b>Ночь в Дарчене.</b>
            </TimetableDay>

            <TimetableDay accentColor={accentColor} title="15 день">
                <b>Переезд Дарчен (4600м) - Ладзе (4000м), (10 ч).</b>
                <br /><br /> Обычно из Ладзе туристы направляются на юг, к непальской границе и базовому лагерю Эвереста.
                <br /><br /> За последние несколько лет город стало не узнать. Из маленького провинциального городка он превратился в современный
                китайский город. Рядом с Ладзе пролегают русла трёх рек. Ближайшая высочайшая вершина – гора Якри высотой 5656 м к северу от Ладзе.

                <TimetablePhoto src="https://img.opentibet.ru/2025/october/oct-2025-21.jpg" />
                <br /><b>Ночь в Ладзе.</b>
            </TimetableDay>


            <TimetableDay accentColor={accentColor} title="16 день">
                <b>Перееезд Ладзе (4000м) - Лхаса (3600м), (7ч).</b>
                <br /><br /> <b>Ночь в Лхас.</b>
            </TimetableDay>

            <TimetableDay accentColor={accentColor} title="17 день">
                <b>День в Лхасе.</b>
                <TimetablePhoto src="https://img.opentibet.ru/2025/october/oct-2025-22.jpg" />
                <br /><b>Ночь в Лхасе (Kichu Hotel).</b>
            </TimetableDay>

            <TimetableDay accentColor={accentColor} title="18 день">
                <b>Вылет из Лхасы.</b>
            </TimetableDay>


        </>
    );
}
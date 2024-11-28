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
                            title="Сентябрь"
                            subtitle="03—22 сентября"
                            days={20}
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

                <br /><br /><b>Лха́са</b> — городской округ в Тибетском автономном районе КНР, место размещения правительства автономного района, бывшая
                столица независимого Тибетского государства. Лхаса является также традиционной резиденцией Далай-ламы. Буквально в переводе
                с тибетского «лхаса» означает «место богов».
                <TimetablePhoto src="https://img.opentibet.ru/2025/september/sep-2025-01.jpg" />

                <br /><b>Ночь в Лхасе.</b>
            </TimetableDay>

            <TimetableDay accentColor={accentColor} title="2 день">
                <b>Лхаса. Посещение храма Джокханг и туристического района Баркор.</b>
                <br /><br /><b>Храм Джоканг</b> — это самый почитаемый в Тибете храм (Jokhang), входит в список Всемирного наследия ЮНЕСКО. По преданию его
                построил Сонгцэн Гампо в 647 г. для своей жены, непальской принцессы Бхрикути. Внутри 4-этажного храма, в многочисленных часовнях,
                сейчас хранятся свыше 3 тыс. изображений (скульптуры, фрески) Будды, буддистских божеств и тибетских буддистских святых. Основным
                объектом поклонения является установленная в главном зале нижнего этажа статуя Джово Шакьямуни, изображающая Будду в 12 лет.
                <TimetablePhoto src="https://img.opentibet.ru/2025/september/sep-2025-02.jpg" />
                <br /><b>Ночь в Лхасе.</b>
            </TimetableDay>


            <TimetableDay accentColor={accentColor} title="3 день">
                <b>Лхаса. Посещение монастырского комплекса Драк Йерпа.</b>
                <br /><br />Драк Йерпа — Фактически монастырь представляет собой пещерный комплекс с  храмом. Это самый известный центр медитации в Тибете. Здесь
                медитировали такие известные мастера, как Падмасамбхава и его жена, Сонгцэн Гампо и его жена, Чжэ Ринпоче и  Атиша. До «культурной революции»
                у  подножия горы Йерпа Лхари с  пещерами был монастырь Йерпа Друбде, сейчас он  восстанавливается.
                <br /><br /> Пещеры следует осматривать по часовой стрелке. В каждой из них установлены статуи духовных учителей, медитировавших здесь. Кора вокруг
                горы Йерпа Лхари занимает около часа. Намного более сложная и  продолжительная  — Верхняя Кора на  вершину горы, на  которую обычно уходит
                несколько часов.
                <TimetablePhoto src="https://img.opentibet.ru/2025/september/sep-2025-03.jpg" />
                <br /> Ночь в Лхасе.

            </TimetableDay>


            <TimetableDay accentColor={accentColor} title="4 день">
                <b>Лхаса (3600м). Посещение монастырей Сера и Дрепунг.</b>
                <br />
                <br /> <b> Сэра́ или Сера́ </b>— монастырь в пригороде Лхасы в Тибете (около 5 км от города), один из самых крупных буддийских монастырей и университетов
                школы Гелуг тибетского буддизма. Является местом паломничества. Ранее был одним из трёх «государственных монастырей» Тибета, наряду с Дрепунгом
                и Ганденом. Сейчас монастырь продолжает функционировать; в нём проживает более сотни монахов. Монастырь также является музеем, который посещают
                многочисленные туристы. Монахи регулярно проводят оживлённые философские диспуты.
                <TimetablePhoto src="https://img.opentibet.ru/2025/september/sep-2025-04.jpg" />
                <TimetablePhoto src="https://img.opentibet.ru/2025/september/sep-2025-05.jpg" />

                <br /> <b>Дрепу́нг</b>  — монастырь в пригороде Лхасы в Тибетском автономном районе Китая, примерно в 10 км от города. Самый крупный буддийский монастырь
                и университет школы Гелуг тибетского буддизма, а также место паломничества. Ранее Дрепунг был одним из трёх государственных «великих» монастырей,
                с подворьями по всему Тибету и за его пределами. Территория монастыря составляет 200 тыс. м².
                <TimetablePhoto src="https://img.opentibet.ru/2025/september/sep-2025-06.jpg" />
                <TimetablePhoto src="https://img.opentibet.ru/2025/september/sep-2025-07.jpg" />


                <br /><b> Ночь в Лхасе.</b>
            </TimetableDay>


            <TimetableDay accentColor={accentColor} title="5 день">
                <b>Лхаса (3550м) – Шигадзе (3950м), (ок. 4). Монастырь Ташилунпо. Переезд Шигдзе (3950м) – Ладзе (4000м).</b>

                <br /><br />  <b>Шига́дзе, также Шигацзе́ </b>— Современный большой город, второй по величине в Тибете, столица уезда с населением 880 тыс. чел.
                Основная часть населения – китайцы; тибетцы проживают в своём небольшом квартале и в главной достопримечательности Шигадзе (Shigadze) –
                монастыре Ташилунпо (Tashilhunpo), одном из немногих, переживших Культурную революцию. Над старым кварталом возвышаются живописные руины
                крепости-дзонга. Южнее монастыря расположен летний дворец панчен-ламы, построенный в середине XIX в. в национальном стиле.

                <br /><br /> <b>Монастырь Ташилунпо </b>— Важный центр школы Гелуг. Его основал в 1447 г. Генден Друп, ученик Цонкапы. Позже именно Генден Друпа
                стали считать первым Далай-ламой. В 1652 г. пятый Далай-лама признал за настоятелем монастыря право называться «панчен-ламой» («великим учителем»).
                Это второй по значимости титул в Тибете после Далай-ламы. Именно благодаря данному обстоятельству Ташилунпо (Tashilhunpo) избежал разрушений в 1960-е гг.
                Во времена расцвета в монастыре, и сейчас занимающем площадь более 70 тыс. м2, проживали свыше 5 тыс. монахов; в настоящее время – около 700.
                <TimetablePhoto src="https://img.opentibet.ru/2025/september/sep-2025-08.jpg" />
                <br /><b>  Ночь в Ладзе.</b>
            </TimetableDay>

            <TimetableDay accentColor={accentColor} title="6 день">
                <b>Ладзе (4000м) - Гьиронг (2700м)</b>, 10 ч. Смотровые площадки на Гималайскую гряду и Эверест. Озеро Пелку-Цо. Ночь в Гьиронге.
                <br /><br /><b>Смотровая площадка на Гималайскую гряду.</b>
                <TimetablePhoto src="https://img.opentibet.ru/2025/september/sep-2025-12.jpg" />
                <b>Смотровая площадка на Эверест</b>

                <TimetablePhoto src="https://img.opentibet.ru/2025/september/sep-2025-11.jpg" />
                <b> Озеро Пелку-Цо</b>  — одно из  четырех священных высокогорных озер Тибета. Оно расположено на высоте около 4590  м на  стыке округов
                Гьиронг и Ньялам префектуры Шигадзе, примерно в  250  км от  округа Тингри. Пелку-Цо является крупнейшим озером в  Шигадзе, его площадь
                составляет около 300 км². На юге озера, примерно в 60 км, находится гора Шишабангма.
                <TimetablePhoto src="https://img.opentibet.ru/2025/september/sep-2025-10.jpg" />

                <br /><b> Ночь в Гьиронге.</b>
            </TimetableDay>

            <TimetableDay accentColor={accentColor} title="7 день">
                <b>Гьиронг (2700м). Храм Пакба. Храм Чакра Дамцо.</b>
                <br /><br /><b>Гьиронг</b> расположен в  середине Гималаев на  юго-западе от  Шигадзе. Область граничит с Непалом, его общая площадь составляет 1200 км².
                Протяженность границ — 162 км. Население области — около 25 тыс. человек — распределено между 2 городами, 4 поселками и 42 деревнями.
                <TimetablePhoto src="https://img.opentibet.ru/2025/september/sep-2025-13.jpg" />

                <br /><b>Храм Пакба</b> — этот храм был построен в  VII в. по  приказу Сангцена Гампо, когда непальская принцесса Бхрикути ехала в Лхасу. Главной
                достопримечательностью является сандаловая статуя бодхисаттвы Авалокитешвары — одна из четырех священны статуй. Этот храм — один из двенадцати, фиксирующий лодыжку злобной демоницы, форму которой имела территория Тибета в VIIв.
                <TimetablePhoto src="https://img.opentibet.ru/2025/september/sep-2025-14.jpg" />
                <br /> <b>Чакра Дамцо</b> — это высокогорный храм, расположенный на месте пещер, где долгое время медитировал Миларепа (учитель тибетского буддизма,
                знаменитый йог-практик, поэт), и, по  одной из  версии, именно отсюда он  ушел в высшие миры. Если вы хотите посетить место с сильной
                энергетикой, то это оно. Стоит обратить внимание на  три пещеры, где Миларепа медитировал в течение 3, 6 и 9лет. Подъем к храму и пещерам
                на 200 м занимает примерно 1,5 часа — рассчитывайте на общую продолжительность экскурсии минимум 4 часа.
                <TimetablePhoto src="https://img.opentibet.ru/2025/september/sep-2025-15.jpg" />

                <br />  <b>Ночь в Гьиронге.</b>
            </TimetableDay>

            <TimetableDay accentColor={accentColor} title="8 день">
                <b>Переезд Гьиронг (2700м) – Место рождения Миларепы – Сага (4600м) – Парьянг (4600м).</b>
                <br /><br />  <b>Место рождения великого йогина Миларепы</b>
                <TimetablePhoto src="https://img.opentibet.ru/2025/september/sep-2025-16.jpg" />
                <br />   <b>Сага</b> город в провинции Шигадзе, столица области Сага на высоте 4700м с населением 20 тыс. человек. Основан был в 1960 году.
                Область имеет общую границу с Непалом около 100км. Известность город приобрел, как транзитный пункт для непальских и
                индийских групп, цель которых паломничество к горе Кайлас.
                <br />Город <b>Парьянг</b> (Paryang) находится на высоте 4600 м. Его название переводится с  тибетского как «широкое место».
                Это максимально отдаленная точка от Шигадзе (Shigadze) с возможностью ночевки, которую можно достичь за  день. Город сильно
                разросся за последние несколько лет.
                <br /> <b>Ночь в Парьянге.</b>
            </TimetableDay>

            <TimetableDay accentColor={accentColor} title="9 день">
                <b>Переезд Парьянг (4600м) – Манасаровар. Посещение монастырей Чиу и Госсул. Озеро Ракшас-Тал – Дарчен (4600м).</b>
                <br /><br /><b>Манасаровар</b> — один из самых фантастических природных памятников западного Тибета и одна из главных святынь буддизма в мире наряду
                с заповедной горой Кайлас. Его площадь — около 500 км², максимальная глубина 82 м. По размерам Манасаровар можно сравнить с самыми
                большими высоко- горными озерами нашей планеты, но по степени почитаемости и символическому значению равных ему нет. Для представителей
                сразу четырех религий (буддистов, индуистов, джайнистов и последователей бон) именно здесь, у Кайласа и Манасаровара, бьется сердце Вселенной,
                проходит ось Земли.
                <br /><br /> Приближение к мандале Кайласа рекомендуется начинать с Манасаровар-Коры, ритуального обхода озера, как бы преддверия Кайлас-Коры.
                Паломник сначала совершает омовение в Манасароваре и только потом — обход священной горы. С точки зрения ступенчатой акклиматизации это тоже имеет смысл.

                <TimetablePhoto src="https://img.opentibet.ru/2025/september/sep-2025-19.jpg" />
                <br />Осмотр<b> монастыря Чиу </b>("Птичий монастырь"). Изначально Чиу Гомпа был построен на горе овальной формы Сангдуо Байре («Медная гора»).
                Центральное Место Силы здесь — пещера VIII в., в которой медитировал Падмасамбхава. Здесь он провёл последние семь дней своей
                земной жизни С вершины монастыря открывается великолепные вид на озера Ракшас Тал и Манасаровар (4500 м.), а также на заснеженную вершину Кайласа.
                <TimetablePhoto src="https://img.opentibet.ru/2025/september/sep-2025-21.jpg" />
                <br />  Монастырь <b>Госсул</b> (Gossul Gompa) построен чуть правее пещеры, в которой великий Атиш́а проходил семидневную медитацию.
                <br /> С площадки                перед монастырём открывается потрясающая панорама Кайласа и озера. Отсюда индусы обычно начинают свою Манасаровар-Кору.
                Внутри обители находится ещё одна пещера, где в XIII в. св. Гоцампа из школы Кагью.
                <TimetablePhoto src="https://img.opentibet.ru/2025/september/sep-2025-17.jpg" />


                <br />  Озеро <b>Ракшастал</b> (Ланга-цо; Rakshas Tal, Langa Tso). Расположено слева от Манасаровара на высоте 4575 м.
                Длина его береговой линии составляет примерно 125 км, площадь — 360 км2. Другое название озера — Равана Храда
                связано с правнуком Брахмы Раваной, царём демонов (ракшасов). По одной из легенд, Равана простоял в Ракшастале
                на одной ноге 1000 лет, поклоняясь Шиве, после чего получил от него сверхсилы (сиддхи). По другой, Равана совершал здесь
                ягью (огненное подношение) Шиве, причем приносимой жертвой служила его собственная голова. Шива был настолько поражён его самоотречением,
                что подарил Раване неуязвимость и бессмертие.

                <TimetablePhoto src="https://img.opentibet.ru/2025/september/sep-2025-20.jpg" />

                <br />  <b>Дарчен</b> — Название города (Darchen) в данном случае переводится как «большой флаг». Когда-то на стене местного монастыря,
                уничтоженного в годы Культурной революции, вывешивали огромную тханку с изображением Будды. После распада единого Тибетского
                государства в середине IX в. правители западного Тибета (Нгари) захватили расположенную южнее историческую область Ладакх
                (Ladakh; сегодня входит в состав индийского штата Джамму и Кашмир) и основали Ладакхское царство. В XII в. ладакхские цари
                подарили территорию, на которой расположен Дарчен, бутанскому ламе Друкчену Нгавангу Намгьялу. С этого времени начали возводиться
                монастыри на маршруте Кайлас-Коры.

                <TimetablePhoto src="https://img.opentibet.ru/2025/september/sep-2025-18.jpg" />
                <br />  <b> Ночь в Дарчене.</b>

            </TimetableDay>


            <TimetableDay accentColor={accentColor} title="10 день">
                <b>Дарчен (4600м) - Национальный парк Занда - Тхолинг (3800м).</b>

                <br /><br />     <b>Национальный парк Занда</b>, расположенный между Гималаями и  Трансгималаями, представляет
                собой фантастический мир огромного разнообразия каменных лесов, простирающийся почти на 100 км.
                <TimetablePhoto src="https://img.opentibet.ru/2025/september/sep-2025-22.jpg" />

                <br /> <b>Ночь в Тхолинге.</b>
            </TimetableDay>

            <TimetableDay accentColor={accentColor} title="11 день">
                <b>Тхолинг (3800м) - Цапаранг (Пещерные города королевства Гуге) - Тхолинг (3800м).</b>

                <br /><br />   <b>Цапаранг</b> – древняя столица королевства Гуге, располагавшегося  в западном Тибете. Цапаранг пережил период расцвета в IX и был заброшен в XVII веке.
                <br />
                <br /><br />  <b>Гуге</b> — древнее царство на территории западного Тибета. Его столицами были города Тхолинг и Цапаранг. Когда-то именно через них
                пролегали караванные пути, по  которым к Кайласу следовали многочисленные паломники. Сейчас на  месте некогда богатого царства лежат руины.
                <TimetablePhoto src="https://img.opentibet.ru/2025/september/sep-2025-23.jpg" />

                <br />   <b>Ночь в Тхолинге.</b>
            </TimetableDay>

            <TimetableDay accentColor={accentColor} title="12 день">
                <b>Тхолинг (3800м) - Тритхапури (4300м) - Дарчен (4600м).</b>

                <TimetablePhoto src="https://img.opentibet.ru/2025/september/sep-2025-24.jpg" />
                <br />  <b>Священная земля Тритхапури</b> — эта священная земля на высоте 4300 м  считается границей между материальным миром и  миром богов.
                Название образовано от слова «тиртха», что в  переводе с  санскрита означает «священное место, где есть пруд, озеро или река,
                воды которых считаются святыми». Во время посещения Тиртхи принято совершать омовение в  священных водах. Тиртхапури тесно связано как
                с  Падмасамбхавой, так и  с Дордже Пхагмо — духовной супругой Чакрасамвары.
                <br /> <br /> <b> Ночь в Дарчене.</b>
            </TimetableDay>

            <TimetableDay accentColor={accentColor} title="13 день">
                <b>Кора первый день. Монастырь Чуку Гомпа (4810м). Монастырь Дрира Пхуг (4910м).</b>
                <TimetablePhoto src="https://img.opentibet.ru/2025/september/sep-2025-26.jpg" />
                <br />  Обычно кора начинается с <b>Тарпоче</b>,куда туристов привозит автобус из Дарчена. Это место известно священным кладбищем Драчом Нгагье
                Дуртрё (кладбище 84 махасиддх). Слева от Тарпоче видна большая белая ступа. Это Чортен Кангньи. Считается, что проход через арку
                в ступе (чортене) освобождает путника от последствий всех грехов. Через нескольких километров от Тарпоче показывается мост через Лха Чу.
                Он ведёт к монастырю Чуку, который принадлежит линии Дрикунг школы Кагью.  Он построен в XIII в. в том месте, где, по легенде, из скалы
                появилась белая овца. Монастырь Чуку знаменит нерукотворной статуей Будды Амитабхи (Будды Бесконечного Света, по-тибетски — Нангва Тайе).
                Статуя  сделана» из белого мрамора и считается важной святыней Кайлас коры.



                <br /><br />  Монастырь <b>Дрира Пхуг </b>(Drira Phug), основан в 1213 г. Мастером Гоцангпа. Принадлежит линии Дрикунг школы Кагью. С ним и окружающими
                его горами связано огромное количество легенд. После длительной  медитации в пещере, на месте которой построен монастырь, Мастер произнес:
                «Каждый, кто обопрётся головой в этой пещере, будь то существо в драгоценном человеческом обличье, будь то существо из трёх видов живых
                существ: птиц, грызунов или насекомых, – каждый избежит перерождения в нижних мирах, даже если он попадёт сюда случайно». Говоря это, он оставил
                вмятину своей головой в скале.
                <TimetablePhoto src="https://img.opentibet.ru/2025/september/sep-2025-25.jpg" />


                <br /> <b>Ночь в гестхаусе возле монастыря Дрира Пхуг (4910м).</b>
            </TimetableDay>
            <TimetableDay accentColor={accentColor} title="14 день">
                <b>Кора второй день. Манджушри Кора.</b>
                <TimetablePhoto src="https://img.opentibet.ru/2025/september/sep-2025-27.jpg" />
                <br /> <b>Ночь в гестхаусе возле монастыря Дрира Пхуг  (4910м).</b>
            </TimetableDay>

            <TimetableDay accentColor={accentColor} title="15 день">
                <b>Третий день Коры. Перевал Дромала (5600м). Монастырь Зутрул Пхуг (4750м).</b>
                <br /><br />  Это самый трудный день коры. Он является кульминационным днём коры вокруг Кайласа, так как Вы пересечете перевал
                <b>Дролма-Ла</b> (5600 м), который поразит Вас своей энергетикой. На вершине перевала лежит гигантский кубический камень под названием Пхаванг Мебар.
                Здесь Вы возрождаетесь, так как все грехи прощаются благодаря состраданию Дролмы, богини Милосердия.  <br />При спуске с перевала справа, чуть ниже
                тропы, виднеется священное озеро Йокмо Цо (также Тукдже Дзингбу, Озеро Сострадания, индийцы называют его Гаури Кунд). Гаури Кунд — одно из
                самых высокогорных в мире озёр. В индуизме считается, что озеро создал Шива по просьбе своей супруги Парвати. Далее Вас ждет шестичасовой
                переход к монастырю Зутур пхук (4750 м).


                <TimetablePhoto src="https://img.opentibet.ru/2025/september/sep-2025-29.jpg" />
                <br />  Монастырь <b>Зутрул Пхук</b> (в переводе означает ‘Пещера чудес’) выстроен вокруг пещеры, которая стала
                местом знаменитой победы Миларепы над мастером бона Наро Бончунгом.
                <TimetablePhoto src="https://img.opentibet.ru/2025/september/sep-2025-28.jpg" />

                <br /> <b>Ночь в гестхаусе возле монастыря Зутур Пхук (4750м).</b>
            </TimetableDay>


            <TimetableDay accentColor={accentColor} title="16 день">
                <b>Четвертый день Коры. Монастырь Зутур Пхук (4750м). Возвращение в Дарчен (4600м).</b>
                <br /><br />  <b>Ночь в Дарчене.</b>
            </TimetableDay>

            <TimetableDay accentColor={accentColor} title="17 день">
                <b>Дарчен (4600м) - Ладзе (4000м), ок. 10 часов.</b>
                <br /><br />  <b>Ночь в Ладзе.</b>
                <TimetablePhoto src="https://img.opentibet.ru/2025/september/sep-2025-30.jpg" />
            </TimetableDay>

            <TimetableDay accentColor={accentColor} title="18 день">
                <b>Ладзе (4000м) - Лхаса (3600м), ок. 7 часов.</b>
                <br /><b> Ночь в Лхасе.</b>
            </TimetableDay>

            <TimetableDay accentColor={accentColor} title="19 день">
                <b> Лхаса. Свободный день.</b>
                <TimetablePhoto src="https://img.opentibet.ru/2025/september/sep-2025-31.jpg" />
                <br /><br /><b>  Ночь в Лхасе.</b>
            </TimetableDay>

            <TimetableDay accentColor={accentColor} title="20 день">
                <b>Вылет из Лхасы.</b>
                <TimetablePhoto src="https://img.opentibet.ru/2025/september/sep-2025-32.jpg" />
            </TimetableDay>


        </>
    );
}
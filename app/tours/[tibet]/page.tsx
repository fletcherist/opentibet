"use client"

import { imagesSrc } from "@/components/TibetInfo";
import { AbstractButton, ActionButton, ApplyForm, BackgroundSlider, Footer, LinkTours, Navbar, TimetableDay, TimetablePhoto, TourButton, WithLanguageProvider } from "@/components/components";
import { LINK_APPLY_FORM, LINK_OFFERS, Month, getTourPriceForMonth } from "@/utils/constants";
import { useTranslateFn } from "@/lib/language";

export default function ({ params }: { params: { tibet: string } }) {
    // get month from url
    // get timetable for month
    // render timetable
    // example is tibet-may-2024
    const month = (params.tibet.split('-') ? params.tibet.split('-')[1] : '') as Month | undefined
    const months = ['may', 'june', 'july', 'august', 'september', 'october']
    if (!month || !months.includes(month)) {
        return (
            <main
                lang="ru"
                className="flex min-h-screen flex-col items-center justify-center"
            >
                <h2 className="text-3xl font-semibold text-center max-w-4xl mx-auto mb-10 mt-5">
                    Программа не найдена
                </h2>
            </main>
        )
    }

    const translationsMap: Record<string, string> = {
        'may': 'май',
        'june': 'июнь',
        'july': 'июль',
        'august': 'август',
        'september': 'сентябрь',
        'october': 'октябрь',

    }

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
                                Программа на {translationsMap[month]} 2024 года
                            </div>
                            <div className="text-xl font-light w-9/12 mx-auto text-center leading-7">
                                Мы знаем и любим Тибет. Мы хотим, чтобы как можно больше людей
                                открывали для себя эту священную землю.
                                <br />
                                <br />
                            </div>
                            <div className="flex max-w-[800px] mx-auto items-baseline flex-wrap justify-around pt-8 mb-12">
                                <AbstractButton label="Оставить заявку" anchor={LINK_APPLY_FORM} />
                                <h2 className="text-2xl font-light mt-3 leading-8">
                                    {getTourPriceForMonth(month)}$ за 15 дней
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full max-w-4xl">
                    <div className="bg-white mt-4">
                        <div>
                            <h4 className="font-bold px-3 pt-3 leading-5 text-xl text-black">
                                Пакетный тур OPEN TIBET
                            </h4>
                            <p className="font-semibold mx-3 mb-3 text-blue-500">
                                Всё, что нужно паломнику
                            </p>
                        </div>
                        <TourButton
                            title={`${translationsMap[month].charAt(0).toUpperCase()}${translationsMap[month].slice(1)}`}
                            subtitle={`2—19 ${translationsMap[month]}`}
                            days={15}
                            price={getTourPriceForMonth(month)}
                        />
                    </div>
                    <div className="w-full flex justify-end">
                        <LinkTours />
                    </div>
                </div>
                <div className="pt-10" />
                <div className="max-w-4xl">
                    <TourBasicTimetable />
                    <ApplyForm />
                </div>
                <div className="pt-20" />
                <Footer />
            </main>
        </WithLanguageProvider>
    )
}

const TourBasicTimetable = ({ accentColor = "blue-500" }) => {

    

    const translate = useTranslateFn()
	return (
    
        <>
            <TimetableDay accentColor={accentColor} title="1 день">
			  {translate({
                ru: <>
                Перелет Ченду-Лхаса.  08.15 – 14.00 аэропорт Гонкар (3550м). Трансфер в Лхасу (3600м)
                <br />
                <br />
                Ночь в Лхасе Banakshi hotel
				</>,
                en: <>
                Chengdu-Lhasa Flight. 08:15 – 14:00 Gonkar airport (3550 m). Transfer to Lhasa (3600 m).
                <br />
                <br />
                Overnight in Lhasa, Banakshi hotel.

                 </> 
})}
            </TimetableDay>

			
            <TimetableDay accentColor={accentColor} title="2 день">
			{translate({
                    ru: <>
                Посещение <b>Дворца Потала</b>, храма Джокханг и туристического района Баркор.
                <br />
                <br />
                Лхаса – столица Тибетского автономного округа, один из самых высоко расположенных городов в мире (ок. 3500м над уровнем моря), древний духовный и государственный центр Тибета. В результате административной реформы 1960 г. в составе Тибетского автономного округа был образован городской округ Лхаса, а историческая городская территория стала окружным районом Чэнгуань (Chengguan). В настоящее время население округа составляет ок. 2 млн. человек, почти половина из которых живут непосредственно в историческом городе. Лхаса является также традиционной резиденцией Далай-ламы. Буквально в переводе с тибетского «лхаса» означает «место богов».
                <br />
                <br />
                Дворец Потала – Белый дворец – одна из главных «визитных карточек» Лхасы и Тибета. Это самый большой по площади и самый высокогорный дворец-музей (3700 м) в мире. Входит в Список Всемирного наследия ЮНЕСКО. В настоящее время возведенный в характерном для тибетской архитектуры эклектичном стиле дворец-храм занимает площадь свыше 360 тыс. м2, и в нем насчитывается более 1000 помещений. Многие из них это часовни со скульптурами Далай-лам и их тронные и медитационные залы, а также спальные покои, где бережно хранятся предметы личного быта духовных правителей Тибета. Стены многих комнат украшены фресками; в экспозиции также выставлены многочисленные скульптуры и манускрипты. С балконов открываются прекрасные виды на Лхасу и окружающие горы.
                <br />
                <br />
                <TimetablePhoto src={imagesSrc.potala} title="Дворец Потала" />
                Монастырь Джоканг - это самый почитаемый в Тибете храм (Jokhang), входит в список Всемирного наследия ЮНЕСКО. По преданию его построил Сонгцэн Гампо в 647 г. для своей жены, непальской принцессы Бхрикути. Внутри 4-этажного храма, в многочисленных часовнях, сейчас хранятся свыше 3 тыс. изображений (скульптуры, фрески) Будды, буддистских божеств и тибетских буддистских святых. Основным объектом поклонения является установленная в главном зале нижнего этажа статуя Джово Шакьямуни, изображающая Будду в 12 лет.
                <br />
                <br />
                Ночь в Лхасе, Banakshi hotel.
		
				</>,

                    en: <>

                Visit to Potala Palace, Jokhang Temple and Barkor tourist area.
                <br /> 
                <br /> 

                Lhasa is the capital of the Tibet Autonomous Region, one of the highest cities in the world (about 3500m above sea level), the ancient spiritual and state center of Tibet.As a result of the 1960 administrative reform, Lhasa Urban District was formed as part of the Tibet Autonomous Region, and the historic urban area became Chengguan District. Currently, the population of the county is approx. 2 million people. Almost half of them live directly in the historic city. Lhasa is also the traditional residence of the Dalai Lama. Literally translated from Tibetan, "Lhasa" means "place of the gods".
                <br /> 
                <br /> 

                The Potala Palace, the White Palace, is one of the main landmarks of Lhasa and Tibet. It is the largest in area and the highest altitude palace-museum (3700 meters) in the world. It is in the UNESCO World Heritage List. It is built in the eclectic style of Tibetan architecture. Nowadays the temple-palace occupies an area of over 360 thousand m2, and there are more than 1000 rooms in it. Many of them are chapels with sculptures of the Dalai Lamas and their throne and meditation halls, as well as sleeping quarters, where personal household items of the spiritual rulers of Tibet are carefully preserved. The walls of many rooms are decorated with frescoes; numerous sculptures and manuscripts are also on display. The balconies offer beautiful views of Lhasa and the mountains.
                <br /> 
                <br /> 
                <TimetablePhoto src={imagesSrc.potala} title="Potala Palace" />

                Jokhang Monastery is Tibet's most revered temple (Jokhang) and is a UNESCO World Heritage Site. According to legend, it was built by Songtsen Gampo in 647 for his wife, Nepalese Princess Bhrikuti. Inside the 4-storey temple, in numerous chapels, there are now over 3,000 images (sculptures, frescoes) of Buddha, Buddhist deities and Tibetan Buddhist saints. The main object of worship is the statue of Jowo Shakyamuni installed in the main hall of the lower floor, depicting the Buddha at the age of 12.
                <br /> 
                <br /> 

                Overnight in Lhasa, Banakshi hotel.

</> })}
            </TimetableDay>

            <TimetableDay accentColor={accentColor} title="3 день">
			{translate({
                ru: <>
                
                Посещение монастырей Сера (4300м) и Дрепунг (4400м) .
                <br />
                <br />
                Сэра́ или Сера́ (тиб. སེ་ར) — монастырь в пригороде Лхасы в Тибете (около 5 км от города), один из самых крупных буддийских монастырей и университетов школы Гелуг тибетского буддизма. Является местом паломничества. Ранее был одним из трёх «государственных монастырей» Тибета, наряду с Дрепунгом и Ганденом. Сейчас монастырь продолжает функционировать; в нём проживает более сотни монахов. Монастырь также является музеем, который посещают многочисленные туристы. Монахи регулярно проводят оживлённые философские диспуты.
                <br />
                <br />
                Дрепу́нг (тиб. འབྲས་སྤུངས, вайли: ’Bras-spungs, кит. 哲蚌 Чжэбан, китайская романизация тибетского языка: Zhaibung; согласно официальной тибетско-русской транскрипции — Джэбунг; в монгольском произношении — Брайбун) — монастырь в пригороде Лхасы в Тибетском автономном районе Китая, примерно в 10 км от города. Самый крупный буддийский монастырь и университет школы Гелуг тибетского буддизма, а также место паломничества. Ранее Дрепунг был одним из трёх государственных «великих» монастырей, с подворьями по всему Тибету и за его пределами. Территория монастыря составляет 200 тыс. м².
                <TimetablePhoto src={imagesSrc.drepung} title="Монастырь Дрепу́нг" />
                Ночь в Лхасе в <b>Banakshi hotel</b>

                </>,
                en: <>
                Visiting Sera (4300 m) and Drepung (4400 m) monasteries.
                <br /> 
                <br /> 

                Sera (Tib. སེ་ར) is a monastery in the suburbs of Lhasa in Tibet (about 5 km from the city), one of the largest Buddhist monasteries and universities of the Gelug school of Tibetan Buddhism. It is a place of pilgrimage. It was formerly one of the three "state monasteries" of Tibet, along with Drepung and Ganden. Now the monastery still functions; it is the home for more than a hundred monks. The monastery is also a museum that is visited by many tourists. The monks regularly hold vivid philosophical debates.
                <br /> 
                <br /> 

                Drepung (Tib. འབྲས་སྤུངས, Waili: 'Bras-spungs, Chinese. 哲蚌 Zhebang, Chinese romanization of Tibetan: Zhaibung; according to the official Tibetan-Russian transcription, Jaebung; in Mongolian pronunciation, Braybun) is a monastery in the suburbs of Lhasa in the Tibet Autonomous Region of China, about 10 km from the city. It is the largest Buddhist monastery and university of the Gelug school of Tibetan Buddhism, and a pilgrimage site. Drepung was formerly one of the state's three "great" monasteries, with sub-monasteries throughout Tibet and beyond. The area of the monastery is 200,000 m².
                <br /> 
                <br /> 
                <TimetablePhoto src={imagesSrc.drepung} title="Drepung" />
                Overnight in Lhasa at Banakshi hotel.
                </> })}				
				
            </TimetableDay>

            <TimetableDay accentColor={accentColor} title="4 день">
			{translate({
                ru: <>
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
				</>,
				
				en: <>

                Transfer from Lhasa (3550 m) to Shigadze (3950 m) /350km 5 hours/. Visiting Tashilunpo monastery.
                <br /> 
                <br /> 

                Shigadze, also Shigatze (Tib. གཞིས་ཀ་རྩེ་, Chinese 日喀则, pinyin Rìkāzé, pall. Zhikaze) is a modern large city, the second largest in Tibet, and the capital of a county with a population of 880,000. Most of the population is Chinese; Tibetans live in their own small neighborhood and in the main attraction of Shigadze - Tashilhunpo Monastery, one of the few monasteries that survived the Cultural Revolution. The picturesque ruins of the fortress-dzonga rise above the old quarter. South of the monastery is the summer palace of the Panchen Lama, built in the mid-19th century in the national style.
                <br /> 
                <br /> 

                Tashilunpo Monastery is an important center of Gelug school. It was founded in 1447 by Genden Drup, a disciple of Tsongkapa. Later it was Genden Drup who was considered to be the first Dalai Lama. In 1652, the fifth Dalai Lama recognized the right of the monastery’s abbot to be called "Panchen Lama" ("great teacher"). This is the second most important title in Tibet after the Dalai Lama. It was due to this fact that Tashilhunpo (Tashilhunpo) escaped destruction in the 1960s. In its heyday, the monastery, which still occupies an area of more than 70,000 m2, was home to more than 5,000 monks; at present, there are about 700 of them.
                <br /> 
                <br /> 
                <TimetablePhoto src={imagesSrc.tashilhunpo} />
                Overnight in Shigadze, at Wan rui hotel.

                </> })}
            </TimetableDay>

            <TimetableDay accentColor={accentColor} title="5 день">
			{translate({
                    ru: <>
                
                Переезд Шигадзе – Сага – Парьянг (4500м) (12 часов)
                <br />
                <br />
                Сага город в провинции Шигадзе, столица области Сага на высоте 4600м с населением 20 тыс. человек. Основан был в 1960 году. Область имеет общую границу с Непалом около 100км. Известность город приобрел, как транзитный пункт для непальских и индийских групп, цель которых паломничество к горе Кайлас.
                <br />
                <br />
                Парьянг (Paryang) находится на высоте 4610 м переводится с тибетского как «Широкое место»
                Это максимально отдалённая точка от Шигадзе (Shigadze) с возможностью ночёвки, которую можно достичь за день.
                <br />
                <br />
                Ночь в Paryang Hotel
				</>,
				
				en: <>

                Transfer Shigadze - Saga - Pariang (4500 m) /12 hours/
                <br /> 
                <br /> 

                Saga city in Shigadze province is the capital of Saga region at an altitude of 4600 m with a population of 20 thousand people. It was founded in 1960. The region has a common border with Nepal about 100 km. The city became famous as a transit point for Nepalese and Indian groups, whose purpose is pilgrimage to Mount Kailas.
                <br /> 
                <br /> 

                Paryang is located at an altitude of 4610 meters and translated from Tibetan as «Wide Place». It is the farthest point from Shigadze with the possibility of overnight stay, which can be reached in a day.
                <br /> 
                <br /> 

                Overnight at Paryang Hotel.
                </> })}
            </TimetableDay>

            <TimetableDay accentColor={accentColor} title="6 день">
			{translate({
                    ru: <>
                
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
				</>,
				en: <>

                Trek Pariang (4500 m) - Dharchhen (4600 m) - Purang (3700 m).
                <br /> 
                <br /> 

                Overcoming the first passes over 5000 meters high, Lake Manasarovar and the first views of the sacred Kailas.
                <br /> 
                <br /> 

                Tour of Chiu Monastery («Bird Monastery»). Chiu Gompa was originally built on the oval-shaped mountain Sangduo Baire («Copper Mountain»). The central Seat of Power here is the 8th century cave where Padmasambhava meditated. Here he spent the last seven days of his earthly life. There is a magnificent view of the lakes Rakshas Tal and Manasarovar (4500 m), as well as the snow-capped peak of Kailash, from the top of the monastery.
                <br /> 
                <br /> 

                The Gossul Gompa monastery is built just to the right of the cave where the great Atishya experienced his seven-day meditation. From the platform in front of the monastery you can see a stunning panorama of Kailas and the lake. Hindus usually start their Manasarovar Kora from here. Inside the monastery is another cave where St. Gotzampa of the Kagyu school was ordained in the 13th century.
                <br /> 
                <br /> 
                <TimetablePhoto src={imagesSrc.chiu}/>
                Overnight in Purang. Holiday Hotel.
</> })}
				
            </TimetableDay>

            <TimetableDay accentColor={accentColor} title="7 день">
			{translate({
                ru: <>
                
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
				</>,
		        en: <>
                Visit to Korchag Monastery - return to Darcen - stop at Rakshas Tal Lake on the way.
                <br /> 
                <br /> 

                Khorchag Monastery Khorchag Monastery, also called Khorchag Monastery is a Buddhist monastery in Khorchag (pinyin: Korkag) town of Burang county, Ngari prefecture in western Tibet. 12th century Khorchag Monastery. It is very famous sacred place. It was built by the great translator Rinchen Tsangpo. This monastery first belonged to the Kadam lineage and later to the Sakya lineage. There is a statue of Jobo Jampa Dorje (Bodhisattva Manjushri) in the monastery, which was blessed by Rinchen Tsangpo himself.
                <br /> 
                <br /> 

                Rakshastal Lake (Langa Tso; Rakshas Tal, Langa Tso). It is located to the left of Manasarovar at an altitude of 4,575 meters. It has a shoreline length of about 125 km and an area of 360 km2. Another name of the lake, Ravana Hrada, is associated with Brahma's great-grandson Ravana, the king of demons (rakshasas). According to one legend, Ravana stood in Rakshastala on one leg for 1000 years, worshipping Shiva, after which he received superpowers (siddhis) from him. According to another, Ravana performed a yagya (fire offering) to Shiva here, with his own head as the sacrifice. Shiva was so impressed by his self-denial that he granted Ravana invulnerability and immortality.
                <br /> 
                <br /> 
                <TimetablePhoto src={imagesSrc.rakshastal} />
                Darchen - The name of the town (Darchen) in this case is translated as "big flag". Once, on the wall of the local monastery, which was destroyed during the Cultural Revolution, a huge thangka with an image of Buddha was hung. After the collapse of the unified Tibetan state in the middle of the IX century, the rulers of western Tibet (Ngari) seized the historical region of Ladakh (Ladakh; today it is part of the Indian state of Jammu and Kashmir) located to the south and founded the Ladakh kingdom. In the 12th century, the Ladakh kings gave the territory (on which Darchhen is located) to the Bhutanese lama Drukchen Ngawang Namgyal. From this time, monasteries on the Kailas-Kora route began to be built.
                <br /> 
                <br /> 
                Overnight in Dharchhen. New Castle hotel.
</> })}		
				
            </TimetableDay>

            <TimetableDay accentColor={accentColor} title="8 день">
			{translate({
                    ru: <>
                
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
				</>,
	            en: <>

                Kora - first day.
                <br /> 
                <br /> 

                Kora usually starts from Tarpoche, where tourists come by bus from Darcen. This place is famous for the sacred cemetery of Drachom Ngagye Durtryo (cemetery of 84 mahasiddhas).To the left of Tarpoche you can see a big white stupa. This is Chorten Kangnyi. It is believed that passing through the arch in the stupa (chorten) absolves/forgives the traveler all the sins.
                <br /> 
                <br /> 
                <TimetablePhoto src={imagesSrc.nandi} />

                After a few kilometers from Tarpoche, a bridge over the Lha Chu is seen. It leads to Chuku Monastery, which belongs to the Drikung lineage of the Kagyu school. It was built in the 13th century in the place where, according to legend, a white sheep emerged/came from a rock. The Chuku Monastery is famous for the statue of Amitabha Buddha (Buddha of Infinite Light, in Tibetan - Nangwa Taye). The statue is made of white marble and is considered an important shrine of Kailas kora.
                <br /> 
                <br /> 

                Drira Phug Monastery (Drira Phug) was founded in 1213. (Master Gottsangpa). It belongs to the Drikung lineage of the Kagyu school. A great number of legends are associated with it and the surrounding mountains. After a long meditation in the cave on the site of which the monastery is built, the Master said: «Everyone who rests his head in this cave, whether he is a being in precious human form, whether he is a creature of the three kinds of living beings: birds, gnawers or insects, everyone will avoid rebirth in the lower worlds, even if he comes here by chance». Saying that, he left a dent with his head in the rock.
                <br /> 
                <br /> 

                Overnight at New Guest Norh Face (4950 m).


</> })}			
				
            </TimetableDay>

            <TimetableDay accentColor={accentColor} title="9 день">
			{translate({
                    ru: <>
                
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
				</>,
				en: <>
                Kora - day two.
                <br /> 
                <br /> 


                This is the most challenging day of the kora. It is the climax day of the kora around Kailas as you will cross the Drolma La pass (5600m), which will amaze you with its energy. At the top of the pass lies a giant cubic stone called Phawang Mebar.
                <br /> 
                <br /> 

                Here you come through rebirth as all sins are forgiven through the compassion of Drolma, the Goddess of Mercy. As you descend from the pass, the sacred lake Yokmo Tso (also Tukje Jingbu, Lake of Compassion, the Indians call it Gauri Kund) can be seen on the right, just below the trail. Gauri Kund is one of the highest altitude lakes in the world. In Hinduism, it is believed that the lake was created by Shiva at the request of his consort Parvati. Next, a six-hour trek to Zutrul Phuk Monastery (4,750 meters) awaits you.
                <br /> 
                <br /> 

                Zutrul Phuk Monastery (meaning 'Cave of Wonders') is built around the cave that was the site of Milarepa's famous victory over the Bon master Naro Bonchung. Overnight at Zutur Phuk Monastery, New Guesthouse (4700 м).

</> })}				
            </TimetableDay>

            <TimetableDay accentColor={accentColor} title="10 день">
			{translate({
                ru: <>
                
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
				</>,
				
	    	en: <>

            Final day of kora - "finish line". The road goes downhill. Return to Darchhen, Visiting Gyandrak and Serlung by jeep. Optional.
            <br /> 
            <br /> 

            Gyangdrak Gompa abode on a hill in the Gyangdrak-chu valley makes a fantastic impression. Straight translation of the name is "the limit of hearing”/ “earshot". According to legends, the valley is named that way because those in it can absorb the sounds of the surrounding sacred places. The monastery (appeared here in 1215), and for 800 years belongs to the tradition of Drikung Kagyu school.
            <br /> 
            <br /> 

            Serlung Gompa is the smallest of the five monasteries around Kailas; its buildings are arranged in a rectangular shape. After a complete renovation in 2012, the main temple with a statue of Padmasambhava is in the courtyard on the right. Next to the monastery is a large white Jangchub stupa; a similar one adorns the opposite bank of the river of the same name. There are only two monks at Serlung Gompa.
            <br /> 
            <br /> 

            Overnight in Darchen, New Castle hotel.

</> })}		
            </TimetableDay>

            <TimetableDay accentColor={accentColor} title="11 день">
			{translate({
                ru: <>
                
                Переезд Дарчен – Ладзе (около 14 часов)
                <br />
                <br />
                Обычно из Ладзе туристы направляются на юг, к непальской границе и базовому лагерю Эвереста.
                За последние несколько лет город стало не узнать. Из маленького провинциального городка он превратился в современный китайский город. Рядом с Лхадзе пролегают русла трёх рек. Ближайшая высочайшая вершина – гора Якри высотой 5656 м к северу от Лхадзе.
                <br />
                Единственной достопримечательностью является монастырь Чангмоче на западе города. Он принадлежит последователям «красношапочной» традиции школы Кагья.
				
				</>,
				
				en: <>
                Transfer Darchen - Ladze /about 14 hours/.
                <br /> 
                <br /> 

                Usually from Ladze tourists head south to the Nepalese border and Everest base camp. Over the past few years, the town has become unrecognizable. It has changed from a small provincial town into a modern Chinese city. Three riverbeds run near Lhadze. The nearest highest peak is Mount Yakri, 5656 meters north of Lhadze.
                <br /> 
                <br /> 

                The only landmark is the Changmoche Monastery in the west of the city. It belongs to the followers of the "red-robed" tradition of the Kagya school.

</> })}
            </TimetableDay>

            <TimetableDay accentColor={accentColor} title="12 день">
			{translate({
                ru: <>
                
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
				</>,
		    	en: <>
                Travel Lhasa - Gyantse - Lhasa
                <br /> 
                <br /> 


                Visit to Pelkhor Chede Monastery and Yamdrok Gyantse Lake - Gyantse was once the third most important and populous city in Tibet (after Lhasa and Shigadze). It is located 250 km southwest of Lhasa at an altitude of 3977 meters, population - more than 50 thousand people. The old city is located in a valley formed by low mountains, on one of which (with steep slopes) in the IX century fortress dzong was erected, and at the foot of the other, more gentle, in the XIV-XV centuries a monastery Palcho (Pelkhor Chode) was raised as well.
                <br /> 
                <br /> 


                Pelkhor Chode Monastery (abbreviated Pelcho or Palcho) is a large Buddhist monastery in Gyangdze township in Tibet. It houses the famous Kumbum Stupa with 108 inner halls and altars on four floors. It has preserved numerous Buddhist sculptures in Nepali style. The architecture and paintings of the Kumbum stupa follow the symbolism of the Sakya school, particularly the Drubtat Kantu, a collection of tantras of this school. The monastery was founded in 1418 by the first Panchen Reldrup. The whole Pelkor-Cheude complex included 15 monasteries of different schools, mainly Gelug, Kadam and Sakya. The monks of these three schools share a common hall for debates and meetings and rooms for the study of Buddhism.
                <br /> 
                <br /> 
                <TimetablePhoto src={imagesSrc.pelkhor}  maxHeight={400} />

                Yamdrok Lake is one of the sacred lakes in Tibet. Located at an altitude of 4,408 meters, the name Yamdrok means "turquoise lake of Tibet". Yamdrok-(Yum)tso resembles an octopus in shape; its head is the northern part of the lake. A monastery has been erected on one of the 9 islands, the main relic of which is a stone with the footprint of Padmasambhava's feet.

                Overnight in Lhasa at Banakshi hotel.

</> })}	
				
            </TimetableDay>

            <TimetableDay accentColor={accentColor} title="13 день">
			{translate({
                ru: <>
                
                Лхаса свободный день.
                <br />
                <br />
                Ночь в Лхасе Banakshi hotel
				</>,
				en: <>
                Free day in Lhasa.
                <br /> 

                Overnight in Lhasa Banakshi hotel
</>  })}
            </TimetableDay>


            <TimetableDay accentColor={accentColor} title="14 день">
			{translate({
                ru: <>
                Возвращение, авиаперелет в Ченду.
				</>,
	            en: <>
                Return flight to Chengdu.
</> 
})}			
				
            </TimetableDay>
			</>
       
    );
};

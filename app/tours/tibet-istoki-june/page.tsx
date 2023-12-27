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
                                    3600$ за 21 день
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
                            title="Июнь"
                            subtitle="2—21 июня"
                            days={24}
                            price={"от 4500"}
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
    const translate = useTranslateFn()
    return (
        <>
            {translate({
                ru: <>
                    <div style={{ textAlign: "center" }}>
                        <b>Эксклюзивный маршрут в июне 2024
                            <br />Истоки четырех священных рек и исследование мандалы Кайласа.
                            <br />Организатор тура тибетское агентство «Таши Делек»
                            <br />Подарите себе возможность очутиться в самом древнем и сакральном месте силы планеты.
                            <br />Группу сопровождает Перчуков Алексей, автор двух путеводителей по Тибету.

                            <br />Большинство паломников, приезжающих в Тибет, осматривают лишь самые популярные туристические места.
                            <br />У вас есть уникальная возможность оказаться там, куда обычному туристу не попасть.
                            <br />Мы отправимся в путешествие к истокам 4 великих рек -Брахмапутра, Карнали (приток Ганга), Инд и Сатледж (приток Инда).
                            <br />Они и священный Кайлас составляют основу сакральной геометрии этой земли.</b>
                    </div>
                    <br />
                    <br />В радиусе 125 км от самой священной горы Азии Кайлас находятся истоки четырех крупных рек: Брахмапутры (Тамчок Цангпо), Инда (Сенге Цангпо), Сатледжа (Лангчен Цангпо) и Карнали (Мапча Цангпо). Это единственный регион на нашей планете, где истоки четырех крупных речных систем находятся столь близко друг от друга
                    <br />Традиционный, или ритуальный означает то, что тибетцы считают именно данное место истоком (физическим и энергетическим) и совершают сюда специальные паломничества. Эти истоки, как правило, не совпадают с географическими истоками рек.
                    <br />При анализе спутниковых изображений высокого разрешения региона горы Кайлас был обнаружен ряд интересных геометрических закономерностей расположения этих истоков, образующих огромную природную мандалу.
                    <br />Географические истоки рек Инд (приток Бокхар), Карнали (приток Чу Карпо), Брахмапутры и Сатледжа (приток Таг) расположены на окружности радиусом около 74 км с центром в северо-западной части озера Манасаровар, рядом с истоком реки Ганга Чу, соединяющей озера Манасаровар и Ракшас Тал, и холмом, на котором расположен легендарный монастырь Чиу.
                    <br />Традиционные истоки Тамчок Кабаб, Мапча Кабаб и Сенге Кабаб образуют равнобедренный треугольник с равными сторонами длиной около 113 км, а линия от Мапча Кабаб (Карнали) к Сенге Кабаб проходит через гору Кайлас и делится ей в золотой пропорции 0,618.

                    <TimetablePhoto src="https://img.opentibet.ru/TourTibetExlusiveJune/image01.png" title="Карта" />
                </>,
                en: <>
                    <div style={{ textAlign: "center" }}>
                        <b>«Tash Delek agency» presents Exclusive itinerary in June 2024.
                            <br /> The origins of the four sacred rivers and an exploration of the mt. Kailas Mandala
                            <br /> The tour is organized by a Tibetan travel agency Tashi Delek (Lahasa).
                            <br /> A great and once in a life time opportunity to indulge yourself in the most    ancient, sacred and powerful region of the planet.
                            <br />The group is accompanied by Alexei Perchukov two times author of the famous "Tibet Guide Book".
                        </b>
                    </div>
                    <br />Most pilgrims coming to Tibet see only the common and popularly known     tourist places. This however is a unique opportunity to be where the average tourist cannot go.
                    <br />We plan to travel to the source of 4 great rivers - the Brahmaputra, the Karnali (a tributary of the Ganges), the Indus and the Sutlej (a tributary of the Indus). These and the sacred Kailas form the basis of the sacred geometry of this land.

                    <br />Within radius of 125 km from the most sacred mountain of Asia, Kailas, originate four major rivers:
                    Brahmaputra (Tamchok Tsangpo), Indus (Senge Tsangpo), Sutleja (Langchen Tsangpo) and Karnali (Mapcha Tsangpo). This is the only region on our planet where the sources of four large river systems are located so close to each other.
                    <br />There are 2 types of sources: traditional and geographical.
                    <br />Traditional means that Tibetans consider this place to be the source (physical and energetic) and make special pilgrimages here. These sources, as a rule, do not match with the geographical sources of rivers.
                    <br />When analyzing high-resolution satellite images of the Kailas Mountain region, a number of interesting geometric patterns of the location of these sources, forming a huge natural mandala, were discovered.
                    <br />The geographical sources of the Indus (Bokhar tributary), Karnali (Chu Karpo tributary), Brahmaputra and Sutleja (Tag tributary) rivers are located on a circle within a radius of about 74 km centered in the northwestern part of Lake Manasarovar, near the source of the Ganga Chu channel, connecting Lakes Manasarovar and Rakshas Tal, and the hill where the legendary Chiu Monastery located.
                    <br />The traditional sources of Tamchok Kabab, Mapcha Kabab and Senge Kabab form an isosceles triangle with two equal sides about 113 km long, the third side that joins Mapcha Kabab (Karnali) to Senge Kabab passes through Mount Kailas and is divided by it in the golden ratio of 0.618.

                    <TimetablePhoto src="https://img.opentibet.ru/TourTibetExlusiveJune/image01.png" title="Maps" />
                </>


            })}

            <TimetableDay accentColor={accentColor} title="1 день">
                {translate({
                    ru: <>
                        <b>Перелет Москва -Ченду</b>
                        <br />
                        <br />Перелет Ченду-Лхаса .  8.15 – 14.00 аэропорт Гонкар (3550м) Трансфер в Лхасу (3600м)
                        <br />Ночь в Лхасе <b>Tibet hotel</b>


                    </>,
                    en: <>Flight Chengdu-Lhasa. 8.15 –14.00
                        Gonkar Airport (3550m) Transfer to Lhasa (3600m)
                        Overnight stay in Lhasa Tibet hotel </>
                })}
            </TimetableDay>


            <TimetableDay accentColor={accentColor} title="2 день">
                {translate({
                    ru: <>
                        <b>Посещение монастыря Джокханг</b>
                        <br />
                        <br />Лха́са (произносится l̥ásə, тиб. ལྷ་ས, Вайли lhasa, кит. трад. 拉薩, упр. 拉萨, пиньинь: Lāsà) — городской округ в Тибетском автономном районе КНР, место размещения правительства автономного района, бывшая столица независимого Тибетского государства. Лхаса является также традиционной резиденцией Далай-ламы. Буквально в переводе с тибетского «лхаса» означает «место богов».
                        <TimetablePhoto src="https://img.opentibet.ru/TourTibetExlusiveJune/image02.jpeg" title="Джокханг" />
                        <br /><b>Монастырь Джоканг</b> - это самый почитаемый в Тибете храм (Jokhang), входит в список Всемирного наследия ЮНЕСКО. По преданию его построил Сонгцэн Гампо в 647 г. для своей жены, непальской принцессы Бхрикути. Внутри 4-этажного храма, в многочисленных часовнях, сейчас хранятся свыше 3 тыс. изображений (скульптуры, фрески) Будды, буддистских божеств и тибетских буддистских святых. Основным объектом поклонения является установленная в главном зале нижнего этажа статуя Джово Шакьямуни, изображающая Будду в 12 лет.
                        <TimetablePhotoDouble
                            maxHeight={400}
                            src1={"https://img.opentibet.ru/TourTibetExlusiveJune/image03.jpeg"}
                            src2={"https://img.opentibet.ru/TourTibetExlusiveJune/image04.jpeg"}
                        />
                        Ночь в Лхасе, <b>Tibet hotel</b>.
                    </>,
                    en: <>Lhasa. Visiting Jokhang Temple,
                        Lhasa is a city district in the Tibet Autonomous Region of the People's Republic of China, the seat of the government of the autonomous Region, the former capital of the independent Tibetan state. Lhasa is also the traditional residence of the Dalai Lama. Literally translated from Tibetan, "Lhasa" means "Place of the Gods."



                        Jokhang Monastery, the most revered temple in Tibet (Jokhang), is included in the UNESCO World Heritage List.
                        According to a legend, Songtsen Gampo built it in 647 for his wife, the Nepalese Princess Bhrikuti. Inside the 4-storey temple, more than 3 thousand images (sculptures, frescoes) of Buddha, Buddhist deities and Tibetan Buddhist saints are stored in numerous chapels, now. The main object of worship is the statue of “Jowo Shakyamuni” installed in the main hall of the lower floor, depicting the Buddha at the age of 12.


                        Overnight in Lhassa, Tibet hotel. </>
                })}

            </TimetableDay>

            <TimetableDay accentColor={accentColor} title="3 день">
                {translate({
                    ru: <>
                        <b>Лхаса</b>
                        <br />
                        <br />Экскурсия в <b>Драк Йерпа (4400м)</b> в окрестностях Лхасы.
                        <br />Медитационные пещеры <b>Драк Йерпа</b> - одно из самых святых мест центрального Тибета, расположенное на склонах гор в примерно двух часах езды от Лхасы. Начиная с VII века в пещерах медитировали, царь Сонгцен Гампо, индийский буддийский мыслитель Атиша, великий махасиддха Гуру Падмасамбхава, просветлённая йогини и дакини Еше Цогъял. В этих пещерах проживали, изучали буддизм и уходили в затворничество отшельники, монахи и монахини на протяжении десяти веков.
                        <TimetablePhotoDouble
                            maxHeight={400}
                            src1={"https://img.opentibet.ru/TourTibetExlusiveJune/image05.jpeg"}
                            src2={"https://img.opentibet.ru/TourTibetExlusiveJune/image06.jpeg"}
                        />
                        Ночь в Лхасе, <b>Tibet hotel</b>.
                    </>,
                    en: <> Lhasa
                        Excursion to Drak Yerpa (4400m) in the surroundings of Lhasa.
                        Drak Yerpa Meditation Caves is one of the holiest places in central Tibet, located on the slopes of the mountains about two hours drive from Lhasa. Since the 7th century, King Songtsen Gampo, the Indian Buddhist guru Atisha, the great Mahasiddha Guru Padmasambhava, the enlightened yogini and dakini Yeshe Tsogyal have been meditating
                        in the caves. Hermits, monks and nuns have lived in these caves, studied Buddhism and went into seclusion within  ten centuries.



                        Overnight in Lhassa, Tibet hotel.</>
                })}
            </TimetableDay>

            <TimetableDay accentColor={accentColor} title="4 день">
                {translate({
                    ru: <>
                        <b>Переезд Лхаса (3550 м)– Damshung - Озеро НамЦо (4300 м)</b>
                        <br />
                        <br /><b>Озеро НамЦо (Небесное Озеро)</b>- второе по величине в Тибете и в Китае. Максимальная глубина озера составляет 107 метров.  Дорога к озеру подразумевает пересечение Ньенчен Тангла, великолепного горного хребта Тибета, протяженность которого с востока на запад составляет 500 км. Заснеженные вершины хребта окружают Намтсо на юге, и его высочайшая гора, Ньенчен Тангла (7088 м), возвышается над озером.
                        <br />Это самое высокогорное озеро в мире и второе по площади в Тибете.Покровительницей озера Намцо является богиня Намцо Кьонгму, которая, по тибетскому поверью, является эманацией бодхисатвы сострадания Авалокитешвары.
                        <TimetablePhoto src="https://img.opentibet.ru/TourTibetExlusiveJune/image07.png" title="" />
                        Город <b>Дамшунг</b> уезд городского округа Лхаса Тибетского автономного района КНР. Уезд был создан в 1960 году путём объединения трёх тибетских дзонгов. Известен тем, что здесь проводятся фестивали, гонки на яках и лошадях.

                        <br /><br />Ночь в <b>Damshung. Grand hotel</b>

                    </>,
                    en: <> Transfer Lhasa (3550 m) –Damshung -Namtso Lake (4300 m)
                        Namtso Lake (Heaven Lake) is the second largest one in Tibet and in China. The deepest point of the lake is 107 meters. The road to the lake involves crossing Nyenchen Tangla, the magnificent mountain range of Tibet, whose length/range from east to west is 500 km. The snow- capped peaks of the ridge surround Namtso in the south, and its highest mountain, Nyenchen Tangla (7088 m), rises above the lake.
                        It is the highest mountain lake in the world and the second largest in Tibet.
                        The patroness of Nam tso (lake) is the goddess Namtso Kyongmu, who, according to Tibetan belief, is an emanation of the bodhisattva of compassion Avalokiteshvara.




                        Damhung City is a county of the Lhasa Urban District of the Tibet Autonomous Region of the People's Republic of China. The county was created in 1960 by unification of three Tibetan dzongs. It is known for the fact that festivals, yak and horse races are held here.
                        Overnight in Damshung. Grand hotel</>
                })}

            </TimetableDay>


            <TimetableDay accentColor={accentColor} title="5 день">
                {translate({
                    ru: <>
                        <b>Переезд Damshung – Namtso North – Nyma</b>
                        <br />
                        <br /> <b>Namtso North</b> - Северная часть озера предназначена для омовения. Боль Здесь расположен потрясающий элемент рельефа, известный под именем Танглай Гьяго (Танг-лхаи гья-го) - естественный арочный проход, установленный на каменистой площадке, выступающей в озеро. Говорят, что это образование подобно слону, с которым оно имеет необыкновенное сходство.
                        <TimetablePhotoDouble
                            maxHeight={400}
                            src1={"https://img.opentibet.ru/TourTibetExlusiveJune/image08.png"}
                            src2={"https://img.opentibet.ru/TourTibetExlusiveJune/image09.png"}
                        />
                        Ночь в <b>Nyma Star centure Hotel</b>.
                    </>,
                    en: <>Transfer Damshung – Namtso North – Nyma
                        Namtso North -The northern part of the lake is for ablution. There is also a stunning relief element here, known as Tanglai Gyago (Tang-lhai gya-go) -a natural arched passage installed on a rocky platform protruding into the lake. It is said that this formation has an extraordinary resemblance with an elephant.


                        Overnight in Nyma. Star centure Hotel. </>
                })}
            </TimetableDay>

            <TimetableDay accentColor={accentColor} title="6 день">
                {translate({
                    ru: <>
                        Переезд <b>Nyma – Dangra lake – Tsochen</b>
                        <br />
                        <br />Мы проедем по священной для Бонпо территории, где расположены горный массив Тарго и озеро Дангра. Дангра Цо (4540 м, длина около 70 км) – «Океанское бирюзовое озеро». Район горы Тарго и озера Дангра исключительно красив.  Горный массив Тарго образован шестью вершинами. Кора (обход) вокруг горы Тарго включает переход через один перевал — Баронг (или Парунг) Ла.
                        <TimetablePhotoDouble
                            maxHeight={400}
                            src1={"https://img.opentibet.ru/TourTibetExlusiveJune/image10.jpeg"}
                            src2={"https://img.opentibet.ru/TourTibetExlusiveJune/image11.jpeg"}
                        />
                        <b>Дангра Цо также считается озером души Шанг-Шунга</b>, что означало его неразрывную связь с жизнью королевства. Вода озера немного соленая и имеет зеленовато-голубой цвет. На берегу озеро находится очень древний бонский монастырь.
                        <TimetablePhotoDouble
                            maxHeight={400}
                            src1={"https://img.opentibet.ru/TourTibetExlusiveJune/image12.jpeg"}
                            src2={"https://img.opentibet.ru/TourTibetExlusiveJune/image13.jpeg"}
                        />

                        Благодаря крайней изолированности района здесь до сих пор сохранились обычаи и жизненный уклад добуддийской религии Бонпо. Интересно то, что в этом регионе одновременно сосуществуют две самые ранние религии Тибета (Бон и Ньингмапа). Встречаются стандартные старые гестхаузы. Правда все они с великолепным видом на озеро. И атмосфера озера позволяет забыть о многих недостатках быта.
                        <TimetablePhotoDouble
                            maxHeight={400}
                            src1={"https://img.opentibet.ru/TourTibetExlusiveJune/image14.jpeg"}
                            src2={"https://img.opentibet.ru/TourTibetExlusiveJune/image15.jpeg"}
                        />
                        <b>Tsochen (Цочен)</b> – город и название уезда в переводе с тибетского означает «большое озеро». уезд в округе Нгари, Тибетский автономный район.
                        <br /> Посещение монастыря <b>Tsochen Mendong</b>. Монастырю больше 200 лет. Настоятелю монастыря около 100лет.
                        Ночь в  <b>Tsochen Hanting hotel </b>
                    </>,
                    en: <>Nyma –Dangra lake –Tsochen transfer
                        We will drive through the territory sacred to Bonpo, where the Targo mountain range and Dangra Lake are located. Dangra Tso (4540m, length about 70 km) –"Ocean turquoise lake". The area of Mount Targo and Lake Dangra is exceptionally beautiful. The Targo mountain range is formed by six peaks. The kora (detour) around Mount Targo includes crossing one pass —Barong (or Parung) La.
                        .

                        .
                        Dangra Tso is also considered the lake of the soul of Shang Shung, which meant its indissoluble connection with the life of the kingdom. The water of the lake is slightly salty and has a greenish-blue color. On the shore of the lake an ancient Bon monastery is located. Due to the extreme isolation of the area, the customs and lifestyle of the pre-Buddhist Bonpo religion are still preserved here. Interestingly, the two earliest religions of Tibet (Bon and Nyingmapa) coexist in this region at the same time

                        There are standard old guesthouses. However, they all have a magnificent view of the lake. The calm and serene atmosphere around the lake, makes one slur over the hustle and concerns of everyday life.

                        Tsochen (Tsochen), a country that means "big lake" in Tibetan is located in the South East of Ngari perfecture, Tibet Autonomous Region.

                        Visit to Tsochen Mendong Monastery. The monastery is more than 200 years old. Lama of the monastery more than 100 years old.

                        Overnight in Tsochen Hanting hotel </>
                })}
            </TimetableDay>

            <TimetableDay accentColor={accentColor} title="7 день">
                {translate({
                    ru: <>
                        <b>День 7: Переезд Tsochen –Darchen </b>
                        <br />
                        <br /><b>Дарчен</b> - Название города (Darchen) в данном случае переводится как «большой флаг». Когда-то на стене местного монастыря, уничтоженного в годы Культурной революции, вывешивали огромную тханку с изображением Будды.
                        <br />После распада единого Тибетского государства в середине IX в. правители западного Тибета (Нгари) захватили расположенную южнее историческую область Ладакх (Ladakh; сегодня входит в состав индийского штата Джамму и Кашмир) и основали Ладакхское царство. В XII в. ладакхские цари подарили территорию, на которой расположен Дарчен, бутанскому ламе Друкчену Нгавангу Намгьялу. С этого времени начали возводиться монастыри на маршруте Кайлас-Коры.
                        <TimetablePhoto src="https://img.opentibet.ru/TourTibetExlusiveJune/image16.jpeg" title="" />
                        Ночь в <b>Дарчен, Champion League hotel 5*</b>.
                    </>,
                    en: <>Transfer Tsochen-Darchen
                        Darchen -The name of the city (Darchen) in this case translates as "big flag". Once on the wall of the local monastery, destroyed during the Cultural Revolution, hung a huge thangka with the image of the Buddha. After the collapse of the unified Tibetan state in the middle of the IX century, the rulers of western Tibet (Ngari) seized the historical region of Ladakh located to the south (Ladakh; today is a part of the Indian state of Jammu and Kashmir) and founded the Ladakh Kingdom. In the XII century, the Ladakh kings presented to lama Drukchen Ngawang Namgyal the Bhutanese territory on which Darchen is located. Since that time, monasteries have been built on the Kailas-Kora route.



                        Overnight in Darchen, Champion League hotel 5*. </>
                })}
            </TimetableDay>

            <TimetableDay accentColor={accentColor} title="8 день">
                {translate({
                    ru: <>
                        <b>Радиальный выезд  Дарчен - Исток Сетледж (Satlege source) - Kunlung (Garuda valley) – Дарчен.</b>
                        <TimetablePhoto src="https://img.opentibet.ru/TourTibetExlusiveJune/image17.jpeg" title="" />
                        Тибетцы называют Сетледж Лангчен Тцонгпо, река вытекающая из о рта слона. Существует два источника, которые претендуют на это место.
                        <br />Первый исток Сетледж находится рядом с монастырем Дучу (Duchu или  Dayton) в 300 метрах. Холм на котором построен монастырь имеет сходство со слоном, отсюда и происходит название реки.
                        <br />Второй, с другой стороны озера Манасаровар за монастырем Сералунг.
                        <TimetablePhotoDouble
                            maxHeight={400}
                            src1={"https://img.opentibet.ru/TourTibetExlusiveJune/image18.png"}
                            src2={"https://img.opentibet.ru/TourTibetExlusiveJune/image19.png"}
                        />

                        <b>Кунглунг или Долина Гаруды</b> — западный Тибет. Известный как «Серебряный дворец долины Гаруда», Кунлунг представляет собой сложный пещерный комплекс, расположенный на северном берегу реки Сетледж, примерно в 30 км к западу от священных источников Тиртхапури и пещеры Падмасабхавы.
                        <TimetablePhoto src="https://img.opentibet.ru/TourTibetExlusiveJune/image20.jpeg" />
                        Между ними находится древний бонский монастырь Гуругьям.
                        <TimetablePhoto src="https://img.opentibet.ru/TourTibetExlusiveJune/image21.jpeg" />
                        Ночь в <b> Дарчен, Champion League hotel 5*</b> .
                    </>,
                    en: <> Darchen -The source of the Setleje (Satleje source) -Kunglung (Garuda valley) –
                        Darchen.


                        Tibetans call the Setlej Langchen Tsongpo “a river flowing from the mouth of an elephant”. There are two sources that claim this place.
                        The first source of the Setleje is located next to the Duchu Monastery (Duchu or Dayton) 300 meters away. The hill on which the monastery is built resembles an elephant, hence the name of the river. The second one is on the other side of Lake Manasarovar behind the Seralung Monastery.


                        Kunglung or Garuda Valley is western Tibet. Known as the "Silver Palace of Garuda Valley", Kunlung is elaborated
                        cave complex located on the north bank of the Setlej River, about 30 km west of the sacred springs of Tirthapuri and
                        Padmasabhava Cave

                        The ancient Bon monastery Gurugyam is located between them.


                        Overnight in Darchen, Champion League hotel 5*.</>
                })}
            </TimetableDay>

            <TimetableDay accentColor={accentColor} title="9 день">
                {translate({
                    ru: <>
                        <b> Радиальный выезд  Дарчен – Исток Инда (Indus source) – Дарчен</b>
                        <br />
                        <br />Исток Инда представляет собой очень гармоничное и энергетически активное место. Он находится на высоте 5500м. Рядом с ним установлено восемь белых ступ.
                        <br />Что бы подойти к нему, мы будем переходить небольшую реку в брод.
                        <br />От этого места открывается вид на одну из гор,  образующих перевал Дорма Ла.
                        <TimetablePhoto src="https://img.opentibet.ru/TourTibetExlusiveJune/image22.png" />
                        Ночь в <b> Дарчен, Champion League hotel 5*</b> .
                    </>,
                    en: <> Darchen – The source of the Indus (Indus source) – Darchen
                        The source of the Indus is a very harmonious and energetically active place. It is located at an altitude of 5500m.
                        Eight white stupas are installed next to it. One has to cross a small river on foot to pass it.
                        This point offers a view of one of the mountains forming the Dorma La pass.


                        Overnight in Darchen, Champion League hotel 5*.</>
                })}
            </TimetableDay>

            <TimetableDay accentColor={accentColor} title="10 день">
                {translate({
                    ru: <>
                        <b>Радиальный выезд.  Darchen – Manosarawar Kora – Langchen Kiabab (первый исток Сетледжа) – Darchen</b>
                        <br />
                        <br />Главной достопримечательностью Тибета является природный заповедник Кайлас-Маносаровар. Ежегодно десятки тысяч паломников приезжают сюда, для совершения Кайлас\Маносаровар Коры (обход священной горы\озера). Считается, что этот Путь улучшает\очищает карму и уменьшает страдания на жизненном пути.
                        <br />Озеро Манасаровар – один из самых фантастических природных памятников западного Тибета и одна из главных святынь буддизма в мире, наряду с заповедной горой Кайлас. Озеро находится на высоте 4590 м. Его площадь – около 500 км2, максимальная глубина 82 м. По размерам. Для представителей сразу четырёх религий (буддистов, индуистов, джайнистов и последователей бон).
                        <TimetablePhoto src="https://img.opentibet.ru/TourTibetExlusiveJune/image23.jpg" />
                        Приближение к мандале Кайласа рекомендуется начинать с <b>Манасаровар-Коры</b>, ритуального обхода озера, как бы преддверия Кайлас-Коры. Паломник сначала совершает омовение в Манасароваре и только потом – обход священной горы. С точки зрения ступенчатой акклиматизации это тоже имеет смысл.
                        <TimetablePhotoDouble
                            maxHeight={400}
                            src1={"https://img.opentibet.ru/TourTibetExlusiveJune/image24.jpeg"}
                            src2={"https://img.opentibet.ru/TourTibetExlusiveJune/image25.jpeg"}
                        />
                        Посещение монастырей Сералунг, Труго, Гяндрак, Чиу и Лангпона.
                        <TimetablePhoto src="https://img.opentibet.ru/TourTibetExlusiveJune/image26.jpeg" />
                        После монастыря Сералунг мы попытаемся доехать до священного источника Чхумик и Лангчен Кхибаб. Который так же считают истоком реки Сетледж, реки вытекающей из о рта слона.
                        <br />
                        <br />Ночь в <b> Дарчен, Champion League hotel 5*</b> .
                    </>,
                    en: <>Darchen – Manosarawar Kora – Langchen Kiabab (the first source of the Setlej) – Darchen
                        The main attraction of Tibet is the Kailas-Manosarovar Nature Reserve. Every year tens of thousands of pilgrims come here to perform Kailas \ Manosarovar Kora (bypass of the sacred mountain \ lake). It is believed that this Path
                        improves \ cleanses karma and reduces sufferings that come along the path of life.

                        Lake Manasarovar is one of the most fantastic natural monuments of western Tibet and one of the main shrines of
                        Buddhism in the world, along with the protected Mount Kailas. The lake is located at an altitude of 4590 m. Its area
                        is about 500 km2, the maximum depth is 82 m. By size. For representatives of four religions at once (Buddhists,
                        Hindus, Jainists and followers of bon), here, at Kailas and Manasarovar, the heart of the Universe beats, the axis of
                        the Earth passes.


                        It is recommended to start pass the Kailasa mandala with Manasarovar-Kora, a ritual bypass of the lake, as if on the
                        threshold of Kailasa-Kora. The pilgrim first performs ablution in Manasarovar and only then – bypass of the sacred
                        mountain. From the point of view of step-by-step acclimatization, this also makes sense.

                        Visiting the monasteries of Seralung, Trugo, Gyandrak, Chiu and Langpon.


                        After the Seralung Monastery, we will try to get to the sacred spring of Chhumik and Langchen Khibab. Which is also
                        considered the source of the Setleje River, a river flowing from the mouth of an elephant.
                        Overnight in Darchen, Champion League hotel 5*. </>
                })}
            </TimetableDay>

            <TimetableDay accentColor={accentColor} title="11 день">
                {translate({
                    ru: <>
                        <b>Переезд Darchen- Kadrung - Karnali source – Purang.</b>
                        <br />
                        <br />Тибетское название реки Карнали Мапча Тсангпо, что переводится река-Павлин. Доезжаем на джипе до деревни Кадрунг(4140м). Далее пеший переход около 12 км до истока Мапча Кхебаб 4300м
                        <br />Реку Карнали нам придется переходить в брод.
                        <br />Этот исток один из самых зрелищных. Прямо из высокого обрыва бьет очень мощный источник, который напоминает клюв павлина. Стена из камней мани и молитвенные фоаги находятся над истоком на вершине обрыва.
                        <br />Монастырь Намка Чамдзонг связан с истоком великой реки.
                        <TimetablePhotoDouble
                            maxHeight={400}
                            src1={"https://img.opentibet.ru/TourTibetExlusiveJune/image27.png"}
                            src2={"https://img.opentibet.ru/TourTibetExlusiveJune/image28.png"}
                        />
                        <b>Purang- Перед Кайлас корой</b>, для соблюдения принципов ступенчатой акклиматизации очень полезно провести ночь на высоте около 4000м. Одним из самых подходящих для этого мест является Пуранг.
                        <br />Это приграничный город, который находится в 10 км от границы с Непалом.
                        <br />Пуранг был основан 1961году. Население 13т человек.
                        <br />Ночь в <b>Purang, Holiday Hotel</b>.
                    </>,
                    en: <>Transfer Darchen- Kadrung - Karnali source – Purang.
                        The Tibetan name of the Karnali River is Mapcha Tsangpo, which translates as Peacock River. We drive by jeep to the
                        village of Kadrung (4140m). Then a hike of about 12 km to the source of Mapcha Khebab 4300m
                        We will have to cross the Karnali River by feet.
                        This source is one of the most spectacular. A very powerful spring, which resembles the beak of a peacock, beats
                        directly from a high cliff. A wall of mani stones and prayer flags are located above the source at the top of the cliff.
                        Namka Chamdzong Monastery is connected with the source of the great river.



                        Purang - In front of the Kailash kora, to comply with the principles of stepwise acclimatization, it is very useful to
                        spend the night at an altitude of about 4000m. One of the most suitable places for this is Purang.
                        It is a border town, which is located 10 km from the border with Nepal.
                        Purang was founded in 1961.
                        Overnight in Purang, Holiday Hotel. </>
                })}
            </TimetableDay>

            <TimetableDay accentColor={accentColor} title="12 день">
                {translate({
                    ru: <>
                        <b>Переезд Пуранг - Корчаг – Дорчен</b>
                        <br />
                        <br />В 18 км от Пуранга находится известный монастырь 12 века <b>Корчаг (Khorchag)</b>. Он был построен великим переводчиком Ринченом Цангпо, этот монастырь вначале относился к линии Кадам, а позднее перешёл в линию Сакья. В монастыре находится статуя Джобо Джампа Дордже (Бодхисаттвы Манджушри), которое было благословлено самим Ринченом Цангпо. В предании говорится, что когда эту статую везли в Га Эр, около Кеджиа она внезапно заговорила и произнесла: «Я останусь здесь». Тогда на этом месте был построен главные зал собраний. Это очень известное священное место.
                        <TimetablePhoto src="https://img.opentibet.ru/TourTibetExlusiveJune/image29.png" />
                        Ночь в <b>Дарчен, Champion League hotel 5*</b>.
                    </>,
                    en: <>Transfer Purang - Korchag – Dorchen
                        18 km from Purang, the famous monastery of the 12th century Korchag (Khorchag) is located. It was built by the
                        great translator Rinchen Tsangpo, this monastery initially belonged to the Kadam line, and later passed into the Sakya
                        line. In the monastery there is a statue of Jobo Jump Dorje (Bodhisattva Manjushri), which was blessed by Rinchen
                        Tsangpo himself. The legend says that when this statue was being taken to Ga Er, it suddenly spoke near Kejia: "I'll
                        stay here”. Then the main meeting hall was built on this site. This is a very famous sacred place



                        Overnight in Darchen. Champion League hotel 5*. </>
                })}
            </TimetableDay>

            <TimetableDay accentColor={accentColor} title="13 день">
                {translate({
                    ru: <>
                        <b>Первый день коры: Переход Тарпоче-Дрира Пхук. Подъем к  западному лицу Кайласа.</b>
                        <br />Переход до монастыря Дирапук (4910 м) 10 км, около 3ех часов ходьбы..
                        <TimetablePhotoDouble
                            maxHeight={400}
                            src1={"https://img.opentibet.ru/TourTibetExlusiveJune/image30.jpeg"}
                            src2={"https://img.opentibet.ru/TourTibetExlusiveJune/image31.jpeg"}
                        />
                        По дороге, радиальный выход к Западному лицу (5300м), продолжительность около 5 часов
                        <TimetablePhotoDouble
                            maxHeight={400}
                            src1={"https://img.opentibet.ru/TourTibetExlusiveJune/image32.jpeg"}
                            src2={"https://img.opentibet.ru/TourTibetExlusiveJune/image33.jpeg"}
                        />

                        Ночь в <b>New guest North Face</b>.
                    </>,
                    en: <>The first day of the kora: Tarpoche-Drira Phuk Crossing. Approach to the western face of Kailas (optionaly).
                        Transfer to the Drira phuk Monastery (4910 m) 10 km, about 3 hours walk.

                        On the way, radial exit to the Western face (5300m), duration about 5 hours.

                        Overnight in New guest North Face.
                    </>
                })}
            </TimetableDay>

            <TimetableDay accentColor={accentColor} title="14 день">
                {translate({
                    ru: <>
                        <b>Второй день коры. Manjushri Kora</b>
                        <TimetablePhotoDouble
                            maxHeight={400}
                            src1={"https://img.opentibet.ru/TourTibetExlusiveJune/image34.png"}
                            src2={"https://img.opentibet.ru/TourTibetExlusiveJune/image35.jpeg"}
                        />
                        Второй день коры - радиальный выход к Северо-восточному лицу Кайласа.
                        <br />Подход к Северо-восточному лицу Кайласа и каменному зеркалу Дхарма Кинг Нарсанг. (5350м)
                        <br />Подъем на перевал Манджушари 5750 метров. Спуск в долину перевала Кхандро Санглам (5500м)
                        <br />Посещение священного озера Ваджравархи и завершение Манджушари Коры.
                        <br />
                        <br />Ночь в <b>New guest North Face</b>.
                    </>,
                    en: <>The second day of the kora. Manjushri Kora


                        The second day of the kora is a radial exit to the northeastern face of Kailas.
                        Coming to the North-eastern face of Kailas and the Dharma King Narsang stone mirror. (5350m)
                        Ascent to Manjushari pass 5750 meters. Descent to the valley of Khandro Sanglam Pass (5500m)
                        Visiting the sacred Vajravarhi Lake and completing the Manjushari Kora
                        Overnight in New guest North Face. </>
                })}
            </TimetableDay>

            <TimetableDay accentColor={accentColor} title="15 день">
                {translate({
                    ru: <>
                        <b>Третий день коры: (5600 - 4800 м) </b>
                        <br />
                        <br />Он является кульминационным днём коры вокруг Кайласа, так как Вы пересечете перевал Дролма-Ла (5600 м), который поразит Вас своей энергетикой. Здесь Вас ждет символическая смерть и возрождение.  Все грехи прощаются благодаря состраданию Дролмы, богини Милосердия. Далее Вас ждет спуск вниз к монастырю Зутур пхук (4790 м). Также Вы сможете посетить сам монастырь.
                        <TimetablePhotoDouble
                            maxHeight={400}
                            src1={"https://img.opentibet.ru/TourTibetExlusiveJune/image36.png"}
                            src2={"https://img.opentibet.ru/TourTibetExlusiveJune/image37.jpeg"}
                        />
                        Ночь у монастыря Зутур Пхук (4800м). Посещение Пещеры Магических Сил. Обитель принадлежит линии Дрикунг школы Кагью. Гора над ней называется След Учителя Будды (5924 м).
                        <br />Главная святыня монастыря – пещера, где медитировал великий йогин Миларепа. Здесь же находится его статуя. На чёрном потолке – отпечатки рук и головы Миларепы. Снаружи монастыря, в нескольких метрах на юг, вертикально стоит огромная шестигранная глыба, окружённая каменной стеной
                        <br />
                        <br />Ночь в <b>Zutur Phuk, New Guest</b>.

                    </>,
                    en: <>Third day of the kora: (5600 - 4800 m)
                        This is Cora's most difficult day. It is the most important day of the kora around Kailas, as you will cross the Drolma-
                        La pass (5600 m), which will amaze you with its energy. Here you will find a symbolic death and rebirth. All sins are
                        Forgiven, thanks to the compassion of Drolma, the goddess of Mercy. Then you will descend down to the monastery of Zutur phuk (4790 m). You can also visit this monastery.




                        Ночь в Zutur Phuk, New Guest.
                        Overnight at the monastery of Zutur Phuk (4800m). Visit to the Cave of Magical Powers. The monastery belongs to
                        the Drikung line of the Kagyu school. The mountain above it is called the Footprint of the Buddha Teacher (5924 m).
                        The main shrine of the monastery is the cave where the great yogi Milarepa meditated. His statue is also installed
                        here. One can see Milarepa's handprints and head prints on the black ceiling. Outside the monastery, a few meters to the south, there is a huge hexagonal block standing vertically, surrounded by a stone wall
                        Overnight at Zutur Phuk, New Guest.                 </>
                })}

            </TimetableDay>

            <TimetableDay accentColor={accentColor} title="16 день">
                {translate({
                    ru: <>
                        <b>Четвертый день коры: Возвращение в Дарчен.</b>
                        <br />
                        <br />Возможно Посещение монастырей <b>Гяндрак</b> и <b>Серлунг</b> на джипах.
                        <br />Обитель Гьянгдрак Гомпа <b>(Gyangdrak Gompa)</b> на холме в долине Гьянгдрак-чу производит фантастическое впечатление. Приблизительный перевод названия – «предел слышимости». По преданиям, долина названа так потому, что находящиеся в ней могут вбирать в себя звуки окрестных священных мест.
                        <br />Монастырь появился здесь в 1215 г., и вот уже 800 лет принадлежит традиции Дрикунг школы Кагью.
                        <br /><b> Серлунг Гомпа</b>  – самая маленькая из пяти обителей вокруг Кайласа; её строения расположены в виде прямоугольника. После полной реконструкции 2012 г. во внутреннем дворе справа
                        – главный храм со статуей Падмасамбхавы. Рядом с монастырём находится большая <b> белая ступа Джангчуб</b> ; такая же украшает противоположный берег одноимённой реки. В Серлунг Гомпа всего два монаха.
                        <TimetablePhotoDouble
                            maxHeight={400}
                            src1={"https://img.opentibet.ru/TourTibetExlusiveJune/image38.jpg"}
                            src2={"https://img.opentibet.ru/TourTibetExlusiveJune/image38a.jpg"}
                        />
                        Ночь в <b> Дарчен, Champion League hotel 5*</b> .
                    </>,
                    en: <>The fourth day of the bark: Return to Darchen.
                        It is possible to visit the monasteries of Gyandrak and Serlung by jeep.
                        The Gyangdrak Gompa monastery on a hill in the Gyangdrak Chu Valley makes a fantastic impression. The
                        approximate translation of the name is "earshot/hearing limit". According to a legend, the valley is so named because once you are inside it, you can absorb the sounds of the surrounding sacred places.

                        The monastery appeared here in 1215, and has belonged to the Drikung tradition of the Kagyu school for 800 years.
                        Serlung Gompa is the smallest of the five monasteries around Kailas; its buildings are arranged in the form of a
                        rectangle. After a complete reconstruction in 2012, in the courtyard on the right - the main temple with a statue of
                        Padmasambhava is located. Next to the monastery there is a large white stupa Jangchub; which is complemented by one more, similar of its kind at opposite bank of the river adorning the same name. There are only two monks in Serlung Gompa.


                        Overnight in Darchen, Champion League hotel 5*. </>
                })}
            </TimetableDay>

            <TimetableDay accentColor={accentColor} title="17 день">
                {translate({
                    ru: <>
                        <b>Дарчен (4600) – исток реки Брахмапутра - Сага (4500) </b>
                        <br />
                        <br /><b>Брахмапутра</b> - река в Китае, Индии и Бангладеш, левый и крупнейший приток Ганга; одна из крупнейших водных артерий в Южной Азии. На отдельных участках называется по-разному: в Тибете — Маца́нг и Цангпо́ в месте прорыва через Гималаи — Сианг и Диха́нг, в Индии — Брахмапутра, в Бангладеш — Джамуна.
                        <br />В Тибетской мифологии Брахмапутра называется Тамчок Тсангпо или река вытекающая из о рта лошади.
                        <br />Брахмапутра в переводе с санскрита означает Сын Брахмы. Старое название Лаухитья, что переводится как красная кровь. Паломничество с ее священным водам очищало от грехов.  Традиционный исток Брахмапутры  находится у ледника Чема Джунгдрунг Кангри и отмечен древнем святилищем Бонпо Не. По легенде оно было основано самим основателем религии Бон Шенраб Мево.

                        <TimetablePhotoDouble
                            maxHeight={400}
                            src1={"https://img.opentibet.ru/TourTibetExlusiveJune/image39.png"}
                            src2={"https://img.opentibet.ru/TourTibetExlusiveJune/image40.png"}
                        />

                        <b>Сага</b> город в провинции Шигадзе, столица области Сага на высрте 4600м с населением 20 тыс. человек. Основан был в 1960 году. Область имеет общую границу с Непалом около 100км. Известность город приобрел, как транзитный пункт для непальских и индийских групп, цель которых паломничество к горе Кайлас.
                        <br />Ночь <b>Сага. Best Hotel</b>
                    </>,
                    en: <>Darchen (4600) – the source of the Brahmaputra River - Saga (4500)
                        Brahmaputra is a river in China, India and Bangladesh, the left and largest tributary of the Ganges; one of the largest
                        waterways in South Asia. In some areas it is called differently: in Tibet - Matsang and Tsangpo at the break through of the Himalayas — Siang and Dihang, in India — Brahmaputra, in Bangladesh — Jamuna.
                        In Tibetan mythology, the Brahmaputra is called Tamchok Tsangpo or a river flowing from the mouth of a horse.
                        Brahmaputra in Sanskrit means the Son of Brahma. The old name is Lauhitya, which translates as red blood.
                        Pilgrimage with its sacred waters is believed to cleanse the body and soul of its sins. The traditional source of the Brahmaputra is located at the Chema Jungdrung Kangri Glacier and is marked by the ancient Bonpo Ne Shrine. According to a tale, it was created by the founder of the religion Bon Shenrab Miwo.
                        Saga is a city in Shigadze province, the capital of the Saga region at a height of
                        4600m with a population of 20 thousand people. It was founded in 1960. The region shares a common border with Nepal of about 100km. The city has gained fame as a transit point for Nepalese and Indian groups whose intend to undertake a pilgrimage to Mount Kailas.
                        Night at Saga. Best Hotel</>
                })}
            </TimetableDay>

            <TimetableDay accentColor={accentColor} title="18 день">
                {translate({
                    ru: <>
                        <b>Трансфер Сага – Шигадзе - Гяндзе </b>
                        <br />
                        <br /><b>Шига́дзе</b>, также Шигацзе́ (тиб. གཞིས་ཀ་རྩེ་, кит. упр. 日喀则, пиньинь Rìkāzé, палл. Жикацзэ) — Современный большой город, второй по величине в Тибете, столица уезда с населением 880 тыс. чел. Основная часть населения – китайцы;  тибетцы проживают в своём небольшом квартале и в главной достопримечательности Шигадзе (Shigadze) – монастыре Ташилунпо (Tashilhunpo), одном из немногих, переживших Культурную революцию. Над старым кварталом возвышаются живописные руины крепости-дзонга. Южнее монастыря расположен летний дворец панчен-ламы, построенный в середине XIX в. в национальном стиле.

                        <TimetablePhoto src="https://img.opentibet.ru/TourTibetExlusiveJune/image41.jpeg" />

                        <b>Гьяндзе</b>  - Когда-то Гьяндзе (Gyantse) был третьим городом Тибета по значимости и  численности населения (после Лхасы и Шигадзе). Находится он в 250 км к юго-западу от Лхасы на высоте 3977 м, население – свыше 50 тыс. чел. Старый город расположился в долине, образованной невысокими горами, на одной из которых (с крутыми склонами) ещё в IX в. воздвигли крепость дзонг, а у подножия другой, более пологой, в XIV-XV вв. возник монастырь Палчо (Пелкхор Чоде).

                        <TimetablePhotoDouble
                            maxHeight={600}
                            src1={"https://img.opentibet.ru/TourTibetExlusiveJune/image42.jpeg"}
                            src2={"https://img.opentibet.ru/TourTibetExlusiveJune/image43.jpeg"}
                        />

                        Ночь в <b>Sherap hotel</b>.

                    </>,

                    en: <>Transfer Saga –Shigadze -Gyandze
                        Shigadze, also Shigatse is a modern large city, the second largest in Tibet, the capital of the county with a population of 990 thousand people. The majority of the population are Chinese; Tibetans live in their own small quarter and in the main attraction of Shigadze –Tashilunpo Monastery, one of the few that has survived the Cultural Revolution. The picturesque ruins of the dzong fortress tower are located above the old quarter. To the south of the monastery is the summer palace of the Panchen Lama, built in the middle of the XIX century in the national style.





                        Gyandze -Gyantse was once the third city in Tibet in terms of importance and population (after Lhasa and Shigatse).
                        It is located 250 kmsouthwest of Lhasa at an altitude of 3977 m, the population is over 50 thousand people. The old town is located in a valley formed by low mountains, on one of which (with steep slopes) a dzong fortress was erected in the IX century, and at the foot of another, more gentle, in the XIV-XV centuries, the Palcho monastery (Pelkhor Chode) appeared.

                        Overnight in Gyandze in Sherap hotel.
                    </>
                })}
            </TimetableDay>

            <TimetableDay accentColor={accentColor} title="19 день">
                {translate({
                    ru: <>
                        <b>Переезд Гяндзе–Лхаса (3600) (450км, 8 часов)</b>
                        <br />
                        <br />Посещение Озера Ямдрок
                        <TimetablePhoto src="https://img.opentibet.ru/TourTibetExlusiveJune/image44.jpeg" />
                        Это одно из священных озер Тибета. Расположен на высоте 4408 м, название Ямдрок означает «бирюзовое озеро Тибета». По форме Ямдрок-цо напоминает осьминога; его голова – это северная часть озера. На одном из 9 островов воздвигнут монастырь, главной реликвией которого является камень со следом ноги Падмасамбхавы
                        <br />Свободный вечер в Лхассе
                        <br />Ночь в <b>Tibet hotel</b>.
                    </>,
                    en: <>Gyandze–Lhasa transfer (3600м) (450km, 8 hours)
                        Visit Yamdrok Lake on the way.

                        This is one of the sacred lakes of Tibet. Located at an altitude of 4408 m, the name Yamdrok means "turquoise lake of Tibet". The shape of the Yamdrok-tso resembles an octopus; its head is the northern part of the lake. A monastery has been erected on one of the 9 islands, the main relic of which is a stone with the footprint of Padmasambhava

                        Return to Lhassa
                        The name of the city of Lhasa translates as "place of the gods", or "Holy Land". According to legend,
                        Lhasa became the capital of Tibet in the VII century at times of Songtsen Gampo. At the same time, the construction of monasteries in the city and its surroundings began. Subsequently, the residence of the Dalai Lama was built here. By the arrival of the Chinese in Tibet in the late 1950s, about 30 thousand people lived in Lhasa, half of them were monks. There were about 15 thousand monks in the surrounding monasteries. </>
                })}
            </TimetableDay>

            <TimetableDay accentColor={accentColor} title="20 день">
                {translate({
                    ru: <>Свободный день в Лхасе.
                        <br />
                        <br />
                        Ночь в <b>Tibet hotel</b>.
                    </>,
                    en: <>Day in Lhassa
                        <br />
                        <b>Shopping and rest day</b> </>
                })}
            </TimetableDay>

            <TimetableDay accentColor={accentColor} title="21 день">
                {translate({
                    ru: <> Авиаперелет <b>Лхаса-Ченду</b></>,
                    en: <>Flight <b>Lhassa-Chendu</b> </>
                })}

            </TimetableDay>
        </>
    );
}
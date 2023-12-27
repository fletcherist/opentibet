"use client"

import { AbstractButton, ActionButton, ApplyForm, BackgroundSlider, Footer, LinkTours, Navbar, TimetableDay, TimetablePhoto, TimetablePhotoDouble, TourButton, WithLanguageProvider } from "@/components/components";
import { imagesSrc } from "@/components/TibetInfo";
import { LINK_APPLY_FORM, LINK_OFFERS, Month, getTourPriceForMonth } from "@/utils/constants";

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
                                {/* Большинство паломников, приезжающих в Тибет, осматривают лишь самые популярные туристические места.
                            <br />
                            У вас есть уникальная возможность оказаться там, куда обычному туристу не попасть.
                            <br /> */}
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
                            price={3600}
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
                    <TourExclusiveMay />
                    <ApplyForm />
                </div>
                <div className="pt-20" />
                <Footer />
            </main>
        </WithLanguageProvider>
    )
}

const TourExclusiveMay = ({ accentColor = "blue-500" }) => {
    return (
        <>
            <TimetableDay accentColor={accentColor} title="1 день">
                Перелет Ченду-Лхаса
                Прибытие в аэропорт Гонкар – (3550м)
                <br />Трансфер в Лхасу (3600м)
                <br />
                <br />
                Ночь в Лхасе в <b>Tibet hotel</b>
            </TimetableDay>
            <TimetableDay accentColor={accentColor} title="2 день">
                <b>Лхаса. Посещение монастыря Джокханг</b>
                <br />
                Лха́са (произносится l̥ásə, тиб. ལྷ་ས, Вайли lhasa, кит. трад. 拉薩, упр. 拉萨, пиньинь: Lāsà) — городской округ в Тибетском автономном районе КНР, место размещения правительства автономного района, бывшая столица независимого Тибетского государства. Лхаса является также традиционной резиденцией Далай-ламы. Буквально в переводе с тибетского «лхаса» означает «место богов».
                <br />
                <br />
                Монастырь Джоканг - это самый почитаемый в Тибете храм (Jokhang), входит в список Всемирного наследия ЮНЕСКО. По преданию его построил Сонгцэн Гампо в 647 г. для своей жены, непальской принцессы Бхрикути. Внутри 4-этажного храма, в многочисленных часовнях, сейчас хранятся свыше 3 тыс. изображений (скульптуры, фрески) Будды, буддистских божеств и тибетских буддистских святых. Основным объектом поклонения является установленная в главном зале нижнего этажа статуя Джово Шакьямуни, изображающая Будду в 12 лет.
                <TimetablePhoto src={imagesSrc.jokang} title="Монастырь Джоканг" />
                Ночь в Лхасе, <b>Tibet hotel</b>
            </TimetableDay>
            <TimetableDay accentColor={accentColor} title="3 день">
                Экскурсия в <b>Драк Йерпа (4400м)</b> в окрестностях Лхасы.
                <br />
                <br />
                Медитационные пещеры <b>Драк Йерпа</b> – одно из самых святых мест центрального Тибета, расположенное на склонах гор в примерно двух часах езды от Лхасы. Начиная с VII века в пещерах медитировали, царь Сонгцен Гампо, индийский буддийский мыслитель Атиша, великий махасиддха Гуру Падмасамбхава, просветлённая йогини и дакини Еше Цогъял. В этих пещерах проживали, изучали буддизм и уходили в затворничество отшельники, монахи и монахини на протяжении десяти веков.
                <TimetablePhotoDouble
                    src1={imagesSrc.drakYerpa2}
                    src2={imagesSrc.drakYerpa3}
                />
                Ночь в Лхасе, <b>Tibet hotel</b>
            </TimetableDay>
            <TimetableDay accentColor={accentColor} title="4 день">
                Переезд Лхаса (3550 м) – Damshung – Озеро НамЦо (4300 м)
                <br />
                <br />
                <b>Озеро НамЦо (Небесное Озеро)</b> - второе по величине в Тибете и в Китае. Максимальная глубина озера составляет 107 метров.  Дорога к озеру подразумевает пересечение Ньенчен Тангла, великолепного горного хребта Тибета, протяженность которого с востока на запад составляет 500 км. Заснеженные вершины хребта окружают Намтсо на юге, и его высочайшая гора, Ньенчен Тангла (7088 м), возвышается над озером.
                Это самое высокогорное озеро в мире и второе по площади в Тибете.
                Покровительницей озера Намцо является богиня Намцо Кьонгму, которая, по тибетскому поверью, является эманацией бодхисатвы сострадания Авалокитешвары.
                <TimetablePhoto src={imagesSrc.namtso2} title="Озеро Намцо" maxHeight={300} />
                Город Дамшунг уезд городского округа Лхаса Тибетского автономного района КНР. Уезд был создан в 1960 году путём объединения трёх тибетских дзонгов. Известен тем, что здесь проводятся фестивали, гонки на яках и лошадях.
                <br />
                <br />
                Ночь в <b>Damshung. Grand hotel</b>
            </TimetableDay>
            <TimetableDay accentColor={accentColor} title="5 день">
                Переезд Damshung – Namtso North – Nyma
                <br />
                <br />
                <b>Namtso North</b> - Северная часть озера предназначена для омовения. Здесь расположен потрясающий элемент рельефа, известный под именем Танглай Гьяго (Танг-лхаи гья-го) - естественный арочный проход, установленный на каменистой площадке, выступающей в озеро. Говорят, что это образование подобно слону, с которым оно имеет необыкновенное сходство.
                <TimetablePhotoDouble
                    src1={imagesSrc.namtsoNorth1}
                    src2={imagesSrc.namtsoNorth2}
                />
                Ночь в <b>Nyma Star centure Hotel</b>
            </TimetableDay>
            <TimetableDay accentColor={accentColor} title="6 день">
                Переезд <b>Nyma – Dangra lake – Tsochen</b>
                <br />
                <br />
                Мы проедем по священной для Бонпо территории, где расположены горный массив Тарго и озеро Дангра. Дангра Цо (4540 м, длина около 70 км) – «Океанское бирюзовое озеро». Район горы Тарго и озера Дангра исключительно красив.  Горный массив Тарго образован шестью вершинами. Кора (обход) вокруг горы Тарго включает переход через один перевал — Баронг (или Парунг) Ла.
                <TimetablePhotoDouble
                    src1={"https://media.discordapp.net/attachments/1182687528613064777/1182689887066017852/image.png?ex=65859cca&is=657327ca&hm=f7abfdafa8f1e1cf6849a88409ecceda4bb01db87a4d799c5b428decb1a5cbf3&=&format=webp&quality=lossless&width=800&height=600"}
                    src2={"https://media.discordapp.net/attachments/1182687528613064777/1182689913443979435/image.png?ex=65859cd0&is=657327d0&hm=41c9cc14e8bdbec23614b0fe028b1056ee5e4276ce53b0f14959056b862e390e&=&format=webp&quality=lossless&width=800&height=600"}
                />
                Дангра Цо также считается озером души Шанг-Шунга, что означало его неразрывную связь с жизнью королевства. Вода озера немного соленая и имеет зеленовато-голубой цвет. На берегу озеро находится очень древний бонский монастырь.
                <br />
                <br />
                <TimetablePhotoDouble
                    src1={"https://media.discordapp.net/attachments/1182687528613064777/1182690249034448936/image.png?ex=65859d20&is=65732820&hm=5a9a5644a0409c2fe656be64bb50993de4d133f6001e3f5ca6c3db8a7b4088ea&=&format=webp&quality=lossless&width=800&height=600"}
                    src2={"https://media.discordapp.net/attachments/1182687528613064777/1182690272115703848/image.png?ex=65859d26&is=65732826&hm=2de4cf5922fda9d3c68497cb145d5f017467660d7df8c25241cb9cf5d4c1dddd&=&format=webp&quality=lossless&width=800&height=600"}
                />
                Благодаря крайней изолированности района здесь до сих пор сохранились обычаи и жизненный уклад добуддийской религии Бонпо. Интересно то, что в этом регионе одновременно сосуществуют две самые ранние религии Тибета (Бон и Ньингмапа). Встречаются стандартные старые гестхаузы. Правда все они с великолепным видом на озеро. И атмосфера озера позволяет забыть о многих недостатках быта.
                <br />
                <br />
                <b>Tsochen (Цочен)</b> – город и название уезда в переводе с тибетского означает «большое озеро».
                уезд в округе Нгари, Тибетский автономный район.
                Посещение монастыря <b>Tsochen Mendong</b>. Монастырю больше 200 лет. Настоятелю монастыря около 100лет.
                <br />
                <br />
                <TimetablePhotoDouble
                    maxHeight={400}
                    src1={"https://media.discordapp.net/attachments/1182687528613064777/1182690605302812682/image.png?ex=65859d75&is=65732875&hm=f67badf15809a76abed28f1435d2b88d4d5892c1623a922fccf6c97d62bdcf73&=&format=webp&quality=lossless&width=800&height=600"}
                    src2={"https://media.discordapp.net/attachments/1182687528613064777/1182690623338319992/image.png?ex=65859d79&is=65732879&hm=c963b24e39c3bff0ce74e6260a498ba0ce1b3b680646e5f2cf0097307aad720c&=&format=webp&quality=lossless&width=600&height=800"}
                />
                Ночь в <b>Tsochen Hanting hotel</b>
            </TimetableDay>
            <TimetableDay accentColor={accentColor} title="7 день">
                <b>Переезд Tsochen  –Darchen</b>
                <br />
                Дарчен - Название города (Darchen) в данном случае переводится как «большой флаг». Когда-то на стене местного монастыря, уничтоженного в годы Культурной революции, вывешивали огромную тханку с изображением Будды.
                <br />
                После распада единого Тибетского государства в середине IX в. правители западного Тибета (Нгари) захватили расположенную южнее историческую область Ладакх (Ladakh; сегодня входит в состав индийского штата Джамму и Кашмир) и основали Ладакхское царство. В XII в. ладакхские цари подарили территорию, на которой расположен Дарчен, бутанскому ламе Друкчену Нгавангу Намгьялу. С этого времени начали возводиться монастыри на маршруте Кайлас-Коры.
                <br />
                <br />

                <TimetablePhoto src={"https://media.discordapp.net/attachments/1182687528613064777/1182691008882954310/image.png?ex=65859dd5&is=657328d5&hm=5798127f6bf45eeacbedd1f39e818dbd78f3bacb5eb78a8f7a52d068fa62985a&=&format=webp&quality=lossless&width=1946&height=1142"} title="" />
                Ночь в Дарчен, <b>Champion League hotel 5*</b>
            </TimetableDay>
            <TimetableDay accentColor={accentColor} title="8 день">
                <b>
                    Радиальный выезд Дарчен - Исток Сетледж (Satlege source) - Kunlung (Garuda valley) – Дарчен.
                </b>
                <TimetablePhoto src={"https://media.discordapp.net/attachments/1182687528613064777/1182691280753528944/image.png?ex=65859e16&is=65732916&hm=f31c764a03117cafdcf64553383d67238a7836ac30e1f051eef08c0469a1a8b0&=&format=webp&quality=lossless&width=1280&height=720"} title="" />
                <br />
                <br />
                Тибетцы называют Сетледж Лангчен Тцонгпо, река вытекающая из о рта слона. Существует два источника, которые претендуют на это место.
                Первый исток Сетледж находится рядом с монастырем Дучу (Duchu или  Dayton) в 300 метрах. Холм на котором построен монастырь имеет сходство со слоном, отсюда и происходит название реки.
                Второй, с другой стороны озера Манасаровар за монастырем Сералунг.
                <TimetablePhotoDouble
                    maxHeight={400}
                    src1={"https://media.discordapp.net/attachments/1182687528613064777/1182691461070852116/image.png?ex=65859e41&is=65732941&hm=9c3997d2f0385b69f4db9423fa7179e57202eed5ec4f0abda01f641ad518c543&=&format=webp&quality=lossless&width=1760&height=1142"}
                    src2={"https://media.discordapp.net/attachments/1182687528613064777/1182691479974592543/image.png?ex=65859e46&is=65732946&hm=4d7d86c1b4db261faa254e43828b7a4b0b07b1732dc9b587c9aa4a314381a87a&=&format=webp&quality=lossless&width=1522&height=1142"}
                />

                <br />
                <br />
                <b>Кунглунг или Долина Гаруды</b> — западный Тибет. Известный как «Серебряный дворец долины Гаруда», Кунлунг представляет собой сложный пещерный комплекс, расположенный на северном берегу реки Сетледж, примерно в 30 км к западу от священных источников Тиртхапури и пещеры Падмасабхавы.
                <TimetablePhoto src={"https://media.discordapp.net/attachments/1182687528613064777/1182692612205985963/image.png?ex=65859f54&is=65732a54&hm=26bc24a00c932361ec0d1a8ce4dff6eabfcf12fa41a2e9917e0107b4f5ad6ad5&=&format=webp&quality=lossless&width=1280&height=960"} title="" />
                Между ними находится древний бонский монастырь Гуругьям.
                <br />
                <TimetablePhoto src={"https://media.discordapp.net/attachments/1182687528613064777/1182693018948608111/image.png?ex=65859fb5&is=65732ab5&hm=0bb0138901e9ad82d59861fb268785f7f949b4a9fc748a2c5408bed166bcac53&=&format=webp&quality=lossless&width=1280&height=880"} title="монастырь Гуругьям" />
                <br />
                Ночь в Дарчен, <b>Champion League hotel 5*</b>
            </TimetableDay>
            <TimetableDay accentColor={accentColor} title="9 день">
                <b>Радиальный выезд  Дарчен – Исток Инда (Indus source) – Дарчен</b>
                <br />
                <br />
                Исток Инда представляет собой очень гармоничное и энергетически активное место. Он находится на высоте 5500м. Рядом с ним установлено восемь белых ступ.
                Что бы подойти к нему, мы будем переходить небольшую реку в брод.
                От этого места открывается вид на одну из гор,  образующих перевал Дорма Ла.
                <TimetablePhoto src={"https://media.discordapp.net/attachments/1182687528613064777/1182693336620990637/image.png?ex=6585a000&is=65732b00&hm=99ef47e6bc372061b6a9b3e7c77e615c8268830d2c2ca3b62b8bedfdd164d998&=&format=webp&quality=lossless&width=1934&height=1142"} title="" />
                Ночь в Дарчен, <b>Champion League hotel 5*</b>
            </TimetableDay>
            <TimetableDay accentColor={accentColor} title="10 день">
                <b>Радиальный выезд.  Darchen – Manosarawar Kora – Langchen Kiabab (первый исток Сетледжа) – Darchen</b>
                <br />
                <br />
                Главной достопримечательностью Тибета является природный заповедник Кайлас-Маносаровар. Ежегодно десятки тысяч паломников приезжают сюда, для совершения Кайлас\Маносаровар Коры (обход священной горы\озера). Считается, что этот Путь улучшает\очищает карму и уменьшает страдания на жизненном пути.
                Озеро Манасаровар – один из самых фантастических природных памятников западного Тибета и одна из главных святынь буддизма в мире, наряду с заповедной горой Кайлас. Озеро находится на высоте 4590 м. Его площадь – около 500 км2, максимальная глубина 82 м. По размерам. Для представителей сразу четырёх религий (буддистов, индуистов, джайнистов и последователей бон).

                <TimetablePhoto src={"https://media.discordapp.net/attachments/1182687528613064777/1182693826591211551/image.png?ex=6585a075&is=65732b75&hm=5a24e4359ed6d38a00e496bc742927b5c9ccf168ee8676f20543506e9aac93b8&=&format=webp&quality=lossless&width=1280&height=960"} title="" />
                <br />
                <br />
                Приближение к мандале Кайласа рекомендуется начинать с Манасаровар-Коры, ритуального обхода озера, как бы преддверия Кайлас-Коры. Паломник сначала совершает омовение в Манасароваре и только потом – обход священной горы. С точки зрения ступенчатой акклиматизации это тоже имеет смысл.
                <br />
                <br />
                Посещение монастырей Сералунг, Труго, Гяндрак, Чиу и Лангпона.
                <TimetablePhotoDouble
                    maxHeight={400}
                    src1={"https://media.discordapp.net/attachments/1182687528613064777/1182694000273137714/image.png?ex=6585a09f&is=65732b9f&hm=74af611e4dfced1bf3f27c0415b4339f7603ad98160cfe493bd5053a880db1db&=&format=webp&quality=lossless&width=800&height=600"}
                    src2={"https://media.discordapp.net/attachments/1182687528613064777/1182694056162238614/image.png?ex=6585a0ac&is=65732bac&hm=5e0a2ff0369de15b12d5ea2535de70bf8d12da6766452fd6b3683f4de852c0f4&=&format=webp&quality=lossless&width=800&height=600"}
                />
                <br />
                <br />
                После монастыря Сералунг мы попытаемся доехать до священного источника Чхумик и Лангчен Кхибаб. Который так же считают истоком реки Сетледж, реки вытекающей из о рта слона.
                <TimetablePhoto src={"https://media.discordapp.net/attachments/1182687528613064777/1182694332025798717/image.png?ex=6585a0ee&is=65732bee&hm=fc0707903f97de27203a8994d8f1fab9e3d21820fa90fd05bf8304478f0303a3&=&format=webp&quality=lossless&width=1280&height=960"} title="" maxHeight={300} />
                Ночь в Дарчен, <b>Champion League hotel 5*</b>
            </TimetableDay>
            <TimetableDay accentColor={accentColor} title="11 день">
                <b>Переезд Darchen- Kadrung - Karnali source – Purang.</b>
                <br />
                <br />
                Тибетское название реки Карнали Мапча Тсангпо, что переводится река-Павлин. Доезжаем на джипе до деревни Кадрунг(4140м). Далее пеший переход около 12 км до истока Мапча Кхебаб 4300м
                Реку Карнали нам придется переходить в брод.
                Этот исток один из самых зрелищных. Прямо из высокого обрыва бьет очень мощный источник, который напоминает клюв павлина. Стена из камней мани и молитвенные фоаги находятся над истоком на вершине обрыва.
                <br />
                <br />
                Монастырь Намка Чамдзонг связан с истоком великой реки.
                <br />
                <br />
                Purang – Перед Кайлас корой, для соблюдения принципов ступенчатой акклиматизации очень полезно провести ночь на высоте около 4000м. Одним из самых подходящих для этого мест является Пуранг.
                Это приграничный город, который находится в 10 км от границы с Непалом.
                Пуранг был основан 1961году. Население 13т человек.

                <TimetablePhotoDouble
                    maxHeight={400}
                    src1={"https://media.discordapp.net/attachments/1182687528613064777/1182694559642296430/image.png?ex=6585a124&is=65732c24&hm=3584251b7e02979103e8a3f7cf13609dd0bb3e4ee5a9c1cf6dc67bd58aba88dc&=&format=webp&quality=lossless&width=1738&height=1142"}
                    src2={"https://media.discordapp.net/attachments/1182687528613064777/1182694604630396928/image.png?ex=6585a12f&is=65732c2f&hm=313f94765d36a74f0f718ea6adad65c22d9a37a64a2c7693817c773ea60f6d77&=&format=webp&quality=lossless&width=908&height=616"}
                />
                Ночь в Purang, <b>Holiday Hotel</b>
            </TimetableDay>
            <TimetableDay accentColor={accentColor} title="12 день">
                <b>Переезд Пуранг - Корчаг – Дорчен</b>
                <br />
                <br />
                В 18 км от Пуранга находится известный монастырь 12 века Корчаг (Khorchag). Он был построен великим переводчиком Ринченом Цангпо, этот монастырь вначале относился к линии Кадам, а позднее перешёл в линию Сакья. В монастыре находится статуя Джобо Джампа Дордже (Бодхисаттвы Манджушри), которое было благословлено самим Ринченом Цангпо. В предании говорится, что когда эту статую везли в Га Эр, около Кеджиа она внезапно заговорила и произнесла: «Я останусь здесь». Тогда на этом месте был построен главные зал собраний. Это очень известное священное место.
                <TimetablePhoto src={"https://media.discordapp.net/attachments/1182687528613064777/1182694845932896317/image.png?ex=6585a168&is=65732c68&hm=71e66098d3f8b62680933dc1468e6fcb93225897df3a6ea5f98ca1cdd1496602&=&format=webp&quality=lossless&width=1000&height=588"} title="" maxHeight={300} />
                Ночь в Дарчен, <b>Champion League hotel 5*</b>
            </TimetableDay>
            <TimetableDay accentColor={accentColor} title="13 день">
                <b>Первый день коры: Переход Тарпоче-Дрира Пхук. Подъем к  западному лицу Кайласа.</b>
                <br />
                <br />
                Переход до монастыря Дирапук (4910 м) 10 км, около 3ех часов ходьбы..
                <TimetablePhotoDouble
                    maxHeight={400}
                    src1={"https://media.discordapp.net/attachments/1182687528613064777/1182695103769354250/image.png?ex=6585a1a6&is=65732ca6&hm=021104c158f1d2fe46da56fb87e32c54e45f6f0734ea1f5ec57aa5260814c837&=&format=webp&quality=lossless&width=960&height=816"}
                    src2={"https://media.discordapp.net/attachments/1182687528613064777/1182695180692893818/image.png?ex=6585a1b8&is=65732cb8&hm=d0a695fb767be6796a38669b69ef8bb7b010353212535375aa93d69a7fb19d30&=&format=webp&quality=lossless&width=1112&height=816"}
                />
                <br />
                <br />
                По дороге, радиальный выход к Западному лицу (5300м), продолжительность около 5 часов
                <TimetablePhotoDouble
                    maxHeight={400}
                    src1={"https://media.discordapp.net/attachments/1182687528613064777/1182695286305468519/image.png?ex=6585a1d1&is=65732cd1&hm=222d7dda512b7d3b07b4deca564fc1669f7913d7c6a5eab8e28484aa344622c5&=&format=webp&quality=lossless&width=792&height=1052"}
                    src2={"https://media.discordapp.net/attachments/1182687528613064777/1182695297642680390/image.png?ex=6585a1d4&is=65732cd4&hm=cde55801d87d79f94db13886fca5716c5572ec8a5d9b9680cabe22a896d66176&=&format=webp&quality=lossless&width=1092&height=828"}
                />
                Ночь в <b>New guest North Face</b>
            </TimetableDay>
            <TimetableDay accentColor={accentColor} title="14 день">
                <b>Второй день коры. Manjushri Kora</b>
                <br />
                <br />
                Второй день коры - радиальный выход к Северо-восточному лицу Кайласа.
                <br />
                Подход к Северо-восточному лицу Кайласа и каменному зеркалу Дхарма Кинг Нарсанг. (5350м)
                <br />
                Подъем на перевал Манджушари 5750 метров. Спуск в долину перевала Кхандро Санглам (5500м)
                <br />
                Посещение священного озера Ваджравархи и завершение Манджушари Коры.

                Ночь в <b>New guest North Face</b>
            </TimetableDay>
            <TimetableDay accentColor={accentColor} title="14 день">
                <b>Второй день коры. Manjushri Kora</b>
                <br />
                <br />
                Второй день коры - радиальный выход к Северо-восточному лицу Кайласа.
                <br />
                Подход к Северо-восточному лицу Кайласа и каменному зеркалу Дхарма Кинг Нарсанг. (5350м)
                <br />
                Подъем на перевал Манджушари 5750 метров. Спуск в долину перевала Кхандро Санглам (5500м)
                <br />
                Посещение священного озера Ваджравархи и завершение Манджушари Коры.
                <TimetablePhotoDouble
                    maxHeight={400}
                    src1={"https://media.discordapp.net/attachments/1182687528613064777/1182695524093141062/image.png?ex=6585a20a&is=65732d0a&hm=b688119fff5ef43d37dba34ed72e29c7f447e9b5ef59796816c4fb2af499ccc4&=&format=webp&quality=lossless&width=944&height=712"}
                    src2={"https://media.discordapp.net/attachments/1182687528613064777/1182695541537259623/image.png?ex=6585a20e&is=65732d0e&hm=77417d60d9dfb9b8fd59075ef494dc203afa0b20a31868a1910954c1a0941c98&=&format=webp&quality=lossless&width=980&height=708"}
                />

                Ночь в <b>New guest North Face</b>
            </TimetableDay>
            <TimetableDay accentColor={accentColor} title="15 день">
                Третий день коры: (5600 - 4800 м)
                <br />
                <br />
                Он является кульминационным днём коры вокруг Кайласа, так как Вы пересечете перевал Дролма-Ла (5600 м), который поразит Вас своей энергетикой. Здесь Вас ждет символическая смерть и возрождение.  Все грехи прощаются благодаря состраданию Дролмы, богини Милосердия. Далее Вас ждет спуск вниз к монастырю Зутур пхук (4790 м). Также Вы сможете посетить сам монастырь.
                <br />
                <br />
                Ночь у монастыря Зутур Пхук (4800м). Посещение Пещеры Магических Сил. Обитель принадлежит линии Дрикунг школы Кагью. Гора над ней называется След Учителя Будды (5924 м).
                <br />
                Главная святыня монастыря – пещера, где медитировал великий йогин Миларепа. Здесь же находится его статуя. На чёрном потолке – отпечатки рук и головы Миларепы. Снаружи монастыря, в нескольких метрах на юг, вертикально стоит огромная шестигранная глыба, окружённая каменной стеной
                <br />
                <br />

                <TimetablePhotoDouble
                    maxHeight={400}
                    src1={"https://media.discordapp.net/attachments/1182687528613064777/1182695790565658654/image.png?ex=6585a249&is=65732d49&hm=175e1a68e40418b84fc82f44be49387b52e69916e0f1964c7052f1a0e4b6f23b&=&format=webp&quality=lossless&width=960&height=584"}
                    src2={"https://media.discordapp.net/attachments/1182687528613064777/1182695811969200138/image.png?ex=6585a24e&is=65732d4e&hm=82cb82d2a47b23e532c0b038dc4b3398cb8cf8cfda25552caf9b874215bf554f&=&format=webp&quality=lossless&width=928&height=592"}
                />

                Ночь в <b>Zutur Phuk, New Guest</b>
            </TimetableDay>
            <TimetableDay accentColor={accentColor} title="16 день">
                Четвертый день коры: Возвращение в Дарчен.
                <br />
                <br />
                Возможно Посещение монастырей Гяндрак и Серлунг на джипах.
                <br />
                <br />
                Обитель Гьянгдрак Гомпа (Gyangdrak Gompa) на холме в долине Гьянгдрак-чу производит фантастическое впечатление. Приблизительный перевод названия – «предел слышимости». По преданиям, долина названа так потому, что находящиеся в ней могут вбирать в себя звуки окрестных священных мест.
                Монастырь появился здесь в 1215 г., и вот уже 800 лет принадлежит традиции Дрикунг школы Кагью.
                <br />
                <br />
                Серлунг Гомпа – самая маленькая из пяти обителей вокруг Кайласа; её строения расположены в виде прямоугольника. После полной реконструкции 2012 г. во внутреннем дворе справа – главный храм со статуей Падмасамбхавы. Рядом с монастырём находится большая белая ступа Джангчуб; такая же украшает противоположный берег одноимённой реки. В Серлунг Гомпа всего два монаха.
                <TimetablePhoto src={"https://media.discordapp.net/attachments/1182687528613064777/1182695936833630349/image.png?ex=6585a26c&is=65732d6c&hm=09e1c04069d640e323768a4367f930bdd8a08cc59f626ee8af16ec5575a263ee&=&format=webp&quality=lossless&width=2592&height=960"} title="" maxHeight={400} />
                Ночь в Дарчен, <b>Champion League hotel 5*</b>
            </TimetableDay>
            <TimetableDay accentColor={accentColor} title="17 день">
                <b>Дарчен (4600)</b> – исток реки <b>Брахмапутра</b> - <b>Сага (4500)</b>
                <br />
                <br />
                Брахмапутра - река в Китае, Индии и Бангладеш, левый и крупнейший приток Ганга; одна из крупнейших водных артерий в Южной Азии. На отдельных участках называется по-разному: в Тибете — Маца́нг и Цангпо́ в месте прорыва через Гималаи — Сианг и Диха́нг, в Индии — Брахмапутра, в Бангладеш — Джамуна.
                В Тибетской мифологии Брахмапутра называется Тамчок Тсангпо или река вытекающая из о рта лошади.
                Брахмапутра в переводе с санскрита означает Сын Брахмы. Старое название Лаухитья, что переводится как красная кровь. Паломничество с ее священным водам очищало от грехов.  Традиционный исток Брахмапутры  находится у ледника Чема Джунгдрунг Кангри и отмечен древнем святилищем Бонпо Не. По легенде оно было основано самим основателем религии Бон Шенраб Мево.
                <br />
                <br />
                Сага город в провинции Шигадзе, столица области Сага на высоте 4600м с населением 20 тыс. человек. Основан был в 1960 году. Область имеет общую границу с Непалом около 100км. Известность город приобрел, как транзитный пункт для непальских и индийских групп, цель которых паломничество к горе Кайлас.
                <br />
                <TimetablePhoto src={"https://media.discordapp.net/attachments/1182687528613064777/1182703727019307028/image.png?ex=6585a9ae&is=657334ae&hm=e7f3c6ef7cba3a57a0e60b663fefd127e582278db7e01e05b7169461e26573ce&=&format=webp&quality=lossless&width=1804&height=1142"} title="" maxHeight={400} />
                <br />
                Ночь Сага. <b>Best Hotel</b>
            </TimetableDay>
            <TimetableDay accentColor={accentColor} title="18 день">
                Трансфер Сага – Шигадзе - Гяндзе
                <br />
                <br />
                Шига́дзе, также Шигацзе́ (тиб. གཞིས་ཀ་རྩེ་, кит. упр. 日喀则, пиньинь Rìkāzé, палл. Жикацзэ) — Современный большой город, второй по величине в Тибете, столица уезда с населением 880 тыс. чел. Основная часть населения – китайцы;  тибетцы проживают в своём небольшом квартале и в главной достопримечательности Шигадзе (Shigadze) – монастыре Ташилунпо (Tashilhunpo), одном из немногих, переживших Культурную революцию. Над старым кварталом возвышаются живописные руины крепости-дзонга. Южнее монастыря расположен летний дворец панчен-ламы, построенный в середине XIX в. в национальном стиле.
                <br />
                <br />
                Гьяндзе  - Когда-то Гьяндзе (Gyantse) был третьим городом Тибета по значимости и  численности населения (после Лхасы и Шигадзе). Находится он в 250 км к юго-западу от Лхасы на высоте 3977 м, население – свыше 50 тыс. чел. Старый город расположился в долине, образованной невысокими горами, на одной из которых (с крутыми склонами) ещё в IX в. воздвигли крепость дзонг, а у подножия другой, более пологой, в XIV-XV вв. возник монастырь Палчо (Пелкхор Чоде).
                <TimetablePhoto src={imagesSrc.gyandze} title="Гьяндзе" maxHeight={400} />
                Ночь в <b>Sherap hotel</b>
            </TimetableDay>
            <TimetableDay accentColor={accentColor} title="19 день">
                <b>Переезд Гяндзе–Лхаса</b> (3600) (450км, 8 часов)
                <br />
                <br />
                Посещение Озера Ямдрок
                <br />
                <br />
                Это одно из священных озер Тибета. Расположено на высоте 4408 м, название Ямдрок означает «бирюзовое озеро Тибета». По форме Ямдрок-цо напоминает осьминога; его голова – это северная часть озера. На одном из 9 островов воздвигнут монастырь, главной реликвией которого является камень со следом ноги Падмасамбхавы
                <TimetablePhoto src={imagesSrc.yamdrok} title="Озеро Ямдрок" maxHeight={400} />
                Свободный вечер в Лхассе
                <br />
                <br />
                Ночь в <b>Tibet hotel</b>
            </TimetableDay>
            <TimetableDay accentColor={accentColor} title="20 день">
                Свободный день в Лхасе.
                <br />
                <br />
                Ночь в <b>Tibet hotel</b>
            </TimetableDay>
            <TimetableDay accentColor={accentColor} title="21 день">
                Авиаперелет <b>Лхаса-Ченду</b>
            </TimetableDay>
        </>
    );
}
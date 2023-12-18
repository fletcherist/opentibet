"use client";
import { useState } from "react";
import { Slick } from "./Slick";
import React from 'react'

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTrigger,
} from "@/components/ui/dialog"
import { useTranslateFn } from "@/lib/language";

const cardWidth = 300;


export const imagesSrc = {
    potala: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Potala.jpg/548px-Potala.jpg',
    lhasa: 'https://storage.googleapis.com/opentibet/lhasa.jpg',
    jokang: "https://ic.pics.livejournal.com/vlade_mir/25001231/1603650/1603650_original.jpg",
    ganden: "https://snowliontours.ru/wp-content/uploads/2019/01/%D0%9C%D0%BE%D0%BD%D0%B0%D1%81%D1%82%D1%8B%D1%80%D1%8C-%D0%93%D0%B0%D0%BD%D0%B4%D0%B5%D0%BD-%D0%9B%D1%85%D0%B0%D1%81%D0%B0-%D1%82%D1%83%D1%80%D1%8B-%D0%B2-%D0%A2%D0%B8%D0%B1%D0%B5%D1%82-%D0%A6%D0%B5%D0%BD%D1%82%D1%80%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9-%D0%A2%D0%B8%D0%B1%D0%B5%D1%82.jpg",
    drepung: "https://storage.googleapis.com/opentibet/drepung.jpg",
    sera: "https://storage.googleapis.com/opentibet/sera.jpg",
    tsurphu: "https://wondersoftibet.com/wp-content/uploads/2018/09/Tsurpu-Monastery-complex-in-Tibet-1024x768.jpg",
    namtso: "https://storage.googleapis.com/opentibet/namtso.jpg",
    namtso2: "https://media.discordapp.net/attachments/1182687528613064777/1182689019029635182/image.png?ex=65859bfb&is=657326fb&hm=5feaad5a1653b92753034295aad7c1cf7ac367395362a1a99e77d96a873cd77d&=&format=webp&quality=lossless&width=1934&height=1142",
    namtsoNorth1: 'https://media.discordapp.net/attachments/1182687528613064777/1182689473520226354/image.png?ex=65859c67&is=65732767&hm=93dfb45500acd5b15e658dd0755db0b2f034b9c84f4a4fd53d3f58bb493d4f0c&=&format=webp&quality=lossless&width=1730&height=1142',
    namtsoNorth2: 'https://media.discordapp.net/attachments/1182687528613064777/1182689530642440252/Screenshot_2023-12-08_at_17.25.51.png?ex=65859c75&is=65732775&hm=85f6d8af95a29a9dbd741fb1007cb94da9d8e4ce86fd7be3fd6e92ead333e15e&=&format=webp&quality=lossless&width=1808&height=1142',
    reting: "https://storage.googleapis.com/opentibet/reting.jpg",
    taklung: "https://storage.googleapis.com/opentibet/taklung.jpg",
    tashilhunpo: "https://snowliontours.ru/wp-content/uploads/2018/10/%D0%A2%D0%B0%D1%88%D0%B8%D0%BB%D1%83%D0%BD%D0%BF%D0%BE-%D0%BC%D0%BE%D0%BD%D0%B0%D1%81%D1%82%D1%8B%D1%80%D1%8C-%D0%A2%D0%B0%D1%88%D0%B8-%D0%9B%D1%83%D0%BD%D0%BF%D0%BE-%D0%BF%D0%B5%D1%80%D0%BC%D0%B8%D1%82%D1%8B-%D0%B2-%D0%9B%D1%85%D0%B0%D1%81%D1%83-%D1%82%D1%83%D1%80-%D0%B2-%D0%A2%D0%B8%D0%B1%D0%B5%D1%82.jpg",
    gyandze: "https://storage.googleapis.com/opentibet/gyandze.jpg",
    shalu: "https://storage.googleapis.com/opentibet/shalu.jpg",
    ngor: "https://storage.googleapis.com/opentibet/ngor.jpg",
    nartang: "https://storage.googleapis.com/opentibet/nratang.jpg",
    yamdrok: "https://www.wondersoftibet.com/wp-content/uploads/2018/03/Yamdrok-Lake.jpg",
    pelkhor: "https://storage.googleapis.com/opentibet/pelkhor.jpg",
    everestBasecamp: "https://storage.googleapis.com/opentibet/everest-basecamp.jpg",
    sakya: "https://storage.googleapis.com/opentibet/sakya.jpg",
    girjong: "https://storage.googleapis.com/opentibet/girjong.jpg",
    sashipangma: "https://storage.googleapis.com/opentibet/sashipangma.jpg",
    pelkutso: "https://storage.googleapis.com/opentibet/pelku-tso.jpg",
    chiu: "https://storage.googleapis.com/opentibet/chiu-2.jpg",
    rakshastal: "https://storage.googleapis.com/opentibet/rakshastal.jpg",
    vneshKora: "https://storage.googleapis.com/opentibet/vnesh-kora.jpg",
    nandi: "https://storage.googleapis.com/opentibet/nandi.jpg",
    drakYerpa: "https://snowliontours.ru/wp-content/uploads/2018/10/%D0%BC%D0%B5%D0%B4%D0%B8%D1%82%D0%B0%D1%86%D0%B8%D0%BE%D0%BD%D0%BD%D1%8B%D0%B5-%D0%BF%D0%B5%D1%89%D0%B5%D1%80%D1%8B-%D0%94%D1%80%D0%B0%D0%B9-%D0%99%D0%B5%D1%80%D0%BF%D0%B0-%D0%99%D0%B5%D1%80%D0%BF%D0%B0-%D0%A6%D0%B5%D1%87%D1%83-%D0%BF%D0%B5%D1%80%D0%BC%D0%B8%D1%82%D1%8B-%D0%B2-%D0%9B%D1%85%D0%B0%D1%81%D1%83-%D0%A2%D0%B8%D0%B1%D0%B5%D1%82.jpg",
    drakYerpa2: "https://media.discordapp.net/attachments/1182687528613064777/1182687697874210856/image.png?ex=65859ac0&is=657325c0&hm=480438d16c05c63d72ccae6e64913281e1fecbba7b4422df096e222ed68caf25&=&format=webp&quality=lossless&width=940&height=708",
    drakYerpa3: "https://media.discordapp.net/attachments/1182687528613064777/1182688061776220273/image.png?ex=65859b17&is=65732617&hm=89f3ca6cf8f9b82928e0d815641f96dbe7be1cb1e65078a0c2afc09beffdd1d7&=&format=webp&quality=lossless&width=940&height=708",
    chakraDamtso: "https://storage.googleapis.com/opentibet/chakra-damtso.jpg",
    purang: "https://storage.googleapis.com/opentibet/purang.jpg",
    korchag: "https://storage.googleapis.com/opentibet/korchag.jpg",
}

export const TibetInfo: React.FC<{}> = ({ }) => {
    const groupTitle = (text: string) => {
        return (
            <span>{text}</span>
        );
        // return (
        //     <div className='py-4 font-semibold text-xl'>{text}</div>
        // );
    };
    const translate = useTranslateFn()

    const defaultSize = `max-w-[48%]`;
    const mdSize = `md:max-w-[23%]`;

    return (
        <div>
            <div className='p-4'>
                <Accordion type="single" collapsible defaultValue="item-1">
                    <AccordionItem value="item-1" >
                        <AccordionTrigger>{groupTitle(translate({
                            ru: 'Центральный Тибет',
                            en: 'Central Tibet'
                        }) as string)}</AccordionTrigger>
                        <AccordionContent>
                            <Slick step={cardWidth}>
                                <ContentLhasa />
                                <ContentPotala />
                                <ContentJokang />
                                <ContentDrakYerpa />
                                <ContentGanden />
                                <ContentDrepung />
                                <ContentSera />
                            </Slick>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger>{groupTitle(translate({
                            ru: 'Северный Тибет',
                            en: 'Northern Tibet'
                        }) as string)}</AccordionTrigger>
                        <AccordionContent>
                            <Slick step={cardWidth}>
                                <ContentTsurphu />
                                <ContentNamTso />
                                <ContentReting />
                                <ContentTaklung />
                            </Slick>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger>{groupTitle(translate({
                            ru: 'Округ Шигадзе',
                            en: 'Shigatse District'
                        }) as string)}</AccordionTrigger>
                        <AccordionContent>
                            <Slick step={cardWidth}>
                                <ContentTashilhunpo />
                                <ContentGyandze />
                                <ContentSakya />
                                <ContentEverestBasecamp />
                                <ContentNgor />
                                <ContentNartang />
                                <ContentShalu />
                                <ContentYamdrok />
                                <ContentPelkhor />
                            </Slick>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                        <AccordionTrigger>{groupTitle(translate({
                            ru: 'Гирьонг',
                            en: 'Giryong'
                        }) as string)}</AccordionTrigger>
                        <AccordionContent>
                            <Slick step={cardWidth}>
                                <ContentGirjong />
                                <ContentShashibangma />
                                <ContentMilarepaBirthplace />
                                <ContentLangatsoLake />
                                <ContentPelkuTso />
                                <ContentChakraDaktso />
                                <ContentPakba />
                                <ContentDjatmin />
                            </Slick>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-5">
                        <AccordionTrigger>{groupTitle(translate({
                            ru: 'Королевство Гуге',
                            en: 'Guge Kingdom'
                        }) as string)}</AccordionTrigger>
                        <AccordionContent>
                            <Slick step={cardWidth}>
                                <ContentDungar />
                                <ContentTsaparang />
                                <ContentPiyang />
                                <ContentTholing />
                                <ContentTrithapuri />
                                <ContentZanda />
                                <ContentGaruda />
                                <ContentGurugjam />
                            </Slick>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-9">
                        <AccordionTrigger>{groupTitle(translate({
                            ru: 'Пуранг',
                            en: 'Purang'
                        }) as string)}</AccordionTrigger>
                        <AccordionContent>
                            <Slick step={cardWidth}>
                                <ContentPurang />
                                <ContentKorchag />
                            </Slick>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-6">
                        <AccordionTrigger>{groupTitle(translate({
                            ru: 'Мандала Кайласа',
                            en: 'Kailas Mandala'
                        }) as string)}</AccordionTrigger>
                        <AccordionContent>
                            <Slick step={cardWidth}>
                                <ContentKailasKora />
                                <ContentBuddhaThrone />
                                <ContentKailasSpiralKora />
                                <ContentKhandro />
                                <ContentMandjushri />
                                <ContentNandiKora />
                            </Slick>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-8">
                        <AccordionTrigger>{groupTitle(translate({
                            ru: 'Маносаровар Кора',
                            en: 'Manosarovar Kora'
                        }) as string)}</AccordionTrigger>
                        <AccordionContent>
                            <Slick step={cardWidth}>
                                <ContentManosarovar />
                                <ContentSeralung />
                                <ContentNjego />
                                <ContentTrugo />
                                <ContentGosul />
                                <ContentChiu />
                                <ContentCherkip />
                                <ContentLangpona />
                                <ContentBonriTemple />
                                <ContentRakshastal />
                                <ContentGangutso />
                            </Slick>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-7">
                        <AccordionTrigger>{groupTitle(translate({
                            ru: 'Восточный Тибет',
                            en: 'Eastern Tibet'
                        }) as string)}</AccordionTrigger>
                        <AccordionContent>
                            <Slick step={cardWidth}>
                                <ContentTsedang />
                                <ContentLamaling />
                                <ContentBuchu />
                                <ContentBatsumTso />
                                <ContentSamye />
                                <ContentDorjeDrak />
                                <ContentMidroling />
                                <ContentYumbulakhang />
                                <ContentChongye />
                                <ContentKading />
                            </Slick>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
                {/* Над Сакьей фото Шашипангма
            Озеро Ланга Цо заменить фото
             */}
            </div>
        </div>
    );
}; export const TibetInfoCard: React.FC<{
    imageSrc: string
    children: React.ReactNode
}> = ({ children, imageSrc }) => {
    const defaultHeight = 100
    const [isExpanded, setIsExpanded] = useState(false)
    const translate = useTranslateFn()
    return (
        <Dialog>
            <DialogTrigger>
                <div style={{ width: cardWidth }}>
                    <div className='mb-4 relative bg-white text-black'>
                        <img
                            src={imageSrc}
                            width={300}
                            height={200}
                            className='object-cover h-[190px]' />
                        <div className='text-sm leading-6 hyphens-auto' style={isExpanded ? {
                            height: 'auto'
                        } :
                            { height: `${defaultHeight}px`, overflow: 'hidden' }}>
                            {children}
                        </div>
                        <div className='h-10' />
                        <div className={`absolute w-full h-32 bottom-0 left-0 right-0 ${isExpanded ? '' : 'bg-gradient-to-b from-transparent to-white'}`}>
                            <div className='flex items-end h-full'>
                                <div className='text-center text-white flex w-full justify-center items-center cursor-pointer bg-blue-800 hover:bg-blue-900 p-2'>
                                    <div className='p-1 font-bold text-sm'>
                                        {translate({
                                            ru: "подробнее",
                                            en: "details"
                                        })}
                                    </div>
                                    <div style={isExpanded ? {
                                        transform: 'rotate(180deg)'
                                    } : {}}>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </DialogTrigger>
            <DialogContent className="h-auto">
                <DialogHeader>
                    {/* <DialogTitle>Are you sure absolutely sure?</DialogTitle> */}
                    <DialogDescription>
                        <div className="pt-4">
                            <img
                                src={imageSrc}
                                className='object-cover h-[220px] w-full rounded-lg' />
                        </div>
                    </DialogDescription>
                </DialogHeader>
                <div className="overflow-y-auto" style={{ maxHeight: '58vh' }}>
                    {children}
                </div>
            </DialogContent>
        </Dialog>
    )
}

export const TibetInfoCardTitle: React.FC<{
    children: React.ReactNode
}> = ({ children }) => {
    return (
        <div className='text-white-500 font-semibold text-base ml-3 pt-3'>
            {children}
        </div>
    )
}

export const TibetInfoCardContent: React.FC<{
    children: React.ReactNode
}> = ({ children }) => {
    return (
        <div className='px-3 py-2' style={{ zIndex: -1 }}>
            {children}
        </div>
    )
}

export const ContentLhasa = React.memo(() => {
    const translate = useTranslateFn()
    return (
        <TibetInfoCard imageSrc={imagesSrc.lhasa}>
            <TibetInfoCardTitle>{translate({
                ru: "Лхаса",
                en: "Lhasa"
            })}</TibetInfoCardTitle>
            <TibetInfoCardContent>
                {translate({
                    ru: "Лхаса — столица Тибета, автономного района Китая. Город расположен на высоте 3650 метров над уровнем моря и является важным центром тибетского буддизма.",
                    en: "Lhasa is the capital of Tibet, an autonomous region of China. The city is located at an altitude of 3650 meters above sea level and is an important center of Tibetan Buddhism."
                })}
                <br />
                <br />
                {translate({
                    ru: "Лхаса — это духовный центр Тибета, и в нем находится множество важных религиозных сооружений, в том числе дворец Потала, резиденция Далай-ламы, и Джоканг, первый буддийский храм в Тибете. Город также известен своими традиционными тибетскими рынками, где можно купить все, от одежды и сувениров до продуктов питания и лекарств.",
                    en: "Lhasa is the spiritual center of Tibet and is home to many important religious buildings, including the Potala Palace, the residence of the Dalai Lama, and the Jokhang, the first Buddhist temple in Tibet. The city is also known for its traditional Tibetan markets, where you can buy everything from clothing and souvenirs to food and medicine."
                })}
                <br />
                <br />
                {translate({
                    ru: "Лхаса — это захватывающий город, который предлагает посетителям возможность познакомиться с богатой культурой и историей Тибета.",
                    en: "Lhasa is a fascinating city that offers visitors the opportunity to experience the rich culture and history of Tibet."
                })}
            </TibetInfoCardContent>
        </TibetInfoCard>
    )
})

export const ContentPotala = () => {
    const translate = useTranslateFn()
    return (
        <TibetInfoCard imageSrc={imagesSrc.potala}>
            <TibetInfoCardTitle>{
                translate({
                    ru: "Дворец Потала",
                    en: "Potala Palace"
                })}</TibetInfoCardTitle>
            <TibetInfoCardContent>
                {translate({
                    ru: "Дворец Потала — это величественный буддийский храмовый комплекс, расположенный на вершине холма Марпори в Лхасе, Тибет. Он был построен в 7 веке и является резиденцией Далай-ламы, духовного лидера тибетского буддизма.",
                    en: "The Potala Palace is a majestic Buddhist temple complex located on top of Marpori Hill in Lhasa, Tibet. It was built in the 7th century and is the residence of the Dalai Lama, the spiritual leader of Tibetan Buddhism."
                })}
                <br />
                <br />
                {translate({
                    ru: "Дворец Потала состоит из двух частей: Белого дворца и Красного дворца. Белый дворец был построен в 17 веке и использовался в качестве официальной резиденции Далай-ламы. Красный дворец был построен в 16 веке и содержит множество религиозных сооружений, в том числе храм Джоканг.",
                    en: "The Potala Palace consists of two parts: the White Palace and the Red Palace. The White Palace was built in the 17th century and was used as the official residence of the Dalai Lama. The Red Palace was built in the 16th century and contains many religious buildings, including the Jokhang Temple."
                })}
                <br />
                <br />
                {translate({
                    ru: "Дворец Потала является объектом Всемирного наследия ЮНЕСКО и одним из самых популярных туристических направлений в Тибете. Он является символом тибетской культуры и религии и привлекает посетителей со всего мира.",
                    en: "The Potala Palace is a UNESCO World Heritage Site and one of the most popular tourist destinations in Tibet. It is a symbol of Tibetan culture and religion and attracts visitors from all over the world."
                })}
            </TibetInfoCardContent>
        </TibetInfoCard>
    )
}
export const ContentJokang = () => {
    const translate = useTranslateFn()
    return (
        <TibetInfoCard imageSrc={imagesSrc.jokang}>
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
}

const ContentGanden = () => {
    const translate = useTranslateFn()
    return (
        <TibetInfoCard imageSrc={imagesSrc.ganden}>
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
}

const ContentDrepung = () => {
    return (
        <TibetInfoCard imageSrc={imagesSrc.drepung}>
            <TibetInfoCardTitle>Монастырь Дрепунг</TibetInfoCardTitle>
            <TibetInfoCardContent>
                Расположен в 10 км западнее Лхасы. Важнейший духовный и образовательный центр Тибета, один из крупнейших монастырей в мире (площадь свыше 200 тыс. м2). Принадлежит к школе Гелуг. Название (Drepung) переводится как «горсть риса»: стены зданий монастыря на холме выкрашены в белый цвет. Входной билет стоит 60 юаней.
                Монастырь основан в 1416 г. Джамьяном Чод же, учеником Цонкапы. До строительства дворца Потала пятым Далай-ламой этот монастырь являлся резиденцией правителей Тибета.
                На территории монастыря находятся четыре факультета (Нгагпа, Лоселинг, Гоманг и Деянг), где студенты-монахи изучают в том числе тантрические практики и логику. Ежедневно с 14.30 до 16.30 на специальной дискуссионной площадке можно увидеть и услышать оживленно спорящих друг с другом молодых послушников. В эпоху независимого Тибета в монастыре насчитывалось до 15 тыс. монахов, сейчас – около 500.
                Экскурсионный маршрут по территории монастыря проходит по желтым указателям. Первой достопримечательностью является дворец Ганден (Ganden, XVI в.). Здесь находятся могилы второго, третьего и четвертого Далай-лам, а на верхнем этаже для посещения открыты их покои.
                Впечатляет Зал собраний – одно из главных зданий монастырского комплекса. В просторном помещении построено свыше 150 колонн. Среди статуй буддистских божеств выполнена и статуя основателя монастыря. Есть отдельный Зал тибетских царей со статуями первых правителей, а в часовне Миванг Лхакханг паломники поклоняются огромной статуе будущего Будды (Джампа). Ее основание находится на первом этаже здания.
            </TibetInfoCardContent>
        </TibetInfoCard>
    )
}

const ContentSera = () => {
    return (
        <TibetInfoCard imageSrc={imagesSrc.sera}>
            <TibetInfoCardTitle>Монастырь Сера</TibetInfoCardTitle>
            <TibetInfoCardContent>
                Монастырь Се́ра
                Еще один важнейший духовный и образовательный центр школы Гелуг расположен в 5 км к северу от Лхасы. Входной билет стоит 50 юаней. Монастырь был основан в 1419 г., его название (Sera) переводится как «монастырь диких роз». Когда-то здесь было пять факультетов и до 7 тыс. монахов; сегодня около 500 монахов обучаются на трех факультетах: Ме (основы буддизма), Нгагпа (тантрические практики) и Дже (обучение странствующих монахов не из центрального Тибета), – первый и второй из которых существуют с момента основания обители.
                В часовнях здания факультета Ме можно увидеть большую медную статую Будды Шакьямуни, скульптуры Будд прошлого, настоящего и будущего, основателя монастыря Сакья (Sakya) Йеше, а также по тысяче статуй божества-защитника и царя обезьян Ченрези, воплощения Авалокитешвары.
                Из всех факультетов самое большое здание принадлежит факультету Дже. Здесь есть огромный зал собраний, несколько чортенов с мощами наиболее прославленных лам Серы, часовня Тамдрин, посвященная главному божеству-покровителю Серы, и, как обычно, часовня Будды Шакьямуни.
                Во внушительном здании общемонастырского зала собраний (начало XVIII в.) можно увидеть статую Хаягривы – защитника буддизма и всех живых существ, а также особо почитаемую скульптуру ботхисаттвы Ченрези.
            </TibetInfoCardContent>
        </TibetInfoCard>
    )
}

const ContentDrakYerpa = () => {
    return (
        <TibetInfoCard imageSrc={imagesSrc.drakYerpa}>
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
}

const ContentTsurphu = () => {
    return (
        <TibetInfoCard imageSrc={imagesSrc.tsurphu}>
            <TibetInfoCardTitle>Цурпу</TibetInfoCardTitle>
            <TibetInfoCardContent>
                Цурпу — это буддийский монастырь, расположенный в 70 км к западу от Лхасы, Тибет. Он был основан в 12 веке и является родиной школы карма кагью тибетского буддизма.
                <br />
                <br />
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
}

const ContentNamTso = () => {
    return (
        <TibetInfoCard imageSrc={imagesSrc.namtso}>
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
}

const ContentReting = () => {
    return (
        <TibetInfoCard imageSrc={imagesSrc.reting}>
            <TibetInfoCardTitle>Монастырь Ретинг</TibetInfoCardTitle>
            <TibetInfoCardContent>
                Этот монастырь расположен на склоне холма на высоте 4200 м в долине Ронг-чу в окружении красивых и редко встречающихся древовидных можжевельников. Его построил в середине XI в. Дромтонпа, выдающийся ученик знаменитого буддистского мастера и переводчика Атиши. Согласно одной из легенд, можжевеловые деревья выросли из волос с головы Дромтонпы.
                В XIV в. Ретинг посетил сам лама Цонкапа, основатель школы Гелуг. После видения, в котором ему явился Атиша, Чжэ Ринпоче и написал свой знаменитый труд «Ламрим Ченмо».
                Ламы, настоятели монастыря, носят титул «Ретинг Ринпоче» и могут избираться регентами малолетнего Далай-ламы. Регентство Ретингов приходится, в частности, на периоды 1845–1855 и 1933–1947 гг. Пятый Ретинг сыграл важную роль в выборе среди детей нынешнего Далай-ламы и являлся его старшим преподавателем.
            </TibetInfoCardContent>
        </TibetInfoCard>
    )
}

const ContentTaklung = () => {
    return (
        <TibetInfoCard imageSrc={imagesSrc.taklung}>
            <TibetInfoCardTitle>Монастырь Таклунг</TibetInfoCardTitle>
            <TibetInfoCardContent>
                Таклунг расположен на высоте 4150 м. Он был основан в конце XII в. известным монахом Тангпой Ташипелом и принадлежит школе Кагью. Монастырем издревле руководят ламы-тулку, носящие одноименный титул. В период расцвета в обители жили до семи тысяч монахов, сейчас – около 70. В годы Культурной революции монастырь был частично разрушен. Сейчас идет активный процесс возрождения. Некоторые здания уже построены, но в них пока еще нет фресок и фигур божеств. В 2012 г. возвели нижний храм (колледж). Интересная деталь: перед приходом сюда китайской армии в 1959 г. местные жители разобрали самые ценные реликвии по домам и закопали их. Сейчас, когда обитель восстанавливается, многие тханки и скульптуры возвращаются назад.
                В центре поселка, частично скрытая домами, находится современная резиденция Таклунгов. На склоне холма сохранились массивные стены некогда величественного Красного дворца – главного храма (цуклакханга). Южнее – большой зал собраний, за которым до сих пор можно увидеть фундаменты стоявших здесь некогда трех больших чортенов. В одном из них хранились мощи основателя монастыря. Его бородатая статуя помещена в западную часовню зала собраний, которую используют как дискуссионную площадку.
            </TibetInfoCardContent>
        </TibetInfoCard>
    )
}


const ContentTashilhunpo = () => {
    return (
        <TibetInfoCard imageSrc={imagesSrc.tashilhunpo}>
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
}

const ContentGyandze = () => {
    return (
        <TibetInfoCard imageSrc={imagesSrc.gyandze}>
            <TibetInfoCardTitle>Гяндзе</TibetInfoCardTitle>
            <TibetInfoCardContent>
                Гьяндзе — это город в Тибетском автономном районе Китая. Он расположен на Тибетском нагорье, на высоте 3900 метров над уровнем моря. Гьяндзе является одним из старейших городов Тибета и является важным религиозным и культурным центром.
                <br />
                <br />
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
}

const ContentShalu = () => {
    return (
        <TibetInfoCard imageSrc={imagesSrc.shalu}>
            <TibetInfoCardTitle>Монастырь Шалу</TibetInfoCardTitle>
            <TibetInfoCardContent>
                Монастырь Шалу (Shalu)
                Обитель основал в 1040 г. известный монах и ученый Чецун Шераб Джунгней. Легенда гласит: Джунгней долго не мог найти место для будущего монастыря. Наконец его духовный наставник посоветовал ему пустить стрелу из лука, предварительно вверив ее мудрости Будды. Там, где упала стрела, и возвели главный храм. Входной билет стоит 60 юаней.
                Расцвет монастыря школы Сакья приходится на период XIV-XVII вв. В XIV в. настоятелем здесь был Будон Ринчен Друб (1290–1364), выдающийся буддистский историк, ученый и йогин, составивший обширные комментарии к Трипи́таке – каноническим письменным текстам раннего буддизма и написавший до сих пор актуальный труд «История буддизма в Индии и Тибете». Так возникла традиция Бу(па), или Шалу, школы Сакья. Деятельность Будона Ринпоче привлекла в обитель множество ученых монахов со всего Тибета, и к 1360-м гг. здесь уже насчитывалось около 3000 насельников. В этом монастыре Будонг написал 26 филосовских трактатов, посвященных буддизму.
                Монастырь славился далеко за пределами Тибета как центр обучения монахов паранормальным умениям «ходьбы в трансе». Особые духовные практики позволяли человеку без всяких усилий преодолевать пешком огромные расстояния, подниматься в воздух, ходить по воде, становиться невидимым, предсказывать будущее.
                К XIX в. влияние Шалу ослабло, а центром обучения стал монастырь Самье.
                О былом значении Шалу напоминают четыре его главные реликвии-сокровища. Это 700-летняя панель, сложенная из 108 блоков сандалового дерева с нанесенными на них сутрами. Если разрушить панель, собрать ее в том же порядке будет уже невозможно. Священным считается особый латунный сосуд с водой, завернутый в ткань красного цвета и запечатанный. Вода в нем святая и может исцелять от 108 болезней. Ее меняют раз в 12 лет. Чудом сохранилась оригинальная каменная «раковина» – камень естественного происхождения с большим углублением на поверхности, наполненным водой. Согласно легенде, эту «раковину» использовал для умывания основатель монастыря Чецун Шераб Джунгней. Уже в наше время при раскопках одного из самых первых зданий монастыря был обнаружен каменный диск с выгравированными на нем изображениями четырех чортенов и мантрой «Ом мани падне хум». В Шалу также хранится библиотека древних буддистских текстов.
                В главном зале монастыря стоит обратить внимание на 4 боковых храма. Храм Кангюр (Kagyur), храм Авалокитешвары (Budha temple) с его древней статуей из камня, храм Хаягривы и храм трех дверей. Очень интересные храмы на втором этаже монастыря – храм Дайкини (Yogini) и Будды Шакьямуни с 16 архатами.
            </TibetInfoCardContent>
        </TibetInfoCard>
    )
}

const ContentNgor = () => {
    return (
        <TibetInfoCard imageSrc={imagesSrc.ngor}>
            <TibetInfoCardTitle>Монастырь Нгор</TibetInfoCardTitle>
            <TibetInfoCardContent>
                Монастырь Нгор (Ngor)
                Монастырь был основан в 1429 г. известным монахом школы Сакья Нгор Ченом Кунгой Зангпой. Постепенно в монастыре оформилась особая традиция Нгор(па) школы Сакья. В период расцвета в обители было 5 резиденций великих лам, 19 жилых помещений, два больших зала для песнопений. Всего здесь проживало около 700 монахов.
                В XV веке здесь жил известный тибетский переводчик Таг Тцанг.
                Комплекс разрушили во время Культурной революции. Процесс восстановления начался давно и активно продолжается: заново воздвигнут храм, залы собраний, тронный зал, часовни, резиденция лам. Фасад здания зала собраний украшен традиционным для школы Сакья декором – вертикальные красные, белые и синие полосы, символизирующие трех бодхисаттв: Манджушри, Авалокитешвару и Ваджрапани.
                Обратите внимание на храм Тары справа от зала собраний. Здесь находятся очень старые статуи, возраст которых насчитывает 1600 лет: Тары, Парамиты, Ратнасабхаваы и Будды Шакьямуни.  Кора вокруг монастыря занимает менее часа. Сейчас Нгор– это крупнейший монастырь в окрестностях Шигадзе. На его осмотр нужно минимум 2 часа. Входной билет стоит 30 юаней.
            </TibetInfoCardContent>
        </TibetInfoCard>
    )
}

const ContentNartang = () => {
    return (
        <TibetInfoCard imageSrc={imagesSrc.nartang}>
            <TibetInfoCardTitle>Монастырь Нартанг</TibetInfoCardTitle>
            <TibetInfoCardContent>
                Монастырь Нартанг (Nartang)
                Нартанг (700 м) расположен в 14 км от Шигадзе в одноименной деревне. Он был основан в 1153 году ламой Тумтоном Лодро Дракпой и долгое время был центром традиции Кадам, позже оформившейся в школу Гелуг. Когда-то Нартанг был центром книгопечатания многотомных буддистских трактатов. Издание тибетских книг началось в XIII веке. Для этого вручную были вырезаны из дерева 125 тыс. блоков. Сейчас от прошлых времен сохранились лишь вырезанные в камне и раскрашенные рисунки буддистских святых. Храм, зал песнопений и жилые помещения были отстроены заново.
                В главном храме, в центральной части, установлена статуя Будды Шакьямуни. Слева находится храм Манджушри, справа – храм Будды Маятрии.
                Справа от главного храма можно осмотреть музей книгопечатания и экспозицию, которая включает в себя фотографии из жизни десятого Панчен-ламы. Входной билет стоит 25 юаней.
            </TibetInfoCardContent>
        </TibetInfoCard>
    )
}

const ContentYamdrok = () => {
    return (
        <TibetInfoCard imageSrc={imagesSrc.yamdrok}>
            <TibetInfoCardTitle>Озеро Ямдрок Юмцо</TibetInfoCardTitle>
            <TibetInfoCardContent>
                Ямдрок-Цо, или Ямдрок Юмцо, — это высокогорное озеро в Тибете, расположенное на высоте 4488 метров над уровнем моря. Оно является одним из четырех священных озер в Тибете, наряду с озерами Лхамо Лацо, Намцо и Мансаровар.
                <br />
                <br />
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
}

const ContentPelkhor = () => {
    return (
        <TibetInfoCard imageSrc={imagesSrc.pelkhor}>
            <TibetInfoCardTitle>Монастырь Палчо</TibetInfoCardTitle>
            <TibetInfoCardContent>
                Монастырь Палчо (Пелкхор Чод; Palcho, Pelkhor Chod) ранее принадлежал школе Сакья, сейчас – школе Гелуг. Главные здания были построены в традиционном для Тибета эклектичном стиле в начале XV в. местным правителем Рабтеном Кунзангом Пхакой, почитателем Кедруба Же (1385–1438), главного ученика Цонкапы, позже признанного первым Панчен-ламой. На протяжении столетий Палчо являлся важным образовательным центром школ Сакья и Гелуг: в XIX в. здесь насчитывалось около 20 колледжей (сейчас только два).
                Главный храм (цуклакханг) – трехэтажный, с хорошо сохранившимися фресками XV в. Своды большого зала собраний поддерживают 48 колонн. На стенах – многочисленные старинные тханки на шелковых тканях. В глубине зала – статуя Будды Шакьямуни высотой 8 м, на создание которой, по преданию, ушло 14 тонн бронзы. Входной билет – 60 юаней.
                Своеобразный символ Гьяндзе, и, пожалуй, всего Тибета – Чортен Кумбум (Gyantse Kumbum) - великолепный образец старинной буддистской священной архитектуры. Находится на территории монастыря Палчо рядом с цуклакхангом (уникальный случай для Тибета, обычно чортены располагаются вне стен монастырей). Это 9-этажное сооружение высотой 32 м построено в 1428 г. по канонам как священной геометрии («круг в квадрате») – первые пять этажей образуют многоступенчатую основу для круглого завершения, увенчанного куполом, – так и священной нумерологии – 76 часовен соединены между собой 108 проходами. Хорошо сохранились фрески XIV-XV вв., написанные непальскими мастерами.
            </TibetInfoCardContent>
        </TibetInfoCard>
    )
}

const ContentEverestBasecamp = () => {
    return (
        <TibetInfoCard imageSrc={imagesSrc.everestBasecamp}>
            <TibetInfoCardTitle>Базовый лагерь Эвереста</TibetInfoCardTitle>
            <TibetInfoCardContent>
                Это отельный маршрут на целый день, который начинается от Нового Тингри.
                Билеты покупаются в специальном офисе рядом с воротами. Входной билет стоит 160 юаней.
                Расстояние от ворот до самого лагеря, а точнее до смотровой площадки на него, составляет 92 км по дороге S515. Только половину пути вы сможете проехать на своем транспорте.
                Дорога S515
                22 км – перевал Гева (Geva La в переводе с тибетского – король) на высоте 4900 м.) Здесь же находится смотровая площадка на снежные вершины высочайших гор планеты
                24 км – смотровая площадка с молитвенными флагами
                50 км – деревня Таши Дзон (Tash Dzon), где вам необходимо пересесть на зеленый эко-бас, который привезет вас к монастырю Румбук.  Билет на автобус стоит 120 юаней. Время в пути – около 40 минут
                72 км – КПП, на котором проверяют паспорта и пермит
                92 км – монастырь Румбук (New Rumbuk), который принадлежит школе Ньингма и является одним из самых высокогорных монастырей Тибета (5100 м над уровнем моря. Основатель монастыря – Дзатул Ринпоче. Новому монастырю около 100 лет. Здесь монахами могут быть и мужчины, и женщины. Входной билет – 30 юаней.
                93 км – конец дороги и смотровая площадка (5100 м)
                К руинам старого монастыря Румбук, где находится знаменитая пещера Падмасабхавы, и к самому базовому лагерю (5150 м) с 2019 года проход запрещен.
            </TibetInfoCardContent>
        </TibetInfoCard>
    )
}

const ContentSakya = () => {
    return (
        <TibetInfoCard imageSrc={imagesSrc.sakya}>
            <TibetInfoCardTitle>Монастырь Сакья</TibetInfoCardTitle>
            <TibetInfoCardContent>
                Монастырь Сакья
                Монастырь расположен в одноименном городе и является его главной достопримечательностью. Комплекс зданий состоит из двух частей и расположен по обеим сторонам реки Трум-чу на высоте 4300 м. На северном берегу на склоне холма находятся более древние постройки (XI в.), разрушенные в годы Культурной революции и сейчас активно восстанавливаемые. Когда-то в 108 зданиях свыше трех тысяч монахов изучали тантрические практики. Монастырь открыт 9.00–18.00, входной билет стоит 50 юаней.
                На южном берегу реки за крепкими толстыми стенами с бастионами и сторожевыми башнями находится массивное здание более позднего храма (XIII в.). Благодаря тесным связям школы Сакья с Монгольским государством в XIII-XIV вв. оно построено в стиле монгольской архитектуры Наибольшее внимание паломников и туристов привлекает огромный Ллакханг Ченмо – Зал песнопений с четырьмя рядами колонн высотой 16 м, по 10 колонн в каждом ряду. Некоторые из них сделаны из цельных стволов деревьев и считаются священными. В зале великолепная акустика. Паломники выстраиваются в очередь, чтобы услышать, как монах дует в священную белоснежную раковину – дар монастырю от монгольского хана Хубилая (XIII в.). У левой стены – ряд массивных позолоченных статуй Будд, многие из которых служат хранилищами праха прежних настоятелей монастыря. Здесь же огромное количество священных артефактов, собранных со всего Тибета. В монастыре сохранилась огромная библиотека старинных фолиантов, а в 2003 г. была обнаружена замурованная потайная комната с собранием древних свитков – всего 84 тыс. Так же за стеклом в библиотеке хранится книга мудрости, после прикосновения к которой можно узнать о законах вселенной.
            </TibetInfoCardContent>
        </TibetInfoCard>
    )
}

const ContentGirjong = () => {
    return (
        <TibetInfoCard imageSrc={imagesSrc.girjong}>
            <TibetInfoCardTitle>Гирьонг</TibetInfoCardTitle>
            <TibetInfoCardContent>
                Гьиронг расположен в середине Гималаев на юго-западе от Шигадзе . Область граничит с Непалом, его общая площадь составляет 1200 квадратных километров. Протяженность границ –162 километра. Население области – около 25 тысч человек – распределено между 2 городами, 4 поселками и 42-мя деревнями. Из-за близости к Непалу регион часто подвергался нападениям со стороны этой страны. Гьиронг в переводе с тибетского означает «удобное и счастливое место». Уезд также называют «задним садом горы Эверест» и «последней страной тайн в Тибете». Связанная с названием легенда гласит, что, когда в конце VIII века Падмасамбхава прошел через эти земли, то, увидев прекрасные живописные пейзажи, эмоционально выдохнул слово «Гьиронг», выражая бесконечную похвалу и любовь. Долгое время Гирьонгом управляла династия Тубо, потом на смену пришла династия Гонг Тонг и, позже, Юань. В XVII веке Гьиронг являлся последним политическим оплотом школы Сакья. В средние века здесь находился центр книгопечатания тибетских книг. Область имела очень важное стратегическое значение, так как находилась на перекрестке торговых путей между Непалом и Индией
            </TibetInfoCardContent>
        </TibetInfoCard>
    )
}

const ContentShashibangma = () => {
    const translate = useTranslateFn()
    return (
        <TibetInfoCard imageSrc={imagesSrc.sashipangma}>
            <TibetInfoCardTitle>{
                translate({
                    ru: "Шашипангма",
                    en: "Shashipangma"
                })}</TibetInfoCardTitle>
            <TibetInfoCardContent>
                {translate({
                    ru: `Шишабангма — одна из высочайших вершин мира, занимающая четырнадцатое место среди восьмитысячников. Она имеет два пика: Главный — 8027 м  и Центральный — 8008 м.
                    Гора находится в центральном Тибете на территории Китая, в нескольких километрах от границы с Непалом. Впервые на нее взошла китайская экспедиция 2 мая 1964 года во главе с Сю Цзином, последней из всех 14 восьмитысячников.
                    В переводе с тибетского языка Шишабангма означает «суровый климат».На северном склоне Шишабангмы расположены долины и ледники длиной более 10 км. Повсюду разбросаны ледяные башни, которые на свету мерцают серебром. На вершине горы Шишапангма блестит снег, благодаря чему на солнце она кажется особенно впечатляющей. В 3000 метрах к востоку от главной вершины Шишабангмы расположен пик Моламенкинг, высота которого составляет 7703 метра над уровнем моря. Согласно местной легенде, Шишабангма была холодной богиней, а гора Моламенкинг являлась ее мужем. Другой холм с плоской вершиной, лежащий на севере, считался любовником богини. В решающей борьбе между двумя вершинами муж отрубил возлюбленной голову, а ему самому разрубили живот и выпустили кишки, которые впоследствии превратились в полосу ледника.
                    Название Шишабангма означает «мертвое мясо». Когда гора гневается, она насылает плохую погоду и неурожай, из-за которого домашний скот тибетцев умирает, и наступает голод.`,
                    en: `Shishabangma is one of the highest peaks in the world, ranking fourteenth among eight-thousanders. It has two peaks: Main - 8027 m and Central - 8008 m.
                    The mountain is located in central Tibet in China, a few kilometers from the border with Nepal. It was first climbed by a Chinese expedition on May 2, 1964, led by Xiu Jing, the last of all 14 eight-thousanders.
                    Translated from the Tibetan language, Shishabangma means “harsh climate.” On the northern slope of Shishabangma there are valleys and glaciers more than 10 km long. There are ice towers scattered everywhere, which shimmer silver in the light. The snow at the top of Mount Shishapangma makes it look especially impressive in the sun. 3000 meters east of the main peak of Shishabangma is Molamenking Peak, whose height is 7703 meters above sea level. According to local legend, Shishabangma was a cold goddess and Mount Molamenking was her husband. Another flat-topped hill, lying to the north, was considered the lover of the goddess. In the decisive struggle between the two peaks, the husband cut off his beloved's head, and his own stomach was cut open and his intestines were released, which later turned into a strip of glacier.
                    The name Shishabangma means "dead meat". When the mountain is angry, it sends bad weather and crop failures, causing the Tibetans' livestock to die and famine to occur.`
                })}
            </TibetInfoCardContent>
        </TibetInfoCard>
    )
}

const ContentPelkuTso = () => {
    const translate = useTranslateFn()
    return (
        <TibetInfoCard imageSrc={imagesSrc.pelkutso}>
            <TibetInfoCardTitle>{translate({
                ru: "Озеро Пелку Цо",
                en: "Lake Pelku Tso"
            })} </TibetInfoCardTitle>
            <TibetInfoCardContent>
                {translate({
                    ru: `Озеро Пеку-Цо - одно из четырех святых высокогорных озер Тибета. Оно расположено на высоте около 4590 метров на стыке графств Гьиронг и Ньялам префектуры Шигадзе, примерно в 250 километрах от округа Тингри. Пеку-Цо является крупнейшим озером в Шигадзе, его площадь составляет около 300 квадратных километров. На юге озера, примерно в 60 км, находится гора Шишабангма.
                    Когда великий Падмасабхава по приглашению короля Трисонга Децена направлялся в Тибет, его путь лежал через Гьиронг. В то время эту местность населяли бонские божества и демоны. Чтобы пройти на территорию Тибета, Гуру Ринпоче пришлось постоянно сражаться с ними. Они прикладывали все силы, чтобы буддизм не был возрожден в Тибете. Одной из самых могущественных демониц была Кангра Шаме. Падмасабхаве никак не удавалось ее убить. Чувствуя свою неминуемую смерть, она решила спрятаться на дне озера Пеку-Цо. Гуру Ринпоче пришел на берег озера и силами своих мантр заставил воду закипеть. Демоница не смогла долго скрываться в ней. Плоть отошла от костей, и ее скелет вылетел из озера. В итоге она поклялась служить Падмасабхаве и всем живым существам. Гуру Ринпоче принял ее предложение и превратил в Дакиню. Недалеко от озера есть гора Кангра Шаме, где демоница обитает и по сей день. А озеро считается священным, так как оно было благословлено Падмасабхавой.`,
                    en: `Peku Tso Lake is one of the four holy highland lakes of Tibet. It is located at an altitude of about 4,590 meters at the junction of Gyirong and Nyalam counties in Shigatse Prefecture, about 250 kilometers from Tingri County. Peku Tso is the largest lake in Shigatse, covering an area of about 300 square kilometers. In the south of the lake, about 60 km away, is Mount Shishabangma.
                    When the great Padmasabhava, at the invitation of King Trisong Detsen, went to Tibet, his path lay through Gyirong. At that time, this area was inhabited by Bon deities and demons. To enter Tibet, Guru Rinpoche had to constantly fight with them. They made every effort to prevent Buddhism from being revived in Tibet. One of the most powerful demons was Kangra Shame. Padmasabhava could not kill her. Feeling her imminent death, she decided to hide at the bottom of Lake Peku-Tso. Guru Rinpoche came to the shore of the lake and with the power of his mantras made the water boil. The demoness could not hide in it for long. The flesh fell away from the bones and her skeleton flew out of the lake. As a result, she vowed to serve Padmasabhava and all living beings. Guru Rinpoche accepted her offer and turned her into a Dakinya. Not far from the lake there is Mount Kangra Shame, where the demoness lives to this day. And the lake is considered sacred as it was blessed by Padmasabhava.`
                })}
            </TibetInfoCardContent>
        </TibetInfoCard>
    )
}

const ContentChakraDaktso = () => {
    const translate = useTranslateFn()
    return (
        <TibetInfoCard imageSrc={imagesSrc.chakraDamtso}>
            <TibetInfoCardTitle>{
                translate({
                    ru: "Чакра Дакцо",
                    en: "Chakra Daktso"
                })}</TibetInfoCardTitle>
            <TibetInfoCardContent>
                {translate({
                    ru: 'Высокогорный храм Чакра Дакцо (Chakra Dakzo) на месте пещер, где долгое время жил Миларепа. По одной из версий, это именно то самое место, откуда он ушелв высшие миры. Место очень энергетически сильное. Стоит обратить внимание на три пещеры, где Миларепа медитировал 3, 6 и 9 лет. Подъем к храму и пещерам на 200 метров занимает примерно 1.5 часа. Так что закладывайте на общую продолжительность экскурсии 4 часа.',
                    en: 'The high mountain temple of Chakra Dakzo on the site of the caves where Milarepa lived for a long time. According to one version, this is exactly the place from where he left for the higher worlds. The place is very energetically strong. It is worth paying attention to the three caves where Milarepa meditated for 3, 6 and 9 years. The 200-meter climb to the temple and caves takes approximately 1.5 hours. So allow 4 hours for the total duration of the excursion.'
                })}
            </TibetInfoCardContent>
        </TibetInfoCard>
    )
}

const ContentPakba = () => {
    const translate = useTranslateFn()
    return (
        <TibetInfoCard imageSrc="https://storage.googleapis.com/opentibet/pakba.jpg">
            <TibetInfoCardTitle>{translate({
                ru: "Пакба",
                en: "Pakba"
            })}</TibetInfoCardTitle>
            <TibetInfoCardContent>
                {translate({
                    ru: "Главный храм города – Пакба (640 г. н.э.). Этот храм был построен в 7 веке, по приказу Сангцена Гампо, когда непальская принцесса Бхрихути ехала в Лхасу. Главной достопримечательностью является сандаловая статуя бодхисаттвы Авалокитешвары – одна из 4-х священных статуй. Этот храм, один из 12-ти, фиксирующий лодыжку злобной демоницы, форму которой имела территория Тибета в VII веке.",
                    en: "The main temple of the city is Pakba (640 AD). This temple was built in the 7th century, by order of Sangtsen Gampo, when the Nepalese princess Bhrihuti was traveling to Lhasa. The main attraction is the sandalwood statue of the bodhisattva Avalokiteshvara - one of the 4 sacred statues. This temple, one of 12, fixes the ankle of an evil demoness, whose form was in the territory of Tibet in the 7th century."
                })}
            </TibetInfoCardContent>
        </TibetInfoCard>
    )
}

const ContentDjatmin = () => {
    const translate = useTranslateFn()
    return (
        <TibetInfoCard imageSrc="https://storage.googleapis.com/opentibet/djatmin.jpg">
            <TibetInfoCardTitle>{
                translate({
                    ru: "Храм Джатмин",
                    en: "Jatmin Temple"
                })}</TibetInfoCardTitle>
            <TibetInfoCardContent>
                {translate({
                    ru: `Храм Джатмин (Jatmin lakhang) – это трех-этажная пагода VII века, также фиксирующая левую ногу демоницы.
                    Храм расположен рядом с храмом Мани (Mani Lakhang). Это пещерный храм XII века (верстовой столб 169 км), где можно найти изображения 3-х бодхисаттв. – Манджушари, Ваджрапани и Авалокитешвары. Высота статуй – около 2 метров`,
                    en: `Jatmin Temple (Jatmin lakhang) is a three-story pagoda of the 7th century, also fixing the left leg of the demoness.
                    The temple is located next to the Mani Lakhang Temple. This is a 12th century cave temple (milestone 169 km), where you can find images of 3 bodhisattvas. - Manjushari, Vajrapani and Avalokiteshvara. The height of the statues is about 2 meters`
                })}
            </TibetInfoCardContent>
        </TibetInfoCard>
    )
}

const ContentMilarepaBirthplace = () => {
    const translate = useTranslateFn()
    return (
        <TibetInfoCard imageSrc="https://storage.googleapis.com/opentibet/milarepa-birthplace.jpg">
            <TibetInfoCardTitle>{translate({
                ru: "Место рождения Миларепы",
                en: "Milarepa's birthplace"
            })}</TibetInfoCardTitle>
            <TibetInfoCardContent>
                {translate({
                    ru: "Место рождения Миларепы — это деревня Га в Тибете, где он родился в 1052 году. Деревня является важным местом паломничества для буддистов со всего мира.",
                    en: "Milarepa's birthplace is the village of Ga in Tibet, where he was born in 1052. The village is an important pilgrimage site for Buddhists from all over the world."
                })}
            </TibetInfoCardContent>
        </TibetInfoCard>
    )
}

const ContentLangatsoLake = () => {
    const translate = useTranslateFn()
    return (
        <TibetInfoCard imageSrc="https://storage.googleapis.com/opentibet/langtso.jpg">
            <TibetInfoCardTitle>
                {translate({
                    ru: "Озеро Ланга Цо",
                    en: "Lake Langa Tso"
                })}
            </TibetInfoCardTitle>
            <TibetInfoCardContent>
                {translate({
                    ru: "С 2022 года для посещения иностранцами открыто озеро Ланга-Цо (Langa Tso). Озеро расположено высоко в горах, в 15 км от Гьиронга. Дорога на джипе занимает 45 минут. Но она того стоит. Это священное для тибетцев озеро связано с Душой Кармапы. Еще одно название озера – «Исполняющее желания».",
                    en: "Since 2022, Lake Langa Tso will be open to foreigners. The lake is located high in the mountains, 15 km from Gyirong. The journey by jeep takes 45 minutes. But she's worth it. This lake, sacred to the Tibetans, is associated with the Soul of the Karmapa. Another name for the lake is “Wish-Fulfilling”."
                })}
            </TibetInfoCardContent>
        </TibetInfoCard>
    )
}

const ContentTsaparang = () => {
    const translate = useTranslateFn()
    return (
        <TibetInfoCard imageSrc="https://storage.googleapis.com/opentibet/tsaparang.jpg">
            <TibetInfoCardTitle>{
                translate({
                    ru: "Цапаранг",
                    en: "Tsaparang"
                })}</TibetInfoCardTitle>
            <TibetInfoCardContent>
                {translate({
                    ru: `Цапаранг расположен в 18 км от Тхолинга (по улице Xiang Xiong Lu в направлении указателя Ancient Guge Kingdom). Фактически это дворцово-храмово-пещерный комплекс площадью более чем 700 м2 в огромной высокой скале высотой свыше 200 м. На протяжении столетий здесь было вырыто свыше 1000 пещер. Бо́льшая часть из них (со сводчатыми потолками) служила в качестве дворцовых и храмовых помещений. Всего ученые обнаружили 500 комнат, 60 крепостных бастионов и 30 буддистских храмов. Не все они открыты для туристов.
                    От входа в комплекс на вершину скалы ведет тропа со ступеньками. Поднимаясь наверх, туристы посещают три храма: маленький Дролма Лхакханг и большие Лхакханг Карпо («Белый»; Lhakhang Karpo) и Лхакханг Марпо («Красный»; Lhakhang Marpo). В каждом из них сохранились потрясающие росписи стен, датируемые XVI-XVII вв., с очевидным влиянием древней буддистской кашмирской традиции. До наших дней сохранилось очень мало образцов этого искусства, и тем ценнее фрески Цапаранга.`,
                    en: `Tsaparang is located 18 km from Tholing (along Xiang Xiong Lu Road in the direction of the Ancient Guge Kingdom sign). In fact, this is a palace-temple-cave complex with an area of more than 700 m2 in a huge high rock over 200 m high. Over the centuries, over 1000 caves have been dug here. Most of them (with vaulted ceilings) served as palace and temple premises. In total, scientists discovered 500 rooms, 60 fortress bastions and 30 Buddhist temples. Not all of them are open to tourists.
                    From the entrance to the complex a path with steps leads to the top of the rock. Climbing up, tourists visit three temples: the small Drolma Lhakhang and the large Lhakhang Karpo (“White”; Lhakhang Karpo) and Lhakhang Marpo (“Red”; Lhakhang Marpo). Each of them contains stunning wall paintings dating from the 16th-17th centuries, with obvious influences from the ancient Buddhist Kashmiri tradition. Very few examples of this art have survived to this day, and the more valuable are the Tsaparang frescoes.`
                })}
            </TibetInfoCardContent>
        </TibetInfoCard>
    )
}

const ContentTholing = () => {
    const translate = useTranslateFn()
    return (
        <TibetInfoCard imageSrc="https://storage.googleapis.com/opentibet/tholing.jpg">
            <TibetInfoCardTitle>{translate({
                ru: "Тхолинг",
                en: "Tholing"
            })} </TibetInfoCardTitle>
            <TibetInfoCardContent>
                {translate({
                    ru: "Древний город (Тхолинг, Занда (Zanda)) на берегу реки Сетледж находится на высоте 3600 м. Чуть западнее от него расположен Цапаранг (Tsaparang).",
                    en: "The ancient city (Tholing, Zanda) on the banks of the Setledge River is located at an altitude of 3600 m. A little to the west of it is Tsaparang."
                })}
                <br />
                <br />
                {translate({
                    ru: `Эти города являлись столицами средневекового царства Гуге.
                    Основной достопримечательностью Тхолинга является одноименный монастырь (конец Х в.) на берегу реки, некогда бывший самым крупным и влиятельным во всем западном Тибете.`,
                    en: `These cities were the capitals of the medieval kingdom of Guge.
                    The main attraction of Tholing is the monastery of the same name (late 10th century) on the river bank, which was once the largest and most influential in all of western Tibet.`
                })}
                <br />
                <br />
                {translate({
                    ru: "К сожалению, он сильно пострадал в годы Культурной революции. Из двух его главных храмов – Красного и Белого – хорошо сохранился только Красный, так как его использовали в качестве зернохранилища. Рядом с монастырем находится чортен, посвященный Еше О (X-XI вв.; Nampar Nang Lhakhang), великому правителю царства Гуге.",
                    en: "Unfortunately, it suffered greatly during the Cultural Revolution. Of its two main temples - Red and White - only Red is well preserved, as it was used as a granary. Next to the monastery there is a chorten dedicated to Yeshe O (X-XI centuries; Nampar Nang Lhakhang), the great ruler of the Guge kingdom."
                })}
                <br />
                <br />
                {translate({
                    ru: "В настоящее время монастырь почти восстановлен. Входной билет стоит 45 юаней.",
                    en: "Currently, the monastery is almost restored. The entrance ticket costs 45 yuan."
                })}
            </TibetInfoCardContent>
        </TibetInfoCard>
    )
}

const ContentTrithapuri = () => {
    return (
        <TibetInfoCard imageSrc="https://storage.googleapis.com/opentibet/trithapuri.jpg">
            <TibetInfoCardTitle>Монастырь Тиртхапури</TibetInfoCardTitle>
            <TibetInfoCardContent>
                Это священное место на высоте 4300 м считается границей между материальным миром и миром богов. Название образовано от слова «тиртха», что в переводе с санскрита означает «священное место, где есть пруд, озеро или река, воды которых считаются святыми». Во время посещения Тиртхи принято совершать омовение в священных водах. Тиртхапури тесно связано как с Падмасамбхавой, так и с Дордже Пхагмо – духовной супругой Чакрасамвары.
                Кора вокруг Тиртхапури является очень важной для буддистов. Считается, что 13 Кор вокруг Тиртхапури равны одной Кайлас-Коре, поэтому посещение священной земли очень помогает синхронизации с энергиями Кайласа, а омовение в ее источниках способствует излечению от многих болезней.
                Кора вокруг Тиртхапури начинается от похожего на шивалингам черного камня с отпечатком волчьей лапы. Дорога ведет на холм, у подножия которого расположен монастырь Тиртхапури (Tirthapuri). Слева амфитеатром расположены складки скальных пород белого цвета, их называют «1000 будд». Справа внизу видны напоминающие термитники коричневые сталактитообразные каменные образования («8 Падмасамбхав»).
                Паломники подходят к заднему входу в монастырь. Здесь находится большая стена из мани – молитвенных камней. Огромный круг, сложенный из них, символизирует озеро Манасаровар. Возле молитвенных барабанов есть место, где можно узнать о своей карме. Из отверстия в земле паломники вытаскивают камешек или белого (символизирует хорошую карму), или черного (плохая карма) цвета.
                Монастырь Тиртхапури (его еще называют Гуру Ринпоче) построен на месте пещеры, в которой медитировал Падмасамбхава.
            </TibetInfoCardContent>
        </TibetInfoCard>
    )
}


const ContentZanda = () => {
    return (
        <TibetInfoCard imageSrc="https://storage.googleapis.com/opentibet/zanda.jpg">
            <TibetInfoCardTitle>Национальный парк Занда</TibetInfoCardTitle>
            <TibetInfoCardContent>
                Национальный парк Занда – это лунные пейзажи и каменный лес, которые образовались в результате подъема тибетского плато 3 млн лет назад.
                <br />
                <br />
                Извилистая дорога S565 длинной 110 км с многочисленными смотровыми площадками проходит через весь парк.
                Этот серпантин, – один из красивейших в Тибете. Крутые горные перевалы сменяются зелеными долинами, вдали виднеется снежная шапка священной горы Камет (Kamet, 7756 м) или Нанди Деви (Nandi Devi), почитаемой тибетцами наравне с Кайласом (Kailash).
                <br />
                <br />
                Многие считают, что Камет – это и есть гора Гандхамандана (Gandhamandana, «опьяняющая благовониями»), упоминаемая в знаменитом индийском эпосе «Махабхарата».
            </TibetInfoCardContent>
        </TibetInfoCard>
    )
}

const ContentGaruda = () => {
    return (
        <TibetInfoCard imageSrc="https://storage.googleapis.com/opentibet/garuda.jpg">
            <TibetInfoCardTitle>Долина Гаруды</TibetInfoCardTitle>
            <TibetInfoCardContent>
                Долина Гаруды – одно из самых загадочных и мистических мест западного Тибета. С цивилизацией ее раньше соединял небольшой деревянный мост, украшенный разноцветными молитвенными флагами (лунг-та).
                Под ним висели головы яков, которые служили защитой для данного места. Теперь рядом с уже полуразрушенным старым мостом построили новый железный.
                <br />
                <br />
                По обоим берегам Сетледжа в туфовых породах находятся термальные источники, обрамленные белыми кристаллами соли. Они напоминают мраморные ванны с горячей минеральной водой. Большинство ванн пустые – источники пересохли.
                Серо-красные скалы поднимаются на головокружительную высоту.
                <br />
                <br />
                На вершине холма – руины древних построек, которые венчает дворец, похожий на неприступную крепость. Справа и слева от него – усеянные пещерами скалы белого цвета, поэтому складывается впечатление, что у дворца в центре огромные белые крылья. Неслучайно его назвали Серебряный дворец Гаруды.
                Огромный серебряный амфитеатр с пещерным городом внутри венчает большая пирамида из молитвенных флагов (высота над уровнем моря 4400 м). Попасть к ней можно как с левой стороны, так и с правой, но первый вариант намного сложнее и связан с некоторым риском для жизни.
                <br />
                <br />
                Поэтому самое разумное – сделать своеобразную Кору вокруг Серебряного дворца в направлении против часовой стрелки: поднимаешься справа, а спускаешься слева.
            </TibetInfoCardContent>
        </TibetInfoCard>
    )
}

const ContentGurugjam = () => {
    return (
        <TibetInfoCard imageSrc="https://storage.googleapis.com/opentibet/gurugjam.jpg">
            <TibetInfoCardTitle>Монастырь Гуругьям</TibetInfoCardTitle>
            <TibetInfoCardContent>
                Древний бонский монастырь Гуругьям (Gurugam) со свастикой на фасаде. Его основал лама Кьюнгтрил Джигме Намкха Дордже (1897–1956), появившийся здесь в 1930 г. Монастырь стал очень важным местом для всех тибетских буддистов. В 1950 г. здесь насчитывалось около 60 монахов. В 2013 г. монастырь решили целиком перестроить: сначала разобрать до основания, а потом воссоздать. Сейчас восстановление завершено.
                Одна из самых известных реликвий монастыря – карта страны Олмо, или «Карта Шамбалы». В центре изображена 9-этажная гора со свастиками и истоки четырех великих священных рек: изо рта Слона выходит Сетледж, из клюва Павлина – Карнали, изо рта Лошади – Брахмапутра, из пасти Льва – Инд. Авторы многих известных книг подтверждают в своих исследованиях взаимосвязь Кунлунга и Шамбалы.
                Справа от монастыря, на вершине высокой скалы, находится ретрит Юнгдрунг Ринчин Барба Друб Пхуг («Пещера драгоценного камня блестящей свастики»). Согласно легенде, здесь в Х в. медитировал легендарный бонпо Дренпа Намка. Ретрит уже много лет закрыт для иностранцев.
            </TibetInfoCardContent>
        </TibetInfoCard>
    )
}



const ContentDungar = () => {
    return (
        <TibetInfoCard imageSrc="https://storage.googleapis.com/opentibet/dungar.jpg">
            <TibetInfoCardTitle>Дунгар</TibetInfoCardTitle>
            <TibetInfoCardContent>
                Пещеры Дунгкар (Dungkar) (4250 м). Они находятся посередине скалы высотой в 200 метров, к ним можно подняться по насыпи из мелких камней. Вершина скалы плоская – вероятно, когда-то здесь была крепость. Три пещеры скорее всего использовались как храмы, и в них до сих пор сохранились изумительные росписи (XII в.), по стилю отличные от фресок в Цапаранге, выполненные в традициях Кашмира и Центральной Азии. Ученые нашли похожие росписи в Дунхуанге в Китае на расстоянии 1600 км от Дунгкара (Dungkar). Через Дунхуанг проходил Великий шелковый путь.
            </TibetInfoCardContent>
        </TibetInfoCard>
    )
}

const ContentPiyang = () => {
    return (
        <TibetInfoCard imageSrc="https://storage.googleapis.com/opentibet/piyang.jpg">
            <TibetInfoCardTitle>Пиянг</TibetInfoCardTitle>
            <TibetInfoCardContent>
                Комплекс Пиянг (Piyang) внешне напоминает Цапаранг: огромная высокая скала, изрытая пещерами и с храмом на вершине. Впервые храм в Пиянге возвел приблизительно в 1000 г. царь Еше О, но сегодня от него мало что осталось. В двух пещерах сохранились красивые росписи.
            </TibetInfoCardContent>
        </TibetInfoCard>
    )
}

const ContentPurang = () => {
    return (
        <TibetInfoCard imageSrc={imagesSrc.purang}>
            <TibetInfoCardTitle>Пуранг</TibetInfoCardTitle>
            <TibetInfoCardContent>
                Пуранг. Это приграничный город, который находится в 10 км от границы с Непалом.
                Пуранг был основан 1961 году, его население составляет 13 тысяч человек.
                Дорога в Пуранг начинается в Барке. В Пуранге на горе при въезде находится монастырь Шапелинг (Sha pel ling), основанный в XVII веке.
                Монастырь принадлежит школе Гелуг. Главные святыни – статуя Будды Шакьямуни и Мастера Цонкапы. Также стоит обратить внимание на ступу с останками генерала Гандена Цевгагна (Ganden Tsewang), который известен своими победами над армией Ладакха.
            </TibetInfoCardContent>
        </TibetInfoCard>
    )
}

const ContentKorchag = () => {
    return (
        <TibetInfoCard imageSrc={imagesSrc.korchag}>
            <TibetInfoCardTitle>Корчаг</TibetInfoCardTitle>
            <TibetInfoCardContent>
                В 18 км от Пуранга находится очень известный монастырь XII века Корчаг. Это очень известное священное место. Он был построен великим переводчиком Ринченом Цангпо и вначале относился к линии Кадам, а позднее перешел к линии Сакья. В монастыре находится статуя Джобо Джампа Дордже (Бодхисаттвы Манджушри), которая была благословлена самим Ринченом Цангпо. В предании говорится, что, когда эту статую везли в Га Эр, около Кеджиа она внезапно заговорила и произнесла: «Я останусь здесь». Тогда на этом месте был построен главный зал собраний.
                Самыми священными и почитаемыми объектами в монастыре являются говорящая статуя Долмы (Тары), собрания Кангьюра (перевод слов Будды) и Тенгьюра (перевод учений) и стенные росписи Тридцати Пяти Будд Откровения, изображения  (статуи) Шестнадцати Архатов и Двадцати Одной Гневной Тары.
            </TibetInfoCardContent>
        </TibetInfoCard>
    )
}

const ContentKailasKora = () => {
    return (
        <TibetInfoCard imageSrc={imagesSrc.vneshKora}>
            <TibetInfoCardTitle>Внешняя Кора</TibetInfoCardTitle>
            <TibetInfoCardContent>
                Для представителей всех местных конфессий Кайлас-Кора имеет огромное символическое значение как особый путь духовного развития, во время которого сжигается негативная карма паломников. Распростертые сферические зеркала Кайласа создают энергетические поля особой частоты и интенсивности, и тонкие тела любого человека, попав в эти поля, могут с ними синхронизироваться. Главное – услышать Кайлас, настроиться на его волну.
                Для иностранцев Кайлас-Кора – кульминационное событие каждого паломничества в Тибет. Протяженность маршрута – около 55 км, время прохождения варьируется: тибетские паломники обычно совершают Кору за один день, западные туристы – за два-три. Местные жители стараются проводить этот ритуал в полнолуние, когда одна Кора засчитывается за три.
                Обычно европейские туристы начинают маршрут Кайлас коры от Тарпоче, куда их привозит автобус из Дарчена.
                Тарпоче (Tarboche/Darpoche). Название переводится как «большой флагшток». Здесь каждый год в июле отмечается один из главных буддистских праздников – день рождения Будды Шакьямуни, его Просветление и смерть. Перед началом Кайлас-Коры сакральный флагшток обычно обходят трижды по часовой стрелке.
                Прямо за Тарпоче находится Плато «небесных похорон» 84-х Махасиддх, или Терраса Мандалы (Mandala Terrace). Это кладбище, где тибетцы оставляют тела умерших высших духовных лиц.
                Над ним находится еще один объект поклонения – пещера Наро Бон-Чунга с отпечатком стопы Миларепы (Milarepa’s Footprint).
                Немного в стороне от пещеры расположен источник с целебной водой, а на скале, напоминающей гробницу, находится утес Шестнадцати Нерукотворных Архатов (архат – человек, достигший Нирваны).
                К востоку от Тарпоче можно увидеть «неизменный ноготь» – едва заметный след Учителя Будды в окружении 500 следов буддистских святых (500 Arhats Assembly).
                Слева от Тарпоче расположен Чортен Кангни (Kangnyi), завешенный множеством молитвенных флагов. Известно, что чортен Кангни много раз разрушали враги, но он всегда самовосстанавливался. Здесь паломники совершают важнейший ритуал: они трижды обходят чортен по часовой стрелке и один раз проходят сквозь него, звоня при этом в находящиеся внутри колокола. Так они очищают свою карму.
                Пройдя от чортена вперед, попадаем в нижнюю часть долины реки Лха-чу (Lha Chu). Это место, которое называется Сердзонг (Serdzong, Sershong), что значит «бочонок с золотом».
                Преодолев около 1,5 км (набор высоты 4730–4750 м), подходим к первому чайному домику (Tea House) на тропе Внешней Коры. Здесь можно перекусить или попить чайю. Еще выше находится монастырь Чуку Гомпа – одно из самых интересных сакральных сооружений на данном маршруте. Удивительно, но его посещает от силы четверть паломников.
                По дороге от Чуку Гомпа слева можно видеть так называемые Три Вершины Долгожительства (по порядку): Тара (Tara, 5936 м), Амитаюс-ри (Amitayus Ri, 6010 м) и Виджая (Vidschaya, 5938 м). Ближе всех к следующему монастырю Дрира Пхуг находится гора Гесар-Линг-ри (Gesar Ling Ri, 5690 м), названная в честь легендарной личности – короля Гесара.

                Напротив Тары на другом берегу реки Лха-чу возвышается гора Гуру Ринпоче Торма (Guru Rimpoche Torma, 5656 м). За ней завораживающее Западное лицо Кайласа. Эта грань священной горы представляет собой почти сферическое зеркало.
                Здесь же находится место второго простирания (2nd Prostration Point, 4900 м). Расстояние от монастыря Чуку Гомпа до него – 5,5 км. Рядом – камень Махакалы (Rock of Mahakalas) с многочисленными молитвенными флагами.
                Монастырь Дрира Пхуг находится напротив Северного лица Кайласа.
                Основанный в 1213 г. монастырь Дрира Пхуг (Drira Phug) принадлежит линии Дрикунг школы Кагью. Если от монастыря смотреть на Кайлас, то справа к нему примыкает гора Ваджрапани, слева – Авалокитешвары. Долина между ними называется Гангьям-чу (Gangyam Сhu). Третья из здешних вершин, посвященная Манджушри, как бы прислонилась к горе Пхакна-ри (Phakna Ri, 5998 м), которая упирается в Восточное плечо Кайласа, каменное зеркало Дхарма Кинг Норсанг.

                Перевал Дролма
                Самая высокая точка маршрута Внешней Кайлас-Коры.
                Кладбище Шива Цаль, самопроявленная буква «अ» и перевал Дролма представляют собой мифо-энергетическое триединство: паломник проходит сквозь ритуальную смерть – пустотность – и получает потенциальную энергию, заново рождаясь.
                Вершина перевала представляет собой плоский валун, полностью завешанный молитвенными флагами.
                Сразу за перевалом дорога резко идет вниз. Примерно через 50 м спускаемся к священному озеру Гаури Кунд (Gauri Kund), или озеру Сострадания (Lake of Compassion, 5608 м), у склона горы Шарма-ри.
                Третий монастырь на внешней коре- Зутрул Пхуг (Zutrul Phug), или «Пещера Магических Сил» (4800 м). Обитель принадлежит линии Дрикунг школы Кагью. Гора над ней называется «След Учителя Будды» (5924 м).
                Главная святыня монастыря – пещера, где медитировал великий йогин Миларепа. Здесь же находится его статуя. На черном потолке – отпечатки рук и головы Миларепы. Снаружи монастыря, в нескольких метрах на юг, вертикально стоит огромная шестигранная глыба, окруженная каменной стеной.
                Отсюда до автобусной остановки около 10 км, где туристов забирает автобус и отвозит в Дарчен.
            </TibetInfoCardContent>
        </TibetInfoCard>
    )
}

const ContentKailasSpiralKora = () => {
    return (
        <TibetInfoCard imageSrc="https://storage.googleapis.com/opentibet/spiral-kora.jpg">
            <TibetInfoCardTitle>Спиральная Кора</TibetInfoCardTitle>
            <TibetInfoCardContent>
                СПИРАЛЬНАЯ КОРА
                Для индуистов гора Кайлас – это место пребывания бога Шивы и его супруги Парвати, для буддистов – Будды Чакрасамвары (Buddha Chakrasamvara, тиб. Demchok) и его супруги Ваджраварахи (Vajravarahi, тиб. Dorje Phagmo). Будда Чакрасамвара имеет четыре лица, сориентированных по сторонам света, каждому из которых соответствует определенный цвет и драгоценный камень. Первое лицо считается Восточным ликом, ему соответствует голубой цвет и сапфир, или ляпис-лазурит. Второе лицо – это Северный лик, ему соответствует зеленый цвет и камень изумруд. Третье лицо – это Западный лик, ему соответствует красный цвет и рубин. Четвертое лицо – это Южный лик, ему соответствует желтый цвет и элемент золото. Именно этими цветам отмечены четыре витка Спиральной коры.
                Четыре витка Спиральной Коры

                1. Сапфировая Кора
                Этот маршрут совпадает с тропой Внешней Коры, о которой уже много написано, в том числе и в этой книге.

                2. Изумрудная Кора
                Кора также начинается от Чортена в центре Дарчена, но проходит по вершинам холмов напротив Южного лица. Спуск к плато 84 Махасидхов происходит через перевал Тугсум. Далее паломники следуют по тропе Внешней Коры до долины Кхандро чу.
                Потом идут посещение озера Ваджрварахи, подъем на перевал Кхандро Санглам, посещение озера Куберы и спуск на тропу Внешней Коры к месту третьего простирания.
                От монастыря Зутрул Пхук паломники идут по так называемому Южному траверсу: входят в Симметричную долину (Гедхун), поднимаютсяна перевалы Гево ла и Шапджи ла, посещают монастыри Гяндрак и Серлунг.

                3. Рубиновая Кора
                Это продолжение Изумрудной Коры. Начинается она от монастыря Серлунг. Паломники идут по направлению к Южному лицу Кайласа. Маршрут предполагает восхождение на гору Дворец Махакалы к Шива Лингаму.
                После идет спуск на тропу Внешней Коры. Паломники доходят до Западного лица Кайласа и начинают Северный траверс:
                Подъем на г. Ваджрапани, спуск в долину Гангджам Чу
                Подъем на перевал г. Авалокитешвара, спуск в долину Полунг Чу Подъем на перевал г. Манджушри, спуск в долину Кхандро Чу Подъем на перевал Кхандро Санглам, спуск к озеру Куберы

                Подъем на Восточное зеркало слева от горы Пакна, спуск в долину Шингджонг
                Подъем на г. Дворец Таши Тцерингма и спуск в долину Менлунг Чу
                Подъем на юго-восточное плечо Кайласа, рядом с г. Мексиканская Пирамида, спуск в долину Гедхун Лха Чу
                Подъем на гору Трон Будды, спуск в долину Селунг Чу через монастырь Гяндрак.
                В принципе это достаточно посильная задача. Я проходил все элементы Рубиновой Коры не один раз.

                4. Золотая Кора
                Эта наиболее сложная часть маршрута Спиральной Коры. Мне удалось пройти лишь несколько ее участков.
                Кроме перечисленных в предыдущих Корах фрагментов пути в нее входит спуск в Долину 2-х озер от горы Трон Будды и спуск от Малого Кайласа (Тисум) к Западному лицу. Без специального снаряжения сделать хэто невозможно. Так же, как и выйти на центральную часть каменного зеркала от горы Пакна.
                Представленный здесь маршрут Спиральной Коры подходит только для хорошо подготовленных физически паломников. Изумрудная, Сапфировая и Золотая коры включают в себя Нанди-Кору и Кору Кхандро Санглам, поэтому все ограничения, связанные с прохождением двух упомянутых Внутренних Кор, должны также соблюдаться и для Спиральной Коры. Каждый виток приближает нас к священной горе, и для их прохождения паломнику потребуется сила воли, выносливость и отменное здоровье. В результате представляется уникальная возможность не только насладиться прекрасными видами, но и ощутить мощнейшую энергетику этих мест. Как упоминалось выше, при прохождении Кор не рекомендуется использовать специальное альпинистское снаряжение. Паломники должны проявлять глубокое уважение как к самим маршрутам, так и к другим паломникам, которых они встречают на своем пути и к их религиозным убеждениям.

            </TibetInfoCardContent>
        </TibetInfoCard>
    )
}

const ContentKhandro = () => {
    return (
        <TibetInfoCard imageSrc="https://storage.googleapis.com/opentibet/khandro.jpg">
            <TibetInfoCardTitle>Перевал Кхандро Санглам</TibetInfoCardTitle>
            <TibetInfoCardContent>
                Перевал Кхандро Санглам (Khandro Sanglam, 5675 м) расположен между двумя горами: Пхакна-ри (Phakna Ri, 5998 м), примыкающей к Дхарма Кинг Норсанг, одному из каменных зеркал Кайласа, и Шарма-ри. Именно этот маршрут местные жители называют «Внутренней Корой».
                Для меня обход Кайласа через перевал Кхандро Санглам – один из самых сложных и непредсказуемых. Я шел этим маршрутом больше двадцати раз – и до сих пор не знаю, как это лучше делать! Здесь нет и не может быть универсального алгоритма: каждый раз не ведаешь, что тебя ждет. Одному подниматься на перевал очень рискованно, и мало кто решается на такой шаг.
                Сам перевал достаточно крут – 70-80о. Тибетцы, как правило, поднимаются наверх по его правой стороне. Проблема в том, что последние 15 метров надо взбираться по практически вертикальной стене, что, поверьте, опасно и крайне неприятно.
                Хочу особенно подчеркнуть: ни в коем случае нельзя идти через этот перевал тем, кто первый раз приехал в Тибет! Неоднократно группы туристов, не знакомых с местными обычаями, просили меня провести их через Кхандро Санглам, и буквально каждый раз, как только мы начинали подъем, погода портилась: начинался ливень или сильный снегопад, а иногда даже разыгрывалась настоящая буря.
                Этот перевал так же закрыт для посещения иностранными туристами с 2023 года.
            </TibetInfoCardContent>
        </TibetInfoCard>
    )
}

const ContentMandjushri = () => {
    return (
        <TibetInfoCard imageSrc="https://storage.googleapis.com/opentibet/mandjushri.jpg">
            <TibetInfoCardTitle>Манджушри кора</TibetInfoCardTitle>
            <TibetInfoCardContent>
                Кора через перевал Манджушри одна из самых моих любимых. Я прохожу ее несколько раз в году.
                Перевал Манджушри 5810м расположен между г. Пакна (5998м) и г. Манджушри. Я почему-то люблю ее делать против часовой стрелки. Начинается она с подхода к каменному зеркалу Дхарма Кинг Нарсанг по долине Полунг, подъем на перевал Манджушри (5810м). С него открывается великолепный вид на северо-восточную грань Кайласа и на перевел Кхандро Салам.
                Спуск в долину Кхандро чу и возвращение к Дрира Пхук. Весь маршрут занимает около 6 часов.
            </TibetInfoCardContent>
        </TibetInfoCard>
    )
}

const ContentNandiKora = () => {
    return (
        <TibetInfoCard imageSrc={imagesSrc.nandi}>
            <TibetInfoCardTitle>Нанди кора</TibetInfoCardTitle>
            <TibetInfoCardContent>
                Существует множество вариантов Внутренних Кор. В широком смысле так называется обход любого из плеч Кайласа, то есть любой из примыкающих к нему гор. Самый распространенный маршрут – Нанди-Кора, обход горы Нанди (Nandi), расположенной у юго-восточной грани Кайласа. Именно эту Кору большинство паломников называет Внутренней. По форме гора Нанди похожа на перевернутый ковчег, поэтому иногда ее именуют «горой-саркофагом» (тибетское название Neten Yelakzung). Общая протяженность маршрута – около 23 км (километраж считается от Дарчена).
                Нанди-Кора включает в себя прохождение перевала Сердунг-Чуксум (Serdung Chuksum La, 5859 м), а также подъем к горизонтальной нише на южной стороне Кайласа – месту поклонения «13 золотых чортенов»; там размещены реликвии лам традиции Дрикунг школы Кагью.
                Энергии при прохождении Внутренней Кайлас-Коры отличаются от энергий Внешней Коры. Они намного сильнее, ведь тропа Нанди-Коры проходит гораздо ближе к священным горам. Паломник находится под совокупным воздействием полей Кайласа и Нанди, которые соединяются в единую мощную силу на перевале Сердунг-Чуксум. Считается, что в этом месте можно получить знания от Великих Учителей.
                Буддисты и индуисты идут на Внутреннюю Кайлас-Кору только после совершения 13 Внешних Кайлас-Кор. Но бывают и исключения. Например, у буддистов в год Огненной Лошади (раз в 60 лет) одна Внешняя Кора засчитывается за 13. Для индуистов же одна Внешняя Кора засчитывается за 13 в год, когда проводится «Праздник кувшина» (Кумбха-мела) и совершается массовое паломничество для омовения в священных реках. Кумбха-мела происходит один раз в 12 лет в одном из четырех священных индийских городов: Харидваре, Аллахабаде, Насике и Удджайне.
                С 2015 года Нанди-Кора официально закрыта. На перевале установлены камеры видеонаблюдения и маршрут патрулируют дроны.
            </TibetInfoCardContent>
        </TibetInfoCard>
    )
}

const ContentBuddhaThrone = () => {
    return (
        <TibetInfoCard imageSrc="https://storage.googleapis.com/opentibet/buddha-throne.jpg">
            <TibetInfoCardTitle>Трон Будды</TibetInfoCardTitle>
            <TibetInfoCardContent>
                Прямо за монастырем Гьянгдрак Гомпа возвышается гора Трон Будды (Гуйяганг, Buddha`s Throne). По легенде, с ее вершины Будда проповедовал свое учение царю змеиных божеств.
                Существует Кора вокруг горы Трон Будды. Это один из моих любимых маршрутов.
                Его протяженность около 20 км. Начинается Кора в Дарчене. Маршрут проходит через перевал Гева ла 5250 м и перевал Гяндрак 5815 м, после которого идет спуск к одноименному монастырю и возвращение в Дарчен. Перпендикулярно перевалу Гяндрак, расположен перевал Двух озер, который ведет на тропу Нанди-Коры. К сожалению, спуск с этого перевала без специального снаряжения невозможен.
            </TibetInfoCardContent>
        </TibetInfoCard>
    )
}

const ContentTsedang = () => {
    return (
        <TibetInfoCard imageSrc="https://storage.googleapis.com/opentibet/tsedang.jpg">
            <TibetInfoCardTitle>Цеданг</TibetInfoCardTitle>
            <TibetInfoCardContent>
                Цеданг (Tsedang) находится примерно в 45 км от Миндроллинга по дороге S349 в Ярлунгской долине (Yarlung valley). До него можно доехать по старой дороге S349 или, если вернуться немного назад, переехать мост через Брахмапутру по скоростной автомагистрли G4219.  На въезде в Цеданг стоит КПП (проверка паспортов и пермитов). От него до центра – около 20 мин. В Цеданге надо обязательно зарегистрировать пермит (Public Security Bureau; Gaisang Lu; 9.00–12.30, 15.00–18.00). Процедура обычно занимает от 30 мин до часу.
                Цеданг, некогда маленький городок, сегодня является одним из центров Китая в Тибете. Здесь проживают около 300 тыс. человек. Большинство населения – китайцы, тибетцы живут в сравнительно неболшом квартале, где сохранились три небольших монастыря.
                Город расположен между двумя горами: Гонпо Ри (4130 м) и Ярлунг Чедар (4250 м).
            </TibetInfoCardContent>
        </TibetInfoCard>
    )
}

const ContentLamaling = () => {
    return (
        <TibetInfoCard imageSrc="https://storage.googleapis.com/opentibet/lamaling.jpg">
            <TibetInfoCardTitle>Ламалинг</TibetInfoCardTitle>
            <TibetInfoCardContent>
                В переводе с тибетского слово «ламалинг» значит «райский сад для лам». Место заслуживает такого названия – Ламалинг находится в огромном ухоженном парке.
                <br />
                <br />
                Изначально маленький храм был построен в XIII веке на вершине соседней горы (Блистательная Медная гора) и приадлежал школе Кагью.
                <br />
                <br />
                Нынешний храм построили в 1930 году. По просьбе Дуджома Ринпоче (Dudjom Rinpoche) монахи из монастыря Миндроллинг основали здесь обитель школы Ньингма. В 1960-х годах монастырь был разрушен во время Культурной революции. Его восстановление началось в 1989 году дочерью Дуджоме Ринпоче.
                Главный храм выполнен в форме трехэтажной пагоды и называется Сандок Палри (Sangdok Palri).
                <br />
                <br />
                На первом этаже установлена статуя Падмасабхавы и 16 архатов. На втором – четырехрукий Авалокитешвара, а на третьем – Будда Шакьямуни.
                Слева от главного храма в 2009 году была построена белая 12-ти метровая ступа. Справа находится храм красного цвета со статуей Будды Шакьямуни, 8-ми бодхисаттв и 16-юархатов, а также статуя основателя храма Дужома Ринпоче.
                <br />
                <br />
                Входной билет стоит 30 юаней.
            </TibetInfoCardContent>
        </TibetInfoCard>
    )
}

const ContentBuchu = () => {
    return (
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
}

const ContentBatsumTso = () => {
    return (
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
}

const ContentSamye = () => {
    return (
        <TibetInfoCard imageSrc="https://storage.googleapis.com/opentibet/samye.jpg">
            <TibetInfoCardTitle>Монастырь Самье</TibetInfoCardTitle>
            <TibetInfoCardContent>
                Самье – самый первый тибетский буддистский монастырь. С его возникновением связано множество легенд. Согласно самой распространенной из них, Самье был построен при выдающемся правителе Ярлунгской династии Трисонге Децене (VIII в.). Руководил строительством великий буддистский гуру Шантаракшита, приглашенный Трисонгом Деценом из Индии. Однако местные божества, владыки почв, противились укреплению позиций буддизма в Тибете и по ночам с помощью землетрясений разрушали все, что Шантаракшите удавалось построить за день. Кроме того, в стране начался голод и вспыхнули эпидемии. Перепуганный Трисонг Децен попросил Шантаракшиту покинуть Тибет. Перед уходом великий гуру посоветовал царю пригласить Падмасамбхаву (Гуру Ринпоче), другого великого Учителя. Он так и сделал. Вскоре после прибытия Падмасамбхавы в Тибет в недостроенном монастыре Самье в присутствии царя и всей его свиты состоялся религиозный диспут между сторонниками тибетской религии бон и Гуру Ринпоче, в котором последний одержал победу. Трисонг Децен повелел всем бонцам принять буддизм, а монастырь Самье был наконец возведен.
                Самье стал центром распространения буддизма в Тибете: здесь приглашенные из Индии и Китая монахи переводили на тибетский язык священные тексты; здесь прошел Великий диспут между сторонниками индийской и китайской ветвей буддизма, в котором победили индийцы. За свою историю обитель много раз разрушалась и восстанавливалась. К счастью, сегодня практически все постройки комплекса являют собой образцы старинной тибетской архитектуры и по мере надобности реставрируются.
            </TibetInfoCardContent>
        </TibetInfoCard>
    )
}

const ContentDorjeDrak = () => {
    return (
        <TibetInfoCard imageSrc="https://storage.googleapis.com/opentibet/dorje-drag.jpg">
            <TibetInfoCardTitle>Дордже Драк</TibetInfoCardTitle>
            <TibetInfoCardContent>
                Монастырь Дордже Драк
                В 45 км от Самье (дорога S205, верстовой столб 459) расположен один из наиболее значимых для школы Ньингма в центральном Тибете монастырь Тхубтен Дордже Драк (Thubten Dorje Drak). Он возник в XVII в., а несколько лет назад его восстановили. Обитель находится у подножия скалы в форме ваджры.
                Лама – глава монастыря – носит потомственный титул «ригдзин». В монастыре можно увидеть статуи прежних ригдзинов. В процессе восстановления монастыря монахи бережно собирали осколки утвари, части фресок, обломки статуй и колонн. Все это сейчас можно осмотреть в реликварии. Сохранились старинные планы Дордже Драка, которые дают представление о его былом величии.
                Монастырь по-прежнему сохраняет традицию терма «Северных сокровищ» («Джангтер»), открытую Ригдзином Годемом Нгондрубом Гьялценом (1337–1409). В XVII в., когда молодой Нгаги Вангпо (Дордрак Ригдзин Ченпо III, третье воплощение Ригдзина Годема) и его опекун Джангдак Таши Топгьел подверглись гонениям со стороны царей Тцанга и были вынуждены бежать, монастырь был перенесен (1632 г.) в то место, где находится и поныне.
                Расцвет Дордже Драка начался во времена четвертого воплощения Ригдзина – Дордрака Ригдзина Ченпо Пема Тринлея (1641–1717), который безвременно погиб от рук монгольских захватчиков из Джунгара. Монастырь был разграблен джунгарами в 1717 г., восстановлен, а затем уничтожен снова в 1960-х гг. Сейчас он постепенно возрождается стараниями нынешнего воплощения Дордрака Ригдзина, проживающего в Лхасе, а также благодаря усилиям Келцанга Чод Жора и местной общины.
                В зале собраний (цогчене) можно увидеть большое изображение Падмасамбхавы, расположенном на месте, где когда-то находился оригинал, созданный четвертым Ригдзином – Пема Тринлеем. Также здесь есть расписные свитки с изображениями 100 Мирных и Гневных божеств и стенные росписи, изображающие 8 проявлений Падмасамбхавы. В зале установлены три трона: центральный – для самого Дордрака Ригдзина, а два других – для Таклунга Ринпоче (проживает в изгнании в Симле (Shimla) и Ладакхе (Ladakh)) и Чубзанга Ринпоче. В главном святилище храма находится самопроявившийся каменный образ двурукого Авалокитешвары, реликварий и библиотека, в которой хранится Кангьюр и ньингмапинский «Канон Древних Тантр» Гьюдбум.
                Самый древний храм расположен справа (сюда не допускаются женщины). Когда-то здесь находились изображения Трех Корней (гуру, божество сосредоточения и дакини) традиции Дордже Драк, однако сейчас можно увидеть лишь несколько старинных изображений, копию Канона Гьюдбум, изданного в Дерге, и ряд других священных реликвий: ваджр и колокольчик Четвертого Дордрака Ригдзина Ченпо Пема Тринлея, сундук, где хранилось сокровище-терма (тердром), частицу посоха Миларепы и подробный план монастыря в его первозданном виде. До разрушения джунгарскими войсками Дордже Драк славился огромными колоннами и воротами, расписанными черепами.
            </TibetInfoCardContent>
        </TibetInfoCard>
    )
}

const ContentMidroling = () => {
    return (
        <TibetInfoCard imageSrc="https://storage.googleapis.com/opentibet/midroling.jpg">
            <TibetInfoCardTitle>Мидролинг</TibetInfoCardTitle>
            <TibetInfoCardContent>
                монастырь Миндроллинг (Mindrolling) – самый большой в центральном Тибете. Это один из 6 основных монастырей школы Ньингма. Комплекс окружен четырьмя горами. Входной билет стоит 35 юаней.
                Монастырь расположен в 8 км восточнее города Дрананг (Dranang), в 147 км от Лхасы. На этом месте еще с X в. существовал небольшой монастырь. В 1670-х гг. выдающийся ученый лама Тертон Тердак Лингпа (1646–1714) возвел огромный монастырский комплекс. Он же стал первым Минлинг Триченом (держателем трона Минлинг) – титул, который передавался по наследству от отца к сыну. Ученики Тердак Лингпы считали его пятым Далай-ламой. Комплекс серьеёзно пострадал в XVIII в. из-за нашествия монголов-джунгар и в годы Культурной революции. Сейчас активно ведутся восстановительные и реставрационные работы.
                Во внутренний двор можно пройти через ворота с северо- и юго-восточной сторон. Здесь привлекает внимание главный храм (Цуклакханг) с фасадом из коричневого камня. На трех его этажах находятся несколько часовен с многочисленными реликвиями (ковчеги с мощами, частицы мощей, старинные священные книги, мандалы, статуи и т.д.) и усыпальницами. Архитектурное убранство, стенные росписи, статуи, тексты, ступы сохранились в целости. В часовнях третьего этажа можно увидеть портрет основателя комплекса с позолоченными отпечатками его ладоней и стоп, а также старинные фрески с изображением всех традиций школы Ньингма.
                Главные статуи храма — это изображение Будды Шакьямуни высотой 4 метра, его учеников и 8 бодхисатв. В соседнеим храме установлена статуя Гуру Ринпоче.
                В храме Сангок Подранг (Sangok Podrang) в северной части внутреннего двора сохранилась знаменитая «говорящая» фреска. Согласно легенде, изображенный на ней основатель школы Ньингма Юнгдрунг Тонгдрол – Падмасамбхава – обратился к Тердаку Лингпе с просьбой оставаться в мире для помощи живым существам. В этом же храме хранится старинная большая тханка, которую открывают для поклонения раз в году.
            </TibetInfoCardContent>
        </TibetInfoCard>
    )
}

const ContentYumbulakhang = () => {
    return (
        <TibetInfoCard imageSrc="https://www.wondersoftibet.com/wp-content/uploads/2018/03/View-on-Yumbulakhang-from-the-hill.jpg">
            <TibetInfoCardTitle>Ямбулаканг</TibetInfoCardTitle>
            <TibetInfoCardContent>
                Южнее Цеданга в Ярлунгской долине есть еще несколько средневековых монастырей. Но главной достопримечательностью для туристов, без сомнения, является крепость Юмбулаганг (Yumbulagang, 13 км к югу от Цеданга; входной билет 30 юаней) на вершине высокого холма, ныне превращенная в монастырь. Предание гласит, что мощная крепость (намного больше, чем современная) здесь была воздвигнута еще первым правителем Ярлунгской династии Ньятри Цэнпо. Именно в Юмбулаганге, бывшим тогда царским дворцом, на голову царю Лхатхатхори (V в.) упала шкатулка с многочисленными буддистскими текстами. Это событие, как и другие легенды Тибета, отражено на старинных фресках в храме Юмбулаганга. В годы Культурной революции дворец-крепость был уничтожен, а в 1982 г. полностью восстановлен практически в оригинальном виде.
                Башня Юмбулаганга высотой всего 11 м, но она доминирует над долиной, и с нее открывается прекрасный вид на окрестности.
            </TibetInfoCardContent>
        </TibetInfoCard>
    )
}

const ContentChongye = () => {
    return (
        <TibetInfoCard imageSrc="https://storage.googleapis.com/opentibet/chongye.jpg">
            <TibetInfoCardTitle>Чонгье</TibetInfoCardTitle>
            <TibetInfoCardContent>
                Курганный комплекс Чонгье (Chon-gue, 26 км от Цеданга; входной билет 35 юаней). По преданию, здесь захоронены такие выдающиеся правители Ярлунгской династии, как Сонгцэн Гампо, который перенес столицу Тибета из Юмбулаганга в Лхасу, и Трисонг Децен (VII-VIII вв.). При них буддизм в Тибете окончательно стал государственной религией. Здесь же в 2021 году был отреставрирован монастырь Риво Дечен (Riwo Dechen). Рядом с ним находятся руины замка Чингва Тагце (Qingwa Tagdze), в котором родился пятый Далай-лама.
            </TibetInfoCardContent>
        </TibetInfoCard>
    )
}

const ContentBonri = () => {
    return (
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
}

const ContentKading = () => {
    return (
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
    );
}

const ContentGangutso = () => {
    return (
        <TibetInfoCard imageSrc="https://storage.googleapis.com/opentibet/gangutso.jpg">
            <TibetInfoCardTitle>Ганг гю цо</TibetInfoCardTitle>
            <TibetInfoCardContent>
                {/* Внешняя кора мандалы Кайлас — это паломнический маршрут вокруг горы Кайлас, расположенной в Тибете. Маршрут имеет длину около 53 километров и занимает около 3-4 дней.
                <br />
                <br />
                Гора Кайлас считается священной в индуизме, буддизме и джайнизме. Считается, что гора является центром Вселенной и местом обитания богов.
                <br />
                <br /> */}
            </TibetInfoCardContent>
        </TibetInfoCard>
    )
}

const ContentBonriTemple = () => {
    return (
        <TibetInfoCard imageSrc="https://storage.googleapis.com/opentibet/bonri-temple.jpg">
            <TibetInfoCardTitle>Бонри Гомпа</TibetInfoCardTitle>
            <TibetInfoCardContent>
                Руины монастыря Бонри Гомпа (Bonri Gompa) находятся вдали от озера, в 5,5 км по другую сторону от шоссе G318 (верстовой столб 3928 км), у подножия той самой горы Бон-ри (Bon Ri), которую Миларепа отдал последователям религии бон взамен выигранного у них Кайласа.
            </TibetInfoCardContent>
        </TibetInfoCard>
    )
}

const ContentGosul = () => {
    return (
        <TibetInfoCard imageSrc="https://storage.googleapis.com/opentibet/gosul.jpg">
            <TibetInfoCardTitle>Монастырь Госул</TibetInfoCardTitle>
            <TibetInfoCardContent>
                Монастырь Госул (высота 4551 м над уровнем моря) является символом юго-западной части Манасаровар-Коры. Он построена чуть правее пещеры, в которой великий Атиша проходил семидневную медитацию. С площадки перед монастырем открывается потрясающая панорама Кайласа и озера. Именно отсюда индусы обычно начинают свою Манасаровар-Кору.
                Внутри обители находится еще одна пещера, где в XIII в. святой Гоцампа из школы Кагью готовился к восхождению на Кайлас. Он первым прошел Манасаровар-Кору, после чего три месяца медитировал в пещере на берегу озера, а затем совершил Внешнюю Кору вокруг священной горы Кайлас. Маршрутом Гоцампы вокруг озера сейчас идут миллионы людей.
                Монастырь на этом месте появился в XVII в. Подняться к нему можно по выбитым в скале ступеням. Главной святыней храма является статуя Будды Шакьямуни. Здесь хранится множество драгоценных объектов: Кангьюр (собрание прямых слов Будды), серебряные ступы, статуи Авалокитешвары и ученика Гампопы Дусума Кхьенпы (1110–1193), достигшего Просветления в 50 лет. Особый интерес представляет второй этаж храма: в одной из комнат есть каменная стена с разнообразными глиняными пластинками, представляющими тантрические божества. Это все, что осталось от старого монастыря. В нижнем ряду можно увидеть хранителей шести миров буддизма, в верхнем – изображения священной горы Кайлас.
            </TibetInfoCardContent>
        </TibetInfoCard>
    )
}

const ContentLangpona = () => {
    return (
        <TibetInfoCard imageSrc="https://storage.googleapis.com/opentibet/langpona.jpg">
            <TibetInfoCardTitle>Монастырь Лангпона Гомпа</TibetInfoCardTitle>
            <TibetInfoCardContent>
                Монастырь Лангпона Гомпа (Langpona Gompa) – северные ворота Манасаровара. Он стоит на горе, напоминающей по форме хобот слона, отсюда и название (langpona – «хобот слона»). Восстановлен в 1986 г. Рядом протекает река Гьяма Лунг (Gyama Lung).
                Храм построил учитель школы Кагью Самдеин Пунгког, который очень чтил эти места. В здании монастыря было 36 комнат, шестиколонный зал. Раньше здесь жили 17 монахов, сейчас – 6. Считается, что настоятелем обители являлся сам Будда Чомденте с небольшой статуэткой XII в. Дордже Памо (духовная жена будды Чакрасамвары) на груди, поэтому его образ находится в главном алтаре. Основные святыни – статуи Будды Шакьямуни и Падмасамбхавы. Среди реликвий в храме есть священный бубен, появившийся из Манасаровара, и камень в форме горы Кайлас. При входе во внутренний двор за дверью справа находится зал собраний с изображением Будды Амитабхи.
            </TibetInfoCardContent>
        </TibetInfoCard>
    )
}

const ContentManosarovar = () => {
    return (
        <TibetInfoCard imageSrc="https://storage.googleapis.com/opentibet/manosarovar-2.jpg">
            <TibetInfoCardTitle>Озеро Манасаровар</TibetInfoCardTitle>
            <TibetInfoCardContent>
                Озеро Манасаровар – один из самых фантастических природных памятников западного Тибета и одна из главных святынь буддизма в мире наряду с заповедной горой Кайлас. Оно находится на высоте 4590 м. Его площадь – около 500 км2, максимальная глубина 82 м. По размерам Манасаровар можно сравнить с самыми большими высокогорными озерами нашей планеты, но по степени почитаемости и символическому значению равных ему нет. Для представителей сразу четырех религий (буддистов, индуистов, джайнистов и последователей бон) именно здесь, у Кайласа и Манасаровара, бьется сердце Вселенной, проходит ось Земли.
                Приближение к мандале Кайласа рекомендуется начинать с Манасаровар-Коры, ритуального обхода озера, как бы преддверия Кайлас-Коры. Паломник сначала совершает омовение в Манасароваре и только потом – обход священной горы.
                В соответствии с индуистской теологией, Брахма – творец Вселенной – создал это озеро из своего ума. На санскрите mana значит «разум», а sarovar – «озеро». По легенде, на рассвете боги нисходят с небес, чтобы принять омовение или испить благодати Манасаровара. Отсюда еще одно его название – Озеро богов. Однако – и в этом сила данного места – пройти путем богов здесь может каждый. Каждый, кто дотронется до заветной воды или выпьет ее, сделает шаг к небесам Шивы. Манасаровар очистит карму от плохой энергии и омрачений, полученных за множество перерождений. Поверхность озера считается символом активной творческой силы Шивы, которая ассоциируется с его супругой Шакти, а в более широком смысле – с женской созидательной мощью Вселенной. Для буддистов Манасаровар – это священное озеро Анаватапта, где, по легенде, королева Майя зачала Будду. Для тибетцев гора символизирует мужской аспект мира, а озеро – женский: Манасаровар-Кора призвана гармонизировать внутренние энергии паломника.
                Во время своих путешествий я досконально исследовал путь Коры: фотографировал, фиксировал километражи, описывал руины и населенные пункты, беседовал с местными жителями и монахами. Протяженность Коры вокруг озера по береговой линии составляет 91-98 км. Столь большой диапазон вызван трудностями точного исчисления на пересеченной местности, ведь на всем протяжении Коры едва наберется десяток километровых указателей. Как обычно в Тибете, каждый топоним имеет минимум три варианта, пишется на английском, китайском и тибетском языках. Одних только названий Манасаровара насчитывается до полутора десятков!
                Говорят, что отсчет километража Коры ведется от монастыря Чиу Гомпа (Chiu Gompa). Его особая популярность объясняется не столько близостью к Дарчену (главному центру цивилизации в этих местах), сколько тем, что Чиу – священное место для буддистов. Именно отсюда великий Падмасамбхава ушел в тонкие миры. Хотя по моим наблюдениям, этим местом должны быть руины монастыря Черким Гомпа.
                Чаще всего для входа (въезда) на маршрут Манасаровар-Коры используют дорогу, начинающуюся около места первого простирания Чакцалкханг (Сhak tsal khang, Ta-ko-cheng) на северо-восточном крае озера. От трассы G318 грунтовая дорога ведет к современному инфоцентру.
                В информационно-туристическом комплексе, построенном в 2013 году, нужно купить два билета (на одного человека): один для подхода к озеру (150 юаней), второй – для Манасаровар-Коры (110 юаней). Стоянка муниципального транспорта находится слева от ворот. Рядом – длинное двухэтажное здание с сувенирным магазином и туалетом.
                Приезжающие обычно лишь в туристический сезон европейские туристы крайне редко обходят озеро пешком, предпочитая путешествовать на автобусах или джипах. Паломники совершают Кору только пешком. Для туристов озеро и его побережье – лишь очередная достопримечательность, для паломников – одна из главных святынь Тибета.
                Пешком Манасаровар-Кора может занимать до четырёх дней, на машине – 3-6 часов.
                Кора вокруг озера не будет полной без посещения монастырей на его берегах. Изначально вокруг Манасаровара насчитывалось восемь монастырей, соответственно основным и промежуточным сторонам света. Все они были разрушены во время Культурной революции. С середины 1980-х гг. их постепенно начали восстанавливать, но не все и не всегда на тех же местах.
            </TibetInfoCardContent>
        </TibetInfoCard>
    )
}

const ContentNjego = () => {
    return (
        <TibetInfoCard imageSrc="https://storage.googleapis.com/opentibet/njego.jpg">
            <TibetInfoCardTitle>Монастырь Ньего Гомпа</TibetInfoCardTitle>
            <TibetInfoCardContent>
                Монастырь Ньего Гомпа (49-й км Манасаровар-Коры), от него сохранились только руины. В 1042 г. здесь проходил путь знаменитого буддистского проповедника, мыслителя и переводчика Атиши Дипанкары Шриджняны (982–1054). Он настолько проникся священной аурой этого места, что задержался в нем на семь дней, посвятив все время буддистским церемониям и медитациям. Он изготавливал жертвенные фигурки из глины. (Эти фигурки называются «цаца» и служат символами божественных качеств ума, необходимых на пути к Просветлению.) Атиша соорудил над своим жертвенником маленькое святилище. Позднее там медитировал святой Нгорчен Кунга Лхундроп. В одном из видений ему явился Падмасамбхава, призвавший святого построить на этом месте монастырь.
            </TibetInfoCardContent>
        </TibetInfoCard>
    )
}

const ContentRakshastal = () => {
    return (
        <TibetInfoCard imageSrc={imagesSrc.rakshastal}>
            <TibetInfoCardTitle>Озеро Ракшастал</TibetInfoCardTitle>
            <TibetInfoCardContent>
                Озеро Ракшастал (Ланга-Цо; Rakshas Tal, Langa Tso) расположено слева от Манасаровара на высоте 4575 м. Длина его береговой линии составляет примерно 125 км, площадь – 360 км2. Другое название озера Равана Храда связано с правнуком Брахмы Раваной, царем демонов (ракшасов). По одной из легенд, Равана простоял в Ракшастале на одной ноге 1000 лет, поклоняясь Шиве, после чего получил от него сверхсилы (сиддхи). По другой, Равана совершал здесь ягью (огненное подношение) Шиве, причем приносимой жертвой служила его собственная голова. Шива был настолько поражен его самоотречением, что подарил Раване неуязвимость и бессмертие.
                Манасаровар и Ракшастал образуют как бы союз противоположностей, единство живой и мертвой воды. Формы озер и свойства их поверхностей также указывают на разделение добра и зла, божественного и демонического начал.
                На озере есть четыре острова: Топсерма, Дола, Лачато и Дошарба. В северо-западной части, примерно в 800 м от берега, находятся руины небольшого монастыря Цепгье (Tsepgye, Chepgye).
                Канал Ганга-чу (Ganga Chu)
                Манасаровар и Ракшастал связаны извилистым каналом, вода в котором время от времени иссякает. Тибетцы убеждены, что высыхание Ганга-чу – это предзнаменование трагических событий, что подтверждается многими историческими примерами.
            </TibetInfoCardContent>
        </TibetInfoCard>
    )
}

const ContentSeralung = () => {
    return (
        <TibetInfoCard imageSrc="https://storage.googleapis.com/opentibet/seralung.jpg">
            <TibetInfoCardTitle>Монастырь Сералунг Гомпа</TibetInfoCardTitle>
            <TibetInfoCardContent>
                Монастырь Сералунг Гомпа (28 км Маносаровар-Коры) Это восточные ворота озера. «Монастырь терновой долины» основан в XI в., восстановлен в 1984 г. Он расположен в защищенном от стихий месте, но так близко к озеру, что приезжие сначала видят лишь небольшой бело-красный чортен и только потом сам небольшой монастырский комплекс. Раньше Сералунг Гомпа стоял в стороне от озера, в глубине долины. Новое место для него нашли с помощью предсказаний. Если раньше от монастыря просматривалась лишь тонкая полоска озера, то теперь перед наблюдателем открывается превосходная панорама.
                Основание монастыря связано с просветленным мастером Гонджо из линии Дрикунг школы Кагью, которому его Драгоценный учитель повелел: «У восточных ворот омовений на озере Цо Мапам, в подобной раскрывшемуся цветку лотоса земле золотых лепестков вод Джамбу есть горы, которые соответствуют аспектам трех защитников: Авалокитешваре, Манджушри и Ваджрапани. Там создай место для уединения».
                В монастыре можно увидеть статую Авалокитешвары, скульптурное изображение Будды Шакьямуни, четыре буддистских реликвии Самбхавы, рукопись великого переводчика Байруо Зана, подушку Дабу Раджа, волосы проявленного бодхисаттвы Седьмого Брахмана, мастера Дунджи из линии Кадампа и проявленного бодхисаттвы, мастера Куджи Пункога. Когда-то в Сералунг Гомпа было 24 помещения и колонный зал, в котором содержались священные рукописи. Во времена расцвета здесь находились от 42 до 50 монахов. Восстановленная в 1984году  обитель состояла из одного здания. За последнее время монастырь стал гораздо больше. Построили еще один храм, посвященный Падмасабхаве.
            </TibetInfoCardContent>
        </TibetInfoCard>
    )
}


const ContentTrugo = () => {
    return (
        <TibetInfoCard imageSrc="https://storage.googleapis.com/opentibet/trugo.jpg">
            <TibetInfoCardTitle>Монастырь Тхуголхо</TibetInfoCardTitle>
            <TibetInfoCardContent>
                Монастырь Тхуголхо (Thugolho); еще одно название Труго Гомпа, (Trugo Gompa). Он находится прямо на берегу Манасаровара, у подножия горы Гурла-Мандхата. «Тху» переводится как омовение, «го» – голова, «лхо» – юг. Омовение головы у южных ворот Манасаровара является с духовной точки зрения исключительно благословенным действом, поскольку в пророчествах сказано: кто здесь предастся омовению головы, переродится богом. Для паломников, желающих омыть голову, устроены специальные мостки.
                Обители насчитывается около 900 лет. Это одно из самых больших и хорошо сохранившихся культовых сооружений у Манасаровара.
                История монастыря началась с маленькой хижины, которая могла вместить двух человек. Она была построена для монахов школы Кагью мастером той же школы Джиеввой. Со временем хижина превратилась в небольшое четыреёхколонное пространство, а затем – в большой зал.
                Когда у власти был седьмой Далай-лама Келсанг Гьяцо (1708–1757), настоятели окрестных монастырей постоянно спорили по поводу права на выморочное имущество крестьянских хозяйств и лугов в этом районе. Дело дошло до того, что пришлось вмешаться Верховному государственному совету (кашаг). Он и принял решение, по которому весь район отошел к монастырю Труго Гомпа. Со временем в обители построили 18 помещений и 12-колонный главный зал. Когда-то тут жили 8 монахов, хранилось золотое изображение воина-спутника Будды и две керамические фигуры – Будды Шакьямуни и Дзамбалы. Монастырь частично пострадал в годы Культурной революции, но был полностью восстановлен в 1984 г. Сейчас здесь можно увидеть статуи богини Тары, Будд прошлого, настоящего и будущего, а также Авалокитешвары, Манджушри и Ваджрапани.
            </TibetInfoCardContent>
        </TibetInfoCard>
    )
}

const ContentCherkip = () => {
    return (
        <TibetInfoCard imageSrc="https://storage.googleapis.com/opentibet/cherkip.jpg">
            <TibetInfoCardTitle>Монастырь Черкип Гомпа</TibetInfoCardTitle>
            <TibetInfoCardContent>
                Монастырь Черкип Гомпа (Cherkip Gompa) – самой маленькой из восьми обителей на берегах Манасаровара, до сих пор не восстановленной.
                Рядом с руинами монастыря можно увидеть несколько пещер для медитаций, которыми пользуются и до сих пор. Они находятся на отвесных скалах, смотрящих на озеро.
                Хотя мне говорили, что Кора начинается от монастыря Чиу, но обнаруженные рядом с Черким Гомпа нескольких верстовых камней говорят о том, что Кора начиналась именно от этого монастыря.
            </TibetInfoCardContent>
        </TibetInfoCard>
    )
}

const ContentChiu = () => {
    const translate = useTranslateFn()
    return (
        <TibetInfoCard imageSrc={imagesSrc.chiu}>
            <TibetInfoCardTitle>
                Монастырь Чиу Гомпа
            </TibetInfoCardTitle>
            <TibetInfoCardContent>
                Монастырь Чиу Гомпа - единственная обитель, где взимают плату за вход (25 юаней). Впрочем, многие туристы ограничиваются посещением лишь этого монастыря.
                Название Чиу Гомпа (Chiu Gompa) переводится как «птичий монастырь», что вполне оправданно: культовое сооружение, подобно птичьему гнезду, словно прилеплено к высокой каменной пирамиде. Изначально Чиу Гомпа был построен на горе овальной формы Сангдуо Байре («Медная гора»). Центральное Место Силы здесь – пещера VIII в., в которой медитировал Падмасамбхава. Здесь он провел последние семь дней своей земной жизни. Легенды говорят, что, победив местных жрецов и обязав их исповедовать буддизм в Тибете, Падмасамбхава покинул страну на белом коне и взошел на небо по радуге. Он отправился на остров к югу от Джамбудвипы (один из четырех материков в мировом океане, которые, согласно буддийской космологии, располагаются по четырем сторонам граням центральной горы мироздания Меру), где удалился в трехступенчатый храм на вершине горы. Окружность острова одновременно является и окружностью мандалы, с четырьмя воротами и четырьмя охраняющими ее стражами.
                Монахи традиции Дрикунг школы Кагью возвели точную копию «славного, цвета меди рая на горе». Три чортена в Чиу Гомпа напоминают о «чистой земле» Падмасамбхавы, куда стремится попасть для перерождения каждый буддист.
            </TibetInfoCardContent>
        </TibetInfoCard>
    )
}



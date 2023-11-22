"use client";
import { useState } from "react";
import { Slick } from "./Slick";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export const TibetInfo: React.FC<{}> = ({ }) => {
    const groupTitle = (text: string) => {
        return (
            <span>{text}</span>
        );
        // return (
        //     <div className='py-4 font-semibold text-xl'>{text}</div>
        // );
    };
    const defaultSize = `max-w-[48%]`;
    const mdSize = `md:max-w-[23%]`;

    const cardWidth = 300;
    return (
        <div>
            <div className='p-4'>
                <Accordion type="single" collapsible defaultValue="item-1">
                    <AccordionItem value="item-1" >
                        <AccordionTrigger>{groupTitle('Центральный Тибет')}</AccordionTrigger>
                        <AccordionContent>
                            <Slick step={cardWidth}>
                                <div style={{ width: cardWidth }}>
                                    <ContentLhasa />
                                </div>
                                <div style={{ width: cardWidth }}>
                                    <ContentPotala />
                                </div>
                                <div style={{ width: cardWidth }}>
                                    <ContentJokang />
                                </div>
                                <div style={{ width: cardWidth }}>
                                    <ContentDrakYerpa />
                                </div>
                                <div style={{ width: cardWidth }}>
                                    <ContentGanden />
                                </div>
                                <div style={{ width: cardWidth }}>
                                    <ContentDrepung />
                                </div>
                                <div style={{ width: cardWidth }}>
                                    <ContentSera />
                                </div>
                            </Slick>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger>{groupTitle('Северный Тибет')}</AccordionTrigger>
                        <AccordionContent>
                            <Slick step={cardWidth}>
                                <div style={{ width: cardWidth }}>
                                    <ContentTsurphu />
                                </div>
                                <div style={{ width: cardWidth }}>
                                    <ContentNamTso />
                                </div>
                                <div style={{ width: cardWidth }}>
                                    <ContentReting />
                                </div>
                                <div style={{ width: cardWidth }}>
                                    <ContentTaklung />
                                </div>
                            </Slick>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger>{groupTitle('Округ Шигадзе')}</AccordionTrigger>
                        <AccordionContent>
                            <Slick step={cardWidth}>
                                <div style={{ width: cardWidth }}>
                                    <ContentTashilhunpo />
                                </div>
                                <div style={{ width: cardWidth }}>
                                    <ContentGyandze />
                                </div>
                                <div style={{ width: cardWidth }}>
                                    <ContentSakya />
                                </div>
                                <div style={{ width: cardWidth }}>
                                    <ContentEverestBasecamp />
                                </div>
                                <div style={{ width: cardWidth }}>
                                    <ContentNgor />
                                </div>
                                <div style={{ width: cardWidth }}>
                                    <ContentShalu />
                                </div>
                                <div style={{ width: cardWidth }}>
                                    <ContentYamdrok />
                                </div>
                            </Slick>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                        <AccordionTrigger>{groupTitle('Гирьонг')}</AccordionTrigger>
                        <AccordionContent>
                            <Slick step={cardWidth}>
                                <div style={{ width: cardWidth }}>
                                    <ContentShashibangma />
                                </div>
                                <div style={{ width: cardWidth }}>
                                    <ContentMilarepaBirthplace />
                                </div>
                                <div style={{ width: cardWidth }}>
                                    <ContentLangatsoLake />
                                </div>
                                <div style={{ width: cardWidth }}>
                                    <ContentPelkuTso />
                                </div>
                            </Slick>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-5">
                        <AccordionTrigger>{groupTitle('Королевство Гуге')}</AccordionTrigger>
                        <AccordionContent>
                            <Slick step={cardWidth}>
                                <div style={{ width: cardWidth }}>
                                    <ContentDungar />
                                </div>
                                <div style={{ width: cardWidth }}>
                                    <ContentTsaparang />
                                </div>
                                <div style={{ width: cardWidth }}>
                                    <ContentPiyang />
                                </div>
                                <div style={{ width: cardWidth }}>
                                    <ContentManosarovarKora />
                                </div>
                                <div style={{ width: cardWidth }}>
                                    <ContentKorchag />
                                </div>
                                <div style={{ width: cardWidth }}>
                                    <ContentPurang />
                                </div>
                            </Slick>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-6">
                        <AccordionTrigger>{groupTitle('Мандала Кайласа')}</AccordionTrigger>
                        <AccordionContent>
                            <Slick step={cardWidth}>
                                <div style={{ width: cardWidth }}>
                                    <ContentKailasKora />
                                </div>
                                <div style={{ width: cardWidth }}>
                                    <ContentKailasInnerKora />
                                </div>
                                <div style={{ width: cardWidth }}>
                                    <ContentNandiKora />
                                </div>
                                <div style={{ width: cardWidth }}>
                                    <ContentBuddhaThrone />
                                </div>
                            </Slick>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-7">
                        <AccordionTrigger>{groupTitle('Восточный Тибет')}</AccordionTrigger>
                        <AccordionContent>
                            <Slick step={cardWidth}>
                                <div style={{ width: cardWidth }}>
                                    <ContentTsedang />
                                </div>
                                <div style={{ width: cardWidth }}>
                                    <ContentLamaling />
                                </div>
                                <div style={{ width: cardWidth }}>
                                    <ContentBuchu />
                                </div>
                                <div style={{ width: cardWidth }}>
                                    <ContentBatsumTso />
                                </div>
                                <div style={{ width: cardWidth }}>
                                    <ContentSamye />
                                </div>
                                <div style={{ width: cardWidth }}>
                                    <ContentDorjeDrak />
                                </div>
                                <div style={{ width: cardWidth }}>
                                    <ContentMidroling />
                                </div>
                                <div style={{ width: cardWidth }}>
                                    <ContentYumbulakhang />
                                </div>
                                <div style={{ width: cardWidth }}>
                                    <ContentChongye />
                                </div>
                                <div style={{ width: cardWidth }}>
                                    <ContentKading />
                                </div>
                                <div style={{ width: cardWidth }}>
                                    <ContentGangutso />
                                </div>
                            </Slick>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-8">
                        <AccordionTrigger>{groupTitle('Маносаровар Кора')}</AccordionTrigger>
                        <AccordionContent>
                            <Slick step={cardWidth}>
                                <div style={{ width: cardWidth }}>
                                    <ContentBonriTemple />
                                </div>
                                <div style={{ width: cardWidth }}>
                                    <ContentGosul />
                                </div>
                                <div style={{ width: cardWidth }}>
                                    <ContentLangpona />
                                </div>
                                <div style={{ width: cardWidth }}>
                                    <ContentManosarovar />
                                </div>
                                <div style={{ width: cardWidth }}>
                                    <ContentNjego />
                                </div>
                                <div style={{ width: cardWidth }}>
                                    <ContentRakshastal />
                                </div>
                                <div style={{ width: cardWidth }}>
                                    <ContentSeralung />
                                </div>
                                <div style={{ width: cardWidth }}>
                                    <ContentTrugo />
                                </div>
                                <div style={{ width: cardWidth }}>
                                    <ContentCherkip />
                                </div>
                                <div style={{ width: cardWidth }}>
                                    <ContentChiu />
                                </div>
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
    return (
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
            <div className={`absolute w-full h-32 bottom-0 left-0 right-0 ${isExpanded ? '' : 'bg-gradient-to-b from-transparent to-white'}`}
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

export const ContentLhasa = () => (
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
export const ContentPotala = () => (
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
export const ContentJokang = () => (
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

const ContentGanden = () => (
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

const ContentDrepung = () => (
    <TibetInfoCard imageSrc="https://storage.googleapis.com/opentibet/drepung.jpg">
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

const ContentSera = () => (
    <TibetInfoCard imageSrc="https://storage.googleapis.com/opentibet/sera.jpg">
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

const ContentDrakYerpa = () => (
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

const ContentTsurphu = () => (
    <TibetInfoCard imageSrc="https://wondersoftibet.com/wp-content/uploads/2018/09/Tsurpu-Monastery-complex-in-Tibet-1024x768.jpg">
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

const ContentNamTso = () => (
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

const ContentReting = () => (
    <TibetInfoCard imageSrc="https://storage.googleapis.com/opentibet/reting.jpg">
        <TibetInfoCardTitle>Монастырь Ретинг</TibetInfoCardTitle>
        <TibetInfoCardContent>
            Этот монастырь расположен на склоне холма на высоте 4200 м в долине Ронг-чу в окружении красивых и редко встречающихся древовидных можжевельников. Его построил в середине XI в. Дромтонпа, выдающийся ученик знаменитого буддистского мастера и переводчика Атиши. Согласно одной из легенд, можжевеловые деревья выросли из волос с головы Дромтонпы.
            В XIV в. Ретинг посетил сам лама Цонкапа, основатель школы Гелуг. После видения, в котором ему явился Атиша, Чжэ Ринпоче и написал свой знаменитый труд «Ламрим Ченмо».
            Ламы, настоятели монастыря, носят титул «Ретинг Ринпоче» и могут избираться регентами малолетнего Далай-ламы. Регентство Ретингов приходится, в частности, на периоды 1845–1855 и 1933–1947 гг. Пятый Ретинг сыграл важную роль в выборе среди детей нынешнего Далай-ламы и являлся его старшим преподавателем.
        </TibetInfoCardContent>
    </TibetInfoCard>
)

const ContentTaklung = () => (
    <TibetInfoCard imageSrc="https://storage.googleapis.com/opentibet/taklung.jpg">
        <TibetInfoCardTitle>Монастырь Таклунг</TibetInfoCardTitle>
        <TibetInfoCardContent>
            Таклунг расположен на высоте 4150 м. Он был основан в конце XII в. известным монахом Тангпой Ташипелом и принадлежит школе Кагью. Монастырем издревле руководят ламы-тулку, носящие одноименный титул. В период расцвета в обители жили до семи тысяч монахов, сейчас – около 70. В годы Культурной революции монастырь был частично разрушен. Сейчас идет активный процесс возрождения. Некоторые здания уже построены, но в них пока еще нет фресок и фигур божеств. В 2012 г. возвели нижний храм (колледж). Интересная деталь: перед приходом сюда китайской армии в 1959 г. местные жители разобрали самые ценные реликвии по домам и закопали их. Сейчас, когда обитель восстанавливается, многие тханки и скульптуры возвращаются назад.
            В центре поселка, частично скрытая домами, находится современная резиденция Таклунгов. На склоне холма сохранились массивные стены некогда величественного Красного дворца – главного храма (цуклакханга). Южнее – большой зал собраний, за которым до сих пор можно увидеть фундаменты стоявших здесь некогда трех больших чортенов. В одном из них хранились мощи основателя монастыря. Его бородатая статуя помещена в западную часовню зала собраний, которую используют как дискуссионную площадку.
        </TibetInfoCardContent>
    </TibetInfoCard>
)


const ContentTashilhunpo = () => (
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

const ContentGyandze = () => (
    <TibetInfoCard imageSrc="https://storage.googleapis.com/opentibet/gyandze.jpg">
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

const ContentShalu = () => (
    <TibetInfoCard imageSrc="https://storage.googleapis.com/opentibet/shalu.jpg">
        <TibetInfoCardTitle>Монастырь Шалу</TibetInfoCardTitle>
        <TibetInfoCardContent>
            Шалу — это буддийский монастырь, расположенный в 22 км к югу от Шигадзе в Тибете. Он был основан в 1040 году Четсуном Шерабом Джунгнаем, и на протяжении веков был известен как центр научных исследований и экстрасенсорного обучения. Его настенные росписи считаются одними из самых древних и красивых в Тибете.
            <br />
            <br />
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

const ContentNgor = () => (
    <TibetInfoCard imageSrc="https://storage.googleapis.com/opentibet/ngor.jpg">
        <TibetInfoCardTitle>Деревня Нгор</TibetInfoCardTitle>
        <TibetInfoCardContent>
            Нгор — это деревня в Тибетском автономном районе Китая, расположенная на высоте 4410 метров над уровнем моря. Она находится в долине реки Янгце, в 100 км к югу от города Шигадзе.
            <br />
            <br />
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

const ContentYamdrok = () => (
    <TibetInfoCard imageSrc="https://www.wondersoftibet.com/wp-content/uploads/2018/03/Yamdrok-Lake.jpg">
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

const ContentEverestBasecamp = () => (
    <TibetInfoCard imageSrc="https://storage.googleapis.com/opentibet/everest.jpg">
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

const ContentSakya = () => (
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

const ContentShashibangma = () => (
    <TibetInfoCard imageSrc="https://storage.googleapis.com/opentibet/sashipangma.jpg">
        <TibetInfoCardTitle>Шашипангма</TibetInfoCardTitle>
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

const ContentPelkuTso = () => (
    <TibetInfoCard imageSrc="https://www.wondersoftibet.com/wp-content/uploads/2018/10/Peiku-Tso-Lake-in-Tibet-1024x462.jpg">
        <TibetInfoCardTitle>Озеро Пелку Цо</TibetInfoCardTitle>
        <TibetInfoCardContent>
            Пелку Цо — это большое озеро в Тибете, расположенное на высоте 5200 метров над уровнем моря. Оно является популярным туристическим направлением и прекрасным местом для пеших прогулок, рыбалки и других видов активного отдыха.
        </TibetInfoCardContent>
    </TibetInfoCard>
)

const ContentMilarepaBirthplace = () => (
    <TibetInfoCard imageSrc="https://storage.googleapis.com/opentibet/milarepa-birthplace.jpg">
        <TibetInfoCardTitle>Место рождения Миларепы</TibetInfoCardTitle>
        <TibetInfoCardContent>
            Место рождения Миларепы — это деревня Га в Тибете, где он родился в 1052 году. Деревня является важным местом паломничества для буддистов со всего мира.
        </TibetInfoCardContent>
    </TibetInfoCard>
)

const ContentLangatsoLake = () => (
    <TibetInfoCard imageSrc="https://storage.googleapis.com/opentibet/langtso.jpg">
        <TibetInfoCardTitle>Озеро Ланга Цо</TibetInfoCardTitle>
        <TibetInfoCardContent>
            Озеро Ланга Цо — это большое озеро в Тибете, расположенное на высоте 4400 метров над уровнем моря. Оно является популярным туристическим направлением и прекрасным местом для пеших прогулок, рыбалки и других видов активного отдыха.
        </TibetInfoCardContent>
    </TibetInfoCard>
)

const ContentTsaparang = () => (
    <TibetInfoCard imageSrc="https://storage.googleapis.com/opentibet/tsaparang.jpg">
        <TibetInfoCardTitle>Цапаранг</TibetInfoCardTitle>
        <TibetInfoCardContent>
            Цапаранг — это разрушенная столица древнего царства Гуге, расположенная в долине реки Нгарцо, в провинции Нгари Западного Тибета. Город был основан в 14 веке и был важным торговым центром на Великом шёлковом пути. В 16 веке Цапаранг был разрушен в результате нападения войск Ладакха. С тех пор город лежит в руинах. Сегодня Цапаранг является популярным туристическим направлением. Город является напоминанием о богатой истории и культуре Тибета.
        </TibetInfoCardContent>
    </TibetInfoCard>
)

const ContentDungar = () => (
    <TibetInfoCard imageSrc="https://storage.googleapis.com/opentibet/dungar.jpg">
        <TibetInfoCardTitle>Дунгар</TibetInfoCardTitle>
        <TibetInfoCardContent>
            Дунгар — это город в Тибете, основанный в 17 веке. Город является важным центром дунганской культуры и известен своими мечетями.
        </TibetInfoCardContent>
    </TibetInfoCard>
)

const ContentPiyang = () => (
    <TibetInfoCard imageSrc="https://storage.googleapis.com/opentibet/piyang.jpg">
        <TibetInfoCardTitle>Пиянг</TibetInfoCardTitle>
        <TibetInfoCardContent>
            Пиянг — это деревня в Тибете, известная своими пещерными храмами, построенными в 10-11 веках. Фрески в пещерах изображают сцены из буддийской мифологии.
        </TibetInfoCardContent>
    </TibetInfoCard>
)

const ContentPurang = () => (
    <TibetInfoCard imageSrc="https://www.ncpedia.org/sites/default/files//styles/anchor_images/public/nepal_190.jpg?itok=wZhNt3BT">
        <TibetInfoCardTitle>Пуранг</TibetInfoCardTitle>
        <TibetInfoCardContent>
            Пуранг — это город в Тибете, основанный в 15 веке. Город был важным торговым центром на Великом шёлковом пути, но в 16 веке был разрушен войсками Ладакха. Сегодня Пуранг является популярным туристическим направлением, где можно познакомиться с историей и культурой Тибета.
        </TibetInfoCardContent>
    </TibetInfoCard>
)

const ContentKorchag = () => (
    <TibetInfoCard imageSrc="https://forum.awd.ru/gallery/images/upload/eee/17b/eee17beee4096c4f05c2e59bda24580f.jpg">
        <TibetInfoCardTitle>Корчаг</TibetInfoCardTitle>
        <TibetInfoCardContent>
            Корчаг — это деревня в Тибете, основанная в 16 веке. Деревня является важным центром тибетского буддизма и является домом для множества храмов и монастырей. Сегодня Корчаг является популярным туристическим направлением, где можно познакомиться с историей и культурой Тибета.
        </TibetInfoCardContent>
    </TibetInfoCard>
)

const ContentManosarovarKora = () => (
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

const ContentKailasKora = () => (
    <TibetInfoCard imageSrc="https://storage.googleapis.com/opentibet/vnesh-kora.jpg">
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

const ContentKailasInnerKora = () => (
    <TibetInfoCard imageSrc="https://farm8.staticflickr.com/7459/11837763826_5f13758997_o.jpg">
        <TibetInfoCardTitle>Внутренняя кора</TibetInfoCardTitle>
        <TibetInfoCardContent>
            Внутренняя кора мандалы Кайлас — это паломнический маршрут вокруг горы Кайлас в Тибете. Маршрут имеет длину около 14 километров и занимает около 1-2 дней. Паломники совершают внутреннюю кору, чтобы получить духовное очищение.
        </TibetInfoCardContent>
    </TibetInfoCard>
)

const ContentNandiKora = () => (
    <TibetInfoCard imageSrc="https://storage.googleapis.com/opentibet/nandi.jpg">
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

const ContentBuddhaThrone = () => (
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

const ContentTsedang = () => (
    <TibetInfoCard imageSrc="https://storage.googleapis.com/opentibet/tsedang.jpg">
        <TibetInfoCardTitle>Цеданг</TibetInfoCardTitle>
        <TibetInfoCardContent>
            Цеданг (Tsedang) находится примерно в 45 км от Миндроллинга по дороге S349 в Ярлунгской долине (Yarlung valley). До него можно доехать по старой дороге S349 или, если вернуться немного назад, переехать мост через Брахмапутру по скоростной автомагистрли G4219.  На въезде в Цеданг стоит КПП (проверка паспортов и пермитов). От него до центра – около 20 мин. В Цеданге надо обязательно зарегистрировать пермит (Public Security Bureau; Gaisang Lu; 9.00–12.30, 15.00–18.00). Процедура обычно занимает от 30 мин до часу.
            Цеданг, некогда маленький городок, сегодня является одним из центров Китая в Тибете. Здесь проживают около 300 тыс. человек. Большинство населения – китайцы, тибетцы живут в сравнительно неболшом квартале, где сохранились три небольших монастыря.
            Город расположен между двумя горами: Гонпо Ри (4130 м) и Ярлунг Чедар (4250 м).
        </TibetInfoCardContent>
    </TibetInfoCard>
)

const ContentLamaling = () => (
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

const ContentBuchu = () => (
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

const ContentBatsumTso = () => (
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

const ContentSamye = () => (
    <TibetInfoCard imageSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/A_grand_view_of_Samye.jpg/560px-A_grand_view_of_Samye.jpg">
        <TibetInfoCardTitle>Монастырь Самье</TibetInfoCardTitle>
        <TibetInfoCardContent>
            Самье – самый первый тибетский буддистский монастырь. С его возникновением связано множество легенд. Согласно самой распространенной из них, Самье был построен при выдающемся правителе Ярлунгской династии Трисонге Децене (VIII в.). Руководил строительством великий буддистский гуру Шантаракшита, приглашенный Трисонгом Деценом из Индии. Однако местные божества, владыки почв, противились укреплению позиций буддизма в Тибете и по ночам с помощью землетрясений разрушали все, что Шантаракшите удавалось построить за день. Кроме того, в стране начался голод и вспыхнули эпидемии. Перепуганный Трисонг Децен попросил Шантаракшиту покинуть Тибет. Перед уходом великий гуру посоветовал царю пригласить Падмасамбхаву (Гуру Ринпоче), другого великого Учителя. Он так и сделал. Вскоре после прибытия Падмасамбхавы в Тибет в недостроенном монастыре Самье в присутствии царя и всей его свиты состоялся религиозный диспут между сторонниками тибетской религии бон и Гуру Ринпоче, в котором последний одержал победу. Трисонг Децен повелел всем бонцам принять буддизм, а монастырь Самье был наконец возведен.
            Самье стал центром распространения буддизма в Тибете: здесь приглашенные из Индии и Китая монахи переводили на тибетский язык священные тексты; здесь прошел Великий диспут между сторонниками индийской и китайской ветвей буддизма, в котором победили индийцы. За свою историю обитель много раз разрушалась и восстанавливалась. К счастью, сегодня практически все постройки комплекса являют собой образцы старинной тибетской архитектуры и по мере надобности реставрируются.
        </TibetInfoCardContent>
    </TibetInfoCard>
)

const ContentDorjeDrak = () => (
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

const ContentMidroling = () => (
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

const ContentYumbulakhang = () => (
    <TibetInfoCard imageSrc="https://www.wondersoftibet.com/wp-content/uploads/2018/03/View-on-Yumbulakhang-from-the-hill.jpg">
        <TibetInfoCardTitle>Ямбулаканг</TibetInfoCardTitle>
        <TibetInfoCardContent>
            Южнее Цеданга в Ярлунгской долине есть еще несколько средневековых монастырей. Но главной достопримечательностью для туристов, без сомнения, является крепость Юмбулаганг (Yumbulagang, 13 км к югу от Цеданга; входной билет 30 юаней) на вершине высокого холма, ныне превращенная в монастырь. Предание гласит, что мощная крепость (намного больше, чем современная) здесь была воздвигнута еще первым правителем Ярлунгской династии Ньятри Цэнпо. Именно в Юмбулаганге, бывшим тогда царским дворцом, на голову царю Лхатхатхори (V в.) упала шкатулка с многочисленными буддистскими текстами. Это событие, как и другие легенды Тибета, отражено на старинных фресках в храме Юмбулаганга. В годы Культурной революции дворец-крепость был уничтожен, а в 1982 г. полностью восстановлен практически в оригинальном виде.
            Башня Юмбулаганга высотой всего 11 м, но она доминирует над долиной, и с нее открывается прекрасный вид на окрестности.
        </TibetInfoCardContent>
    </TibetInfoCard>
)

const ContentChongye = () => (
    <TibetInfoCard imageSrc="https://storage.googleapis.com/opentibet/chongye.jpg">
        <TibetInfoCardTitle>Чонгье</TibetInfoCardTitle>
        <TibetInfoCardContent>
            Курганный комплекс Чонгье (Chon-gue, 26 км от Цеданга; входной билет 35 юаней). По преданию, здесь захоронены такие выдающиеся правители Ярлунгской династии, как Сонгцэн Гампо, который перенес столицу Тибета из Юмбулаганга в Лхасу, и Трисонг Децен (VII-VIII вв.). При них буддизм в Тибете окончательно стал государственной религией. Здесь же в 2021 году был отреставрирован монастырь Риво Дечен (Riwo Dechen). Рядом с ним находятся руины замка Чингва Тагце (Qingwa Tagdze), в котором родился пятый Далай-лама.
        </TibetInfoCardContent>
    </TibetInfoCard>
)

const ContentBonri = () => (
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

const ContentKading = () => (
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

const ContentGangutso = () => (
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

const ContentBonriTemple = () => (
    <TibetInfoCard imageSrc="https://storage.googleapis.com/opentibet/bonri-temple.jpg">
        <TibetInfoCardTitle>Бонри Гомпа</TibetInfoCardTitle>
        <TibetInfoCardContent>
            Руины монастыря Бонри Гомпа (Bonri Gompa) находятся вдали от озера, в 5,5 км по другую сторону от шоссе G318 (верстовой столб 3928 км), у подножия той самой горы Бон-ри (Bon Ri), которую Миларепа отдал последователям религии бон взамен выигранного у них Кайласа.
        </TibetInfoCardContent>
    </TibetInfoCard>
)

const ContentGosul = () => (
    <TibetInfoCard imageSrc="https://storage.googleapis.com/opentibet/gosul.jpg">
        <TibetInfoCardTitle>Монастырь Госул</TibetInfoCardTitle>
        <TibetInfoCardContent>
            Монастырь Госул (высота 4551 м над уровнем моря) является символом юго-западной части Манасаровар-Коры. Он построена чуть правее пещеры, в которой великий Атиша проходил семидневную медитацию. С площадки перед монастырем открывается потрясающая панорама Кайласа и озера. Именно отсюда индусы обычно начинают свою Манасаровар-Кору.
            Внутри обители находится еще одна пещера, где в XIII в. святой Гоцампа из школы Кагью готовился к восхождению на Кайлас. Он первым прошел Манасаровар-Кору, после чего три месяца медитировал в пещере на берегу озера, а затем совершил Внешнюю Кору вокруг священной горы Кайлас. Маршрутом Гоцампы вокруг озера сейчас идут миллионы людей.
            Монастырь на этом месте появился в XVII в. Подняться к нему можно по выбитым в скале ступеням. Главной святыней храма является статуя Будды Шакьямуни. Здесь хранится множество драгоценных объектов: Кангьюр (собрание прямых слов Будды), серебряные ступы, статуи Авалокитешвары и ученика Гампопы Дусума Кхьенпы (1110–1193), достигшего Просветления в 50 лет. Особый интерес представляет второй этаж храма: в одной из комнат есть каменная стена с разнообразными глиняными пластинками, представляющими тантрические божества. Это все, что осталось от старого монастыря. В нижнем ряду можно увидеть хранителей шести миров буддизма, в верхнем – изображения священной горы Кайлас.
        </TibetInfoCardContent>
    </TibetInfoCard>
)

const ContentLangpona = () => (
    <TibetInfoCard imageSrc="https://storage.googleapis.com/opentibet/langpona.jpg">
        <TibetInfoCardTitle>Монастырь Лангпона Гомпа</TibetInfoCardTitle>
        <TibetInfoCardContent>
            Монастырь Лангпона Гомпа (Langpona Gompa) – северные ворота Манасаровара. Он стоит на горе, напоминающей по форме хобот слона, отсюда и название (langpona – «хобот слона»). Восстановлен в 1986 г. Рядом протекает река Гьяма Лунг (Gyama Lung).
            Храм построил учитель школы Кагью Самдеин Пунгког, который очень чтил эти места. В здании монастыря было 36 комнат, шестиколонный зал. Раньше здесь жили 17 монахов, сейчас – 6. Считается, что настоятелем обители являлся сам Будда Чомденте с небольшой статуэткой XII в. Дордже Памо (духовная жена будды Чакрасамвары) на груди, поэтому его образ находится в главном алтаре. Основные святыни – статуи Будды Шакьямуни и Падмасамбхавы. Среди реликвий в храме есть священный бубен, появившийся из Манасаровара, и камень в форме горы Кайлас. При входе во внутренний двор за дверью справа находится зал собраний с изображением Будды Амитабхи.
        </TibetInfoCardContent>
    </TibetInfoCard>
)

const ContentManosarovar = () => (
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

const ContentNjego = () => (
    <TibetInfoCard imageSrc="https://storage.googleapis.com/opentibet/njego.jpg">
        <TibetInfoCardTitle>Монастырь Ньего Гомпа</TibetInfoCardTitle>
        <TibetInfoCardContent>
            Монастырь Ньего Гомпа (49-й км Манасаровар-Коры), от него сохранились только руины. В 1042 г. здесь проходил путь знаменитого буддистского проповедника, мыслителя и переводчика Атиши Дипанкары Шриджняны (982–1054). Он настолько проникся священной аурой этого места, что задержался в нем на семь дней, посвятив все время буддистским церемониям и медитациям. Он изготавливал жертвенные фигурки из глины. (Эти фигурки называются «цаца» и служат символами божественных качеств ума, необходимых на пути к Просветлению.) Атиша соорудил над своим жертвенником маленькое святилище. Позднее там медитировал святой Нгорчен Кунга Лхундроп. В одном из видений ему явился Падмасамбхава, призвавший святого построить на этом месте монастырь.
        </TibetInfoCardContent>
    </TibetInfoCard>
)

const ContentRakshastal = () => (
    <TibetInfoCard imageSrc="https://storage.googleapis.com/opentibet/rakshastal.jpg">
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

const ContentSeralung = () => (
    <TibetInfoCard imageSrc="https://storage.googleapis.com/opentibet/seralung.jpg">
        <TibetInfoCardTitle>Монастырь Сералунг Гомпа</TibetInfoCardTitle>
        <TibetInfoCardContent>
            Монастырь Сералунг Гомпа (28 км Маносаровар-Коры) Это восточные ворота озера. «Монастырь терновой долины» основан в XI в., восстановлен в 1984 г. Он расположен в защищенном от стихий месте, но так близко к озеру, что приезжие сначала видят лишь небольшой бело-красный чортен и только потом сам небольшой монастырский комплекс. Раньше Сералунг Гомпа стоял в стороне от озера, в глубине долины. Новое место для него нашли с помощью предсказаний. Если раньше от монастыря просматривалась лишь тонкая полоска озера, то теперь перед наблюдателем открывается превосходная панорама.
            Основание монастыря связано с просветленным мастером Гонджо из линии Дрикунг школы Кагью, которому его Драгоценный учитель повелел: «У восточных ворот омовений на озере Цо Мапам, в подобной раскрывшемуся цветку лотоса земле золотых лепестков вод Джамбу есть горы, которые соответствуют аспектам трех защитников: Авалокитешваре, Манджушри и Ваджрапани. Там создай место для уединения».
            В монастыре можно увидеть статую Авалокитешвары, скульптурное изображение Будды Шакьямуни, четыре буддистских реликвии Самбхавы, рукопись великого переводчика Байруо Зана, подушку Дабу Раджа, волосы проявленного бодхисаттвы Седьмого Брахмана, мастера Дунджи из линии Кадампа и проявленного бодхисаттвы, мастера Куджи Пункога. Когда-то в Сералунг Гомпа было 24 помещения и колонный зал, в котором содержались священные рукописи. Во времена расцвета здесь находились от 42 до 50 монахов. Восстановленная в 1984году  обитель состояла из одного здания. За последнее время монастырь стал гораздо больше. Построили еще один храм, посвященный Падмасабхаве.
        </TibetInfoCardContent>
    </TibetInfoCard>
)


const ContentTrugo = () => (
    <TibetInfoCard imageSrc="https://storage.googleapis.com/opentibet/trugo.jpg">
        <TibetInfoCardTitle>Монастырь Сералунг Гомпа</TibetInfoCardTitle>
        <TibetInfoCardContent>
            Монастырь Тхуголхо (Thugolho); еще одно название Труго Гомпа, (Trugo Gompa). Он находится прямо на берегу Манасаровара, у подножия горы Гурла-Мандхата. «Тху» переводится как омовение, «го» – голова, «лхо» – юг. Омовение головы у южных ворот Манасаровара является с духовной точки зрения исключительно благословенным действом, поскольку в пророчествах сказано: кто здесь предастся омовению головы, переродится богом. Для паломников, желающих омыть голову, устроены специальные мостки.
            Обители насчитывается около 900 лет. Это одно из самых больших и хорошо сохранившихся культовых сооружений у Манасаровара.
            История монастыря началась с маленькой хижины, которая могла вместить двух человек. Она была построена для монахов школы Кагью мастером той же школы Джиеввой. Со временем хижина превратилась в небольшое четыреёхколонное пространство, а затем – в большой зал.
            Когда у власти был седьмой Далай-лама Келсанг Гьяцо (1708–1757), настоятели окрестных монастырей постоянно спорили по поводу права на выморочное имущество крестьянских хозяйств и лугов в этом районе. Дело дошло до того, что пришлось вмешаться Верховному государственному совету (кашаг). Он и принял решение, по которому весь район отошел к монастырю Труго Гомпа. Со временем в обители построили 18 помещений и 12-колонный главный зал. Когда-то тут жили 8 монахов, хранилось золотое изображение воина-спутника Будды и две керамические фигуры – Будды Шакьямуни и Дзамбалы. Монастырь частично пострадал в годы Культурной революции, но был полностью восстановлен в 1984 г. Сейчас здесь можно увидеть статуи богини Тары, Будд прошлого, настоящего и будущего, а также Авалокитешвары, Манджушри и Ваджрапани.
        </TibetInfoCardContent>
    </TibetInfoCard>
)

const ContentCherkip = () => (
    <TibetInfoCard imageSrc="https://storage.googleapis.com/opentibet/cherkip.jpg">
        <TibetInfoCardTitle>Монастырь Черкип Гомпа</TibetInfoCardTitle>
        <TibetInfoCardContent>
            Монастырь Черкип Гомпа (Cherkip Gompa) – самой маленькой из восьми обителей на берегах Манасаровара, до сих пор не восстановленной.
            Рядом с руинами монастыря можно увидеть несколько пещер для медитаций, которыми пользуются и до сих пор. Они находятся на отвесных скалах, смотрящих на озеро.
            Хотя мне говорили, что Кора начинается от монастыря Чиу, но обнаруженные рядом с Черким Гомпа нескольких верстовых камней говорят о том, что Кора начиналась именно от этого монастыря.
        </TibetInfoCardContent>
    </TibetInfoCard>
)

const ContentChiu = () => (
    <TibetInfoCard imageSrc="https://storage.googleapis.com/opentibet/chiu-2.jpg">
        <TibetInfoCardTitle>Монастырь Чиу Гомпа</TibetInfoCardTitle>
        <TibetInfoCardContent>
            Монастырь Чиу Гомпа - единственная обитель, где взимают плату за вход (25 юаней). Впрочем, многие туристы ограничиваются посещением лишь этого монастыря.
            Название Чиу Гомпа (Chiu Gompa) переводится как «птичий монастырь», что вполне оправданно: культовое сооружение, подобно птичьему гнезду, словно прилеплено к высокой каменной пирамиде. Изначально Чиу Гомпа был построен на горе овальной формы Сангдуо Байре («Медная гора»). Центральное Место Силы здесь – пещера VIII в., в которой медитировал Падмасамбхава. Здесь он провел последние семь дней своей земной жизни. Легенды говорят, что, победив местных жрецов и обязав их исповедовать буддизм в Тибете, Падмасамбхава покинул страну на белом коне и взошел на небо по радуге. Он отправился на остров к югу от Джамбудвипы (один из четырех материков в мировом океане, которые, согласно буддийской космологии, располагаются по четырем сторонам граням центральной горы мироздания Меру), где удалился в трехступенчатый храм на вершине горы. Окружность острова одновременно является и окружностью мандалы, с четырьмя воротами и четырьмя охраняющими ее стражами.
            Монахи традиции Дрикунг школы Кагью возвели точную копию «славного, цвета меди рая на горе». Три чортена в Чиу Гомпа напоминают о «чистой земле» Падмасамбхавы, куда стремится попасть для перерождения каждый буддист.
        </TibetInfoCardContent>
    </TibetInfoCard>
)



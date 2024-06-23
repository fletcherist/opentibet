"use client";

import { BuyBookButtonContainer, Header, Navbar, NavbarHeightCompensation, PageBreadcrumbs, WithLanguageProvider } from '@/components/components';
import { useTranslateFn } from '@/lib/language';
import React from 'react'
import Image from 'next/image';

import tibetCss from "../tibet.module.css";

export default function Page() {
    return (
        <WithLanguageProvider>
            <GuruTibet />
        </WithLanguageProvider>
    );
}

const GuruTibet = () => {
    const translate = useTranslateFn();
    return (
        <main
            lang="ru"
            className="flex min-h-screen flex-col items-center bg-gray-800"
        >
            <Navbar />
            <NavbarHeightCompensation />


            <div className="w-full bg-gray-800 text-white pb-12">
                <div className="max-w-4xl mx-auto">
                    <PageBreadcrumbs title={translate({
                        ru: "GuruTibet",
                        en: "GuruTibet",
                    }) as string} theme='dark' />
                    <div className="w-full">
                        <Header
                            title={
                                translate({
                                    ru: "Посмотрите фильм о Тибете",
                                    en: "Watch a film about Tibet",
                                }) as string
                            }
                            subtitle={
                                translate({
                                    ru: "снятый Виктором Щербаковым и Алексеем Перчуковым",
                                    en: "filmed by Viktor Shcherbakov and Alexey Perchukov",
                                }) as string
                            }
                        />
                        <div className="py-2">
                            <p className="py-4 pb-0 leading-7 hyphens-auto">
                                {translate({
                                    ru: `Мы организуем регулярные ежемесячные туры в Тибет по уникальной
                  программе. В фильме показана одна из наших программ. Оцените
                  красоты местных монастырей и природы, силу и энергию тибетской
                  земли:`,
                                    en: "We organize regular monthly tours to Tibet according to a unique program. The film shows one of our programs. Appreciate the beauty of local monasteries and nature, the strength and energy of the Tibetan land:",
                                })}
                            </p>
                        </div>
                        <div className="w-full h-[315px] mt-5 mb-2 md:h-96">
                            <iframe
                                width="100%"
                                // height="315"
                                height="100%"
                                src="https://www.youtube.com/embed/OhtIDb8ioT0?si=rnbXixWvQlm4pVIA"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            />
                        </div>
                    </div>
                    <div className="pt-10">
                        <div className="flex px-4 w-fit mb-4 mx-auto">
                            <div className="w-32 h-32">
                                <img
                                    className={`${tibetCss.alexeyPortrait} object-cover rounded-full w-full h-full`}
                                    src="https://storage.googleapis.com/opentibet/alexey-portrait.jpeg"
                                    alt="profile picture"
                                />
                            </div>
                            <div className="flex items-center flex-1 pl-4">
                                <div>
                                    <div className="text-xl">
                                        {translate({
                                            ru: `Алексей Перчуков`,
                                            en: "Alexey Perchukov",
                                        })}
                                    </div>
                                    <div className="text-sm font-semibold">
                                        {translate({
                                            ru: `Координатор проекта OPEN TIBET`,
                                            en: "Project Coordinator OPEN TIBET",
                                        })}
                                    </div>
                                    <a
                                        href="https://www.instagram.com/kailash_explorer/"
                                        className="text-sm text-yellow-500 hover:text-yellow-700"
                                        target="_blank"
                                    >
                                        @kailash_explorer
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 leading-7 hyphens-auto">
                            {translate({
                                ru: (
                                    <>
                                        Алексей &mdash; автор нескольких профессиональных
                                        путеводителей по Тибету на русском языке, со-автор фильма{" "}
                                    </>
                                ),
                                en: (
                                    <>
                                        Alexey is the author of several professional guides to Tibet
                                        in Russian, co-author of the film{" "}
                                    </>
                                ),
                            })}

                            <a
                                className="text-yellow-600"
                                href="https://www.youtube.com/watch?v=OhtIDb8ioT0"
                                target="_blank"
                            >
                                {translate({
                                    ru: "«Тибет, место которое меняет жизнь»",
                                    en: "“Tibet, a place that changes your life”",
                                })}
                            </a>
                            {translate({
                                ru: (
                                    <>
                                        . Докладчик многочисленных международных конференции,
                                        посвященных Кайласу. Автор статьи{" "}
                                    </>
                                ),
                                en: (
                                    <>
                                        Speaker of numerous international conferences dedicated to
                                        Kailash. The author of the article{" "}
                                    </>
                                ),
                            })}
                            <a
                                className="text-yellow-600"
                                href="https://kailash-explorer.com/2017/01/26/opisanie-spiralnoj-kory-gory-kajlas/"
                            >
                                {translate({
                                    ru: "«Спиральная Кора»",
                                    en: "“Spiral Kore”",
                                })}
                            </a>
                            {translate({
                                ru: `, исследователь , который поднялся на все плечи Кайласа и посетил
                все священные долины Мандалы Кайласа.`,
                                en: `, a researcher who climbed all the shoulders of Kailash and visited all the sacred valleys of the Kailash Mandala.`,
                            })}
                        </div>

                        <div className="p-4 leading-7 hyphens-auto mt-8" style={{ backgroundColor: 'rgba(0,0,0,0.3)' }}>
                            <p className="mb-4 text-yellow-400 font-bold uppercase tracking-wider">
                                Друзья!
                            </p>
                            <p className="mb-4">
                            </p>
                            <p className="mb-4">
                                «Я рад поделиться с вами отличной новостью - наконец-то увидел свет третий созданный мною путеводитель по Тибету.
                            </p>
                            <p className="mb-4">
                                Скоро в книжных магазинах страны.
                            </p>
                            <p className="mb-4">
                                Этот полезнейший гайд я писал прямо с места "событий" – путешествуя по Тибету прошлой осенью, дополняя и обновляя, а где-то и полностью переписывая первый мой путеводитель. Кстати, единственный и самый полный в своем роде. Результатом работы я очень доволен. Принимаю поздравления)
                            </p>
                            <p className="mb-4">
                                Заказать путеводитель с моим автографом можно по самой приятной цене 1000р по кнопке ниже.
                            </p>
                            <div className="flex justify-center">
                                <div className="flex max-w-2xl gap-5 mb-4 mt-3">
                                    <Image
                                        src="/tibet-putevoditel-2.jpg"
                                        alt=""
                                        width={600}
                                        height={400}
                                        quality={100}
                                        className="w-full cursor-pointer max-w-sm"
                                    />
                                    {/* <Image
                    src="/putevoditel-tibet.jpg"
                    alt=""
                    width={120}
                    height={90}
                    quality={90}
                    className="w-full cursor-pointer"
                  /> */}
                                </div>
                            </div>

                            <p className="mb-4">
                                <div className="flex justify-center py-4">
                                    <div className="max-w-4xl">
                                        <BuyBookButtonContainer />
                                    </div>
                                </div>
                            </p>
                            <p className="mb-4">
                                Невероятный Тибет уже много лет завораживает меня своей красотой, первозданностью, духовностью. Да, всего этого не передать через страницы путеводителя, но параллельно с ним я создавал компанию Open Tibet, на сайте которой вы сейчас находитесь.
                            </p>
                            <p className="mb-4">
                                В этом проекте я аккумулировал все свои навыки организации поездок и все рекомендации для вашего самого незабываемого путешествия к Кайласу.
                            </p>
                            <p className="mb-4">
                                Посмотрите наши программы, фильм о Тибете, фото. И присоединяйтесь!
                            </p>
                            <p className="mb-16">
                                Путешествуйте с умом и с любовью, и Тибет откроется перед вами во всей своей красе, всем великолепии. Выбирайте лучшее для себя 🏔🙏»
                            </p>
                            <p className="mb-4 text-yellow-400 font-bold">
                                Алексей Перчуков,
                                <br />
                                основатель проекта OPEN TIBET
                            </p>
                        </div>

                        <div className="pt-10 flex justify-center">
                            <div className="flex flex-col gap-1 max-w-2xl">

                                <div className="flex gap-1">
                                    <div className="bg-blue max-w-[50%] w-full h-full">
                                        <Image
                                            src="https://img.opentibet.ru/logo/tibet-group-1.jpg"
                                            alt=""
                                            width={375}
                                            height={250}
                                            quality={75}
                                            className="object-cover w-full h-full"
                                        />
                                    </div>
                                    <div className="bg-blue max-w-[50%] w-full h-full">
                                        <Image
                                            src="https://img.opentibet.ru/logo/tibet-group-2.jpg"
                                            alt=""
                                            width={375}
                                            height={250}
                                            quality={75}
                                            className="object-cover w-full h-full"
                                        />
                                    </div>
                                </div>

                                <div className="flex gap-1">
                                    <div className="bg-blue max-w-[50%] w-full h-full">
                                        <Image
                                            src="https://img.opentibet.ru/logo/tibet-group-3.jpg"
                                            alt="Фото Алексея Перчукова"
                                            width={375}
                                            height={250}
                                            quality={75}
                                            className="object-cover w-full h-full"
                                        />
                                    </div>
                                    <div className="bg-blue max-w-[50%] w-full h-full">
                                        <Image
                                            src="https://img.opentibet.ru/logo/tibet-group-4.jpg"
                                            alt=""
                                            width={375}
                                            height={250}
                                            quality={75}
                                            className="object-cover w-full h-full"
                                        />
                                    </div>
                                </div>

                                <div className="flex gap-1">
                                    <div className="bg-blue max-w-[50%] w-full h-full">
                                        <Image
                                            src="https://storage.googleapis.com/opentibet/alex-rare.jpg"
                                            alt="Фото Алексея Перчукова"
                                            width={375}
                                            height={250}
                                            quality={75}
                                            className="object-cover w-full h-full"
                                        />
                                    </div>
                                    <div className="bg-blue max-w-[50%] w-full h-full">
                                        <Image
                                            src="https://storage.googleapis.com/opentibet/alex-shiva.jpg"
                                            alt=""
                                            width={375}
                                            height={250}
                                            quality={75}
                                            className="object-cover w-full h-full"
                                        />
                                    </div>
                                </div>
                                {/* <Image
                  src="https://storage.googleapis.com/opentibet/alex-11.jpeg"
                  alt=""
                  width={375}
                  height={250}
                  quality={75}
                  className="w-full col-start-2 col-end-4 row-start-2 row-end-4  cursor-pointer"
                /> */}
                            </div>
                        </div>
                        <div className="text-center p-4">
                            <p className="text-gray-400 text-sm">
                                {translate({
                                    ru: <>Больше фото в </>,
                                    en: <>More photos on </>,
                                })}
                                <a
                                    href="https://www.instagram.com/kailash_explorer/"
                                    className="text-yellow-500 hover:text-yellow-700"
                                    target="_blank"
                                >
                                    Instagram
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
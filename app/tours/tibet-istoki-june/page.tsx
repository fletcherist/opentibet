"use client"

import { AbstractButton, ActionButton, ApplyForm, BackgroundSlider, Footer, LinkTours, Navbar, TimetableDay, TimetablePhoto, TourButton, WithLanguageProvider } from "@/components/components";
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
            <TimetableDay accentColor={accentColor} title="1 день">
                {translate({
                    ru: <>
                        <div>
                            <b>Тут текст первого дня</b>
                            <TimetablePhoto src={imagesSrc.jokang} title="Монастырь Джоканг" />
                        </div>
                    </>,
                    en: "Text for day 1"
                })}
            </TimetableDay>
            <TimetableDay accentColor={accentColor} title="2 день">
                {translate({
                    ru: "Текст с картинкой",
                    en: "text with picture"
                })}
                <TimetablePhoto src={imagesSrc.jokang} title="Монастырь Джоканг" />
            </TimetableDay>
        </>
    );
}
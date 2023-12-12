

import { AbstractButton, ActionButton, ApplyForm, BackgroundSlider, Footer, LinkTours, TimetableButton } from "@/components/components";
import { TourBasicTimetable } from "@/components/ToursTimetable";
import { LINK_APPLY_FORM, LINK_OFFERS, Month, getTourPriceForMonth } from "@/utils/constants";

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
        <main
            lang="ru"
            className="flex min-h-screen flex-col items-center justify-between"
        >
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
                    <TimetableButton
                        title={`${month.charAt(0).toUpperCase()}${month.slice(1)}`}
                        subtitle="2—19 мая"
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
    )
}
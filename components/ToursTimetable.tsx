"use client";
import { useTranslateFn } from "@/lib/language";
import { imagesSrc } from "./TibetInfo";
import { TimetableDay, TimetablePhoto, TimetablePhotoDouble } from "./components";


export const TimetableFactoid: React.FC<{
    fact: string;
    value: string;
}> = ({ fact, value }) => {
    return (
        <div className="self-center">
            <div className="text-2xl tabular-nums leading-5 font-light">{value}</div>
            <div className="text-xs">{fact}</div>
        </div>
    );
};

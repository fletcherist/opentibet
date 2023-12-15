import React, { FunctionComponent } from "react";
import { useContext } from "react";

export type Language = 'ru' | 'en';
export type SetLanguage = (language: Language) => void
export type Translation = { [key in Language]: string | React.ReactNode };
const create = (translation: Translation): Translation => translation;

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
}
export const LanguageContext = React.createContext<LanguageContextValue>({
  language: 'ru',
  setLanguage: () => undefined,
});
export const useLanguage = (): Language => {
  const lang = useContext(LanguageContext);

  return lang.language;
};
export const useSetLanguage = (): SetLanguage => {
  const languageContext = useContext(LanguageContext);
  return (language: Language) => languageContext.setLanguage(language)
}
export const useTranslate = (translation: Translation): string | React.ReactNode => {
  const lang = useLanguage();
  return translation[lang];
};

export type TranslationMap<T extends string> = { [key in T]: Translation };
export function useTranslateMap<T extends string>(
  translationMap: TranslationMap<T>,
): { [key in keyof TranslationMap<T>]: string } {
  const lang = useLanguage();
  type Result = { [key in keyof TranslationMap<T>]: string };
  const result: Result = Object.entries(translationMap).reduce((acc, entry) => {
    const key = entry[0] as T;
    const translation = entry[1] as Translation;

    return { ...acc, ...{ [key]: translation[lang] } };
  }, {} as Result);

  return result;
}

export function translate(language: Language, translation: Translation): string | React.ReactNode {
  return translation[language]
}

type TranslateFn = (translation: Translation) => string | React.ReactNode
export function useTranslateFn(): TranslateFn {
  const language = useLanguage();
  return (translation: Translation) => translate(language, translation)
}

export const language = {
  create,
};

export const LanguageProvider: FunctionComponent<{
  value: LanguageContextValue
  children: React.ReactNode
}> = ({ children, value }) => {
  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
};

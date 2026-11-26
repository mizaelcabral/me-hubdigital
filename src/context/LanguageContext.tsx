import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  useMemo,
} from "react";
import pt, { type TranslationDictionary } from "@/locales/pt";
import en from "@/locales/en";
import es from "@/locales/es";

export type Locale = "pt" | "en" | "es";

const dictionaries: Record<Locale, TranslationDictionary> = {
  pt,
  en,
  es,
};

const htmlLangMap: Record<Locale, string> = {
  pt: "pt-BR",
  en: "en",
  es: "es",
};

const STORAGE_KEY = "mehub_lang";

interface LanguageContextValue {
  lang: Locale;
  setLang: (locale: Locale) => void;
  t: TranslationDictionary;
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: "pt",
  setLang: () => {},
  t: pt,
});

export const LanguageProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [lang, setLangState] = useState<Locale>("pt");

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY) as Locale | null;
      if (saved && (saved === "pt" || saved === "en" || saved === "es")) {
        setLangState(saved);
        document.documentElement.lang = htmlLangMap[saved];
      }
    } catch {
      // ignore storage access errors
    }
  }, []);

  const setLang = useCallback((locale: Locale) => {
    setLangState(locale);
    try {
      window.localStorage.setItem(STORAGE_KEY, locale);
      document.documentElement.lang = htmlLangMap[locale];
    } catch {
      // ignore storage access errors
    }
  }, []);

  const value = useMemo(
    () => ({
      lang,
      setLang,
      t: dictionaries[lang],
    }),
    [lang, setLang]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);

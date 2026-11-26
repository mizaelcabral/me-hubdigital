import React from "react";
import { useLanguage, type Locale } from "@/context/LanguageContext";

const LOCALES: { code: Locale; label: string; name: string }[] = [
  { code: "pt", label: "PT", name: "Português" },
  { code: "en", label: "EN", name: "English" },
  { code: "es", label: "ES", name: "Español" },
];

interface LanguageSwitcherProps {
  className?: string;
}

const LanguageSwitcher = ({ className = "" }: LanguageSwitcherProps) => {
  const { lang, setLang, t } = useLanguage();

  return (
    <div
      className={`lang-switcher ${className}`.trim()}
      role="group"
      aria-label={t.nav.languageLabel}
    >
      <span className="lang-switcher__icon" aria-hidden="true">
        <i className="fa-solid fa-globe"></i>
      </span>
      {LOCALES.map((item) => {
        const active = lang === item.code;
        return (
          <button
            key={item.code}
            type="button"
            className={`lang-switcher__btn${active ? " is-active" : ""}`}
            onClick={() => setLang(item.code)}
            aria-pressed={active}
            title={item.name}
          >
            {item.label}
          </button>
        );
      })}
    </div>
  );
};

export default LanguageSwitcher;

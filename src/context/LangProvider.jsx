import React, { createContext } from "react";
import { useTranslation } from "react-i18next";
import "../i18n.js";
import { changeLanguage } from "i18next";

export const LangContext = createContext({});

export const LangProvider = ({ children }) => {
  const {
    i18n: { changeLanguage, language },
  } = useTranslation();
  const [lang, setLang] = React.useState(language);

  React.useLayoutEffect(() => {
    if (lang.toLowerCase() === "ar") document.documentElement.dir = "rtl";
    else document.documentElement.dir = "ltr";
    changeLanguage(language);
  }, []);

  const changeLang = (desLang) => {
    if (desLang === "ar") {
      setLang("ar");
      document.documentElement.dir = "rtl";
    }
    if (desLang === "en") {
      setLang("en");
      document.documentElement.dir = "ltr";
    }
  };

  const value = { lang, changeLang };

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
};

export const useLang = () => React.useContext(LangContext);

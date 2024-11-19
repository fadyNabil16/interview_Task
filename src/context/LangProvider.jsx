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
    if (lang.toLowerCase() == "ar") document.documentElement.dir = "rtl";
    else document.documentElement.dir = "ltr";
    changeLanguage(language);
  }, []);

  const changeLang = (desLang) => {
    desLang = desLang.toLowerCase();
    if (desLang === "ar") {
      setLang("ar");
      document.documentElement.dir = "rtl";
    }
    if (desLang === "en") {
      setLang("ar");
      document.documentElement.dir = "ltr";
    }
    changeLanguage(lang);
  };
  return (
    <LangContext.Provider value={{ lang, changeLang }}>
      {children}
    </LangContext.Provider>
  );
};

export const useLang = () => React.useContext(LangContext);

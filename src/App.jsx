import { useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import { useLang } from "./context/LangProvider";

function App() {
  const {
    t,
    // i18n: { changeLanguage, language },
  } = useTranslation();
  const { lang, changeLanguage } = useLang();
  // const [currentLanguage, setCurrentLanguage] = useState(language);

  // const handleChangeLanguage = () => {
  //   const newLanguage = currentLanguage === "ar" ? "ar" : "en";
  //   setCurrentLanguage(newLanguage);
  //   if (newLanguage == "ar") {
  //     document.documentElement.dir = "rtl";
  //   } else {
  //     document.documentElement.dir = "ltr";
  //   }
  //   changeLanguage(newLanguage);
  // };
  // const changeLang = () => {
  //   if (currentLanguage == "ar") {
  //     setCurrentLanguage("en");
  //   } else {
  //     setCurrentLanguage("ar");
  //   }
  //   changeLanguage(currentLanguage);
  // };
  const handkell = (desLang) => {
    changeLanguage(desLang);
  };
  return (
    <>
      <div>{t("Hello")}</div>
      <button onClick={handkell("en")}>{lang}</button>
    </>
  );
}

export default App;

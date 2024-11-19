import { useState } from "react";
import { useTranslation } from "react-i18next";

function App() {
  const {
    t,
    i18n: { changeLanguage, language },
  } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(language);

  const handleChangeLanguage = () => {
    const newLanguage = currentLanguage === "ar" ? "ar" : "en";
    setCurrentLanguage(newLanguage);
    changeLanguage(newLanguage);
  };
  const changeLang = () => {
    if (currentLanguage == "ar") {
      setCurrentLanguage("en");
    } else {
      setCurrentLanguage("ar");
    }
    changeLanguage(currentLanguage);
  };
  return <></>;
}

export default App;

import React, { useState } from "react";
import "./index.css";
import "../../locale/en.json";
import { useTranslation } from "react-i18next";
import { usePackInfo } from "@/context/PackageProvider";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";
import { useLang } from "@/context/LangProvider";

//{t('')}
const Navbar = () => {
  const {
    t,
    i18n: { changeLanguage, language },
  } = useTranslation();
  const { NewPaclageTrack } = usePackInfo();
  const { changeLang } = useLang();
  const [isFollowOpen, setIsFollowOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [value, setValue] = useState("");

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleFollow = () => setIsFollowOpen(!isFollowOpen);

  const handleSubmit = (e) => {
    e.preventDefault();
    NewPaclageTrack(value);
    setIsFollowOpen(false);
  };
  const handleLang = () => {
    if (language === "ar") {
      changeLang("en");
      changeLanguage("en");
    } else {
      changeLang("ar");
      changeLanguage("ar");
    }
  };

  return (
    <>
      <div className="_container">
        <div className="flex text-bgc-bred text-xl">{t("bosta")}</div>

        <div className="hidden md:block">
          <ul className="flex">
            <li className="px-12">{t("main")}</li>
            <li className="px-12">{t("prices")}</li>
            <li className="px-12">{t("support")}</li>
          </ul>
        </div>

        <div className="hidden md:block">
          <ul className="flex items-baseline">
            <li className="relative px-5 pt-5 md:hover:text-bgc-bred md:hover:border md:hover:border-b-0 md:hover:border-b-gray-400 md:hover:rounded-t-lg">
              <button onClick={toggleFollow}>{t("trackpackage")}</button>
              <div
                className={`absolute start-0 mt-2 w-80 gap-1 bg-white rounded-md shadow-lg overflow-hidden transition-all duration-300 ease-in-out ${
                  isFollowOpen ? "max-h-20 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <form onSubmit={handleSubmit} className="p-4 flex">
                  <input
                    type="text"
                    placeholder="تتبع شحنتك"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    className="flex-grow px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                  <button
                    type="submit"
                    className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
                  >
                    {t("follow")}
                  </button>
                </form>
              </div>
            </li>
            <li className="px-5">{t("login")}</li>
            <li className="text-bgc-bred px-5">
              <button onClick={() => handleLang()}>{t("lang")}</button>
            </li>
          </ul>
        </div>
        <div className="flex md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-700 hover:bg-gray-100 p-2 rounded-md"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile navbar */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <ul className="w-full space-y-6">
              <li className="px-12">{t("main")}</li>
              <li className="px-12">{t("prices")}</li>
              <li className="px-12">{t("support")}</li>
            </ul>
            <div className="text-start w-full px-2">
              <ul className="flex flex-col items-baseline w-full space-y-6">
                <li className="px-5 pt-5 w-full">
                  <div className="relative">
                    <button
                      onClick={toggleFollow}
                      className="text-gray-700 hover:bg-gray-100 block px-3 py-2 rounded-md w-full text-left flex justify-between items-center"
                    >
                      {t("trackpackage")}
                      {isFollowOpen ? (
                        <ChevronUp className="ml-1" />
                      ) : (
                        <ChevronDown className="ml-1" />
                      )}
                    </button>
                    <div
                      className={`mt-2 bg-gray-50 overflow-hidden transition-all duration-300 ease-in-out ${
                        isFollowOpen
                          ? "max-h-20 opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <form
                        onSubmit={handleSubmit}
                        className="p-4 flex flex-row-reverse gap-1"
                      >
                        <input
                          type="text"
                          placeholder={t("packagenum")}
                          onChange={(e) => setValue(e.target.value)}
                          className="flex-grow px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          required
                        />
                        <button
                          type="submit"
                          className="bg-red-600 text-white px-4 py-2 rounded-r-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
                        >
                          Submit
                        </button>
                      </form>
                    </div>
                  </div>
                </li>
                <li className="px-5 w-full">{t("login")}</li>
                <li className="text-bgc-bred px-5">
                  <button onClick={handleLang}>{t("lang")}</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;

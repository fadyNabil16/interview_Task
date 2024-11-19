import React from "react";
import "./index.css";
import "../../locale/en.json";
import { useTranslation } from "react-i18next";

//{t('')}
const Navbar = () => {
  const { t } = useTranslation();
  return (
    <div className="_container">
      <div className="flex text-bgc-bred text-xl">{t("bosta")}</div>

      <div>
        <ul className="flex">
          <li className="">{t("main")}</li>
          <li className="px-12">{t("prices")}</li>
          <li>{t("support")}</li>
        </ul>
      </div>

      <div>
        <ul className="flex">
          <li>{t("trackpackage")}</li>
          <li className="px-5">{t("login")}</li>
          <li className="text-bgc-bred">{t("lang")}</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

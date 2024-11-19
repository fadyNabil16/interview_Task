import { useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import { useLang } from "./context/LangProvider";
import Navbar from "./components/Navbar/Navbar";
import "./app.css";
import { usePackInfo } from "./context/PackageProvider";
//{t('')}
function App() {
  const {
    t,
    i18n: { changeLanguage, language },
  } = useTranslation();
  const { lang, changeLang } = useLang();

  const { getPackageData } = usePackInfo();
  const handleChangeLanguage = (deslang) => {
    changeLang(deslang);
    changeLanguage(deslang);
  };

  const handlehh = () => {
    getPackageData();
  };

  return (
    <div className="font-cairo">
      <Navbar />
      {/* Second Section */}
      <div className="mx-10 md:mx-20">
        <div className="border border-bgc-bdarkgray rounded-md  my-14">
          <div className="border-b border-bgc-bdarkgray flex flex-wrap ps-8 md:ps-6 mt-8 md:mt-0 md:py-4">
            <div className="item-cont">
              <div className="hero-subtit">
                {t("packagenumber", { num: 123 })}
              </div>
              <div>{t("PackageState.TICKET_CREATED")}</div>
            </div>
            <div className="item-cont">
              <div className="hero-subtit">{t("lastupdate")}</div>
              <div>{t("Days.sunday")}</div>
            </div>
            <div className="item-cont">
              <div className="hero-subtit">{t("provider")}</div>
              <div>SOUQ.COM</div>
            </div>
            <div className="item-cont">
              <div className="hero-subtit">{t("promiseddate")}</div>
              <div>ِ3يناير</div>
            </div>
          </div>
          {/* SLider */}
          <div className="relative py-12 px-7">
            <div className="h-[0.4rem] min-w-full bg-slate-500 rounded-full" />
            {
              <div className="absolute text-xl top-[46%] right-9 z-20 ">
                <i class="fa-solid fa-boxes-packing "></i>
              </div>
            }
            <button onClick={() => handlehh()} className="left-0 absolute">
              adasd
            </button>
          </div>
        </div>

        {/* Third section */}
        <div className="grid grid-cols-12 md:gap-4">
          <div className="col-span-12 md:col-span-8">
            <div className="mb-4">
              <p>{t("packagedetails")}</p>
            </div>
            <div>
              <table className="border-collapse min-w-full text-[0.75rem]  overflow-visible">
                <thead className="bg-gray-50 text-gray-400/95 font-bold">
                  <tr className="py-4">
                    <th className="table-item-start">{t("branch")}</th>
                    <th className="table-item-center">{t("date")}</th>
                    <th className="table-item-center">{t("time")}</th>
                    <th className="table-item-end">{t("details")}</th>
                  </tr>
                </thead>
                <tbody className="text-center">
                  {[1, 2, 3, 4].map((item, idx) => (
                    <tr key={idx} className="py-20">
                      <td className="table-item-start">{t("branch")}</td>
                      <td className="table-item-center">{t("date")}</td>
                      <td className="table-item-center">{t("time")}</td>
                      <td className="table-item-end">{t("details")}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="col-span-12 md:col-span-4 mt-8 md:mt-0">
            <div className="mb-4">
              <p>{t("address")}</p>
            </div>
            <div>
              <div className="border border-gray-200 rounded-lg py-4 px-2 bg-gray-100/40">
                <p className="text-sm">{t("devaddress")}</p>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

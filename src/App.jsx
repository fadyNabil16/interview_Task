import {
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";
import { useTranslation } from "react-i18next";
import { useLang } from "./context/LangProvider";
import Navbar from "./components/Navbar/Navbar";
import "./app.css";
import { usePackInfo } from "./context/PackageProvider";
import { dateParse } from "./Utility/helper";

/* 
{provider: 'Bosta', CurrentStatus: {…}, PromisedDate: '2024-05-21T20:59:59.999Z', TrackingNumber: '84043113', TrackingURL: 'bosta.co/tracking-shipment/?track_num=84043113', …}
*/

//{t('')}
function App() {
  const {
    t,
    i18n: { changeLanguage, language },
  } = useTranslation();
  const { lang, changeLang } = useLang();

  // const { data, isLoading, error } = usePackInfo();
  const [color, setColor] = useState("bg-bgc-bred");
  const [progress, setProgress] = useState({
    state: "",
    percent: "",
    color: "",
  });
  const [res, setRes] = useState({
    state: {
      CANCELLED: "bg-bgc-bred",
      WAITING_FOR_CUSTOMER_ACTION: "bg-bgc-byellow",
      DELIVERED: "bg-bgc-bgreen",
    },
  });
  useEffect(() => {}, []);

  const handleChangeLanguage = (deslang) => {
    changeLang(deslang);
    changeLanguage(deslang);
  };

  // if(isLoading) {
  //   return <div>Loading...</div>
  // }
  // if(error) {
  //   return <div>{error.message}</div>
  // }

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
              <div>{t(`PackageState.aasds`)}</div>
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
              <div>ِ{t(`fady`)}</div>
            </div>
          </div>
          {/* SLider */}
          <div className="m-12">
            <div className="relative">
              <div className="absolute h-[0.4rem] min-w-full bg-gray-500 rounded-full">
                <div
                  className={`h-[0.4rem] w-[33%] ${color} rounded-full`}
                ></div>
              </div>
              <div
                className={`absolute start-0 border rounded-full text-[#fff] ${color} p-3 text-[0.9rem]`}
              >
                <i class="fa-solid fa-truck-fast"></i>
              </div>
              <div
                className={`absolute start-1/3 border rounded-full text-[#fff] ${color} p-3 text-[0.9rem]`}
              >
                <i class="fa-solid fa-truck-fast"></i>
              </div>
              <div
                className={`absolute start-2/3 border rounded-full text-[#fff] ${color} p-3 text-[0.9rem]`}
              >
                <i class="fa-solid fa-truck-fast"></i>
              </div>
              <div
                className={`absolute end-0 border rounded-full text-[#fff] ${color} p-3 text-[0.9rem]`}
              >
                <i class="fa-solid fa-boxes-packing"></i>
              </div>
            </div>
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
                  {/* {data.TransitEvents.map((item, idx) => (
                    <tr key={idx} className="py-20">
                      <td className="table-item-start">{t("branch")}</td>
                      <td className="table-item-center">{t("date")}</td>
                      <td className="table-item-center">{t("12:30 pm")}</td>
                      <td className="table-item-end">{t(`PackageState.${item.state}`)}</td>
                    </tr>
                  ))} */}
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

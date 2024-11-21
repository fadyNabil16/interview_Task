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
import question from "./assets/question.jpg";
import { usePackInfo } from "./context/PackageProvider";
import CustomProgressBar from "./components/ProgressBar/ProgressBar";

/* 
{provider: 'Bosta', CurrentStatus: {…}, PromisedDate: '2024-05-21T20:59:59.999Z', TrackingNumber: '84043113', TrackingURL: 'bosta.co/tracking-shipment/?track_num=84043113', …}
*/
const states = {
  1: "TICKET_CREATED",
  2: "PACKAGE_RECEIVED",
  3: "OUT_FOR_DELIVERY",
  4: "DELIVERED",
};

//{t('')}
function App() {
  const {
    t,
    i18n: { changeLanguage, language },
  } = useTranslation();
  const { lang, changeLang } = useLang();

  const { data, isLoading, error, perscent, color, tarns, currentState } =
    usePackInfo();
  const [reason, setReason] = useState("");
  const [progress, setProgress] = useState();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }

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
              <div style={{ color: `${color}` }} className={`font-bold`}>
                {t(`${currentState}`)}
              </div>
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
              <div>ِ{t("consttime")}</div>
            </div>
          </div>
          {/* SLider */}
          <div className="px-12 py-12">
            <CustomProgressBar currentStage={perscent} color={color} />
          </div>
          <div className="px-12 flex justify-between font-bold text-[0.9rem] pb-10">
            <div>{t("TICKET_CREATED")}</div>
            <div>{t("PACKAGE_RECEIVED")}</div>
            <div>{t("OUT_FOR_DELIVERY")}</div>
            <div>{t("DELIVERED")}</div>
          </div>
        </div>

        {/* Third section */}
        <div className="grid grid-cols-12 md:gap-4 mb-10">
          <div className="col-span-12 md:col-span-8">
            <div className="mb-4">
              <p>{t("packagedetails")}</p>
            </div>
            <div className="rounded-lg overflow-hidden border border-gray-200">
              <table className="border-collapse min-w-full text-[0.85rem]">
                <thead className="bg-gray-50 text-gray-400/95 font-semibold">
                  <tr className="py-4">
                    <th className="table-item-start">{t("branch")}</th>
                    <th className="table-item-center">{t("date")}</th>
                    <th className="table-item-center">{t("time")}</th>
                    <th className="table-item-end">{t("details")}</th>
                  </tr>
                </thead>
                <tbody className="text-center font-normal">
                  {tarns.map((item, idx) => (
                    <tr key={idx} className="py-20">
                      <td className="table-item-start">
                        {t("Branch.nasrcity")}
                      </td>
                      <td className="table-item-center">05/05/2020</td>
                      <td className="table-item-center">{t("12:30 pm")}</td>
                      <td className="table-item-end">{t(`${item.state}`)}</td>
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
                <p className="text-md">{t("devaddress")}</p>
              </div>
              <div className="flex flex-col mt-4 md:flex-row md:gap-2 border border-gray-100 rounded-lg">
                <div className="max-w-[50%] md:max-w-[40%] self-center md:self-auto">
                  <img src={question} alt="quetsion" />
                </div>
                <div className="flex flex-col justify-center items-center md:items-start">
                  <p className="mb-4">{t("reportAProblem1")}</p>
                  <button className="bg-bgc-bred text-[#fff] py-2 rounded-xl w-[90%] md:w-full">
                    {t("reportAProblem2")}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

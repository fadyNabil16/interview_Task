import { dbInfo } from "@/services/GetDbInfo";
import axios from "axios";
import React, { useState, createContext, useLayoutEffect } from "react";

export const PackageContext = createContext({});

export const PackageProvider = ({ children }) => {
  const api = "https://tracking.bosta.co/shipments/track/";
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [perscent, setPercent] = React.useState(0);
  const [color, setColor] = React.useState("");
  const [tarns, setTrans] = useState([]);

  React.useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    setIsLoading(true);
    try {
      const response = await dbInfo(api);
      const data = response;
      setData(data);
      console.log(data.CurrentStatus);

      const perscent = ppp(data.CurrentStatus);
      console.log(perscent);
      setPercent(perscent);
      console.log(perscent);
      if (perscent == 100) {
        setColor("bg-bgc-bgreen");
      } else if (perscent == 66) {
        setColor("bg-bgc-bred");
      } else {
        setColor("bg-bgc-byellow");
      }
      setTrans(data.TransitEvents);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const ppp = (arr) => {
    let x = 0;
    if (arr.state == "PACKAGE_RECEIVED") {
      x = 33;
    } else if (
      arr.state === "OUT_FOR_DELIVERY" ||
      arr.state === "WAITING_FOR_CUSTOMER_ACTION" ||
      arr.state === "AVAILABLE_FOR_PICKUP" ||
      arr.state === "DELIVERY_FAILED" ||
      arr.state === "CANCELLED" ||
      arr.state === "DELIVERED_TO_SENDER"
    ) {
      x = 66;
    } else if (arr.state === "DELIVERED") {
      x = 100;
    }
    return x;
  };

  const value = { data, isLoading, error, perscent, color, tarns };

  return (
    <PackageContext.Provider value={value}>{children}</PackageContext.Provider>
  );
};

export const usePackInfo = () => React.useContext(PackageContext);

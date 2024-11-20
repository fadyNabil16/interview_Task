import { dbInfo } from "@/services/GetDbInfo";
import axios from "axios";
import React, { useState, createContext, useLayoutEffect } from "react";

export const PackageContext = createContext();

export const PackageProvider = ({ children }) => {
  const api = "https://tracking.bosta.co/shipments/track/";
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [currentState, setCurrentState] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [perscent, setPercent] = React.useState(0);
  const [color, setColor] = React.useState("");
  const [tarns, setTrans] = useState([]);

  React.useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async (trackNumber = "40106705") => {
    setIsLoading(true);
    try {
      await dbInfo(api, trackNumber).then((response) => {
        const data = response;
        setData(data);
        setCurrentState(data.CurrentStatus.state);
        const perscent = ppp(data.CurrentStatus);
        setPercent(perscent);
        const color =
          perscent > 3
            ? "bg-bgc-bgreen"
            : perscent > 2
            ? "bg-bgc-bred"
            : "bg-bgc-byellow";
        setColor(color);
        setTrans(data.TransitEvents);
      });
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const ppp = (arr) => {
    let x = 1;
    if (arr.state == "PACKAGE_RECEIVED") {
      x = 2;
    } else if (
      arr.state === "OUT_FOR_DELIVERY" ||
      arr.state === "WAITING_FOR_CUSTOMER_ACTION" ||
      arr.state === "AVAILABLE_FOR_PICKUP" ||
      arr.state === "DELIVERY_FAILED" ||
      arr.state === "CANCELLED" ||
      arr.state === "DELIVERED_TO_SENDER"
    ) {
      x = 3;
    } else if (arr.state === "DELIVERED") {
      x = 4;
    }
    return x;
  };

  const NewPaclageTrack = (num) => {
    fetchdata(num);
  };

  const value = {
    data,
    isLoading,
    error,
    perscent,
    color,
    tarns,
    currentState,
    NewPaclageTrack,
  };

  return (
    <PackageContext.Provider value={value}>{children}</PackageContext.Provider>
  );
};

export const usePackInfo = () => React.useContext(PackageContext);

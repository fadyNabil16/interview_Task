import { dbInfo } from "@/services/GetDbInfo";
import axios from "axios";
import React, { useState, createContext } from "react";

export const PackageContext = createContext({});

export const PackageProvider = ({ children }) => {
  const api = "https://tracking.bosta.co/shipments/track/";
  const [day, setDay] = useState(null);
  const [createdDate, setCreatedDate] = useState(null);
  const [lastState, setLastState] = useState(null);

  const getPackageData = async () => {
    await dbInfo(api)
      .then((res) => {
        console.log(new Date(res.CreateDate));
      })
      .catch((err) => console.log(err));
  };

  const value = { getPackageData };

  return (
    <PackageContext.Provider value={value}>{children}</PackageContext.Provider>
  );
};

export const usePackInfo = () => React.useContext(PackageContext);

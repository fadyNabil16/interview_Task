import { dbInfo } from "@/services/GetDbInfo";
import axios from "axios";
import React, { useState, createContext, useLayoutEffect } from "react";

export const PackageContext = createContext({});

export const PackageProvider = ({ children }) => {
  const api = "https://tracking.bosta.co/shipments/track/";
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    const fetchdata = async () => {
      setIsLoading(true);
      try {
        const response = await dbInfo(api);
        const data = response;
        setData(data);
        console.log(data);
        
      } catch (error) {
        setError(error);        
      }finally{
        setIsLoading(false);
      }
    }
    fetchdata();
  }, []);
  


  const value = {data, isLoading, error };

  return (
    <PackageContext.Provider value={value}>{children}</PackageContext.Provider>
  );
};

export const usePackInfo = () => React.useContext(PackageContext);

import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  defaultProjectProxyRoute,
  GetProjectUrl,
  request,
  SetHeaders,
} from "../../request";
import { LanguageContext } from "../../context/Language";

const UseFetchWithoutBaseUrl = (realurl) => {
  // console.log(base_URL, GetProjectUrl());
  const navigate = useNavigate();
  const { Lan } = useContext(LanguageContext);
  //base_URL = "";

  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      request.interceptors.request.use(
        (config) => {
          config.headers = {
            ...config.headers,
            ...SetHeaders(), // Update headers before sending the request
          };
          return config;
        },
        (error) => {
          return Promise.reject(error);
        }
      );

      try {
        const res = await request.get(realurl);
        setData(res.data);
      } catch (error) {
        setError(error);
        if (error.code === 401) {
          //todo handle error message
          RedirectToLogin(navigate, error);
        }
      }
      setIsLoading(false);
    };

    fetchData();
  }, [realurl, Lan]);

  return { data, isLoading, error };
};

export default UseFetchWithoutBaseUrl;

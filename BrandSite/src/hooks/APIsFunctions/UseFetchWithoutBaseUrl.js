import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  defaultProjectProxyRoute,
  GetProjectUrl,
  request,
} from "../../request";
import RedirectToLogin from "./RedirectToLogin";

const UseFetchWithoutBaseUrl = (realurl) => {
  // console.log(base_URL, GetProjectUrl());
  const navigate = useNavigate();

  //base_URL = "";

  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
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
  }, [realurl]);

  return { data, isLoading, error };
};

export default UseFetchWithoutBaseUrl;

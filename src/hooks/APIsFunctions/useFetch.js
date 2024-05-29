import { useState, useEffect } from "react";
// import axios from "axios";
import { defaultProjectProxyRoute, request } from "../../request";

const useFetch = (url, projectRoute) => {
  const realurl = `${defaultProjectProxyRoute}${url}`;
  // const realurl = url;
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
      }
      setIsLoading(false);
    };
    fetchData();
  }, [realurl]);

  return { data, isLoading, error };
};

export default useFetch;

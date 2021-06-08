import { useState, useEffect, useCallback } from "react";

export const useFetch = (url) => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const getData = useCallback(async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
      setLoading(false);
    } catch (e) {
      setError(true);
    }
  }, [url]);

  const refetchData = useCallback(() => {
    console.log("REFETCHDATAA");
    getData(url);
  }, [getData, url]);

  useEffect(() => {
    getData();
  }, [url, getData]);

  return [loading, data, error, refetchData];
};

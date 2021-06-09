import { useState, useEffect, useCallback } from "react";

export const useFetch = (url) => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const getData = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
      setLoading(false);
      setError(false);
    } catch (e) {
      setError(true);
      setLoading(false);
    }
  }, [url]);

  const refetchData = useCallback(() => {
    setError(false);
    setLoading(true);
    getData(url);
  }, [getData, url]);

  useEffect(() => {
    getData();
  }, [url, getData]);

  return [loading, data, error, refetchData];
};
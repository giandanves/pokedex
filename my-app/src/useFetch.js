import { useState, useEffect, useCallback } from "react";



export const useFetch = (url) => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const getProducts = useCallback(async () => {
    try {
    const response = await fetch(url);
    const products = await response.json();
    setProducts(products);
    setLoading(false);
    } catch (e) {
    setError(true);
    }
  }, [url]);

  useEffect(() => {
    getProducts();
  }, [url, getProducts]);
  return [ loading, products, error ];
};

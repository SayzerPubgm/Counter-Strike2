import { useEffect, useState } from "react";

export function useFetch(url) {
  const [data, setData] = useState([]);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!url) return;

    const controller = new AbortController(); 
    const fetchData = async () => {
      setIsPending(true);
      setError(null);
      try {
        const res = await fetch(url, { signal: controller.signal });
        if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);

        const jsonData = await res.json();

        if (jsonData.products && Array.isArray(jsonData.products)) {
          setData(jsonData.products); 
        } else {
          setData([]); 
        }
      } catch (err) {
        if (err.name !== "AbortError") setError(err.message);
      } finally {
        setIsPending(false);
      }
    };

    fetchData();
    return () => controller.abort(); 
  }, [url]);

  return { data, isPending, error };
}

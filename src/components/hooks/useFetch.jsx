import { useEffect, useState } from "react";

export function useFetch(url) {
  const [data, setData] = useState([]);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!url) return;

    const controller = new AbortController(); // ✅ Abort request if unmounted
    const fetchData = async () => {
      setIsPending(true);
      setError(null);
      try {
        const res = await fetch(url, { signal: controller.signal });
        if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);

        const jsonData = await res.json();

        // Ensure the response structure is correct and contains the products key
        if (jsonData.products && Array.isArray(jsonData.products)) {
          setData(jsonData.products); // Store the 'products' array
        } else {
          setData([]); // Set empty array if no products found
        }
      } catch (err) {
        if (err.name !== "AbortError") setError(err.message);
      } finally {
        setIsPending(false);
      }
    };

    fetchData();
    return () => controller.abort(); // ✅ Cleanup fetch
  }, [url]);

  return { data, isPending, error };
}

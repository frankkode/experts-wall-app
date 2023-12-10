import { useEffect, useState } from "react";
import { token } from "../config";

const useFetchData = url => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState("idle");

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      if (!isMounted) {
        return;
      }

      setLoading(true);
      setStatus("loading");

      try {
        const res = await fetch(url, {
          headers: { Authorization: `Bearer ${token}` },
        });

        const result = await res.json();

        if (!res.ok) {
          throw new Error(result.message + " 🤢");
        }

        if (isMounted) {
          setData(result.data);
          setStatus("success");
        }
      } catch (err) {
        if (isMounted) {
          setError(err.message);
          setStatus("error");
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [url]);

  return {
    data,
    loading,
    error,
    status,
  };
};

export default useFetchData;

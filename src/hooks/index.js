import React, { useEffect, useState } from "react";
import { fetchDataFromApi } from "../utils/api";

const UseFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchDataFromApi(url)
      .then((resp) => {
        setData(resp);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  }, [url]);
  return { data, loading };
};

export default UseFetch;


import { useState, useEffect } from "react";

export default function useJsonFetch(url) {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
  
    setLoading(true);
     try {
      fetch(url)
      .then((response) => response.json())
      .then((data) => setData(data))
    }
    catch(error){
      setError(error);
      console.log(error);
    }
    setLoading(false);
  

  }, [url]);

  return ([data, loading, error]);
};
import { useState } from "react";

export const useApi = (apiFunc) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const request = async (...args) => {
    let response;

    setLoading(true);

    try {
      const result = await apiFunc(...args);
      setData(result.data);
      response = result.data;
    } catch (error) {
      setError(error.response.data.message || "Unexpected Error!");
      response = error.response.data;
    } finally {
      setLoading(false);
    }

    return response;
  };

  return {
    data,
    error,
    loading,
    request,
  };
};

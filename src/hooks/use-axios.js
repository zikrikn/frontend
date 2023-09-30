import { useState, useEffect } from "react";
import axiosInstance from "@/api/axios-instance";

export const useAxios = (method, url, autoFetch, config = {}) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const fetching = async (data = {}) => {
    try {
      setIsLoading(true);

      const response = await axiosInstance.request({
        method,
        url,
        ...config,
        ...data,
      });
      setResponse(response.data);
      return response.data;
    } catch (err) {
      setError(err);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (autoFetch) fetching();
  }, []);

  return [isLoading, fetching, response, error];
};

import { useEffect, useState, useCallback } from "react";
import { AxiosError } from "axios";
import type { AxiosResponse } from "axios";
import { useAxios } from "./useAxios";

export function useGet<T>(path: string, setData: (data: T) => void) {
  const axios = useAxios();
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(true);

  const handleSuccess = useCallback(
    (res: AxiosResponse<T>, cancelled: boolean) => {
      if (!cancelled) {
        setData(res.data);
        setLoading(false);
      }
    },
    [setData],
  );

  const handleError = useCallback((err: unknown, cancelled: boolean) => {
    if (!cancelled) {
      const error = err instanceof AxiosError ? err : new Error(String(err));
      setError(error);
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    let cancelled = false;
    axios.get<T>(path).then(
      (res) => handleSuccess(res, cancelled),
      (err) => handleError(err, cancelled),
    );
    return () => {
      cancelled = true;
    };
  }, [axios, path, handleSuccess, handleError]);

  return { error, loading };
}

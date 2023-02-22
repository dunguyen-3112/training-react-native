import { API_ENDPOINT, ROUTES } from '@constants';
import { IFetchState } from '@types';
import { useEffect, useState } from 'react';
import axios, { AxiosError } from 'axios';

function useFetch<T>({ url }: { url: ROUTES }): IFetchState<T> {
  const [error, setError] = useState<AxiosError | null>(null);
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_ENDPOINT}/${url}`);
        setData(response.data);
        setIsLoading(false);
        setError(null);
      } catch (error: AxiosError | null | undefined | any) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { isLoading, data, error };
}

export default useFetch;

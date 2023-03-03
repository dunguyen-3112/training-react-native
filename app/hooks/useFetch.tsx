import { useEffect, useState } from 'react';

import { API_ENDPOINT, ROUTES } from '@constants';
import { IFetchState } from '@types';

function useFetch<T>({ url }: { url: ROUTES }): IFetchState<T> {
  const [error, setError] = useState<Error | null>(null);
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${API_ENDPOINT}/${url}`);
        const data: T = await response.json();
        setData(data);
        setIsLoading(false);
        setError(null);
      } catch (error) {
        setError(new Error('Failed to fetch data'));
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, error, isLoading };
}

export default useFetch;

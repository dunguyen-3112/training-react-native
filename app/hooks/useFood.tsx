import { useCallback, useEffect, useState } from 'react';

import { IFood } from '@types';
import { fetchData } from '@utils';
import { API_FOOD } from '@constants';

export interface FoodOptions {
  name?: string;
  categories?: number[];
}

interface useFoodInit {
  id?: number;
  isFavorite?: boolean;
}

export function useFood<T>(initValue?: useFoodInit) {
  const { id, isFavorite = false } = initValue || {};
  const [reload, setReload] = useState(false);
  const [data, setData] = useState<T>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error>();
  const [query, setQuery] = useState<FoodOptions>();

  useEffect(() => {
    async function getData() {
      setLoading(true);
      try {
        let url;
        if (id) {
          url = `${API_FOOD}/${id}`;
        } else if (query === undefined) {
          url = API_FOOD;
        } else {
          const { categories, name } = query;

          let _url = API_FOOD;
          name && (_url += `?name_like=${name}`);

          let newUrl = '';
          if (categories) {
            newUrl = _url.includes('?') ? '&' : '?';
            categories.forEach((item) => {
              newUrl += `category=${item}&`;
            });
          }
          url = _url + newUrl.substring(0, newUrl.length - 1);
        }
        if (isFavorite)
          url = url + (url.includes('?') ? '&' : '?') + 'favorite=1';
        const data = await fetchData<T>({ url });
        setData(data);
      } catch (error) {
        setError(new Error('Failed to fetch data.'));
      }
      setLoading(false);
    }
    getData();
  }, [id, isFavorite, query, reload]);

  async function addFavorite(id: number) {
    try {
      const food = await fetchData<IFood>({ url: `${API_FOOD}/${id}` });
      if (food && food.favorite === 0) {
        const newFood = await fetchData<IFood>({
          url: `foods/${id}`,
          method: 'PUT',
          body: { ...food, favorite: 1 },
        });
        return newFood;
      }
    } catch (error) {
      setError(new Error('Failed to fetch data.'));
    }
  }

  async function removeFavorite(id: number) {
    try {
      const food = await fetchData<IFood>({ url: `${API_FOOD}/${id}` });
      if (food && food.favorite === 1) {
        const newFood = await fetchData<IFood>({
          url: `foods/${id}`,
          method: 'PUT',
          body: { ...food, favorite: 0 },
        });
        return newFood;
      }
    } catch (error) {
      setError(new Error('Failed to fetch data.'));
    }
  }

  const fetch = useCallback(() => setReload((prev) => !prev), []);

  return {
    data,
    loading,
    error,
    query,
    setQuery,
    fetch,
    addFavorite,
    removeFavorite,
  };
}

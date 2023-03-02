import { ICategory, IFood } from '@types';
import { fetchData } from '@utils';
import { useCallback, useEffect, useMemo, useState } from 'react';

interface Options {
  name?: string;
  category?: ICategory;
}

const useFoods = () => {
  const [reload, setReload] = useState(false);
  const [foods, setFoods] = useState<IFood[]>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState('foods');

  useEffect(() => {
    setLoading(true);
    fetchData<IFood[]>({ url: query })
      .then((data) => {
        setFoods(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [query, reload]);

  const fetch = useCallback(() => setReload((prev) => !prev), []);

  const search = useCallback((options: Options) => {
    const { category, name } = options;
    let query = 'foods';
    name && (query += `?name_like=${name}`);
    category &&
      (query += `${query.includes('?') ? '&' : '?'}category=${category.id}`);
    setQuery(query);
  }, []);

  return { foods, loading, error, setQuery: search, fetch, query };
};

const useFood = (id: number) => {
  const [reload, setReload] = useState(false);
  const [food, setFood] = useState<IFood>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const url = useMemo(() => `foods/${id}`, [id]);

  useEffect(() => {
    setLoading(true);
    fetchData<IFood>({ url })
      .then((data) => {
        setFood(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [url, reload]);

  const fetch = useCallback(() => setReload((prev) => !prev), []);

  return { food, loading, error, fetch };
};

const useFoodFavorite = () => {
  const [reload, setReload] = useState(false);
  const [data, setData] = useState<IFood[]>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState('foods?favorite=1');

  async function addFavorite(id: number) {
    const food = await fetchData<IFood>({ url: `${query}&id=${id}` });

    const status = await fetchData<IFood>({
      url: `foods/${id}`,
      method: 'PUT',
      body: { ...food, favorite: 1 },
    })
      .then(() => true)
      .catch(() => false);
    setLoading(true);

    return status;
  }

  const fetch = useCallback(() => setReload((prev) => !prev), []);

  async function removeFavorite(id: number) {
    const food = data?.find((item) => item.id === id);

    const status = await fetchData<IFood>({
      url: `foods/${id}`,
      method: 'PUT',
      body: { id, ...food, favorite: 0 },
    })
      .then(() => true)
      .catch(() => false);
    setLoading(true);

    return status;
  }

  const handleSearch = useCallback((text: string) => {
    setQuery(`foods?favorite=1&name_like=${text}`);
  }, []);

  useEffect(() => {
    setLoading(true);
    fetchData<IFood[]>({
      url: query,
      method: 'GET',
    })
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [reload, query]);

  return {
    data,
    loading,
    error,
    addFavorite,
    removeFavorite,
    fetch,
    search: handleSearch,
  };
};

export { useFoods, useFood, useFoodFavorite };

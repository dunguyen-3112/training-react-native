import { ICategory, IFood } from '@types';
import { fetchData } from '@utils';
import { useCallback, useEffect, useMemo, useState } from 'react';

interface Options {
  name?: string;
  category?: ICategory;
}

const useFoods = (options?: Options) => {
  const [reload, setReload] = useState(false);
  const [foods, setFoods] = useState<IFood[]>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const url = useMemo(() => {
    if (options) {
      const { name, category } = options;
      return `foods?${
        name
          ? `name_like=${name}` + `${category ? `&category=${category}` : ''}`
          : `${category ? `&category=${category}` : 'foods'}`
      }`;
    }
    return `foods`;
  }, [options]);

  useEffect(() => {
    setLoading(true);
    fetchData<IFood[]>({ url })
      .then((data) => {
        setFoods(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [url, reload]);

  const fetch = useCallback(() => setReload((prev) => !prev), []);

  return { foods, loading, error, fetch };
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
  const [dataF, setDataF] = useState<IFood[]>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function addFavorite(id: number) {
    const food = data?.find((item) => item.id === id);

    const status = await fetchData<IFood>({
      url: `foods/${id}`,
      method: 'PUT',
      body: { id, ...food, favorite: 1 },
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

  useEffect(() => {
    setLoading(true);
    fetchData<IFood[]>({
      url: `foods`,
      method: 'GET',
    })
      .then((data) => {
        setData(data);
        const fData = data.filter((food) => food.favorite === 1);
        setDataF(fData);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [reload]);

  return { data: dataF, loading, error, addFavorite, removeFavorite, fetch };
};

export { useFoods, useFood, useFoodFavorite };

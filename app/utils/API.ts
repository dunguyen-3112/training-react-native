import { API_ENDPOINT } from '@constants';

export type METHOD = 'GET' | 'POST' | 'PUT' | 'DELETE';

export interface Options<T> {
  method?: METHOD;
  body?: T;
  url: string;
}
export async function fetchData<T>(options: Options<T>) {
  const { body, method = 'GET', url } = options;
  let response, data: T;
  switch (method) {
    case 'GET':
      response = await fetch(`${API_ENDPOINT}/${url}`, { method });
      data = await response.json();
      break;

    case 'POST':
      response = await fetch(`${API_ENDPOINT}/${url}`, {
        method,
        body: JSON.stringify(body),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      data = await response.json();
      break;
    case 'PUT':
      response = await fetch(`${API_ENDPOINT}/${url}`, {
        method,
        body: JSON.stringify(body),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      data = await response.json();
      break;
    case 'DELETE':
      response = await fetch(`${API_ENDPOINT}/${url}`, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
      });
      data = await response.json();
      break;
  }
  return data;
}

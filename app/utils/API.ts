import { API_ENDPOINT } from './../constants/API';
import { ROUTES } from '@constants';

type METHOD = 'GET' | 'POST' | 'PUT' | 'DELETE';
export async function fetchData<T>({
  url,
  options,
}: {
  url: ROUTES;
  options: {
    method: METHOD;
    body: T;
  };
}) {
  const { body, method } = options;
  let response, data: T;
  try {
    switch (method) {
      case 'GET':
        response = await fetch(`${API_ENDPOINT}/${url}`, { method });
        data = await response.json();
        return data;

      case 'POST':
        response = await fetch(`${API_ENDPOINT}/${url}`, {
          method,
          body: JSON.stringify(body),
          headers: {
            'Content-Type': 'application/json',
          },
        });
        data = await response.json();
        return data;
      case 'PUT':
        response = await fetch(`${API_ENDPOINT}/${url}`, {
          method,
          body: JSON.stringify(body),
          headers: {
            'Content-Type': 'application/json',
          },
        });
        data = await response.json();
        return data;
        break;
      case 'DELETE':
        response = await fetch(`${API_ENDPOINT}/${url}`, {
          method,
          headers: {
            'Content-Type': 'application/json',
          },
        });
        data = await response.json();
        return data;

      default:
        throw new Error('Invalid method');
    }
  } catch (error) {
    throw new Error('Failed to connect to server!');
  }
}

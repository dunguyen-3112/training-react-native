import { AxiosError } from 'axios';

export type IInfo = {
  id: number;
  name: string;
};

export interface IFetchState<T> {
  isLoading: boolean;
  data: T | null;
  error: AxiosError | null;
}

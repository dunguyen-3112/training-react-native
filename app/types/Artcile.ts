import { COLOR } from '@constants';
import { IInfo } from './common';

export interface IArtcile extends IInfo {
  image: string;
  title: string;
  color: COLOR;
}

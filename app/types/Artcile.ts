import { COLOR } from '@constants';
import { IInfo } from './common';

export interface IArtcile extends IInfo {
  imgUrl: string;
  color: COLOR;
}

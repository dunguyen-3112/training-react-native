import { COLOR } from '@constants';
import { TCategoryName } from './Category';
import { IInfo } from './common';

export type Ingredients = 'Bread' | 'Meat (Chicken)' | 'Cacumber' | 'Onion';
export type Categories =
  | 'Fast Food'
  | 'Breakfast'
  | 'Lunch'
  | 'Dinner'
  | 'Fruits'
  | 'Vegetables'
  | 'Dry fruits'
  | 'Non-Veg'
  | 'Greenish';

export type TIngredient = IInfo & {
  name: Ingredients;
  value: number;
};

export type TNutritional = {
  calories: number;
  fat: number;
  carbs: number;
  protein: number;
};

export interface IFood extends IInfo {
  category?: TCategoryName;
  weight?: number;
  color?: COLOR;
  desc?: string;
  imgUrl?: string;
  favorite?: 0 | 1;
  nutritional?: TNutritional;
  ingredients?: TIngredient[];
}

import { COLOR } from '@constants';
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

export type TCategory = IInfo & {
  name: Categories;
};

export type TNutritional = {
  calories: number;
  fat: number;
  carbs: number;
  protein: number;
};

export interface IFood extends IInfo {
  category: TCategory;
  weight: number;
  color?: COLOR;
  desc?: string;
  imgUrl: string;
  nutritional: TNutritional;
  ingredients: TIngredient[];
}

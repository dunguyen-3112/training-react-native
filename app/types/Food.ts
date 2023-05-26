import { COLOR } from '@constants';
import { IInfo } from './common';

type Ingredients = 'Bread' | 'Meat (Chicken)' | 'Cacumber' | 'Onion';

type Categories =
  | 'Fast Food'
  | 'Breakfast'
  | 'Lunch'
  | 'Dinner'
  | 'Fruits'
  | 'Vegetables'
  | 'Dry fruits'
  | 'Non-Veg'
  | 'Greenish';

interface ICategory {
  id: number;
  name?: Categories;
}

type TIngredient = IInfo & {
  name: Ingredients;
  value: number;
};

type TNutritional = {
  calories: number;
  fat: number;
  carbs: number;
  protein: number;
};

interface IArtcile extends IInfo {
  image: string;
  title: string;
  color: 'green' | 'secondary';
}

interface IFood extends IInfo {
  category?: number;
  weight?: number;
  color?: COLOR;
  desc?: string;
  imgUrl?: string;
  favorite?: 0 | 1;
  nutritional?: TNutritional;
  ingredients?: TIngredient[];
}

export {
  IFood,
  TNutritional,
  ICategory,
  TIngredient,
  Categories,
  Ingredients,
  IArtcile,
};

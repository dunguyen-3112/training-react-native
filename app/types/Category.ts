type TCategoryName =
  | 'Breakfast'
  | 'Dinner'
  | 'Dryfruits'
  | 'Fast Food'
  | 'Lunch'
  | 'Vegetables'
  | 'Non-Veg'
  | 'Greenich';

interface ICategory {
  id: number;
  name: TCategoryName;
}

export { TCategoryName, ICategory };

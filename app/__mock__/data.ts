import { IArtcile, IFood, TIngredient, TNutritional } from '@types';

export const MOCK_FOODS: IFood[] = [
  {
    id: 22,
    name: 'Pizza',
    weight: 200,
    ingredients: [
      {
        id: 1,
        name: 'Bread',
        value: 200,
      },
      {
        id: 2,
        name: 'Meat (Chicken)',
        value: 500,
      },
      {
        id: 3,
        name: 'Cacumber',
        value: 300,
      },
      {
        id: 4,
        name: 'Onion',
        value: 200,
      },
    ],
    nutritional: {
      calories: 100,
      carbs: 100,
      protein: 100,
      fat: 100,
    },
    category: 1,
    color: 'RED',
    imgUrl:
      'https://firebasestorage.googleapis.com/v0/b/react-my-example.appspot.com/o/a2.png?alt=media&token=abe65f60-e23e-48d9-a2c8-13c9e3ccb921',
    desc: "Note that in TypeScript, you can define the return type of the function using a colon (:) after the function parameter list. In this example, we don't explicitly define the return type, but TypeScript will infer that the return type is a Promise that resolves to a JSON object.",
    favorite: 0,
  },
  {
    id: 1,
    name: 'Chicken 1',
    weight: 400,
    color: 'RED',
    desc: "Note that in TypeScript, you can define the return type of the function using a colon after the function parameter list. In this example, we don't explicitly define the return type, but TypeScript will infer that the return type is a Promise that resolves to a JSON object.",
    nutritional: {
      calories: 200,
      carbs: 100,
      fat: 100,
      protein: 100,
    },
    category: 7,
    ingredients: [
      {
        id: 1,
        name: 'Bread',
        value: 200,
      },
      {
        id: 2,
        name: 'Meat (Chicken)',
        value: 500,
      },
      {
        id: 3,
        name: 'Cacumber',
        value: 300,
      },
      {
        id: 4,
        name: 'Onion',
        value: 200,
      },
    ],
    imgUrl:
      'https://firebasestorage.googleapis.com/v0/b/react-my-example.appspot.com/o/a2.png?alt=media&token=abe65f60-e23e-48d9-a2c8-13c9e3ccb921',
    favorite: 1,
  },
  {
    id: 4,
    desc: "Note that in TypeScript, you can define the return type of the function using a colon (:) after the function parameter list. In this example, we don't explicitly define the return type, but TypeScript will infer that the return type is a Promise that resolves to a JSON object.",
    name: 'Fish',
    weight: 400,
    color: 'YELLOW',
    nutritional: {
      calories: 200,
      carbs: 100,
      fat: 100,
      protein: 100,
    },
    category: 3,
    ingredients: [
      {
        id: 1,
        name: 'Bread',
        value: 200,
      },
      {
        id: 2,
        name: 'Meat (Chicken)',
        value: 500,
      },
      {
        id: 3,
        name: 'Cacumber',
        value: 300,
      },
      {
        id: 4,
        name: 'Onion',
        value: 200,
      },
    ],
    imgUrl:
      'https://firebasestorage.googleapis.com/v0/b/react-my-example.appspot.com/o/a5.png?alt=media&token=af718429-aabf-4329-91e5-439cff65e187',
    favorite: 0,
  },
  {
    id: 5,
    name: 'Bacon',
    weight: 400,
    color: 'GREEN',
    desc: "Note that in TypeScript, you can define the return type of the function using a colon (:) after the function parameter list. In this example, we don't explicitly define the return type, but TypeScript will infer that the return type is a Promise that resolves to a JSON object.",
    nutritional: {
      calories: 200,
      carbs: 100,
      fat: 100,
      protein: 100,
    },
    category: 3,
    ingredients: [
      {
        id: 1,
        name: 'Bread',
        value: 200,
      },
      {
        id: 2,
        name: 'Meat (Chicken)',
        value: 500,
      },
      {
        id: 3,
        name: 'Cacumber',
        value: 300,
      },
      {
        id: 4,
        name: 'Onion',
        value: 200,
      },
    ],
    imgUrl:
      'https://firebasestorage.googleapis.com/v0/b/react-my-example.appspot.com/o/a6.png?alt=media&token=e16ecdc8-e597-464d-90ce-0c6b64e0c5a8',
    favorite: 1,
  },
  {
    id: 6,
    name: 'Chicken 2',
    weight: 400,
    color: 'RED',
    desc: "Note that in TypeScript, you can define the return type of the function using a colon (:) after the function parameter list. In this example, we don't explicitly define the return type, but TypeScript will infer that the return type is a Promise that resolves to a JSON object.",
    nutritional: {
      calories: 200,
      carbs: 100,
      fat: 100,
      protein: 100,
    },
    favorite: 0,
    category: 2,
    ingredients: [
      {
        id: 1,
        name: 'Bread',
        value: 200,
      },
      {
        id: 2,
        name: 'Meat (Chicken)',
        value: 500,
      },
      {
        id: 3,
        name: 'Cacumber',
        value: 300,
      },
      {
        id: 4,
        name: 'Onion',
        value: 200,
      },
    ],
    imgUrl:
      'https://firebasestorage.googleapis.com/v0/b/react-my-example.appspot.com/o/a2.png?alt=media&token=abe65f60-e23e-48d9-a2c8-13c9e3ccb921',
  },
  {
    id: 7,
    desc: "Note that in TypeScript, you can define the return type of the function using a colon (:) after the function parameter list. In this example, we don't explicitly define the return type, but TypeScript will infer that the return type is a Promise that resolves to a JSON object.",
    name: 'Beef',
    weight: 400,
    color: 'GREEN',
    nutritional: {
      calories: 200,
      carbs: 100,
      fat: 100,
      protein: 100,
    },
    category: 2,
    ingredients: [
      {
        id: 1,
        name: 'Bread',
        value: 200,
      },
      {
        id: 2,
        name: 'Meat (Chicken)',
        value: 500,
      },
      {
        id: 3,
        name: 'Cacumber',
        value: 300,
      },
      {
        id: 4,
        name: 'Onion',
        value: 200,
      },
    ],
    imgUrl:
      'https://firebasestorage.googleapis.com/v0/b/react-my-example.appspot.com/o/a6.png?alt=media&token=e16ecdc8-e597-464d-90ce-0c6b64e0c5a8',
    favorite: 0,
  },
  {
    id: 8,
    desc: "Note that in TypeScript, you can define the return type of the function using a colon (:) after the function parameter list. In this example, we don't explicitly define the return type, but TypeScript will infer that the return type is a Promise that resolves to a JSON object.",
    name: 'Pork',
    weight: 400,
    color: 'RED',
    nutritional: {
      calories: 200,
      carbs: 100,
      fat: 100,
      protein: 100,
    },
    category: 3,
    ingredients: [
      {
        id: 1,
        name: 'Bread',
        value: 200,
      },
      {
        id: 2,
        name: 'Meat (Chicken)',
        value: 500,
      },
      {
        id: 3,
        name: 'Cacumber',
        value: 300,
      },
      {
        id: 4,
        name: 'Onion',
        value: 200,
      },
    ],
    imgUrl:
      'https://firebasestorage.googleapis.com/v0/b/react-my-example.appspot.com/o/a2.png?alt=media&token=abe65f60-e23e-48d9-a2c8-13c9e3ccb921',
    favorite: 0,
  },
  {
    id: 9,
    desc: "Note that in TypeScript, you can define the return type of the function using a colon (:) after the function parameter list. In this example, we don't explicitly define the return type, but TypeScript will infer that the return type is a Promise that resolves to a JSON object.",
    name: 'Fish 2',
    weight: 400,
    color: 'ORANGE',
    nutritional: {
      calories: 200,
      carbs: 100,
      fat: 100,
      protein: 100,
    },
    category: 3,
    ingredients: [
      {
        id: 1,
        name: 'Bread',
        value: 200,
      },
      {
        id: 2,
        name: 'Meat (Chicken)',
        value: 500,
      },
      {
        id: 3,
        name: 'Cacumber',
        value: 300,
      },
      {
        id: 4,
        name: 'Onion',
        value: 200,
      },
    ],
    imgUrl:
      'https://firebasestorage.googleapis.com/v0/b/react-my-example.appspot.com/o/a2.png?alt=media&token=abe65f60-e23e-48d9-a2c8-13c9e3ccb921',
    favorite: 0,
  },
];

export const MOCK_ACTICLES: IArtcile[] = [
  {
    id: 1,
    title: 'The pros and cons of fast food.',
    name: 'Article',
    color: 'green',
    image:
      'https://firebasestorage.googleapis.com/v0/b/react-my-example.appspot.com/o/Group%2036209.png?alt=media&token=57ef4bf8-c2ec-4fb4-927d-1cf16b4bfaaa',
  },
  {
    id: 2,
    title: 'The pros and cons of vegetable',
    color: 'secondary',
    name: 'Article',
    image:
      'https://firebasestorage.googleapis.com/v0/b/react-my-example.appspot.com/o/image1.png?alt=media&token=45bbf690-ea27-466c-b025-67e6fc7aed6a',
  },
];

export const MOCK_INGREDIENTS: TIngredient[] = [
  {
    id: 1,
    value: 200,
    name: 'Bread',
  },
  {
    id: 2,
    name: 'Meat (Chicken)',
    value: 200,
  },
  {
    id: 3,
    name: 'Cacumber',
    value: 200,
  },
  {
    id: 4,
    name: 'Onion',
    value: 200,
  },
];

export const MOCK_NUTRITIONAL: TNutritional[] = [
  {
    calories: 12,
    carbs: 105,
    protein: 10,
    fat: 18,
  },
];

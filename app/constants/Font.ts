export const FONT_SIZES = {
  xxl: 32,
  'xxl-4': 24,
  'xxl-3': 23,
  'xxl-2': 22,
  'xxl-0': 20,
  'xl-9': 19,
  'xl-7': 17,
  'xl-6': 16,
  'xl-5': 15,
  m: 14,
  ms: 12,
  'ms-3': 13,
  'ms-1': 11,
  'ms-0': 10,
};

export type FONT_SIZE_TYPE =
  | 'xxl'
  | 'xxl-4'
  | 'xxl-3'
  | 'xxl-2'
  | 'xxl-0'
  | 'xl-9'
  | 'xl-7'
  | 'xl-6'
  | 'xl-5'
  | 'm'
  | 'ms'
  | 'ms-3'
  | 'ms-1'
  | 'ms-0';

const FONT_XXB: FONT_WEIGHT_TYPE = '800';
const FONT_XB: FONT_WEIGHT_TYPE = '700';
const FONT_B: FONT_WEIGHT_TYPE = '600';
const FONT_XM: FONT_WEIGHT_TYPE = '500';
const FONT_M: FONT_WEIGHT_TYPE = '400';

export const FONT_WEIGHTS = {
  xxb: FONT_XXB,
  xb: FONT_XB,
  b: FONT_B,
  xm: FONT_XM,
  m: FONT_M,
};

export type FONT_WEIGHT_TYPE = '800' | '700' | '600' | '500' | '400';

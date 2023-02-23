type size =
  | 'medium'
  | 'large'
  | 'small'
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15
  | 16
  | 17
  | 20
  | 22
  | 23
  | 24
  | 32;

type weight = '400' | '500' | '600' | '700' | '800';

type transform = 'uppercase' | 'lowercase' | 'none' | 'capitalize';

interface Font {
  fontSize?: size;
  fontWeight?: weight;
  textTransform?: transform;
}

export { Font };

type size =
  | 'medium'
  | 'large'
  | 'small'
  | 10
  | 12
  | 13
  | 14
  | 15
  | 16
  | 17
  | 20
  | 22
  | 23
  | 24;

type COLOR = 'white' | 'black' | 'orange' | 'green';

type weight = '400' | '500' | '600' | '800';

interface Font {
  fontSize: size;
  fontWeight: weight;
}

export { Font };

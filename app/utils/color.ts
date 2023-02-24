import { COLOR, COLORS } from '@constants';
export default function getColor(color: COLOR): string {
  switch (color) {
    case 'BLACK':
      return COLORS.BLACK;
    case 'DEFAULT':
      return COLORS.GRAY;
    case 'SECONDARY':
      return COLORS.SECONDARY;
    default:
      return COLORS.PRIMARY;
  }
}

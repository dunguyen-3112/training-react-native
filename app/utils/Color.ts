import { COLOR, COLORS } from '@constants';

function getColor(color: COLOR | string): string {
  switch (color) {
    case 'red':
      return COLORS.RED_COLOR;
    case 'green':
      return COLORS.GREEN_COLOR;
    case 'gray':
      return COLORS.GRAY_COLOR;
    case 'yellow':
      return COLORS.YELLOW_COLOR;
    case 'orange':
      return COLORS.ORANGE_COLOR;
    case 'purple':
      return COLORS.PURPLE_COLOR;
    case 'white':
      return COLORS.WHITE_COLOR;
    case 'black':
      return COLORS.BLACK_COLOR;
    case 'yellow_dark':
      return COLORS.YELLOW_DARK_COLOR;
    case 'default':
      return COLORS.TEXT_COLOR;

    default:
      return color;
  }
}

export { getColor };

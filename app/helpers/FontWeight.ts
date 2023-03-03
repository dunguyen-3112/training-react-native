export default function getFont(fontName: string) {
  switch (fontName) {
    case '400':
    case '500':
    case '600':
    case '700':
    case '800':
      return fontName;

    default:
      return '400';
  }
}

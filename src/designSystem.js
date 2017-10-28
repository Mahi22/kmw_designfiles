import processColor from './processColor';
import type { Color } from './processColor';

export const colors = {
  savla: '#767676',
  kala: '#484848',
  hot: '#FF5C5C',
  warm: '#FFBB44', //#FC642D
  cold: '#02A0D4',
  hirva: '#6AA423',
  goora: '#f4f4f4',
  pandra: '#ffffff'
};

const lineHeight = [56,36,28,24,22,18,8];
const typeSizes = [44,32,24,19,17,14,8];

export const spacing = 16;

const fontFamilies = {
  display: 'Avenir',
  body: 'Avenir',
};

const fontWeights = {
  regular: 'regular',
  bold: 'bold',
};

export const fonts = {
  'Title 1': {
    color: colors.kala,
    fontSize: typeSizes[0],
    fontFamily: fontFamilies.display,
    fontWeight: fontWeights.bold,
    lineHeight: lineHeight[0],
  },
  'Title 2': {
    color: colors.kala,
    fontSize: typeSizes[1],
    fontFamily: fontFamilies.display,
    fontWeight: fontWeights.bold,
    lineHeight: lineHeight[1],
  },
  'Title 3': {
    color: colors.kala,
    fontSize: typeSizes[2],
    fontFamily: fontFamilies.body,
    fontWeight: fontWeights.regular,
    lineHeight: lineHeight[2],
  },
  'Title 4': {
    color: colors.kala,
    fontSize: typeSizes[2],
    fontFamily: fontFamilies.body,
    fontWeight: fontWeights.bold,
    lineHeight: lineHeight[2],
  },
  'Large': {
    color: colors.kala,
    fontSize: typeSizes[3],
    fontFamily: fontFamilies.body,
    fontWeight: fontWeights.regular,
    lineHeight: lineHeight[3],
  },
  'Regular': {
    color: colors.kala,
    fontSize: typeSizes[4],
    fontFamily: fontFamilies.body,
    fontWeight: fontWeights.regular,
    lineHeight: lineHeight[4],
  },
  'Small': {
    color: colors.kala,
    fontSize: typeSizes[5],
    fontFamily: fontFamilies.body,
    fontWeight: fontWeights.regular,
    lineHeight: lineHeight[5],
  },
  'Micro': {
    color: colors.kala,
    fontSize: typeSizes[6],
    fontFamily: fontFamilies.body,
    fontWeight: fontWeights.bold,
    lineHeight: lineHeight[6],
  },
};

export default {
  colors: Object.keys(colors).reduce(
    (acc, name) => ({
      ...acc,
      [name]: processColor(colors[name]),
    }),
    {},
  ),
  fonts,
  spacing,
};

export type DesignSystem = {
  fonts: any,
  colors: { [key: string]: Color },
};

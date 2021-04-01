// NOTE: 1rem == 16px
export const Spacing = {
  auto: 'auto',
  none: '0',
  tiny: '.0625rem',
  xsmall: '.125rem',
  small: '.25rem',
  average: '.5rem',
  xaverage: '.75rem',
  medium: '1rem',
  big: '1.5rem',
  large: '2rem',
  xlarge: '3rem',
  xxlarge: '4rem',
  xxxlarge: '5rem'
}

export const ScreenSizes = {
  xs: '400px',
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px'
}

const defaultColors = {
  black: '#0B090D',
  white: '#F1F0F2',
  silver: '#D9D5D2',
  gray: '#3F3F40',
  green: '#408C2B',
  fireEngine: '#E31B23'
}

export const Colors = {
  ...defaultColors,
}

export const FontSize = {
  tiny: '.5rem',
  small: '.75rem',
  medium: '1rem',
  big: '1.25rem',
  large: '1.5rem',
  xlarge: '1.75rem',
  xxlarge: '2rem',
  xxxlarge: '2.5rem',
  huge: '3rem',
  xhuge: '4rem',
  xxhuge: '5rem',
  xxxhuge: '6rem'
}

export const BorderRadius = {
  none: '0',
  small: '.25rem',
  medium: '.5rem',
  large: '.75rem',
  xlarge: '1rem'
}

export default {
  Spacing,
  ScreenSizes,
  Colors,
  FontSize,
  BorderRadius
}

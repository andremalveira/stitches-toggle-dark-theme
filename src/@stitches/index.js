import { createStitches } from '@stitches/react';
import stitchesConfig from './stitches.config';
import darkThemeColors from './@darkTheme'

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  ...stitchesConfig
});

export const darkTheme = createTheme({
  ...darkThemeColors
});
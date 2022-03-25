import lightThemeColors from "./@lightTheme"

const stitchesConfig = {
  theme: {...lightThemeColors},
  media: {
    bp1: '(min-width: 480px)',
  },
  utils: {
    marginX: (value) => ({ marginLeft: value, marginRight: value }),
  },
}


export default stitchesConfig
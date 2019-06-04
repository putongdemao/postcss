module.exports = {
  plugins: {
    "postcss-px-to-viewport": {
      unitToConvert: "px",
      viewportWidth: 1920,
      unitPrecision: 5,
      viewportUnit: "vw",
      selectorBlackList: [".ignore", ".hairlines"],
      minPixelValue: 1,
      mediaQuery: false
    }
  }
};

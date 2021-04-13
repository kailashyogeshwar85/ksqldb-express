const CracoLessPlugin = require('craco-less');
const lightThemeVars = require('./src/styles/themes/light');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: lightThemeVars,
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};

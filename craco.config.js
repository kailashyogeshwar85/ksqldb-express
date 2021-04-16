const path = require('path')
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
    {
      plugin: CracoLessPlugin,
      options: {
          lessLoaderOptions: {
              lessOptions: {
                  modifyVars: lightThemeVars,
                  javascriptEnabled: true,
              },
          },
          modifyLessRule: function (lessRule, _context) {
              lessRule.test = /\.module\.less$/;
              lessRule.exclude = undefined;
              return lessRule;
          },
          cssLoaderOptions: {
              modules: { localIdentName: '[local]' },
          },
      },
  },
  ],
};

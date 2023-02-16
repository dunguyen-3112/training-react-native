module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'babel-plugin-module-resolver',
        {
          root: ['.'],
          alias: {
            '@components': './components',
            '@screens': './screens',
            '@assets': './assets',
            '@constants': './constants',
            '@layouts': './layouts',
          },
        },
      ],
    ],
  };
};

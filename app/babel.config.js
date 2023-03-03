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
            '@utils': './utils',
            '@types': './types',
            '@hooks': './hooks',
            '@navigation': './navigation',
            '@__mock__': './__mock__',
            '@helpers': './helpers',
          },
        },
      ],
    ],
  };
};

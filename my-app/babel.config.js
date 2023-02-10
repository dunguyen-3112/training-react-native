module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'babel-plugin-module-resolver',
        {
          root: ['.'],
          extensions: [
            '.js',
            '.ts',
            '.tsx',
            '.ios.js',
            '.android.js',
            '.stories.tsx',
          ],
          alias: {
            '@components': './components',
            '@.storybook': './.storybook',
          },
        },
      ],
    ],
  };
};

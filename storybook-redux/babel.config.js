module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo','module:metro-react-native-babel-preset'],
    plugins:[
      [
        'module-resolver',
        {
          root: ['.'],
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
          alias: {
          '@components':'./components',
          '@assets':'./assets'
          }
        }
      ]
    ]
  };
};

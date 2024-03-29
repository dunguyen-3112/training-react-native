module.exports = {
  expo: {
    name: 'app',
    slug: 'app',
    version: '1.0.0',
    orientation: 'portrait',
    icon: './assets/icons/icon.png',
    userInterfaceStyle: 'light',
    splash: {
      image: './assets/icons/splash.png',
      resizeMode: 'contain',
      backgroundColor: '#ffffff',
    },
    updates: {
      fallbackToCacheTimeout: 0,
    },
    assetBundlePatterns: ['**/*'],
    ios: {
      supportsTablet: true,
    },
    android: {
      adaptiveIcon: {
        foregroundImage: './assets/icons/adaptive-icon.png',
        backgroundColor: '#FFFFFF',
      },
    },
    web: {
      favicon: './assets/icons/favicon.png',
    },
    extra: {
      ip: process.env.IP,
      storybook: false,
    },
  },
};

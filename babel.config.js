module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
          alias: {
            '@components': './src/components',
            '@constatnts': './src/constatnts',
            '@contexts': './src/contexts',
            '@screens': './src/screens',
            '@theme': './src/theme',
            '@types': './src/types/*',
            '@utils': './src/utils',
          },
        },
      ],
    ],
  }
}

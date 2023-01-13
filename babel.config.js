module.exports = {
  presets: [
    'module:metro-react-native-babel-preset',
    [
      '@babel/preset-typescript',
      {
        onlyRemoveTypeImports: true
      }
    ]
  ],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          '~': './src'
        }
      }
    ],
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    'babel-plugin-parameter-decorator'
  ]
}

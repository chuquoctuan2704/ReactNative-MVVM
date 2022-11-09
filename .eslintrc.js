module.exports = {
  root: true,
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
  globals: {
    JSX: true,
  },
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module', // Allows for the use of imports
    project: './tsconfig.json', // Tell location of tsconfig.json. This is required for type-relative rules
  },
  plugins: ['@typescript-eslint'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'no-undef': 'off',
      },
    },
  ],
  rules: {
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
    semi: ['error', 'never'],
  },
}

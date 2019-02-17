module.exports = {
  extends: [
    'airbnb',
    'plugin:react/recommended',
    'plugin:flowtype/recommended',
    'prettier',
    'prettier/react',
    'prettier/flowtype',
  ],
  plugins: ['react', 'flowtype', 'prettier'],
  parserOptions: {
    ecmaVersion: 2016,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  env: {
    es6: true,
    browser: true,
    jest: true
  },
  rules: {
    'consistent-return': 1,
    'import/no-unresolved': 1,
    'import/prefer-default-export': 0,
    'no-case-declarations': 1,
    'no-confusing-arrow': 0,
    'no-console': 0,
    'no-param-reassign': 0,
    'no-return-assign': 1,
    'no-shadow': 1,
    'padded-blocks': 0,
    'prettier/prettier': ['error', { singleQuote: true, parser: 'flow' }],
    'quote-props': 1,
    'react/destructuring-assignment': 0,
    'react/jsx-filename-extension': 0,
    'react/jsx-no-bind': 1,
    'react/no-multi-comp': 1,
    'react/prefer-stateless-function': 1,
    "react/prop-types": 0,
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: [
          '.js',
          '.jsx',
          '.json'
        ]
      }
    }
  }
};

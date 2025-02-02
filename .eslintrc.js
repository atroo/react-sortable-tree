module.exports = {
  extends: ['eslint-config-airbnb', 'prettier', 'prettier/react'],
  parser: 'babel-eslint',
  env: {
    browser: true,
    jest: true,
  },
  rules: {
    'import/no-cycle': ['error', { maxDepth: Infinity }],
    'no-unused-vars': 0,
    'react/no-find-dom-node': 0,
    'no-undef': 0,
    'react/destructuring-assignment': 0,
    'react/jsx-filename-extension': 0,
    'react/prefer-stateless-function': 0,
    'react/no-did-mount-set-state': 0,
    'react/sort-comp': 0,
    'react/jsx-props-no-spreading': 0,
    'react/prop-types': 0,
    'no-shadow': 0,
    'jsx-a11y/label-has-associated-control': 0,
  },
};

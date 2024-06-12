module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
    'cypress/globals': true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'airbnb',
    'airbnb-base',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:cypress/recommended' // Add the Cypress recommended configuration
  ],
  overrides: [
    {
      files: ['*.js', '*.jsx'],
      env: {
        'cypress/globals': true // Ensure Cypress globals are recognized in JavaScript files
      }
    }
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  settings: {
    react: {
      version: '18.2'
    }
  },
  plugins: ['react-refresh', 'cypress'],
  rules: {
    'no-alert': 'off',
    'react/prop-types': 'off',
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'react/jsx-props-no-spreading': 'off',
    'comma-dangle': 'off',
    'react/jsx-no-target-blank': 'off',
    'linebreak-style': 'off',
    'eol-last': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'no-trailing-spaces': 'off', 
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true }
    ]
  }
};

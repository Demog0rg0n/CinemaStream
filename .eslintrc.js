export default {
    env: {
        node: true,
        browser: true,
        es2021: true,
    },
    settings: {
        react: {
            version: "detect" // Автоматическое определение версии React
        }
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:jsx-a11y/recommended',
        "plugin:react/jsx-runtime",
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true, // Поддержка JSX
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['react', 'react-hooks'],
    rules: {
        "react/jsx-uses-react": "off",
        "react/react-in-jsx-scope": "off",
        'react/prop-types': 'off', // Отключение проверки типов через PropTypes, если вы используете TypeScript
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx", ",ts"] }], //should add ".ts" if typescript project
    },

    

};
  
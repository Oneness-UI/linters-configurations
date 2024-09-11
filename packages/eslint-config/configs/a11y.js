module.exports = {
    extends: ['plugin:jsx-a11y/recommended'],
    plugins: ['jsx-a11y'],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
    },
    rules: {
        'jsx-a11y/no-aria-hidden-on-focusable': 2,
        'jsx-a11y/anchor-is-valid': 0,
    },
};

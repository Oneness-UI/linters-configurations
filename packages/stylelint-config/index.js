module.exports = {
    plugins: ['stylelint-scss'],
    customSyntax: require('postcss-scss'),
    rules: {
        'color-no-invalid-hex': true,
        'unit-no-unknown': true,
        'media-feature-name-no-unknown': true,
        'no-unknown-animations': true,
        'color-named': 'never',
        'font-family-no-duplicate-names': true,
        'function-calc-no-unspaced-operator': true,
        'function-linear-gradient-no-nonstandard-direction': true,
        'string-no-newline': true,
        'value-no-vendor-prefix': true,
        'selector-pseudo-class-no-unknown': true,
        'selector-pseudo-element-no-unknown': true,
        'selector-type-no-unknown': true,
        'property-no-vendor-prefix': true,
        'shorthand-property-no-redundant-values': true,
        'property-no-unknown': true,
        'declaration-block-no-duplicate-properties': true,
        'declaration-block-no-redundant-longhand-properties': true,
        'declaration-block-no-shorthand-property-overrides': true,
        'declaration-no-important': true,
        'selector-max-id': 1,
        'selector-max-universal': 1,
        'declaration-block-single-line-max-declarations': 1,
        'selector-no-vendor-prefix': true,
        'media-feature-name-no-vendor-prefix': true,
        'at-rule-no-vendor-prefix': true,
        'at-rule-no-unknown': null,
        'value-keyword-case': ['lower', {camelCaseSvgKeywords: true}],
        'selector-type-case': 'lower',
        'rule-empty-line-before': ['always', {ignore: ['inside-block']}],
        'at-rule-empty-line-before': [
            'always',
            {
                except: ['blockless-after-same-name-blockless'],
                ignore: ['inside-block'],
            },
        ],
        'scss/at-rule-no-unknown': true,
    },
};

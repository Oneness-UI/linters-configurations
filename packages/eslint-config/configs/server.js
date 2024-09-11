module.exports = {
    plugins: ['security'],
    env: {
        node: true,
    },
    rules: {
        'global-require': 1,
        'security/detect-buffer-noassert': 2,
        'security/detect-child-process': 2,
        'security/detect-disable-mustache-escape': 2,
        'security/detect-eval-with-expression': 2,
        'security/detect-new-buffer': 2,
        'security/detect-no-csrf-before-method-override': 2,
        'security/detect-non-literal-regexp': 2,
        'security/detect-non-literal-require': 2,
        'security/detect-possible-timing-attacks': 2,
        'security/detect-pseudoRandomBytes': 2,
        'security/detect-unsafe-regex': 2,
    },
};
